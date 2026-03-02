import { motion } from 'framer-motion';

/**
 * RevealLine — Línea violeta que se expande de izquierda a derecha al entrar en viewport.
 * Aporta un acento de color sutil sin ser invasivo.
 *
 * Props:
 *   delay     — retraso en segundos (default 0.2)
 *   width     — ancho final (default '3rem' / '48px')
 *   className — clases extra
 */
export default function RevealLine({ delay = 0.2, width = '3rem', className = '' }) {
  return (
    <motion.div
      className={`h-px bg-violet-500/70 ${className}`}
      initial={{ width: 0, opacity: 0 }}
      whileInView={{ width, opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    />
  );
}
