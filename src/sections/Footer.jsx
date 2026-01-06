import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      id="contacto" 
      className="py-40 px-4 text-center relative z-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-txtMain mb-8">
          ¿Listo para escalar?
        </h2>
        
        <a 
          href="mailto:clickandcraft.st@gmail.com" 
          className="font-display text-3xl md:text-6xl font-bold text-txtSec hover:text-primary transition-colors duration-300 block mb-12 tracking-tight"
        >
          clickandcraft.st@gmail.com
        </a>
        
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-txtSec text-sm">
            <p>© {new Date().getFullYear()} Click & Craft. Todos los derechos reservados.</p>
            <p className="mt-4 md:mt-0 text-gray-400">
              Bienvenido a Click&Craft. Tu crecimiento es el nuestro.
            </p>
          </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
