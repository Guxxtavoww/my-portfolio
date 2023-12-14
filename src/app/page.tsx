'use client';

import Intro from '@/containers/intro';
import About from '@/containers/about';
import Skills from '@/containers/skills';
import Experience from '@/containers/experience';
import Projects from '@/containers/projects/projects';
import SectionDivider from '@/components/layout/section-divider';

export default function Page() {
  return (
    <>
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
    </>
  );
}
