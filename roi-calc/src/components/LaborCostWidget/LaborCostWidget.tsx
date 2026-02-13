'use client';
import { JumboCard } from '@jumbo/components';
import { useRoiLocale } from '@/components/RoiLocale';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import {
  Box,
  CardActions,
  Divider,
  InputAdornment,
  MenuItem,
  Slider,
  Tab,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';

type PriceBand = {
  lowest: number;
  highest: number;
  average_range: {
    min: number;
    max: number;
  };
};

type PriceData = {
  price_per_sqft: PriceBand;
  price_per_hour: PriceBand;
};

type CustomFrequencyUnit = 'week' | 'month' | 'year';

interface LaborCostWidgetProps {
  priceData: PriceData;
  onCostPerYearChange?: (value: number) => void;
}

function LaborCostWidget({ priceData, onCostPerYearChange }: LaborCostWidgetProps) {
  const { locale } = useRoiLocale();
  const isZh = locale === 'zh-CN';
  const [tabValue, setTabValue] = React.useState('area');

  const [hourlyCost, setHourlyCost] = React.useState(
    priceData.price_per_hour.average_range.min
  );
  const [hourPerDay, setHourPerDay] = React.useState(7);
  const [hourlyFrequencyPerMonth, setHourlyFrequencyPerMonth] =
    React.useState(10);

  const [areaCost, setAreaCost] = React.useState(
    priceData.price_per_sqft.average_range.min
  );
  const [cleaningArea, setCleaningArea] = React.useState(10000);
  const [areaFrequencyPerMonth, setAreaFrequencyPerMonth] = React.useState(4);

  const [customCostPerVisit, setCustomCostPerVisit] = React.useState(0);
  const [customFrequency, setCustomFrequency] = React.useState(1);
  const [customFrequencyUnit, setCustomFrequencyUnit] =
    React.useState<CustomFrequencyUnit>('month');

  const hourlyCostPerYear =
    hourlyCost * hourPerDay * hourlyFrequencyPerMonth * 12;
  const areaCostPerYear = areaCost * cleaningArea * areaFrequencyPerMonth * 12;
  const customMultiplierByUnit = {
    week: 52,
    month: 12,
    year: 1,
  } as const;
  const customCostPerYear =
    customCostPerVisit *
    customFrequency *
    customMultiplierByUnit[customFrequencyUnit];

  const activeCostPerYear =
    tabValue === 'hourly'
      ? hourlyCostPerYear
      : tabValue === 'area'
        ? areaCostPerYear
        : customCostPerYear;

  React.useEffect(() => {
    onCostPerYearChange?.(activeCostPerYear);
  }, [activeCostPerYear, onCostPerYearChange]);

  const formatLocalizedCurrency = React.useCallback(
    (value: number) =>
      new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 2,
      }).format(value),
    [locale]
  );

  const text = isZh
    ? {
        title: '人工清洁成本输入',
        tabArea: '按面积',
        tabHourly: '按小时',
        tabCustom: '自定义',
        hourlyCost: '小时成本',
        perHour: '/ 小时',
        range: '范围',
        hourPerDay: '每天工时',
        hourUnit: '小时',
        cleaningFrequencyPerMonth: '每月清洁频次',
        areaCost: '面积成本',
        perSqft: '/ 平方英尺',
        cleaningArea: '清洁面积（平方英尺）',
        costPerCleaning: '每次清洁费用',
        frequency: '频次',
        unit: '单位',
        timesPerWeek: '次 / 周',
        timesPerMonth: '次 / 月',
        timesPerYear: '次 / 年',
        costPerYear: '年成本',
      }
    : {
        title: 'Labor Cost Input',
        tabArea: 'Area Cost',
        tabHourly: 'Hourly Cost',
        tabCustom: 'Custom Cost',
        hourlyCost: 'Hourly Cost',
        perHour: '/ hour',
        range: 'Range',
        hourPerDay: 'Hour per day',
        hourUnit: 'Hr',
        cleaningFrequencyPerMonth: 'Cleaning frequency / month',
        areaCost: 'Area Cost',
        perSqft: '/ sq ft',
        cleaningArea: 'Cleaning Area (sq ft)',
        costPerCleaning: 'Cost per cleaning',
        frequency: 'Frequency',
        unit: 'Unit',
        timesPerWeek: 'Times / Week',
        timesPerMonth: 'Times / Month',
        timesPerYear: 'Times / Year',
        costPerYear: 'Cost / Year',
      };

  return (
    <JumboCard
      title={text.title}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: { xs: 420, lg: 430 },
        height: { lg: 430 },
      }}
    >
      <TabContext value={tabValue}>
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>
          <TabList
            sx={{ borderBottom: 1, borderColor: 'divider' }}
            onChange={(event, nextValue) => setTabValue(nextValue)}
          >
            <Tab label={text.tabArea} value={'area'} sx={{ flex: '1 1 auto' }} />
            <Tab label={text.tabHourly} value={'hourly'} sx={{ flex: '1 1 auto' }} />
            <Tab label={text.tabCustom} value={'custom'} sx={{ flex: '1 1 auto' }} />
          </TabList>

          <Box sx={{ flex: 1, minHeight: 0 }}>
            <TabPanel value='hourly' sx={{ p: 3, height: '100%', overflowY: 'auto' }}>
              <Box sx={{ display: 'grid', gap: 2.5 }}>
                <Box>
                  <Typography variant='body2' mb={1}>
                    {text.hourlyCost}: {formatLocalizedCurrency(hourlyCost)} {text.perHour}
                  </Typography>
                  <Slider
                    value={hourlyCost}
                    min={priceData.price_per_hour.lowest}
                    max={priceData.price_per_hour.highest}
                    step={1}
                    onChange={(event, nextValue) =>
                      setHourlyCost(Array.isArray(nextValue) ? nextValue[0] : nextValue)
                    }
                  />
                  <Typography variant='caption' color='text.secondary'>
                    {text.range}:{' '}
                    {formatLocalizedCurrency(priceData.price_per_hour.lowest)} -{' '}
                    {formatLocalizedCurrency(priceData.price_per_hour.highest)}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant='body2' mb={1}>
                    {text.hourPerDay}: {hourPerDay} {text.hourUnit}
                  </Typography>
                  <Slider
                    value={hourPerDay}
                    min={1}
                    max={12}
                    step={1}
                    onChange={(event, nextValue) =>
                      setHourPerDay(Array.isArray(nextValue) ? nextValue[0] : nextValue)
                    }
                  />
                </Box>
                <Box>
                  <Typography variant='body2' mb={1}>
                    {text.cleaningFrequencyPerMonth}: {hourlyFrequencyPerMonth}
                  </Typography>
                  <Slider
                    value={hourlyFrequencyPerMonth}
                    min={1}
                    max={31}
                    step={1}
                    onChange={(event, nextValue) =>
                      setHourlyFrequencyPerMonth(
                        Array.isArray(nextValue) ? nextValue[0] : nextValue
                      )
                    }
                  />
                </Box>
              </Box>
            </TabPanel>

            <TabPanel value='area' sx={{ p: 3, height: '100%', overflowY: 'auto' }}>
              <Box sx={{ display: 'grid', gap: 2.5 }}>
                <Box>
                  <Typography variant='body2' mb={1}>
                    {text.areaCost}: {formatLocalizedCurrency(areaCost)} {text.perSqft}
                  </Typography>
                  <Slider
                    value={areaCost}
                    min={priceData.price_per_sqft.lowest}
                    max={priceData.price_per_sqft.highest}
                    step={0.01}
                    onChange={(event, nextValue) =>
                      setAreaCost(Array.isArray(nextValue) ? nextValue[0] : nextValue)
                    }
                  />
                  <Typography variant='caption' color='text.secondary'>
                    {text.range}:{' '}
                    {formatLocalizedCurrency(priceData.price_per_sqft.lowest)} -{' '}
                    {formatLocalizedCurrency(priceData.price_per_sqft.highest)}
                  </Typography>
                </Box>
                <TextField
                  label={text.cleaningArea}
                  type='number'
                  value={cleaningArea}
                  onChange={(event) =>
                    setCleaningArea(Math.max(0, Number(event.target.value) || 0))
                  }
                />
                <Box>
                  <Typography variant='body2' mb={1}>
                    {text.cleaningFrequencyPerMonth}: {areaFrequencyPerMonth}
                  </Typography>
                  <Slider
                    value={areaFrequencyPerMonth}
                    min={1}
                    max={31}
                    step={1}
                    onChange={(event, nextValue) =>
                      setAreaFrequencyPerMonth(
                        Array.isArray(nextValue) ? nextValue[0] : nextValue
                      )
                    }
                  />
                </Box>
              </Box>
            </TabPanel>

            <TabPanel value='custom' sx={{ p: 3, height: '100%', overflowY: 'auto' }}>
              <Box sx={{ display: 'grid', gap: 2.5 }}>
                <TextField
                  label={text.costPerCleaning}
                  type='number'
                  value={customCostPerVisit}
                  onChange={(event) =>
                    setCustomCostPerVisit(Math.max(0, Number(event.target.value) || 0))
                  }
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>$</InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label={text.frequency}
                  type='number'
                  value={customFrequency}
                  onChange={(event) =>
                    setCustomFrequency(Math.max(0, Number(event.target.value) || 0))
                  }
                />
                <TextField
                  select
                  label={text.unit}
                  value={customFrequencyUnit}
                  onChange={(event) =>
                    setCustomFrequencyUnit(event.target.value as CustomFrequencyUnit)
                  }
                >
                  <MenuItem value='week'>{text.timesPerWeek}</MenuItem>
                  <MenuItem value='month'>{text.timesPerMonth}</MenuItem>
                  <MenuItem value='year'>{text.timesPerYear}</MenuItem>
                </TextField>
              </Box>
            </TabPanel>
          </Box>
        </Box>
      </TabContext>

      <Divider />
      <CardActions sx={{ py: (theme) => theme.spacing(1.5), px: 3 }}>
        <Typography variant='body2' fontWeight={600}>
          {text.costPerYear}: {formatLocalizedCurrency(activeCostPerYear)}
        </Typography>
      </CardActions>
    </JumboCard>
  );
}

export { LaborCostWidget };
