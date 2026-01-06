import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
      
      {/* Elemento 1 (Arriba Izquierda) - Top 15% */}
      <motion.div
        className="absolute top-[15%] left-[5%] z-10 w-40 md:w-64"
        initial={{ opacity: 0, x: -100, rotate: -20 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
        viewport={{ once: false, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.img
          src="/logo-3d.png"
          alt="Floating 3D Element 1"
          className="w-full h-auto object-contain drop-shadow-2xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Elemento 2 (Medio Derecha) - Top 45% */}
      <motion.div
        className="absolute top-[45%] right-[5%] z-10 w-40 md:w-64"
        initial={{ opacity: 0, x: 100, rotate: 20 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.img
          src="/logo-3d.png"
          alt="Floating 3D Element 2"
          className="w-full h-auto object-contain drop-shadow-2xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </motion.div>

      {/* Elemento 3 (Abajo Izquierda) - Top 75% */}
      <motion.div
        className="absolute top-[75%] left-[5%] z-10 w-40 md:w-64"
        initial={{ opacity: 0, x: -100, y: 50 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.img
          src="/logo-3d.png"
          alt="Floating 3D Element 3"
          className="w-full h-auto object-contain drop-shadow-2xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </motion.div>

    </div>
  );
};

export default FloatingElements;
