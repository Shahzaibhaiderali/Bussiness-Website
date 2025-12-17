import React, { useState } from 'react';
import { Check, ArrowRight, Zap, Star, Video, Play, Film, Monitor, Mic, Music, Layers, Image, PenTool, Clock, Users, DollarSign, Shield, CheckCircle, MousePointer, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NeonFrame } from '../components/NeonFrame';
import { CyberHeroFrame } from '../components/CyberHeroFrame';

export const VideoAnimation: React.FC = () => {
  // --- Configurator State ---
  const [inquiry, setInquiry] = useState({
    serviceType: 'Animated Video Services',
    videoType: [] as string[],
    length: '1 Min',
    script: 'Written by Our Professionals',
    voiceOver: 'Male',
    budget: '$1000',
    name: '',
    email: '',
    phone: '',
    country: ''
  });

  const toggleSelection = (value: string) => {
    setInquiry(prev => ({
      ...prev,
      videoType: prev.videoType.includes(value) 
        ? prev.videoType.filter(item => item !== value)
        : [...prev.videoType, value]
    }));
  };

  // --- Portfolio State ---
  const [portfolioTab, setPortfolioTab] = useState('All');
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const portfolioCategories = ['All', 'Logo Animation', '2D Animation', 'White Board', 'Interactive 3D'];

  // Specific YouTube Videos provided by user
  const portfolioVideos = [
    { id: 'aA8oNZ8qjls', cat: '2D Animation', title: 'Corporate Explainer' },
    { id: 'una04IsJk9k', cat: '2D Animation', title: 'Product Launch' },
    { id: 'ddJGk-yBH8U', cat: 'White Board', title: 'Educational Series' },
    { id: '4m7enLJDzZo', cat: 'Interactive 3D', title: '3D Product Visualization' },
    { id: 'qFdcyCpnhqQ', cat: 'Logo Animation', title: 'Brand Identity Reveal' },
    { id: 'nKZ5MLc3z2s', cat: '2D Animation', title: 'Character Story' },
    { id: 's_4mJq8fonU', cat: 'Interactive 3D', title: 'Tech Showcase' },
    { id: 'V0GEu2sGmYQ', cat: 'White Board', title: 'Service Process' }
  ];

  const filteredVideos = portfolioTab === 'All' 
    ? portfolioVideos 
    : portfolioVideos.filter(v => v.cat === portfolioTab);

  // --- Pricing Packages ---
  const pricingPackages = [
    {
      name: "Basic Animation",
      price: 499,
      duration: "60 seconds",
      features: [
        "Custom Work",
        "Script Writing",
        "Detail Storyboard",
        "Professional Voice over",
        "Impressive Animation",
        "Royalty free BG & SFX"
      ],
      moreFeatures: [
        "File Delivered in HD 720p",
        "3 round of revisions in each phase",
        "4 weeks Deadline",
        "100% satisfaction",
        "100% Ownership Rights"
      ],
      formats: "MP4"
    },
    {
      name: "Standard Animation",
      price: 799,
      duration: "60 seconds",
      recommended: true,
      features: [
        "Custom Work",
        "Script Writing",
        "Storyboarding",
        "Detail Illustrations",
        "Professional Voice over",
        "Impressive Animation",
        "Royalty free BG & SFX"
      ],
      moreFeatures: [
        "File Delivered in HD 720p",
        "3 round of revisions in each phase",
        "3 weeks Deadline",
        "100% satisfaction",
        "100% Ownership Rights"
      ],
      formats: "MP4, MOV"
    },
    {
      name: "Premium Animation",
      price: 999,
      duration: "60 seconds",
      features: [
        "Custom Work",
        "Script Writing",
        "Storyboarding",
        "Detail Illustrations",
        "Professional Voice over",
        "Impressive Animation",
        "Royalty free BG & SFX"
      ],
      moreFeatures: [
        "File Delivered in HD 1080p",
        "Multiple Revisions in each phase",
        "2 weeks Deadline",
        "Dedicated Project Manager",
        "100% satisfaction",
        "100% Ownership Rights"
      ],
      formats: "MP4, MOV, WAV"
    },
    {
      name: "Gold Animation",
      price: 1499,
      duration: "60 seconds",
      features: [
        "Custom Work",
        "2 Concepts + Premium Scriptwriting",
        "Storyboarding",
        "Detail Illustrations",
        "Professional Voice over",
        "Impressive Animation",
        "Royalty free BG & SFX"
      ],
      moreFeatures: [
        "File Delivered in HD 1080p",
        "Unlimited revisions",
        "6 weeks Deadline",
        "Dedicated Project Manager",
        "100% satisfaction",
        "100% Ownership Rights",
        "Source File"
      ],
      formats: "MP4, MOV, WAV, GIF"
    }
  ];

  return (
    <div className="animate-fade-in pt-24 min-h-screen">
      
      {/* --- HERO SECTION WITH CONFIGURATOR --- */}
      <section className="relative min-h-screen flex items-center py-16 px-4">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-purple-900/20 blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-orange-900/20 blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative z-10">
          
          {/* Left Text */}
          <div className="sticky top-24">
            <CyberHeroFrame>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                Click To Build <br/>
                Your Striking <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-600">Animated Video!</span>
              </h1>
            </CyberHeroFrame>
            <p className="text-xl text-slate-300 mb-8 font-medium pl-6 border-l-4 border-orange-500">
              Video marketing is the way to go now and in the future. We create videos that boost and convey the goal you aim for.
            </p>
            <div className="flex gap-4 pl-6">
              <button onClick={() => document.getElementById('strategy-form')?.scrollIntoView({ behavior: 'smooth'})} className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-orange-400 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                Discuss Your Video
              </button>
            </div>
          </div>

          {/* Right Configurator Form */}
          <NeonFrame className="rounded-3xl bg-black/80 backdrop-blur-xl border border-slate-800" radius={24} variant="glass">
            <div className="p-6 md:p-8 max-h-[85vh] overflow-y-auto custom-scrollbar">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2 sticky top-0 bg-black/90 p-2 z-10 rounded-lg">
                <span className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-black text-sm font-bold">1</span>
                Customize Your Video
              </h3>

              <div className="space-y-6">
                
                {/* Fixed Service */}
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">I Am Seeking</label>
                  <div className="w-full bg-slate-900/80 border border-orange-500/50 text-orange-400 font-bold px-4 py-3 rounded-xl">
                    Animated Video Services
                  </div>
                </div>

                {/* Video Types */}
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">I want a (Select Multiple)</label>
                  <div className="flex flex-wrap gap-2">
                    {['2D Animation', 'Whiteboard Animation', '3D Animation', 'Motion Graphics', 'Kinetic Typography'].map(type => (
                      <button
                        key={type}
                        onClick={() => toggleSelection(type)}
                        className={`py-2 px-3 rounded-lg text-xs font-bold border transition-all ${inquiry.videoType.includes(type) ? 'bg-orange-500/20 border-orange-400 text-orange-400' : 'bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-500'}`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Length */}
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">Video Length</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['> 1 Min', '1 Min', '1.5 Mins', '2 Mins', '2.5 Mins', '3 Mins'].map(len => (
                      <button
                        key={len}
                        onClick={() => setInquiry({...inquiry, length: len})}
                        className={`py-2 px-3 rounded-lg text-xs font-bold border transition-all ${inquiry.length === len ? 'bg-purple-600 border-purple-400 text-white' : 'bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-500'}`}
                      >
                        {len}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Script & Voice Over */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">Script</label>
                        <select className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-orange-500 appearance-none" onChange={(e) => setInquiry({...inquiry, script: e.target.value})}>
                          <option>Provided by Me</option>
                          <option>Written by Pros</option>
                        </select>
                    </div>
                    <div>
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">Voice-Over</label>
                        <select className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-orange-500 appearance-none" onChange={(e) => setInquiry({...inquiry, voiceOver: e.target.value})}>
                          <option>Male</option>
                          <option>Female</option>
                          <option>Mixed</option>
                        </select>
                    </div>
                </div>

                {/* Budget */}
                <div>
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">Budget Ballpark</label>
                    <div className="grid grid-cols-4 gap-2">
                       {['$500', '$1000', '$1500', '$2000+'].map(bg => (
                         <button key={bg} onClick={() => setInquiry({...inquiry, budget: bg})} className={`py-2 px-2 rounded-lg text-xs font-bold border ${inquiry.budget === bg ? 'bg-orange-500/20 border-orange-400 text-orange-400' : 'bg-slate-900 border-slate-700 text-slate-400'}`}>{bg}</button>
                       ))}
                    </div>
                </div>

                {/* Contact Fields */}
                <div className="grid grid-cols-2 gap-4">
                   <input type="text" placeholder="Name" className="bg-black/40 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-orange-500" />
                   <input type="text" placeholder="Phone" className="bg-black/40 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-orange-500" />
                   <input type="email" placeholder="Email" className="col-span-2 bg-black/40 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-orange-500" />
                   <input type="text" placeholder="Country" className="col-span-2 bg-black/40 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-orange-500" />
                </div>

                <button className="w-full py-4 bg-gradient-to-r from-orange-600 to-purple-600 hover:from-orange-500 hover:to-purple-500 text-white font-bold rounded-xl shadow-lg transition-all flex justify-center items-center gap-2">
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
                 <h4 className="text-orange-400 font-bold tracking-widest uppercase mb-3">Video Strategy</h4>
                 <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Connect With A <br/>Video Strategist</h2>
                 <p className="text-slate-400 text-base mb-6 leading-relaxed">
                   Our Video Strategists will help you in building your video animations right. Just fill in the details and our animation artist will get back to you.
                 </p>
                 <div className="flex items-center gap-4 text-white font-bold">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400"><Check size={18} /></div>
                    <span className="text-sm">Free Consultation</span>
                    <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400"><Zap size={18} /></div>
                    <span className="text-sm">Creative Ideas</span>
                 </div>
               </div>
               
               <form className="space-y-3 bg-black/30 p-6 rounded-3xl border border-white/5">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                   <input placeholder="My Name?" className="bg-slate-800/50 border border-slate-700 p-4 rounded-xl text-white outline-none focus:border-orange-500 transition-colors text-sm" />
                   <input placeholder="My Phone?" className="bg-slate-800/50 border border-slate-700 p-4 rounded-xl text-white outline-none focus:border-orange-500 transition-colors text-sm" />
                 </div>
                 <input placeholder="My Email?" className="w-full bg-slate-800/50 border border-slate-700 p-4 rounded-xl text-white outline-none focus:border-orange-500 transition-colors text-sm" />
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                   <select className="bg-slate-800/50 border border-slate-700 p-4 rounded-xl text-slate-300 outline-none focus:border-orange-500 transition-colors text-sm">
                     <option>I Want?</option>
                     <option>2D Animation</option>
                     <option>3D Animation</option>
                     <option>Whiteboard</option>
                   </select>
                   <select className="bg-slate-800/50 border border-slate-700 p-4 rounded-xl text-slate-300 outline-none focus:border-orange-500 transition-colors text-sm">
                     <option>VIDEO TYPE</option>
                     <option>Explainer</option>
                     <option>Promo</option>
                     <option>Commercial</option>
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
             {['Brilliance Behind', 'Video Marketing', 'Cloud Of Creativity', 'Videos As Hook'].map((item, i) => (
               <div key={i} className={`p-6 rounded-2xl cursor-pointer transition-all ${i === 0 ? 'bg-gradient-to-r from-orange-600 to-purple-600 shadow-lg text-white scale-105' : 'bg-slate-900/40 text-slate-400 hover:bg-slate-800'}`}>
                 <h3 className="font-bold text-xl flex items-center justify-between">
                   {item}
                   {i === 0 && <ArrowRight size={20} />}
                 </h3>
               </div>
             ))}
           </div>

           {/* Main Content */}
           <div className="lg:col-span-8">
             <h2 className="text-4xl md:text-6xl font-black text-white mb-8">Animate Your Marketing!</h2>
             <p className="text-lg text-slate-400 leading-relaxed mb-6">
               If you are up to animate your marketing activities, great decision. Video marketing is the way to go now and in the future. Now, what about us? Well, we create videos that boost and convey the goal you aim for. Be it 2D, 3D, Whiteboard animation, Motion graphics, or any type of explainer video, we do it with creativity raining in.
             </p>
             <p className="text-lg text-slate-400 leading-relaxed mb-6">
               Video animation is great for educating and converting prospects. Currently, people prefer to watch videos rather than reading blogs. At Techxide, we help your business reach more audiences and leads by creating personalized animated videos empowering you to market your services better.
             </p>
             <p className="text-lg text-slate-400 leading-relaxed mb-8">
               The brilliance you see on the screen are the millions of pixels that are painted to perfection through a planned process. Our animators, with their artistic touch, create life on the digital canvas.
             </p>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start gap-4">
                    <div className="bg-orange-500/20 p-3 rounded-xl text-orange-400"><Film /></div>
                    <div>
                        <h4 className="font-bold text-white text-lg">Brilliance Behind</h4>
                        <p className="text-slate-400 text-sm">Let the magic begin. What matters is your intent for the video.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="bg-purple-500/20 p-3 rounded-xl text-purple-400"><Layers /></div>
                    <div>
                        <h4 className="font-bold text-white text-lg">Cloud Of Creativity</h4>
                        <p className="text-slate-400 text-sm">Our animators create life on the digital canvas with their artistic touch.</p>
                    </div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* --- PORTFOLIO GRID --- */}
      <section id="portfolio-grid" className="py-16 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto text-center">
           <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Better Now Market With <br/><span className="text-orange-400">Animated Videos Than Never</span></h2>
           <p className="text-slate-400 mb-12">Don’t you ever get stuck in images. Video marketing is essential to get leads dipped in the funnel.</p>
           
           {/* Portfolio Tabs */}
           <div className="flex flex-wrap justify-center gap-4 mb-12">
             {portfolioCategories.map(cat => (
               <button
                 key={cat}
                 onClick={() => setPortfolioTab(cat)}
                 className={`px-6 py-2 rounded-full font-bold transition-all ${portfolioTab === cat ? 'bg-orange-500 text-black shadow-lg scale-105' : 'bg-slate-800 text-slate-400 hover:text-white'}`}
               >
                 {cat}
               </button>
             ))}
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {filteredVideos.map((video, i) => (
               <NeonFrame key={video.id} className="rounded-2xl bg-slate-900/40" radius={16} delay={i * 0.05} variant="glass">
                  <div className="group relative w-full aspect-video overflow-hidden rounded-2xl cursor-pointer">
                    
                    {playingVideo === video.id ? (
                      // Video Player Mode
                      <div className="w-full h-full relative">
                        <iframe 
                          src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`} 
                          title={video.title}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                          allowFullScreen
                        ></iframe>
                        <button 
                          onClick={() => setPlayingVideo(null)}
                          className="absolute top-2 right-2 bg-black/80 p-2 rounded-full text-white hover:text-red-500 transition-colors z-20"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    ) : (
                      // Thumbnail Mode
                      <div onClick={() => setPlayingVideo(video.id)} className="w-full h-full relative">
                        <img 
                          src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`} 
                          alt={video.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" 
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors">
                          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                             <Play fill="white" className="ml-1" />
                          </div>
                        </div>
                        <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                          <span className="text-orange-400 font-bold uppercase tracking-widest text-xs mb-1">{video.cat}</span>
                          <h3 className="text-white font-bold text-lg">{video.title}</h3>
                        </div>
                      </div>
                    )}
                    
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
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Inspiring Animations With <br/>Pocket-Friendly Pricing</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Affordable yet unique animated services that are tailor-made according to your personalized needs. We mean your business.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPackages.map((pkg, i) => (
              <NeonFrame key={i} className={`flex flex-col rounded-3xl ${pkg.recommended ? 'bg-slate-900/90 shadow-[0_0_20px_rgba(249,115,22,0.3)] scale-105 z-10' : 'bg-slate-900/40'}`} radius={24} delay={i*0.2} variant="glass">
                <div className="p-6 flex flex-col h-full">
                  {pkg.recommended && <div className="absolute top-0 right-0 m-4 px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-[10px] font-bold uppercase rounded-full">Best Value</div>}
                  <h3 className="text-lg font-bold text-white mb-1">{pkg.name}</h3>
                  <div className="text-xs font-bold text-slate-500 uppercase mb-4">{pkg.duration}</div>
                  <div className="text-4xl font-black text-white mb-6">${pkg.price}</div>
                  
                  <div className="mb-6 space-y-3">
                    <p className="text-xs font-bold text-orange-400 uppercase">Features</p>
                    {pkg.features.map((f, idx) => (
                      <div key={idx} className="flex items-start text-xs text-slate-300 gap-2">
                        <Check size={14} className="text-orange-500 mt-0.5 shrink-0" /> <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mb-6 space-y-3">
                    <p className="text-xs font-bold text-purple-400 uppercase">More Features</p>
                    {pkg.moreFeatures.map((f, idx) => (
                      <div key={idx} className="flex items-start text-xs text-slate-300 gap-2">
                        <Star size={14} className="text-purple-500 mt-0.5 shrink-0" /> <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-4 border-t border-white/5">
                     <p className="text-xs text-slate-500 mb-4">Get: <span className="text-white">{pkg.formats}</span></p>
                    <div className="flex gap-3">
                        <button className="flex-1 py-3 bg-white text-black font-bold rounded-lg text-sm hover:bg-orange-400 transition-colors">Order Now</button>
                        <button className="flex-1 py-3 bg-transparent border border-slate-600 text-white font-bold rounded-lg text-sm hover:border-orange-500 transition-colors">Chat</button>
                    </div>
                  </div>
                </div>
              </NeonFrame>
            ))}
          </div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="py-16 bg-slate-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <h2 className="text-3xl font-bold text-white mb-4">Explicitly Animated <span className="text-orange-400">Let’s make it big</span></h2>
           <p className="text-slate-400 mb-12">Building your animation idea right and making it a win-win situation for both of us.</p>
           
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
                <div key={i} className="flex flex-col items-center p-6 bg-black/40 rounded-2xl border border-white/5 hover:border-orange-500/50 transition-colors group">
                  <div className="mb-4 text-orange-400 group-hover:scale-110 transition-transform"><s.icon size={32} /></div>
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
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">From Frame To Fame!</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Your Mindset", desc: "The ideas of a client act as a strong base for us to better understand the requirements of the project.", num: "01" },
              { title: "Our Conception", desc: "The stage where our team ponders upon the initial brief given by a client. The entire pre-production planning takes place.", num: "02" },
              { title: "Put into Motion", desc: "With vital pre-production and research, our animators take care of the rest. Putting life into the characters to tell a story.", num: "03" },
              { title: "For Your Satisfaction", desc: "Our policy is to deliver the project to you as soon as possible. Our team will remain in touch until you are satisfied.", num: "04" },
            ].map((step, i) => (
              <NeonFrame key={i} className="rounded-3xl bg-slate-900/30" radius={24} delay={i * 0.2} variant="glass">
                <div className="p-8 h-full relative overflow-hidden group">
                  <div className="text-8xl font-black text-white/5 absolute -top-4 -right-4 group-hover:text-orange-500/10 transition-colors">{step.num}</div>
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