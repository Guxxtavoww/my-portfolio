import type { ReactNode } from 'react';

declare global {
  export type Maybe<T> = T | null | undefined;

  export type WithChildren<Obj extends Record<string, any> = {}> = Obj & {
    children: ReactNode;
  };

  export type Langs = readonly 'pt-br' | 'eng';
}
