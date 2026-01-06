import React from 'react';
import { Check, Sprout, Rocket, Diamond } from 'lucide-react';
import { motion } from 'framer-motion';

const Pricing = () => {
  const plans = [
    {
      name: "Despegue",
      icon: <Sprout size={32} className="text-violet-400" />,
      price: "Accesible",
      priceDetail: "Pensado como \"primer paso digital\"",
      description: "Para quienes necesitan su primera presencia online.",
      features: [
        "1 página web institucional (ej. \"Quién soy + servicios + contacto\")",
        "Diseño adaptable a móviles (responsive)",
        "Integración con WhatsApp / formulario de contacto",
        "Entrega rápida (5-7 días hábiles)"
      ],
      recommended: false
    },
    {
      name: "Crecimiento",
      icon: <Rocket size={32} className="text-white" />,
      price: "Intermedio",
      priceDetail: "Balance entre personalización y valor",
      description: "Ideal para emprendedores que ya ofrecen productos o servicios.",
      features: [
        "Hasta 5 secciones (Inicio, Sobre mí, Servicios/Productos, Blog/Portfolio, Contacto)",
        "Integración con redes sociales",
        "Optimización inicial SEO (aparecer en Google con palabras clave básicas)",
        "Google Maps (si tienen local físico)",
        "Capacitación básica para que puedan editar contenido ellos mismos"
      ],
      recommended: true
    },
    {
      name: "Pro",
      icon: <Diamond size={32} className="text-violet-200" />,
      price: "Premium",
      priceDetail: "Mucho más económico que una agencia tradicional",
      description: "Para quienes quieren vender online y dar un salto más grande.",
      features: [
        "Todo lo del paquete Crecimiento +",
        "Tienda online (hasta 20 productos iniciales)",
        "Carrito de compras + medios de pago integrados",
        "Chat en vivo (Messenger, WhatsApp, o plugin básico)",
        "Paquete de mantenimiento por 1 mes incluido"
      ],
      recommended: false
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="pricing">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-violet-500/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] left-[10%] w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
           >
              <h2 className="text-5xl md:text-7xl font-bold font-['Space_Grotesk'] tracking-tighter mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40">
                  Potencia Tu Marca
                </span>
              </h2>
              <div className="flex justify-center mb-4">
                  <div className="h-1 w-24 bg-gradient-to-r from-transparent via-violet-500 to-transparent rounded-full" />
              </div>
              <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
                Selecciona el nivel de impacto que tu negocio necesita hoy.
              </p>
           </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className={`
                relative p-8 rounded-2xl backdrop-blur-md border transition-all duration-300 group
                flex flex-col h-full
                ${
                  plan.recommended
                    ? 'bg-white/10 border-violet-500/80 shadow-[0_0_30px_-5px_rgba(139,92,246,0.3)] z-10'
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                }
              `}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-violet-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                  Recomendado
                </div>
              )}

              <div className="mb-6">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm border ${
                  plan.recommended 
                    ? 'bg-violet-500/20 border-violet-400/30' 
                    : 'bg-white/5 border-white/10 group-hover:bg-white/10'
                }`}>
                  {plan.icon}
                </div>
                <h3 className={`text-xl font-bold mb-2 tracking-wider ${plan.recommended ? 'text-violet-200' : 'text-white'}`}>
                  {plan.name}
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {plan.description}
                </p>
                <div className="text-3xl font-bold text-white mb-1">{plan.price}</div>
                <p className="text-white/50 text-xs font-medium tracking-wide">
                  {plan.priceDetail}
                </p>
              </div>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 group-hover:text-white transition-colors duration-200">
                    <div className={`mt-0.5 p-0.5 rounded-full ${plan.recommended ? 'bg-violet-500/20' : 'bg-white/10'}`}>
                       <Check size={14} className={plan.recommended ? "text-violet-400" : "text-white"} />
                    </div>
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`
                  block w-full py-4 rounded-xl font-semibold tracking-wide transition-all duration-300 text-center
                  ${
                    plan.recommended
                      ? 'bg-violet-600 hover:bg-violet-700 text-white shadow-lg shadow-violet-900/20'
                      : 'bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20'
                  }
                `}
              >
                Solicitar Pack
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
