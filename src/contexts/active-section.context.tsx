'use client';

import React, { useState, createContext, useContext, useCallback } from 'react';

import type { iLink } from '@/translations/translations.types';

interface iActiveSectionContextTypeProps {
  activeSection: string;
  timeOfLastClick: number;
  handleSetActiveSection: (sectionName: iLink['hash']) => void;
}

export const ActiveSectionContext =
  createContext<iActiveSectionContextTypeProps | null>(null);

export default function ActiveSectionContextProvider({
  children,
}: WithChildren) {
  const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0);
  const [activeSection, setActiveSection] = useState<iLink['hash']>('#home');

  const handleSetActiveSection = useCallback(
    (sectionName: iLink['hash']) => {
      setActiveSection(sectionName);
      setTimeOfLastClick(Date.now());
    },
    [setActiveSection, setTimeOfLastClick]
  );

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        handleSetActiveSection,
        timeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSection() {
  const context = useContext(ActiveSectionContext);

  if (!context) {
    throw new Error(
      'useActiveSectionContext must be used within an ActiveSectionContextProvider'
    );
  }

  return context;
}
