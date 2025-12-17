import React, { useState } from 'react';
import { Check, ArrowRight, Zap, Star, Megaphone, Search, MapPin, TrendingUp, Users, DollarSign, BarChart, Target, Globe, Layers, MousePointer, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NeonFrame } from '../components/NeonFrame';
import { CyberHeroFrame } from '../components/CyberHeroFrame';

export const DigitalMarketing: React.FC = () => {
  // --- Configurator State ---
  const [inquiry, setInquiry] = useState({
    service: [] as string[],
    name: '',
    contact: '',
    email: '',
    country: ''
  });

  const toggleService = (value: string) => {
    setInquiry(prev => ({
      ...prev,
      service: prev.service.includes(value) 
        ? prev.service.filter(item => item !== value)
        : [...prev.service, value]
    }));
  };

  // --- Portfolio Images ---
  const portfolioItems = Array.from({ length: 9 }).map((_, i) => ({
    id: i + 1,
    img: `assets/DigitalMarketing/img ${i + 1}.webp`
  }));

  // --- Pricing Packages (Voltx Series) ---
  const pricingPackages = [
    {
      name: "Voltx Lightning",
      price: "1999",
      features: [
        "Competitor Analysis", "Keyword Research", "Content Writing", "Account Set Up", "Account Optimization",
        "5 Static Posts", "3 Professional Reels", "Paid Marketing", "2 SEO Optimized On-Site Blogs",
        "Meta Titles & Meta Description", "Guest Post (2 Paid & 1 General)", "Press Release (1 Paid & 1 General)",
        "3 Business Name Mentions", "5 Business Listings", "3 Social Bookmarking", "3 High DA PA Backlinks",
        "Analytics & Console Integration", "Robots.txt Creation", "XML Sitemap Creation & Analysis",
        "HTTPS Version Checkup", "URL Structure Recommendations", "1 Final Report"
      ]
    },
    {
      name: "Voltx Tornado",
      price: "3499",
      recommended: true,
      features: [
        "Competitor Analysis", "Keyword Research", "Content Writing", "Account Set Up", "Account Optimization",
        "10 Static Posts", "5 Professional Reels", "Paid Marketing", "5 SEO Optimized On-Site Blogs",
        "Meta Titles & Meta Description", "Guest Post (3 Paid & 2 General)", "Press Release (2 Paid & 1 General)",
        "6 Business Name Mentions", "10 Business Listings", "6 Social Bookmarking", "5 High DA PA Backlinks",
        "Analytics & Console Integration", "Robots.txt Creation", "XML Sitemap Creation & Analysis",
        "HTTPS Version Checkup", "URL Structure Recommendations", "2 Final Report"
      ]
    },
    {
      name: "Voltx Thunder",
      price: "Custom",
      priceText: "Pricing available upon personalized consultation.",
      features: [
        "Competitor Analysis", "Keyword Research", "Content Writing", "Account Set Up", "Account Optimization",
        "15 Static Posts", "10 Professional Reels", "Any 3 Paid Marketing Platform", "10 SEO Optimized On-Site Blogs",
        "Meta Titles & Meta Description", "Guest Post (5 Paid & 5 General)", "Press Release (3 Paid, 3 General)",
        "9 Business Name Mentions", "15 Business Listings", "10 Social Bookmarking", "10 High DA PA Backlinks",
        "Analytics & Console Integration", "Robots.txt Creation", "XML Sitemap Creation & Analysis",
        "HTTPS Version Checkup", "URL Structure Recommendations", "3 Final Report"
      ]
    }
  ];

  const workflowSteps = [
    { num: "01", title: "Captivate The Audience", desc: "It's very important to attract and target the right audience. Our Social Media Campaigns start by identifying your brand's target audience." },
    { num: "02", title: "Engage The Audience", desc: "The Social media audience wants to be engaged. Our Social marketing strategy involves creating engaging content to make your brand more effective and connected." },
    { num: "03", title: "Grow Your Customers", desc: "Growing an audience online is more challenging than ever. Our Social media marketing team helps your brand grow and maintain its online presence." },
    { num: "04", title: "Build Authentic Relationships", desc: "True engagement goes beyond identifying your audience; it's about building trust and authentic relationships. We connect your brand with like-minded individuals." },
    { num: "05", title: "Leverage Data-Driven Insights", desc: "Understanding audience behaviour through data helps us improve strategies and customize content. We adjust to changing preferences to maximize your reach and impact." }
  ];

  return (
    <div className="animate-fade-in pt-24 min-h-screen">
      
      {/* --- HERO SECTION WITH CONFIGURATOR --- */}
      <section className="relative min-h-screen flex items-center py-16 px-4">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-blue-900/20 blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-indigo-900/20 blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative z-10">
          
          {/* Left Text */}
          <div className="sticky top-24">
            <CyberHeroFrame>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                Craft Captivating <br/>
                Social Media <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">Strategies to Lead</span>
              </h1>
            </CyberHeroFrame>
            <p className="text-xl text-slate-300 mb-8 font-medium pl-6 border-l-4 border-blue-500">
              We transform social media into a powerhouse for your business! Grow your audience and build an exciting brand image with our engaging campaigns.
            </p>
            <div className="flex gap-4 pl-6">
              <button onClick={() => document.getElementById('strategy-form')?.scrollIntoView({ behavior: 'smooth'})} className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-blue-400 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                Start Marketing
              </button>
            </div>
          </div>

          {/* Right Configurator Form */}
          <NeonFrame className="rounded-3xl bg-black/80 backdrop-blur-xl border border-slate-800" radius={24} variant="glass">
            <div className="p-6 md:p-8 max-h-[85vh] overflow-y-auto custom-scrollbar">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2 sticky top-0 bg-black/90 p-2 z-10 rounded-lg">
                <span className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-black text-sm font-bold">1</span>
                Planning to Shine Through
              </h3>

              <div className="space-y-6">
                
                {/* Fixed Service */}
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">I Am Planning to Shine Through</label>
                  <div className="flex flex-col gap-2">
                    {['Social Media Marketing', 'Search Engine Marketing', 'Local Ads / Google Guaranteed'].map(srv => (
                      <button
                        key={srv}
                        onClick={() => toggleService(srv)}
                        className={`py-3 px-4 rounded-xl text-sm font-bold border text-left transition-all ${inquiry.service.includes(srv) ? 'bg-blue-600 border-blue-400 text-white' : 'bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-500'}`}
                      >
                        {srv}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="grid grid-cols-2 gap-4">
                   <input type="text" placeholder="Name" className="bg-black/40 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500" />
                   <input type="text" placeholder="Contact" className="bg-black/40 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500" />
                   <input type="email" placeholder="Email" className="col-span-2 bg-black/40 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500" />
                   <input type="text" placeholder="Country" className="col-span-2 bg-black/40 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500" />
                </div>

                <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl shadow-lg transition-all flex justify-center items-center gap-2">
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
                 <h4 className="text-blue-400 font-bold tracking-widest uppercase mb-3">Digital Branding Agency</h4>
                 <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Take Your Brand to New <br/>Heights with Our Expert Guidance!</h2>
                 <p className="text-slate-400 text-base mb-6 leading-relaxed">
                   Our Branding Strategists are here to help you craft an unforgettable brand identity. Just share your details, and our branding expert will reach you. Let’s create something amazing together!
                 </p>
                 <div className="flex items-center gap-4 text-white font-bold">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400"><Check size={18} /></div>
                    <span className="text-sm">Free Audit</span>
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400"><Zap size={18} /></div>
                    <span className="text-sm">Expert Strategy</span>
                 </div>
               </div>
               
               <form className="space-y-3 bg-black/30 p-6 rounded-3xl border border-white/5">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                   <input placeholder="My Name?" className="bg-slate-800/50 border border-slate-700 p-4 rounded-xl text-white outline-none focus:border-blue-500 transition-colors text-sm" />
                   <input placeholder="My Phone?" className="bg-slate-800/50 border border-slate-700 p-4 rounded-xl text-white outline-none focus:border-blue-500 transition-colors text-sm" />
                 </div>
                 <input placeholder="My Email?" className="w-full bg-slate-800/50 border border-slate-700 p-4 rounded-xl text-white outline-none focus:border-blue-500 transition-colors text-sm" />
                 <select className="w-full bg-slate-800/50 border border-slate-700 p-4 rounded-xl text-slate-300 outline-none focus:border-blue-500 transition-colors text-sm">
                     <option>I Want?</option>
                     <option>Social Media Marketing</option>
                     <option>Search Engine Marketing</option>
                     <option>Local Ads</option>
                 </select>
                 <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all">
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
             {['About us', 'Boosting Your Marketing Presence', 'In The Digital Realm', 'Strategies Customized to Your Vision'].map((item, i) => (
               <div key={i} className={`p-6 rounded-2xl cursor-pointer transition-all ${i === 1 ? 'bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg text-white scale-105' : 'bg-slate-900/40 text-slate-400 hover:bg-slate-800'}`}>
                 <h3 className="font-bold text-xl flex items-center justify-between">
                   {item}
                   {i === 1 && <ArrowRight size={20} />}
                 </h3>
               </div>
             ))}
           </div>

           {/* Main Content */}
           <div className="lg:col-span-8">
             <h2 className="text-4xl md:text-6xl font-black text-white mb-8">Boosting Your Marketing Presence <br/><span className="text-blue-500">In The Digital Realm</span></h2>
             <p className="text-lg text-slate-400 leading-relaxed mb-6">
               In this digital world, your brand’s voice plays a vital role as it gives you full access to the audience of billions of users around the world. At Techxide we craft impactful digital marketing strategies to amplify your reach, engage your audience, and drive real revenue growth. From engaging content to data-driven campaigns, we help you stay ahead of the rest.
             </p>
             <p className="text-lg text-slate-400 leading-relaxed mb-6">
               True strategized marketing reflects your purpose. Whether you are looking forward to multiplying your followers or boosting brand awareness, Techxide is here to assist you in achieving your desired results. Let us take your marketing presence to the next level by generating strategies aligned with your vision.
             </p>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                    <div className="bg-blue-500/20 p-3 rounded-xl text-blue-400"><Megaphone /></div>
                    <div>
                        <h4 className="font-bold text-white text-lg">Social Media Marketing</h4>
                        <p className="text-slate-400 text-sm">Symbolize your brand identity.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                    <div className="bg-indigo-500/20 p-3 rounded-xl text-indigo-400"><Search /></div>
                    <div>
                        <h4 className="font-bold text-white text-lg">Search Engine Marketing</h4>
                        <p className="text-slate-400 text-sm">Get found by the right people.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                    <div className="bg-purple-500/20 p-3 rounded-xl text-purple-400"><MapPin /></div>
                    <div>
                        <h4 className="font-bold text-white text-lg">Local Ads / Google Guaranteed</h4>
                        <p className="text-slate-400 text-sm">Dominate your local market.</p>
                    </div>
                </div>
             </div>

             <div className="mt-8">
               <p className="text-slate-400 mb-4 italic">Social media plays a vital role in digital marketing strategy as it gives you full access to the audience of billions of users around the world. Social media marketing is a powerful tool for brands looking to increase their audience and develop as a brand. Through social media platforms, your brand can have the space it requires to grow and connect with millions of customers, followers, and prospects around the world.</p>
               <button className="px-6 py-3 border border-blue-500 text-blue-400 rounded-full font-bold hover:bg-blue-500 hover:text-white transition-colors">
                  Discuss More About SMM
               </button>
             </div>
           </div>
        </div>
      </section>

      {/* --- PORTFOLIO GRID --- */}
      <section className="py-16 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto text-center">
           <h4 className="text-blue-500 font-bold tracking-widest uppercase mb-4">Portfolio</h4>
           <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Elevating Your Social Presence for <br/><span className="text-blue-400">Maximum Impact</span></h2>
           <p className="text-slate-400 mb-12 max-w-2xl mx-auto">We transform social media into a powerhouse for your business! Grow your audience and build an exciting brand image with our engaging campaigns.</p>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {portfolioItems.map((item, i) => (
               <NeonFrame key={item.id} className="rounded-2xl bg-slate-900/40" radius={16} delay={i * 0.05} variant="glass">
                  <div className="group relative w-full aspect-square overflow-hidden rounded-2xl cursor-pointer">
                    <img 
                      src={item.img} 
                      alt={`Digital Marketing ${item.id}`} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" 
                    />
                    <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-2">Social Media</span>
                      <h3 className="text-white font-bold text-2xl">Campaign #{item.id}</h3>
                    </div>
                  </div>
               </NeonFrame>
             ))}
           </div>
        </div>
      </section>

      {/* --- PRICING SECTION --- */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h4 className="text-indigo-500 font-bold tracking-widest uppercase mb-4">Pricing</h4>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Cost-Effective Social Media <br/>Marketing Solutions!</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Maximize your brand impact with our budget-friendly social media marketing packages. Grow your audience and build your brand worry-free.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricingPackages.map((pkg, i) => (
              <NeonFrame key={i} className={`flex flex-col rounded-3xl ${pkg.recommended ? 'bg-slate-900/90 shadow-[0_0_30px_rgba(79,70,229,0.2)] scale-105 z-10' : 'bg-slate-900/40'}`} radius={24} delay={i*0.2} variant="glass">
                <div className="p-6 flex flex-col h-full relative overflow-hidden">
                  {pkg.recommended && <div className="absolute top-0 right-0 m-6 px-3 py-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-[10px] font-bold uppercase rounded-full">Recommended</div>}
                  
                  <h3 className="text-2xl font-black text-white mb-2">{pkg.name}</h3>
                  
                  {pkg.price === "Custom" ? (
                      <div className="text-xl font-bold text-blue-400 mb-6 leading-tight min-h-[48px]">{pkg.priceText}</div>
                  ) : (
                      <div className="text-5xl font-black text-white mb-6 min-h-[48px]">${pkg.price}</div>
                  )}

                  <div className="h-[400px] overflow-y-auto custom-scrollbar pr-2 mb-8">
                      <p className="text-xs font-bold text-slate-500 uppercase mb-4 sticky top-0 bg-slate-900/95 py-2">Things Included:</p>
                      <ul className="space-y-3">
                        {pkg.features.map((f, idx) => (
                          <li key={idx} className="flex items-start text-sm text-slate-300 gap-3">
                            <Check size={16} className="text-blue-500 mt-0.5 shrink-0" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                  </div>

                  <div className="mt-auto flex gap-4">
                    <button className="flex-1 py-4 bg-white text-black font-bold rounded-xl hover:bg-blue-400 transition-colors shadow-lg">Order Now</button>
                    <button className="flex-1 py-4 bg-transparent border border-slate-700 text-white font-bold rounded-xl hover:border-blue-500 transition-colors">Chat</button>
                  </div>
                </div>
              </NeonFrame>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-500 text-sm italic border-t border-slate-800 pt-8 inline-block px-8">
                Disclaimer: The paid marketing budget will be determined based on your industry/goal and it is not included in the package pricing.
            </p>
          </div>

        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="py-16 bg-slate-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <h4 className="text-blue-500 font-bold tracking-widest uppercase mb-4">Stats</h4>
           <h2 className="text-3xl font-bold text-white mb-4">Numbers That Speak <span className="text-blue-400">for Themselves</span></h2>
           <p className="text-slate-400 mb-12">We focus on results, not just likes. Our social media strategies drive real engagement, build brand loyalty, and generate real outcomes.</p>
           
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { val: "600+", label: "Satisfied Customers", icon: Users },
                { val: "100%", label: "Paid", icon: DollarSign },
                { val: "700+", label: "Projects Completed", icon: Check },
                { val: "INCREASE", label: "Brand Visibility", icon: Eye },
                { val: "INCREASE", label: "Website Visitors", icon: MousePointer },
                { val: "24/7", label: "Client Coordination", icon: Users },
                { val: "Fast", label: "On-Time Delivery", icon: TrendingUp },
                { val: "100%", label: "Ownership Rights", icon: Layers },
              ].map((s, i) => (
                <div key={i} className="flex flex-col items-center p-6 bg-black/40 rounded-2xl border border-white/5 hover:border-blue-500/50 transition-colors group">
                  <div className="mb-4 text-blue-400 group-hover:scale-110 transition-transform"><s.icon size={32} /></div>
                  <div className="text-3xl md:text-4xl font-black text-white mb-2">{s.val}</div>
                  <div className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* --- WORKFLOW SECTION --- */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h4 className="text-indigo-500 font-bold tracking-widest uppercase mb-4">Workflow</h4>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Unmatched Results Through Smart Strategies</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {workflowSteps.map((step, i) => (
              <NeonFrame key={i} className="rounded-3xl bg-slate-900/30" radius={24} delay={i * 0.1} variant="glass">
                <div className="p-6 h-full relative overflow-hidden group flex flex-col">
                  <div className="text-6xl font-black text-white/5 absolute -top-2 -right-2 group-hover:text-blue-500/10 transition-colors">{step.num}</div>
                  <h3 className="text-lg font-bold text-white mb-3 relative z-10">{step.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed relative z-10 flex-grow">{step.desc}</p>
                </div>
              </NeonFrame>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};