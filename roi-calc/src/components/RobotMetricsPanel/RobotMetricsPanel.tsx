'use client';
import { RoiMetricCard } from '@/components/RoiMetricCard';
import BuildCircleOutlinedIcon from '@mui/icons-material/BuildCircleOutlined';
import CleaningServicesOutlinedIcon from '@mui/icons-material/CleaningServicesOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import { Box } from '@mui/material';
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
}

type MaintenanceUnit = 'year' | 'month' | 'week';
type CleaningRateUnit = 'hour' | 'day';

const DAILY_OPERATING_HOURS = 7;

const formatUsd = (value: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  }).format(value);

const formatNumber = (value: number) =>
  new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 0,
  }).format(value);

const CARD_COLORS = {
  model: '#83868f',
  msrp: '#82948b',
  maintenanceByUnit: {
    year: '#5d799e',
    month: '#5d849e',
    week: '#5d8d9e',
  },
  cleaningByUnit: {
    hour: '#735d9e',
    day: '#815d9e',
  },
} as const;

function RobotMetricsPanel({ modelData }: RobotMetricsPanelProps) {
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
          label='Robot Model'
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
          value={formatUsd(modelData.robot_msrp_usd)}
          label='MSRP (USD)'
          Icon={PaidOutlinedIcon}
          fullHeight={true}
        />
      </Box>
      <Box>
        <RoiMetricCard
          bgColor={CARD_COLORS.maintenanceByUnit[maintenanceUnit]}
          value={formatUsd(maintenanceValueByUnit[maintenanceUnit])}
          label={`Maintenance / ${maintenanceUnit}`}
          Icon={BuildCircleOutlinedIcon}
          onClick={cycleMaintenanceUnit}
          fullHeight={true}
        />
      </Box>
      <Box>
        <RoiMetricCard
          bgColor={CARD_COLORS.cleaningByUnit[cleaningRateUnit]}
          value={formatNumber(cleaningRateValueByUnit[cleaningRateUnit])}
          label={`sq ft/${cleaningRateUnit}`}
          Icon={CleaningServicesOutlinedIcon}
          onClick={cycleCleaningRateUnit}
          fullHeight={true}
        />
      </Box>
    </Box>
  );
}

export { RobotMetricsPanel };
