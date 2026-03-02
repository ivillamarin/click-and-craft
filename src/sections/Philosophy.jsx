import React from 'react';
import FloatingElements from '../components/FloatingElements';
import RotatingText from '../components/reactbits/RotatingText';
import FadeUp from '../components/FadeUp';
import RevealLine from '../components/RevealLine';

const Philosophy = () => {
  return (
    <section
      id="filosofia"
      className="pt-32 pb-48 w-full relative z-10 overflow-hidden"
    >
      <FloatingElements />
      
      {/* Background massive blur text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.02] md:opacity-[0.02]">
        <h2 className="text-[25vw] md:text-[20vw] font-display whitespace-nowrap tracking-tighter text-white">
          THE CLICK CRAFT
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between gap-16 md:gap-8">
            
            {/* Left Massive Title Block */}
            <div className="w-full lg:w-[65%]">
                <FadeUp duration={1.2}>
                    <RevealLine className="mb-8" width="3rem" delay={0.1} />
                    <h2 className="font-display font-bold text-[12vw] leading-none md:text-7xl lg:text-[5.5xl] text-white tracking-tighter md:leading-[1.05]">
                    El equilibrio <br /> perfecto <br className="hidden md:block" />
                    entre el{' '}
                    <span className="inline-block relative">
                        <span className="absolute -inset-1 bg-violet-600/20 blur-xl rounded-full" />
                        <RotatingText
                        texts={['Click', 'Craft']}
                        className="text-violet-400 align-baseline relative z-10 mx-2"
                        rotationInterval={3000}
                        />
                    </span>{' '}
                    y el{' '}
                    <span className="inline-block relative">
                        <span className="absolute -inset-1 bg-pink-600/20 blur-xl rounded-full" />
                        <RotatingText
                        texts={['Craft', 'Click']}
                        className="text-pink-400 align-baseline relative z-10 mx-2"
                        rotationInterval={4000}
                        />
                    </span>.
                    </h2>
                </FadeUp>
            </div>

            {/* Right Offset Text Block */}
            <div className="w-full lg:w-[35%] border-l md:border-l-0 lg:border-l border-white/10 pl-6 lg:pl-8 pb-4 mt-8 md:mt-0">
                <FadeUp delay={0.3} duration={1}>
                    <p className="font-text text-gray-400 text-base md:text-lg lg:text-xl leading-relaxed">
                    Combinamos lo digital con lo artesanal: el <span className="text-white font-sans font-medium">click</span>{' '}
                    que da inicio a una idea y el <span className="text-white font-sans font-medium">craft</span> que la convierte en algo único.
                    <br/><br/>
                    No creemos en marcas perfectas desde el día uno, creemos en marcas que evolucionan.
                    </p>
                </FadeUp>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Philosophy;
