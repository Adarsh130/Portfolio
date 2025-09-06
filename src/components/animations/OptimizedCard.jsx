import React from 'react';
import { motion } from 'framer-motion';

const OptimizedCard = ({ 
  children, 
  className = '',
  hoverScale = 1.02,
  hoverY = -5,
  ...props 
}) => {
  return (
    <motion.div
      className={className}
      whileHover={{
        scale: hoverScale,
        y: hoverY,
        transition: {
          duration: 0.3,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }}
      whileTap={{
        scale: 0.98,
        transition: {
          duration: 0.1
        }
      }}
      style={{
        // Optimize for GPU acceleration
        willChange: 'transform',
        backfaceVisibility: 'hidden',
        perspective: 1000
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default OptimizedCard;