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
  intro: {
    contactText: 'Contact Me',
    introContent: [
      {
        type: 'span',
        className: 'font-bold',
        content: "Hello, I'm Gustavo.",
      },
      {
        type: 'text',
        content: " I'm a ",
      },
      {
        type: 'span',
        className: 'font-bold',
        content: 'full-stack developer',
      },
      {
        type: 'text',
        content: ' with ',
      },
      {
        type: 'span',
        className: 'font-bold',
        content: '3 years',
      },
      {
        type: 'text',
        content: ' of experience. I enjoy building ',
      },
      {
        type: 'span',
        className: 'italic',
        content: 'sites & apps',
      },
      {
        type: 'text',
        content: '. My focus is ',
      },
      {
        type: 'span',
        className: 'underline',
        content: 'React (Next.js) & NestJS',
      },
    ],
  },
  footer: {
    copyRightText: 'All rights reserved.',
    aboutBoldText: 'About this website:',
    aboutText:
      'built with React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, Vercel hosting.',
  },
};
