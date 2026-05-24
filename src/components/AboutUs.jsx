import React, { useEffect, useRef, useState } from 'react';

export default function AboutUs() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className="bg-zinc-50 text-zinc-800 py-16 sm:py-24 border-b border-zinc-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-12">
        
        {/* Header */}
        <div className={`flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-zinc-200 pb-3 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}>
          <h2 className="text-2xl sm:text-3xl font-serif text-emerald-950 font-semibold tracking-tight">About Us</h2>
          <span className="text-xs tracking-widest font-sans uppercase text-emerald-800 font-bold mt-1 sm:mt-0">
            Chambers of Alysha Kasih &amp; Partners
          </span>
        </div>
        
        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Narrative */}
          <div className={`lg:col-span-7 space-y-5 font-sans text-sm sm:text-base leading-relaxed text-zinc-600 font-light transition-all duration-1000 delay-200 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-zinc-950 font-medium font-serif text-base sm:text-xl leading-relaxed">
              At Chambers of Alysha Kasih &amp; Partners, we understand that when you seek a lawyer, you are not only seeking legal advice, but also seeking a place where human care and understanding exist—where love is expressed in its quietest form, from lawyer to client, and from one human being to another.
            </p>
            <p>
              Our firm is built on the belief that every person deserves access to clear, high-quality legal assistance delivered with compassion, sincerity, and respect. We are guided by the principle that law is not only about rules and outcomes, but also about people, their struggles, and the dignity they deserve throughout the process.
            </p>
            <p>
              We commit ourselves to explaining your options with clarity, keeping you informed at every stage, and standing firmly in the protection of your rights. Whether you are facing a complex dispute or navigating a business matter, we strive to be a steady presence that combines legal strength with genuine human care.
            </p>
          </div>

          {/* Right Column: Safeguards Card */}
          <div className={`lg:col-span-5 space-y-6 bg-white border border-zinc-200/60 p-6 sm:p-8 rounded-xl text-xs sm:text-sm leading-relaxed font-light text-zinc-600 shadow-sm transition-all duration-1000 delay-400 ease-out ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-98'
          }`}>
            
            <div className="space-y-1.5">
              <h4 className="font-bold uppercase text-xs tracking-wider text-emerald-900 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span> Legal Privilege
              </h4>
              <p className="pl-3.5 text-zinc-600">
                Everything shared with us is held in confidence, protected by legal professional privilege, and never disclosed without proper legal basis or your authority.
              </p>
            </div>

            <div className="space-y-1.5 border-t border-zinc-100 pt-4">
              <h4 className="font-bold uppercase text-xs tracking-wider text-emerald-900 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span> PDPA Compliance
              </h4>
              <p className="pl-3.5 text-zinc-600">
                Your personal information is strictly safeguarded in absolute compliance with the Personal Data Protection Act 2010 to protect your privacy at every stage.
              </p>
            </div>
          </div>
        </div>

        {/* Tan Sri Statement Block */}
        <div className={`bg-emerald-950 text-white rounded-xl p-8 sm:p-12 text-center w-full space-y-5 shadow-lg relative overflow-hidden transition-all duration-1000 delay-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <p className="text-emerald-50 font-serif text-base sm:text-xl lg:text-2xl italic leading-relaxed font-light px-2 sm:px-8 relative z-10">
            “Founded on the belief that every client matters, Chambers of Alysha Kasih &amp; Partners is devoted to the pursuit of justice with excellence, guided by a quiet form of love. One that flows from lawyer to client and from one human being to another in service of fairness and care.”
          </p>
          <div className="flex items-center justify-center gap-4 pt-2 relative z-10">
            <span className="w-6 h-[1px] bg-emerald-700"></span>
            <p className="text-xs font-sans tracking-[0.25em] uppercase text-emerald-400 font-semibold">
              Tan Sri Kasih Nur Alisa binti Abdullah
            </p>
            <span className="w-6 h-[1px] bg-emerald-700"></span>
          </div>
        </div>

        {/* Global Footer Note */}
        <div className={`pt-4 text-center transition-opacity duration-1000 delay-700 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <p className="text-emerald-900 font-serif italic text-sm font-medium tracking-wide">
            At Chambers of Alysha Kasih &amp; Partners, we do not merely see “cases”—we see people, each carrying their own story, hopes, and burdens.
          </p>
        </div>

      </div>
    </section>
  );
}