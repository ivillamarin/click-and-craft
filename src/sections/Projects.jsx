import React, { useState } from 'react';
import CardSwap from '../components/reactbits/CardSwap';
import BlurText from '../components/reactbits/BlurText';
import { motion } from 'framer-motion';
import ProjectModal from '../components/ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 1,
      title: "Aura Dining",
      description: "Fine Dining Experience",
      details: "Sitio web para restaurante de alta cocina que despierta los sentidos. Incluye menú interactivo, sistema de reservas en tiempo real y una galería visual inmersiva que refleja la sofisticación gastronómica.",
      image: "/projects/restaurant.png",
      tags: ["React", "Tailwind", "Framer Motion"]
    },
    {
      id: 2,
      title: "Art Gallery X",
      description: "Immersive Web",
      details: "Una galería de arte virtual que redefine la exhibición online. Experiencias inmersivas 3D que permiten a los usuarios explorar colecciones de arte desde cualquier lugar del mundo con una fidelidad visual asombrosa.",
      image: "/projects/gallery.png",
      tags: ["Three.js", "framer motion", "tailwind", "React"]
    },
    {
      id: 3,
      title: "Cyber Shop",
      description: "E-Commerce Platform",
      details: "Solución de comercio electrónico robusta y escalable. Optimizada para conversión con flujos de pago simplificados y un sistema de gestión de inventario avanzado.",
      image: "/projects/ecommerce.png",
      tags: ["Next.js", "React", "Node.js", "tailwind"]
    },
    {
      id: 4,
      title: "Tech Studio",
      description: "Agency Portfolio",
      details: "Portafolio corporativo minimalista y elegante. Enfocado en la presentación de casos de estudio y servicios con una estética limpia y profesional.",
      image: "/projects/agency.png",
      tags: ["React", "Framer Motion", "Vite"]
    }
  ];

  return (
    <>
    <motion.section 
      id="proyectos" 
      className="min-h-screen py-32 md:py-96 px-8 md:px-24 flex flex-col lg:flex-row items-center justify-center lg:justify-start relative z-10 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      
      {/* Columna Izquierda (Texto) */}
      <div className="w-full lg:w-[50%] flex flex-col justify-center items-start text-left mb-16 lg:mb-0 lg:pr-24 z-20">
        <h2 className="font-display text-5xl md:text-8xl font-bold text-txtMain mb-8 leading-tight">
          Selected<br />
          <span className="text-primary">Works</span>
        </h2>
        
        <p className="font-sans text-txtSec text-lg md:text-2xl leading-relaxed max-w-xl">
          Explora nuestra colección de proyectos digitales. Desde aplicaciones fintech de alta seguridad hasta experiencias inmersivas que desafían los límites de la web.
        </p>

        <div className="mt-12">
            <div className="px-10 py-4 border border-white/20 rounded-full text-white/80 text-lg bg-white/5 backdrop-blur-sm cursor-default">
                👆 Hacé click en los proyectos para ver detalles
            </div>
        </div>
      </div>

      {/* MOBILE/TABLET VIEW (Stacked Cards) */}
      <div className="w-full lg:hidden flex flex-col gap-8 mt-12 relative z-20">
          {projectsData.map((project) => (
              <motion.div 
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="w-full aspect-video relative rounded-2xl overflow-hidden border border-white/10 shadow-lg cursor-pointer group"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
              >
                  <img 
                      src={project.image} 
                      alt={project.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                      <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                      <p className="text-sm text-gray-300">{project.description}</p>
                  </div>
              </motion.div>
          ))}
      </div>

      {/* Columna Derecha (CardSwap Showcase) - Posicionada al borde derecho y más ancha */}
      <div className="hidden lg:flex absolute right-[-5%] top-1/2 -translate-y-1/2 items-center justify-center h-[1200px] w-auto z-10 opacity-80 hover:opacity-100 transition-opacity duration-500">
        <CardSwap width={1000} height={600} cardDistance={60} verticalDistance={60}>
            {projectsData.map((project, index) => (
                <div 
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    className="absolute top-1/2 left-1/2 w-full h-full rounded-3xl overflow-hidden border border-white/10 cursor-pointer shadow-glass group"
                >
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-12">
                        <h3 className="text-5xl font-display font-bold text-white mb-3">{project.title}</h3>
                        <p className="text-xl text-gray-300 font-sans">{project.description}</p>
                    </div>
                </div>
            ))}
        </CardSwap>
      </div>
    </motion.section>

    {selectedProject && (
        <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
        />
    )}
    </>
  );
};

export default Projects;
