"use client";
import { useSectionInView } from "@/lib/hooks";
import React from "react";
import Section_Heading from "./Section_Heading";
import { delay, motion } from "framer-motion";
import { skillsData } from "@/lib/data";

const fadeInAnimateVArient = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.05,
    },
  }),
};

const Skills = () => {
  const ref = useSectionInView("Skills");
  return (
    <section
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
      id="skills"
    >
      <Section_Heading title="My Skills" />
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            className="bg-white border border-black/[0.5] rounded-lg px-5 py-3"
            variants={fadeInAnimateVArient}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
