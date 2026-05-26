import React, { useEffect, useRef, useState } from 'react';
import alysha from '../assets/alisha.png';

const teamMembers = [
  { name: "Tan Sri Kasih Nur Alisa binti Abdullah", role: "Founder - Consultant", cat: "Consultant", email: "kasih.alyshakasih@gmail.com", isFounder: true },
  { name: "Alysha Yasmin binti Zulkifli", role: "Managing Partner", cat: "Partners", email: "alysha.alyshakasih@gmail.com" },
  { name: "Sumayyah binti Suhaimi", role: "Partner", cat: "Partners", email: "sumayyah.alyshakasih@gmail.com" },
  { name: "Nurina Izzati binti Yusri", role: "Partner", cat: "Partners", email: "nurina.alyshakasih@gmail.com" },
  { name: "Melissa a/p Arumugam", role: "Legal Assistant", cat: "Legal Assistant", email: "melissa.alyshakasih@gmail.com" },
  { name: "Alice Yap Tan", role: "Accounts Executive", cat: "Accounts Executive", email: "alice.alyshakasih@gmail.com" },
  { name: "Wardah Erina binti Malik", role: "Paralegal", cat: "Paralegal", email: "wardah.alyshakasih@gmail.com" },
  { name: "Muhammad Medina bin Kassim", role: "Chambering Student", cat: "Chambering Student", email: "medina.alyshakasih@gmail.com" },
];

export default function Team() {
  const [visible, setVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white py-24 w-full relative overflow-hidden" ref={containerRef}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#064e3b_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className={`text-center mb-20 space-y-4 transition-all duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <span className="text-xs font-bold tracking-[0.35em] uppercase text-emerald-800">Leadership Profile</span>
          <h2 className="text-3xl sm:text-4xl font-serif text-zinc-950">Our Key Counsel</h2>
          <div className="w-16 h-[2px] bg-emerald-800 mx-auto mt-4 rounded-full"></div>
          <p className="text-zinc-600 text-sm max-w-sm mx-auto font-light">Enlisting industry experts dedicated to delivering exceptional standards.</p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, i) => (
            <div 
              key={i}
              className={`bg-white border border-zinc-100 p-8 rounded-2xl text-center shadow-sm hover:shadow-xl hover:border-emerald-800/20 hover:-translate-y-2 transition-all duration-500 group
              ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-800 to-emerald-600" />
              
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 border border-emerald-800/20 rounded-full scale-110 group-hover:scale-115 transition-all" />
                  
                  {/* Image Container */}
                  <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white shadow-md relative z-10 bg-zinc-100 flex items-center justify-center">
                    {member.isFounder ? (
                      <img 
                        src={alysha} 
                        alt={member.name} 
                        className="w-full h-full object-cover transform translate-y-2 scale-125 transition-transform duration-500" 
                      />
                    ) : (
                      <svg className="w-12 h-12 text-emerald-800/30" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <span className="text-[9px] font-bold tracking-[0.2em] text-emerald-800 uppercase">{member.cat}</span>
                <h3 className="text-lg font-serif text-zinc-900 leading-tight">{member.name}</h3>
                <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-wider">{member.role}</p>
                <div className="w-8 h-[1px] bg-emerald-800/20 mx-auto" />
                <a href={`mailto:${member.email}`} className="text-[10px] font-mono text-zinc-400 hover:text-emerald-800 transition-colors block">
                  {member.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}