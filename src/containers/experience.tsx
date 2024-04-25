'use client';

import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { useTheme } from '@/contexts/theme.context';
import { useTranslations } from '@/contexts/translation.context';
import { useSectionInView } from '@/hooks/use-section-in-view.hook';
import SectionHeading from '@/components/layout/section-heading';

export default function Experience() {
  const { theme } = useTheme();
  const { ref } = useSectionInView('#experience');
  const { currentTranslation, isLoadingTranslation } = useTranslations();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading isLoading={isLoadingTranslation}>
        {currentTranslation?.experiencesData.sectionHeading}
      </SectionHeading>
      {currentTranslation ? (
        <VerticalTimeline lineColor="">
          {currentTranslation.experiencesData.experiences.map((item, index) => (
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
                boxShadow: 'none',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                textAlign: 'left',
                padding: '1.3rem 2rem',
              }}
              contentArrowStyle={{
                borderRight:
                  theme === 'light'
                    ? '0.4rem solid #9ca3af'
                    : '0.4rem solid rgba(255, 255, 255, 0.5)',
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === 'light' ? 'white' : 'rgba(255, 255, 255, 0.15)',
                fontSize: '1.5rem',
              }}
              key={index}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      ) : null}
    </section>
  );
}
