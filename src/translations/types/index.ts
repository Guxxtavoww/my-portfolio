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

export interface iIntroData {
  contactText: string;
  introContent: {
    type: string;
    className?: string;
    content: string;
  }[];
}

export interface iAboutData {
  sectionHeading: string;
  paragraph1: string;
  highlight1: string;
  highlight2: string;
  paragraph1_continuation: string;
  highlight3: string;
  paragraph1_continuation2: string;
  highlight4: string;
  paragraph1_continuation3: string;
  highlight5: string;
  paragraph2: string;
  highlight6: string;
  paragraph2_continuation: string;
  highlight7: string;
  paragraph2_continuation2: string;
  paragraph3: string;
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
  intro: iIntroData;
  about: iAboutData;
  footer: iFooterData;
}
