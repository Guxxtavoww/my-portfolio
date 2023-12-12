'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  useTransition,
} from 'react';

import getTranslation from '@/translations';
import { iTranslation } from '@/translations/types';
import { usePersitedState } from '@/hooks/usePersistedState.hook';

interface iTranslationsContextProps {
  currentTranslation: iTranslation;
  isLoadingTranslation: boolean;
  setCurrentTranslation: (lang: Langs) => void;
  handleToggleTranslation: () => void;
}

export const TranslationsContext =
  createContext<Maybe<iTranslationsContextProps>>(undefined);

export function TranslationProvider({ children }: WithChildren) {
  const [isPending, startTransiton] = useTransition();
  const [currentTranslationKey, setCurrentTranslationKey] = usePersitedState<
    Maybe<Langs>
  >(null, 'current-translation');
  const [currentTranslation, setCurrentTranslation] = useState<iTranslation>(
    {} as iTranslation
  );

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
      const currentTranslation = await getTranslation(
        currentTranslationKey || 'pt-br'
      );

      setCurrentTranslation(currentTranslation);
    });
  }, [currentTranslationKey]);

  return (
    <TranslationsContext.Provider
      value={{
        currentTranslation,
        isLoadingTranslation: isPending,
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
