"use client";
import { projectsData } from "@/lib/data";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
type Props = {
  project: (typeof projectsData)[number];
};

const ProjectSection = ({ project }: Props) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.section
      ref={ref}
      style={{
        opacity: opacityProgress,
        scale: scaleProgress,
      }}
      className="group mb-4 sm:mb-8 last:mb-0 bg-gray-100 relative max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 sm:h-[20rem] even:pl-8 hover:bg-gray-200 transition"
    >
      <div className="pt-4 pb-8 flex flex-col h-full px-5 py-4 sm:max-w-[50%] sm:pr-2 sm:pt-10 sm:pl-10 group-even:ml-[18rem]">
        <h3 className="text-2xl font-semibold">{project.title}</h3>
        <p className="mt-2 leading-relaxed text-gray-700">
          {project.description}
        </p>
        <ul className="flex flex-wrap gap-2 mt-4 sm:mt-auto">
          {project.tags.map((tag, index) => (
            <li
              key={index}
              className="bg-black/[0.7] px-3 py-1 uppercase text-[0.8rem] tracking-wider text-white rounded-full"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <Image
        src={project.imageUrl}
        alt={project.title}
        quality={95}
        className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
                   transition           
                   group-hover:-translate-x-3
                   group-hover:-translate-y-3
                   group-hover:-rotate-3
                   group-hover:scale-[1.03]
                   group-even:right-[initial] group-even:-left-40
                   
                   group-even:group-hover:translate-x-3
                   group-even:group-hover:translate-y-3
                   group-even:group-hover:rotate-3"
      />
    </motion.section>
  );
};

export default ProjectSection;
