import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Optional if you're using EmailJS
import { CgArrowsExpandUpRight } from 'react-icons/cg';
import ScrollLink from '../ScrollTop';
import { useIsInView } from "../Effects/useIsInView";
import { motion } from "framer-motion";

// Animation variants

// Animation variants
import {
  containerVariants,
 hoverEffect,
} from "../Effects/animationsHome";


const NewsletterSection = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState({ success: '', error: '' });
    const [ref, isInView] = useIsInView();
    const handleSubscribe = (e) => {
        e.preventDefault();

        if (!email.trim()) {
            setStatus({ success: '', error: 'Please enter a valid email address.' });
            return;
        }

        emailjs.send(
            'service_82rfgnd',
            'template_sxxxrsh',
            { email }, // Only sending email
            'lPA241N3MD64Gza-v'
        )
            .then(() => {
                setStatus({ success: 'Thanks for subscribing!', error: '' });
                setEmail('');
            })
            .catch(() => {
                setStatus({ success: '', error: 'Subscription failed. Try again later.' });
            });

    };

    return (
        <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="py-20  max-w-5xl mx-auto md:px-18 px-5">
            <section className="  max-w-5xl mx-auto " >
                <p className="dark:bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text dark:text-transparent text-teal-800 font-bold text-lg">
                    <span className='p-1 inline-block dark:bg-teal-400 bg-teal-800 rounded-full mr-4'></span>
                    Stay up to date
                </p>
                <div className="mt-2 mb-8 md:mb-0">
                    <p className="text-sm dark:text-gray-400 text-black mb-4">
                        Get notified when I publish something new, and unsubscribe at any time!
                    </p>
                    {status.success && <p className="text-green-500 text-sm mb-2">{status.success}</p>}
                    {status.error && <p className="text-red-500 text-sm mb-2">{status.error}</p>}
                    <motion.div whileHover={{
                        y: 0,
                        scale: 1.05,
                        transition: {
                            type: "spring",
                            stiffness: 100,
                            damping: 30,
                        },
                    }} >
                        <form onSubmit={handleSubscribe} className="flex flex-wrap  gap-2">
                            <input
                                type="email"
                                placeholder="Email"
                                className="border border-gray-600 dark:text-white text-black p-2 px-8 text-sm"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="hover:bg-teal-500 py-2 md:py-0 px-4 dark:text-black text-white dark:bg-gray-400 bg-black text-sm"
                            >
                                Subscribe
                            </button>
                        </form>
                    </motion.div>
                </div>
                <motion.div whileHover={hoverEffect} className='flex md:space-x-4 space-x-1 md:text-sm text-xs justify-center dark:text-white text-black mt-12'>
                    <p>Want to know about me? </p>
                    <p>Click </p>
                    <ScrollLink to='/about' className='dark:text-teal-500 text-teal-800 font-medium'>
                        here <CgArrowsExpandUpRight className='inline text-xl' />
                    </ScrollLink>
                </motion.div>
            </section>
        </motion.div>
    );
};

export default NewsletterSection;
