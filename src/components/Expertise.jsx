import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { expertiseIntro, expertiseData } from '../data/expertiseData';

// Individual scroll-animated corporate card component
function AnimatedCard({ practice, index }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      style={{ transitionDelay: `${index * 120}ms` }}
      className={`border border-zinc-200 p-8 sm:p-10 rounded-none flex flex-col justify-between min-h-[380px] relative overflow-hidden flex-1
        transition-all duration-500 ease-out transform-gpu
        bg-white text-zinc-900 shadow-lg 
        hover:bg-emerald-950 hover:text-white hover:border-emerald-800 hover:-translate-y-3 hover:shadow-[0_30px_60px_-15px_rgba(2,45,34,0.4)] group
        ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-[0.99]'}`}
    >
      {/* Structural top accent line that turns white when the card goes green */}
      <div className="absolute top-0 left-0 h-[4px] bg-emerald-800 group-hover:bg-emerald-400 w-12 group-hover:w-full transition-all duration-500 ease-in-out" />
      
      <div className="relative z-10 space-y-6">
        {/* Card Header Metadata Row */}
        <div className="flex items-center justify-between border-b border-zinc-100 group-hover:border-emerald-900/60 pb-4 transition-colors duration-500">
          <span className="text-[10px] font-bold tracking-[0.2em] text-emerald-800 group-hover:text-emerald-400 uppercase font-sans transition-colors duration-500">
            ALB Nominee
          </span>
          <span className="text-xs font-mono text-zinc-400 group-hover:text-emerald-400 transition-colors duration-500">
            [P-{String(index + 1).padStart(2, '0')}]
          </span>
        </div>
        
        {/* Main Brief Content Block */}
        <div className="space-y-3">
          <h3 className="text-xl sm:text-2xl font-serif font-normal text-zinc-900 group-hover:text-white tracking-tight leading-snug transition-colors duration-500">
            {practice.title}
          </h3>
          <p className="text-zinc-600 group-hover:text-emerald-100/80 text-xs sm:text-sm leading-relaxed font-normal tracking-normal line-clamp-4 transition-colors duration-500">
            {practice.previewDesc}
          </p>
        </div>
      </div>

      {/* Corporate Action Footer */}
      <div className="mt-8 pt-5 border-t border-zinc-100 group-hover:border-emerald-900/60 relative z-10 flex items-center justify-between transition-colors duration-500">
        <Link 
          to={`/expertise#${practice.id}`}
          className="text-[11px] font-bold uppercase tracking-[0.15em] text-zinc-900 group-hover:text-emerald-400 transition-colors inline-flex items-center gap-3 duration-500"
        >
          <span>Examine Core Parameters</span>
          <span className="text-sm transform group-hover:translate-x-2 transition-transform duration-300">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}

export default function Expertise() {
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-gradient-to-b from-emerald-950 via-emerald-900 via-emerald-900/40 to-white border-b border-zinc-200/80 w-full overflow-hidden relative">
      {/* Premium institutional mesh overlay texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10">
        
        {/* Corporate Header Section */}
        <div 
          ref={headerRef}
          className={`max-w-3xl mx-auto text-center mb-20 space-y-4 transform transition-all duration-1000 ease-out
            ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span className="text-xs font-bold tracking-[0.35em] uppercase text-emerald-400 block">
            Practice Framework
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-white tracking-tight font-light">
            Our Spheres of Expertise
          </h2>
          <div className="w-12 h-[1px] bg-emerald-400/30 mx-auto my-3"></div>
          <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed font-light font-serif italic px-4 max-w-2xl mx-auto">
            "{expertiseIntro.collectiveStatement}"
          </p>
        </div>

        {/* Practice Cards Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 items-stretch">
          {expertiseData.map((practice, index) => (
            <AnimatedCard key={practice.id} practice={practice} index={index} />
          ))}
        </div>

        {/* Explicit Route Redirect Button */}
        <div className="text-center">
          <Link 
            to="/expertise" 
            className="inline-block bg-white text-emerald-950 font-medium text-xs uppercase tracking-[0.25em] px-10 py-4.5 border border-white hover:bg-transparent hover:text-white hover:border-white transition-all duration-300 rounded-none shadow-md"
          >
            Explore Complete Credentials &amp; Case Citations
          </Link>
        </div>

      </div>
    </section>
  );
}