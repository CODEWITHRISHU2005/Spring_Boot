import React, { createContext, useContext, useState, ReactNode } from 'react';
import { City } from '../types';
import { cities } from '../data/mockData';

interface AppContextType {
  selectedCity: City;
  setSelectedCity: (city: City) => void;
  isUserLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedCity, setSelectedCity] = useState<City>(cities[0]);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const login = () => setIsUserLoggedIn(true);
  const logout = () => setIsUserLoggedIn(false);

  return (
    <AppContext.Provider
      value={{
        selectedCity,
        setSelectedCity,
        isUserLoggedIn,
        login,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};