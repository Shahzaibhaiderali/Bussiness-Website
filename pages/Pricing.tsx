import React, { useState } from 'react';
import { Check, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NeonFrame } from '../components/NeonFrame';

type Package = {
  name: string;
  price: string;
  features: string[];
  deliverables?: string[];
  moreFeatures?: string[];
  formats?: string;
  recommended?: boolean;
};

const pricingData: Record<string, Package[]> = {
  "Logo Design": [
    {
      name: "Basic Logo",
      price: "$49",
      features: ["2 Logo Design Concepts", "By 1 Experienced Designer", "4 Free Revisions", "Dedicated Project Manager", "24 - 48 Hours Delivery"],
      deliverables: ["1 Finalized Logo", "100% Ownership", "No Print Ready .PDF File", "No Vector .EPS File", "No Editable Vector .AI File"]
    },
    {
      name: "Standard Logo",
      price: "$99",
      features: ["4 Logo Design Concepts", "By 3 Experienced Designers", "8 Free Revisions", "Dedicated Project Manager", "24 - 48 Hours Delivery"],
      deliverables: ["1 Finalized Logo", "100% Ownership", "Online .JPEG & .PNG Files", "Print Ready .PDF File", "No Vector .EPS File", "No Editable Vector .AI File"]
    },
    {
      name: "Prime Logo",
      price: "$149",
      features: ["6 Logo Design Concepts", "By 5 Experienced Designers", "Unlimited Revisions", "Dedicated Project Manager", "24 - 48 Hours Delivery"],
      deliverables: ["Finalized Logo", "100% Ownership", "Online .JPEG & .PNG Files", "Print Ready .PDF Files", "Vector .EPS File", "No Editable Vector AI File"]
    },
    {
      name: "Deluxe Logo",
      price: "$199",
      features: ["Unlimited Logo Concepts", "By 8 Experienced Designers", "Unlimited Revisions", "Dedicated Project Manager", "24 - 48 Hours Delivery"],
      deliverables: ["1 Finalized Logo", "100% Ownership", "Online .JPEG & .PNG Files", "Print Ready .PDF Files", "Vector .EPS File", "Editable Vector .AI File"]
    }
  ],
  "Branding": [
    {
      name: "Starter Branding",
      price: "$99",
      features: ["Business Card Design", "Letter head Design", "Envelope Design", "MS Word Letterhead", "Email Signature Design", "Invoice Design", "Facebook Banner Design", "Youtube Banner Design", "Twitter Banner Design", "Linkedin Banner Design", "Logo Watermark"]
    },
    {
      name: "Essential Branding",
      price: "$139",
      features: ["Business Card Design", "Letter head Design", "Envelope Design", "MS Word Letterhead", "Email Signature Design", "Invoice Design", "Facebook Banner Design", "Youtube Banner Design", "Twitter Banner Design", "Linkedin Banner Design", "Logo Watermark", "Favicon Design", "Polo/T-Shirt Design", "Cap/Hat Design"]
    },
    {
      name: "Professional Branding",
      price: "$249",
      features: ["Business Card Design", "Letter head Design", "Envelope Design", "MS Word Letterhead", "Email Signature Design", "Invoice Design", "Facebook Banner Design", "Youtube Banner Design", "Twitter Banner Design", "Linkedin Banner Design", "Logo Watermark", "Favicon Design", "Polo/T-Shirt Design", "Cap/Hat Design", "Bag Design", "Signage Design", "Flyer Design"]
    },
    {
      name: "Corporate Branding",
      price: "$299",
      features: ["Business Card Design", "Letter head Design", "Envelope Design", "MS Word Letterhead", "Email Signature Design", "Invoice Design", "Facebook Banner Design", "Youtube Banner Design", "Twitter Banner Design", "Linkedin Banner Design", "Logo Watermark", "Favicon Design", "Polo/T-Shirt Design", "Cap/Hat Design", "Bag Design", "Signage Design", "Flyer Design", "Car Wrap/Vinyl Design", "PPT Design", "Magnet Design", "Door Sign Design", "Menu Design", "Mug/Cup Design"]
    }
  ],
  "Website": [
    {
      name: "HTML Website Package",
      price: "$499",
      features: ["Product/Service Page", "Portfolio/Gallery Page", "5 Pages Static Website", "W3C Certified HTML", "JQuery Slider Banner", "Mobile Responsive Layout", "Home Page Layout", "Company Profile Page", "Contact Us Page", "Lead Inquiry Form", "Website Favicon Design", "5 Web Page Banners Design", "5 Royalty-Free Stock Images", "Advanced UI/UX Effects"]
    }
  ],
  "Video Animation": [
    {
      name: "Basic Animation",
      price: "$499",
      features: ["60 seconds", "Custom Work", "Script Writing", "Detail Storyboard", "Professional Voice over", "Impressive Animation", "Royalty free BG & SFX"],
      moreFeatures: ["File Delivered in HD 720p", "3 round of revisions in each phase", "4 weeks Deadline", "100% satisfaction", "100% Ownership Rights"],
      formats: "MP4"
    },
    {
      name: "Standard Animation",
      price: "$799",
      features: ["60 seconds", "Custom Work", "Script Writing", "storyboarding", "Detail illustrations", "Professional Voice over", "Impressive Animation", "Royalty free BG & SFX"],
      moreFeatures: ["File Delivered in HD 720p", "3 round of revisions in each phase", "3 weeks Deadline", "100% satisfaction", "100% Ownership Rights"],
      formats: "MP4, MOV"
    },
    {
      name: "Premium Animation",
      price: "$999",
      features: ["60 seconds", "Custom Work", "Script Writing", "storyboarding", "Detail illustrations", "Professional Voice over", "Impressive Animation", "Royalty free BG & SFX"],
      moreFeatures: ["File Delivered in HD 1080p", "Multiple Revisions in each phase", "2 weeks Deadline", "Dedicated Project Manager", "100% satisfaction", "100% Ownership Rights"],
      formats: "MP4, MOV, WAV"
    },
    {
      name: "Gold Animation",
      price: "$1499",
      features: ["60 seconds", "Custom Work", "2 Concepts + premium scriptwriting", "storyboarding", "Detail illustrations", "Professional Voice over", "Impressive Animation", "Royalty free BG & SFX"],
      moreFeatures: ["File Delivered in HD 1080p", "Unlimited revisions", "6 weeks Deadline", "Dedicated Project Manager", "100% satisfaction", "100% Ownership Rights", "Source File"],
      formats: "MP4, MOV, WAV, GIF"
    }
  ]
};

export const Pricing: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Logo Design");

  return (
    <div className="animate-fade-in pt-32 pb-20 min-h-screen">
       <div className="max-w-7xl mx-auto px-4">
        
        {/* Intro */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase">Inspiring Logo Designs With <br/>Pocket-Friendly Pricing</h1>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">Affordable yet unique digital creative and design services that are tailor-made according to your personalized needs. We mean your business.</p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {Object.keys(pricingData).map(cat => (
             <button
               key={cat}
               onClick={() => setActiveTab(cat)}
               className={`px-8 py-3 rounded-full font-bold transition-all border ${activeTab === cat ? 'bg-cyan-500 text-black border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.5)] scale-105' : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-white hover:border-slate-500'}`}
             >
               {cat}
             </button>
          ))}
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {pricingData[activeTab].map((pkg, idx) => (
            <NeonFrame key={idx} className="flex flex-col rounded-3xl bg-slate-900/40" delay={idx * 0.1} radius={24} variant="glass">
              <div className="p-6 flex flex-col h-full hover:bg-white/5 transition-colors duration-300">
                <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                <div className="text-4xl font-extrabold text-cyan-400 mb-6">{pkg.price}</div>
                
                <div className="h-[300px] overflow-y-auto custom-scrollbar pr-2 mb-6">
                    <p className="text-xs font-bold text-slate-500 uppercase mb-3 sticky top-0 bg-slate-900/90 py-1">Features</p>
                    <ul className="space-y-3 mb-6">
                    {pkg.features.map((f, i) => (
                        <li key={i} className="flex items-start text-slate-300 text-xs">
                        <Check className="w-4 h-4 text-cyan-500 mr-2 shrink-0" />
                        <span>{f}</span>
                        </li>
                    ))}
                    </ul>

                    {pkg.deliverables && (
                        <>
                        <p className="text-xs font-bold text-slate-500 uppercase mb-3 sticky top-0 bg-slate-900/90 py-1">What You Get</p>
                        <ul className="space-y-3 mb-6">
                            {pkg.deliverables.map((f, i) => (
                            <li key={i} className="flex items-start text-slate-300 text-xs">
                                <Star className="w-4 h-4 text-purple-500 mr-2 shrink-0" />
                                <span>{f}</span>
                            </li>
                            ))}
                        </ul>
                        </>
                    )}

                     {pkg.moreFeatures && (
                        <>
                        <p className="text-xs font-bold text-slate-500 uppercase mb-3 sticky top-0 bg-slate-900/90 py-1">More Features</p>
                        <ul className="space-y-3 mb-6">
                            {pkg.moreFeatures.map((f, i) => (
                            <li key={i} className="flex items-start text-slate-300 text-xs">
                                <Star className="w-4 h-4 text-purple-500 mr-2 shrink-0" />
                                <span>{f}</span>
                            </li>
                            ))}
                        </ul>
                        </>
                    )}

                    {pkg.formats && (
                        <div className="text-xs text-slate-400 border-t border-slate-700 pt-3">
                            <span className="font-bold text-white">Formats:</span> {pkg.formats}
                        </div>
                    )}
                </div>

                <div className="mt-auto flex gap-3">
                    <Link to="/contact" className="flex-1 py-3 bg-white text-black text-center text-sm font-bold rounded-lg hover:bg-cyan-400 transition-colors">Order Now</Link>
                    <Link to="/contact" className="flex-1 py-3 border border-slate-600 text-white text-center text-sm font-bold rounded-lg hover:border-cyan-400 transition-colors">Chat</Link>
                </div>
              </div>
            </NeonFrame>
          ))}
        </div>

        {/* Award Winning Package Section */}
        <NeonFrame className="rounded-3xl bg-gradient-to-r from-purple-900/40 to-indigo-900/40 mb-12" radius={24} variant="glass">
            <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
                <div className="inline-block px-4 py-1 bg-yellow-500/20 text-yellow-400 border border-yellow-500/50 rounded-full text-xs font-bold uppercase mb-4">Ultimate Choice</div>
                <h3 className="text-3xl md:text-5xl font-black text-white mb-2">Award Winning Package</h3>
                <div className="text-5xl md:text-6xl font-black text-cyan-400 mb-6">$399</div>
                <p className="text-slate-300 mb-8 font-medium">So, you don't want anything but the best; well, don't worry, at Techxide, you only get the best!</p>
                <Link to="/contact" className="inline-block px-10 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold rounded-xl shadow-lg hover:scale-105 transition-transform">
                    Order Premium Now
                </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                "Designed by Art Directors (20+ Years Exp)", "Unlimited Revisions", "100% Ownership", "24 Hours Delivery",
                "Ai, PDF, EPS, JPG, PNG", "Business Card Design", "Flyer Design", "Social Covers Addon",
                "Font Names & Color Codes", "100% Unique Design Guarantee", "Black and White version Files"
                ].map((f, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-white">
                    <div className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 shrink-0"><Check size={14}/></div>
                    {f}
                </div>
                ))}
            </div>
            </div>
        </NeonFrame>

        {/* Branding Banner */}
        <div className="text-center py-12 bg-slate-900/30 rounded-3xl border border-white/5">
           <h2 className="text-3xl font-bold text-white mb-4">Branding Businesses Is Our <br/>Passion And Profession</h2>
           <p className="text-slate-400 max-w-2xl mx-auto mb-8">We’ve been building brands from scratch. Leave all your design needs on us and get ready to see what great designing feels and looks like.</p>
        </div>

      </div>
    </div>
  );
};