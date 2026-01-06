import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Maximize2, Sparkles, UserCheck } from 'lucide-react';
import ScrollStack from '../components/reactbits/ScrollStack';

const Values = () => {
    const values = [
      {
        title: "Cercanía",
        description: "Trabajamos junto a vos, no solo para vos. Nos convertimos en socios estratégicos de tu proyecto.",
        icon: <UserCheck size={48} className="text-violet-400" />,
        color: "from-violet-500/20 to-violet-900/20"
      },
      {
        title: "Transparencia",
        description: "Claridad en cada paso del proceso. Sin letras chicas ni sorpresas, solo resultados claros.",
        icon: <Maximize2 size={48} className="text-pink-400" />,
        color: "from-pink-500/20 to-pink-900/20"
      },
      {
        title: "Pasión Artesanal",
        description: "Cada detalle cuenta, desde el trazo hasta el código. La excelencia está en la dedicación que ponemos.",
        icon: <Sparkles size={48} className="text-white" />,
        color: "from-slate-500/20 to-slate-900/20"
      },
      {
        title: "Crecimiento",
        description: "Si vos creces, nosotros también. Tu éxito es el combustible de nuestra evolución.",
        icon: <Heart size={48} className="text-red-400" />,
        color: "from-red-500/20 to-red-900/20"
      }
    ];
  
    return (
      <section className="py-24 px-6 relative z-10 w-full" id="values">
        <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                
                {/* Left Column: Stacking Cards */}
                <div className="order-2 lg:order-1 w-full">
                     <ScrollStack>
                        {values.map((val, idx) => (
                            <div 
                                key={idx}
                                className={`w-full h-[400px] md:h-[500px] rounded-3xl border border-white/10 backdrop-blur-xl flex flex-col items-center justify-center text-center p-8 md:p-12 bg-gradient-to-br ${val.color} shadow-glass relative overflow-hidden group hover:border-white/20 transition-colors duration-500`}
                            >
                                <div className="absolute inset-0 bg-black/40 -z-10" />
                                
                                <motion.div 
                                  initial={{ scale: 0.8, opacity: 0 }}
                                  whileInView={{ scale: 1, opacity: 1 }}
                                  transition={{ delay: 0.2 }}
                                  className="mb-8 p-6 rounded-full bg-white/5 border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:bg-white/10 transition-colors"
                                >
                                    {val.icon}
                                </motion.div>
                                <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 font-display tracking-tight">
                                  {val.title}
                                </h3>
                                <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-sans max-w-lg">
                                  {val.description}
                                </p>
                            </div>
                        ))}
                    </ScrollStack>
                </div>

                {/* Right Column: Sticky Text content */}
                <div className="order-1 lg:order-2 lg:sticky lg:top-48 lg:h-fit flex flex-col justify-center lg:pt-24">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-px w-12 bg-violet-500" />
                            <span className="text-violet-400 uppercase tracking-[0.2em] text-sm font-semibold">Nuestra Esencia</span>
                        </div>
                        
                        <h2 className="text-5xl md:text-7xl font-bold font-['Space_Grotesk'] text-white mb-8 leading-[1.1]">
                            Por qué <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-300 to-white">
                                elegirnos
                            </span>
                        </h2>
                        
                        <p className="text-gray-400 text-xl leading-relaxed max-w-xl mb-8">
                            No somos solo una agencia, somos el motor invisible detrás de tu próxima gran etapa. Cuatro pilares fundamentales sostienen cada línea de código y cada píxel que diseñamos.
                        </p>

                        <ul className="space-y-4 text-gray-300 font-light">
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                                Diseño estratégico, no solo estético.
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500" />
                                Tecnología escalable y robusta.
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                                Compromiso total con tus resultados.
                            </li>
                        </ul>
                    </motion.div>
                </div>

            </div>
        </div>
      </section>
    );
  };
  
export default Values;
