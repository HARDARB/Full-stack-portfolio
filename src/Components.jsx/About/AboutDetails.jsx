import React from 'react'
import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "../Effects/useIsInView";
import { CgArrowsExpandUpRight } from 'react-icons/cg';
import ScrollLink from '../ScrollTop'

// Animation variants
import {
    hoverEffect,
    paragraphAnim,
    containerVariants,
} from "../Effects/animationsAbout";


export const AboutDetails = () => {
    const isMobile = useIsMobile(1024);
    const AboutRef = useRef(null);
        const isAboutInView = useInView(AboutRef, {
            once: false, // set false so it re-triggers when scrolling back
            margin: "-10%", // optional tuning
        });

    const motionProps = isMobile
        ? {
            variants:  containerVariants,
            initial: "hidden",
            animate: isAboutInView ? "visible" : "hidden",
        }
        : {
            variants: paragraphAnim,
            initial: "hidden",
            animate: isAboutInView ? "show" : "hidden",
        };




    console.log("isMobile:", isMobile);
    return (
        <motion.div  ref={AboutRef}
  {...motionProps}
  className='mt-20 md:mt-10 lg:mt-0 mb-20'>
            <hr className='bg-gray-800 border-0 h-px mb-4 block md:hidden' />
            <p className="mb-8 text-sm leading-6 font-normal dark:text-gray-200 text-black">
                With 4+ years of experience in web development, I specialize in building robust applications using modern technologies like React, Next.js, and Node.js. My focus is on creating intuitive user interfaces backed by clean, efficient code. I approach each project with meticulous attention to detail, ensuring that every pixel is in place and every interaction feels natural. Beyond just coding, I pride myself on my ability to understand complex business requirements and translate them into elegant technical solutions.
            </p>

            <div className='border-l-2 border-teal-500 md:pl-4 pl-2'>
                <p className="mb-10 text-sm font-normal mt-4 dark:text-gray-400 text-black pl-4 pt-2">
                    “I believe great web apps should be both attractive and functional, delivering exceptional value while providing a seamless user experience.”
                </p>
            </div>

            <div className="flex space-x-4 mb-6">
                <ScrollLink to='/projects'>
                    <motion.div whileHover={hoverEffect}>
                        <div  className="border border-teal-500 dark:text-teal-500 text-teal-800 px-2 md:px-4 py-2 text-xs font-medium hover:bg-teal-600 hover:text-white transition">
                            View my works <CgArrowsExpandUpRight className='inline text-lg ml-2' />
                        </div>
                    </motion.div>
                </ScrollLink>
                <ScrollLink to='/contact'>
                    <motion.div whileHover={hoverEffect}>
                        <div  className="border border-gray-500 px-2 md:px-4 py-2 text-xs dark:text-white text-black font-medium dark:hover:bg-gray-700 hover:bg-gray-200  transition">
                            Get in touch <CgArrowsExpandUpRight className='inline text-lg ml-2' />
                        </div>
                    </motion.div>
                </ScrollLink>
            </div>

        </motion.div>
    )
}
