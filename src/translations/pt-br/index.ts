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
};
