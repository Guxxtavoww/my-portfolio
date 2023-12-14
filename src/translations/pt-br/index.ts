import { getLinks } from '@/data/links.data';
import { skillsData } from '@/data/skills.data';
import { getProjects } from '@/data/projects.data';
import { getExperiences } from '@/data/experiences.data';

import { iTranslation } from '../types';

export const ptBr: iTranslation = {
  lang: 'pt-br',
  experiencesData: {
    sectionHeading: 'Experiências',
    experiences: getExperiences('pt-br'),
  },
  links: getLinks('pt-br'),
  projects: {
    sectionName: 'Projetos',
    projects: getProjects('pt-br'),
  },
  skillsData: {
    sectionName: 'Minhas Habilidades',
    skills: skillsData,
  },
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
      {
        type: 'span',
        className: 'underline',
        content: 'React (Next.js) e NestJS',
      },
    ],
  },
  about: {
    sectionHeading: 'Sobre mim',
    paragraph1:
      'Olá! Sou o Gustavo, apaixonado por desvendar os segredos por trás de',
    highlight1: 'jogos',
    highlight2: 'tecnologia',
    paragraph1_continuation:
      'desde cedo. O fascínio tornou-se uma paixão quando experimentei pela primeira vez um',
    highlight3: 'Arduino',
    paragraph1_continuation2: ', despertando meu interesse em',
    highlight4: 'lógica de programação',
    paragraph1_continuation3: 'e a maravilha da',
    highlight5: 'internet',
    paragraph2: 'Com um background técnico sólido, mergulhei no universo do',
    highlight6: 'desenvolvimento web',
    paragraph2_continuation:
      'após concluir meus estudos. Ao longo de 3 anos, cresci profissionalmente trabalhando como',
    highlight7: 'desenvolvedor web',
    paragraph2_continuation2:
      'para freelancers e empresas. Meu objetivo agora é ampliar minha rede de contatos e aprimorar ainda mais minhas habilidades.',
    paragraph3:
      'Estou sempre aberto a novas oportunidades e conexões. Se você está procurando colaborações ou simplesmente deseja trocar ideias, não hesite em me chamar. Vamos construir algo incrível juntos! 👊',
  },
  footer: {
    copyRightText: 'Todos os direitos reservados.',
    aboutBoldText: 'Sobre esse site:',
    aboutText:
      'construído com React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, hospedagem na plataforma Vercel.',
  },
};
