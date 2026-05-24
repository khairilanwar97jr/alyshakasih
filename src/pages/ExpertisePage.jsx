import React, { useEffect, useRef, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { expertiseIntro, expertiseData } from '../data/expertiseData';

function AnimatedSection({ practice, index }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <article 
      ref={sectionRef}
      id={practice.id}
      className={`scroll-mt-24 pt-16 first:pt-0 border-b last:border-b-0 border-zinc-100 pb-16 sm:pb-24 last:pb-0 transition-all duration-1000 ease-out transform
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
        
        {/* Left Column: Heading & Awards Badge */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <div className="text-xs font-mono text-zinc-400">Section 0{index + 1}</div>
            <h2 className="text-2xl sm:text-3xl font-serif tracking-tight text-zinc-950 font-normal">
              {practice.title}
            </h2>
          </div>
          
          {/* Prestige Award Container Box */}
          <div className="bg-emerald-50/50 border-l-[3px] border-emerald-800 p-5 rounded-r-sm">
            <div className="text-[9px] font-bold tracking-[0.2em] text-emerald-900 uppercase mb-2 block">
              ALB Finalist Recognition
            </div>
            <p className="text-xs text-zinc-600 leading-relaxed font-normal">
              {practice.awards}
            </p>
          </div>
        </div>

        {/* Right Column: Descriptions, Scope list and reported cases */}
        <div className="lg:col-span-7 space-y-10">
          <div className="space-y-4 text-zinc-700 text-sm sm:text-base leading-relaxed">
            <p className="font-normal text-zinc-900">{practice.fullDesc}</p>
            <p className="text-zinc-500 font-light text-sm italic">{practice.closingDesc}</p>
          </div>

          {/* Sub-practice List Matrix */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold tracking-wider uppercase text-zinc-900">
              Core Operational Areas
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-xs sm:text-sm text-zinc-600">
              {practice.subPractices.map((sub, i) => (
                <li key={i} className="flex items-start gap-2.5 py-0.5 group">
                  <span className="w-1.5 h-1.5 bg-emerald-700 rounded-full shrink-0 mt-2"></span>
                  <span className="transition-colors group-hover:text-zinc-950">{sub}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Citations Box */}
          <div className="space-y-4 pt-4 border-t border-zinc-100">
            <h4 className="text-xs font-bold tracking-wider uppercase text-zinc-950 flex items-center justify-between">
              <span>Entrusted Landmark Judgments</span>
              <span className="text-[10px] font-normal font-mono text-zinc-400">({practice.cases.length} Decisions)</span>
            </h4>
            <div className="bg-emerald-950 text-zinc-200 p-6 rounded-xs font-mono text-[11px] sm:text-xs leading-relaxed space-y-3.5 tracking-tight shadow-md border border-emerald-900">
              {practice.cases.map((citation, i) => (
                <div key={i} className="border-b last:border-b-0 border-emerald-900 pb-3.5 last:pb-0 flex items-start gap-3">
                  <span className="text-emerald-400 font-bold shrink-0">&raquo;</span>
                  <span className="whitespace-normal hover:text-white transition-colors">{citation}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </article>
  );
}

export default function ExpertisePage() {
  const { hash } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 250);
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-white text-zinc-950 flex flex-col justify-between selection:bg-emerald-800 selection:text-white">

      {/* Premium Corporate Banner */}
      <section className="bg-emerald-950 text-white pt-36 pb-24 border-b border-emerald-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-xs font-bold tracking-[0.4em] uppercase text-emerald-400 block">
            Our Credentials
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif tracking-tight font-light text-zinc-100 max-w-4xl mx-auto">
            Practice Parameters &amp; Reported Decisions
          </h1>
          <div className="w-12 h-[1px] bg-emerald-500/40 mx-auto my-3"></div>
          <p className="text-emerald-200/80 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto font-serif italic">
            "{expertiseIntro.collectiveStatement}"
          </p>
        </div>
      </section>

      {/* Extensive Deep Dive Flow */}
      <main className="flex-grow max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 space-y-20 lg:space-y-28">
        {expertiseData.map((practice, index) => (
          <AnimatedSection key={practice.id} practice={practice} index={index} />
        ))}
      </main>

      {/* Corporate Page Footer Area */}
      <footer className="bg-emerald-950 text-emerald-200/60 text-[11px] py-12 border-t border-emerald-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Chambers of Alysha Kasih &amp; Partners. All rights reserved.</p>
          <Link to="/" className="text-emerald-400 font-medium hover:text-emerald-300 transition-colors uppercase tracking-wider text-[10px]">&larr; Return to Firm Overview</Link>
        </div>
      </footer>
    </div>
  );
}