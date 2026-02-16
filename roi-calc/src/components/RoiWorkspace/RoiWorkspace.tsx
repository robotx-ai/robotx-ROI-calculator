'use client';
import { LaborCostWidget } from '@/components/LaborCostWidget';
import { RoiLanguageSwitcher } from '@/components/RoiLocale';
import { RobotMaintenanceCostWidget } from '@/components/RobotMaintenanceCostWidget';
import { RobotMetricsPanel } from '@/components/RobotMetricsPanel';
import { RoiAnalysisWidget } from '@/components/RoiAnalysisWidget';
import { Box, Typography } from '@mui/material';
import { RoiAreaSwitcher, RoiCurrencySwitcher } from '@/components/RoiUnits';
import React from 'react';

type ModelData = {
  model_id: string;
  robot_model: string;
  robot_msrp_usd: number;
  maintenance_cost_per_year_usd: number;
  robot_cleaning_rate_sqft_per_hour: number;
};

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

interface RoiWorkspaceProps {
  modelData: ModelData;
  priceData: PriceData;
}

const DEFAULT_HOUR_PER_DAY = 7;
const DEFAULT_CLEANING_FREQ_PER_MONTH = 10;
const DEFAULT_ROBOT_LABOR_HOURS = 1;
const DEFAULT_HOURLY_WAGE = 25;
const DEFAULT_WORKING_DAYS = 250;
const BOTTOM_PANEL_HEIGHT = 430;

function RoiWorkspace({ modelData, priceData }: RoiWorkspaceProps) {
  const [manualCostPerYear, setManualCostPerYear] = React.useState(
    priceData.price_per_hour.average_range.min *
      DEFAULT_HOUR_PER_DAY *
      DEFAULT_CLEANING_FREQ_PER_MONTH *
      12
  );
  const [robotLaborCostPerYear, setRobotLaborCostPerYear] = React.useState(
    DEFAULT_ROBOT_LABOR_HOURS * DEFAULT_HOURLY_WAGE * DEFAULT_WORKING_DAYS
  );
  const [workingDaysPerYear, setWorkingDaysPerYear] =
    React.useState(DEFAULT_WORKING_DAYS);

  return (
    <Box
      sx={{
        display: 'grid',
        gap: 2.5,
        width: '100%',
        maxWidth: 1120,
        mx: 'auto',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
        }}
      >
        <Typography variant='h4' sx={{ fontWeight: 600, lineHeight: 1.2 }}>
          ROI Calculator
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <RoiCurrencySwitcher />
          <RoiAreaSwitcher />
          <RoiLanguageSwitcher />
        </Box>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gap: 3,
          gridTemplateColumns: { xs: 'minmax(0, 1fr)', lg: 'repeat(2, minmax(0, 1fr))' },
        }}
      >
        <Box sx={{ width: '100%' }}>
          <RobotMetricsPanel modelData={modelData} />
        </Box>

        <Box sx={{ width: '100%' }}>
          <LaborCostWidget
            priceData={priceData}
            onCostPerYearChange={setManualCostPerYear}
          />
        </Box>

        <Box sx={{ width: '100%' }}>
          <RobotMaintenanceCostWidget
            panelHeight={BOTTOM_PANEL_HEIGHT}
            onChange={({ costPerYear, workingDays }) => {
              setRobotLaborCostPerYear(costPerYear);
              setWorkingDaysPerYear(workingDays);
            }}
          />
        </Box>

        <Box sx={{ width: '100%' }}>
          <RoiAnalysisWidget
            panelHeight={BOTTOM_PANEL_HEIGHT}
            purchasePrice={modelData.robot_msrp_usd}
            annualMaintenanceCost={modelData.maintenance_cost_per_year_usd}
            manualCostPerYear={manualCostPerYear}
            robotLaborCostPerYear={robotLaborCostPerYear}
            workingDaysPerYear={workingDaysPerYear}
          />
        </Box>
      </Box>
    </Box>
  );
}

export { RoiWorkspace };
