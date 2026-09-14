import React from 'react';

import { CgWorkAlt } from 'react-icons/cg';
import { FaLaptop, FaServer } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import { SiFreelancer } from 'react-icons/si';

import type { iExperience } from '@/translations/translations.types';

const experiences = [
  {
    icon: LuGraduationCap,
    date: '2021 - 2022',
    title: {
      'eng': 'Freelances',
      'pt-br': 'Freelances',
    },
    location: {
      'eng': 'From Home',
      'pt-br': 'De Casa',
    },
    description: {
      'eng':
        'After 6 months of intensive studying, I worked as a freelancer for several satisfied companies.',
      'pt-br':
        'Após 6 meses de estudos intensivos, atuei como freelancer para várias empresas satisfeitas.',
    },
  },
  {
    icon: CgWorkAlt,
    date: '2022 - 2024',
    title: {
      'eng': 'Front-End Developer',
      'pt-br': 'Desenvolvedor Front-End',
    },
    location: {
      'eng': 'São Paulo, São Paulo',
      'pt-br': 'São Paulo, São Paulo',
    },
    description: {
      'eng':
        'I worked as a front-end developer for 2 years in one job. I also upskilled to full stack using tools like NestJS.',
      'pt-br':
        'Trabalhei como desenvolvedor front-end por 2 anos em um emprego. Também aprimorei minhas habilidades para full stack usando ferramentas como NestJS.',
    },
  },
  {
    icon: FaServer,
    date: '2024 - 2024',
    title: {
      'eng': 'Back-End Developer - Innrev.ai',
      'pt-br': 'Desenvolvedor Back End - Innrev.ai',
    },
    location: {
      'eng': 'From Home',
      'pt-br': 'De Casa',
    },
    description: {
      'eng':
        'As a freelancer, I worked on a software development project with an American client, closely collaborating with another backend developer. We built a hotel reservation service using NestJS, prioritizing scalability and performance. I maintained clear and effective communication with the client in regular meetings, providing technical support and suggesting solutions. I used PostgreSQL to store and manage data, optimizing performance. This experience allowed me to enhance my technical skills, teamwork, and communication with international clients, contributing to my professional growth.',
      'pt-br':
        'Como freelancer, trabalhei em um projeto de desenvolvimento de software com um cliente americano, colaborando estreitamente com outro desenvolvedor backend. Construímos um serviço de reserva de hotéis usando NestJS, priorizando a escalabilidade e o desempenho. Mantive comunicação clara e eficaz com o cliente em reuniões regulares, fornecendo suporte técnico e sugerindo soluções. Utilizei PostgreSQL para armazenar e gerenciar dados, otimizando o desempenho. Essa experiência me permitiu aprimorar minhas habilidades técnicas, trabalho em equipe e comunicação com clientes internacionais, contribuindo para o meu crescimento profissional.',
    },
  },
  {
    icon: SiFreelancer,
    date: '2024 - 2025',
    title: {
      'eng': 'Full-Stack Developer',
      'pt-br': 'Desenvolvedor Full Stack',
    },
    location: {
      'eng': 'From Home',
      'pt-br': 'De Casa',
    },
    description: {
      'eng':
        'During this period i worked as a full-stack developer being a freelancer. I was responsible for developing web, mobile and back-end applications, both for international and national clients.',
      'pt-br':
        'Durante esse período, trabalhei como desenvolvedor full stack sendo freelancer. Fui responsavel por desenvolver aplicações web, mobile e back-ends, tanto para clientes internacionais quanto nacionais.',
    },
  },
  {
    icon: FaLaptop,
    date: '2025 - present',
    title: {
      'eng': 'Full-Stack Developer',
      'pt-br': 'Desenvolvedor Full Stack',
    },
    location: {
      'eng': 'From Home',
      'pt-br': 'De Casa',
    },
    description: {
      'eng':
        'I currently work for a company that develops software solutions for international and regional clients, acting as a freelance full-stack developer on on-demand projects. My work focuses primarily on payment management and integrations with third-party APIs.',
      'pt-br':
        'Trabalho atualmente em uma empresa que desenvolve soluções de software para clientes internacionais e regionais, atuando como desenvolvedor full stack freelancer em projetos sob demanda. Focando pricipalmente em gereciamento de pagamentos e integrações com APIs de terceiros.',
    },
  },
] as const;

export const getExperiences = (lang: Langs): iExperience[] =>
  experiences.map(({ icon, date, title, location, description }) => ({
    icon: React.createElement(icon),
    date,
    title: title[lang],
    location: location[lang],
    description: description[lang],
  }));
