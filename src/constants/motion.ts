import type { Transition } from 'motion-v'

export const springTransition: Transition = {
  type: 'spring',
  stiffness: 260,
  damping: 20,
}

const drawTransition: Transition = {
  type: 'spring',
  duration: 1.5,
  bounce: 0,
}

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

export const itemVariants = {
  hidden: { opacity: 0, y: 20, rotate: -2 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: springTransition,
  },
}

export const roughVariants = {
  hidden: { opacity: 0, scale: 0.9, rotate: -3 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      ...springTransition,
      stiffness: 150,
    },
  },
  hover: {
    rotate: [0, -1, 1, -1, 0],
    scale: 1.02,
    transition: {
      duration: 0.3,
    },
  },
}

export const wiggleVariants = {
  hover: {
    rotate: [-1, 1, -1, 1, 0],
    transition: {
      duration: 0.4,
      repeat: Infinity,
    },
  },
}

export const drawVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: drawTransition,
      opacity: { duration: 0.01 },
    },
  },
}
