import type { iProject } from '@/translations/translations.types';
import {
  wmsBanner,
  expediaBanner,
} from '@/assets';

export const engProjects: iProject[] = [
  {
    title: 'WMS',
    description:
      'A destribution center managment tool, very challeging due to the volatile nature of the bussiness logic',
    tags: ['React', 'TypeScript', 'Redux', 'Styled Components'],
    imageUrl: wmsBanner,
  },
  {
    title: 'Expedia Scrappy',
    description:
      'A hotels managment platform, includes scrapping to calculate avareges numbers between hotels',
    imageUrl: expediaBanner,
    tags: ['Nest.js', 'PostgreSql', 'Jwt', 'TypeORM', 'Swagger', 'Zod'],
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
];

const projectsObj: Record<Langs, iProject[]> = {
  'pt-br': ptBrProjects,
  'eng': engProjects,
};

export const getProjects = (lang: Langs) => projectsObj[lang];
