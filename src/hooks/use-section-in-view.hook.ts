'use client';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import type { iLink } from '@/translations/translations.types';
import { useActiveSection } from '@/contexts/active-section.context';

export function useSectionInView(sectionName: iLink['hash'], threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { handleSetActiveSection } = useActiveSection();

  useEffect(() => {
    if (inView) {
      handleSetActiveSection(sectionName);
    }
  }, [inView, handleSetActiveSection, sectionName]);

  return {
    ref,
  };
}
