import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Achievement from '../components/Achievement';
import Expertise from '../components/Expertise'; // 1. Import your newly updated component
import Team from '../components/Team'; // 1. Import your newly updated component
import Warrant from '../components/WarranToAct'; // 1. Import your newly updated component
import AboutUs from '../components/AboutUs';
import { Link } from 'react-router-dom';
import banner from '../assets/homepage_banner.png';

// Standard lightweight SVG icons
const MenuIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>;
const CloseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>;

export default function Homepage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [animateHero, setAnimateHero] = useState(false);

  // Track which section is actively dropping down from a navbar click
  const [activeDropSection, setActiveDropSection] = useState(null);

  useEffect(() => {
    // Instantly fires up the hero transitions on layout mounting
    setAnimateHero(true);
  }, []);

  // Universal handler for navbar clicks to create the "go down and settle" motion
  const handleNavbarScroll = (sectionId) => {
    // 1. Instantly trigger the Achievement expansion just in case
    window.dispatchEvent(new Event('scroll'));
    
    // 2. Activate the temporary downward drift animation state
    setActiveDropSection(sectionId);

    // 3. Coordinate the smooth scroll target execution
    setTimeout(() => {
      const target = document.getElementById(sectionId);
      if (target) {
        const elementPosition = target.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - 100; // Comfortable navbar header offset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 120);

    // 4. Smoothly clear the drift state after the landing finishes so it settles nicely
    setTimeout(() => {
      setActiveDropSection(null);
    }, 1200); 
  };

  // Set up global listeners for your Navbar component to communicate with
  useEffect(() => {
    const handleExpertiseEvent = () => handleNavbarScroll('expertise');
    const handleTeamEvent = () => handleNavbarScroll('team');
    const handleWarrantEvent = () => handleNavbarScroll('warrant');

    window.addEventListener('scrollToExpertise', handleExpertiseEvent);
    window.addEventListener('scrollToTeam', handleTeamEvent);
    window.addEventListener('scrollToWarrant', handleWarrantEvent);

    return () => {
      window.removeEventListener('scrollToExpertise', handleExpertiseEvent);
      window.removeEventListener('scrollToTeam', handleTeamEvent);
      window.removeEventListener('scrollToWarrant', handleWarrantEvent);
    };
  }, []);

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 flex flex-col justify-between selection:bg-emerald-800 selection:text-white">

{/* HERO SECTION */}
<section className="relative bg-zinc-950 text-white min-h-[calc(100vh-80px)] flex items-center overflow-hidden">
  
  {/* BACKGROUND IMAGE LAYER */}
  <div className="absolute inset-0 z-0 overflow-hidden">
    <img 
      src={banner}
      alt="Modern architectural background" 
      className={`w-full h-full object-cover object-center transition-transform duration-[3000ms] ease-out opacity-60 ${
        animateHero ? 'scale-105' : 'scale-100'
      }`}
    />
    
    {/* Deep Emerald Tint Overlay (High visibility for the image, branding remains) */}
    <div className="absolute inset-0 bg-emerald-950/40"></div>
    
    {/* Dark Gradient to ensure text readability */}
    <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-950/40 to-transparent"></div>
  </div>

  {/* Content Layer */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 sm:py-20">
    <div className="max-w-3xl">

      {/* 1. BADGE */}
      <div className={`inline-flex items-center gap-2 px-3 py-1 bg-emerald-950/50 border border-emerald-500/30 rounded text-xs uppercase tracking-widest text-emerald-300 font-semibold mb-6 transition-all duration-700 ease-out ${
        animateHero ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
      }`}>
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Professional Legal Counsel
      </div>

      {/* 2. MAIN HEADLINE */}
      <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight font-normal leading-tight text-white mb-6 transition-all duration-1000 delay-150 ease-out ${
        animateHero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        Commanding trust. <br className="hidden sm:inline" />
        Delivering precise legal solutions.
      </h1>

      {/* 3. PARAGRAPH */}
      <p className={`text-zinc-100 text-base sm:text-lg lg:text-xl font-normal leading-relaxed mb-10 max-w-2xl transition-all duration-1000 delay-300 ease-out ${
        animateHero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}>
        At Alyshakasih, we defend your interests with uncompromised dedication. Providing sophisticated corporate, property, and dispute resolution counsel tailored to complex environments.
      </p>

      {/* 4. CALL TO ACTION */}
      <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 ease-out ${
        animateHero ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-98 translate-y-4'
      }`}>
        <Link to="/contact" className="w-full sm:w-auto text-center bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-8 py-4 rounded transition-all tracking-wide shadow-lg text-sm">
          Contact Our Counsel
        </Link>
        <a href="#expertise" className="w-full sm:w-auto text-center border border-emerald-500/50 text-white hover:bg-emerald-950/60 active:scale-98 font-medium px-8 py-4 rounded transition-all tracking-wide text-sm">
          Our Practice Areas
        </a>
      </div>

    </div>
  </div>
</section>


      <AboutUs /> {/* Sits clean and wide right here */}


      <div id="achievements" className="scroll-mt-20">
        <Achievement />
      </div>

{/* 1. PRACTICE AREAS (EXPERTISE) */}
      <div 
        id="expertise" 
        className="scroll-mt-28 transition-all duration-[800ms] ease-out will-change-transform"
        style={{
          transform: activeDropSection === 'expertise' ? 'translateY(40px)' : 'translateY(0px)',
          opacity: activeDropSection === 'expertise' ? 0.85 : 1
        }}
      >
        <Expertise />
      </div>

      {/* 2. LEADERSHIP COUNSEL (TEAM) */}
      <div 
        id="team" 
        className="scroll-mt-28 transition-all duration-[800ms] ease-out will-change-transform"
        style={{
          transform: activeDropSection === 'team' ? 'translateY(40px)' : 'translateY(0px)',
          opacity: activeDropSection === 'team' ? 0.85 : 1
        }}
      >
        <Team />
      </div>

      {/* 3. WARRANT TO ACT */}
      <div 
        id="warrant" 
        className="scroll-mt-28 transition-all duration-[800ms] ease-out will-change-transform"
        style={{
          transform: activeDropSection === 'warrant' ? 'translateY(40px)' : 'translateY(0px)',
          opacity: activeDropSection === 'warrant' ? 0.85 : 1
        }}
      >
        <Warrant />
      </div>


{/* FOOTER */}
      <footer className="bg-emerald-950 text-emerald-300/70 text-xs py-16 lg:py-24 border-t border-emerald-900/60 relative overflow-hidden">
        {/* Subtle ambient luxury grid texture */}
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">

          {/* Upper Directory Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-emerald-900/40">

            {/* Brand Column */}
            <div className="md:col-span-5 space-y-4">
              <p className="font-serif font-normal text-white tracking-[0.25em] uppercase text-base sm:text-lg">
                Alyshakasih
              </p>
              <p className="text-emerald-200/60 leading-relaxed font-sans font-light max-w-sm text-xs sm:text-[13px]">
                Chambers of Alysha Kasih &amp; Partners provides premier bespoke corporate counsel, strategic litigation support, and comprehensive risk mitigation strategies tailored for modern high-growth businesses and elite private clients.
              </p>

              {/* Social Media Button Matrix */}
              <div className="flex items-center gap-3 pt-2">
                {/* X / Twitter */}
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit X Profile"
                  className="w-9 h-9 flex items-center justify-center border border-emerald-800/60 text-emerald-300 bg-emerald-900/20 hover:bg-emerald-500 hover:text-emerald-950 hover:border-emerald-400 transition-all duration-300 rounded-lg transform hover:-translate-y-1 shadow-xs"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Instagram Profile"
                  className="w-9 h-9 flex items-center justify-center border border-emerald-800/60 text-emerald-300 bg-emerald-900/20 hover:bg-emerald-500 hover:text-emerald-950 hover:border-emerald-400 transition-all duration-300 rounded-lg transform hover:-translate-y-1 shadow-xs"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Facebook Profile"
                  className="w-9 h-9 flex items-center justify-center border border-emerald-800/60 text-emerald-300 bg-emerald-900/20 hover:bg-emerald-500 hover:text-emerald-950 hover:border-emerald-400 transition-all duration-300 rounded-lg transform hover:-translate-y-1 shadow-xs"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>

                {/* LinkedIn / Professional Network */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit LinkedIn Profile"
                  className="w-9 h-9 flex items-center justify-center border border-emerald-800/60 text-emerald-300 bg-emerald-900/20 hover:bg-emerald-500 hover:text-emerald-950 hover:border-emerald-400 transition-all duration-300 rounded-lg transform hover:-translate-y-1 shadow-xs"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>

            {/* Navigation Quick Links */}
            <div className="md:col-span-3 space-y-4">
              <p className="text-[10px] font-bold text-white tracking-[0.2em] uppercase font-sans">
                Firm Navigation
              </p>
              <ul className="space-y-2.5 font-sans">
                <li>
                  <a href="#about" className="hover:text-emerald-400 transition-colors block">Our Practice</a>
                </li>
                <li>
                  <a href="#expertise" className="hover:text-emerald-400 transition-colors block">Areas of Expertise</a>
                </li>
                <li>
                  <a href="#team" className="hover:text-emerald-400 transition-colors block">Leadership Counsel</a>
                </li>
                <li>
                  <a href="#warrant" className="hover:text-emerald-400 transition-colors block">Warrant to Act</a>
                </li>
              </ul>
            </div>

            {/* Clean Chambers Contact Column */}
            <div className="md:col-span-4 space-y-4 font-sans">
              <p className="text-[10px] font-bold text-white tracking-[0.2em] uppercase">
                Chambers Engagement
              </p>
              <ul className="space-y-3 font-light text-emerald-300/60 leading-relaxed">
                <li className="flex flex-col">
                  <span className="text-[10px] text-emerald-400 font-medium tracking-wider uppercase mb-0.5">Primary Office</span>
                  <span>Anja Residensi, Bangi, Selangor</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-[10px] text-emerald-400 font-medium tracking-wider uppercase mb-0.5">Direct Briefings</span>
                  <a href="mailto:counsel@alyshakasih.com" className="hover:text-emerald-400 transition-colors">counsel@alyshakasih.com</a>
                </li>
              </ul>
            </div>

          </div>

{/* Bottom Legal Sub-Footer */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-4 text-[11px] font-sans tracking-wide">
            <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
              <p>&copy; {new Date().getFullYear()} Alyshakasih. All rights reserved.</p>
              <span className="hidden sm:inline text-emerald-900/60">|</span>
              <p className="text-emerald-500/50 text-[10px] tracking-widest uppercase font-medium">
                Crafted by <span className="text-emerald-400 font-semibold hover:text-yellow-400 transition-colors cursor-default">BINAIDEA</span>
              </p>
            </div>

            <div className="flex gap-6">
              <a href="#privacy" className="text-emerald-300/60 hover:text-white transition-colors duration-300 border-b border-transparent hover:border-white/20 pb-0.5">
                Privacy Policy
              </a>
              <a href="#terms" className="text-emerald-300/60 hover:text-white transition-colors duration-300 border-b border-transparent hover:border-white/20 pb-0.5">
                Terms of Service
              </a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}