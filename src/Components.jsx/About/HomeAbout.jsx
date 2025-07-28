import React from 'react'
import { useInView } from "framer-motion";
import { useRef } from "react";
import PatternBackground from '../Effects/pattern'
import { CgArrowsExpandUpRight } from 'react-icons/cg'
import { FaHeartbeat } from 'react-icons/fa'
import { SkillsAbout } from './SkillsAbout'
import Adebayo_image from '../../assets/Adebayo_image.jpg'
import ScrollLink from '../ScrollTop';
import { SocialAbout } from './SocialAbout'
import { motion } from "framer-motion";
import { useIsInView } from "../Effects/useIsInView";




// Animation variants
import {
  hoverEffect,
  profileAnim,
  HeaderTag,
  containerVariants,
} from "../Effects/animationsAbout";
import { AboutDetails } from './AboutDetails'


export const HomeAbout = () => {
  const [ref, isInView] = useIsInView();
  const AboutHeaderRef = useRef(null);
  const AboutProfileRef = useRef(null);

  const isHeaderInView = useInView(AboutHeaderRef, {
    once: false,
    margin: "-10%",
  });

  const isProfileInView = useInView(AboutProfileRef, {
    once: false,
    margin: "-10%",
  });



  // console.log("isMobile:", isMobile);

  return (
    <section className="relative min-h-screen overflow-hidden text-white font-poppins ">

        <PatternBackground />

      <div className=" md:pt-10 pt-4 md:pb-10 relative z-22">

        <div className='flex items-center md:justify-center w-full md:text-center md:px-28 lg:px-40 px-5'>
          <motion.div
            ref={AboutHeaderRef}
            variants={HeaderTag}
            initial="hidden"
            animate={isHeaderInView ? "show" : "hidden"}>
            <h1 className="text-3xl md:text-4xl  font-bold dark:text-white text-black">


              Bringing <span className="dark:bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text  dark:text-transparent text-teal-800"> imaginations</span> to life, one line of code at a time.
            </h1>
            <p className="text-sm font-normal mt-4 dark:text-gray-300 text-black md:px-10 lg:px-20">I'm a full-stack developer passionate about building elegant solutions that solve real-world problems.</p>
          </motion.div>
        </div>

        <div className=" text-white grid lg:grid-cols-5 grid-cols-none lg:px-0 md:px-5 px-5 space-x-0 md:space-x-10  lg:space-x-20 md:max-w-xl lg:max-w-4xl mx-auto pt-16">

          {/* Left Side: About */}
          <div className=" lg:col-span-3 order-2 md:order-2 lg:order-1 mt-20 md:mt-10 lg:mt-0 mb-20">

            <div>
              <AboutDetails />
            </div>

            {/* Skills/Highlights */}
            <div>
              <SkillsAbout />
            </div>


          </div>



          {/* Right Side: Profile Image and Info */}
          <div className="lg:col-span-2 order-1 md:order-1 lg:order-2">
            <motion.div ref={AboutProfileRef}
              variants={profileAnim}
              initial="hidden"
              animate={isProfileInView ? "show" : "hidden"}>

              <div className='grid md:grid-cols-2 gap-2'> {/* Added gap for spacing */}
                <div className='space-y-8 order-2 md:order-1'>
                  <div>
                    <p className='dark:text-white text-black font-black text-sm'>Name</p>
                    <p className='text-xs font-normal dark:text-gray-400 text-gray-500'>Adebayo</p>
                  </div>

                  <div>
                    <p className='dark:text-white text-black font-black text-sm'>Full Stack Developer</p>
                    <p className='text-xs font-normal dark:text-gray-400 text-gray-500'>2024 - Present</p>
                  </div>

                  <div>
                    <p className='dark:text-white text-black font-black text-sm'>Frontend WebDeveloper</p>
                    <p className='text-xs font-normal dark:text-gray-400 text-gray-500'>2020 - Present</p>
                  </div>
                </div>

                <motion.div whileHover={hoverEffect} className='flex justify-center lg:flex-none order-1 md:order-2'>
                  <div className="w-48 h-48 rounded-full overflow-hidden mb-4 shadow-lg ">
                    <img
                      src={Adebayo_image}
                      alt="Profile"
                      className="object-cover w-full h-full flex"
                    />
                  </div>
                </motion.div>

              </div>

              {/* Profile Info */}
              <div className="text-sm space-y-2 ">

                <div className="grid md:grid-cols-4 grid-cols-2 items-center gap-4 dark:text-white text-black md:gap-20  py-14">
                  <div className=" text-center space-y-2">
                    <div className='flex items-center justify-center'>
                      <div className="w-2 h-2 dark:bg-teal-500 bg-teal-800 rounded-full"></div>
                    </div>
                    <span>20+ Clients</span>
                  </div>
                  <div className=" text-center space-y-2">
                    <div className='flex items-center justify-center'>
                      <div className="w-2 h-2 dark:bg-teal-500 bg-teal-800 rounded-full"></div>
                    </div>
                    <span>4+ Year <br className='md:hidden block' /> Experience</span>
                  </div>
                  <div className=" text-center space-y-2">
                    <div className='flex items-center justify-center'>
                      <div className="w-2 h-2 dark:bg-teal-500 bg-teal-800 rounded-full"></div>
                    </div>
                    <span>100% Satisfaction</span>
                  </div>
                  <div className=" text-center space-y-2">
                    <div className='flex items-center justify-center'>
                      <div className="w-2 h-2 dark:bg-teal-500 bg-teal-800 rounded-full"></div>
                    </div>
                    <span>30+ Projects</span>
                  </div>
                </div>
              </div>
            </motion.div>


            {/* Social Links */}

            <SocialAbout />

          </div>
        </div>
      </div>

      <motion.div ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className=' md:mt-20'>
        <motion.div whileHover={hoverEffect} 
        className='flex space-x-4 relative z-22 max-w-5xl mx-auto text-sm justify-center dark:text-white text-black py-8'>
          <p>Want to view my project? </p>
          <p>Click </p>
          <ScrollLink
            to='/projects'
            className='dark:text-teal-500 text-teal-800 font-medium'
          >
            here <CgArrowsExpandUpRight className='inline text-xl' />
          </ScrollLink>
        </motion.div>
        <motion.div whileHover={hoverEffect} className='flex justify-center relative mt-10'>
          <FaHeartbeat className='dark:text-teal-500 text-teal-800 absolute -top-4 text-3xl' />
        </motion.div>
        <footer className="pt-10 pb-2 border-t border-gray-800 text-center text-sm dark:text-gray-300 text-black">
          <p className='text-xs mt-8 '>© Adebayo. All rights reserved. <br className='block md:hidden' /> <span className="dark:text-teal-500 text-teal-800">Crafted with passion.</span></p>
        </footer>
      </motion.div>
    </section>
  )
}
