import { yearsOfExpirence } from '@/constants';
import { getLinks } from '@/data/links.data';
import { skillsData } from '@/data/skills.data';
import { getProjects } from '@/data/projects.data';
import { getExperiences } from '@/data/experiences.data';

import { iTranslation } from './translations.types';

export const eng: iTranslation = {
  lang: 'eng',
  experiencesData: {
    sectionHeading: 'Experiences',
    experiences: getExperiences('eng'),
  },
  links: getLinks('eng'),
  projects: {
    sectionName: 'Projects',
    projects: getProjects('eng'),
  },
  skillsData: {
    sectionName: 'My Skils',
    skills: skillsData,
  },
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
        content: `${yearsOfExpirence} years`,
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
        content: 'React (Next.js), NestJS && Rust',
      },
    ],
  },
  about: {
    sectionHeading: 'About me',
    paragraph1:
      "Hello! I'm Gustavo, passionate about uncovering the secrets behind",
    highlight1: 'games',
    highlight2: 'technology',
    paragraph1_continuation:
      'since an early age. The fascination turned into a passion when I first experimented with an',
    highlight3: 'Arduino',
    paragraph1_continuation2: ', sparking my interest in',
    highlight4: 'programming logic',
    paragraph1_continuation3: 'and the wonders of the',
    highlight5: 'internet',
    paragraph2:
      'With a solid technical background, I immersed myself in the universe of',
    highlight6: 'web development',
    paragraph2_continuation:
      'after completing my studies. Over 3 years, I grew professionally working as a',
    highlight7: 'web developer',
    paragraph2_continuation2:
      'for freelancers and companies. My goal now is to expand my network and further enhance my skills.',
    paragraph3:
      "I'm always open to new opportunities and connections. If you're looking for collaborations or just want to exchange ideas, feel free to reach out. Let's build something amazing together! 👊",
  },
  contactData: {
    sectionHeading: 'Contact Me',
    contactText: 'Please contact me directly at ',
    orText: 'or through this form.',
    emailInputPlaceholder: 'Your email',
    textAreaPlaceholder: 'Your message',
    submitButtonText: 'Send',
  },
  footer: {
    copyRightText: 'All rights reserved.',
    aboutBoldText: 'About this website:',
    aboutText:
      'built with React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, Vercel hosting.',
  },
};
