import React, { useEffect, useRef, useState } from 'react';

export default function Team() {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [cardVisible, setCardVisible] = useState(false);
  
  const headerRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          headerObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const cardObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCardVisible(true);
          cardObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    if (headerRef.current) headerObserver.observe(headerRef.current);
    if (cardRef.current) cardObserver.observe(cardRef.current);

    return () => {
      headerObserver.disconnect();
      cardObserver.disconnect();
    };
  }, []);

  return (
    <section className="bg-white border-b border-zinc-200 w-full overflow-hidden relative">
      {/* Soft geometric luxury mesh pattern to stay uniform with the theme */}
      <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10">
        
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`max-w-3xl mx-auto text-center mb-20 space-y-4 transform transition-all duration-1000 ease-out
            ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span className="text-xs font-bold tracking-[0.35em] uppercase text-emerald-800 block">
            Leadership Profile
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-zinc-950 tracking-tight font-normal">
            Our Key Counsel
          </h2>
          <div className="w-12 h-[1px] bg-emerald-800 mx-auto my-3"></div>
          <p className="text-zinc-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed font-light">
            Enlisting industry experts and vetted legal minds dedicated to delivering exceptional advisory standards.
          </p>
        </div>

        {/* Team Layout Container */}
        <div className="flex justify-center items-center">
          
          {/* Executive Card - Modified to animate smoothly from the right side */}
          <div
            ref={cardRef}
            className={`bg-white border border-zinc-200 p-8 sm:p-12 rounded-2xl max-w-md w-full relative overflow-hidden text-center
              transition-all duration-1000 ease-out transform-gpu
              shadow-lg hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.18)] hover:border-emerald-800/20 hover:-translate-y-3 group
              ${cardVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-16 scale-[0.98]'}`}
          >
            {/* Structural top accent line that wraps smoothly along the rounded edge */}
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-600 opacity-80" />

            {/* Avatar Cluster Container */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                {/* Outer pulsing rounded focus ring */}
                <div className="absolute inset-0 border border-emerald-800/20 rounded-full scale-110 group-hover:scale-115 group-hover:border-emerald-800/40 transition-all duration-500" />
                
                {/* Fully Rounded Premium Headshot Image */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-white shadow-md relative z-10 bg-zinc-100">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400" 
                    alt="Tan Sri Kasih Nur Alisa binti Abdullah"
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Counsel Typography Stack */}
            <div className="space-y-4">
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold tracking-[0.2em] text-emerald-800 uppercase font-sans">
                  Consultant
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-normal text-zinc-900 tracking-tight leading-snug">
                  Tan Sri Kasih Nur Alisa binti Abdullah
                </h3>
                <p className="text-zinc-400 font-mono text-[11px] uppercase tracking-wider pt-1">
                  Founder - Consultant
                </p>
              </div>

              <div className="w-8 h-[1px] bg-zinc-200 mx-auto my-2 group-hover:w-16 transition-all duration-500"></div>

              {/* Secure Corporate Email Endpoint */}
              <div className="pt-2">
                <a 
                  href="mailto:kasih.alyshakasih@gmail.com"
                  className="text-xs font-mono text-zinc-600 hover:text-emerald-800 transition-colors inline-flex items-center gap-2 border-b border-transparent hover:border-emerald-800/30 pb-0.5"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5 text-emerald-800">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5A2.25 2.25 0 0 1 2.25 17.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5H4.5a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  <span>kasih.alyshakasih@gmail.com</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}