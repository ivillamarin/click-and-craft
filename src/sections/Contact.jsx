import React, { useState } from 'react';
import { Instagram, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import FadeUp from '../components/FadeUp';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "clickandcraft.st@gmail.com";
  
  const [state, handleSubmit] = useForm("mlgdkzek");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen bg-[#020005] overflow-hidden text-white" id="contact">
        
      {/* Huge Background Glow Elements */}
      <div className="absolute -top-[10%] -right-[10%] w-[800px] h-[800px] bg-violet-800/20 blur-[200px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-pink-800/10 blur-[150px] rounded-full pointer-events-none" />
      
      {/* ── MAIN CONTACT AREA ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 pt-32 pb-40 relative z-10">
        <div className="flex flex-col xl:flex-row justify-between items-start gap-24 xl:gap-0">
            
            {/* Left Massive Text */}
            <div className="w-full xl:w-[60%] relative">
                <FadeUp duration={1.2}>
                    <h2 className="text-[17vw] md:text-[clamp(4.5rem,8vw,8rem)] font-display font-bold tracking-tighter leading-[0.85] mb-8 md:mb-12">
                        ¿LISTO <br/>
                        PARA <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-white italic">
                            ESCALAR?
                        </span>
                    </h2>
                    
                    <p className="font-text text-lg md:text-2xl text-gray-400 font-light max-w-md md:ml-12 border-l border-white/10 pl-6 mb-12 md:mb-16">
                        No solo diseñamos webs. Creamos máquinas de conversión digital.
                    </p>

                    <button 
                    onClick={handleCopyEmail}
                    className="group flex flex-col hover:text-violet-400 transition-all duration-300 md:ml-12"
                    >
                        <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500 mb-2 group-hover:text-violet-500/50 transition-colors">Click to Copy</span>
                        <span className="font-title text-2xl md:text-4xl lg:text-5xl font-bold border-b-2 border-white/10 group-hover:border-violet-400/50 pb-2">
                            {copied ? "¡Copiado! ✅" : email}
                        </span>
                    </button>
                </FadeUp>
            </div>

            {/* Right: Floating Asymmetrical Form */}
            <div className="w-full xl:w-[40%] xl:mt-32 mt-4 md:mt-0">
                <FadeUp delay={0.3} duration={1.2} y={80}>
                    <div className="bg-[#050505] border border-white/10 p-6 md:p-12 rounded-[2rem] shadow-glass relative group hover:border-violet-500/20 transition-colors duration-700">
                        {state.succeeded ? (
                            <div className="text-center py-12 space-y-4">
                                <div className="w-16 h-16 bg-green-500/10 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/20">
                                <span className="text-3xl">✅</span>
                                </div>
                                <h3 className="text-3xl font-title font-bold text-white">¡Mensaje Enviado!</h3>
                                <p className="font-text text-gray-400">Gracias por contactarnos. Te responderemos lo antes posible.</p>
                            </div>
                        ) : (
                            <>
                                <h3 className="text-2xl font-title font-bold mb-8">Inicia tu proyecto</h3>
                                
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-b border-white/5 pb-6">
                                        <div className="space-y-3">
                                            <input 
                                                id="nombre" type="text" name="name" placeholder="Tu Nombre" 
                                                className="w-full bg-transparent font-text text-lg border-none border-b border-transparent placeholder-gray-600 focus:outline-none focus:ring-0 focus:border-violet-500 focus:placeholder-white/20 transition-all px-0" 
                                            />
                                        </div>
                                        <div className="space-y-3">
                                            <input 
                                                id="email" type="email" name="email" placeholder="tu@email.com" 
                                                className="w-full bg-transparent font-text text-lg border-none border-b border-transparent placeholder-gray-600 focus:outline-none focus:ring-0 focus:border-violet-500 focus:placeholder-white/20 transition-all px-0" 
                                            />
                                            <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-sm mt-1" />
                                        </div>
                                    </div>
                                    
                                    <div className="pb-6 border-b border-white/5">
                                        <select 
                                            id="service" name="service"
                                            className="w-full bg-transparent font-text text-lg border-none text-gray-400 hover:text-white focus:outline-none focus:ring-0 cursor-pointer appearance-none px-0"
                                        >
                                            <option value="" disabled selected>¿Qué necesitas?</option>
                                            <option>Branding & Identidad</option>
                                            <option>Desarrollo Web</option>
                                            <option>Estrategia Completa</option>
                                            <option>Otro</option>
                                        </select>
                                    </div>

                                    <div className="pt-2">
                                        <textarea 
                                            id="message" name="message" rows="3" 
                                            placeholder="Detalles del proyecto..." 
                                            className="w-full bg-white/[0.02] border border-white/5 rounded-xl p-4 font-text text-lg focus:border-violet-500 focus:bg-white/[0.04] focus:outline-none transition-all resize-none"
                                        ></textarea>
                                        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-sm mt-1" />
                                    </div>

                                    <button 
                                        type="submit" 
                                        disabled={state.submitting}
                                        className="w-full bg-white text-black font-title font-bold py-5 rounded-xl hover:bg-violet-400 hover:text-white transition-all duration-300 flex items-center justify-between px-6 group disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                                    >
                                        <span className="uppercase tracking-widest text-xs font-mono">{state.submitting ? 'Enviando...' : 'Enviar Mensaje'}</span>
                                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </FadeUp>
            </div>
        </div>
      </div>

      {/* ── MASSIVE FOOTER ── */}
      <footer className="w-full border-t border-white/5 bg-[#020005] pt-24 pb-12 relative z-10 px-6 md:px-16 overflow-hidden">
        
        {/* Massive text background effect in footer */}
         <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none opacity-5">
            <h2 className="text-[25vw] md:text-[25vw] font-display font-bold text-white tracking-tighter text-center" style={{lineHeight: 0.8}}>
                Crafted.
            </h2>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 relative z-10">
          
          {/* Logo Column (Takes up more space) */}
          <div className="lg:col-span-8 flex flex-col justify-between">
             <div>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tighter mb-4 text-center lg:text-left">Click & Craft.</h3>
                <p className="font-text text-gray-500 text-base md:text-xl max-w-sm mx-auto lg:mx-0 text-center lg:text-left">Diseñado con pasión en la era digital.</p>
             </div>
             
             <div className="mt-16 lg:mt-32 text-center lg:text-left">
                <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30 truncate">
                    © 2026 Todos los derechos reservados.
                </p>
             </div>
          </div>

          {/* Links & Social Matrix */}
          <div className="lg:col-span-4 flex flex-col lg:flex-row justify-between lg:justify-end items-center lg:items-end gap-12 lg:gap-24">
            
            <div className="flex flex-col text-center lg:text-right w-full lg:w-auto mt-12 lg:mt-0">
                <div className="flex flex-col gap-4 border-t border-white/10 lg:border-none pt-8 lg:pt-0">
                    <h4 className="font-mono text-[10px] text-white/20 uppercase tracking-[0.2em] mb-2">Menu</h4>
                    <a href="#" className="font-title text-xl text-white hover:text-violet-400 transition-colors">Inicio</a>
                    <a href="#" className="font-title text-xl text-white hover:text-violet-400 transition-colors">Servicios</a>
                    <a href="#" className="font-title text-xl text-white hover:text-violet-400 transition-colors">Proyectos</a>
                    <a href="#" className="font-title text-xl text-white hover:text-violet-400 transition-colors">Filosofía</a>
                </div>
            </div>

            <div className="flex flex-col items-center lg:items-end w-full lg:w-auto">
                <h4 className="font-mono text-[10px] text-white/20 uppercase tracking-[0.2em] mb-6">Social</h4>
                <div className="flex gap-8 justify-center lg:justify-end w-full">
                    <a href="https://www.instagram.com/clickandcraft.st/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-violet-400 transition-colors group p-3 border border-white/10 rounded-full hover:border-violet-400/50">
                        <Instagram size={20} className="group-hover:scale-110 transition-transform" />
                    </a>
                    <a href="#" className="text-white hover:text-violet-400 transition-colors group p-3 border border-white/10 rounded-full hover:border-violet-400/50">
                        <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
                    </a>
                </div>
            </div>

          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
