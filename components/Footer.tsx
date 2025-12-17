import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

// Custom Pinterest Icon
const Pinterest = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M8 20l4-9"></path>
    <path d="M12 9h.5a2.5 2.5 0 1 1 0 5H12"></path>
  </svg>
);

export const Footer: React.FC = () => {
  const socialLinks = [
    { Icon: Facebook, href: "https://www.facebook.com/people/Techxide/61573654862382/" },
    { Icon: Instagram, href: "https://www.instagram.com/techxide/" },
    { Icon: Twitter, href: "https://twitter.com/techxide" },
    { Icon: Linkedin, href: "https://www.linkedin.com/company/techxide/" },
    { Icon: Pinterest, href: "https://www.pinterest.com/techxide" },
  ];

  return (
    <footer className="relative bg-black/80 backdrop-blur-xl border-t border-slate-900 pt-16 pb-8 overflow-hidden">
      {/* Neon Top Border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <img 
               src="https://www.techxide.com/assets/img/logo.svg" 
               alt="Techxide" 
               className="h-10 w-auto object-contain mb-2"
            />
            <p className="text-slate-400 leading-relaxed font-medium">
              Premium digital agency crafting high-end experiences for forward-thinking brands.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, href }, idx) => (
                <a 
                  key={idx} 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-400 hover:text-cyan-400 transition-colors transform hover:scale-110"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Services</h3>
            <ul className="space-y-3 text-slate-400 font-medium">
              <li><Link to="/logo-design" className="hover:text-cyan-400 transition-colors hover:pl-2 duration-300">Logo Design</Link></li>
              <li><Link to="/web-design" className="hover:text-cyan-400 transition-colors hover:pl-2 duration-300">Website Design</Link></li>
              <li><Link to="/video-animation" className="hover:text-cyan-400 transition-colors hover:pl-2 duration-300">Video Animation</Link></li>
              <li><Link to="/digital-marketing" className="hover:text-cyan-400 transition-colors hover:pl-2 duration-300">Digital Marketing</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-purple-500 shrink-0 mt-1" />
                <span>Suite 404, 1129 Northern Blvd, Manhasset, NY 11030</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-purple-500 shrink-0" />
                <div className="flex flex-col">
                  <span className="hover:text-white cursor-pointer">+1 516 734 9986</span>
                  <span className="hover:text-white cursor-pointer">+1 646 402 5671</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-purple-500 shrink-0" />
                <span className="hover:text-white cursor-pointer">hello@techxide.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Newsletter</h3>
            <p className="text-slate-400 mb-4 font-medium">Subscribe to get the latest design trends.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Enter email" 
                className="bg-slate-900/50 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-600"
              />
              <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold py-3 px-4 rounded-lg transition-all shadow-lg shadow-purple-900/20">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 text-center text-slate-500 text-sm font-medium">
          &copy; {new Date().getFullYear()} Techxide. All rights reserved.
        </div>
      </div>
    </footer>
  );
};