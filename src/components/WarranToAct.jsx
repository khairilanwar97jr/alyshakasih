import React, { useEffect, useRef, useState } from 'react';

export default function WarrantToAct() {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="bg-zinc-50 border-b border-zinc-200 w-full overflow-hidden relative py-20 lg:py-28"
    >
      {/* Structural subtle legal grid overlay lines */}
      <div className="absolute inset-0 opacity-[0.01] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Document Frame */}
        <div 
          className={`bg-white border border-zinc-200 p-6 sm:p-12 md:p-16 rounded-none shadow-xl transition-all duration-1000 ease-out transform-gpu
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          {/* Header Authorization Banner */}
          <div className="text-center mb-10 space-y-2 border-b border-zinc-100 pb-8">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-800 block">
              Formal Authorization Instrument
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-zinc-950 tracking-wider font-normal uppercase">
              Warrant to Act
            </h2>
            <div className="w-16 h-[2px] bg-emerald-800 mx-auto mt-3"></div>
          </div>

          {/* Legal Document Content */}
          <div className="font-serif text-zinc-800 text-sm sm:text-base leading-relaxed space-y-8 text-justify">
            
            <p>
              I/We, <span className="font-sans font-medium text-zinc-950 inline-block border-b border-zinc-300 min-w-[140px] sm:min-w-[220px] px-2 text-center text-xs">(Name / Company Name)</span>, 
              bearing <span className="font-sans font-medium text-zinc-950 inline-block border-b border-zinc-300 min-w-[120px] sm:min-w-[180px] px-2 text-center text-xs">(NRIC No. / Company No.)</span> hereby 
              authorize and appoint <strong className="font-normal text-emerald-900 font-sans tracking-wide">Chambers of Alysha Kasih &amp; Partners</strong> to act for me as my solicitors 
              and to deal with the same in any matter that <span className="italic">Chambers of Alysha Kasih &amp; Partners</span> shall think fit and proper at their absolute discretion.
            </p>

            <p className="bg-emerald-50/40 border-l-2 border-emerald-800 p-4 font-sans text-xs sm:text-sm text-zinc-600 leading-relaxed rounded-r-xs">
              I hereby agree that by signing this Warrant to Act, I have consented to Chambers of Alysha Kasih &amp; Partners 
              collecting my personal information and Chambers of Alysha Kasih &amp; Partners is entitled to hold, use or discord 
              the information to selected third parties for any purpose which reasonably arises out of and/or in connection with 
              the purposes of the suit as stated therein.
            </p>

            <p className="pt-4 font-sans text-xs text-zinc-500 italic">
              Signed on the day of ……………….. 202…
            </p>

          </div>

          {/* Signature / Corporate Attestation Grid */}
          <div className="mt-16 pt-10 border-t border-zinc-100 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            
            {/* Signature Area */}
            <div className="space-y-6 pt-10">
              <div className="border-b border-dashed border-zinc-400 w-full max-w-[240px] h-[40px]"></div>
              <div className="space-y-1">
                <p className="text-xs font-bold uppercase tracking-wider text-zinc-900">Authorized Signature</p>
                <div className="text-xs text-zinc-500 flex items-center gap-1.5">
                  <span>Name:</span>
                  <span className="w-full border-b border-zinc-200 inline-block min-h-[16px]"></span>
                </div>
              </div>
            </div>

            {/* Corporate Seal Area */}
            <div className="flex flex-col justify-end items-start md:items-end">
              <div className="border-2 border-dashed border-zinc-300 w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center text-center p-4 rounded-none bg-zinc-50 select-none">
                <span className="text-[10px] font-mono tracking-wider text-zinc-400 uppercase">
                  Company Seal Here
                </span>
              </div>
            </div>

          </div>

        </div>
        
      </div>
    </section>
  );
}