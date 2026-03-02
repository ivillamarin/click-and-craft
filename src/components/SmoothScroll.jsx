import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * SmoothScroll — Usa el nuevo paquete `lenis` con lerp.
 * El valor lerp (0 → 1) controla la inercia:
 *   menor = más inercia (suave pero con lag)
 *   mayor = más responsivo (snappy)
 * 0.08 es el sweet spot para sentirse premium sin delay.
 */
export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      infinite: false,
    });

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return children;
}
