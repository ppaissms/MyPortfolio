"use client";
import React from "react";
import { motion } from "framer-motion";

const Section_Divider = () => {
  return (
    <motion.div
      className="hidden w-1 h-16 my-24 bg-gray-200 rounded-full sm:block"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    ></motion.div>
  );
};

export default Section_Divider;
