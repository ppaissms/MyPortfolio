"use client";
import React from "react";
import Section_Heading from "./Section_Heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const About = () => {
  const ref = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 1 }}
      transition={{ delay: 0.2 }}
      id="about"
    >
      <Section_Heading title="About Me" />
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Chemical Engineering</span>, I decided to
        pursue my passion for programming. I enrolled in an CDAC for completing{" "}
        <span className="font-medium">
          Post Gradution Deploma in Adavance Computing
        </span>
        . <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, .Net core, and SQL Server
        </span>
        . I am also familiar with Advance JavaScript and TypeScript. I am always
        looking to learn new technologies.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
};

export default About;
