import React from 'react';
import { FaReact, FaServer } from 'react-icons/fa';
import { CgWorkAlt } from 'react-icons/cg';
import { LuGraduationCap } from 'react-icons/lu';

import { iExperience } from '@/translations/types';

export const engExperiences: iExperience[] = [
  {
    title: 'Freelances',
    location: 'From Home',
    description:
      'After 6 months of intensive studiyng i acted as a freelancer for several satisfyed companies',
    icon: React.createElement(LuGraduationCap),
    date: '2021 - 2022',
  },
  {
    title: 'Front-End Developer',
    location: 'São Paulo, São Paulo',
    description:
      'I worked as a front-end developer for 2 years in 1 job. I also upskilled to the full stack using tools like NestJS.',
    icon: React.createElement(CgWorkAlt),
    date: '2022 - 2024',
  },
  {
    title: 'Back-End Developer - Innrev.ai',
    location: 'From Home',
    description:
      'As a freelancer, I worked on a software development project with an American client, closely collaborating with another backend developer. We built a hotel reservation service using NestJS, prioritizing scalability and performance. I maintained clear and effective communication with the client in regular meetings, providing technical support and suggesting solutions. I used PostgreSQL to store and manage data, optimizing performance. This experience allowed me to enhance my technical skills, teamwork, and communication with international clients, contributing to my professional growth.',
    icon: React.createElement(FaServer),
    date: '2024 - 2024',
  },
  {
    title: 'Full-Stack Developer',
    location: 'From Home',
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, React Native, Next.js, TypeScript, Tailwind, Prisma, MongoDB, MySql, TypeORM and NestJS. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: '2024 - present',
  },
];

export const ptBrExperiences: iExperience[] = [
  {
    title: 'Freelances',
    location: 'De Casa',
    description:
      'Após 6 meses de estudos intensivos, atuei como freelancer para várias empresas satisfeitas',
    icon: React.createElement(LuGraduationCap),
    date: '2021 - 2022',
  },
  {
    title: 'Desenvolvedor Front-End',
    location: 'São Paulo, São Paulo',
    description:
      'Trabalhei como desenvolvedor front-end por 2 anos em um emprego. Também aprimorei minhas habilidades para full stack usando ferramentas como NestJS.',
    icon: React.createElement(CgWorkAlt),
    date: '2022 - 2024',
  },
  {
    title: 'Desenvolvedor Back End - Innrev.ai',
    location: 'De casa',
    description:
      'Como freelancer, trabalhei em um projeto de desenvolvimento de software com um cliente americano, colaborando estreitamente com outro desenvolvedor backend. Construímos um serviço de reserva de hotéis usando NestJS, priorizando a escalabilidade e o desempenho. Mantive comunicação clara e eficaz com o cliente em reuniões regulares, fornecendo suporte técnico e sugerindo soluções. Utilizei PostgreSQL para armazenar e gerenciar dados, otimizando o desempenho. Essa experiência me permitiu aprimorar minhas habilidades técnicas, trabalho em equipe e comunicação com clientes internacionais, contribuindo para o meu crescimento profissional.',
    icon: React.createElement(FaServer),
    date: '2024 - 2024',
  },
  {
    title: 'Desenvolvedor Full Stack',
    location: 'De Casa',
    description:
      'Atualmente sou um desenvolvedor full stack trabalhando como freelancer. Minha stack inclui React, React Native, Next.js, TypeScript, Tailwind, Prisma, MongoDB, MySql, TypeORM e NestJS. Estou aberto a oportunidades em período integral.',
    icon: React.createElement(FaReact),
    date: '2024 - presente',
  },
];

const experiencesObj: Record<Langs, iExperience[]> = {
  'pt-br': ptBrExperiences,
  'eng': engExperiences,
};

export const getExperiences = (lang: Langs) => experiencesObj[lang];
