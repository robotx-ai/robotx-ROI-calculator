import { JumboCard } from '@jumbo/components';
import { Div } from '@jumbo/shared';
import { Box, SvgIconProps, Typography } from '@mui/material';
import React from 'react';

type RoiMetricCardProps = {
  bgColor: string;
  value: React.ReactNode;
  label: string;
  Icon: React.ComponentType<SvgIconProps>;
  onClick?: () => void;
  fullHeight?: boolean;
  rightOverlayImage?: string;
  rightOverlayAlpha?: number;
  rightOverlayTop?: string | number;
  rightOverlayScale?: number;
};

const RoiMetricCard = ({
  bgColor,
  value,
  label,
  Icon,
  onClick,
  fullHeight = false,
  rightOverlayImage,
  rightOverlayAlpha = 0.5,
  rightOverlayTop = '50%',
  rightOverlayScale = 0.5,
}: RoiMetricCardProps) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        cursor: onClick ? 'pointer' : 'default',
        borderRadius: 2,
        transition: 'filter 0.2s ease, transform 0.2s ease',
        '&:hover': onClick
          ? {
              filter: 'brightness(1.06)',
              transform: 'translateY(-1px)',
            }
          : undefined,
      }}
    >
      <JumboCard
        bgcolor={[bgColor]}
        contentSx={{ p: 3 }}
        contentWrapper
        sx={{
          height: fullHeight ? '100%' : 'auto',
          overflow: 'hidden',
          '&::after': rightOverlayImage
            ? {
                content: '""',
                position: 'absolute',
                top: rightOverlayTop,
                right: 0,
                bottom: 0,
                left: 0,
                backgroundImage: `url(${rightOverlayImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right top',
                backgroundSize: `${Math.max(0, rightOverlayScale) * 100}% auto`,
                opacity: rightOverlayAlpha,
                pointerEvents: 'none',
              }
            : undefined,
        }}
      >
        <Div sx={{ display: 'flex', alignItems: 'center', position: 'relative', zIndex: 1 }}>
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
    </Box>
  );
};

export { RoiMetricCard };
