'use client';

import { useRoiLocale } from '@/components/RoiLocale';
import { JumboIconButton } from '@jumbo/components/JumboIconButton';
import { Span } from '@jumbo/shared';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import { ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material';
import React from 'react';
import {
  RoiAreaUnit,
  RoiCurrencyUnit,
  useRoiUnits,
} from './RoiUnitProvider';

function RoiCurrencySwitcher() {
  const { locale } = useRoiLocale();
  const isZh = locale === 'zh-CN';
  const { currencyUnit, setCurrencyUnit } = useRoiUnits();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const options: { value: RoiCurrencyUnit; label: string }[] = [
    { value: 'USD', label: isZh ? '美元 (USD)' : 'US Dollar (USD)' },
    { value: 'CNY', label: isZh ? '人民币 (CNY)' : 'Chinese Yuan (CNY)' },
  ];

  return (
    <Span>
      <JumboIconButton
        onClick={(event) => setAnchorEl(event.currentTarget)}
        elevation={23}
        aria-label={isZh ? '货币单位' : 'Currency unit'}
      >
        <CurrencyExchangeIcon fontSize='small' />
      </JumboIconButton>
      <Menu
        anchorEl={anchorEl}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        onClose={() => setAnchorEl(null)}
        sx={{ mt: 2 }}
      >
        {options.map((option) => (
          <MenuItem
            key={option.value}
            selected={currencyUnit === option.value}
            onClick={() => {
              setCurrencyUnit(option.value);
              setAnchorEl(null);
            }}
          >
            <ListItemIcon>
              <CurrencyExchangeIcon fontSize='small' />
            </ListItemIcon>
            <ListItemText primary={option.label} />
          </MenuItem>
        ))}
      </Menu>
    </Span>
  );
}

function RoiAreaSwitcher() {
  const { locale } = useRoiLocale();
  const isZh = locale === 'zh-CN';
  const { areaUnit, setAreaUnit } = useRoiUnits();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const options: { value: RoiAreaUnit; label: string }[] = [
    { value: 'sqft', label: isZh ? '平方英尺 (sq ft)' : 'Square Foot (sq ft)' },
    { value: 'sqm', label: isZh ? '平方米 (sqm)' : 'Square Meter (sqm)' },
  ];

  return (
    <Span>
      <JumboIconButton
        onClick={(event) => setAnchorEl(event.currentTarget)}
        elevation={23}
        aria-label={isZh ? '面积单位' : 'Area unit'}
      >
        <SquareFootIcon fontSize='small' />
      </JumboIconButton>
      <Menu
        anchorEl={anchorEl}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        onClose={() => setAnchorEl(null)}
        sx={{ mt: 2 }}
      >
        {options.map((option) => (
          <MenuItem
            key={option.value}
            selected={areaUnit === option.value}
            onClick={() => {
              setAreaUnit(option.value);
              setAnchorEl(null);
            }}
          >
            <ListItemIcon>
              <SquareFootIcon fontSize='small' />
            </ListItemIcon>
            <ListItemText primary={option.label} />
          </MenuItem>
        ))}
      </Menu>
    </Span>
  );
}

export { RoiAreaSwitcher, RoiCurrencySwitcher };
