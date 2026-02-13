'use client';
import { JumboCard } from '@jumbo/components';
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

const formatCurrency = (value: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  }).format(value);

function RobotMaintenanceCostWidget({
  onChange,
  panelHeight = 430,
}: RobotMaintenanceCostWidgetProps) {
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

  return (
    <JumboCard
      title={'Robot Maintenance Cost'}
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
            Labor Required (hours/day): {laborHoursPerDay}
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
            Hourly Wage (USD/hour): {formatCurrency(hourlyWage)}
          </Typography>
          <Slider
            value={hourlyWage}
            min={10}
            max={30}
            step={1}
            onChange={(event, nextValue) =>
              setHourlyWage(Array.isArray(nextValue) ? nextValue[0] : nextValue)
            }
          />
        </Box>
        <Box>
          <Typography variant='body2' mb={1}>
            Annual Working Days (day/year): {workingDays}
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
          Cost / Year: {formatCurrency(costPerYear)}
        </Typography>
      </CardActions>
    </JumboCard>
  );
}

export { RobotMaintenanceCostWidget };
