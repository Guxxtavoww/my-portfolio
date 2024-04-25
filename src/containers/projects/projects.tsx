'use client';

import React from 'react';

import SectionHeading from '@/components/layout/section-heading';
import { useTranslations } from '@/contexts/translation.context';
import { useSectionInView } from '@/hooks/use-section-in-view.hook';

import Project from './project';

export default function Projects() {
  const { ref } = useSectionInView('#projects', 0.5);
  const { currentTranslation, isLoadingTranslation } = useTranslations();

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading isLoading={isLoadingTranslation}>
        {currentTranslation?.projects.sectionName}
      </SectionHeading>
      <div>
        {currentTranslation?.projects.projects.map((project, index) => (
          <Project {...project} key={index} />
        ))}
      </div>
    </section>
  );
}
