// ScrollIndicator.jsx
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

export default function ScrollIndicator() {
  return (
    <div className="flex absolute bottom-3 lg:bottom-8 flex-col items-center gap-3 mt-10 animate-fade-in-down">
      <motion.div
        className="relative w-6 h-6 flex items-center justify-center bg-teal-600 dark:bg-teal-500 rounded-full shadow-lg cursor-pointer"
        initial={{ y: 0 }}
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <FaArrowDown className="text-white text-sm" />
        {/* Optional: bubbles effect */}
        <motion.div
          className="absolute w-14 h-14 rounded-full border-2 border-teal-300 dark:border-teal-500"
          animate={{
            scale: [1, 1.4],
            opacity: [0.5, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      </motion.div>

      <motion.p
        className="text-sm text-gray-700 dark:text-gray-300 font-medium tracking-wide"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
  
      </motion.p>
    </div>
  );
}
