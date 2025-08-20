import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const slideIn = {
  hidden: { x: '-100%' },
  visible: { x: 0 },
};

const rotate = {
  hidden: { rotate: 0 },
  visible: { rotate: 360 },
};

export const FadeIn: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export const SlideIn: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      variants={slideIn}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export const Rotate: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      variants={rotate}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default { FadeIn, SlideIn, Rotate };