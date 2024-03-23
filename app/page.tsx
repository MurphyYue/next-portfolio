import Intro from '@/components/intro';
import About from '@/components/about';
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import SectionDivider from '@/components/section-divider';

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
    </main>
  );
}
