'use client';

import { createContext, useState, useContext, type ReactNode } from 'react';
import { type City, cities } from '@/data/mock-data';

type CityContextType = {
  selectedCity: City | null;
  selectCity: (city: City) => void;
  showCityModal: boolean;
  setShowCityModal: (show: boolean) => void;
};

const CityContext = createContext<CityContextType | undefined>(undefined);

export function CityProvider({ children }: { children: ReactNode }) {
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [showCityModal, setShowCityModal] = useState(false);

  const selectCity = (city: City) => {
    setSelectedCity(city);
    setShowCityModal(false);
  };

  return (
    <CityContext.Provider
      value={{
        selectedCity,
        selectCity,
        showCityModal,
        setShowCityModal,
      }}
    >
      {children}
    </CityContext.Provider>
  );
}

export const useCity = () => {
  const context = useContext(CityContext);
  if (context === undefined) {
    throw new Error('useCity must be used within a CityProvider');
  }
  return context;
};
