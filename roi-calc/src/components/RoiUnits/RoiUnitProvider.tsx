'use client';

import React from 'react';

export type RoiCurrencyUnit = 'USD' | 'CNY';
export type RoiAreaUnit = 'sqft' | 'sqm';

export const USD_TO_CNY = 7.2;
export const SQFT_TO_SQM = 0.09290304;

export const convertFromUsd = (value: number, unit: RoiCurrencyUnit) =>
  unit === 'USD' ? value : value * USD_TO_CNY;

export const convertToUsd = (value: number, unit: RoiCurrencyUnit) =>
  unit === 'USD' ? value : value / USD_TO_CNY;

export const convertFromSqft = (value: number, unit: RoiAreaUnit) =>
  unit === 'sqft' ? value : value * SQFT_TO_SQM;

export const convertToSqft = (value: number, unit: RoiAreaUnit) =>
  unit === 'sqft' ? value : value / SQFT_TO_SQM;

export const convertRateFromPerSqft = (value: number, unit: RoiAreaUnit) =>
  unit === 'sqft' ? value : value / SQFT_TO_SQM;

export const convertRateToPerSqft = (value: number, unit: RoiAreaUnit) =>
  unit === 'sqft' ? value : value * SQFT_TO_SQM;

type RoiUnitContextType = {
  currencyUnit: RoiCurrencyUnit;
  areaUnit: RoiAreaUnit;
  setCurrencyUnit: (unit: RoiCurrencyUnit) => void;
  setAreaUnit: (unit: RoiAreaUnit) => void;
};

const RoiUnitContext = React.createContext<RoiUnitContextType | undefined>(undefined);

function RoiUnitProvider({ children }: { children: React.ReactNode }) {
  const [currencyUnit, setCurrencyUnitState] = React.useState<RoiCurrencyUnit>('USD');
  const [areaUnit, setAreaUnitState] = React.useState<RoiAreaUnit>('sqft');

  const setCurrencyUnit = React.useCallback((nextUnit: RoiCurrencyUnit) => {
    setCurrencyUnitState(nextUnit);
  }, []);

  const setAreaUnit = React.useCallback((nextUnit: RoiAreaUnit) => {
    setAreaUnitState(nextUnit);
  }, []);

  return (
    <RoiUnitContext.Provider
      value={{
        currencyUnit,
        areaUnit,
        setCurrencyUnit,
        setAreaUnit,
      }}
    >
      {children}
    </RoiUnitContext.Provider>
  );
}

function useRoiUnits() {
  const context = React.useContext(RoiUnitContext);
  if (!context) {
    throw new Error('useRoiUnits must be used within RoiUnitProvider');
  }
  return context;
}

export { RoiUnitProvider, useRoiUnits };
