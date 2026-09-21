import { bleveBanner, expediaBanner, renapayBanner, wmsBanner } from '@/assets';
import type { iProject } from '@/translations/translations.types';

export const engProjects: iProject[] = [
  {
    title: 'WMS',
    description:
      'A distribution center management tool, particularly challenging due to the volatile nature of the business logic',
    tags: ['React', 'TypeScript', 'Redux', 'Styled Components'],
    imageUrl: wmsBanner,
  },
  {
    title: 'Expedia Scrappy',
    description:
      'A hotel management platform that includes web scraping to calculate average rates across hotels',
    imageUrl: expediaBanner,
    tags: ['Nest.js', 'PostgreSql', 'Jwt', 'TypeORM', 'Swagger', 'Zod'],
  },
  {
    title: 'Renapay',
    description:
      'A platform for managing vehicle debt payments, featuring coupons, partners, withdrawals, and more',
    imageUrl: renapayBanner,
    tags: [
      'Nest.js',
      'PostgreSql',
      'Jwt',
      'TypeORM',
      'Swagger',
      'Zod',
      'Redis',
      'S3',
      'Webhooks',
      'Captcha',
      'Bull',
      'Sentry',
    ],
  },
  {
    title: 'Bleve Landing Page',
    description:
      'A complete landing page for the company Bleve, focused on conversion, performance, and accessibility',
    imageUrl: bleveBanner,
    tags: [
      'React',
      'TypeScript',
      'TailwindCSS',
      'Framer Motion',
      'Vite',
      'React Hook Form',
      'Tanstack Router',
    ],
  },
];

export const ptBrProjects: iProject[] = [
  {
    title: 'WMS',
    description:
      'Ferramenta de gerenciamento de centros de distribuição (CD), extremamente desafiador, pela natureza volátil das regras de negócio',
    tags: ['React', 'TypeScript', 'Redux', 'Styled Components'],
    imageUrl: wmsBanner,
  },
  {
    title: 'Expedia Scrappy',
    description:
      'Uma plataforma de gestão de hotéis, inclui scraping para calcular números médios entre hotéis',
    imageUrl: expediaBanner,
    tags: ['Nest.js', 'PostgreSql', 'Jwt', 'TypeORM', 'Swagger', 'Zod'],
  },
  {
    title: 'Renapay',
    description:
      'Uma plataforma que possibilita o gerenciamento de pagamentos de debitos veiculares, com features de cupom, parceiros, saques e etc!',
    imageUrl: renapayBanner,
    tags: [
      'Nest.js',
      'PostgreSql',
      'Jwt',
      'TypeORM',
      'Swagger',
      'Zod',
      'Redis',
      'S3',
      'Webhooks',
      'Captcha',
      'Bull',
      'Sentry',
    ],
  },
  {
    title: 'Bleve Landing Page',
    description:
      'Uma landing page completa para a empresa Bleve, com foco em conversão, performance e acessibilidade',
    imageUrl: bleveBanner,
    tags: [
      'React',
      'TypeScript',
      'TailwindCSS',
      'Framer Motion',
      'Vite',
      'React Hook Form',
      'Tanstack Router',
    ],
  },
];

const projectsObj: Record<Langs, iProject[]> = {
  'pt-br': ptBrProjects,
  'eng': engProjects,
};

export const getProjects = (lang: Langs) => projectsObj[lang];
