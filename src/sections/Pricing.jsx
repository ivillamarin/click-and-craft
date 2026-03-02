import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import FadeUp from '../components/FadeUp';
import RevealLine from '../components/RevealLine';

const plans = [
  {
    num: '01',
    name: 'Despegue',
    price: 'Accesible',
    tagline: 'Presencia',
    features: ['1 Landing page', 'Responsive web', 'WhatsApp', 'Entrega 7 días'],
    recommended: false,
  },
  {
    num: '02',
    name: 'Crecimiento',
    price: 'Intermedio',
    tagline: 'Profesional',
    features: ['5 Secciones', 'SEO Inicial', 'Integración Social', 'Panel autogestionable'],
    recommended: true,
  },
  {
    num: '03',
    name: 'Pro',
    price: 'Premium',
    tagline: 'E-Commerce',
    features: ['Tienda Online', 'Carrito de compras', 'Medios de pago', 'Soporte 1 mes'],
    recommended: false,
  },
];

export default function Pricing() {
  return (
    <section className="relative py-32 overflow-hidden z-10 bg-[#020005]" id="pricing">
      <div className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-16">
        
        {/* LAYOUT LATERAL: Header a la izquierda, planes a la derecha */}
        <div className="flex flex-col xl:flex-row gap-16 xl:gap-24 relative">
          
          {/* HEADER (Sticky effect side) */}
          <div className="xl:w-1/3 flex flex-col justify-center xl:sticky xl:top-32 h-fit mb-12 xl:mb-0">
            <FadeUp duration={1.2}>
              <div className="flex items-center gap-4 mb-6">
                <RevealLine width="2.5rem" delay={0.2} />
                <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-white/30">
                  Inversión
                </span>
              </div>
              <h2
                className="font-title font-bold text-white leading-[0.9] tracking-tight mb-8"
                style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)' }}
              >
                El valor <br />
                <span className="text-white/40 italic font-light">
                  de escalar.
                </span>
              </h2>
              <p className="font-sans text-white/40 text-base leading-relaxed mb-10 max-w-sm">
                Diseñamos soluciones a medida, adaptadas al estadio de tu negocio. Precios transparentes y sin contratos ocultos.
              </p>
              
              <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.02] backdrop-blur-sm max-w-sm">
                <p className="font-mono text-[10px] uppercase tracking-widest text-violet-400 mb-2">Benefit.</p>
                <p className="font-sans text-sm text-white/70">Diseños 100% customizados, no usamos plantillas genéricas.</p>
              </div>
            </FadeUp>
          </div>

          {/* PRICING CARDS */}
          <div className="xl:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {plans.map((plan, i) => (
                <FadeUp key={plan.name} delay={i * 0.15} duration={1.2} y={80}>
                  <div
                    className={`relative flex flex-col h-full rounded-2xl p-8 border transition-colors duration-500 overflow-hidden group ${
                      plan.recommended 
                        ? 'bg-white/[0.04] border-violet-500/50 hover:bg-white/[0.06] hover:border-violet-400' 
                        : 'bg-[#06040A] border-white/5 hover:border-white/15'
                    }`}
                  >
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 via-violet-500/0 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    {/* Recommended Tag */}
                    {plan.recommended && (
                      <div className="absolute top-0 right-8 px-3 py-1 bg-violet-500/20 border-x border-b border-violet-500/30 rounded-b-lg">
                        <span className="font-mono text-[8px] uppercase tracking-widest text-violet-300">Popular</span>
                      </div>
                    )}

                    <div className="mb-8">
                      <span className="font-mono text-[10px] text-white/20 tracking-widest block mb-4">{plan.num}</span>
                      <h3 className="font-title text-3xl font-bold text-white mb-1">{plan.name}</h3>
                      <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/30">{plan.tagline}</p>
                    </div>

                    <div className="mb-10 block pb-8 border-b border-white/10">
                      <span className="text-3xl font-title font-light text-white">{plan.price}</span>
                    </div>

                    <ul className="space-y-4 mb-10 flex-grow">
                      {plan.features.map((f, fi) => (
                        <li key={fi} className="flex items-start gap-3">
                          <Check size={14} className={plan.recommended ? 'text-violet-400' : 'text-white/40'} />
                          <span className="font-sans text-sm text-white/60">{f}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#contact"
                      className={`block w-full text-center py-4 rounded-xl font-mono text-[10px] tracking-widest uppercase transition-all duration-300 border ${
                        plan.recommended
                          ? 'bg-violet-600/20 border-violet-500/50 text-white hover:bg-violet-600/40 hover:border-violet-500'
                          : 'bg-white/5 border-white/10 text-white/60 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      Solicitar
                    </a>
                  </div>
                </FadeUp>
              ))}
            </div>
            
            <FadeUp delay={0.6} duration={1}>
              <div className="mt-8 text-right">
                <a href="#contact" className="font-mono text-[10px] uppercase tracking-widest text-white/30 hover:text-white transition-colors border-b border-white/10 pb-1">
                  Ver especificaciones técnicas →
                </a>
              </div>
            </FadeUp>
          </div>

        </div>
      </div>
    </section>
  );
}
