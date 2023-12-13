'use client';

import Intro from '@/containers/intro';
import About from '@/containers/about';
import Projects from '@/containers/projects/projects';
import SectionDivider from '@/components/layout/section-divider';
import Skills from '@/containers/skills';

export default function Page() {
  return (
    <>
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
    </>
  );
}
