import React from 'react'
import PatternBackground from '../Effects/pattern'
import { CgArrowsExpandUpRight } from 'react-icons/cg'
import { FaLocationDot } from 'react-icons/fa6'
import { FaHeartbeat } from 'react-icons/fa'
import { FormContact } from './FormContact'
import ScrollLink from '../ScrollTop'
import { useRef } from "react";
import { motion, useInView } from 'framer-motion';

import { containerFootVariants, containerStagger, containerVariants, FromBottom, FromTop, hoverEffect, itemFadeUp } from '../Effects/animationsContact.jsx'


import CheckboxGrid, { skills } from './CheckboxGrid.jsx';
import ContactCard, { contactItems } from './ContactDetails.jsx';

export const HeroContact = () => {

    const ContactRef = useRef(null);
    const footRef = useRef(null);
    const chainRef = useRef(null);
    const blockRef = useRef(null);

    const inViewContact = useInView(ContactRef, { once: false, margin: '-10%' });
    const inViewfoot = useInView(footRef, { once: false, margin: '-10%' });

    const headerRef = useRef(null);
    const isHeaderInView = useInView(headerRef, {
        once: false, // set false so it re-triggers when scrolling back
        margin: "-10%", // optional tuning
    });
 const currentYear = new Date().getFullYear();
    return (

        <div className=" dark:text-white text-black p-5 pt-0 min-h-screen font-poppins">


            <div>
                <PatternBackground />
            </div>

            <div className='md:pt-10 pt-4 max-w-4xl mx-auto relative z-20'>

                {/* Section Header */}
                <motion.div
                    ref={headerRef}
                    variants={FromTop}
                    initial="hidden"
                    animate={isHeaderInView ? "show" : "hidden"}
                    className='text-xl md:text-4xl font-bold flex items-center md:justify-center'>
                    <h1 > Let's Create
                        <span className="dark:bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text  dark:text-transparent text-teal-800">Together</span>
                    </h1>
                </motion.div>

                {/* Description */}
                <motion.p
                    variants={FromBottom}
                    initial="hidden"
                    animate={isHeaderInView ? "show" : "hidden"}
                    className=" text-sm font-normal mt-4 dark:text-gray-300 text-black md:text-center max-w-2xl mx-auto mb-8">
                    Have a project in mind? I'm available for freelance work and exciting opportunities.
                    Let's turn your ideas into reality.
                </motion.p>


                {/* Top Info Boxes */}
                <motion.div
                    ref={ContactRef}
                    variants={containerStagger}
                    initial="hidden"
                    animate={inViewContact ? "show" : "hidden"}
                    className="grid md:grid-cols-3 gap-10 max-w-2xl mx-auto mb-8">

                    {/* Contact Details */}
                    <motion.div whileHover={hoverEffect} variants={itemFadeUp}>
                        <ContactCard  title="Contact Details" contacts={contactItems} />
                    </motion.div>



                    {/* Location */}
                    <motion.div whileHover={hoverEffect} variants={itemFadeUp} className="border py-10 border-gray-700 p-4  dark:hover:bg-gray-800 hover:bg-gray-200 transition duration-300 cursor-pointer">
                        <p className="mb-4 font-bold">Location</p>
                        <p className='text-sm dark:text-gray-300 text-black '><FaLocationDot className='inline-block dark:text-teal-500 text-teal-800 mr-2' /> Lagos, Nigeria</p>
                    </motion.div>


                    {/* Schedule Call */}
                    <motion.div whileHover={hoverEffect} variants={itemFadeUp} className="border border-gray-700 p-4 py-10  dark:hover:bg-gray-800 hover:bg-gray-200 transition duration-300 cursor-pointer flex flex-col justify-between">
                        <div>
                            <p className="mb-4 font-bold">Schedule a Call</p>
                            <p className="mb-4 text-sm dark:text-gray-300 text-black">Book a 30-minute consultation to discuss your project or just have a chat.</p>
                        </div>
                        <motion.button whileHover={hoverEffect} className="border border-teal-500 dark:text-teal-500 text-teal-800 px-4 py-2 text-xs font-bold hover:bg-teal-600 hover:text-white transition">


                            <a
                                href="https://calendly.com/adeyinkaadebayo032/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Schedule <CgArrowsExpandUpRight className="inline text-teal-500 text-sm md:text-lg ml-2" />
                            </a>
                        </motion.button>
                    </motion.div>

                </motion.div>

                {/* Contact Form */}
                <FormContact />


                {/* Footer / Availability */}
                <section className="mt-14 max-w-2xl mx-auto">
                    <CheckboxGrid items={skills} />
                </section>


                {/* Latest articles */}
                

                    <motion.div ref={footRef}
                     variants={containerFootVariants}
                             initial="hidden"
                             animate={inViewfoot ? "visible" : "hidden"} whileHover={hoverEffect} className='flex justify-center md:space-x-4 space-x-1 md:text-sm text-xs dark:text-white text-black my-28 max-w-4xl'>
                        <p>Want to go back home? </p>
                        <p>Click </p><ScrollLink
                            to='/'
                            className='dark:text-teal-500 text-teal-800 font-medium'
                        >
                            here <CgArrowsExpandUpRight className='inline text-xl' />
                        </ScrollLink>
                    </motion.div>

                    <motion.div whileHover={hoverEffect} className='flex justify-center relative mt-10'>
                        <FaHeartbeat className='dark:text-teal-500 text-teal-800 absolute -top-4 text-3xl' />
                    </motion.div>
                    <footer className="pt-10 pb-2 border-t border-gray-800 text-center text-sm dark:text-gray-300 text-black">
                         <p className='text-xs mt-8'>©  {currentYear} Adebayo. All rights reserved. <br className='block md:hidden' /> <span className="dark:text-teal-500 text-teal-800">Crafted with passion.</span></p>
                    </footer>
            </div>

        </div>

    )
}
