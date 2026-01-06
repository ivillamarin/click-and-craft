import React from 'react';
import { motion } from 'framer-motion';
import FloatingElements from '../components/FloatingElements';
import RotatingText from '../components/reactbits/RotatingText';

const Philosophy = () => {
  return (
    <motion.section 
      id="filosofia" 
      className="pt-32 pb-96 w-full flex items-center justify-center relative z-10 px-4 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <FloatingElements />
      <div className="max-w-6xl mx-auto px-8 py-24 text-center z-10 relative border border-white/10 bg-white/5 backdrop-blur-md rounded-3xl shadow-glass">
        <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-10 tracking-tight leading-normal">
          El equilibrio entre el 
          <RotatingText 
            texts={['Click', 'Craft']} 
            className="text-violet-400 inline-flex px-3" 
            rotationInterval={3000} 
          /> 
          y el 
          <RotatingText 
            texts={['Craft', 'Click']} 
            className="text-pink-400 inline-flex px-3" 
            rotationInterval={4000} 
          />.
        </h2>
        <p className="font-sans text-gray-300 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
          Click&Craft combina lo digital con lo artesanal: el <span className="text-white font-medium">click</span> que da inicio a una idea y el <span className="text-white font-medium">craft</span> que la convierte en algo único. No creemos en marcas perfectas desde el día uno, creemos en marcas que evolucionan. Queremos acompañar ese proceso, desde la primera idea hasta una identidad visual sólida.
        </p>
      </div>
    </motion.section>
  );
};

export default Philosophy;
