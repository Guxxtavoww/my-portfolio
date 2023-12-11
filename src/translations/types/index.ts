import type { IconType } from 'react-icons';

export interface iLink {
  name: string;
  hash: string;
}

export interface iExperience {
  title: string;
  location: string;
  description: string;
  icon: IconType;
  date: string;
}

export interface iProject {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
}

export type Skills = string[];

export interface iTranslation {
  lang: Langs;
  links: iLink[];
  experiences: iExperience[];
  projects: iProject[];
  skills: Skills;
}
