import React, { useState } from 'react';
import { Check, ArrowRight, Zap, Star, Layout, PenTool, Edit3, BookOpen, Send, ChevronDown, CheckCircle, Users, DollarSign, Clock, Shield, MousePointer, FileText, Feather } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NeonFrame } from '../components/NeonFrame';
import { CyberHeroFrame } from '../components/CyberHeroFrame';

export const Copywriting: React.FC = () => {
  // --- Configurator State ---
  const [inquiry, setInquiry] = useState({
    serviceType: 'Digital Content Writing Services',
    specificService: [] as string[],
    goal: 'Boost Website Traffic',
    wordCount: '500 - 1000',
    budget: '$150 - $300',
    name: '',
    email: '',
    phone: '',
    country: ''
  });

  const toggleSelection = (value: string) => {
    setInquiry(prev => ({
      ...prev,
      specificService: prev.specificService.includes(value) 
        ? prev.specificService.filter(item => item !== value)
        : [...prev.specificService, value]
    }));
  };

  const servicesList = [
    'Website Content', 'Blog Writing', 'Email Marketing', 'EBook Writing',
    'Copywriting for Ads', 'Press Releases', 'Case Study', 'Product Descriptions'
  ];

  const pricingPackages = [
    {
      name: "Basic Content",
      price: 30,
      features: [
        "Blog Style SEO Based Writing",
        "Generic Content",
        "Any Language",
        "Upto 1000 Word Count per day",
        "2 - 4 Year Experience Writer",
        "Key Account Manager"
      ]
    },
    {
      name: "Standard Content",
      price: 60,
      features: [
        "Blog Style SEO Based Writing",
        "Industry-Specific Content",
        "Any Language",
        "Upto 1200 Word Count per day",
        "5 - 9 Year Experience Writer",
        "Key Account Manager"
      ],
      recommended: true
    },
    {
      name: "Premium Content",
      price: 120,
      features: [
        "Blog Style SEO Based Writing",
        "Industry-Specific Content",
        "Product Description & Press Release",
        "Any Language",
        "Upto 1500 Word Count per day",
        "5 - 9 Year Experience Writer",
        "Key Account Manager"
      ]
    },
    {
      name: "Gold Content",
      price: 250,
      features: [
        "White Page / Book Writing",
        "Blog Style SEO Based Writing",
        "Industry-Specific Content",
        "Product Description & Press Release",
        "Any Language",
        "Upto 1500 Word Count per day",
        "10+ Year Experience Writer",
        "Key Account Manager"
      ]
    }
  ];

  return (
    <div className="animate-fade-in pt-24 min-h-screen">
      
      {/* --- HERO SECTION WITH CONFIGURATOR --- */}
      <section className="relative min-h-screen flex items-center py-16 px-4">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-pink-900/20 blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-purple-900/20 blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative z-10">
          
          {/* Left Text */}
          <div className="sticky top-24">
            <CyberHeroFrame>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                Content That <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Clicks</span> In<br/>
                A Few Clicks!
              </h1>
            </CyberHeroFrame>
            <p className="text-xl text-slate-300 mb-8 font-medium pl-6 border-l-4 border-pink-500">
              Compelling content always wins the game. We turn random words into verbal masterpieces.
            </p>
            <div className="flex gap-4 pl-6">
              <button onClick={() => document.getElementById('strategy-form')?.scrollIntoView({ behavior: 'smooth'})} className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-pink-400 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                Start Writing
              </button>
            </div>
          </div>

          {/* Right Configurator Form */}
          <NeonFrame className="rounded-3xl bg-black/80 backdrop-blur-xl border border-slate-800" radius={24} variant="glass">
            <div className="p-6 md:p-8 max-h-[85vh] overflow-y-auto custom-scrollbar">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2 sticky top-0 bg-black/90 p-2 z-10 rounded-lg">
                <span className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-black text-sm font-bold">1</span>
                Tell Us What You Need
              </h3>

              <div className="space-y-6">
                
                {/* Fixed Service */}
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">I Am Seeking</label>
                  <div className="w-full bg-slate-900/80 border border-pink-500/50 text-pink-400 font-bold px-4 py-3 rounded-xl">
                    Digital Content Writing Services
                  </div>
                </div>

                {/* Specific Services */}
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">Service Type (Select Multiple)</label>
                  <div className="flex flex-wrap gap-2">
                    {servicesList.map(srv => (
                      <button
                        key={srv}
                        onClick={() => toggleSelection(srv)}
                        className={`py-2 px-3 rounded-lg text-xs font-bold border transition-all ${inquiry.specificService.includes(srv) ? 'bg-pink-500/20 border-pink-400 text-pink-400' : 'bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-500'}`}
                      >
                        {srv}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Goal */}
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">My Goal is to</label>
                  <div className="flex flex-col gap-2">
                    {['Boost Website Traffic', 'Increase Sales and Conversions', 'Boost Engagement Rates', 'Lower Bounce Rates', 'Create Content Marketing Campaigns'].map(opt => (
                      <button
                        key={opt}
                        onClick={() => setInquiry({...inquiry, goal: opt})}
                        className={`py-3 px-4 rounded-xl text-sm font-bold border text-left transition-all ${inquiry.goal === opt ? 'bg-purple-600 border-purple-400 text-white' : 'bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-500'}`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Word Count & Budget */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">Word Count</label>
                    <select className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-pink-500 appearance-none" onChange={(e) => setInquiry({...inquiry, wordCount: e.target.value})}>
                      <option>500 - 1000</option>
                      <option>1000 - 1500</option>
                      <option>1500 - 2000</option>
                      <option>2000 - 2500</option>
                      <option>2500+</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">Budget</label>
                    <select className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-pink-500 appearance-none" onChange={(e) => setInquiry({...inquiry, budget: e.target.value})}>
                      <option>$150 - $300</option>
                      <option>$300 - $500</option>
                      <option>$500 - $1000</option>
                      <option>$1000+</option>
                    </select>
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="grid grid-cols-2 gap-4">
                   <input type="text" placeholder="Name" className="bg-black/40 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-pink-500" />
                   <input type="text" placeholder="Phone" className="bg-black/40 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-pink-500" />
                   <input type="email" placeholder="Email" className="col-span-2 bg-black/40 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-pink-500" />
                   <input type="text" placeholder="Country" className="col-span-2 bg-black/40 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-pink-500" />
                </div>

                <button className="w-full py-4 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-bold rounded-xl shadow-lg transition-all flex justify-center items-center gap-2">
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
                 <h4 className="text-pink-400 font-bold tracking-widest uppercase mb-3">Content Strategy</h4>
                 <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Connect With A <br/>Content Strategist</h2>
                 <p className="text-slate-400 text-base mb-6 leading-relaxed">
                   Our Content Strategists will help you in writing marvelous content for your business. Just fill in the details and our content geek will get back to you.
                 </p>
                 <div className="flex items-center gap-4 text-white font-bold">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400"><Check size={18} /></div>
                    <span className="text-sm">Free Audit</span>
                    <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400"><Zap size={18} /></div>
                    <span className="text-sm">SEO Tips</span>
                 </div>
               </div>
               
               <form className="space-y-3 bg-black/30 p-6 rounded-3xl border border-white/5">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                   <input placeholder="My Name?" className="bg-slate-800/50 border border-slate-700 p-4 rounded-xl text-white outline-none focus:border-pink-500 transition-colors text-sm" />
                   <input placeholder="My Phone?" className="bg-slate-800/50 border border-slate-700 p-4 rounded-xl text-white outline-none focus:border-pink-500 transition-colors text-sm" />
                 </div>
                 <input placeholder="My Email?" className="w-full bg-slate-800/50 border border-slate-700 p-4 rounded-xl text-white outline-none focus:border-pink-500 transition-colors text-sm" />
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                   <select className="bg-slate-800/50 border border-slate-700 p-4 rounded-xl text-slate-300 outline-none focus:border-pink-500 transition-colors text-sm">
                     <option>I Want?</option>
                     <option>Website Content</option>
                     <option>Blog Writing</option>
                     <option>Copywriting</option>
                   </select>
                   <select className="bg-slate-800/50 border border-slate-700 p-4 rounded-xl text-slate-300 outline-none focus:border-pink-500 transition-colors text-sm">
                     <option>Content Type</option>
                     <option>SEO Optimized</option>
                     <option>Creative</option>
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
             {['Thought Plotting', 'Write To Rank', 'Conveying With Flow', 'Basket Of Content'].map((item, i) => (
               <div key={i} className={`p-6 rounded-2xl cursor-pointer transition-all ${i === 0 ? 'bg-gradient-to-r from-pink-600 to-purple-600 shadow-lg text-white scale-105' : 'bg-slate-900/40 text-slate-400 hover:bg-slate-800'}`}>
                 <h3 className="font-bold text-xl flex items-center justify-between">
                   {item}
                   {i === 0 && <ArrowRight size={20} />}
                 </h3>
               </div>
             ))}
           </div>

           {/* Main Content */}
           <div className="lg:col-span-8">
             <h2 className="text-4xl md:text-6xl font-black text-white mb-8">Copywriting That Smells Success</h2>
             <p className="text-lg text-slate-400 leading-relaxed mb-6">
               Compelling content always wins the game for digital business. Popular jargons, right choice of words, swift read flow, and conveying the right message. This is how our content production strategy works. We realize the power of great content, but the avid question is - do you realize the importance of content?
             </p>
             <p className="text-lg text-slate-400 leading-relaxed mb-6">
               Content has always been the king, and will forever remain one. An interesting fact about human nature is that it is attracted to stories - anything written in a narrative style compels the reader. The good news is that our wordsmiths are finest when it comes to storytelling.
             </p>
             <p className="text-lg text-slate-400 leading-relaxed mb-8">
               The copywriters at Techxide create well-researched, thoroughly analyzed, and intriguingly attractive content. Our wordsmiths are capable of optimizing the content for the medium it is being put on. You can trust us with your content related needs because we are known for creating masterpieces out of scratch!
             </p>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start gap-4">
                    <div className="bg-pink-500/20 p-3 rounded-xl text-pink-400"><Edit3 /></div>
                    <div>
                        <h4 className="font-bold text-white text-lg">Thought Plotting</h4>
                        <p className="text-slate-400 text-sm">Words without a thought and travelers without a destination are always bound to get lost.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="bg-purple-500/20 p-3 rounded-xl text-purple-400"><BookOpen /></div>
                    <div>
                        <h4 className="font-bold text-white text-lg">Write To Rank</h4>
                        <p className="text-slate-400 text-sm">We focus on keywords and SEO strategies to make sure your content is seen.</p>
                    </div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* --- PRICING SECTION --- */}
      <section className="py-16 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Inspiring Digital Content With <br/>Pocket-Friendly Pricing</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Affordable yet creative content writing services that are tailor-made according to your personalized needs. We mean your business.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPackages.map((pkg, i) => (
              <NeonFrame key={i} className={`flex flex-col rounded-3xl ${pkg.recommended ? 'bg-slate-900/90 shadow-[0_0_20px_rgba(236,72,153,0.3)] scale-105 z-10' : 'bg-slate-900/40'}`} radius={24} delay={i*0.2} variant="glass">
                <div className="p-6 flex flex-col h-full">
                  {pkg.recommended && <div className="absolute top-0 right-0 m-4 px-3 py-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-[10px] font-bold uppercase rounded-full">Best Value</div>}
                  <h3 className="text-lg font-bold text-white mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-black text-white mb-6">${pkg.price}</div>
                  
                  <div className="mb-6 space-y-3">
                    <p className="text-xs font-bold text-pink-400 uppercase">Features</p>
                    {pkg.features.map((f, idx) => (
                      <div key={idx} className="flex items-start text-xs text-slate-300 gap-2">
                        <Check size={14} className="text-pink-500 mt-0.5" /> <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-6 flex gap-3">
                    <button className="flex-1 py-3 bg-white text-black font-bold rounded-lg text-sm hover:bg-pink-400 transition-colors">Order Now</button>
                    <button className="flex-1 py-3 bg-transparent border border-slate-600 text-white font-bold rounded-lg text-sm hover:border-pink-500 transition-colors">Chat</button>
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
           <h2 className="text-3xl font-bold text-white mb-4">We’re Allergic To Bad Grammar <span className="text-red-500">& Dead Content</span></h2>
           <p className="text-slate-400 mb-12">You can’t survive with poor content, neither can we.</p>
           
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
                <div key={i} className="flex flex-col items-center p-6 bg-black/40 rounded-2xl border border-white/5 hover:border-pink-500/50 transition-colors group">
                  <div className="mb-4 text-pink-400 group-hover:scale-110 transition-transform"><s.icon size={32} /></div>
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
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Slay The Competition With Words!</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Your Words", desc: "Listening to your needs helps us understand your content requirements. We extract the information to devise an effective content strategy.", num: "01" },
              { title: "Ideated", desc: "Our copy is always written for the audience, which makes it more efficient in generating high ROI through content writing.", num: "02" },
              { title: "Into expression", desc: "Strategy gives the direction, but the copy takes you to the destination. Our writers use storytelling to add emotion and purpose.", num: "03" },
              { title: "Within a blink", desc: "We deliver content strategies, optimized for different digital platforms and that too in a concise time. We don't like to keep clients waiting.", num: "04" },
            ].map((step, i) => (
              <NeonFrame key={i} className="rounded-3xl bg-slate-900/30" radius={24} delay={i * 0.2} variant="glass">
                <div className="p-8 h-full relative overflow-hidden group">
                  <div className="text-8xl font-black text-white/5 absolute -top-4 -right-4 group-hover:text-pink-500/10 transition-colors">{step.num}</div>
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