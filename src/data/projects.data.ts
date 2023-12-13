import { nextJsBlogBanner, wmsBanner } from '@/assets';
import { iProject } from '@/translations/types';

export const engProjects: iProject[] = [
  {
    title: 'Next JS blog',
    description: 'A Project made to study the NextJS framework.',
    tags: ['React', 'Next.js', 'Postgress', 'Tailwind', 'Supabase', 'Zustand'],
    imageUrl: nextJsBlogBanner,
  },
  {
    title: 'WMS',
    description:
      'A destribution center managment tool, very challeging due to the volatile nature of the bussiness logis',
    tags: ['React', 'TypeScript', 'Redux', 'Styled Components'],
    imageUrl: wmsBanner,
  },
];

export const ptBrProjects: iProject[] = [
  {
    title: 'Next JS Blog',
    description: 'Um projeto feito para estudar o framework do NextJS',
    tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
    imageUrl: nextJsBlogBanner,
  },
  {
    title: 'WMS',
    description:
      'Ferramenta de gerenciamento de centros de distribuição (CD), extremamente desafiador, pela natureza volátil das regras de negócio',
    tags: ['React', 'TypeScript', 'Redux', 'Styled Components'],
    imageUrl: wmsBanner,
  },
];

const projectsObj: Record<Langs, iProject[]> = {
  'pt-br': ptBrProjects,
  'eng': engProjects,
};

export const getProjects = (lang: Langs) => projectsObj[lang];
