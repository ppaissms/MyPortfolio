"use client";
import Section_Divider from "@/components/Section_Divider";
import Intro from "../components/Intro";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Intro />
      <Section_Divider />
      <About />
      <Projects />
      <Skills />
      <Experience />
    </div>
  );
}
