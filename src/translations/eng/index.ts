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
};
