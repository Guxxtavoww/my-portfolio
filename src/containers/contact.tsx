'use client';

import React, { useTransition } from 'react';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

import { myEmail } from '@/constants';
import { sendEmail } from '@/actions/send-email.action';
import SubmitButton from '@/components/layout/submit-button';
import { useSectionInView } from '@/hooks/useSectionInView.hook';
import { useTranslations } from '@/contexts/translation.context';
import SectionHeading from '@/components/layout/section-heading';

export default function Contact() {
  const [isPending, startTransition] = useTransition();
  const { ref } = useSectionInView('#contact');
  const { currentTranslation, isLoadingTranslation } = useTranslations();

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading isLoading={isLoadingTranslation}>
        {currentTranslation?.contactData.sectionHeading}
      </SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        {currentTranslation?.contactData.contactText}
        <a className="underline" href={`mailto:${myEmail}`}>
          {myEmail}
        </a>{' '}
        {currentTranslation?.contactData.orText}
      </p>
      <form
        className="mt-10 flex flex-col dark:text-black"
        action={(formData) => {
          startTransition(async () => {
            const { data, error } = await sendEmail(formData);

            if (error) {
              toast.error(error);
              return;
            }

            toast.success('👍');
          });
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder={currentTranslation?.contactData.emailInputPlaceholder}
        />
        <textarea
          className="h-52 overflow-y-auto my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none resize-none"
          name="message"
          required
          maxLength={5000}
          placeholder={currentTranslation?.contactData.textAreaPlaceholder}
        />
        <SubmitButton
          disabled={isLoadingTranslation || isPending}
          text={currentTranslation?.contactData.submitButtonText || 'Enviar'}
        />
      </form>
    </motion.section>
  );
}
