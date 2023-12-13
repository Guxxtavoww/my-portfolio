'use client';

import { useTranslations } from '@/contexts/translation.context';

export default function Header() {
  const { currentTranslation, isLoadingTranslation } = useTranslations();

  return (
    <>
      {currentTranslation?.links.map((link, index) => (
        <span key={index}>{link.name}</span>
      ))}
    </>
  );
}
