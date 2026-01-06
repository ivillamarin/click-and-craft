import React from 'react';
import DarkVeil from './components/reactbits/DarkVeil';
import CardNav from './components/reactbits/CardNav';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Projects from './sections/Projects';
import TechTicker from './sections/TechTicker';
import Philosophy from './sections/Philosophy';
import Values from './sections/Values';
import Footer from './sections/Footer';

import Pricing from './sections/Pricing';
import Contact from './sections/Contact';
import NoiseOverlay from './components/NoiseOverlay';
import FloatingElements from './components/FloatingElements';
import Workflow from './sections/Workflow';

function App() {
  const navItems = [
    { label: 'Inicio', links: [{ label: 'Home', href: '#inicio' }] },
    { label: 'Servicios', links: [{ label: 'Capabilities', href: '#servicios' }] },
    { label: 'Trabajo', links: [{ label: 'Projects', href: '#proyectos' }] },
    { label: 'Planes', links: [{ label: 'Pricing', href: '#pricing' }] },
    { label: 'Valores', links: [{ label: 'Why Us', href: '#values' }] },
    { label: 'Contacto', links: [{ label: 'Email', href: '#contacto' }] },
  ];

  return (
    <>
      
        <NoiseOverlay />
      {/* Capa 0: Fondo */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <DarkVeil />
      </div>

      {/* Capa 1: Fade Superior (Reemplazo de Niebla) */}
      <div className="fixed top-0 left-0 w-full h-64 bg-gradient-to-b from-black via-black/80 to-transparent z-40 pointer-events-none" />

      {/* Capa 2: Navbar */}
      <CardNav 
        logo="/logo-3d.png"
        logoAlt="Click & Craft Logo"
        items={navItems}
        baseColor="rgba(255, 255, 255, 0.05)"
        menuColor="#ffffff"
        buttonBgColor="#1a1a1a"
        buttonTextColor="#ffffff"
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 backdrop-blur-md border border-white/10 rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"
      />

      {/* Capa 3: Main */}
      <main className="relative z-20 flex flex-col gap-32">
        <Hero />
        <Services />
        <Projects />
        <Pricing />
        <TechTicker />
        
        {/* Contenedor negro apilado para secciones finales */}
        <div className="bg-black rounded-t-[3rem] relative z-30 pt-10 -mt-10 shadow-[0_-20px_40px_rgba(0,0,0,0.5)]">
          <Philosophy />
          <Values />
          <Workflow />
          <Contact />
        </div>
      </main>
    </>
  );
}

export default App;
