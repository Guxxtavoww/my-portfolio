import { getLinks } from '@/data/links.data';
import { skillsData } from '@/data/skills.data';
import { getProjects } from '@/data/projects.data';
import { getExperiences } from '@/data/experiences.data';

import { iTranslation } from '../types';

export const eng: iTranslation = {
  lang: 'eng',
  experiences: getExperiences('eng'),
  links: getLinks('eng'),
  projects: getProjects('eng'),
  skills: skillsData,
  footer: {
    copyRightText: 'All rights reserved.',
    aboutBoldText: 'About this website:',
    aboutText:
      'built with React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, Vercel hosting.',
  },
};
