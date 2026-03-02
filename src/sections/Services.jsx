import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeUp from '../components/FadeUp';
import RevealLine from '../components/RevealLine';

const services = [
  {
    num: '01',
    title: 'Identidad de Marca',
    short: 'Branding & Visual',
    description:
      'Naming, logos adaptables y el lenguaje visual que tu idea necesita para tener voz propia. Construimos la personalidad de tu marca desde cero, con coherencia y carácter.',
    tags: ['Naming', 'Logotipo', 'Paleta', 'Tipografía'],
    accent: 'from-violet-600/20 to-violet-900/0',
    accentLine: 'bg-violet-500',
  },
  {
    num: '02',
    title: 'Web Personalizada',
    short: 'Design & Dev',
    description:
      'Sitios con identidad propia, animaciones creativas y pensados para que tus clientes se enamoren de tu marca. Cada píxel tiene un propósito.',
    tags: ['React', 'Framer Motion', 'Responsive', 'CMS'],
    accent: 'from-pink-600/20 to-pink-900/0',
    accentLine: 'bg-pink-500',
  },
  {
    num: '03',
    title: 'Estrategia Digital',
    short: 'Content & Growth',
    description:
      'No es solo publicar, es contar una historia que mueva. Te ayudamos con el contenido, la estética y la narrativa para que tus redes generen resultados reales.',
    tags: ['Content', 'SEO', 'Social', 'Copy'],
    accent: 'from-white/10 to-transparent',
    accentLine: 'bg-white',
  },
];

export default function Services() {
  const [active, setActive] = useState(null);

  return (
    <section id="servicios" className="relative w-full py-32 z-20">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-40 left-0 w-[600px] h-[600px] rounded-full bg-violet-600/10 blur-[130px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-16">
        
        {/* Layout Asimétrico: Sticky Header en Desktop */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
          
          {/* ── LEFT COLUMN: STICKY HEADER ── */}
          <div className="lg:w-1/3">
            <div className="lg:sticky lg:top-40">
              <FadeUp>
                <div className="flex items-center gap-4 mb-8">
                  <RevealLine width="2.5rem" delay={0.2} />
                  <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-white/30">
                    Servicios
                  </span>
                </div>
                <h2
                  className="font-title font-bold text-white leading-[0.92] tracking-tight mb-8"
                  style={{ fontSize: 'clamp(3.5rem, 6vw, 5rem)' }}
                >
                  Cómo<br />crecemos<br />
                  <span
                    style={{
                      background: 'linear-gradient(95deg,#fff 30%,rgba(255,255,255,0.35))',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      fontStyle: 'italic',
                    }}
                  >
                    juntos.
                  </span>
                </h2>
                <p className="font-sans text-white/40 text-base leading-relaxed max-w-sm mb-12">
                  No solo escribimos código. Creamos ecosistemas digitales diseñados para destacar en un mercado saturado.
                </p>

                <FadeUp delay={0.4}>
                  <a
                    href="#contact"
                    className="group inline-flex items-center gap-3 font-mono text-xs tracking-[0.25em] uppercase text-white/60 hover:text-white transition-colors duration-300"
                  >
                    Iniciá tu proyecto
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </FadeUp>
              </FadeUp>
            </div>
          </div>

          {/* ── RIGHT COLUMN: SCROLLING LIST ── */}
          <div className="lg:w-2/3">
            <div className="w-full h-px bg-white/10 hidden lg:block mb-8" />
            
            <div className="flex flex-col">
              {services.map((s, i) => (
                <FadeUp key={s.num} delay={i * 0.15} y={80}>
                  <motion.div
                    className="relative group cursor-default"
                    onHoverStart={() => setActive(i)}
                    onHoverEnd={() => setActive(null)}
                  >
                    {/* Hover bg */}
                    <AnimatePresence>
                      {active === i && (
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r ${s.accent} pointer-events-none`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.4 }}
                        />
                      )}
                    </AnimatePresence>

                    {/* Accent line */}
                    <motion.div
                      className={`absolute left-0 top-0 bottom-0 w-1 ${s.accentLine}`}
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: active === i ? 1 : 0 }}
                      style={{ originY: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    />

                    {/* Row Content */}
                    <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 px-6 md:px-10 py-12 md:py-16 border-b border-white/10 relative z-10 transition-colors duration-500">
                      
                      {/* Num & Title Block */}
                      <div className="flex-1">
                        <span className="font-mono text-xs text-white/20 tracking-widest block mb-4">
                          {s.num}
                        </span>
                        <h3 className="font-title font-bold text-white text-4xl lg:text-5xl leading-tight mb-2">
                          {s.title}
                        </h3>
                        <p className="font-mono text-[10px] tracking-widest uppercase text-white/40">
                          {s.short}
                        </p>
                      </div>

                      {/* Description & Tags Block */}
                      <div className="flex-1 md:pl-8 md:border-l border-white/5 group-hover:border-white/20 transition-colors duration-500">
                        <p className="font-sans text-sm text-white/55 leading-relaxed mb-6">
                          {s.description}
                        </p>
                        <div className="flex flex-wrap items-center gap-2">
                          {s.tags.map((tag) => (
                            <span
                              key={tag}
                              className="font-mono text-[9px] tracking-widest uppercase px-3 py-1.5 rounded-full border border-white/10 text-white/40 group-hover:border-white/20 group-hover:text-white/70 transition-colors duration-300 bg-white/[0.02]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </motion.div>
                </FadeUp>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
