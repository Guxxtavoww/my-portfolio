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

import { getTranslation } from '@/translations';
import { useSearchUrl } from '@/hooks/use-search-url.hook';
import type { iTranslation } from '@/translations/translations.types';

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
  const [currentTranslation, setCurrentTranslation] = useState<iTranslation>();

  const { handleSetSearchParam, getSearchParamValue } = useSearchUrl<Langs>(
    'lang',
    'pt-br'
  );

  const handleSetCurrentTranslation = useCallback(
    (lang: Langs) => {
      handleSetSearchParam(lang);
    },
    [handleSetSearchParam]
  );

  const handleToggleTranslation = useCallback(() => {
    const newLang = getSearchParamValue() === 'eng' ? 'pt-br' : 'eng';

    handleSetSearchParam(newLang);
  }, [getSearchParamValue, handleSetSearchParam]);

  useEffect(() => {
    startTransiton(async () => {
      const currentTranslation = await getTranslation(getSearchParamValue());

      setCurrentTranslation(currentTranslation);
    });
  }, [getSearchParamValue]);

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
