'use client';
import { JumboCard } from '@jumbo/components';
import { useRoiLocale } from '@/components/RoiLocale';
import {
  convertFromSqft,
  convertFromUsd,
  convertRateFromPerSqft,
  convertRateToPerSqft,
  convertToSqft,
  convertToUsd,
  useRoiUnits,
} from '@/components/RoiUnits';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import {
  Box,
  CardActions,
  Divider,
  IconButton,
  InputAdornment,
  MenuItem,
  Slider,
  Tab,
  TextField,
  Tooltip,
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
export type ManualCostTab = 'area' | 'hourly' | 'custom';

export type LaborCostChangePayload = {
  costPerYear: number;
  tabValue: ManualCostTab;
  areaInputs?: {
    cleaningAreaSqft: number;
    frequencyPerMonth: number;
  };
};

export type RobotsNeededChangePayload = {
  robotsNeeded: number;
  requiredAreaPerDaySqft: number;
  robotCapacityPerDaySqft: number;
};

const OPERATING_HOURS_PER_DAY = 8;

interface LaborCostWidgetProps {
  priceData: PriceData;
  robotCleaningRateSqftPerHour: number;
  onCostPerYearChange?: (payload: LaborCostChangePayload) => void;
  onRobotsNeededChange?: (payload: RobotsNeededChangePayload) => void;
}

function LaborCostWidget({
  priceData,
  robotCleaningRateSqftPerHour,
  onCostPerYearChange,
  onRobotsNeededChange,
}: LaborCostWidgetProps) {
  const { locale } = useRoiLocale();
  const { currencyUnit, areaUnit } = useRoiUnits();
  const isZh = locale === 'zh-CN';
  const [tabValue, setTabValue] = React.useState<ManualCostTab>('area');

  const [hourlyCost, setHourlyCost] = React.useState(
    priceData.price_per_hour.average_range.min
  );
  const [hourPerDay, setHourPerDay] = React.useState(7);
  const [workerCount, setWorkerCount] = React.useState(2);
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
    hourlyCost * hourPerDay * hourlyFrequencyPerMonth * workerCount * 12;
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
  const requiredAreaPerDaySqft = cleaningArea;
  const robotCapacityPerDaySqft =
    robotCleaningRateSqftPerHour * OPERATING_HOURS_PER_DAY;
  const robotsNeeded =
    requiredAreaPerDaySqft <= 0 || robotCapacityPerDaySqft <= 0
      ? 0
      : Math.ceil(requiredAreaPerDaySqft / robotCapacityPerDaySqft);

  const activeCostPerYear =
    tabValue === 'hourly'
      ? hourlyCostPerYear
      : tabValue === 'area'
        ? areaCostPerYear
        : customCostPerYear;

  React.useEffect(() => {
    onCostPerYearChange?.({
      costPerYear: activeCostPerYear,
      tabValue,
      areaInputs:
        tabValue === 'area'
          ? {
              cleaningAreaSqft: cleaningArea,
              frequencyPerMonth: areaFrequencyPerMonth,
            }
          : undefined,
    });
  }, [activeCostPerYear, areaFrequencyPerMonth, cleaningArea, onCostPerYearChange, tabValue]);

  React.useEffect(() => {
    if (tabValue === 'area') {
      onRobotsNeededChange?.({
        robotsNeeded,
        requiredAreaPerDaySqft,
        robotCapacityPerDaySqft,
      });
      return;
    }

    onRobotsNeededChange?.({
      robotsNeeded: 1,
      requiredAreaPerDaySqft: 0,
      robotCapacityPerDaySqft,
    });
  }, [
    onRobotsNeededChange,
    requiredAreaPerDaySqft,
    robotCapacityPerDaySqft,
    robotsNeeded,
    tabValue,
  ]);

  const currencyCode = currencyUnit === 'USD' ? 'USD' : 'CNY';

  const formatLocalizedCurrency = React.useCallback(
    (value: number) =>
      new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currencyCode,
        maximumFractionDigits: 2,
      }).format(value),
    [currencyCode, locale]
  );

  const areaUnitLabel = areaUnit === 'sqft' ? 'sq ft' : 'sqm';
  const areaUnitLabelZh = areaUnit === 'sqft' ? '平方英尺' : '平方米';
  const displayHourlyCost = convertFromUsd(hourlyCost, currencyUnit);
  const displayAreaCost = convertFromUsd(
    convertRateFromPerSqft(areaCost, areaUnit),
    currencyUnit
  );
  const displayCleaningArea = convertFromSqft(cleaningArea, areaUnit);
  const [cleaningAreaInput, setCleaningAreaInput] = React.useState(() =>
    Number(displayCleaningArea.toFixed(2)).toString()
  );
  const [customCostInput, setCustomCostInput] = React.useState(() =>
    Number(convertFromUsd(customCostPerVisit, currencyUnit).toFixed(2)).toString()
  );
  const [customFrequencyInput, setCustomFrequencyInput] = React.useState(
    customFrequency.toString()
  );

  React.useEffect(() => {
    setCleaningAreaInput(Number(displayCleaningArea.toFixed(2)).toString());
  }, [displayCleaningArea]);

  React.useEffect(() => {
    setCustomCostInput(
      Number(convertFromUsd(customCostPerVisit, currencyUnit).toFixed(2)).toString()
    );
  }, [currencyUnit, customCostPerVisit]);

  React.useEffect(() => {
    setCustomFrequencyInput(customFrequency.toString());
  }, [customFrequency]);

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
        workerCount: '工人数量',
        cleaningFrequencyPerMonth: '每月清洁频次',
        hourlyCostInfo:
          '商业地面清洁通常每位工人每小时成本在 $30 到 $75 之间，全国常见平均值约为 $39/小时。对于较大、开阔的仓库空间，通常按清洁面积（平方英尺）计价，而不是按小时计价。',
        areaCost: '面积成本',
        perSqft: `/ ${areaUnitLabelZh}`,
        cleaningArea: `清洁面积（${areaUnitLabelZh}）`,
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
        workerCount: 'Worker count',
        cleaningFrequencyPerMonth: 'Cleaning frequency / month',
        hourlyCostInfo:
          'Commercial floor cleaning generally costs between $30 and $75 per hour per worker, with a common national average around $39 per hour. For larger, open-space warehouses, cleaning is often priced by square footage rather than hourly.',
        areaCost: 'Area Cost',
        perSqft: `/ ${areaUnitLabel}`,
        cleaningArea: `Cleaning Area (${areaUnitLabel})`,
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
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1 }}>
                    <Typography variant='body2'>
                      {text.hourlyCost}: {formatLocalizedCurrency(displayHourlyCost)}{' '}
                      {text.perHour}
                    </Typography>
                    <Tooltip title={text.hourlyCostInfo} arrow>
                      <IconButton
                        size='small'
                        aria-label='Hourly cost information'
                        sx={{ color: 'text.secondary', p: 0.25 }}
                      >
                        <InfoOutlinedIcon fontSize='small' />
                      </IconButton>
                    </Tooltip>
                  </Box>
                  <Slider
                    value={displayHourlyCost}
                    min={convertFromUsd(priceData.price_per_hour.lowest, currencyUnit)}
                    max={convertFromUsd(priceData.price_per_hour.highest, currencyUnit)}
                    step={1}
                    onChange={(event, nextValue) =>
                      setHourlyCost(
                        convertToUsd(
                          Array.isArray(nextValue) ? nextValue[0] : nextValue,
                          currencyUnit
                        )
                      )
                    }
                  />
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
                    {text.workerCount}: {workerCount}
                  </Typography>
                  <Slider
                    value={workerCount}
                    min={1}
                    max={10}
                    step={1}
                    onChange={(event, nextValue) =>
                      setWorkerCount(Array.isArray(nextValue) ? nextValue[0] : nextValue)
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
                    {text.areaCost}: {formatLocalizedCurrency(displayAreaCost)} {text.perSqft}
                  </Typography>
                  <Slider
                    value={displayAreaCost}
                    min={convertFromUsd(
                      convertRateFromPerSqft(priceData.price_per_sqft.lowest, areaUnit),
                      currencyUnit
                    )}
                    max={convertFromUsd(
                      convertRateFromPerSqft(priceData.price_per_sqft.highest, areaUnit),
                      currencyUnit
                    )}
                    step={0.01}
                    onChange={(event, nextValue) =>
                      setAreaCost(
                        convertRateToPerSqft(
                          convertToUsd(
                            Array.isArray(nextValue) ? nextValue[0] : nextValue,
                            currencyUnit
                          ),
                          areaUnit
                        )
                      )
                    }
                  />
                  <Typography variant='caption' color='text.secondary'>
                    {text.range}:{' '}
                    {formatLocalizedCurrency(
                      convertFromUsd(
                        convertRateFromPerSqft(priceData.price_per_sqft.lowest, areaUnit),
                        currencyUnit
                      )
                    )}{' '}
                    -{' '}
                    {formatLocalizedCurrency(
                      convertFromUsd(
                        convertRateFromPerSqft(priceData.price_per_sqft.highest, areaUnit),
                        currencyUnit
                      )
                    )}
                  </Typography>
                </Box>
                <TextField
                  label={text.cleaningArea}
                  type='number'
                  value={cleaningAreaInput}
                  onChange={(event) => {
                    const { value } = event.target;
                    setCleaningAreaInput(value);

                    if (value === '') return;

                    const parsed = Number(value);
                    if (Number.isNaN(parsed)) return;

                    setCleaningArea(Math.max(0, convertToSqft(parsed, areaUnit)));
                  }}
                  onBlur={() => {
                    if (cleaningAreaInput === '') {
                      setCleaningArea(0);
                      setCleaningAreaInput('0');
                      return;
                    }

                    const parsed = Number(cleaningAreaInput);
                    const normalized = Number.isNaN(parsed) ? 0 : Math.max(0, parsed);
                    setCleaningArea(convertToSqft(normalized, areaUnit));
                    setCleaningAreaInput(Number(normalized.toFixed(2)).toString());
                  }}
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
                  value={customCostInput}
                  onChange={(event) => {
                    const { value } = event.target;
                    setCustomCostInput(value);

                    if (value === '') return;

                    const parsed = Number(value);
                    if (Number.isNaN(parsed)) return;

                    setCustomCostPerVisit(
                      Math.max(0, convertToUsd(parsed, currencyUnit))
                    );
                  }}
                  onBlur={() => {
                    if (customCostInput === '') {
                      setCustomCostPerVisit(0);
                      setCustomCostInput('0');
                      return;
                    }

                    const parsed = Number(customCostInput);
                    const normalized = Number.isNaN(parsed) ? 0 : Math.max(0, parsed);
                    setCustomCostPerVisit(convertToUsd(normalized, currencyUnit));
                    setCustomCostInput(Number(normalized.toFixed(2)).toString());
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>{currencyUnit}</InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label={text.frequency}
                  type='number'
                  value={customFrequencyInput}
                  onChange={(event) => {
                    const { value } = event.target;
                    setCustomFrequencyInput(value);

                    if (value === '') return;

                    const parsed = Number(value);
                    if (Number.isNaN(parsed)) return;

                    setCustomFrequency(Math.max(0, parsed));
                  }}
                  onBlur={() => {
                    if (customFrequencyInput === '') {
                      setCustomFrequency(0);
                      setCustomFrequencyInput('0');
                      return;
                    }

                    const parsed = Number(customFrequencyInput);
                    const normalized = Number.isNaN(parsed) ? 0 : Math.max(0, parsed);
                    setCustomFrequency(normalized);
                    setCustomFrequencyInput(normalized.toString());
                  }}
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
      <CardActions
        sx={{
          py: (theme) => theme.spacing(1.5),
          px: 3,
          bgcolor: '#3a3f4b',
        }}
      >
        <Typography variant='body2' fontWeight={600} color='common.white'>
          {text.costPerYear}:{' '}
          {formatLocalizedCurrency(convertFromUsd(activeCostPerYear, currencyUnit))}
        </Typography>
      </CardActions>
    </JumboCard>
  );
}

export { LaborCostWidget };
