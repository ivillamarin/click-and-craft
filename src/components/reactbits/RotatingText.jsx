import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RotatingText = ({ 
  texts, 
  rotationInterval = 3000, 
  className = "",
  stagger = 0,
  transition = { type: "spring", stiffness: 100, damping: 20 }
}) => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [texts.length, rotationInterval]);

  return (
    <span className={`inline-grid relative overflow-hidden align-top ${className}`}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={index}
          initial={{ y: "100%", opacity: 0, filter: "blur(4px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-100%", opacity: 0, filter: "blur(4px)" }}
          transition={transition}
          className="col-start-1 col-end-2 block"
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
      {/* Invisible placeholder to maintain width */}
      <span className="col-start-1 col-end-2 opacity-0 pointer-events-none">
        {texts.reduce((a, b) => a.length > b.length ? a : b)}
      </span>
    </span>
  );
};

export default RotatingText;
