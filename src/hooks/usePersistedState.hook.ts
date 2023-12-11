'use client';

import { useEffect, useState } from 'react';

export type HookResponse<T> = readonly [
  T,
  React.Dispatch<React.SetStateAction<T>>
];

export function usePersitedState<T>(
  initialState: T,
  storageKey: string
): HookResponse<T> {
  // Check if window object is defined (browser environment)
  const isClient = typeof window === 'object';

  const [state, setState] = useState(() => {
    if (isClient) {
      const storageValue = window.localStorage.getItem(storageKey);

      if (storageValue) {
        return JSON.parse(storageValue) as T;
      }
    }

    return initialState;
  });

  useEffect(() => {
    // Check if window object is defined (browser environment)
    if (isClient) {
      window.localStorage.setItem(storageKey, JSON.stringify(state));
    }
  }, [state, storageKey, isClient]);

  return [state, setState];
}
