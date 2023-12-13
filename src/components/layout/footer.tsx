'use client';

import React from 'react';

import { useTranslations } from '@/contexts/translation.context';
import clsx from 'clsx';

export default function Footer() {
  const { isLoadingTranslation, currentTranslation } = useTranslations();

  return (
    <footer
      className={clsx('mb-10 px-4 text-center text-gray-500 dark:text-white', {
        'flex items-center justify-center': isLoadingTranslation,
      })}
    >
      {isLoadingTranslation ? (
        <div className="bg-gray-400 animate-pulse w-full max-w-xs h-5 rounded-lg" />
      ) : (
        <>
          <small className="mb-2 block text-xs">
            &copy; 2030 Gustavo Augusto.{' '}
            {currentTranslation?.footer.copyRightText}
          </small>
          <p className="text-xs">
            <span className="font-semibold">
              {currentTranslation?.footer.aboutBoldText}
            </span>{' '}
            {currentTranslation?.footer.aboutText}
          </p>
        </>
      )}
    </footer>
  );
}
