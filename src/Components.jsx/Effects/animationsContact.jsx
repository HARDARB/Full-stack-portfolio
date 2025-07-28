export const FromTop = {
  hidden: { opacity: 0, y: -15 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.8 },
  },
};

export const FromBottom = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.9 },
  },
};

export const itemFromLeft = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 1 },
  },
};
export const itemFromRight = {
  hidden: { opacity: 0, x: 20 },
  show: {
    opacity: 1,
    x: 0,
    transition: {duration: 0.6, ease: "easeOut", delay: 1 },
  },
};

// export const containerVariants = {
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: 1.5,          // delay entire container
//       delayChildren: 0.2,  // delay before children start animating
//       staggerChildren: 0.08, // each child animates 80ms after the previous
//     },
//   },
//   hidden: {
//     opacity: 0,
//     y: 80,
//   },
// };


export const containerVariants = {
  hidden: {},
  show: {
    opacity: 1,
    transition: {
      staggerChildren: .2,
    },
  },
};

export const containerFootVariants = {
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

export const itemFadeUpForm = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
     transition: {
      duration: 0.6,
      ease: "easeOut",
        },
  },
};


export const containerStagger = {
  hidden: {opacity: 0, },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: .5,
       delayChildren: 1.02,
    },
  },
};

export const itemFadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
     transition: {
      duration: 0.6,
      ease: "easeOut",
        },
  },
};


export const containerSKilsVariants = {
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.15,
    },
  },
  hidden: { opacity: 0 },
};

export const itemSkilssVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
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


export const fadeInFromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export const fadeInFromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};




