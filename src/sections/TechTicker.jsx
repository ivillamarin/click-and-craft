import React from 'react';
import { motion } from 'framer-motion';

const TechTicker = () => {
  return (
    <section className="py-12 bg-white/5 border-y border-white/5 relative overflow-hidden z-20">
      <div className="whitespace-nowrap flex overflow-hidden relative">
        <div className="animate-marquee inline-block text-txtSec font-display font-bold text-4xl opacity-50 px-4">
          REACT • VITE • TAILWIND • MOTION • STRATEGY • REACT • VITE • TAILWIND • MOTION • STRATEGY •
        </div>
        <div className="animate-marquee inline-block text-txtSec font-display font-bold text-4xl opacity-50 px-4 absolute top-0 left-full">
          REACT • VITE • TAILWIND • MOTION • STRATEGY • REACT • VITE • TAILWIND • MOTION • STRATEGY •
        </div>
      </div>
    </section>
  );
};

export default TechTicker;
