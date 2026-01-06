import React, { useState } from 'react';
import { Instagram, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "clickandcraft.st@gmail.com";
  
  // Formspree hook
  const [state, handleSubmit] = useForm("mlgdkzek");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative bg-black min-h-screen flex flex-col justify-between overflow-hidden text-white" id="contact">
        
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-950 to-zinc-900/50 pointer-events-none" />
      
      {/* Content Wrapper - Centered Vertically */}
      <div className="container mx-auto px-6 py-24 flex-grow flex items-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full items-center">
            
            {/* Left Column: CTA & Email */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-6xl md:text-8xl font-bold font-['Space_Grotesk'] tracking-tighter mb-8 leading-tight">
                ¿LISTO PARA <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">ESCALAR?</span>
                </h2>
                
                <p className="text-xl md:text-2xl text-gray-400 mb-12 font-light max-w-lg">
                No solo diseñamos webs. Creamos máquinas de conversión digital.
                </p>

                <button 
                  onClick={handleCopyEmail}
                  className="group flex items-center gap-4 text-2xl md:text-4xl font-bold hover:text-violet-400 transition-all duration-300 relative w-fit"
                >
                  <span className="border-b-2 border-white/20 group-hover:border-violet-400/50 pb-2">
                    {copied ? "¡Copiado! ✅" : email}
                  </span>
                </button>
            </motion.div>

            {/* Right Column: Contact Form */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden"
            >
                {/* Decor elements */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-violet-500/20 rounded-full blur-[80px]" />
                
                {state.succeeded ? (
                    <div className="text-center py-12 space-y-4">
                        <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                           <span className="text-3xl">✅</span>
                        </div>
                        <h3 className="text-3xl font-bold text-white">¡Mensaje Enviado!</h3>
                        <p className="text-gray-400">Gracias por contactarnos. Te responderemos lo antes posible.</p>
                    </div>
                ) : (
                    <>
                        <h3 className="text-2xl font-bold mb-6">Empecemos el Proyecto</h3>
                        
                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 uppercase tracking-widest font-bold">Nombre</label>
                                    <input 
                                        id="nombre"
                                        type="text" 
                                        name="name"
                                        placeholder="Tu Nombre" 
                                        className="w-full bg-white/5 border border-white/10 rounded-lg p-4 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition-all" 
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 uppercase tracking-widest font-bold">Email</label>
                                    <input 
                                        id="email"
                                        type="email" 
                                        name="email"
                                        placeholder="tu@email.com" 
                                        className="w-full bg-white/5 border border-white/10 rounded-lg p-4 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition-all" 
                                    />
                                    <ValidationError 
                                        prefix="Email" 
                                        field="email" 
                                        errors={state.errors} 
                                        className="text-red-400 text-sm mt-1"
                                    />
                                </div>
                            </div>
                            
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 uppercase tracking-widest font-bold">¿Qué necesitas?</label>
                                <select 
                                    id="service"
                                    name="service"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-4 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition-all text-gray-400"
                                >
                                    <option>Branding & Identidad</option>
                                    <option>Desarrollo Web</option>
                                    <option>Estrategia Completa</option>
                                    <option>Otro</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 uppercase tracking-widest font-bold">Detalles</label>
                                <textarea 
                                    id="message"
                                    name="message"
                                    rows="4" 
                                    placeholder="Cuéntanos un poco sobre tu proyecto..." 
                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-4 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition-all resize-none"
                                ></textarea>
                                <ValidationError 
                                    prefix="Message" 
                                    field="message" 
                                    errors={state.errors} 
                                    className="text-red-400 text-sm mt-1"
                                />
                            </div>

                            <button 
                                type="submit" 
                                disabled={state.submitting}
                                className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-violet-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {state.submitting ? 'Enviando...' : 'Enviar Mensaje'}
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </>
                )}
            </motion.div>
        </div>
      </div>

      {/* Footer Divider */}
      <div className="container mx-auto px-6 relative z-10 pb-12">
        <hr className="border-white/10 mb-12" />
        
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-sm text-gray-400">
          
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-4">
             <h3 className="text-2xl font-bold text-white tracking-tighter">Click & Craft</h3>
             <p>© 2025 Todos los derechos reservados.</p>
          </div>

          {/* Column 2: Links */}
          <div className="flex flex-col gap-2">
            <h4 className="text-white font-semibold mb-2 uppercase tracking-wider text-xs">Menu</h4>
            <a href="#" className="hover:text-violet-400 transition-colors">Inicio</a>
            <a href="#" className="hover:text-violet-400 transition-colors">Servicios</a>
            <a href="#" className="hover:text-violet-400 transition-colors">Proyectos</a>
            <a href="#" className="hover:text-violet-400 transition-colors">Filosofía</a>
          </div>

          {/* Column 3: Socials */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold mb-2 uppercase tracking-wider text-xs">Social</h4>
            <div className="flex gap-6">
              <a href="https://www.instagram.com/clickandcraft.st/" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition-colors group">
                <Instagram size={24} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="hover:text-violet-400 transition-colors group">
                <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="hover:text-violet-400 transition-colors group">
                <Twitter size={24} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
            <p className="mt-4 text-xs text-gray-600">
                Diseñado con pasión en la era digital.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
