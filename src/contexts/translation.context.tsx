'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  useTransition,
} from 'react';

import getTranslation from '@/translations';
import { iTranslation } from '@/translations/types';
import { usePersitedState } from '@/hooks/use-persisted-state.hook';

interface iTranslationsContextProps {
  currentTranslation: iTranslation | undefined;
  isLoadingTranslation: boolean;
  setCurrentTranslation: (lang: Langs) => void;
  handleToggleTranslation: () => void;
}

export const TranslationsContext =
  createContext<Maybe<iTranslationsContextProps>>(undefined);

export function TranslationProvider({ children }: WithChildren) {
  const [isPending, startTransiton] = useTransition();
  const [currentTranslationKey, setCurrentTranslationKey] =
    usePersitedState<Langs>('pt-br', 'current-translation');
  const [currentTranslation, setCurrentTranslation] = useState<iTranslation>();

  const handleSetCurrentTranslation = useCallback(
    (lang: Langs) => {
      setCurrentTranslationKey(lang);
    },
    [setCurrentTranslationKey]
  );

  const handleToggleTranslation = useCallback(() => {
    setCurrentTranslationKey((prev) => (prev === 'eng' ? 'pt-br' : 'eng'));
  }, [setCurrentTranslationKey]);

  useEffect(() => {
    startTransiton(async () => {
      const currentTranslation = await getTranslation(currentTranslationKey);

      setCurrentTranslation(currentTranslation);
    });
  }, [currentTranslationKey]);

  const isLoadingTranslation = useMemo(
    () => isPending || !currentTranslation,
    [isPending, currentTranslation]
  );

  return (
    <TranslationsContext.Provider
      value={{
        currentTranslation,
        isLoadingTranslation,
        setCurrentTranslation: handleSetCurrentTranslation,
        handleToggleTranslation,
      }}
    >
      {children}
    </TranslationsContext.Provider>
  );
}

export function useTranslations() {
  const context = useContext(TranslationsContext);

  if (!context) {
    throw new Error('Falha de contexto!');
  }

  return context;
}
