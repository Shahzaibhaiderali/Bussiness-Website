import React, { useState } from 'react';
import { Phone, MapPin, Send, Globe, ChevronDown, ChevronUp, CheckCircle, AlertCircle } from 'lucide-react';
import { NeonFrame } from '../components/NeonFrame';
import { CyberHeroFrame } from '../components/CyberHeroFrame';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => (
  <NeonFrame className="rounded-xl bg-slate-900/30 mb-4" radius={12} variant="glass">
    <button 
      onClick={onClick}
      className="w-full flex justify-between items-center p-6 text-left focus:outline-none group"
    >
      <span className="font-bold text-lg text-white group-hover:text-cyan-400 transition-colors">{question}</span>
      {isOpen ? <ChevronUp className="text-cyan-400" /> : <ChevronDown className="text-slate-500" />}
    </button>
    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
      <p className="px-6 pb-6 text-slate-400 leading-relaxed text-sm md:text-base border-t border-white/5 pt-4 mt-2">
        {answer}
      </p>
    </div>
  </NeonFrame>
);

export const Contact: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    budget: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const faqs = [
    { q: "What is your typical turnaround time?", a: "For logo designs, we typically deliver initial concepts within 48 hours. Web design projects generally take 1-2 weeks depending on complexity." },
    { q: "Do you offer refunds?", a: "Yes, we have a 100% money-back guarantee on logo design packages if you are not satisfied with the initial concepts." },
    { q: "Can you work with my existing brand guidelines?", a: "Absolutely. We can adapt to your existing style guide or help you create a new one from scratch." },
    { q: "How do we communicate during the project?", a: "We provide dedicated project managers. You can reach us via email, phone, or scheduled video calls at your convenience." },
  ];

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Please tell us about your project';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setTimeout(() => {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', subject: '', budget: '', message: '' });
        setErrors({});
      }, 500);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  return (
    <div className="animate-fade-in pt-24 min-h-screen">
      
      {/* Header Section */}
      <section className="relative py-12 md:py-20 px-4 text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <CyberHeroFrame className="mb-8">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
              Connect With Us To Join <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">The Digital Fraternity</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">
              We aspire to revolutionize the digital realm; if you share the same passion like us, let’s talk, and we will ensure a successful beginning of your digital journey.
            </p>
          </CyberHeroFrame>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Contact Info (Left Side - Compact Spacing) */}
          <div className="lg:col-span-5">
            <NeonFrame className="rounded-3xl bg-slate-900/40 p-6 md:p-8 h-fit" radius={24} variant="glass">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
                <Globe className="text-purple-500 w-6 h-6" /> 
                <span>Looking for a digital partner?</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="bg-slate-800/50 p-3 rounded-xl text-cyan-400 border border-slate-700 group-hover:border-cyan-500/50 transition-colors shadow-[0_0_15px_rgba(6,182,212,0.1)] group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1 text-lg">Mailing Address</h3>
                    <p className="text-slate-300 font-medium leading-relaxed">Suite 404, 1129 Northern Blvd,<br/>Manhasset, NY 11030</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                   <div className="bg-slate-800/50 p-3 rounded-xl text-purple-500 border border-slate-700 group-hover:border-purple-500/50 transition-colors shadow-[0_0_15px_rgba(168,85,247,0.1)] group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1 text-lg">Call Us</h3>
                    <div className="space-y-1">
                      <a href="tel:+15167349986" className="block text-slate-300 hover:text-cyan-400 transition-colors font-medium text-lg tracking-wide">+1 516 734 9986</a>
                      <a href="tel:+16464025671" className="block text-slate-300 hover:text-cyan-400 transition-colors font-medium text-lg tracking-wide">+1 646 402 5671</a>
                    </div>
                  </div>
                </div>
              </div>
            </NeonFrame>
          </div>

          {/* Form Side (Right Side) */}
          <div className="lg:col-span-7">
            <NeonFrame className="rounded-3xl bg-slate-900/60 h-full" radius={24} delay={0.5} variant="glass">
              <div className="p-8 md:p-12 h-full">
                {isSubmitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in py-12">
                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">Message Sent!</h3>
                    <p className="text-slate-400 max-w-md mb-8">
                      Thank you for contacting Techxide. We have received your request and a project manager will get back to you within 24 hours.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="px-8 py-3 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-700 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h2 className="text-3xl font-bold text-white mb-2">Send Message</h2>
                      <p className="text-slate-400">Fill out the form below and we will get back to you shortly.</p>
                    </div>
                    
                    <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Name <span className="text-red-500">*</span></label>
                            <input 
                              type="text" 
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              className={`w-full bg-black/40 border rounded-xl px-5 py-4 text-white placeholder:text-slate-600 focus:bg-slate-900/80 outline-none transition-all focus:scale-[1.01] ${errors.name ? 'border-red-500 focus:shadow-[0_0_15px_rgba(239,68,68,0.2)]' : 'border-slate-700 focus:border-cyan-500 focus:shadow-[0_0_15px_rgba(6,182,212,0.1)]'}`} 
                              placeholder="Your Name" 
                            />
                            {errors.name && <p className="text-red-400 text-xs ml-1 flex items-center gap-1"><AlertCircle size={12}/> {errors.name}</p>}
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Email <span className="text-red-500">*</span></label>
                            <input 
                              type="email" 
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className={`w-full bg-black/40 border rounded-xl px-5 py-4 text-white placeholder:text-slate-600 focus:bg-slate-900/80 outline-none transition-all focus:scale-[1.01] ${errors.email ? 'border-red-500 focus:shadow-[0_0_15px_rgba(239,68,68,0.2)]' : 'border-slate-700 focus:border-cyan-500 focus:shadow-[0_0_15px_rgba(6,182,212,0.1)]'}`} 
                              placeholder="you@example.com" 
                            />
                            {errors.email && <p className="text-red-400 text-xs ml-1 flex items-center gap-1"><AlertCircle size={12}/> {errors.email}</p>}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Phone Number</label>
                            <input 
                              type="tel" 
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className="w-full bg-black/40 border border-slate-700 rounded-xl px-5 py-4 text-white placeholder:text-slate-600 focus:border-cyan-500 focus:bg-slate-900/80 outline-none transition-all focus:shadow-[0_0_15px_rgba(6,182,212,0.1)] focus:scale-[1.01]" 
                              placeholder="+1 (555) 000-0000" 
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Subject</label>
                            <input 
                              type="text" 
                              name="subject"
                              value={formData.subject}
                              onChange={handleChange}
                              className="w-full bg-black/40 border border-slate-700 rounded-xl px-5 py-4 text-white placeholder:text-slate-600 focus:border-cyan-500 focus:bg-slate-900/80 outline-none transition-all focus:shadow-[0_0_15px_rgba(6,182,212,0.1)] focus:scale-[1.01]" 
                              placeholder="Project Inquiry" 
                            />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Tell Us Your Budget (Optional)</label>
                        <div className="relative group">
                            <select 
                              name="budget"
                              value={formData.budget}
                              onChange={handleChange}
                              className="w-full bg-black/40 border border-slate-700 rounded-xl px-5 py-4 text-white placeholder:text-slate-600 focus:border-cyan-500 focus:bg-slate-900/80 outline-none transition-all appearance-none cursor-pointer focus:shadow-[0_0_15px_rgba(6,182,212,0.1)] focus:scale-[1.01]"
                            >
                                <option value="" className="bg-slate-900">Select Budget</option>
                                <option className="bg-slate-900">Under $500</option>
                                <option className="bg-slate-900">$500 - $1000</option>
                                <option className="bg-slate-900">$1000 - $5000</option>
                                <option className="bg-slate-900">$5000+</option>
                            </select>
                            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500 group-hover:text-cyan-400 transition-colors">
                                <ChevronDown size={20} />
                            </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Your Message <span className="text-red-500">*</span></label>
                        <textarea 
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5} 
                          className={`w-full bg-black/40 border rounded-xl px-5 py-4 text-white placeholder:text-slate-600 focus:bg-slate-900/80 outline-none transition-all resize-none focus:scale-[1.01] ${errors.message ? 'border-red-500 focus:shadow-[0_0_15px_rgba(239,68,68,0.2)]' : 'border-slate-700 focus:border-cyan-500 focus:shadow-[0_0_15px_rgba(6,182,212,0.1)]'}`} 
                          placeholder="Tell us about your project..."
                        ></textarea>
                        {errors.message && <p className="text-red-400 text-xs ml-1 flex items-center gap-1"><AlertCircle size={12}/> {errors.message}</p>}
                      </div>

                      <button 
                        type="submit"
                        className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-5 rounded-xl transition-all shadow-lg shadow-blue-900/30 flex items-center justify-center gap-3 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] active:scale-95"
                      >
                        <span>Send Message</span>
                        <Send size={20} />
                      </button>
                    </form>
                  </>
                )}
              </div>
            </NeonFrame>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-10 text-center tracking-tight">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <FAQItem 
                        key={index}
                        question={faq.q}
                        answer={faq.a}
                        isOpen={openFAQ === index}
                        onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    />
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};