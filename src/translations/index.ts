'use client';

export default async function getTranslation(lang?: Langs) {
  switch (lang) {
    case 'pt-br':
      return import('./pt-br').then(({ ptBr }) => Promise.resolve(ptBr));
    case 'eng':
      return import('./eng').then(({ eng }) => Promise.resolve(eng));
    default:
      return import('./pt-br').then(({ ptBr }) => Promise.resolve(ptBr));
  }
}
