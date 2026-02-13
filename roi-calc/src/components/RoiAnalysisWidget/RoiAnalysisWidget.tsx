'use client';
import { useRoiLocale } from '@/components/RoiLocale';
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
  const { locale } = useRoiLocale();
  const isZh = locale === 'zh-CN';
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

  const formatCurrency = React.useCallback(
    (value: number) =>
      new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 2,
      }).format(value),
    [locale]
  );

  const formatCurrencyRounded = React.useCallback(
    (value: number) =>
      new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
      }).format(value),
    [locale]
  );

  const formatCompactCurrency = React.useCallback(
    (value: number) =>
      new Intl.NumberFormat(locale, {
        notation: 'compact',
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 1,
      }).format(value),
    [locale]
  );

  const text = isZh
    ? {
        title: 'ROI 分析',
        dailySavings: '日节省',
        annualSavings: '年节省',
        paybackPeriod: '回本周期（月）',
        firstYearRoi: '首年 ROI',
        fiveYearNetBenefit: '5 年净收益',
        monthAxis: '月份',
        monthLabel: '月份',
        manualCostLine: '传统人工成本',
        robotCostLine: '机器人成本',
        na: '不适用',
      }
    : {
        title: 'ROI Analysis',
        dailySavings: 'Daily Savings',
        annualSavings: 'Annual Savings',
        paybackPeriod: 'Payback Period (Months)',
        firstYearRoi: 'First-Year ROI',
        fiveYearNetBenefit: '5-Year Net Benefit',
        monthAxis: 'Month',
        monthLabel: 'Month',
        manualCostLine: 'Traditional Manual Cost',
        robotCostLine: 'Robot Cost',
        na: 'N/A',
      };

  const metricItems = [
    {
      label: text.dailySavings,
      value: formatCurrencyRounded(dailySavings),
    },
    {
      label: text.annualSavings,
      value: formatCurrencyRounded(annualSavings),
    },
    {
      label: text.paybackPeriod,
      value: paybackMonths === null ? text.na : paybackMonths.toFixed(2),
    },
    {
      label: text.firstYearRoi,
      value: `${firstYearROI.toFixed(2)}%`,
    },
    {
      label: text.fiveYearNetBenefit,
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
              {text.title}
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
        <Div sx={{ width: '100%', height: { xs: 260, lg: '100%' } }}>
          <ResponsiveContainer width='100%' height='100%'>
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
              label={{
                value: text.monthAxis,
                position: 'insideBottomRight',
                offset: -5,
              }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tickFormatter={formatCompactCurrency}
            />
            <Tooltip
              formatter={(value: number) => formatCurrency(value)}
              labelFormatter={(label) => `${text.monthLabel} ${label}`}
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
              name={text.manualCostLine}
            />
            <Line
              type='monotone'
              dataKey='robotCost'
              stroke={ROI_ANALYSIS_COLORS.robotLine}
              strokeWidth={2.5}
              dot={false}
              name={text.robotCostLine}
            />
          </LineChart>
          </ResponsiveContainer>
        </Div>
      </Div>
    </Card>
  );
}

export { RoiAnalysisWidget };
