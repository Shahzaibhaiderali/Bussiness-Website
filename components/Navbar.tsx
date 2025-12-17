import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'HOME', path: '/' },
  { label: 'LOGO DESIGNS', path: '/logo-design' },
  { label: 'WEBSITE DESIGN', path: '/web-design' },
  { label: 'COPYWRITING', path: '/copywriting' },
  { label: 'VIDEO ANIMATION', path: '/video-animation' },
  { label: 'DIGITAL MARKETING', path: '/digital-marketing' },
  { label: 'PORTFOLIO', path: '/portfolio' },
  { label: 'PRICING', path: '/pricing' },
  { label: 'CONTACT', path: '/contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 font-poppins">
      {/* 
        Container for the "Floating Frame" look.
        Background is pure black with partial transparency and blur.
        Bottom border is an animated neon gradient.
      */}
      <div className="relative bg-black/90 backdrop-blur-md shadow-2xl">
        
        {/* Animated Neon Gradient Border at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-gradient-x shadow-[0_0_15px_rgba(139,92,246,0.5)]"></div>

        <div className="max-w-[1920px] mx-auto px-2 sm:px-3 md:px-4">
          <div className="flex justify-between items-center h-14 sm:h-16 md:h-18 animate-fade-in">
            
            {/* --- Logo (Left) --- */}
            <Link to="/" className="flex items-center gap-2 sm:gap-3 group shrink-0">
              <img 
                src="https://www.techxide.com/assets/img/logo.svg" 
                alt="Techxide" 
                className="h-5 sm:h-6 md:h-7 lg:h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]"
              />
            </Link>

            {/* --- Desktop Menu (Center) --- */}
            <div className="hidden lg:flex items-center justify-center flex-1 mx-1 md:mx-2">
              <div className="flex items-center space-x-0 md:space-x-0 lg:space-x-0.5">
                {navItems.map((item) => {
                   const isActive = location.pathname === item.path;
                   return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`
                        relative group px-1 md:px-1.5 lg:px-2 py-1 text-[0.6rem] xs:text-[0.65rem] sm:text-[0.7rem] font-bold tracking-wide transition-all duration-300
                        ${isActive ? 'text-white text-shadow-neon' : 'text-white hover:text-shadow-neon'}
                      `}
                      style={{ opacity: 1 }} // Ensure 100% opacity as requested
                    >
                      <span className="relative z-10 whitespace-nowrap">{item.label}</span>
                      
                      {/* Animated Underline */}
                      <span className={`
                        absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400
                        transform origin-left transition-transform duration-300
                        shadow-[0_0_10px_rgba(6,182,212,0.8)]
                        ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                      `}></span>
                    </Link>
                   );
                })}
              </div>
            </div>

            {/* --- Right Side (Contact Button) --- */}
            <div className="hidden lg:flex items-center gap-4 shrink-0">
              <button 
                onClick={() => navigate('/contact')}
                className="
                  relative overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-bold 
                  flex items-center gap-1 sm:gap-1.5 animate-pulse-glow transition-transform hover:scale-105
                  border border-purple-400/30 shadow-[0_0_15px_rgba(139,92,246,0.3)]
                "
              >
                <MessageCircle size={14} className="fill-current hidden sm:block" />
                <MessageCircle size={16} className="fill-current sm:hidden" />
                <span className="tracking-wide text-[0.7rem] sm:text-xs">Contact Now</span>
              </button>
            </div>

            {/* --- Mobile Toggle --- */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-cyan-400 p-1.5 sm:p-2"
              >
                {isOpen ? <X size={24} className="sm:size-28" /> : <Menu size={24} className="sm:size-28" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- Mobile Menu Dropdown --- */}
      <div
        className={`
          lg:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-slate-800 
          transition-all duration-300 overflow-hidden shadow-2xl
          ${isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="px-3 sm:px-4 py-3 sm:py-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="block text-xs sm:text-sm font-bold text-white hover:text-cyan-400 hover:bg-white/5 px-2 sm:px-3 py-2 sm:py-3 rounded-lg transition-all border-b border-white/5 last:border-0"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-3 sm:pt-4 mt-1 sm:mt-2">
             <button 
               onClick={() => {
                 setIsOpen(false);
                 navigate('/contact');
               }}
               className="w-full bg-[#8b5cf6] text-white py-2.5 sm:py-3 rounded-lg font-bold shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] transition-all flex items-center justify-center gap-1.5 text-xs sm:text-sm"
             >
               <MessageCircle size={16} className="sm:size-18" /> Contact Now
             </button>
          </div>
        </div>
      </div>
    </nav>
  );
};