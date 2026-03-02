import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import DecryptedText from '../components/reactbits/DecryptedText';

/* ─── Magnetic Button ──────────────────────────────────────────────────── */
const MagneticButton = ({ href, children }) => {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  };

  const handleMouseLeave = () => {
    if (ref.current) ref.current.style.transform = 'translate(0, 0)';
  };

  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative inline-flex items-center justify-center gap-3 px-9 py-4 overflow-hidden rounded-full font-semibold text-sm tracking-widest uppercase transition-colors duration-300"
      style={{
        transition: 'transform 0.15s ease, box-shadow 0.3s ease, background 0.3s ease',
        background: 'transparent',
        border: '1.5px solid rgba(255,255,255,0.35)',
        color: 'white',
        letterSpacing: '0.18em',
      }}
    >
      {/* Glow fill on hover */}
      <span
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.12) 0%, transparent 70%)',
        }}
      />
      {/* Shimmer sweep */}
      <span
        className="absolute inset-0 rounded-full -translate-x-full group-hover:translate-x-full transition-transform duration-700"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
        }}
      />
      <span className="relative z-10">{children}</span>
      {/* Arrow icon */}
      <svg
        className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </a>
  );
};

/* ─── Awwwards CTA Button ───────────────────────────────────────────────── */
const AwwwardsButton = ({ href, children }) => {
  const [hovered, setHovered] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    const el = btnRef.current;
    if (!el) return;
    const { left, top } = el.getBoundingClientRect();
    setPos({ x: e.clientX - left, y: e.clientY - top });
  };

  return (
    <a
      ref={btnRef}
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      className="relative inline-flex items-center gap-4 group cursor-none overflow-hidden"
      style={{ textDecoration: 'none' }}
    >
      {/* Sliding background pill */}
      <span
        className="relative z-10 block font-mono text-xs tracking-[0.3em] uppercase px-7 py-3.5 border border-white/20 rounded-full overflow-hidden"
        style={{ color: hovered ? '#000' : 'rgba(255,255,255,0.75)', transition: 'color 0.4s ease' }}
      >
        {/* Fill on hover */}
        <span
          className="absolute inset-0 rounded-full"
          style={{
            background: 'white',
            transform: hovered ? 'scaleX(1)' : 'scaleX(0)',
            transformOrigin: 'left center',
            transition: 'transform 0.45s cubic-bezier(0.77,0,0.175,1)',
          }}
        />
        <span className="relative z-10">{children}</span>
      </span>

      {/* Animated circle cursor */}
      <span
        style={{
          position: 'absolute',
          left: pos.x,
          top: pos.y,
          transform: 'translate(-50%, -50%)',
          width: hovered ? 48 : 0,
          height: hovered ? 48 : 0,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.25)',
          transition: 'width 0.3s ease, height 0.3s ease',
          pointerEvents: 'none',
          zIndex: 20,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </span>

      {/* Static arrow for non-hover */}
      <svg
        className="w-5 h-5 transition-all duration-300 group-hover:opacity-0 group-hover:translate-x-2"
        fill="none"
        stroke="rgba(255,255,255,0.4)"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </a>
  );
};

/* ─── Title Lines ───────────────────────────────────────────────────────── */
const titleLines = ['Tu idea', 'merece mostrarse', 'al mundo.'];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.22 } },
};

// Cinematic curtain-reveal: lines slide up from below + skew correction
const lineVariants = {
  hidden: { y: '115%', skewY: 5, opacity: 0 },
  visible: {
    y: '0%',
    skewY: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const rightVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, delay: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

/* ─── Component ─────────────────────────────────────────────────────────── */
const Hero = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-transparent text-white px-6 md:px-16 selection:bg-violet-600/30"
    >
      <div className="absolute inset-0 -z-10 pointer-events-none" />

      {/* ── ASYMMETRIC GRID ── */}
      <div
        className="relative z-10 w-full max-w-[1500px] mx-auto flex flex-col lg:grid items-center min-h-[88vh]"
        style={{ gridTemplateColumns: '60% 40%', gap: '0' }}
      >

        {/* ── LEFT: Giant Title ── */}
        <motion.div
          className="flex flex-col justify-center pr-0 lg:pr-12 pt-16 lg:pt-0 w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/30 mb-10 block"
          >
            ✦ Click &amp; Craft Studio
          </motion.span>

          {/* ── Awwwards Title ── */}

          {/* Line 1: "Tu" micro-label + "idea" solid giant */}
          <div style={{ overflow: 'hidden', paddingBottom: '0.05em' }}>
            <motion.div variants={lineVariants} className="flex items-baseline gap-3">
              <span
                className="font-mono text-white/30 uppercase"
                style={{ fontSize: 'clamp(0.55rem, 0.7vw, 0.7rem)', letterSpacing: '0.25em' }}
              >
                Tu
              </span>
              <span
                className="font-title text-white"
                style={{
                  fontSize: 'clamp(3.5rem, 11vw, 7rem)', // Mobile adjusted
                  lineHeight: 0.88,
                  letterSpacing: '-0.03em',
                }}
              >
                idea
              </span>
            </motion.div>
          </div>

          {/* Line 2: italic stroke/outline — slightly indented */}
          <div style={{ overflow: 'hidden', paddingBottom: '0.05em' }}>
            <motion.div
              variants={lineVariants}
              style={{ paddingLeft: 'clamp(0.5rem, 1.5vw, 2rem)' }}
            >
              <span
                className="font-title block"
                style={{
                  fontSize: 'clamp(2.5rem, 9.5vw, 6rem)', // Mobile adjusted
                  lineHeight: 0.92,
                  letterSpacing: '-0.03em',
                  color: 'transparent',
                  WebkitTextStroke: '1.5px rgba(255,255,255,0.65)',
                  fontStyle: 'italic',
                  whiteSpace: 'nowrap',
                }}
              >
                merece mostrarse
              </span>
            </motion.div>
          </div>

          {/* Line 3: gradient fade solid — nowrap to stay on one line */}
          <div style={{ overflow: 'hidden', paddingBottom: '0.05em' }}>
            <motion.div variants={lineVariants}>
              <span
                className="font-title"
                style={{
                  display: 'inline-block',
                  fontSize: 'clamp(3.5rem, 11vw, 7rem)', // Mobile adjusted
                  lineHeight: 0.88,
                  letterSpacing: '-0.03em',
                  whiteSpace: 'nowrap',
                  background: 'linear-gradient(95deg, #ffffff 30%, rgba(255,255,255,0.4) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                al mundo.
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* ── RIGHT: Awwwards panel (restaurado + más espacio) ── */}
        <motion.div
          className="flex flex-col justify-between h-auto lg:h-full py-12 lg:py-16 pl-0 lg:pl-16 w-full mt-12 lg:mt-0 lg:border-l lg:border-white/10"
          variants={rightVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Top: index decorativo + etiqueta */}
          <div className="flex items-start justify-between">
            <span
              className="font-mono text-white/10 select-none leading-none"
              style={{ fontSize: 'clamp(6rem, 10vw, 11rem)', fontWeight: 700 }}
            >
              01
            </span>
            <div className="flex flex-col items-end gap-1 mt-4">
              {/* Badge disponible */}
              <div className="flex items-center gap-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                </span>
                <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-white/30">
                  Disponible
                </span>
              </div>
              <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-white/20 text-right leading-loose">
                Diseño web<br />&amp; desarrollo
              </span>
            </div>
          </div>

          {/* Middle: descripción + stats */}
          <div className="flex flex-col gap-8">
            <div className="w-10 h-px bg-white/15" />

            <p className="font-sans text-base md:text-lg leading-[1.85] text-white/45 max-w-sm">
              <DecryptedText
                text="Diseñamos páginas web simples y profesionales, hechas para crecer contigo."
                animateOn="view"
                sequential={true}
                speed={28}
                revealDirection="start"
                className="text-white/75"
                encryptedClassName="text-violet-400/40"
                parentClassName="font-sans"
              />
            </p>

            {/* Stats row — más grandes */}
            <div className="flex items-center gap-4 md:gap-8 overflow-x-auto pb-4 hide-scrollbar">
              {[
                { value: '100%', label: 'Custom' },
                { value: 'EST.', label: '2026' },
                { value: '∞', label: 'Soporte' },
              ].map(({ value, label }) => (
                <div key={label} className="flex flex-col gap-1.5 border-l border-white/10 pl-5 first:border-l-0 first:pl-0">
                  <span className="font-title text-xl text-white/80 leading-none">{value}</span>
                  <span className="font-mono text-[9px] tracking-[0.28em] uppercase text-white/25">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom: CTA */}
          <div className="flex flex-col gap-6">
            <AwwwardsButton href="#contact">
              Empezá tu proyecto
            </AwwwardsButton>
            <p className="font-mono text-[9px] tracking-[0.22em] uppercase text-white/18">
              Sin costo inicial · Respuesta en 24h
            </p>
          </div>
        </motion.div>
      </div>

      {/* ── Scroll hint ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer hover:opacity-100 transition-opacity"
      >
        <ChevronDown className="w-5 h-5 text-white" />
      </motion.div>
    </section>
  );
};

export default Hero;
