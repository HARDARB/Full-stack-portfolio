import React from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import PatternBackground from "../Effects/pattern";
import AnimatedCodeBlock from "../Home/AnimateCode";
import ScrollIndicator from "../Effects/ScrollIndicator";

import {
  container,
  staggerContainer,
  itemFromTop,
  paragraphAnim,
  availabilityTag,
} from "../Effects/animationsHome";
import { IconsHome } from "./IconsHome";

export const HeroHome = () => {
     const homeRef = useRef(null);
      const ishomeInView = useInView(homeRef, {
          once: false, // set false so it re-triggers when scrolling back
          margin: "-10%", // optional tuning
      });
  return (
    <div className="relative overflow-hidden max-w-5xl mx-auto">
      <PatternBackground />

      <section className="relative z-22 font-poppins md:pt-10 md:pb-16">
        <motion.div
         ref={homeRef}
          variants={availabilityTag}
         initial="hidden"
                    animate={ishomeInView ? "show" : "hidden"}
          className="py-4 pl-5 pr-10 md:pr-0 md:pl-12 w-80"
        >
          <p className="dark:bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text dark:text-transparent text-teal-800 font-bold border text-sm dark:border-teal-500/30 border-teal-500/70 py-1 px-2 md:px-4 ">
            <span className="p-1 inline-block dark:bg-teal-400 bg-teal-800 rounded-full mr-4"></span>
            Available for opportunities
          </p>
        </motion.div>

        <motion.div
         ref={homeRef}
          variants={container}
         initial="hidden"
                    animate={ishomeInView ? "show" : "hidden"}
          className="py-10 pb-18 md:pb-26 lg:pt-16 md:pt-28 px-5 md:px-0 md:pl-12  dark:text-white text-black"
        >
          <motion.div
          ref={homeRef}
            variants={staggerContainer}
            initial="hidden"
                    animate={ishomeInView ? "show" : "hidden"}
            className="text-3xl md:text-4xl font-black md:leading-10"
          >
            <motion.span variants={itemFromTop}>Welcome!</motion.span>
            <br />
            <motion.span variants={itemFromTop}>I'm Adebayo,</motion.span>
            <br />
            <motion.span variants={itemFromTop}>
              a{" "}
              <span className="dark:bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text dark:text-transparent text-teal-800">
                Full Stack Developer
              </span>
            </motion.span>
          </motion.div>

          <motion.div
           ref={homeRef}
            variants={paragraphAnim}
             initial="hidden"
                    animate={ishomeInView ? "show" : "hidden"}
            className="text-xs md:text-sm font-normal mt-6 md:max-w-xl   dark:text-gray-300 text-gray-800"
          >
            I create innovative digital solutions using the latest technologies. My
            expertise includes building{" "}
            <span className="dark:bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text dark:text-transparent text-teal-800 font-semibold">
              React applications, developing robust websites, and implementing
              secure systems.
            </span>

          <IconsHome />

          </motion.div>

        </motion.div>
      </section>

      <div className="absolute hidden md:block inset-0 md:left-100 md:top-10 lg:left-8/12 opacity-80 top-20 pointer-events-none">
        <AnimatedCodeBlock />
      </div>

      <div className="flex justify-center relative">
        <ScrollIndicator />
      </div>
    </div>
  );
};
