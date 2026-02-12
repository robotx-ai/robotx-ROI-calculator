import { JumboCard } from '@jumbo/components';
import { Div } from '@jumbo/shared';
import { SvgIconProps, Typography } from '@mui/material';
import React from 'react';

type RoiMetricCardProps = {
  bgColor: string;
  value: React.ReactNode;
  label: string;
  Icon: React.ComponentType<SvgIconProps>;
};

const RoiMetricCard = ({ bgColor, value, label, Icon }: RoiMetricCardProps) => {
  return (
    <JumboCard bgcolor={[bgColor]} contentSx={{ p: 3 }} contentWrapper>
      <Div sx={{ display: 'flex', alignItems: 'center' }}>
        <Icon sx={{ color: 'common.white', fontSize: 44 }} />
        <Div sx={{ ml: 2, flex: 1 }}>
          {typeof value === 'string' ? (
            <Typography color={'common.white'} variant={'h3'} mb={0.5}>
              {value}
            </Typography>
          ) : (
            value
          )}
          <Typography color={'common.white'} variant={'h6'} mb={0}>
            {label}
          </Typography>
        </Div>
      </Div>
    </JumboCard>
  );
};

export { RoiMetricCard };
