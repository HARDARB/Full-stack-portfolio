
import React, { useState } from 'react';
import { CgArrowsExpandUpRight } from 'react-icons/cg';
import emailjs from 'emailjs-com';
import { useRef } from "react";
import { motion, useInView } from 'framer-motion';
import { containerVariants,  hoverEffect,  itemFadeUpForm } from '../Effects/animationsContact.jsx'



export const FormContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    message: '',
  });

  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setFieldErrors({ ...fieldErrors, [e.target.id]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate fields
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) newErrors.email = 'Email is required.';
    if (!formData.location.trim()) newErrors.location = 'Location is required.';
    if (!formData.message.trim()) newErrors.message = 'Message is required.';

    if (Object.keys(newErrors).length > 0) {
      setFieldErrors(newErrors);
      setError('Please fill out all fields correctly.');
      return;
    }

    // Send email
    emailjs
      .send(
      'service_82rfgnd',    
      'template_q9zbxwr',     
      formData,
      'lPA241N3MD64Gza-v'      
      )
      .then(() => {
        setSuccess('Message sent successfully!');
        setError('');
        setFormData({ name: '', email: '', location: '', message: '' });
        setFieldErrors({});
      })
      .catch(() => {
        setError('Failed to send message. Please try again later.');
        setSuccess('');
      });


//       emailjs.send(
//   'service_82rfgnd',
//   'template_q9zbxwr', // Email to you
//   formData,
//   'lPA241N3MD64Gza-v'
// ).then(() => {
//   // Send confirmation to user
//   emailjs.send(
//     'service_82rfgnd',
//     'template_feedback_sender', // Email to sender
//     formData,
//     'lPA241N3MD64Gza-v'
//   ).then(() => {
//     setSuccess('Message sent successfully!');
//     setError('');
//     setFormData({ name: '', email: '', location: '', message: '' });
//     setFieldErrors({});
//   }).catch(() => {
//     setError('Failed to send confirmation to user.');
//   });
// }).catch(() => {
//   setError('Failed to send message. Please try again later.');
//   setSuccess('');
// });

  };

  const FormRef = useRef(null);
    const isFormInView = useInView(FormRef, {
        once: false, // set false so it re-triggers when scrolling back
       margin: "-10%" // optional tuning
    });

  return (
    <motion.div    
    ref={FormRef}        
    variants={containerVariants}
          initial="hidden"
          animate={isFormInView ? "show" : "hidden"}
      className="max-w-2xl mx-auto border border-gray-700 md:p-8 p-4 mt-16 shadow-lg font-poppins">
      <motion.h2 variants={itemFadeUpForm} className="text-2xl mb-4 font-semibold">Get in Touch</motion.h2>

      {success && <p className="text-green-500 text-sm mb-4">{success}</p>}
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

      <motion.form  className="space-y-4" onSubmit={handleSubmit}>
        {/* Name */}
        <motion.div variants={itemFadeUpForm}>
          <label className="block mb-2 text-sm" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full dark:bg-gray-800 bg-gray-200 p-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Your Name"
          />
          {fieldErrors.name && <p className="text-red-500 text-xs mt-1">{fieldErrors.name}</p>}
        </motion.div>

        {/* Email */}
        <motion.div variants={itemFadeUpForm}>
          <label className="block mb-2 text-sm" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full dark:bg-gray-800 bg-gray-200 p-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Your Email"
          />
          {fieldErrors.email && <p className="text-red-500 text-xs mt-1">{fieldErrors.email}</p>}
        </motion.div>

        {/* Location */}
        <motion.div variants={itemFadeUpForm}>
          <label className="block mb-2 text-sm" htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full dark:bg-gray-800 bg-gray-200 p-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Your Location"
          />
          {fieldErrors.location && <p className="text-red-500 text-xs mt-1">{fieldErrors.location}</p>}
        </motion.div>

        {/* Message */}
        <motion.div variants={itemFadeUpForm}>
          <label className="block mb-2 text-sm" htmlFor="message">Message</label>
          <textarea
            id="message"
            rows="3"
            value={formData.message}
            onChange={handleChange}
            className="w-full dark:bg-gray-800 bg-gray-200 p-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Your Message"
          ></textarea>
          {fieldErrors.message && <p className="text-red-500 text-xs mt-1">{fieldErrors.message}</p>}
        </motion.div>

        {/* Submit Button */}
        <motion.button variants={itemFadeUpForm} whileHover={hoverEffect}
          type="submit"
          className="w-full border border-teal-500 dark:text-teal-500 text-teal-800 px-4 py-2 text-xs font-bold hover:bg-teal-600 hover:text-white transition"
        >
          Submit <CgArrowsExpandUpRight className="inline text-lg ml-2" />
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

