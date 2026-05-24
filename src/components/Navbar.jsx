import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Standard lightweight SVG icons
const MenuIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>;
const CloseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>;

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Check if current location path is the root homepage
  const isHomePage = location.pathname === '/';

  // Handle scrolling to top smoothly if already on home page
  const handleLogoClick = (e) => {
    if (isHomePage) {
      e.preventDefault(); // Stop normal navigation behavior
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="bg-white border-b border-zinc-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* BRANDING / LOGO (Linked to home path with smart top scroll) */}
          <Link 
            to="/" 
            onClick={handleLogoClick}
            className="flex-shrink-0 flex flex-col justify-center focus:outline-none cursor-pointer"
          >
            <span className="text-xl font-bold tracking-widest text-emerald-900 uppercase">Alyshakasih</span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 font-medium -mt-1">Advocates &amp; Solicitors</span>
          </Link>

          {/* DESKTOP LINKS (All Sections Included) */}
          <div className="hidden md:flex space-x-7 items-center font-medium text-sm tracking-wide text-zinc-600">
            <a href={isHomePage ? "#achievements" : "/#achievements"} className="hover:text-emerald-800 transition-colors">Achievements</a>
            <a href={isHomePage ? "#expertise" : "/#expertise"} className="hover:text-emerald-800 transition-colors">Practice Areas</a>
            <a href={isHomePage ? "#team" : "/#team"} className="hover:text-emerald-800 transition-colors">Key Counsel</a>
            <a href={isHomePage ? "#warrant" : "/#warrant"} className="hover:text-emerald-800 transition-colors">Warrant to Act</a>
            <Link to="/contact" className="bg-emerald-950 text-white px-5 py-2.5 rounded border border-emerald-900 hover:bg-emerald-900 transition-all shadow-sm">
               Secure Consultation
            </Link>
          </div>

          {/* MOBILE HAMBURGER BUTTON */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-emerald-950 p-2 focus:outline-none transition-transform duration-200 active:scale-95"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DROPDOWN PANEL (All Sections + Auto Close functionality) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-zinc-200 px-4 pt-2 pb-6 space-y-1.5 shadow-lg absolute left-0 right-0 top-20 z-50">
          <a 
            href={isHomePage ? "#achievements" : "/#achievements"} 
            onClick={() => setMobileMenuOpen(false)} 
            className="block py-3 px-2 text-zinc-700 font-medium border-b border-zinc-100 hover:bg-zinc-50 transition-colors rounded-lg"
          >
            Achievements
          </a>
          <a 
            href={isHomePage ? "#expertise" : "/#expertise"} 
            onClick={() => setMobileMenuOpen(false)} 
            className="block py-3 px-2 text-zinc-700 font-medium border-b border-zinc-100 hover:bg-zinc-50 transition-colors rounded-lg"
          >
            Practice Areas
          </a>
          <a 
            href={isHomePage ? "#team" : "/#team"} 
            onClick={() => setMobileMenuOpen(false)} 
            className="block py-3 px-2 text-zinc-700 font-medium border-b border-zinc-100 hover:bg-zinc-50 transition-colors rounded-lg"
          >
            Key Counsel
          </a>
          <a 
            href={isHomePage ? "#warrant" : "/#warrant"} 
            onClick={() => setMobileMenuOpen(false)} 
            className="block py-3 px-2 text-zinc-700 font-medium border-b border-zinc-100 hover:bg-zinc-50 transition-colors rounded-lg"
          >
            Warrant to Act
          </a>
          <div className="pt-4 px-2">
            <Link 
              to="/contact" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block text-center bg-emerald-950 text-white py-3 rounded-lg font-medium tracking-wide shadow-md active:bg-emerald-900"
            >
               Secure Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}