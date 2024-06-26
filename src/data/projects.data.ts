import { eventsApp, nextJsBlogBanner, wmsBanner } from '@/assets';
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
      'A destribution center managment tool, very challeging due to the volatile nature of the bussiness logic',
    tags: ['React', 'TypeScript', 'Redux', 'Styled Components'],
    imageUrl: wmsBanner,
  },
  {
    title: 'Events App',
    description:
      'A events managment platform, that includes authentication and payment',
    imageUrl: eventsApp,
    tags: [
      'React',
      'Next.js',
      'Tailwind',
      'Shadcn UI',
      'Prisma',
      'PostgreSql',
      'Stripe.js',
      'Clerk.js',
    ],
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
  {
    title: 'App de eventos',
    description: 'Um app de criação e gerenciamentos de eventos customizados',
    imageUrl: eventsApp,
    tags: [
      'React',
      'Next.js',
      'Tailwind',
      'Shadcn UI',
      'Prisma',
      'PostgreSql',
      'Stripe.js',
      'Clerk.js',
    ],
  },
];

const projectsObj: Record<Langs, iProject[]> = {
  'pt-br': ptBrProjects,
  'eng': engProjects,
};

export const getProjects = (lang: Langs) => projectsObj[lang];
