import React from 'react';
import BlurText from '../components/reactbits/BlurText';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-transparent backdrop-blur-[2px] text-white px-4 selection:bg-violet-600/30">
      
      {/* 1. ESTRUCTURA Y FONDO (ATMÓSFERA) */}
      {/* Fondo Transparente / Blur sutil */}
      <div className="absolute inset-0 -z-10 pointer-events-none" />

      {/* 2. ELEMENTOS DE CONTENIDO */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-full mx-auto space-y-12 md:space-y-16">
        
        {/* Badge Superior */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-sm font-medium text-white/80 animate-fade-in duration-1000">
          <Sparkles className="w-4 h-4 text-violet-400" />
          <span className="tracking-wide">CLICK & CRAFT STUDIO</span>
        </div>

        {/* Título Principal */}
        <div className="font-title text-7xl md:text-9xl tracking-tight leading-none text-white w-[80%] ml-auto text-center">
          <BlurText 
            text="Tu idea merece mostrarse al mundo." 
            className="text-center font-title"
            delay={150} 
            animateBy="words"
            direction="top"
          />
        </div>

        {/* Subtítulo */}
        <p className="font-sans text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed animate-fade-in [animation-delay:200ms] opacity-0 hover:opacity-100 transition-opacity duration-1000">
          En Click&Craft diseñamos páginas web simples, profesionales y hechas para crecer contigo. Porque cuando tu emprendimiento crece, nosotros también.
        </p>

        {/* Botones (CTAs) */}
        <div className="flex flex-col sm:flex-row items-center gap-6 animate-fade-in [animation-delay:400ms] opacity-0">
          {/* Primario - Efecto Avanzado */}
          <a href="#contact" className="group relative px-8 py-4 bg-white text-black rounded-full font-bold overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.5)]">
            <span className="relative z-10 flex items-center gap-2">
              Empezá tu proyecto hoy
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            {/* Shine eeffect */}
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent z-0" />
            <div className="absolute inset-0 bg-white z-0" />
          </a>
        </div>
      </div>

      {/* 3. DETALLES FINALES - Scroll Hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
        <ChevronDown className="w-8 h-8 text-white" />
      </div>

    </section>
  );
};

export default Hero;
