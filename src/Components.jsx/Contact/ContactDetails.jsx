import { motion } from "framer-motion";
import { IoIosMail } from 'react-icons/io'
import { ImLinkedin } from 'react-icons/im'
import {  FaSquareXTwitter } from 'react-icons/fa6'
import { FaGithubSquare, FaTelegram } from 'react-icons/fa'
import { hoverEffect } from "../Effects/animationsContact";



export const contactItems = [
  { href: "https://www.linkedin.com/in/adebayoadeyinka", icon: ImLinkedin, label: "LinkedIn" },
  { href: "https://x.com/omoweadebayo", icon: FaSquareXTwitter, label: "Twitter(X)" },
  { href: "https://github.com/HARDARB", icon: FaGithubSquare, label: "GitHub" },
  { href: "https://t.me/HARDARB", icon: FaTelegram, label: "Telegram" },
  {  href: "mailto:adeyinkaadebayo032@gmail.com?subject=Hello&body=I saw your portfolio...", icon: IoIosMail, label: "Email" },
];


export default function ContactCard({ title = "Contact Details", contacts = [] }) {
  return (
    <motion.div
      className="border border-gray-700 p-4 py-10 dark:hover:bg-gray-800 hover:bg-gray-200 transition duration-300 cursor-pointer"
    >
      <p className="mb-4 font-bold">{title};</p>
      <div className="space-y-4 text-sm dark:text-gray-300 text-black">
        {contacts.map(({ href, icon: Icon, label }, index) => (
          <motion.a  whileHover={hoverEffect} key={index} href={href} className="flex items-center gap-1">
            <Icon className="dark:text-teal-500 text-teal-800 mr-2 text-md" /> {label}
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
