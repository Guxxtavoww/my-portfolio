import { getLinks } from '@/data/links.data';
import { skillsData } from '@/data/skills.data';
import { getProjects } from '@/data/projects.data';
import { getExperiences } from '@/data/experiences.data';

import { iTranslation } from '../types';

export const ptBr: iTranslation = {
  lang: 'pt-br',
  experiences: getExperiences('pt-br'),
  links: getLinks('pt-br'),
  projects: getProjects('pt-br'),
  skills: skillsData,
  intro: {
    contactText: 'Converse Comigo',
    introContent: [
      { type: 'span', className: 'font-bold', content: 'Olá, eu sou Gustavo.' },
      { type: 'text', content: ' Eu sou um ' },
      {
        type: 'span',
        className: 'font-bold',
        content: 'desenvolvedor full-stack',
      },
      { type: 'text', content: ' com ' },
      { type: 'span', className: 'font-bold', content: '3 anos' },
      { type: 'text', content: ' de experiência. Eu gosto de construir ' },
      { type: 'span', className: 'italic', content: 'sites e aplicativos' },
      { type: 'text', content: '. Meu foco é ' },
      { type: 'span', className: 'underline', content: 'React (Next.js)' },
    ],
  },
  footer: {
    copyRightText: 'Todos os direitos reservados.',
    aboutBoldText: 'Sobre esse site:',
    aboutText:
      'contruido com React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, hospedagem na plataforma Vercel.',
  },
};
