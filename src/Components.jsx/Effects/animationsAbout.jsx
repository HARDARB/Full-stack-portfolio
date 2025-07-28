
export const HeaderTag = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 1},
  },
};

export const paragraphAnim = {
  hidden: { opacity: 0, x: -10, scale: 0.88 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: 1.5 },
  },
};



export const profileAnim = {
  hidden: { opacity: 0, x: 50, scale: 0.88 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: 1.5 },
  },
};



export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.5,
    },
  },
};

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};



export const containerVariants = {
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.2,
        },
    },
    hidden: {
        opacity: 0,
        y: 80,
    },
};

export const containerVariantsMobile = {
  visible: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.2,
        },
    },
    hidden: {
        opacity: 0,
        y: 80,
    },
};



export const childVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: .5,
      ease: "easeOut",
    },
  },
};

export const hoverEffect = {
  y: -4,
  scale: 1.05,
  transition: {
    type: "spring",
    stiffness: 100,
    damping: 10,
  },
};

