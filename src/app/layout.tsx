import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

// import { Toaster } from '@/components/ui/toaster';
import { TranslationProvider } from '@/contexts/translation.context';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio Gustavo Augusto',
  description:
    'Site pra fins pessoais, e de negócios. Com finalidade de demonstrar minhas habilidades como desenvolvedor de software',
};

export default function RootLayout({ children }: WithChildren) {
  return (
    <html lang="pt-br" className="!scroll-smooth">
      <body
        className={`${inter.className} w-screen overflow-x-hidden bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
        suppressHydrationWarning={true}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]" />
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]" />
        <TranslationProvider>
          <main className="flex flex-col items-center px-4">{children}</main>
        </TranslationProvider>
        {/* <Toaster /> */}
      </body>
    </html>
  );
}
