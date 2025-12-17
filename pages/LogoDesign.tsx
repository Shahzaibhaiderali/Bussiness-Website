import React, { useState } from 'react';
import { Check, ArrowRight, Zap, Star, Shield, Clock, Users, DollarSign, PenTool, Layout, Video, Smartphone, Send, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NeonFrame } from '../components/NeonFrame';
import { CyberHeroFrame } from '../components/CyberHeroFrame';

export const LogoDesign: React.FC = () => {
  // Form State
  const [formStep, setFormStep] = useState(1);
  const [inquiry, setInquiry] = useState({
    planning: 'New Logo',
    logoType: [] as string[],
    style: 'Still Logo',
    budget: 'Under $500',
    name: '',
    email: '',
    phone: '',
    country: ''
  });

  const toggleLogoType = (type: string) => {
    setInquiry(prev => ({
      ...prev,
      logoType: prev.logoType.includes(type) 
        ? prev.logoType.filter(t => t !== type)
        : [...prev.logoType, type]
    }));
  };

  const logoTypes = ['Combination', 'Lettermark', 'Wordmark', 'Pictorial', 'Mascot', 'Emblem', 'Abstract', 'Luxury'];

  const pricingPackages = [
    {
      name: "Basic Logo",
      price: 49,
      features: [
        "2 Logo Design Concepts",
        "By 1 Experienced Designer",
        "4 Free Revisions",
        "Dedicated Project Manager",
        "24 - 48 Hours Delivery"
      ],
      deliverables: ["1 Finalized Logo", "100% Ownership"],
      notIncluded: ["No Print Ready .PDF", "No Vector .EPS", "No Editable .AI"]
    },
    {
      name: "Standard Logo",
      price: 99,
      features: [
        "4 Logo Design Concepts",
        "By 3 Experienced Designers",
        "8 Free Revisions",
        "Dedicated Project Manager",
        "24 - 48 Hours Delivery"
      ],
      deliverables: ["1 Finalized Logo", "100% Ownership", "Online .JPEG & .PNG", "Print Ready .PDF"],
      notIncluded: ["No Vector .EPS", "No Editable .AI"]
    },
    {
      name: "Prime Logo",
      price: 149,
      features: [
        "6 Logo Design Concepts",
        "By 5 Experienced Designers",
        "Unlimited Revisions",
        "Dedicated Project Manager",
        "24 - 48 Hours Delivery"
      ],
      deliverables: ["Finalized Logo", "100% Ownership", "Online .JPEG & .PNG", "Print Ready .PDF", "Vector .EPS"],
      notIncluded: ["No Editable Vector AI"]
    },
    {
      name: "Deluxe Logo",
      price: 199,
      features: [
        "Unlimited Logo Concepts",
        "By 8 Experienced Designers",
        "Unlimited Revisions",
        "Dedicated Project Manager",
        "24 - 48 Hours Delivery"
      ],
      deliverables: ["1 Finalized Logo", "100% Ownership", "All File Formats", "Vector .EPS", "Editable Vector .AI"],
      recommended: true
    }
  ];

  return (
    <div className="animate-fade-in pt-24 min-h-screen">
      
      {/* --- HERO SECTION WITH CONFIGURATOR --- */}
      <section className="relative min-h-screen flex items-center py-16 px-4">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-purple-900/20 blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-cyan-900/20 blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Left Text */}
          <div>
            <CyberHeroFrame>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                Get Beautiful <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Logos & Branding</span><br/>
                At Some Clicks!
              </h1>
            </CyberHeroFrame>
            <p className="text-xl text-slate-300 mb-8 font-medium pl-6 border-l-4 border-purple-500">
              Your brand's identity is its voice. Let's make it loud, clear, and unforgettable.
            </p>
            <div className="flex gap-4 pl-6">
              <button onClick={() => document.getElementById('strategy-form')?.scrollIntoView({ behavior: 'smooth'})} className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-cyan-400 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                Get Started
              </button>
            </div>
          </div>

          {/* Right Configurator Form */}
          <NeonFrame className="rounded-3xl bg-black/60 backdrop-blur-xl" radius={24} variant="glass">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-black text-sm">1</span>
                Start Your Project
              </h3>

              <div className="space-y-6">
                {/* Fixed Service */}
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">I Am Seeking</label>
                  <div className="w-full bg-slate-900/80 border border-cyan-500/50 text-cyan-400 font-bold px-4 py-3 rounded-xl">
                    Logo Design Services
                  </div>
                </div>

                {/* Planning To */}
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">I Am Planning To</label>
                  <div className="grid grid-cols-2 gap-3">
                    {['Redesign Logo', 'New Logo'].map(opt => (
                      <button
                        key={opt}
                        onClick={() => setInquiry({...inquiry, planning: opt})}
                        className={`py-3 px-4 rounded-xl text-sm font-bold border transition-all ${inquiry.planning === opt ? 'bg-purple-600 border-purple-400 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]' : 'bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-500'}`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Logo Types */}
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">Logo Type (Select Multiple)</label>
                  <div className="flex flex-wrap gap-2">
                    {logoTypes.map(type => (
                      <button
                        key={type}
                        onClick={() => toggleLogoType(type)}
                        className={`py-2 px-3 rounded-lg text-xs font-bold border transition-all ${inquiry.logoType.includes(type) ? 'bg-cyan-500/20 border-cyan-400 text-cyan-400' : 'bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-500'}`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Style & Budget Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">Style</label>
                    <select 
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-500 appearance-none"
                      onChange={(e) => setInquiry({...inquiry, style: e.target.value})}
                    >
                      <option>Still Logo</option>
                      <option>Animated Logo</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">Budget</label>
                    <select 
                       className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-500 appearance-none"
                       onChange={(e) => setInquiry({...inquiry, budget: e.target.value})}
                    >
                      <option>Under $500</option>
                      <option>Above $500</option>
                    </select>
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="grid grid-cols-2 gap-4">
                   <input type="text" placeholder="Name" className="bg-black/40 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-500" />
                   <input type="text" placeholder="Phone" className="bg-black/40 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-500" />
                   <input type="email" placeholder="Email" className="col-span-2 bg-black/40 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-500" />
                </div>

                <button className="w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold rounded-xl shadow-lg transition-all flex justify-center items-center gap-2">
                  Get Your Free Quote <ArrowRight size={18} />
                </button>

              </div>
            </div>
          </NeonFrame>
        </div>
      </section>

      {/* --- STRATEGY FORM SECTION (COMPACT) --- */}
      <div id="strategy-form" className="py-16 px-4 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <NeonFrame className="rounded-[2.5rem] bg-gradient-to-br from-slate-900 to-black border border-white/5 p-8 md:p-12" radius={40} variant="glass">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
               <div>
                 <h4 className="text-cyan-400 font-bold tracking-widest uppercase mb-3">Expert Consultation</h4>
                 <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Connect With A <br/>Branding Strategist</h2>
                 <p className="text-slate-400 text-base mb-6 leading-relaxed">
                   Our Branding Strategists will help you in creating a killer brand Identity. Just fill in the details and our branding artist will get back to you.
                 </p>
                 <div className="flex items-center gap-4 text-white font-bold">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400"><Check size={18} /></div>
                    <span className="text-sm">Free Analysis</span>
                    <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400"><Zap size={18} /></div>
                    <span className="text-sm">Fast Response</span>
                 </div>
               </div>
               
               <form className="space-y-3 bg-black/30 p-6 rounded-3xl border border-white/5">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                   <input placeholder="My Name?" className="bg-slate-800/50 border border-slate-700 p-4 rounded-xl text-white outline-none focus:border-cyan-500 transition-colors text-sm" />
                   <input placeholder="My Phone?" className="bg-slate-800/50 border border-slate-700 p-4 rounded-xl text-white outline-none focus:border-cyan-500 transition-colors text-sm" />
                 </div>
                 <input placeholder="My Email?" className="w-full bg-slate-800/50 border border-slate-700 p-4 rounded-xl text-white outline-none focus:border-cyan-500 transition-colors text-sm" />
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                   <select className="bg-slate-800/50 border border-slate-700 p-4 rounded-xl text-slate-300 outline-none focus:border-cyan-500 transition-colors text-sm">
                     <option>I Want?</option>
                     <option>Logo Design</option>
                     <option>Full Branding</option>
                   </select>
                   <select className="bg-slate-800/50 border border-slate-700 p-4 rounded-xl text-slate-300 outline-none focus:border-cyan-500 transition-colors text-sm">
                     <option>Logo Type?</option>
                     <option>Combination</option>
                     <option>Luxury</option>
                   </select>
                 </div>
                 <button className="w-full py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(147,51,234,0.4)] transition-all">
                   Connect Now
                 </button>
               </form>
             </div>
          </NeonFrame>
        </div>
      </div>

      {/* --- CONTENT SECTION --- */}
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
           {/* Sidebar List */}
           <div className="lg:col-span-4 space-y-2">
             {['Logo Design', 'Social Media', 'Branding & Design', 'Web Design'].map((item, i) => (
               <div key={i} className={`p-6 rounded-2xl cursor-pointer transition-all ${i === 2 ? 'bg-gradient-to-r from-cyan-600 to-blue-600 shadow-lg text-white scale-105' : 'bg-slate-900/40 text-slate-400 hover:bg-slate-800'}`}>
                 <h3 className="font-bold text-xl flex items-center justify-between">
                   {item}
                   {i === 2 && <ArrowRight size={20} />}
                 </h3>
               </div>
             ))}
           </div>

           {/* Main Content */}
           <div className="lg:col-span-8">
             <h2 className="text-4xl md:text-6xl font-black text-white mb-8">Designs Don't Lie.</h2>
             <p className="text-lg text-slate-400 leading-relaxed mb-6">
               Branding is the way your business speaks, and design is about how presentable it is. When infused, they stir the magic of making clients happen to you. Be it logo designing, social media branding, packaging design or web design, we fuse creativity with artistic brushes to create an irresistible design tone for you.
             </p>
             <p className="text-lg text-slate-400 leading-relaxed mb-6">
               Branding is a thought process in which our digital marketing team joins their heads together to come up with a unique brand image that suits your business. Branding defines a business's image, while design determines the visual appearance of a business.
             </p>
             <p className="text-lg text-slate-400 leading-relaxed mb-8">
               Modern logo design and branding services go hand in hand with each other; a complete understanding of brand philosophy provides a robust design development base. For us, branding a business is a uniquely creative process, and translating the entire essence into a design is a challenge that we love to accept.
             </p>
           </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-16 bg-purple-900/10 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Your Next Wicked <span className="text-cyan-400">Logo Design</span>
          </h2>
          <h3 className="text-2xl font-bold text-white mb-6">Symbolize your brand identity.</h3>
          <p className="text-slate-400 max-w-3xl mx-auto mb-10 text-lg">
            Logo is your business's identity, and we wonder, how come you can compromise on having a bespoke logo design for your professional baby? Announce your dominance without uttering a single word and make an identity that leaves a mark behind.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-cyan-400 transition-colors shadow-lg">
              Get A Creative Branding
            </button>
            <button className="px-8 py-4 bg-transparent border border-white text-white font-bold rounded-full hover:bg-white hover:text-black transition-colors">
              Discuss My Type
            </button>
          </div>
        </div>
      </section>

      {/* --- PORTFOLIO GRID --- */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
           <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Logo Designs Carved With Brilliance</h2>
           <p className="text-slate-400 mb-12">We’ve been creating beautifully carved logo designs since a decade and when it comes to uplifting a brand, we do it with sheer creativity.</p>
           
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
             {Array.from({ length: 12 }).map((_, i) => (
               <NeonFrame key={i} className="rounded-xl bg-slate-900/40 aspect-square group cursor-pointer" radius={12} delay={i * 0.1} variant="glass">
                  <div className="w-full h-full relative overflow-hidden rounded-xl">
                    <img src={`assets/logo images/Logo 1 (${i + 1}).jpg`} alt="Logo" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-cyan-400 font-bold uppercase tracking-widest text-sm">View Project</span>
                    </div>
                  </div>
               </NeonFrame>
             ))}
           </div>
           
           <div className="mt-12">
             <Link to="/portfolio" className="inline-block px-10 py-4 border border-slate-700 rounded-full text-slate-300 hover:text-white hover:border-cyan-500 transition-colors font-bold uppercase tracking-widest">
               View All Portfolio
             </Link>
           </div>
        </div>
      </section>

      {/* --- PRICING SECTION --- */}
      <section className="py-16 px-4 bg-slate-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Inspiring Logo Designs With Pocket-Friendly Pricing</h2>
            <p className="text-slate-400">Affordable yet unique digital creative and design services that are tailor-made according to your personalized needs.</p>
            
            <div className="flex justify-center gap-4 mt-8">
               {['Logo Design', 'Logo + Branding', 'Logo + Branding + Website'].map((tab, i) => (
                 <button key={i} className={`px-6 py-2 rounded-full font-bold text-sm ${i === 0 ? 'bg-cyan-500 text-black' : 'bg-slate-900 text-slate-400 hover:text-white'}`}>
                   {tab}
                 </button>
               ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPackages.map((pkg, i) => (
              <NeonFrame key={i} className={`flex flex-col rounded-3xl ${pkg.recommended ? 'bg-slate-900/90 shadow-[0_0_20px_rgba(6,182,212,0.3)] scale-105 z-10' : 'bg-slate-900/40'}`} radius={24} delay={i*0.2} variant="glass">
                <div className="p-6 flex flex-col h-full">
                  {pkg.recommended && <div className="absolute top-0 right-0 m-4 px-3 py-1 bg-pink-500 text-white text-[10px] font-bold uppercase rounded-full">Best Value</div>}
                  <h3 className="text-lg font-bold text-white mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-black text-white mb-6">${pkg.price}</div>
                  
                  <div className="mb-6 space-y-3">
                    <p className="text-xs font-bold text-cyan-400 uppercase">Features</p>
                    {pkg.features.map((f, idx) => (
                      <div key={idx} className="flex items-start text-xs text-slate-300 gap-2">
                        <Check size={14} className="text-cyan-500 mt-0.5" /> <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mb-6 space-y-3">
                    <p className="text-xs font-bold text-green-400 uppercase">Deliverables</p>
                    {pkg.deliverables.map((f, idx) => (
                      <div key={idx} className="flex items-start text-xs text-slate-300 gap-2">
                         <Star size={14} className="text-green-500 mt-0.5" /> <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-6 flex gap-3">
                    <button className="flex-1 py-3 bg-white text-black font-bold rounded-lg text-sm hover:bg-cyan-400 transition-colors">Order Now</button>
                    <button className="flex-1 py-3 bg-transparent border border-slate-600 text-white font-bold rounded-lg text-sm hover:border-cyan-500 transition-colors">Chat</button>
                  </div>
                </div>
              </NeonFrame>
            ))}
          </div>

          {/* Award Winning Package - Special Wide Card */}
          <div className="mt-12">
            <NeonFrame className="rounded-3xl bg-gradient-to-r from-purple-900/40 to-indigo-900/40" radius={24} variant="glass">
              <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                   <div className="inline-block px-4 py-1 bg-yellow-500/20 text-yellow-400 border border-yellow-500/50 rounded-full text-xs font-bold uppercase mb-4">Ultimate Choice</div>
                   <h3 className="text-3xl md:text-5xl font-black text-white mb-2">Award Winning Package</h3>
                   <div className="text-5xl md:text-6xl font-black text-cyan-400 mb-6">$399</div>
                   <p className="text-slate-300 mb-8 font-medium">So, you don't want anything but the best; well, don't worry, at Techxide, you only get the best!</p>
                   <button className="px-10 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold rounded-xl shadow-lg hover:scale-105 transition-transform">
                     Order Premium Now
                   </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Designed by Art Directors (20+ Years Exp)", "Unlimited Revisions", "100% Ownership", "24 Hours Delivery",
                    "Ai, PDF, EPS, JPG, PNG", "Business Card Design", "Flyer Design", "Social Covers Addon",
                    "Font Names & Color Codes", "100% Unique Guarantee"
                  ].map((f, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-white">
                      <div className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 shrink-0"><Check size={14}/></div>
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </NeonFrame>
          </div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="py-16 bg-slate-900 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <h2 className="text-3xl font-bold text-white mb-4">Bad Digital Design Is a Curse <span className="text-red-500">Stay Away From It</span></h2>
           <p className="text-slate-400 mb-12">Proficiency speaks louder than false digital promises.</p>
           
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { val: "400+", label: "Satisfied Customers", icon: Users },
                { val: "100%", label: "Money Back", icon: DollarSign },
                { val: "250+", label: "Projects Completed", icon: Check },
                { val: "170%", label: "Increase In ROI", icon: Zap }
              ].map((s, i) => (
                <div key={i} className="flex flex-col items-center p-6 bg-black/40 rounded-2xl border border-white/5 hover:border-cyan-500/50 transition-colors">
                  <div className="mb-4 text-cyan-400"><s.icon size={32} /></div>
                  <div className="text-4xl font-black text-white mb-2">{s.val}</div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* --- WORKFLOW SECTION --- */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">We Just Don’t Design, We Personify!</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Kickstart", desc: "Turning a business into a brand is a process, impossible without knowing the vision behind the venture.", num: "01" },
              { title: "Blueprint", desc: "The entire blueprint of the modern logo design and branding services is planned in this phase.", num: "02" },
              { title: "Redesigned", desc: "Brace yourself because your startup will get a makeover. The new brand image will help your business stand out.", num: "03" },
              { title: "Perfection", desc: "We offer nothing but perfection. Our design sense has changed the look and feel of hundreds of digital vendors.", num: "04" },
            ].map((step, i) => (
              <NeonFrame key={i} className="rounded-3xl bg-slate-900/30" radius={24} delay={i * 0.2} variant="glass">
                <div className="p-8 h-full relative overflow-hidden group">
                  <div className="text-8xl font-black text-white/5 absolute -top-4 -right-4 group-hover:text-cyan-500/10 transition-colors">{step.num}</div>
                  <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed relative z-10">{step.desc}</p>
                </div>
              </NeonFrame>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};