import React from 'react'
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Articles } from './Articles'
import PatternBackground from '../Effects/pattern'
import { CgArrowsExpandUpRight } from 'react-icons/cg'
import ScrollLink from '../ScrollTop'
import { motion } from "framer-motion";
import { useIsInView } from "../Effects/useIsInView";

import {
    FromTop,
    FromBottom,
    containerVariants,
    hoverEffect,
} from "../Effects/animationsArticles.jsx";

export const HeroArticle = () => {
    const [ref, isInView, headerRef, isHeaderInView] = useIsInView();
   

    return (
        <div className=' dark:text-white text-black p-5 pt-2 min-h-screen font-poppins'>
            <div>
                <PatternBackground />
            </div>


            <div className='lg:py-10 relative z-20'>
                {/* Section Header */}
                <motion.div
                    ref={headerRef}
                    variants={FromTop}
                    initial="hidden"
                    animate={isHeaderInView ? "show" : "hidden"} 
                    className='text-3xl md:text-4xl font-bold max-w-3xl mx-auto md:text-center'>
                    <h1 > Writing on
                        <span className="dark:bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text  dark:text-transparent text-teal-800">Tech Solutions, Bug fixing and Tech Industry.</span>
                    </h1>
                </motion.div>

                {/* Description */}
                <motion.p
                    variants={FromBottom}
                    initial="hidden"
                    animate={isHeaderInView ? "show" : "hidden"} 
                    className="text-xs md:text-sm font-normal mt-4 dark:text-gray-300 text-black md:text-center max-w-2xl mx-auto mb-8">
                    All of my long-form thoughts on community, leadership, volunteering, and more, collected in chronological order.
                </motion.p>

                {/* Articles */}
                <Articles />

                {/* Home */}
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    whileHover={hoverEffect}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"} 
                    className='flex justify-center space-x-2  md:space-x-4 text-xs md:text-sm text-black dark:text-white mt-20 max-w-3xl mx-auto'>
                    <p>Want to contact me? </p>
                    <p>Click
                    </p> <ScrollLink
                        to='/contact'
                        className='dark:text-teal-500 text-teal-800 font-medium'
                    >
                        here <CgArrowsExpandUpRight className='inline text-xl' />
                    </ScrollLink>
                </motion.div>
            </div>

        </div>
    )
}
