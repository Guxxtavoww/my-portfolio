'use client';

import type { iTranslation } from './translations.types';

export async function getTranslation(lang?: Langs): Promise<iTranslation> {
  switch (lang) {
    case 'pt-br':
      return import('./pt-br.translation').then(({ ptBr }) =>
        Promise.resolve(ptBr)
      );
    case 'eng':
      return import('./eng.translation').then(({ eng }) =>
        Promise.resolve(eng)
      );
    default:
      return import('./pt-br.translation').then(({ ptBr }) =>
        Promise.resolve(ptBr)
      );
  }
}
