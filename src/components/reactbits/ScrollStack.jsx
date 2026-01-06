import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollStackItem = ({ 
  children, 
  index, 
  total,
  itemDistance = 40,
  scaleSpread = 0.05
}) => {
  return (
    <motion.div 
      className="sticky top-0 w-full h-screen flex items-center justify-center p-4"
      style={{
        top: index * itemDistance,
        marginBottom: (total - index - 1) * itemDistance,
        zIndex: index
      }}
    >
      <div className="w-full h-full max-w-5xl max-h-[400px] relative">
         {children}
      </div>
    </motion.div>
  );
};

const ScrollStack = ({ 
  children, 
  itemDistance = 40,
  className = "" 
}) => {
  const items = React.Children.toArray(children);
  
  return (
    <div className={`relative w-full ${className}`}>
      {items.map((child, index) => (
        <ScrollStackItem 
          key={index}
          index={index}
          total={items.length}
          itemDistance={itemDistance}
        >
          {child}
        </ScrollStackItem>
      ))}
    </div>
  );
};

export default ScrollStack;
