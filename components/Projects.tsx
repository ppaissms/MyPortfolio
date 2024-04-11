"use client";
import React from "react";
import Section_Heading from "./Section_Heading";
import ProjectSection from "./ProjectSection";
import { useSectionInView } from "@/lib/hooks";
import { projectsData } from "@/lib/data";

const Projects = () => {
  const ref = useSectionInView("Projects");

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <Section_Heading title="My Projects" />
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <ProjectSection project={project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
