import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NeonFrame } from '../components/NeonFrame';
import { CyberHeroFrame } from '../components/CyberHeroFrame';

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  pricing?: { name: string; price: number; features: string[] }[];
}

export const ServicePage: React.FC<ServicePageProps> = ({ title, subtitle, description, features, pricing }) => {
  return (
    <div className="animate-fade-in pt-24 pb-16 min-h-screen">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 mb-20 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-blue-500/5 blur-[100px] pointer-events-none"></div>
        <div className="text-center max-w-4xl mx-auto relative z-10">
          <CyberHeroFrame className="mb-8">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                {title}
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-white font-bold mb-8">{subtitle}</p>
          </CyberHeroFrame>
          <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-2xl mx-auto">{description}</p>
          <div className="flex justify-center gap-4">
            <Link to="/contact" className="px-10 py-4 bg-white text-black rounded-full font-bold hover:bg-cyan-400 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]">Start Project</Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12 uppercase tracking-widest">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <NeonFrame key={idx} className="rounded-2xl bg-slate-900/50" delay={idx * 0.2} radius={16} variant="glass">
                <div className="flex items-start gap-4 p-6 h-full">
                  <div className="bg-slate-800 p-3 rounded-lg text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.2)]">
                    <Check size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white mb-2">{feature}</h3>
                    <p className="text-sm text-slate-400">Professional execution with industry standards.</p>
                  </div>
                </div>
              </NeonFrame>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing specific to service */}
      {pricing && (
        <section className="max-w-7xl mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-center text-white mb-12 uppercase tracking-widest">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, idx) => (
              <NeonFrame key={idx} className="rounded-3xl bg-slate-900/50" delay={idx * 0.5} radius={24} variant="glass">
                <div className="relative p-8 hover:bg-slate-900/80 transition-all h-full flex flex-col group">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{plan.name}</h3>
                  <div className="text-5xl font-extrabold text-white mb-6">${plan.price}</div>
                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-center text-slate-300 text-sm">
                        <ArrowRight className="w-4 h-4 text-purple-500 mr-2" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="block w-full py-4 text-center rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all">Select Plan</Link>
                </div>
              </NeonFrame>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};