"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";
const Intro = () => {
  const ref = useSectionInView("Home");
  const { setActiveSection } = useActiveSectionContext();

  return (
    <section
      className="mb-28 max-w-[50rem] text-center sm:mb-1 scroll-mt-28"
      id="home"
      ref={ref}
    >
      <div className="flex items-end justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="/ProfilePhoto.JPG"
              alt="Pranav Patil"
              width="400"
              height="400"
              quality="95"
              priority={true}
              //to load image faster
              className="w-28 h-28 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mt-4 mb-10 px-4 text-4xl font-medium !leading-[1.5] sm:text-2xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 1 }}
      >
        <span className="font-bold">Hello, I'm Pranav.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">1 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Link
          href="#contact"
          className="flex items-center gap-2 py-3 text-white transition bg-gray-500 rounded-full outline-none group px-7 focus:scale-105 hover:scale-105 hover:bg-gray-900 active:scale-105"
          onClick={() => {
            setActiveSection("Contact");
          }}
        >
          Contact me here
          <BsArrowRight className="transition group-hover:translate-x-2" />
        </Link>
        <a
          className="flex items-center gap-2 py-3 text-gray-900 bg-white border rounded-full outline-none cursor-pointer px-7 group focus:scale-105 hover:scale-105 hover:bg-gray-100 active:scale-105 border-black/15"
          href="/CV.pdf"
          download={true}
        >
          Download CV
          <HiDownload className="transition group-hover:translate-y-1" />
        </a>
        <a
          className="flex items-center gap-2 p-4 text-gray-700 bg-white rounded-full outline-none cursor-pointer group focus:scale-105 hover:scale-105 hover:bg-gray-100 active:scale-105 border-black/15"
          href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="flex items-center gap-2 p-4 text-gray-700 bg-white rounded-full outline-none cursor-pointer group focus:scale-105 hover:scale-105 hover:bg-gray-100 active:scale-105 border-black/15"
          href="#"
          target="_blank"
        >
          <FaGithub />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
