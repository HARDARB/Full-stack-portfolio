import { AiFillApi } from "react-icons/ai";
import { FaCode, FaCss3Alt, FaGit, FaGithub, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoFigma } from "react-icons/io5";
import { LiaNode } from "react-icons/lia";
import { PiFramerLogoFill } from "react-icons/pi";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiMysql, SiNextdotjs, SiPostman, SiReact } from "react-icons/si";
import PatternBackground from "../Effects/pattern";
import { useIsInView } from "../Effects/useIsInView";
import { motion } from "framer-motion";



const techStack = [
  { tech: 'React', logo: <SiReact /> },
  { tech: 'Html', logo: <FaHtml5 /> },
  { tech: 'Css3', logo: <FaCss3Alt /> },
  { tech: 'Javascript', logo: <IoLogoJavascript /> },
  { tech: 'Gsap', logo: <FaCode /> },
  { tech: 'Next.js', logo: <SiNextdotjs /> },
  { tech: 'MongoDB', logo: <SiMongodb /> },
  { tech: 'Tailwind', logo: <RiTailwindCssFill /> },
  { tech: 'Node.js', logo: <LiaNode /> },
  { tech: 'Express', logo: <SiExpress /> },
  { tech: 'Postman', logo: <SiPostman /> },
  { tech: 'Framer', logo: <PiFramerLogoFill /> },
  { tech: 'Mysql', logo: <SiMysql /> },
  { tech: 'GitHub', logo: <FaGithub /> },
  { tech: 'Figma', logo: <IoLogoFigma /> },
  { tech: 'Git', logo: <FaGit /> },
  { tech: 'Rest APIs', logo: <AiFillApi /> },
];

// Animation variants
import {
  containerVariants,
  itemVariants,
 hoverEffect,
} from "../Effects/animationsHome";



export const StackHome = () => {
  const [ref, isInView] = useIsInView();

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="py-14 md-p6 relative"
    >
      <PatternBackground />

      <section className="text-center relative z-20">
        <div className="flex justify-center">
          <p className="dark:bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text dark:text-transparent text-teal-800 font-bold border text-sm dark:border-teal-500/30 border-teal-500/70  py-1 px-12">
            <span className='p-1 inline-block dark:bg-teal-400 bg-teal-800  rounded-full mr-4'></span>
            My Stack
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 px-5 md:px-10 lg:px-0 max-w-4xl mx-auto mt-10 text-sm md:text-md">
          {techStack.map((item) => (
            <motion.div
              key={item.tech}
             whileHover={hoverEffect}
              variants={itemVariants}
              className="text-white font-bold border dark:border-teal-500/30 border-teal-500/70 p-4 dark:hover:bg-gray-800 bg-teal-800 dark:bg-transparent transition-all"
            >
              <p className="flex flex-col items-center space-y-2">
                <span className="dark:text-teal-500 text-white  text-4xl">{item.logo}</span>
                <span>{item.tech}</span>
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};
