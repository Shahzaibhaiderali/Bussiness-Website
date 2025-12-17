import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingChat: React.FC = () => {
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        alert('Opening Live Chat Widget...');
      }}
      className="fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-gradient-to-r from-primary-600 to-indigo-600 hover:from-primary-500 hover:to-indigo-500 text-white px-6 py-4 rounded-full shadow-[0_0_20px_rgba(79,70,229,0.5)] transition-all hover:scale-105 group animate-float"
    >
      <span className="font-semibold hidden sm:inline">Chat Now</span>
      <MessageCircle className="h-6 w-6 group-hover:rotate-12 transition-transform" />
    </a>
  );
};