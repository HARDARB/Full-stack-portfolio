import React from 'react';
import { FaBrain, FaCode, FaSquarespace } from 'react-icons/fa';
import { FaCubesStacked } from 'react-icons/fa6';
import { motion } from "framer-motion";
import { useIsInView } from "../Effects/useIsInView";

import {
  hoverEffect,
  containerVariants,
  childVariants,
} from "../Effects/animationsAbout";

// 💡 Separated skill items
const skillItems = [
  {
    Icon: FaCode,
    title: "Clean Code",
    desc: "I write clean, maintainable code with a focus on readability and performance.",
  },
  {
    Icon: FaSquarespace,
    title: "Professional",
    desc: "I deliver projects on time with clear communication throughout the process.",
  },
  {
    Icon: FaBrain,
    title: "Problem Solver",
    desc: "I approach complex challenges with analytical thinking and creative solutions.",
  },
  {
    Icon: FaCubesStacked,
    title: "Full Stack",
    desc: "Experienced in both frontend and backend development with modern frameworks.",
  },
];

export const SkillsAbout = () => {
  const [ref, isInView] = useIsInView();

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="grid grid-cols-2 gap-4 mt-40 lg:mt-48"
    >
      {skillItems.map(({ Icon, title, desc }, index) => (
        <motion.div
          key={index}
          variants={childVariants}
          whileHover={hoverEffect}
          className="border border-gray-500 p-4 dark:hover:bg-gray-800 hover:bg-gray-200 transition"
        >
          <Icon className="dark:text-teal-500 text-teal-800 text-4xl mb-4" />
          <h4 className="dark:text-white text-black font-semibold mb-2">{title}</h4>
          <p className="text-xs leading-5 font-normal dark:text-gray-400 text-gray-500">{desc}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};
