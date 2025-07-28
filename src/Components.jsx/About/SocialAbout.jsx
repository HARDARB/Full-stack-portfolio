import React from 'react'
import { FaGithubSquare, FaHeartbeat, FaTelegram } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { ImLinkedin } from 'react-icons/im'
import { IoIosMail } from 'react-icons/io'
import { useIsInView } from "../Effects/useIsInView";
import { motion } from "framer-motion";


import {
  hoverEffect,
  containerVariants,
} from "../Effects/animationsAbout";

export const SocialAbout = () => {

    const [ref, isInView] = useIsInView();

  return (
    <motion.div ref={ref}
                          variants={containerVariants}
                          initial="hidden"
                          animate={isInView ? "visible" : "hidden"}>
    <div className="mt-18 lg:mt-34 space-y-6 md:py-5 lg:py-12 dark:text-white text-black py-4">
                <motion.a whileHover={hoverEffect}  href="#" className="flex items-center space-x-2 hover:text-teal-500 transition">
                  <ImLinkedin className='dark:text-teal-500 text-teal-800 mr-2 text-lg' />
                  <span>Connect on LinkedIn</span>
                </motion.a>
                <motion.a whileHover={hoverEffect}  href="#" className="flex items-center space-x-2 hover:text-teal-500 transition">
                  <FaSquareXTwitter className='dark:text-teal-500 text-teal-800 mr-2 text-lg' />
                  <span>Follow on Twitter(X)</span>
                </motion.a>
                <motion.a whileHover={hoverEffect}  href="#" className="flex items-center space-x-2 hover:text-teal-500 transition">
                  <FaGithubSquare className='dark:text-teal-500 text-teal-800 mr-2 text-lg' />
                  <span>Follow on GitHub</span>
                </motion.a>
                <motion.a whileHover={hoverEffect}  href="#" className="flex items-center space-x-2 hover:text-teal-500 transition">
                  <FaTelegram className='dark:text-teal-500 text-teal-800 mr-2 text-lg' />
                  <span>Connect on Telegram</span>
                </motion.a>
              </div>

              <hr className='bg-gray-800 border-0 h-px' />

              {/* Email */}
              <motion.a whileHover={hoverEffect}  href="#" className="flex items-center space-x-2 dark:text-white text-black hover:text-teal-500 transition mt-10 lg:mt-34">
                <IoIosMail className='dark:text-teal-500 text-teal-800 mr-2 text-lg' />
                <span>adeyinkaadebayo032@gmail.com</span>
              </motion.a>
    </motion.div>
  )
}
