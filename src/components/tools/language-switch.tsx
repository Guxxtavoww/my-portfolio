'use client';

import { GiBrazilFlag } from 'react-icons/gi';
import { FaFlagUsa } from 'react-icons/fa';

import { useTranslations } from '@/contexts/translation.context';

export default function LanguageSwitch() {
  const { handleToggleTranslation, currentTranslation, isLoadingTranslation } =
    useTranslations();

  return (
    <button
      className="fixed top-5 right-5 bg-white w-[3rem] h-[3rem] md:top-22 max-md:top-20 bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={handleToggleTranslation}
      disabled={isLoadingTranslation}
      role="button"
      type="button"
    >
      {currentTranslation?.lang ? (
        currentTranslation.lang === 'pt-br' ? (
          <GiBrazilFlag />
        ) : (
          <FaFlagUsa />
        )
      ) : (
        <GiBrazilFlag />
      )}
    </button>
  );
}
