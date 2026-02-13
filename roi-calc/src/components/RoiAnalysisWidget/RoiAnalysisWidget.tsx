'use client';
import { Div } from '@jumbo/shared';
import { Card, CardHeader, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

interface RoiAnalysisWidgetProps {
  purchasePrice: number;
  annualMaintenanceCost: number;
  manualCostPerYear: number;
  robotLaborCostPerYear: number;
  workingDaysPerYear: number;
  panelHeight?: number;
}

export const ROI_ANALYSIS_COLORS = {
  headerBg: '#8767c2',
  valueText: '#FFFFFF',
  labelText: 'rgba(255, 255, 255, 0.9)',
  manualLine: '#26A69A',
  robotLine: '#7E57C2',
  gridStroke: '#DADDE4',
  tooltipBg: 'rgba(0, 0, 0, 0.86)',
} as const;

const formatCurrency = (value: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  }).format(value);

const formatCurrencyRounded = (value: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);

const formatCompactCurrency = (value: number) =>
  new Intl.NumberFormat('en-US', {
    notation: 'compact',
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 1,
  }).format(value);

const MetricItem = styled('div')(({ theme }) => ({
  color: theme.palette.common.white,
  width: '20%',
  minWidth: 0,
  padding: theme.spacing(0, 2, 1),
  [theme.breakpoints.down('lg')]: {
    width: '33.33%',
  },
  [theme.breakpoints.down('sm')]: {
    width: '50%',
  },
}));

function RoiAnalysisWidget({
  purchasePrice,
  annualMaintenanceCost,
  manualCostPerYear,
  robotLaborCostPerYear,
  workingDaysPerYear,
  panelHeight = 430,
}: RoiAnalysisWidgetProps) {
  const annualSavings = manualCostPerYear - robotLaborCostPerYear;
  const dailySavings = annualSavings / workingDaysPerYear;
  const paybackMonths =
    annualSavings > 0
      ? ((purchasePrice + annualMaintenanceCost) / annualSavings) * 12
      : null;
  const firstYearROI =
    ((annualSavings - purchasePrice - annualMaintenanceCost) /
      (purchasePrice + annualMaintenanceCost)) *
    100;
  const fiveYearNetBenefit =
    annualSavings * 5 - purchasePrice - annualMaintenanceCost * 5;

  const chartData = React.useMemo(
    () =>
      Array.from({ length: 13 }, (_, month) => ({
        month,
        manualCost: (manualCostPerYear * month) / 12,
        robotCost:
          purchasePrice +
          ((robotLaborCostPerYear + annualMaintenanceCost) * month) / 12,
      })),
    [annualMaintenanceCost, manualCostPerYear, purchasePrice, robotLaborCostPerYear]
  );

  const metricItems = [
    {
      label: 'Daily Savings',
      value: formatCurrencyRounded(dailySavings),
    },
    {
      label: 'Annual Savings',
      value: formatCurrencyRounded(annualSavings),
    },
    {
      label: 'Payback Period (Months)',
      value: paybackMonths === null ? 'N/A' : paybackMonths.toFixed(2),
    },
    {
      label: 'First-Year ROI',
      value: `${firstYearROI.toFixed(2)}%`,
    },
    {
      label: '5-Year Net Benefit',
      value: formatCurrencyRounded(fiveYearNetBenefit),
    },
  ];

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: { xs: 420, lg: panelHeight },
        height: { lg: panelHeight },
      }}
    >
      <Div
        sx={{
          color: 'common.white',
          backgroundColor: ROI_ANALYSIS_COLORS.headerBg,
        }}
      >
        <CardHeader
          sx={{ px: 3, py: 2 }}
          title={
            <Typography variant='h5' color='common.white'>
              ROI Analysis
            </Typography>
          }
        />
        <Stack direction='row' flexWrap='wrap' sx={{ px: 1, pb: 0.5 }}>
          {metricItems.map((item) => (
            <MetricItem key={item.label}>
              <Typography
                variant='subtitle1'
                color={ROI_ANALYSIS_COLORS.valueText}
                sx={{ fontWeight: 600 }}
                mb={0.25}
              >
                {item.value}
              </Typography>
              <Typography variant='caption' color={ROI_ANALYSIS_COLORS.labelText}>
                {item.label}
              </Typography>
            </MetricItem>
          ))}
        </Stack>
      </Div>

      <Div sx={{ p: 2, flex: 1, minHeight: 0 }}>
        <ResponsiveContainer height='100%'>
          <LineChart
            data={chartData}
            margin={{ top: 10, right: 12, left: 0, bottom: 0 }}
          >
            <CartesianGrid
              stroke={ROI_ANALYSIS_COLORS.gridStroke}
              strokeDasharray='3 3'
              strokeOpacity={0.25}
            />
            <XAxis
              dataKey='month'
              axisLine={false}
              tickLine={false}
              label={{ value: 'Month', position: 'insideBottomRight', offset: -5 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tickFormatter={formatCompactCurrency}
            />
            <Tooltip
              formatter={(value: number) => formatCurrency(value)}
              labelFormatter={(label) => `Month ${label}`}
              wrapperStyle={{
                background: ROI_ANALYSIS_COLORS.tooltipBg,
                borderRadius: 6,
                padding: '6px 8px',
                boxShadow: 'rgba(0, 0, 0, 0.2) 0px 4px 10px',
                border: 'none',
              }}
            />
            <Legend />
            <Line
              type='monotone'
              dataKey='manualCost'
              stroke={ROI_ANALYSIS_COLORS.manualLine}
              strokeWidth={2.5}
              dot={false}
              name='Traditional Manual Cost'
            />
            <Line
              type='monotone'
              dataKey='robotCost'
              stroke={ROI_ANALYSIS_COLORS.robotLine}
              strokeWidth={2.5}
              dot={false}
              name='Robot Cost'
            />
          </LineChart>
        </ResponsiveContainer>
      </Div>
    </Card>
  );
}

export { RoiAnalysisWidget };
