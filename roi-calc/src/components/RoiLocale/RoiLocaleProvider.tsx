'use client';

import React from 'react';

export type RoiLocale = 'en-US' | 'zh-CN';

type RoiLocaleContextType = {
  locale: RoiLocale;
  setLocale: (locale: RoiLocale) => void;
};

const RoiLocaleContext = React.createContext<RoiLocaleContextType | undefined>(
  undefined
);

function RoiLocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = React.useState<RoiLocale>('en-US');

  React.useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = React.useCallback((nextLocale: RoiLocale) => {
    setLocaleState(nextLocale);
  }, []);

  return (
    <RoiLocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </RoiLocaleContext.Provider>
  );
}

function useRoiLocale() {
  const context = React.useContext(RoiLocaleContext);
  if (!context) {
    throw new Error('useRoiLocale must be used within RoiLocaleProvider');
  }
  return context;
}

export { RoiLocaleProvider, useRoiLocale };
