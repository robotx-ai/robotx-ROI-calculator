'use client';

import { JumboIconButton } from '@jumbo/components/JumboIconButton';
import { Span } from '@jumbo/shared';
import { ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material';
import React from 'react';
import ReactCountryFlag from 'react-country-flag';
import { RoiLocale, useRoiLocale } from './RoiLocaleProvider';

const LANGUAGE_OPTIONS: {
  code: RoiLocale;
  name: string;
  flag: string;
}[] = [
  { code: 'en-US', name: 'English', flag: 'GB' },
  { code: 'zh-CN', name: '中文', flag: 'CN' },
];

function RoiLanguageSwitcher() {
  const { locale, setLocale } = useRoiLocale();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const currentOption =
    LANGUAGE_OPTIONS.find((option) => option.code === locale) ??
    LANGUAGE_OPTIONS[0];

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (nextLocale: RoiLocale) => {
    setLocale(nextLocale);
    handleClose();
  };

  return (
    <Span>
      <JumboIconButton onClick={handleClick} elevation={23} aria-label='Language'>
        <ReactCountryFlag
          countryCode={currentOption.flag}
          svg
          style={{ width: 20, height: 'auto' }}
        />
      </JumboIconButton>
      <Menu
        anchorEl={anchorEl}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={open}
        onClose={handleClose}
        sx={{ mt: 2 }}
      >
        {LANGUAGE_OPTIONS.map(({ code, name, flag }) => (
          <MenuItem key={code} onClick={() => handleLanguageChange(code)}>
            <ListItemIcon>
              <ReactCountryFlag
                countryCode={flag}
                svg
                style={{ width: 24, height: 16 }}
              />
            </ListItemIcon>
            <ListItemText primary={name} />
          </MenuItem>
        ))}
      </Menu>
    </Span>
  );
}

export { RoiLanguageSwitcher };
