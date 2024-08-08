'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiDownload } from 'react-icons/hi';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare, FaWhatsappSquare } from 'react-icons/fa';

import { useSectionInView } from '@/hooks/use-section-in-view.hook';
import { useActiveSection } from '@/contexts/active-section.context';
import { useTranslations } from '@/contexts/translation.context';
import {
  myGithubLink,
  myLinkdinLink,
  myWhatsappEngLink,
  myWhatsappPtBrLink,
} from '@/constants';

export default function Intro() {
  const { ref } = useSectionInView('#home', 0.5);
  const { handleSetActiveSection } = useActiveSection();
  const { currentTranslation, isLoadingTranslation } = useTranslations();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2,
            }}
          >
            <Image
              src="https://avatars.githubusercontent.com/u/81970233?s=96&v=4"
              alt="Gustavo portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl select-none"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {isLoadingTranslation ? (
          <div role="status" className="max-w-full animate-pulse">
            <div className="h-2.5 bg-gray-100 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div className="h-2 bg-gray-100 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
            <div className="h-2 bg-gray-100 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-100 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          currentTranslation?.intro.introContent.map((item, index) =>
            item.type === 'span' ? (
              <span key={index} className={item.className}>
                {item.content}
              </span>
            ) : (
              <span key={index}>{item.content}</span>
            )
          )
        )}
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => handleSetActiveSection('#contact')}
        >
          {currentTranslation?.intro.contactText}{' '}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href={
            currentTranslation
              ? currentTranslation.lang === 'pt-br'
                ? '/GustavoAugusto-CV-PT-BR.pdf'
                : '/GustavoAugusto-CV-Eng.pdf'
              : '/GustavoAugusto-CV-PT-BR.pdf'
          }
          download
        >
          Download CV{' '}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href={myLinkdinLink}
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href={myGithubLink}
          target="_blank"
        >
          <FaGithubSquare />
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href={
            currentTranslation?.lang
              ? currentTranslation.lang === 'pt-br'
                ? myWhatsappPtBrLink
                : myWhatsappEngLink
              : myWhatsappPtBrLink
          }
          target="_blank"
        >
          <FaWhatsappSquare />
        </a>
      </motion.div>
    </section>
  );
}
