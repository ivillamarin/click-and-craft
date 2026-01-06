import React from 'react';
import { Code, Palette, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: "Identidad de Marca",
      description: "Naming, logos adaptables y el estilo visual que tu idea necesita para tener voz propia.",
      icon: <Palette size={32} className="text-violet-500" />
    },
    {
      title: "Web Personalizada",
      description: "Sitios con identidad propia, animaciones creativas y diseñados para que tus clientes se enamoren de tu marca.",
      icon: <Code size={32} className="text-pink-500" />
    },
    {
      title: "Estrategia Digital",
      description: "No es solo publicar, es contar una historia. Te ayudamos con el contenido y la estética para tus redes.",
      icon: <Rocket size={32} className="text-white" />
    }
  ];

  return (
    <motion.section 
      id="servicios" 
      className="relative w-full py-24 px-4 flex flex-col items-center z-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      
      {/* --- NUEVO ENCABEZADO (Header) --- */}
      <div className="max-w-3xl text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-white mt-4 mb-6">
          Cómo crecemos <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-pink-500">Juntos</span>
        </h2>
        <p className="text-gray-400 text-lg font-inter leading-relaxed">
          No solo escribimos código. Creamos ecosistemas digitales completos diseñados para destacar en un mercado saturado.
        </p>
      </div>
      {/* ---------------------------------- */}

      {/* GRILLA DE TARJETAS */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {services.map((service, index) => (
          <div 
            key={index}
            className="group relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md 
                       hover:border-violet-500/50 hover:bg-white/10 transition-all duration-300 ease-out
                       hover:-translate-y-2 cursor-default overflow-hidden shadow-glass"
          >
            {/* Gradiente sutil al hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative z-10">
              <div className="mb-6 p-4 rounded-full bg-white/5 w-fit border border-white/10 group-hover:border-violet-500/30 transition-colors">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold font-space-grotesk text-white mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-400 font-inter leading-relaxed group-hover:text-gray-300">
                {service.description}
              </p>
            </div>
          </div>
        ))}

      </div>
    </motion.section>
  );
};

export default Services;
