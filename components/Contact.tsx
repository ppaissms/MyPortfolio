"use client";
import { useSectionInView } from "@/lib/hooks";
import React from "react";
import Section_Heading from "./Section_Heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const ref = useSectionInView("Contact");
  return (
    <motion.section
      ref={ref}
      id="contact"
      className="scroll-mt-28 mb-28 sm:mb-40 w-[min(100%,38rem)]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Section_Heading title="Contact Me" />
      <p className="-mt-3 text-gray-700">
        Please contact me directly on{" "}
        <a className="underline" href="mailto:pranavpatil1462@gmail.com">
          pranavpatil1462@gmail.com
        </a>{" "}
        or through this form
      </p>
      <form
        className="flex flex-col mt-10 group"
        action={(formData) => {
          toast(`Thank You for Contacting me.`);
          // sendEmail(formData);
          // await sendEmail(formData);
        }}
      >
        <input
          type="email"
          className="px-4 border rounded-lg h-14 border-black/10"
          placeholder="Your Email"
          required
          maxLength={100}
          name="sederEmail"
        />
        <textarea
          className="px-4 py-3 my-3 border rounded-lg h-52 border-black/10"
          placeholder="Your Message"
          required
          maxLength={500}
          name="message"
        />
        <button
          type="submit"
          className="flex items-center gap-2 py-3 h-[3rem] w-[8rem] text-white transition-all bg-gray-500 rounded-full outline-none group px-7 focus:scale-105 hover:scale-105 hover:bg-gray-900 active:scale-105"
        >
          Submit
          <FaPaperPlane className="transition group-hover:-translate-y-1" />
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;
