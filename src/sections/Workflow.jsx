import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import FadeUp from '../components/FadeUp';
import RevealLine from '../components/RevealLine';

const workflowSteps = [
  {
    num: "01",
    title: "Onboarding",
    description: "Definimos objetivos, alineamos expectativas y formalizamos nuestra alianza."
  },
  {
    num: "02",
    title: "Estrategia y UX",
    description: "Investigamos tu mercado y diseñamos la arquitectura de la información."
  },
  {
    num: "03",
    title: "Diseño UI",
    description: "Traducimos la identidad de tu marca en una interfaz visual moderna."
  },
  {
    num: "04",
    title: "Desarrollo",
    description: "Convertimos el diseño en código limpio y optimizado, asegurando velocidad."
  },
  {
    num: "05",
    title: "Testing y QA",
    description: "Pruebas exhaustivas en todos los dispositivos para garantizar cero errores."
  },
  {
    num: "06",
    title: "Lanzamiento",
    description: "Publicamos tu web, conectamos tu dominio y te entregamos el control."
  }
];

const Workflow = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end 80%"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  // A smooth spring that trails behind the actual scroll
  const smoothHeight = useSpring(lineHeight, { stiffness: 50, damping: 15 });

  return (
    <section id="workflow" className="py-40 relative overflow-hidden bg-black z-10 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        
        {/* Header Asimétrico */}
        <FadeUp duration={1.2} className="mb-32">
            <div className="flex items-center gap-4 mb-8">
              <RevealLine width="2.5rem" delay={0.2} />
              <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-white/30">
                Timeline
              </span>
            </div>
            <h2 className="font-display font-bold text-[11vw] md:text-7xl lg:text-8xl text-white tracking-tighter mb-4 md:mb-6 leading-[0.9]">
              Nuestro <br className="hidden md:block"/>
              <span className="text-violet-500 italic font-light relative leading-[1.1]">
                  Proceso.
                  <span className="absolute -bottom-4 left-1/4 w-1/2 h-1 bg-violet-600/30 blur-lg" />
              </span>
            </h2>
            <p className="text-gray-400 font-text text-base md:text-lg max-w-sm ml-auto text-right mt-6 md:mt-0">
                Convertimos ideas crudas en experiencias digitales premium a través de una metodología rigurosa.
            </p>
        </FadeUp>

        {/* Timeline Asimétrica (Línea Izquierda) */}
        <div className="relative max-w-5xl mx-auto">
            
            <div ref={containerRef} className="relative w-full pb-20">
                
                {/* Asymmetric Core Line (Left aligned) */}
                <div className="absolute left-4 md:left-24 top-4 bottom-4 w-px bg-white/10" />
                <motion.div 
                    style={{ height: smoothHeight }}
                    className="absolute left-4 md:left-24 top-4 w-[2px] bg-gradient-to-b from-violet-500 via-pink-500 to-transparent origin-top shadow-[0_0_15px_rgba(139,92,246,0.5)] z-0" 
                />

                <div className="space-y-16 md:space-y-40 relative z-10 pt-10">
                    {workflowSteps.map((step, index) => {
                        return (
                            <TimelineItem 
                                key={index} 
                                step={step} 
                                index={index} 
                            />
                        );
                    })}
                </div>

            </div>
            
            {/* Grid background effect */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
        </div>

      </div>
    </section>
  );
};

const TimelineItem = ({ step, index }) => {
    // Generar márgenes asimétricos progresivos basados en el índice
    const getMargins = (idx) => {
        const margins = [
            'md:ml-32',  // 0
            'md:ml-56',  // 1
            'md:ml-12 lg:ml-[40%]', // 2
            'md:ml-64',  // 3
            'md:ml-32 lg:ml-[50%]', // 4
            'md:ml-40'   // 5
        ];
        return margins[idx % margins.length];
    };

    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative flex items-center w-full"
        >
            {/* Node Dot (Left aligned to the line) */}
            <div className="absolute left-4 md:left-24 -translate-x-1/2 w-4 h-4 md:w-5 md:h-5 bg-[#050505] border-2 md:border-[3px] border-white/20 rounded-full z-10 flex items-center justify-center">
                <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1, backgroundColor: "#EC4899" }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="w-2 h-2 md:w-3 md:h-3 rounded-full shadow-[0_0_15px_rgba(236,72,153,0.8)]"
                />
            </div>

            {/* Content Sidebar with asymmetric staggering */}
            <div className={`pl-12 md:pl-0 w-full group transition-all duration-500 ${getMargins(index)}`}>
                <div className="p-6 md:p-8 rounded-2xl border border-transparent hover:border-white/10 hover:bg-white/[0.02] transition-colors duration-300 relative">
                    <span className="font-mono text-[10px] md:text-xs text-violet-400/50 tracking-widest block mb-4">
                        / {step.num}
                    </span>
                    <h3 className="text-xl md:text-2xl lg:text-4xl font-display font-bold text-white mb-2 md:mb-4 group-hover:text-violet-300 transition-colors">
                        {step.title}
                    </h3>
                    <p className="font-text font-light text-gray-400 leading-relaxed text-sm md:text-base lg:text-lg lg:group-hover:text-gray-300 transition-colors max-w-sm">
                        {step.description}
                    </p>
                    
                    {/* Decorative line on hover */}
                    <div className="absolute left-0 bottom-0 w-0 h-px bg-gradient-to-r from-violet-500 to-transparent group-hover:w-full transition-all duration-700 ease-out" />
                </div>
            </div>
            
        </motion.div>
    )
}

export default Workflow;
