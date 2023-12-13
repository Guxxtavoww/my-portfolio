import type { IconType } from 'react-icons';

export interface iLink {
  name: string;
  hash:
    | '#home'
    | '#about'
    | '#projects'
    | '#skills'
    | '#experience'
    | '#contact';
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

export interface iFooterData {
  copyRightText: string;
  aboutBoldText: string;
  aboutText: string;
}

export type Skills = string[];

export interface iTranslation {
  lang: Langs;
  links: iLink[];
  experiences: iExperience[];
  projects: iProject[];
  skills: Skills;
  footer: iFooterData;
}
