'use client';
import { JumboCard } from '@jumbo/components';
import { useRoiLocale } from '@/components/RoiLocale';
import { convertFromUsd, convertToUsd, useRoiUnits } from '@/components/RoiUnits';
import { Box, CardActions, Divider, Slider, Typography } from '@mui/material';
import React from 'react';

interface RobotMaintenanceCostWidgetProps {
  onChange?: (payload: {
    laborHoursPerDay: number;
    hourlyWage: number;
    workingDays: number;
    costPerYear: number;
  }) => void;
  panelHeight?: number;
}

function RobotMaintenanceCostWidget({
  onChange,
  panelHeight = 430,
}: RobotMaintenanceCostWidgetProps) {
  const { locale } = useRoiLocale();
  const { currencyUnit } = useRoiUnits();
  const isZh = locale === 'zh-CN';
  const [laborHoursPerDay, setLaborHoursPerDay] = React.useState(1);
  const [hourlyWage, setHourlyWage] = React.useState(25);
  const [workingDays, setWorkingDays] = React.useState(250);

  const costPerYear = laborHoursPerDay * hourlyWage * workingDays;

  React.useEffect(() => {
    onChange?.({
      laborHoursPerDay,
      hourlyWage,
      workingDays,
      costPerYear,
    });
  }, [costPerYear, hourlyWage, laborHoursPerDay, onChange, workingDays]);

  const currencyCode = currencyUnit === 'USD' ? 'USD' : 'CNY';

  const formatCurrency = React.useCallback(
    (value: number) =>
      new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currencyCode,
        maximumFractionDigits: 2,
      }).format(value),
    [currencyCode, locale]
  );

  const displayHourlyWage = convertFromUsd(hourlyWage, currencyUnit);

  const text = isZh
    ? {
        title: '机器人维护成本',
        laborRequired: '所需人工（小时/天）',
        hourlyWage: `时薪（${currencyUnit}/小时）`,
        annualWorkingDays: '年工作天数（天/年）',
        costPerYear: '年成本',
      }
    : {
        title: 'Robot Maintenance Cost',
        laborRequired: 'Labor Required (hours/day)',
        hourlyWage: `Hourly Wage (${currencyUnit}/hour)`,
        annualWorkingDays: 'Annual Working Days (day/year)',
        costPerYear: 'Cost / Year',
      };

  return (
    <JumboCard
      title={text.title}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: { xs: 420, lg: panelHeight },
        height: { lg: panelHeight },
      }}
    >
      <Box sx={{ p: 3, flex: 1, overflowY: 'auto', display: 'grid', gap: 2.5 }}>
        <Box>
          <Typography variant='body2' mb={1}>
            {text.laborRequired}: {laborHoursPerDay}
          </Typography>
          <Slider
            value={laborHoursPerDay}
            min={1}
            max={5}
            step={1}
            onChange={(event, nextValue) =>
              setLaborHoursPerDay(Array.isArray(nextValue) ? nextValue[0] : nextValue)
            }
          />
        </Box>
        <Box>
          <Typography variant='body2' mb={1}>
            {text.hourlyWage}: {formatCurrency(displayHourlyWage)}
          </Typography>
          <Slider
            value={displayHourlyWage}
            min={convertFromUsd(10, currencyUnit)}
            max={convertFromUsd(30, currencyUnit)}
            step={1}
            onChange={(event, nextValue) =>
              setHourlyWage(
                convertToUsd(Array.isArray(nextValue) ? nextValue[0] : nextValue, currencyUnit)
              )
            }
          />
        </Box>
        <Box>
          <Typography variant='body2' mb={1}>
            {text.annualWorkingDays}: {workingDays}
          </Typography>
          <Slider
            value={workingDays}
            min={100}
            max={365}
            step={1}
            onChange={(event, nextValue) =>
              setWorkingDays(Array.isArray(nextValue) ? nextValue[0] : nextValue)
            }
          />
        </Box>
      </Box>

      <Divider />
      <CardActions sx={{ py: (theme) => theme.spacing(1.5), px: 3 }}>
        <Typography variant='body2' fontWeight={600}>
          {text.costPerYear}: {formatCurrency(convertFromUsd(costPerYear, currencyUnit))}
        </Typography>
      </CardActions>
    </JumboCard>
  );
}

export { RobotMaintenanceCostWidget };
