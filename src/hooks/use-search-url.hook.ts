'use client';

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname, useSearchParams } from 'next/navigation';

/**
 * Custom hook for managing a search parameter in the URL.
 *
 * @param key - The search parameter key.
 * @param defaultValue - The default value for the search parameter.
 */
export function useSearchUrl<Value = string>(
  key: string,
  defaultValue?: Value
) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSetSearchParam = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams.toString());
    
      params.set(key, value);

      const newSearchParams = params.toString();

      return router.push(`${pathname}?${newSearchParams}`, { scroll: false });
    },
    [searchParams, key, router, pathname]
  );

  const getSearchParamValue = useCallback(() => {
    return (searchParams.get(key) || defaultValue) as Value | undefined;
  }, [searchParams, key, defaultValue]);

  return {
    handleSetSearchParam,
    getSearchParamValue,
  };
}
