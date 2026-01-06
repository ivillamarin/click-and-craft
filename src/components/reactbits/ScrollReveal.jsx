import { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.5,
  baseRotation = 3,
  blurStrength = 10,
  containerClassName = '',
  textClassName = '',
  rotationEnd = 'bottom bottom',
  wordAnimationEnd = 'bottom bottom',
  enableScrub = false // New prop to toggle scrub
}) => {
  const containerRef = useRef(null);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="inline-block" key={index}>
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;

    // Common ScrollTrigger config
    const triggerConfig = {
      trigger: el,
      scroller,
      start: 'top bottom',
      end: rotationEnd,
      scrub: enableScrub, // Use prop
      toggleActions: enableScrub ? undefined : 'play none none reverse' // Auto-play if not scrubbing
    };

    gsap.fromTo(
      el,
      { transformOrigin: '0% 50%', rotate: baseRotation },
      {
        ease: 'none',
        rotate: 0,
        scrollTrigger: triggerConfig
      }
    );

    const wordElements = el.querySelectorAll('.scroll-reveal-word');

    const wordTriggerConfig = {
      trigger: el,
      scroller,
      start: 'top bottom-=20%',
      end: wordAnimationEnd,
      scrub: enableScrub,
      toggleActions: enableScrub ? undefined : 'play none none reverse'
    };

    gsap.fromTo(
      wordElements,
      { opacity: baseOpacity, willChange: 'opacity' },
      {
        ease: 'none',
        opacity: 1,
        stagger: 0.05,
        scrollTrigger: wordTriggerConfig
      }
    );

    if (enableBlur) {
      gsap.fromTo(
        wordElements,
        { filter: `blur(${blurStrength}px)` },
        {
          ease: 'none',
          filter: 'blur(0px)',
          stagger: 0.05,
          scrollTrigger: wordTriggerConfig
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [scrollContainerRef, enableBlur, baseRotation, baseOpacity, rotationEnd, wordAnimationEnd, blurStrength, enableScrub]);

  // Updated query selector to match specific class
  useEffect(() => {
     // Re-run animation setup if children changes, though useMemo handles split text
  }, [children]);

  // Note: Added 'scroll-reveal-word' class to spans for selection
  const splitTextWithClass = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="inline-block scroll-reveal-word" key={index}>
          {word}
        </span>
      );
    });
  }, [children]);


  return (
    <h2 ref={containerRef} className={`my-5 ${containerClassName}`}>
      <p className={`font-semibold leading-relaxed ${textClassName}`}>
        {splitTextWithClass}
      </p>
    </h2>
  );
};

export default ScrollReveal;
