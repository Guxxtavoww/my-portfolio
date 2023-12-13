'use client';

import Header from '@/components/layout/header';
import { useTranslations } from '@/contexts/translation.context';

export default function Page() {
  const { isLoadingTranslation, handleToggleTranslation, currentTranslation } =
    useTranslations();

  return (
    <>
      <button onClick={handleToggleTranslation}>Trocar</button>
    </>
  );
}
