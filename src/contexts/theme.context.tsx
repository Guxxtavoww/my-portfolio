'use client';

import React, {
  useEffect,
  createContext,
  useContext,
  useCallback,
} from 'react';

import { usePersitedState } from '@/hooks/use-persisted-state.hook';

type Theme = 'light' | 'dark';

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeProvider({ children }: WithChildren) {
  const [theme, setTheme] = usePersitedState<Theme>('light', 'theme');

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, [setTheme]);

  useEffect(() => {
    document.documentElement.classList.add(theme);

    return () => document.documentElement.classList.remove(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeContextProvider');
  }

  return context;
}
