import React, { useState } from 'react';
import { Check, ArrowRight, Zap, Star, Layout, Smartphone, Globe, PenTool, ShoppingCart, Server, Code, ChevronDown, CheckCircle, Users, DollarSign, Clock, Shield, MousePointer } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NeonFrame } from '../components/NeonFrame';
import { CyberHeroFrame } from '../components/CyberHeroFrame';

export const WebDesign: React.FC = () => {
  // --- Configurator State ---
  const [inquiry, setInquiry] = useState({
    planning: 'Website Design and Development',
    goal: 'Sell Products Online (E-Commerce)',
    productRange: '1 - 10',
    pageRange: '2 - 5',
    features: [] as string[],
    additionalHelp: [] as string[],
    budget: '$1000 - $5000',
    timeline: 'Within 1 Month',
    name: '',
    email: '',
    phone: '',
    country: ''
  });

  const toggleSelection = (field: 'features' | 'additionalHelp', value: string) => {
    setInquiry(prev => ({
      ...prev,
      [field]: prev[field].includes(value) 
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  // --- Portfolio State ---
  const [portfolioTab, setPortfolioTab] = useState('HTML');
  const portfolioCategories = ['HTML', 'CMS', 'E-Commerce', 'Portal'];

  // Portfolio Items (Using 19 images)
  const portfolioItems = Array.from({ length: 19 }).map((_, i) => {
    // Images 05-19 are JPG files, rest are PNG
    const extension = (i + 1 >= 5) ? '.jpg' : '.png';
    return {
      id: i + 1,
      img: `/assets/WebDesigns/img ${String(i + 1).padStart(2, '0')}${extension}`,
      category: portfolioCategories[i % 4] // Distribute across categories for demo
    };
  });

  // --- Pricing State ---
  const [pricingTab, setPricingTab] = useState('HTML');
  const pricingTabs = ['HTML', 'CMS', 'E-Commerce', 'Portal'];

  const pricingPackages: Record<string, any> = {
    'HTML': {
      name: "HTML Website Package",
      price: 499,
      description: "Proficient Hypertext Markup Language has been embedded into our website design and development processes.",
      features: [
        "Product/Service Page",
        "Portfolio/Gallery Page",
        "5 Pages Static Website",
        "W3C Certified HTML",
        "JQuery Slider Banner",
        "Mobile Responsive Layout",
        "Home Page Layout",
        "Company Profile Page",
        "Contact Us Page",
        "Lead Inquiry Form",
        "Website Favicon Design",
        "5 Web Page Banners Design",
        "5 Royalty-Free Stock Images",
        "Advanced UI/UX Effects"
      ]
    },
    'CMS': {
      name: "CMS Website Package",
      price: 799,
      description: "Dynamic content management systems tailored for easy updates and scalability.",
      features: [
        "WordPress/Webflow Setup",
        "10 Pages Dynamic Website",
        "Admin Dashboard",
        "Theme Customization",
        "Blog Setup",
        "Mobile Responsive",
        "SEO Plugin Installation",
        "Speed Optimization",
        "Social Media Integration",
        "Contact Forms with Captcha",
        "Newsletter Signup",
        "Backup & Security Setup"
      ]
    },
    'E-Commerce': {
      name: "E-Commerce Package",
      price: 1499,
      description: "Full-fledged online stores designed to convert visitors into loyal customers.",
      features: [
        "Shopify/WooCommerce",
        "Up to 50 Products Upload",
        "Payment Gateway Integration",
        "Shopping Cart & Wishlist",
        "User Accounts & History",
        "Product Search & Filters",
        "Discount Code System",
        "Inventory Management",
        "Sales Reporting Dashboard",
        "SSL Certificate Installation",
        "Mobile App Ready API"
      ]
    },
    'Portal': {
      name: "Portal Package",
      price: 2999,
      description: "Complex web portals with custom functionalities and secure user access.",
      features: [
        "Custom Web Application",
        "React/Next.js Development",
        "Advanced User Roles",
        "Secure Database Design",
        "API Development & Integration",
        "Real-time Notifications",
        "Data Visualization Dashboards",
        "Cloud Hosting Setup (AWS)",
        "Automated Workflows",
        "3 Months Maintenance",
        "Scalable Architecture"
      ]
    }
  };

  return (
    <div className="animate-fade-in pt-24 min-h-screen">
      
      {/* --- HERO SECTION WITH CONFIGURATOR --- */}
      <section className="relative min-h-screen flex items-center py-16 px-4">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-blue-900/20 blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-purple-900/20 blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative z-10">
          
          {/* Left Text */}
          <div className="sticky top-24">
            <CyberHeroFrame>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                Creating High-performance <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Digital Spaces</span><br/>
                for Brands, Businesses, and Individuals!
              </h1>
            </CyberHeroFrame>
            <p className="text-xl text-slate-300 mb-8 font-medium pl-6 border-l-4 border-cyan-500">
              We build high-performance, responsive, and aesthetically stunning websites tailored to your business goals.
            </p>
            <div className="flex gap-4 pl-6">
              <button onClick={() => document.getElementById('strategy-form')?.scrollIntoView({ behavior: 'smooth'})} className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-cyan-400 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                Discuss Your Vision
              </button>
            </div>
          </div>

          {/* Right Configurator Form */}
          <NeonFrame className="rounded-3xl bg-black/80 backdrop-blur-xl border border-slate-800" radius={24} variant="glass">
            <div className="p-6 md:p-8 max-h-[85vh] overflow-y-auto custom-scrollbar">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2 sticky top-0 bg-black/90 p-2 z-10 rounded-lg">
                <span className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-black text-sm font-bold">1</span>
                Project Configuration
              </h3>

              <div className="space-y-6">
                
                {/* Fixed Looking For */}
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">I am Looking for</label>
                  <div className="w-full bg-slate-900/80 border border-blue-500/50 text-blue-400 font-bold px-4 py-3 rounded-xl">
                    Web Development or Design Services
                  </div>
                </div>

                {/* Planning To */}
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">I Am Planning To</label>
                  <div className="flex flex-col gap-2">
                    {['Website Design and Development', 'Website Design and Feature Updates'].map(opt => (
                      <button
                        key={opt}
                        onClick={() => setInquiry({...inquiry, planning: opt})}
                        className={`py-3 px-4 rounded-xl text-sm font-bold border text-left transition-all ${inquiry.planning === opt ? 'bg-blue-600 border-blue-400 text-white' : 'bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-500'}`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Goal */}
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">My Goal is to</label>
                  <div className="flex flex-col gap-2">
                    {['Sell Products Online (E-Commerce)', 'Advertise my Business/Services'].map(opt => (
                      <button
                        key={opt}
                        onClick={() => setInquiry({...inquiry, goal: opt})}
                        className={`py-3 px-4 rounded-xl text-sm font-bold border text-left transition-all ${inquiry.goal === opt ? 'bg-cyan-600 border-cyan-400 text-white' : 'bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-500'}`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Conditional Product/Page Range */}
                {inquiry.goal.includes('Sell') ? (
                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">Number of Products</label>
                    <div className="grid grid-cols-2 gap-2">
                      {['1 - 10', '11 - 50', '51 - 100', '100+'].map(rng => (
                         <button key={rng} onClick={() => setInquiry({...inquiry, productRange: rng})} className={`py-2 px-3 rounded-lg text-xs font-bold border ${inquiry.productRange === rng ? 'bg-cyan-500/20 border-cyan-400 text-cyan-400' : 'bg-slate-900 border-slate-700 text-slate-400'}`}>{rng}</button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">Number of Pages</label>
                    <div className="grid grid-cols-3 gap-2">
                       {['2 - 5', '5 - 10', '10+'].map(rng => (
                         <button key={rng} onClick={() => setInquiry({...inquiry, pageRange: rng})} className={`py-2 px-3 rounded-lg text-xs font-bold border ${inquiry.pageRange === rng ? 'bg-cyan-500/20 border-cyan-400 text-cyan-400' : 'bg-slate-900 border-slate-700 text-slate-400'}`}>{rng}</button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Features */}
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">Features I Need</label>
                  <div className="flex flex-wrap gap-2">
                    {['Portal', 'User Accounts', 'Newsletter Subscriptions', 'On-Page SEO Optimization'].map(feat => (
                      <button
                        key={feat}
                        onClick={() => toggleSelection('features', feat)}
                        className={`py-2 px-3 rounded-lg text-xs font-bold border transition-all ${inquiry.features.includes(feat) ? 'bg-purple-500/20 border-purple-400 text-purple-400' : 'bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-500'}`}
                      >
                        {feat}
                      </button>
                    ))}
                  </div>
                </div>

                 {/* Additional Help */}
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">Additional Help</label>
                  <div className="flex flex-wrap gap-2">
                    {['Search Engine Optimization (SEO)', 'Website Content', 'Blogging'].map(help => (
                      <button
                        key={help}
                        onClick={() => toggleSelection('additionalHelp', help)}
                        className={`py-2 px-3 rounded-lg text-xs font-bold border transition-all ${inquiry.additionalHelp.includes(help) ? 'bg-pink-500/20 border-pink-400 text-pink-400' : 'bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-500'}`}
                      >
                        {help}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget & Timeline */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">Budget</label>
                    <select className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-500 appearance-none" onChange={(e) => setInquiry({...inquiry, budget: e.target.value})}>
                      <option>$500 - $1000</option>
                      <option>$1000 - $5000</option>
                      <option>$5000+</option>
                    </select>
                  </div>
                   <div>
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">Go Live In</label>
                    <select className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-500 appearance-none" onChange={(e) => setInquiry({...inquiry, timeline: e.target.value})}>
                      <option>Within 1 Month</option>
                      <option>Within 3 Months</option>
                      <option>3 Months +</option>
                    </select>
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="grid grid-cols-2 gap-4">
                   <input type="text" placeholder="Name" className="bg-black/40 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-500" />
                   <input type="text" placeholder="Phone" className="bg-black/40 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-500" />
                   <input type="email" placeholder="Email" className="col-span-2 bg-black/40 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-500" />
                   <input type="text" placeholder="Country" className="col-span-2 bg-black/40 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-500" />
                </div>

                <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold rounded-xl shadow-lg transition-all flex justify-center items-center gap-2">
                  Get Your Free Estimate <ArrowRight size={18} />
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
                 <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Connect With A <br/>Web Strategist</h2>
                 <p className="text-slate-400 text-base mb-6 leading-relaxed">
                   A Web strategist will curate feature-packed web design ideas to build a website that delivers a problem-free user experience.
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
                     <option>New Website</option>
                     <option>Redesign</option>
                   </select>
                   <select className="bg-slate-800/50 border border-slate-700 p-4 rounded-xl text-slate-300 outline-none focus:border-cyan-500 transition-colors text-sm">
                     <option>Website TYPE</option>
                     <option>Corporate</option>
                     <option>E-Commerce</option>
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
             {['Gripping UI/UX', 'Foolproof Backend', 'Magnetic Frontend', 'Niches & Businesses'].map((item, i) => (
               <div key={i} className={`p-6 rounded-2xl cursor-pointer transition-all ${i === 0 ? 'bg-gradient-to-r from-blue-600 to-cyan-600 shadow-lg text-white scale-105' : 'bg-slate-900/40 text-slate-400 hover:bg-slate-800'}`}>
                 <h3 className="font-bold text-xl flex items-center justify-between">
                   {item}
                   {i === 0 && <ArrowRight size={20} />}
                 </h3>
               </div>
             ))}
           </div>

           {/* Main Content */}
           <div className="lg:col-span-8">
             <h2 className="text-4xl md:text-6xl font-black text-white mb-8">Websites That Amplify Opportunities</h2>
             <p className="text-lg text-slate-400 leading-relaxed mb-6">
               The moment you treat your website as just another virtual business station will be the moment your business will start fading away in the digital space. Avid web development starts with a robust backend, stellar front-end, and intriguing UI/UX. This is how we build websites that stand out above all others.
             </p>
             <p className="text-lg text-slate-400 leading-relaxed mb-6">
               Your Website is cyberspace bursting with opportunities. From business growth to recognition and outreach, our exceptional designs promise user experiences that drive conversions. A robust back end, an eye-catching front end, and an intuitive UX/UI are the primary features of web design and development at Techxide!
             </p>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start gap-4">
                    <div className="bg-blue-500/20 p-3 rounded-xl text-blue-400"><Smartphone /></div>
                    <div>
                        <h4 className="font-bold text-white text-lg">Gripping UI/UX</h4>
                        <p className="text-slate-400 text-sm">Comfortable- that is what your user experience must aim to be.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="bg-green-500/20 p-3 rounded-xl text-green-400"><Server /></div>
                    <div>
                        <h4 className="font-bold text-white text-lg">Foolproof Backend</h4>
                        <p className="text-slate-400 text-sm">A robust back end that does not crumble under heavy traffic.</p>
                    </div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* --- PORTFOLIO GRID --- */}
      <section id="portfolio-grid" className="py-16 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto text-center">
           <h2 className="text-4xl md:text-5xl font-black text-white mb-4">A Website Design Portfolio <br/><span className="text-cyan-400">That Speaks for Itself!</span></h2>
           <p className="text-slate-400 mb-12">Tap into your potential. Get a functional, practical, and aesthetically pleasing website for your business.</p>
           
           {/* Portfolio Tabs */}
           <div className="flex flex-wrap justify-center gap-4 mb-12">
             {portfolioCategories.map(cat => (
               <button
                 key={cat}
                 onClick={() => setPortfolioTab(cat)}
                 className={`px-6 py-2 rounded-full font-bold transition-all ${portfolioTab === cat ? 'bg-cyan-500 text-black shadow-lg scale-105' : 'bg-slate-800 text-slate-400 hover:text-white'}`}
               >
                 {cat}
               </button>
             ))}
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {portfolioItems.map((item, i) => (
               <NeonFrame key={item.id} className="rounded-2xl bg-slate-900/40" radius={16} delay={i * 0.05} variant="glass">
                  <div className="group relative w-full aspect-[16/10] overflow-hidden rounded-2xl cursor-pointer">
                    <img 
                      src={item.img} 
                      alt={`Web Design ${item.id}`} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" 
                    />
                    <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-cyan-400 font-bold uppercase tracking-widest text-xs mb-2">{item.category}</span>
                      <h3 className="text-white font-bold text-2xl">Project #{item.id}</h3>
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
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Worried About Web Design Costs?<br/> We Have You Covered</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Extensive research, dynamic programming languages, and a user-centric approach - we hone in on what you want for your brand. We promise exceptional quality at amicable costs.</p>
          
            {/* Pricing Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
               {pricingTabs.map(tab => (
                 <button
                   key={tab}
                   onClick={() => setPricingTab(tab)}
                   className={`px-8 py-3 rounded-full font-bold text-sm transition-all ${pricingTab === tab ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg scale-105' : 'bg-slate-900 border border-slate-700 text-slate-400 hover:border-cyan-500'}`}
                 >
                   {tab}
                 </button>
               ))}
            </div>
          </div>

          {/* Pricing Card Display */}
          <div className="flex justify-center">
            <NeonFrame className="w-full max-w-2xl rounded-3xl bg-slate-900/80 shadow-2xl" radius={24} variant="glass">
               <div className="p-8 md:p-12 relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-4 opacity-10">
                   <Code size={120} className="text-white" />
                 </div>
                 
                 <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                   <div>
                     <h3 className="text-3xl font-black text-white mb-2">{pricingPackages[pricingTab].name}</h3>
                     <p className="text-slate-400 text-sm max-w-md">{pricingPackages[pricingTab].description}</p>
                   </div>
                   <div className="text-right">
                     <div className="text-5xl font-black text-cyan-400">${pricingPackages[pricingTab].price}</div>
                     <div className="text-xs text-slate-500 font-bold uppercase mt-1">One Time Cost</div>
                   </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-10">
                   {pricingPackages[pricingTab].features.map((feature: string, idx: number) => (
                     <div key={idx} className="flex items-start gap-3">
                       <CheckCircle size={18} className="text-green-400 mt-0.5 shrink-0" />
                       <span className="text-slate-300 text-sm">{feature}</span>
                     </div>
                   ))}
                 </div>

                 <div className="flex flex-col sm:flex-row gap-4">
                   <button className="flex-1 py-4 bg-white text-black font-bold rounded-xl hover:bg-cyan-400 transition-colors shadow-lg">Order Now</button>
                   <button className="flex-1 py-4 bg-transparent border border-white/20 text-white font-bold rounded-xl hover:bg-white/10 transition-colors">Chat With Us</button>
                 </div>
               </div>
            </NeonFrame>
          </div>

        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="py-16 bg-slate-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <h2 className="text-3xl font-bold text-white mb-4">If Numbers Could Speak, <span className="text-cyan-400">Oh Wait! They Can</span></h2>
           <p className="text-slate-400 mb-12">We loved working for each of these as their web design company of choice! We’d love to work on your ideas too.</p>
           
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { val: "400+", label: "Satisfied Customers", icon: Users },
                { val: "100%", label: "Money Back", icon: DollarSign },
                { val: "250+", label: "Projects Completed", icon: Check },
                { val: "170%", label: "Increase In ROI", icon: Zap },
                { val: "100+", label: "Daily Website Visits", icon: MousePointer },
                { val: "24/7", label: "Client Coordination", icon: Users },
                { val: "Fast", label: "On-Time Delivery", icon: Clock },
                { val: "100%", label: "Ownership Rights", icon: Shield },
              ].map((s, i) => (
                <div key={i} className="flex flex-col items-center p-6 bg-black/40 rounded-2xl border border-white/5 hover:border-cyan-500/50 transition-colors group">
                  <div className="mb-4 text-cyan-400 group-hover:scale-110 transition-transform"><s.icon size={32} /></div>
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
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Your Digital Dream Online!</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Digital Presence", desc: "Your web presence must convey the true essence of your brand. We make it happen.", num: "01" },
              { title: "Designed", desc: "You brief us on your brand's who, what, when, and how, and we will engage, attract, and convert the audience for you.", num: "02" },
              { title: "Developed", desc: "Front-end, back-end, and full-stack developers construct concepts, visuals, and user interfaces that promise smooth operation.", num: "03" },
              { title: "Get a Premium Experience", desc: "From the moment your audience clicks on your link, it becomes our responsibility to give them an intuitive website.", num: "04" },
            ].map((step, i) => (
              <NeonFrame key={i} className="rounded-3xl bg-slate-900/30" radius={24} delay={i * 0.2} variant="glass">
                <div className="p-8 h-full relative overflow-hidden group">
                  <div className="text-8xl font-black text-white/5 absolute -top-4 -right-4 group-hover:text-cyan-500/10 transition-colors">{step.num}</div>
                  <h3 className="text-xl font-bold text-white mb-4 relative z-10">{step.title}</h3>
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