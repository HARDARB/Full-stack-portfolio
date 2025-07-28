import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const codeLines = [
    
  `okay`,
  `const developer = {`,
  `  name: "Adebayo",`,
  `  role: [`,
  `    "Frontend",`,
  `    "Full Stack Developer"`,
  `  ],`,
  `  experience: 5 // years`,
  `},`,
  `CurrentStack: [`,
  `  "React",`,
  `  "Next.js",`,
  `  "Node.js",`,
  `  "MongoDB",`,
  `  "etc."`,
  `]`
];

export default function AnimatedCodeBlock() {
  const [displayedLines, setDisplayedLines] = useState([]);
 const [iteration, setIteration] = useState(0); // trigger rerun

  useEffect(() => {
    let index = 0;
    setDisplayedLines([]); // reset on each iteration

    const interval = setInterval(() => {
      if (index < codeLines.length) {
        setDisplayedLines((prev) => [...prev, codeLines[index]]);
        index++;
      } else {
        clearInterval(interval);
        // wait before restarting
        setTimeout(() => {
          setIteration((prev) => prev + 1);
        }, 2000); // delay before repeat
      }
    }, 200); // typing speed

    return () => clearInterval(interval);
  }, [iteration]);

  return (
    <motion.div
      key={iteration} // re-trigger animation
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="md:border dark:border-gray-700 border-gray-300 rounded-lg p-10"
    >
      <pre className="text-sm dark:text-teal-500/40 text-red-200 font-mono">
        {displayedLines.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </pre>
    </motion.div>
  );
}
