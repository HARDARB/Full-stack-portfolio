import React from 'react'
import PatternBackground from '../Effects/pattern'
import { CgArrowsExpandUpRight } from 'react-icons/cg'
import { SectionProject } from './SectionProject'
import ScrollLink from '../ScrollTop'
import { motion } from "framer-motion";
import { useIsInView } from "../Effects/useIsInView";

import {
    FromTop,
    FromBottom,
    containerVariants,
    hoverEffect,
} from "../Effects/animationsProject.jsx";

export const HeroProject = () => {
    const [ref, isInView, ProjectRef, isProjectInView ] = useIsInView();
  
    return (
        <div className='relative min-h-screen overflow-hidden dark:text-white text-black font-poppins '>

            <div>
                <PatternBackground />
            </div>


            <div className="pt-10 pb-10 px-5 md:px- relative z-22">
                <div>
                    {/* Section Header */}
                    <motion.div
                        variants={FromTop}
                        ref={ProjectRef}
                        initial="hidden"
                        animate={isProjectInView ? "show" : "hidden"}
                        className=' text-3xl md:text-4xl font-bold flex md:items-center md:justify-center'>
                        <h1 > Recent
                            <span className="dark:bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text  dark:text-transparent text-teal-800">Projects</span>
                        </h1>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        ref={ProjectRef}
                        variants={FromBottom}
                        initial="hidden"
                        animate={isProjectInView ? "show" : "hidden"} className=" text-sm font-normal mt-4 dark:text-gray-300 text-black md:text-center max-w-2xl mx-auto md:mb-8">
                        Showcasing my work on projects ranging from web applications to mobile solutions, with a focus on user experience and technical excellence.
                    </motion.p>


                    {/* Projects Grid */}
                    <SectionProject />


                    <motion.div
                        ref={ref}
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}>
                        <div className='mt-20 max-w-4xl mx-auto'>
                            <p className='mb-4 w-140 text-sm'>These are just a selection of my professional projects. I have worked on 30+ projects across various industries.</p>
                            <motion.button whileHover={hoverEffect} className="border border-teal-500 dark:text-teal-500 text-teal-800 px-4 py-2 text-xs font-bold hover:bg-teal-600 hover:text-white transition">
                                View my works <CgArrowsExpandUpRight className='inline text-lg ml-2' />
                            </motion.button>
                        </div>
                        <motion.div whileHover={hoverEffect} className='flex space-x-2 md:space-x-4 text-sm justify-center dark:text-white text-black my-8 max-w-4xl'>
                            <p>Want to read my recent articles? </p>
                            <p>Click </p> <ScrollLink
                                to='/articles'
                                className='dark:text-teal-500 text-teal-800 font-medium'
                            >
                                here <CgArrowsExpandUpRight className='inline text-xl' />
                            </ScrollLink>
                        </motion.div>
                    </motion.div>

                </div>
            </div>

        </div>
    )
}
