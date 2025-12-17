import React, { useState } from 'react';
import { NeonFrame } from '../components/NeonFrame';
import { Play, X, Star } from 'lucide-react';

const categories = ['All', 'Logo Design', 'Web Design', 'Video', 'Digital Marketing'];

// Specific YouTube Videos provided
const videoItems = [
  { id: 'vid1', youtubeId: 'aA8oNZ8qjls', category: 'Video', title: 'Corporate Explainer' },
  { id: 'vid2', youtubeId: 'una04IsJk9k', category: 'Video', title: 'Product Launch' },
  { id: 'vid3', youtubeId: 'ddJGk-yBH8U', category: 'Video', title: 'Educational Series' },
  { id: 'vid4', youtubeId: '4m7enLJDzZo', category: 'Video', title: '3D Product Visualization' },
  { id: 'vid5', youtubeId: 'qFdcyCpnhqQ', category: 'Video', title: 'Brand Identity Reveal' },
  { id: 'vid6', youtubeId: 'nKZ5MLc3z2s', category: 'Video', title: 'Character Story' },
  { id: 'vid7', youtubeId: 's_4mJq8fonU', category: 'Video', title: 'Tech Showcase' },
  { id: 'vid8', youtubeId: 'V0GEu2sGmYQ', category: 'Video', title: 'Service Process' }
];

const items = [
  // Web Design Items (19 images)
  ...Array.from({ length: 19 }).map((_, i) => ({
    id: `w${i + 1}`,
    title: `Web Project ${i + 1}`,
    category: "Web Design",
    image: `assets/WebDesigns/img ${String(i + 1).padStart(2, '0')}.png`,
    youtubeId: null
  })),

  // Video Items added to the main list
  ...videoItems.map(v => ({
    ...v,
    image: `https://img.youtube.com/vi/${v.youtubeId}/maxresdefault.jpg`
  })),
  
  // Digital Marketing Items (9 images)
  ...Array.from({ length: 9 }).map((_, i) => ({
    id: `dm${i + 1}`,
    title: `Marketing Campaign ${i + 1}`,
    category: "Digital Marketing",
    image: `assets/DigitalMarketing/img ${i + 1}.webp`,
    youtubeId: null
  })),
  
  // Logo Items (25)
  ...Array.from({ length: 25 }).map((_, i) => ({
    id: `l${i + 1}`,
    category: 'Logo Design',
    image: `assets/logo images/Logo 1 (${i + 1}).jpg`,
    title: `Brand Identity ${i + 1}`,
    youtubeId: null
  }))
];

export const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const filteredItems = filter === 'All' ? items : items.filter(i => i.category === filter);

  return (
    <div className="animate-fade-in pt-32 pb-20 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Intro Section */}
        <div className="text-center mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[100px] bg-purple-500/20 blur-[50px]"></div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight relative z-10">
            Brace Yourself For <br /> A Visual Treat!
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg relative z-10">
            We have been providing the digital fraternity with creative solutions for over a decade. But don't take our word for it.
          </p>
        </div>

        {/* Secondary Title */}
        <div className="text-center mb-12">
           <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">Transforming The Digital Realm <br/><span className="text-cyan-400">With Sheer Brilliance</span></h2>
           <p className="text-slate-500">Our work doesn't speak, but roars. Devour on our versatile portfolio that will leave you in awe!</p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => { setFilter(cat); setPlayingVideo(null); }}
              className={`px-6 py-2 rounded-full text-sm font-bold tracking-wide transition-all border border-transparent ${
                filter === cat
                  ? 'bg-cyan-500 text-black shadow-[0_0_15px_rgba(6,182,212,0.6)] scale-105'
                  : 'bg-slate-900/60 text-slate-400 hover:border-slate-700 hover:text-white backdrop-blur-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredItems.map((item, idx) => (
            <NeonFrame key={item.id} className="rounded-2xl bg-black/40" delay={idx * 0.05} radius={16} variant="glass">
              <div className="group relative rounded-2xl overflow-hidden cursor-pointer h-full aspect-[4/3]">
                
                {item.youtubeId && playingVideo === item.youtubeId ? (
                   // Video Player Mode
                   <div className="w-full h-full relative">
                     <iframe 
                       src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1&rel=0`} 
                       title={item.title}
                       className="w-full h-full"
                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                       allowFullScreen
                     ></iframe>
                     <button 
                       onClick={(e) => { e.stopPropagation(); setPlayingVideo(null); }}
                       className="absolute top-2 right-2 bg-black/80 p-2 rounded-full text-white hover:text-red-500 transition-colors z-20"
                     >
                       <X size={16} />
                     </button>
                   </div>
                ) : (
                  // Image/Thumbnail Mode
                  <div 
                    className="w-full h-full relative" 
                    onClick={() => item.youtubeId && setPlayingVideo(item.youtubeId)}
                  >
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                    
                    {/* Play Button Overlay for Videos */}
                    {item.youtubeId && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                           <Play fill="white" className="ml-1" />
                        </div>
                      </div>
                    )}

                    {/* Hover Info Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 border border-white/10 m-1 rounded-xl pointer-events-none">
                      <span className="text-cyan-400 font-bold text-xs tracking-widest uppercase mb-2 drop-shadow-[0_0_5px_rgba(6,182,212,0.8)]">{item.category}</span>
                      <h3 className="text-white text-2xl font-bold drop-shadow-md">{item.title}</h3>
                    </div>
                  </div>
                )}

              </div>
            </NeonFrame>
          ))}
        </div>

        {/* Footer Text Section */}
        <div className="mt-20 py-12 border-t border-slate-800 text-center">
            <div className="flex justify-center items-center gap-2 mb-4">
                {[1,2,3,4,5].map(s => <Star key={s} size={24} className="fill-yellow-500 text-yellow-500" />)}
            </div>
            <h3 className="text-3xl font-black text-white mb-2">Folks think we're rad.</h3>
            <p className="text-slate-400 text-lg">We're rated 4.8/5 from 100+ customer reviews.</p>
        </div>

      </div>
    </div>
  );
};