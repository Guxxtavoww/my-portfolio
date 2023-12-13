'use client';

import { useTranslations } from '@/contexts/translation.context';

export default function Page() {
  const { isLoadingTranslation, handleToggleTranslation } = useTranslations();

  return (
    <>
      <button onClick={handleToggleTranslation} disabled={isLoadingTranslation}>
        Trocar
      </button>
    </>
  );
}
