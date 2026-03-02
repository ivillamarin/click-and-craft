import { motion } from 'framer-motion';

/**
 * FadeUp — Animación de aparición desde abajo, solo una vez al entrar en viewport.
 *
 * Props:
 *   children  — contenido
 *   delay     — número, retraso en segundos (default 0)
 *   duration  — número, duración en segundos (default 0.8)
 *   y         — punto de partida en Y (default 40)
 *   className — clases extra al wrapper
 *   as        — tag HTML del wrapper (default 'div')
 */
export default function FadeUp({
  children,
  delay = 0,
  duration = 1.2,
  y = 60,
  className = '',
  as = 'div',
}) {
  const Tag = motion[as] || motion.div;

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </Tag>
  );
}
