import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Layout, PenTool, Video, Award, Zap, Users, ThumbsUp, Layers, Rocket, Target, Palette, TrendingUp, Globe, Smartphone, Quote, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NeonFrame } from '../components/NeonFrame';
import { CyberHeroFrame } from '../components/CyberHeroFrame';

// --- Helper Components ---

interface ServiceOptionProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

const ServiceOption: React.FC<ServiceOptionProps> = ({ label, isSelected, onClick }) => (
  <div 
    onClick={onClick}
    className="group cursor-pointer w-full max-w-3xl mx-auto mb-4 relative"
  >
    <div className={`
      p-[2px] rounded-lg bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500
      transition-all duration-300
      ${isSelected ? 'shadow-[0_0_20px_rgba(6,182,212,0.4)] scale-[1.01]' : 'shadow-none hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]'}
    `}>
      <div className="flex items-center bg-black/80 backdrop-blur-md rounded-[6px] px-6 py-4 relative h-full w-full">
        <div className={`
          w-5 h-5 mr-6 flex items-center justify-center shrink-0 border
          transition-all duration-300 rounded-sm
          ${isSelected 
            ? 'border-cyan-400 bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,1)]' 
            : 'border-slate-700 bg-transparent group-hover:border-cyan-400/50'}
        `}>
          {isSelected && <div className="w-full h-full bg-cyan-400 shadow-[0_0_15px_rgba(6,182,212,1)]" />}
        </div>
        
        <span className={`
          flex-grow text-center font-bold tracking-wide text-lg md:text-xl uppercase
          ${isSelected ? 'text-white text-shadow-neon' : 'text-slate-400 group-hover:text-slate-200'}
          transition-colors duration-300
        `}>
          {label}
        </span>
      </div>
    </div>
  </div>
);

export const Home: React.FC = () => {
  const [selectedService, setSelectedService] = useState('Logo Design Services');
  const [activePortfolioCategory, setActivePortfolioCategory] = useState('All');

  const services = [
    'Logo Design Services',
    'Web Development or Design Services',
    'Animated Video Services',
    'Digital Content Writing Services'
  ];

  const workflowSteps = [
    { number: "01", title: "Kickstart", desc: "We analyze your brand, goals, and target audience to build a solid foundation.", icon: Rocket },
    { number: "02", title: "Blueprint", desc: "Our strategists create a roadmap and wireframes tailored to your success.", icon: Layers },
    { number: "03", title: "Crafting", desc: "Designers and developers bring the vision to life with pixel-perfect precision.", icon: Palette },
    { number: "04", title: "Launch", desc: "We test, optimize, and launch your project to the world with a bang.", icon: Target }
  ];

  // Professional SVG Logos for Brands
  const brands = [
    { 
      name: "Stratos", 
      path: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M12 2L2 19h20L12 2zm0 3l6 14H6l6-14z" /><path d="M12 22c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" /></svg>
      )
    },
    {
      name: "Hyperion", 
      path: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /><path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" /></svg>
      )
    },
    {
      name: "Cortex", 
      path: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M21 16.5C21 16.88 20.79 17.21 20.47 17.38L12.57 21.82C12.41 21.94 12.21 22 12 22C11.79 22 11.59 21.94 11.43 21.82L3.53 17.38C3.21 17.21 3 16.88 3 16.5V7.5C3 7.12 3.21 6.79 3.53 6.62L11.43 2.18C11.59 2.06 11.79 2 12 2C12.21 2 12.41 2.06 12.57 2.18L20.47 6.62C20.79 6.79 21 7.12 21 7.5V16.5Z" /></svg>
      )
    },
    {
      name: "Natura", 
      path: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M12 2C7.5 2 4 6.5 4 11C4 16 8 22 12 22C16 22 20 16 20 11C20 6.5 16.5 2 12 2ZM12 20C9.5 20 7 15.5 7 11C7 8.5 9.5 5 12 5C14.5 5 17 8.5 17 11C17 15.5 14.5 20 12 20Z" /></svg>
      )
    },
    {
      name: "Velox", 
      path: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M4 12L14 2L12 12L22 22L12 22L4 12Z" /></svg>
      )
    }
  ];

  // Collaborations Data - Replaced images with gradients
  const collaborations = [
    {
      name: "Apex Finance",
      industry: "Fintech",
      stat: "250% Growth",
      description: "Complete UI/UX overhaul for a leading crypto exchange app.",
      gradient: "from-green-900 to-black",
      icon: TrendingUp,
      color: "text-green-400"
    },
    {
      name: "EcoStream",
      industry: "SaaS",
      stat: "1M+ Users",
      description: "Scalable platform design for a global sustainability tool.",
      gradient: "from-cyan-900 to-black",
      icon: Globe,
      color: "text-cyan-400"
    },
    {
      name: "Cryptic Mobile",
      industry: "Tech",
      stat: "#1 App Store",
      description: "High-end 3D animation and video campaign for launch.",
      gradient: "from-purple-900 to-black",
      icon: Smartphone,
      color: "text-purple-400"
    }
  ];

  // Portfolio Items
  const portfolioItems = [
    // Web Design Real Examples
    { id: 'w1', title: "Corporate Platform", category: "Web Design", img: "assets/WebDesigns/img 01.png" },
    { id: 'w2', title: "E-Commerce Hub", category: "Web Design", img: "assets/WebDesigns/img 02.png" },
    { id: 'w3', title: "SaaS Dashboard", category: "Web Design", img: "assets/WebDesigns/img 03.png" },
    
    // Video Examples (Using Placeholders for Demo Cleanliness)
    { id: 'v1', title: "App Explainer", category: "Video Animation", isVideo: true },
    { id: 'v2', title: "Product Reveal", category: "Video Animation", isVideo: true },

    // Logo Items (Using first 4 for preview)
    ...Array.from({ length: 4 }).map((_, i) => ({
      id: `l${i + 1}`,
      title: `Brand Identity ${i + 1}`,
      category: "Logo Design",
      img: `assets/logo images/Logo 1 (${i + 1}).jpg`
    }))
  ];

  const filteredPortfolio = activePortfolioCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activePortfolioCategory);

  const pricingPreview = [
    { name: "Basic", price: 49, features: ["2 Concepts", "Quick Turnaround", "JPG/PNG"] },
    { name: "Standard", price: 99, features: ["4 Concepts", "Source Files", "Social Kit"], recommended: true },
    { name: "Premium", price: 149, features: ["Unlimited", "Full Branding", "Support"] }
  ];

  // Testimonials Data
  const testimonials = [
    {
      quote: "Techxide transformed our digital presence completely. Their attention to detail in the logo design was unmatched.",
      name: "Sarah Jenkins",
      role: "CEO, Stratos",
      initials: "SJ"
    },
    {
      quote: "The web development team is top-notch. They delivered a high-performance e-commerce site ahead of schedule.",
      name: "Michael Chen",
      role: "Founder, Hyperion",
      initials: "MC"
    },
    {
      quote: "Incredible video animation work! It explained our complex product in under 60 seconds perfectly.",
      name: "Jessica Alba",
      role: "Marketing Director, Cortex",
      initials: "JA"
    }
  ];

  return (
    <div className="animate-fade-in overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto w-full relative z-10">
          <CyberHeroFrame>
            <div className="text-center mb-10">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 tracking-tight drop-shadow-2xl">
                Just Tell Us What You Need & Get<br/>
                The Best Price Instantly!
              </h1>
              <h2 className="text-3xl font-bold text-white mb-6 tracking-wide">
                I Am Seeking:
              </h2>
            </div>
            <div className="flex flex-col items-center w-full px-4">
              {services.map((service) => (
                <ServiceOption 
                  key={service} 
                  label={service} 
                  isSelected={selectedService === service}
                  onClick={() => setSelectedService(service)}
                />
              ))}
            </div>
          </CyberHeroFrame>
        </div>
      </section>

      {/* --- BRANDS SLIDER (MARQUEE) --- */}
      <section className="py-10 border-y border-white/5 bg-black/90 backdrop-blur-md relative overflow-hidden group">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10"></div>
        
        <div className="flex overflow-hidden w-full py-2">
          <div className="flex animate-marquee shrink-0 whitespace-nowrap gap-24 px-10 items-center">
            {[...brands, ...brands, ...brands].map((brand, i) => (
              <div key={i} className="flex items-center gap-4 cursor-pointer hover:scale-110 transition-transform duration-300">
                <div className="w-10 h-10 text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                  {brand.path}
                </div>
                <span className="text-xl font-black font-poppins text-white tracking-widest drop-shadow-md">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-4">
           <p className="text-xs font-bold text-slate-500 tracking-[0.4em] uppercase opacity-70">Trusted By Industry Leaders</p>
        </div>
      </section>

      {/* --- FEATURED COLLABORATIONS (COMPACT CARDS) --- */}
      <section className="py-16 px-4 bg-slate-950/30 relative">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h4 className="text-purple-500 font-bold tracking-widest uppercase mb-2">Case Studies</h4>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Featured Collaborations</h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                   Real results for real brands. See how we help companies transform their digital presence and achieve massive growth.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {collaborations.map((collab, i) => (
                    <NeonFrame key={i} className="rounded-2xl bg-slate-900/60 flex flex-col h-full" delay={i * 0.2} radius={16} variant="glass">
                        {/* Compact Gradient Header */}
                        <div className={`relative aspect-[16/8] overflow-hidden rounded-t-2xl border-b border-white/5 bg-gradient-to-br ${collab.gradient} flex items-center justify-center`}>
                            <collab.icon className="w-14 h-14 text-white/10" />
                            <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                                <span className={`text-xs font-bold ${collab.color}`}>{collab.industry}</span>
                            </div>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-1.5 bg-slate-800 rounded-lg">
                                    <collab.icon className={`w-5 h-5 ${collab.color}`} />
                                </div>
                                <h3 className="text-xl font-bold text-white">{collab.name}</h3>
                            </div>
                            <div className="mb-4">
                                <div className="text-2xl font-black text-white">{collab.stat}</div>
                                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wide">Key Result</div>
                            </div>
                            <p className="text-slate-400 mb-5 flex-grow text-sm leading-relaxed">
                                {collab.description}
                            </p>
                            <Link to="/portfolio" className="inline-flex items-center text-white text-sm font-bold hover:text-cyan-400 transition-colors gap-2 group">
                                View Case Study <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </NeonFrame>
                ))}
            </div>
        </div>
      </section>

      {/* --- SERVICES INTRO --- */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                    <h4 className="text-cyan-500 font-bold tracking-widest uppercase mb-4">Our Expertise</h4>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                        We Can't Wait To <br/>See You <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Stunned!</span>
                    </h2>
                    <p className="text-lg text-slate-400 leading-relaxed mb-6">
                        We don't just build websites; we craft digital legacies. Techxide is where innovation meets execution. From sleek logos to high-performance web platforms, we do it all.
                    </p>
                    <Link to="/web-design" className="inline-flex items-center gap-2 text-white font-bold border-b-2 border-cyan-500 hover:text-cyan-400 transition-colors">
                      Explore Services <ArrowRight size={18} />
                    </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                        { title: "Logo & Branding", icon: Award, color: "text-blue-400" },
                        { title: "Web Development", icon: Layout, color: "text-green-400" },
                        { title: "Video Animation", icon: Video, color: "text-purple-400" },
                        { title: "Digital Content", icon: PenTool, color: "text-pink-400" }
                    ].map((s, i) => (
                        <NeonFrame key={i} className="rounded-3xl bg-slate-900/40" delay={i * 0.5} variant="glass" radius={24}>
                            <div className="p-6 flex flex-col items-center text-center h-full hover:bg-white/5 transition-colors">
                                <div className={`p-4 rounded-2xl mb-4 bg-slate-800 ${s.color}`}>
                                    <s.icon size={28} />
                                </div>
                                <h3 className="font-bold text-base text-white">{s.title}</h3>
                            </div>
                        </NeonFrame>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* --- WORKFLOW SECTION --- */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Our Workflow</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">From concept to final pixel, our process is streamlined for excellence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((step, i) => (
              <NeonFrame key={i} className="rounded-2xl bg-black/40" delay={i * 0.2} radius={16} variant="glass">
                <div className="p-6 flex flex-col items-center text-center h-full relative group">
                  <div className="absolute -top-6 bg-slate-900 border border-slate-700 w-12 h-12 rounded-full flex items-center justify-center text-cyan-400 font-bold z-10 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                    {step.number}
                  </div>
                  <div className="mt-6 mb-4 p-3 rounded-full bg-slate-800/50 text-white group-hover:scale-110 transition-transform duration-300">
                    <step.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-xs">{step.desc}</p>
                </div>
              </NeonFrame>
            ))}
          </div>
        </div>
      </section>

      {/* --- PORTFOLIO PREVIEW (GRID SECTION) --- */}
      <section className="py-16 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-10 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Selected Works</h2>
              <p className="text-slate-400 max-w-xl">
                A showcase of our finest work. Filter by category to see how we bring brands to life across different mediums.
              </p>
            </div>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
               {['All', 'Logo Design', 'Web Design', 'Video Animation'].map((cat) => (
                 <button
                   key={cat}
                   onClick={() => setActivePortfolioCategory(cat)}
                   className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all border backdrop-blur-sm ${
                     activePortfolioCategory === cat
                       ? 'bg-cyan-500 text-black border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.6)] scale-105'
                       : 'bg-slate-900/50 text-slate-400 border-slate-700 hover:border-cyan-500 hover:text-white hover:bg-slate-800'
                   }`}
                 >
                   {cat}
                 </button>
               ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredPortfolio.slice(0, 9).map((item: any, i) => (
               <NeonFrame key={item.id} className="rounded-2xl bg-slate-900/60" delay={i * 0.1} radius={16} variant="glass">
                 <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer bg-black">
                   {item.isVideo ? (
                     <div className="w-full h-full bg-slate-800 flex items-center justify-center relative">
                        <Video size={48} className="text-white/20" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Play fill="white" className="text-white ml-1" />
                            </div>
                        </div>
                     </div>
                   ) : (
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" />
                   )}
                   
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 pointer-events-none">
                     <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="inline-block px-2 py-0.5 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-400 text-[9px] font-bold uppercase tracking-widest mb-2 backdrop-blur-md">
                            {item.category}
                        </span>
                        <h3 className="text-white text-xl font-bold drop-shadow-lg">{item.title}</h3>
                     </div>
                   </div>
                 </div>
               </NeonFrame>
            ))}
          </div>

          <div className="text-center">
             <Link to="/portfolio" className="group inline-flex items-center gap-3 px-8 py-3 bg-slate-900 border border-slate-700 rounded-full text-white font-bold hover:border-cyan-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all hover:-translate-y-1">
              <span>View All Projects</span> 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform text-cyan-400" />
            </Link>
          </div>
        </div>
      </section>

      {/* --- PRICING PREVIEW --- */}
      <section className="py-16 bg-slate-950/30">
        <div className="max-w-7xl mx-auto px-4">
           <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Unbeatable Value</h2>
            <p className="text-slate-400">Premium services at prices that make sense.</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {pricingPreview.map((plan, i) => (
               <NeonFrame key={i} className={`rounded-3xl ${plan.recommended ? 'bg-slate-900/80 shadow-[0_0_30px_rgba(139,92,246,0.2)]' : 'bg-slate-900/40'}`} delay={i * 0.2} radius={24} variant="glass">
                 <div className="p-6 flex flex-col h-full hover:bg-white/5 transition-colors">
                   {plan.recommended && <span className="absolute top-0 right-0 m-6 px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold rounded-full">Popular</span>}
                   <h3 className="text-lg font-bold text-white mb-2">{plan.name}</h3>
                   <div className="text-3xl font-black text-white mb-4">${plan.price}</div>
                   <ul className="space-y-2 mb-6 flex-grow">
                     {plan.features.map((f, idx) => (
                       <li key={idx} className="flex items-center text-slate-300 text-xs">
                         <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" /> {f}
                       </li>
                     ))}
                   </ul>
                   <Link to="/pricing" className={`w-full py-3 rounded-xl font-bold text-center text-sm transition-all ${plan.recommended ? 'bg-white text-black hover:bg-cyan-400' : 'bg-slate-800 text-white hover:bg-slate-700'}`}>
                     View Details
                   </Link>
                 </div>
               </NeonFrame>
             ))}
           </div>
        </div>
      </section>

      {/* --- TESTIMONIALS SECTION --- */}
      <section className="py-16 px-4 bg-slate-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">What Our Clients Say</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Don't just take our word for it. Here is what industry leaders have to say about our work.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <NeonFrame key={i} className="rounded-2xl bg-black/40" delay={i * 0.2} radius={16} variant="glass">
                <div className="p-6 flex flex-col h-full relative">
                  <div className="absolute top-4 right-6 text-cyan-500/20">
                    <Quote size={40} />
                  </div>
                  <p className="text-slate-300 mb-6 italic leading-relaxed relative z-10 text-sm">"{t.quote}"</p>
                  <div className="mt-auto flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full border-2 border-cyan-500/30 bg-cyan-900/30 flex items-center justify-center text-cyan-400 font-bold text-base">
                        {t.initials}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">{t.name}</h4>
                      <p className="text-cyan-400 text-[10px] uppercase tracking-wider">{t.role}</p>
                    </div>
                  </div>
                </div>
              </NeonFrame>
            ))}
          </div>
        </div>
      </section>

      {/* --- STRATEGY FORM (COMPACT) --- */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
            <NeonFrame className="relative rounded-[2.5rem] overflow-hidden bg-slate-900/60 text-white p-8 md:p-10 shadow-2xl" variant="glass" radius={40}>
                {/* Replaced external BG image with CSS pattern/gradient */}
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-purple-900/10 to-black pointer-events-none"></div>
                
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Connect With A Digital Strategist</h2>
                        <p className="text-base text-slate-300 mb-6">
                            Our Digital Strategists will help you in building your digital solutions right. Just fill in the details and our digital geek will get back to you.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-sm">
                                <CheckCircle className="text-primary-500 w-5 h-5" /> <span>Expert Consultation</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm">
                                <CheckCircle className="text-primary-500 w-5 h-5" /> <span>Custom Roadmap</span>
                            </li>
                        </ul>
                    </div>
                    <form className="bg-black/50 backdrop-blur-lg border border-white/10 p-6 rounded-3xl space-y-3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <input type="text" placeholder="My Name?" className="w-full bg-slate-800/50 border border-slate-600 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary-500 outline-none placeholder-slate-400 text-white" />
                            <input type="tel" placeholder="My Phone?" className="w-full bg-slate-800/50 border border-slate-600 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary-500 outline-none placeholder-slate-400 text-white" />
                        </div>
                        <input type="email" placeholder="My Email?" className="w-full bg-slate-800/50 border border-slate-600 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary-500 outline-none placeholder-slate-400 text-white" />
                        <button className="w-full bg-primary-600 hover:bg-primary-500 text-white font-bold py-3.5 rounded-xl transition-colors shadow-lg shadow-primary-600/30">
                            Let's Talk
                        </button>
                    </form>
                </div>
            </NeonFrame>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="py-16 bg-primary-900/5 border-y border-slate-800/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Know Your Digital Dream & Leave The Rest To Us</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8 mt-10">
                {[
                    { label: 'Satisfied Customers', val: '400+', icon: Users },
                    { label: 'Money Back', val: '100%', icon: ThumbsUp },
                    { label: 'Projects Completed', val: '250+', icon: CheckCircle },
                    { label: 'Increase In ROI', val: '170%', icon: Zap }
                ].map((stat, i) => (
                    <NeonFrame key={i} className="rounded-2xl bg-black/40 backdrop-blur-sm" radius={16} delay={i * 0.1} variant="glass">
                        <div className="flex flex-col items-center p-5">
                            <div className="bg-white/5 p-2 rounded-xl mb-2 backdrop-blur-sm">
                                <stat.icon className="w-5 h-5 text-cyan-400" />
                            </div>
                            <div className="text-3xl md:text-4xl font-extrabold text-white mb-1">{stat.val}</div>
                            <div className="text-slate-400 font-medium text-xs">{stat.label}</div>
                        </div>
                    </NeonFrame>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};