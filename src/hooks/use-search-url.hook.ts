'use client';

import { useCallback, useMemo } from 'react';
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

  const params = useMemo(
    () => new URLSearchParams(searchParams.toString()),
    [searchParams]
  );

  const handleSetSearchParam = useCallback(
    (value: string) => {
      params.set(key, value);

      const newSearchParams = params.toString();

      return router.push(`${pathname}?${newSearchParams}`, { scroll: false });
    },
    [key, router, pathname, params]
  );

  const getSearchParamValue = useCallback(() => {
    return (searchParams.get(key) || defaultValue) as Value | undefined;
  }, [searchParams, key, defaultValue]);

  return {
    handleSetSearchParam,
    getSearchParamValue,
  };
}
