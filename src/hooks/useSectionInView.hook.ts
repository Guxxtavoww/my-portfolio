'use client';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { iLink } from '@/translations/types';
import { useActiveSection } from '@/contexts/active-section.context';

export function useSectionInView(sectionName: iLink['hash'], threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { handleSetActiveSection, timeOfLastClick } = useActiveSection();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      handleSetActiveSection(sectionName);
    }
  }, [inView, handleSetActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}
