'use client';

import React from 'react';
import { motion } from 'framer-motion';

import { useSectionInView } from '@/hooks/use-section-in-view.hook';
import SectionHeading from '@/components/layout/section-heading';
import { useTranslations } from '@/contexts/translation.context';

export default function About() {
  const { ref } = useSectionInView('#about');
  const { currentTranslation, isLoadingTranslation } = useTranslations();

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading isLoading={isLoadingTranslation}>
        {currentTranslation?.about.sectionHeading}
      </SectionHeading>
      {isLoadingTranslation ? (
        <div className="flex flex-col gap-3 items-start w-full animate-pulse">
          <div className="h-5 w-full max-w-lg rounded-md bg-gray-500" />
          <div className="h-5 w-full max-w-lg rounded-md bg-gray-500" />
          <div className="h-5 w-full max-w-lg rounded-md bg-gray-500" />
        </div>
      ) : (
        <>
          <p className="mb-2">
            {currentTranslation?.about.paragraph1}{' '}
            <span className="font-bold">
              {currentTranslation?.about.highlight1}
            </span>{' '}
            &&{' '}
            <span className="font-bold">
              {currentTranslation?.about.highlight2}
            </span>{' '}
            {currentTranslation?.about.paragraph1_continuation}{' '}
            <span className="font-bold">
              {currentTranslation?.about.highlight3}
            </span>{' '}
            {currentTranslation?.about.paragraph1_continuation2}{' '}
            <span className="font-bold">
              {currentTranslation?.about.highlight4}
            </span>{' '}
            {currentTranslation?.about.paragraph1_continuation3}{' '}
            <span className="font-bold">
              {currentTranslation?.about.highlight5}.
            </span>
          </p>
          <p className="mb-2">
            {currentTranslation?.about.paragraph2}{' '}
            <span className="font-bold">
              {currentTranslation?.about.highlight6}
            </span>{' '}
            {currentTranslation?.about.paragraph2_continuation}{' '}
            <span className="font-bold">
              {currentTranslation?.about.highlight7}
            </span>{' '}
            {currentTranslation?.about.paragraph2_continuation2}
          </p>
          <p>{currentTranslation?.about.paragraph3}</p>
        </>
      )}
    </motion.section>
  );
}
