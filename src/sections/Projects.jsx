import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeUp from '../components/FadeUp';
import RevealLine from '../components/RevealLine';
import ProjectModal from '../components/ProjectModal';

const projectsData = [
  {
    id: 1,
    title: 'Aura Dining',
    description: 'Fine Dining Experience',
    category: 'Restaurante · Reservas',
    details: 'Sitio web para restaurante de alta cocina que despierta los sentidos. Incluye menú interactivo, sistema de reservas.',
    image: '/projects/restaurant.png',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    year: '2025',
  },
  {
    id: 2,
    title: 'Art Gallery X',
    category: 'Galería · Inmersivo',
    description: 'Immersive Web',
    details: 'Una galería de arte virtual que redefine la exhibición online. Experiencias 3D.',
    image: '/projects/gallery.png',
    tags: ['Three.js', 'React'],
    year: '2025',
  },
  {
    id: 3,
    title: 'Cyber Shop',
    category: 'E-Commerce · Plataforma',
    description: 'E-Commerce Platform',
    details: 'Solución de comercio electrónico robusta y escalable. Optimizada para conversión.',
    image: '/projects/ecommerce.png',
    tags: ['Next.js', 'Supabase'],
    year: '2025',
  },
  {
    id: 4,
    title: 'Tech Studio',
    category: 'Agencia · Portfolio',
    description: 'Agency Portfolio',
    details: 'Portafolio corporativo minimalista y elegante. Enfocado en la presentación de casos de estudio.',
    image: '/projects/agency.png',
    tags: ['React', 'Framer'],
    year: '2026',
  },
];

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section id="proyectos" className="relative w-full py-32 z-10 overflow-hidden">
        {/* Glow ambient */}
        <div className="pointer-events-none absolute top-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-pink-600/10 blur-[150px]" />

        <div className="max-w-7xl mx-auto px-6 md:px-16">
          
          {/* HEADER CENTRADO GIGANTE */}
          <div className="flex flex-col items-center text-center mb-32">
            <FadeUp>
              <div className="flex justify-center mb-6">
                <RevealLine width="3rem" delay={0.2} />
              </div>
              <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-white/30 block mb-6">
                Portfolio
              </span>
              <h2
                className="font-title font-bold text-white leading-[0.9] tracking-tighter"
                style={{ fontSize: 'clamp(4rem, 10vw, 9rem)' }}
              >
                Selected <br className="lg:hidden" />
                <span
                  style={{
                    background: 'linear-gradient(95deg,#fff 30%,rgba(255,255,255,0.2))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontStyle: 'italic',
                  }}
                >
                  Works.
                </span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.3} y={20}>
              <p className="font-sans text-white/40 text-sm md:text-base leading-relaxed max-w-lg mx-auto mt-8">
                Diseñamos experiencias inmersivas que trascienden la pantalla. Combinando estética de vanguardia y tecnología de precisión.
              </p>
            </FadeUp>
          </div>


          {/* STAGGERED ALTERNATING GRID (Editorial layout for smaller cases) */}
          <div className="flex flex-col gap-24 lg:gap-40">
            {projectsData.map((p, i) => {
              // Create alternating layout
              const isEven = i % 2 === 0;
              return (
                <div key={p.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-20 items-center`}>
                  
                  {/* Image side */}
                  <div className="w-full lg:w-3/5">
                    <FadeUp duration={1.4} y={100}>
                      <div 
                        className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden group cursor-pointer border border-white/10"
                        onClick={() => setSelected(p)}
                      >
                        <img 
                          src={p.image} 
                          alt={p.title} 
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" 
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                        
                        {/* Explore CTA centered on hover */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <span className="bg-black/50 backdrop-blur-md text-white font-mono text-[10px] uppercase tracking-widest px-6 py-3 rounded-full border border-white/20">
                            Explorar Proyecto
                          </span>
                        </div>
                      </div>
                    </FadeUp>
                  </div>

                  {/* Text side */}
                  <div className={`w-full lg:w-2/5 flex flex-col ${isEven ? 'lg:items-start lg:text-left' : 'lg:items-end lg:text-right'} items-start text-left`}>
                    <FadeUp duration={1.2} delay={0.2} y={60}>
                      <span className="font-mono text-xs text-white/30 tracking-widest block mb-6">
                        {String(i + 1).padStart(2, '0')} / {p.year}
                      </span>
                      <h3 className="font-title font-bold text-white text-4xl lg:text-5xl tracking-tight leading-tight mb-6">
                        {p.title}
                      </h3>
                      <p className="font-sans text-white/50 text-base leading-relaxed mb-8 max-w-sm">
                        {p.details}
                      </p>
                      
                      <div className={`flex flex-wrap gap-2 ${isEven ? 'justify-start' : 'lg:justify-end justify-start'}`}>
                        {p.tags.map(tag => (
                          <span key={tag} className="font-mono text-[10px] tracking-widest uppercase text-white/40 px-3 py-1 rounded-full border border-white/10">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </FadeUp>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
