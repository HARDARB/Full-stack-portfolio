import React, { useRef } from 'react';
import Aligno from '../../assets/Aligno.png';
import Eduhive from '../../assets/EduHive.png';
import BlockPass from '../../assets/BlockPass.png';
import ChainGate from '../../assets/ChainGate.png';
import { FaLink } from 'react-icons/fa';
import { FaLinkSlash } from 'react-icons/fa6';
import { motion, useInView } from 'framer-motion';
import { useIsInView } from "../Effects/useIsInView";

import {
    fadeInFromLeft,
    fadeInFromRight,
    hoverEffect,
    itemFromRight,
    itemFromLeft,
} from '../Effects/animationsProject.jsx';

export const SectionProject = () => {
    const eduRef = useRef(null);
    const chainRef = useRef(null);
    const blockRef = useRef(null);

    const inViewEdu = useInView(eduRef, { once: false, margin: '-20%' });
    const inViewChain = useInView(chainRef, { once: false, margin: '-20%' });
    const inViewBlock = useInView(blockRef, { once: false, margin: '-20%' });
    const [ProjectRef, isProjectInView] = useIsInView();

    return (
        <div className="space-y-10 md:my-20 max-w-4xl mx-auto relative z-40">
            {/* Project 1 */}
            <div
                className="md:p-5 grid md:grid-cols-2 gap-10 shadow-lg"
            >
                <motion.div
                    whileHover={hoverEffect}
                    variants={itemFromLeft}
                    ref={ProjectRef}
                    initial="hidden"
                    animate={isProjectInView ? "show" : "hidden"}
                    className="mt-10"
                >
                    <hr className="bg-gray-800 border-0 h-px mb-4 md:hidden" />
                    <div>
                        <h3 className="dark:text-white text-black text-2xl font-bold mb-2">
                            Aligno
                        </h3>
                        <p className="mb-4 dark:text-gray-400 text-black leading-5 text-xs">
                            Task management and team collaboration platform. The ultimate
                            productivity tool to streamline task management, set deadlines
                            and collaborate effectively, all in one place.
                        </p>
                        <div className="flex flex-wrap gap-2 text-white mb-2 text-xs">
                            <button className="bg-gray-700 px-3 py-1 rounded">Node.js</button>
                            <button className="bg-gray-700 px-3 py-1 rounded">
                                Express.js
                            </button>
                            <button className="bg-gray-700 px-3 py-1 rounded">MongoDB</button>
                            <button className="bg-gray-700 px-3 py-1 rounded">Gsap</button>
                            <button className="bg-gray-700 px-3 py-1 rounded">React.js</button>
                            <button className="bg-gray-700 px-3 py-1 rounded">
                                AutoContext
                            </button>
                        </div>
                    </div>
                    <div className="mt-6">
                        <a href="https://alignoteam99.netlify.app" className="text-teal-500 font-bold text-md">
                            <FaLink className="inline-block dark:text-teal-500 text-teal-800" />{' '}
                            Aligno
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    variants={itemFromRight}
                    initial="hidden"
                    animate={isProjectInView ? "show" : "hidden"}
                >
                    <img
                        src={Aligno}
                        alt="Aligno web development"
                        className="object-cover w-full h-full flex"
                    />
                </motion.div>
            </div>

            {/* Project 2 */}
            <motion.div
                ref={eduRef}
                className="dark:text-white text-black md:p-5 shadow-lg grid md:grid-cols-2 gap-10 md:flex-row"
            >
                <motion.div
                    variants={fadeInFromLeft}
                    initial="hidden"
                    animate={inViewEdu ? 'visible' : 'hidden'}
                    className="order-2 md:order-1"
                >
                    <img
                        src={Eduhive}
                        alt="EduHive web development"
                        className="object-cover w-full h-full flex"
                    />
                </motion.div>

                <motion.div
                    whileHover={hoverEffect}
                    variants={fadeInFromRight}
                    initial="hidden"
                    animate={inViewEdu ? 'visible' : 'hidden'}
                    className="mt-10 order-1 md:order-2"
                >
                    <h3 className="text-2xl font-bold mb-2">EduHive</h3>
                    <p className="mb-4 dark:text-gray-400 text-black leading-5 text-xs">
                        Digit hub for students and Admins interaction platform.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4 text-white text-xs">
                        <button className="bg-gray-700 px-3 py-1 rounded">Node.js</button>
                        <button className="bg-gray-700 px-3 py-1 rounded">Express.js</button>
                        <button className="bg-gray-700 px-3 py-1 rounded">MongoDB</button>
                        <button className="bg-gray-700 px-3 py-1 rounded">Gsap</button>
                        <button className="bg-gray-700 px-3 py-1 rounded">React.js</button>
                        <button className="bg-gray-700 px-3 py-1 rounded">AutoContext</button>
                    </div>
                    <a href="https://eduhive100.netlify.app" className="text-teal-500 font-bold text-md">
                        <FaLink className="inline-block dark:text-teal-500 text-teal-800" />{' '}
                        EduHive
                    </a>
                </motion.div>
            </motion.div>

            {/* Project 3 */}
            <motion.div
                ref={chainRef}
                className="dark:text-white text-black md:p-6 grid md:grid-cols-2 gap-10 shadow-lg"
            >
                <motion.div
                    whileHover={hoverEffect}
                    variants={fadeInFromLeft}
                    initial="hidden"
                    animate={inViewChain ? 'visible' : 'hidden'}
                    className="mt-10"
                >
                    <h3 className="text-2xl font-bold mb-2">ChainGate</h3>
                    <p className="mb-4 dark:text-gray-400 text-black leading-5 text-xs">
                        Where to discover big experience by seamless event bookings.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-2 text-white text-xs">
                        <button className="bg-gray-700 px-3 py-1 rounded">Node.js</button>
                        <button className="bg-gray-700 px-3 py-1 rounded">Express.js</button>
                        <button className="bg-gray-700 px-3 py-1 rounded">MongoDB</button>
                        <button className="bg-gray-700 px-3 py-1 rounded">Gsap</button>
                        <button className="bg-gray-700 px-3 py-1 rounded">React.js</button>
                        <button className="bg-gray-700 px-3 py-1 rounded">AutoContext</button>
                    </div>
                    <div className="mt-6">
                        <a href="#" className="text-teal-500 font-bold text-md">
                            <FaLinkSlash className="inline-block dark:text-teal-500 text-teal-800" />{' '}
                            ChainGate
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    variants={fadeInFromRight}
                    initial="hidden"
                    animate={inViewChain ? 'visible' : 'hidden'}
                >
                    <img
                        src={ChainGate}
                        alt="ChainGate web development"
                        className="object-cover w-full h-full flex"
                    />
                </motion.div>
            </motion.div>

            {/* Project 4 */}
            <motion.div
                ref={blockRef}
                className="dark:text-white text-black md:p-6 shadow-lg grid md:grid-cols-2 gap-10 md:flex-row"
            >
                <motion.div
                    variants={fadeInFromLeft}
                    initial="hidden"
                    animate={inViewBlock ? 'visible' : 'hidden'}
                    className="order-2 md:order-1"
                >
                    <img
                        src={BlockPass}
                        alt="BlockPass web development"
                        className="object-cover w-full h-full flex"
                    />
                </motion.div>

                <motion.div
                    whileHover={hoverEffect}
                    variants={fadeInFromRight}
                    initial="hidden"
                    animate={inViewBlock ? 'visible' : 'hidden'}
                    className="mt-10 order-1 md:order-2"
                >
                    <h3 className="text-2xl font-bold mb-2">BlockPass</h3>
                    <p className="mb-4 dark:text-gray-400 text-black leading-5 text-xs">
                        Block chain NFT events ticket booking for future activities.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4 text-white text-xs">
                        <button className="bg-gray-700 px-3 py-1 rounded">Node.js</button>
                        <button className="bg-gray-700 px-3 py-1 rounded">Express.js</button>
                        <button className="bg-gray-700 px-3 py-1 rounded">MongoDB</button>
                        <button className="bg-gray-700 px-3 py-1 rounded">Gsap</button>
                        <button className="bg-gray-700 px-3 py-1 rounded">React.js</button>
                        <button className="bg-gray-700 px-3 py-1 rounded">AutoContext</button>
                        <button className="bg-gray-700 px-3 py-1 rounded">Framer</button>
                    </div>
                    <a href="#" className="text-teal-500 font-bold text-md">
                        <FaLinkSlash className="inline-block dark:text-teal-500 text-teal-800" />{' '}
                        BlockPass
                    </a>
                </motion.div>
            </motion.div>
        </div>
    );
};
