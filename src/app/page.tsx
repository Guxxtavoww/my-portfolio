'use client';

import { useTranslations } from '@/contexts/translation.context';

export default function Page() {
  const { isLoadingTranslation, handleToggleTranslation, currentTranslation } =
    useTranslations();

  return (
    <>
      <button onClick={handleToggleTranslation}>Trocar</button>
      {isLoadingTranslation ? (
        <span>Carregando...</span>
      ) : (
        <div className="max-w-full ">
          <pre className="w-full">
            {JSON.stringify(currentTranslation, null, 2)}
          </pre>
        </div>
      )}
    </>
  );
}
