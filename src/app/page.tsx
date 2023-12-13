'use client';

import Intro from '@/containers/intro';
import About from '@/containers/about';
import SectionDivider from '@/components/layout/section-divider';

export default function Page() {
  return (
    <>
      <Intro />
      <SectionDivider />
      <About />
    </>
  );
}
