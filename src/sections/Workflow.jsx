import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const workflowSteps = [
  {
    title: "Onboarding (Inicio)",
    description: "Definimos objetivos, alineamos expectativas y formalizamos nuestra alianza para comenzar con el pie derecho."
  },
  {
    title: "Estrategia y UX",
    description: "Investigamos tu mercado y diseñamos la arquitectura de la información para una navegación intuitiva."
  },
  {
    title: "Diseño UI",
    description: "Traducimos la identidad de tu marca en una interfaz visual moderna, atractiva y coherente."
  },
  {
    title: "Desarrollo",
    description: "Convertimos el diseño en código limpio y optimizado, asegurando velocidad y rendimiento."
  },
  {
    title: "Testing y QA",
    description: "Realizamos pruebas exhaustivas en todos los dispositivos para garantizar un funcionamiento sin errores."
  },
  {
    title: "Lanzamiento y Cierre",
    description: "Publicamos tu web en el servidor final, conectamos tu dominio y te entregamos el control."
  }
];

const Workflow = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.45], ["0%", "100%"]);

  return (
    <section id="workflow" className="py-32 bg-black relative text-white overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
        >
            <h2 className="text-5xl md:text-7xl font-bold font-title mb-6">Nuestro <span className="text-violet-500">Proceso</span></h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Un flujo de trabajo claro y transparente, diseñado para llevar tu idea desde el concepto hasta la realidad digital.
            </p>
        </motion.div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative max-w-5xl mx-auto">
            
            {/* Absolute Center Line (Base Grey) */}
            <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-white/10 -translate-x-1/2 rounded-full" />
            
            {/* Animated Center Line (Filling) */}
            <motion.div 
                style={{ height: lineHeight }}
                className="absolute left-[20px] md:left-1/2 top-0 w-1 bg-gradient-to-b from-violet-500 via-fuchsia-500 to-violet-500 -translate-x-1/2 rounded-full origin-top shadow-[0_0_15px_rgba(139,92,246,0.5)] z-0" 
            />

            {/* Steps Nodes */}
            <div className="space-y-24 relative z-10">
                {workflowSteps.map((step, index) => {
                    return (
                        <TimelineItem key={index} step={step} index={index} />
                    );
                })}
            </div>

        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ step, index }) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}
        >
            {/* Content Side */}
            <div className={`flex-1 w-full pl-16 md:pl-0 ${isEven ? 'md:text-left' : 'md:text-right'} relative`}>
                <h3 className={`text-2xl md:text-3xl font-bold mb-3 ${isEven ? '' : 'md:ml-auto'} w-fit group-hover:text-violet-400 transition-colors`}>
                    {step.title}
                </h3>
                <p className={`text-gray-400 leading-relaxed font-light ${isEven ? '' : 'md:ml-auto'} max-w-md`}>
                    {step.description}
                </p>
            </div>

            {/* Center Node (Dot) */}
            <div className="absolute md:static left-[20px] -translate-x-1/2 md:translate-x-0 w-4 h-4 bg-black border-2 border-white/30 rounded-full z-10">
                <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1.5, opacity: 1, backgroundColor: "#8B5CF6", borderColor: "#8B5CF6" }}
                    viewport={{ once: false, margin: "-15% 0px -15% 0px" }} // Triggers when near center
                    transition={{ duration: 0.4 }}
                    className="w-full h-full rounded-full border-2 border-transparent shadow-[0_0_20px_rgba(139,92,246,0.8)]"
                />
            </div>

            {/* Empty Side for balance */}
            <div className="hidden md:block flex-1" />
        </motion.div>
    )
}

export default Workflow;
