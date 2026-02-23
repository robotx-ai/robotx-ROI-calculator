'use client';
import { useRoiLocale } from '@/components/RoiLocale';
import { convertFromSqft, convertFromUsd, useRoiUnits } from '@/components/RoiUnits';
import { RoiMetricCard } from '@/components/RoiMetricCard';
import BuildCircleOutlinedIcon from '@mui/icons-material/BuildCircleOutlined';
import CleaningServicesOutlinedIcon from '@mui/icons-material/CleaningServicesOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import { Box, Typography } from '@mui/material';
import React from 'react';

type ModelData = {
  model_id: string;
  robot_model: string;
  robot_msrp_usd: number;
  maintenance_cost_per_year_usd: number;
  robot_cleaning_rate_sqft_per_hour: number;
};

interface RobotMetricsPanelProps {
  modelData: ModelData;
  robotsNeeded: number;
}

type MaintenanceUnit = 'year' | 'month' | 'week';
type CleaningRateUnit = 'hour' | 'day';

const DAILY_OPERATING_HOURS = 7;

const CARD_COLORS = {
  model: '#83868f',
  msrp: '#82948b',
  maintenanceByUnit: {
    year: '#5d799e',
    month: '#5d849e',
    week: '#5d8d9e',
  },
  robotsAndCleaning: {
    hour: '#735d9e',
    day: '#815d9e',
  },
} as const;

function RobotMetricsPanel({ modelData, robotsNeeded }: RobotMetricsPanelProps) {
  const { locale } = useRoiLocale();
  const { currencyUnit, areaUnit } = useRoiUnits();
  const isZh = locale === 'zh-CN';
  const [maintenanceUnitIndex, setMaintenanceUnitIndex] = React.useState(0);
  const [cleaningRateUnitIndex, setCleaningRateUnitIndex] = React.useState(0);

  const maintenanceUnits: MaintenanceUnit[] = ['year', 'month', 'week'];
  const cleaningRateUnits: CleaningRateUnit[] = ['hour', 'day'];

  const maintenanceUnit = maintenanceUnits[maintenanceUnitIndex];
  const cleaningRateUnit = cleaningRateUnits[cleaningRateUnitIndex];

  const maintenanceValueByUnit = {
    year: modelData.maintenance_cost_per_year_usd,
    month: modelData.maintenance_cost_per_year_usd / 12,
    week: modelData.maintenance_cost_per_year_usd / 52,
  } as const;

  const cleaningRateValueByUnit = {
    hour: modelData.robot_cleaning_rate_sqft_per_hour,
    day: modelData.robot_cleaning_rate_sqft_per_hour * DAILY_OPERATING_HOURS,
  } as const;

  const cycleMaintenanceUnit = () => {
    setMaintenanceUnitIndex((prev) => (prev + 1) % maintenanceUnits.length);
  };

  const cycleCleaningRateUnit = () => {
    setCleaningRateUnitIndex((prev) => (prev + 1) % cleaningRateUnits.length);
  };

  const currencyCode = currencyUnit === 'USD' ? 'USD' : 'CNY';

  const formatUsd = React.useCallback(
    (value: number) =>
      new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currencyCode,
        maximumFractionDigits: 2,
      }).format(value),
    [currencyCode, locale]
  );

  const formatNumber = React.useCallback(
    (value: number) =>
      new Intl.NumberFormat(locale, {
        maximumFractionDigits: 0,
      }).format(value),
    [locale]
  );

  const maintenanceUnitLabel = isZh
    ? {
        year: '年',
        month: '月',
        week: '周',
      }
    : {
        year: 'year',
        month: 'month',
        week: 'week',
      };

  const cleaningRateUnitLabel = isZh
    ? {
        hour: areaUnit === 'sqft' ? '平方英尺/小时' : '平方米/小时',
        day: areaUnit === 'sqft' ? '平方英尺/天' : '平方米/天',
      }
    : {
        hour: areaUnit === 'sqft' ? 'sq ft/hour' : 'sqm/hour',
        day: areaUnit === 'sqft' ? 'sq ft/day' : 'sqm/day',
      };

  return (
    <Box
      sx={{
        display: 'grid',
        gap: 2.5,
        gridTemplateColumns: '1fr',
        gridTemplateRows: { xs: 'repeat(4, auto)', lg: 'repeat(4, minmax(0, 1fr))' },
        height: '100%',
      }}
    >
      <Box>
        <RoiMetricCard
          bgColor={CARD_COLORS.model}
          value={modelData.robot_model}
          label={isZh ? '机器人型号' : 'Robot Model'}
          Icon={SmartToyOutlinedIcon}
          rightOverlayImage='/assets/images/CC1.webp'
          rightOverlayAlpha={0.5}
          rightOverlayTop='0%'
          rightOverlayScale={0.3}
          fullHeight={true}
        />
      </Box>
      <Box>
        <RoiMetricCard
          bgColor={CARD_COLORS.msrp}
          value={formatUsd(convertFromUsd(modelData.robot_msrp_usd, currencyUnit))}
          label={isZh ? `建议零售价 (${currencyUnit})` : `MSRP (${currencyUnit})`}
          Icon={PaidOutlinedIcon}
          fullHeight={true}
        />
      </Box>
      <Box>
        <RoiMetricCard
          bgColor={CARD_COLORS.maintenanceByUnit[maintenanceUnit]}
          value={formatUsd(
            convertFromUsd(maintenanceValueByUnit[maintenanceUnit], currencyUnit)
          )}
          label={`${isZh ? '维护成本' : 'Maintenance'} / ${
            maintenanceUnitLabel[maintenanceUnit]
          }`}
          Icon={BuildCircleOutlinedIcon}
          onClick={cycleMaintenanceUnit}
          fullHeight={true}
        />
      </Box>
      <Box>
        <RoiMetricCard
          bgColor={CARD_COLORS.robotsAndCleaning[cleaningRateUnit]}
          value={
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, minWidth: 0 }}>
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography color='common.white' variant='h3' mb={0.25}>
                  {formatNumber(robotsNeeded)}
                </Typography>
                <Typography color='common.white' variant='h6' mb={0}>
                  {isZh ? '所需机器人数量' : '# of Robots Needed'}
                </Typography>
              </Box>
              <Box
                sx={{
                  width: '1px',
                  alignSelf: 'stretch',
                  bgcolor: 'rgba(255, 255, 255, 0.28)',
                }}
              />
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography color='common.white' variant='h3' mb={0.25}>
                  {formatNumber(
                    convertFromSqft(cleaningRateValueByUnit[cleaningRateUnit], areaUnit)
                  )}
                </Typography>
                <Typography color='common.white' variant='body2' mb={0}>
                  {cleaningRateUnitLabel[cleaningRateUnit]}
                </Typography>
              </Box>
            </Box>
          }
          label=''
          Icon={CleaningServicesOutlinedIcon}
          onClick={cycleCleaningRateUnit}
          fullHeight={true}
        />
      </Box>
    </Box>
  );
}

export { RobotMetricsPanel };
