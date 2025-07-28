// HoverBounce.jsx
import { motion } from "framer-motion";

const HoverBounce = ({
  children,
  className = "",
  variants,
  initial = "hidden",
  animate = "visible",
  custom,
  ...props
}) => {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.05,
        transition: {
          type: "spring",
          stiffness: 120,
          damping: 8,
        },
      }}
      variants={variants}
      initial={initial}
      animate={animate}
      custom={custom}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default HoverBounce;
