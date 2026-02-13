import { RoiWorkspace } from '@/components/RoiWorkspace';
import { Box, Container } from '@mui/material';
import { CONTAINER_MAX_WIDTH } from '@/config/layouts';
import { readFile } from 'fs/promises';
import path from 'path';

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

async function getModelData(): Promise<ModelData> {
  const dataPath = path.join(process.cwd(), '..', 'model_data', 'CC1_Pro.json');
  const json = await readFile(dataPath, 'utf-8');
  return JSON.parse(json) as ModelData;
}

async function getPriceData(): Promise<PriceData> {
  const dataPath = path.join(process.cwd(), '..', 'model_data', 'price_data.json');
  const json = await readFile(dataPath, 'utf-8');
  return JSON.parse(json) as PriceData;
}

export default async function HomePage() {
  const [modelData, priceData] = await Promise.all([getModelData(), getPriceData()]);

  return (
    <Container
      maxWidth={false}
      sx={{
        minHeight: '100vh',
        maxWidth: CONTAINER_MAX_WIDTH,
        mx: 'auto',
        pt: 4,
        px: 'clamp(24px, 6vw, 96px)',
      }}
    >
      <Box>
        <RoiWorkspace modelData={modelData} priceData={priceData} />
      </Box>
    </Container>
  );
}
