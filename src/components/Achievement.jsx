import React, { useState, useEffect, useRef } from 'react';

function CounterItem({ targetNumber, label, suffix = "", triggerStart }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!triggerStart) return;

    let start = 0;
    const duration = 2500; 
    const frameRate = 1000 / 60; 
    const totalFrames = Math.round(duration / frameRate);
    const increment = targetNumber / totalFrames;

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        setCount(targetNumber);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, [targetNumber, triggerStart]);

  return (
    <div className="flex flex-col items-center text-center py-10 px-4 sm:px-6 border-b last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 border-zinc-200/40 first:pl-0 last:pr-0 relative z-10">
      <span className="text-6xl sm:text-7xl lg:text-8xl font-serif font-light text-emerald-950 tracking-tighter mb-4 select-none">
        {count}{suffix}
      </span>
      <p className="text-zinc-600 uppercase text-[11px] tracking-[0.25em] font-bold leading-relaxed max-w-[220px]">
        {label}
      </p>
    </div>
  );
}

export default function Achievement() {
  const [hasIntersected, setHasIntersected] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasIntersected(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.disconnect();
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative bg-white border-y border-zinc-200/80 w-full transition-all duration-[2000ms] ease-in-out origin-top overflow-hidden"
      style={{
        maxHeight: hasIntersected ? '1600px' : '0px',
        opacity: hasIntersected ? 1 : 0,
      }}
    >
      {/* RICH PARALLAX / FIXED BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-[0.04] mix-blend-luminosity md:bg-fixed"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80')` 
          }}
        />
        {/* Subtle vignette gradient fade to keep layout borders perfectly clean */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
      </div>

      {/* CONTENT LAYER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36 relative z-10">
        
        <div className="space-y-20 lg:space-y-28">
          
          {/* TOP BLOCK: FULL WIDTH GRAND HEADER WITH ADVANCED SMOOTH RISE REVEAL */}
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              
              {/* Over-title reveal */}
              <div className="overflow-hidden">
                <span className={`text-xs font-bold tracking-[0.3em] uppercase text-emerald-800 block transform transition-transform duration-[1200ms] ease-out delay-[400ms]
                  ${hasIntersected ? 'translate-y-0' : 'translate-y-full'}`}
                >
                  Proven Track Record
                </span>
              </div>

              {/* Main Headline Reveal: Rises out of an invisible box layer */}
              <div className="overflow-hidden py-1">
                <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-serif text-zinc-900 tracking-tight leading-tight transform transition-all duration-[1600ms] ease-out delay-[600ms]
                  ${hasIntersected ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
                >
                  An Unwavering Standard of Excellence
                </h2>
              </div>

            </div>
            
            {/* Center dividing rule expanding gently outward */}
            <div className={`h-[1px] bg-emerald-800 mx-auto transition-all duration-[1500ms] ease-out delay-[900ms]
              ${hasIntersected ? 'w-16 opacity-100' : 'w-0 opacity-0'}`}
            ></div>
            
            {/* Context narrative paragraphs fading in cleanly right after header clears */}
            <div className={`space-y-6 transition-all duration-[1200ms] ease-out delay-[1100ms]
              ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <p className="text-zinc-600 text-base sm:text-lg lg:text-xl leading-relaxed font-normal max-w-3xl mx-auto">
                Behind every metric lies a landmark victory, a corporate restructuring executed with absolute precision, or a high-stakes dispute resolved with our client's commercial interests fully protected.
              </p>
              <p className="text-zinc-400 text-sm italic max-w-2xl mx-auto">
                "We measure our success purely by the resilience and structural security of the businesses and individuals we defend."
              </p>
            </div>

          </div>

          {/* LOWER BLOCK: OVERSIZED METRIC STACK */}
          <div className={`grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 divide-zinc-200/60 border-t border-zinc-200/60 pt-6 transition-all duration-[1200ms] ease-out delay-[1300ms]
            ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <CounterItem 
              targetNumber={500} 
              suffix="+" 
              label="Corporate & Private Clients Retained" 
              triggerStart={hasIntersected}
            />
            
            <CounterItem 
              targetNumber={94} 
              suffix="%" 
              label="Successful Dispute Resolutions" 
              triggerStart={hasIntersected}
            />
            
            <CounterItem 
              targetNumber={45} 
              suffix="+" 
              label="Years of Accumulated Expertise" 
              triggerStart={hasIntersected}
            />
          </div>

        </div>

      </div>
    </section>
  );
}