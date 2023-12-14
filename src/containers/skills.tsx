'use client';

import React from 'react';
import { Variants, motion } from 'framer-motion';

import { useSectionInView } from '@/hooks/useSectionInView.hook';
import { useTranslations } from '@/contexts/translation.context';
import SectionHeading from '@/components/layout/section-heading';

const fadeInAnimationVariants: Variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView('#skills');
  const { currentTranslation, isLoadingTranslation } = useTranslations();

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading isLoading={isLoadingTranslation}>
        {currentTranslation?.skillsData.sectionName}
      </SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {isLoadingTranslation
          ? [0, 1, 2, 3, 4, 5].map((item) => (
              <div
                className="bg-gray-500 borderBlack rounded-xl transition-all w-12 h-6 dark:bg-white/10 dark:text-white/80 hover:bg-gray-300 cursor-pointer animate-pulse"
                key={item}
              />
            ))
          : currentTranslation?.skillsData.skills.map((skill, index) => (
              <motion.li
                className="bg-white borderBlack rounded-xl transition-all px-5 py-3 dark:bg-white/10 dark:text-white/80 hover:bg-gray-300 cursor-pointer select-none"
                key={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={index}
                onClick={() => navigator.clipboard.writeText(skill)}
              >
                {skill}
              </motion.li>
            ))}
      </ul>
    </section>
  );
}
