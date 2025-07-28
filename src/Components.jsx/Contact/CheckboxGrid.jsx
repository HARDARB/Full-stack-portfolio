import { itemSkilssVariants, containerSKilsVariants } from '../Effects/animationsContact.jsx';
import { useRef } from "react";
import { motion, useInView } from 'framer-motion';

export const skills = [
  "Frontend development",
  "Backend development",
  "Full-stack development",
  "Technical consultation",
  "Server administration",
  "UI/UX design",
];

export default function CheckboxGrid({ items = [] }) {
    const SkillsRef = useRef(null);
    const inViewSkills = useInView(SkillsRef, { once: false, margin: '-10%' });
  
    return (
    <motion.div   ref={SkillsRef}  variants={containerSKilsVariants}    initial="hidden"
        animate={inViewSkills ? "visible" : "hidden"}>
        <motion.h3 variants={itemSkilssVariants} className="text-lg mb-4 font-semibold">Available For</motion.h3>

        <motion.div
       
          className="grid md:grid-cols-2 gap-4 text-sm"
          variants={containerSKilsVariants}
         initial="hidden"
        animate={inViewSkills ? "visible" : "hidden"}
        >
        
          {items.map((label, i) => (
            <motion.div
              key={i}
              className="flex gap-2 items-center"
              variants={itemSkilssVariants}
            >
              <input
                type="checkbox"
                checked
                readOnly
                className="mr-2 accent-teal-500 transform scale-120"
              />
              {label}
            </motion.div>
          ))}
        </motion.div>
    </motion.div>
  );
}
