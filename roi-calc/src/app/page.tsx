import { RoiMetricCard } from '@/components/RoiMetricCard';
import BuildCircleOutlinedIcon from '@mui/icons-material/BuildCircleOutlined';
import CleaningServicesOutlinedIcon from '@mui/icons-material/CleaningServicesOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import { Box, Container } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { readFile } from 'fs/promises';
import path from 'path';

type ModelData = {
  model_id: string;
  robot_model: string;
  robot_msrp_usd: number;
  maintenance_cost_per_year_usd: number;
  robot_cleaning_rate_sqft_per_hour: number;
};

const formatUsd = (value: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);

const formatNumber = (value: number) =>
  new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 0,
  }).format(value);

async function getModelData(): Promise<ModelData> {
  const dataPath = path.join(process.cwd(), '..', 'model_data', 'CC1_Pro.json');
  const json = await readFile(dataPath, 'utf-8');
  return JSON.parse(json) as ModelData;
}

export default async function HomePage() {
  const modelData = await getModelData();

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: 1320,
        minHeight: 'calc(100vh - 64px)',
        mx: 'auto',
        pt: 4,
        pb: 4,
      }}
    >
      <Box sx={{ width: '100%' }}>
        <Grid container spacing={3.75}>
          <Grid size={{ xs: 12, md: 6, lg: 3 }}>
            <RoiMetricCard
              bgColor='#6f42c1'
              value={modelData.robot_model}
              label='Robot Model'
              Icon={SmartToyOutlinedIcon}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 3 }}>
            <RoiMetricCard
              bgColor='#E44A77'
              value={formatUsd(modelData.robot_msrp_usd)}
              label='MSRP (USD)'
              Icon={PaidOutlinedIcon}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 3 }}>
            <RoiMetricCard
              bgColor='#E73145'
              value={formatUsd(modelData.maintenance_cost_per_year_usd)}
              label='Maintenance / year'
              Icon={BuildCircleOutlinedIcon}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 3 }}>
            <RoiMetricCard
              bgColor='#23BCBA'
              value={formatNumber(modelData.robot_cleaning_rate_sqft_per_hour)}
              label='sq ft/hour'
              Icon={CleaningServicesOutlinedIcon}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
