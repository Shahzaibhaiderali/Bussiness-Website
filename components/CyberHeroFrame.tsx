import React from 'react';

interface CyberHeroFrameProps {
  children: React.ReactNode;
  className?: string;
}

export const CyberHeroFrame: React.FC<CyberHeroFrameProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative p-6 md:p-12 ${className}`}>
      {/* SVG Container for the Frame */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            {/* Gradients */}
            <linearGradient id="grad-pink" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ec4899" /> {/* Pink */}
              <stop offset="100%" stopColor="#d946ef" /> {/* Fuchsia */}
            </linearGradient>
            
            <linearGradient id="grad-cyan" x1="0%" y1="100%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" /> {/* Cyan */}
              <stop offset="100%" stopColor="#3b82f6" /> {/* Blue */}
            </linearGradient>

            {/* Enhanced Glow Filters */}
            <filter id="glow-strong-pink" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            
            <filter id="glow-strong-cyan" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* 
            Pink Frame (Top-Right Bracket) 
            Starts Left-Top -> Top-Right -> Right-Bottom
          */}
          <path 
            d="M 50 4 L 99% 4 L 99% 70%" 
            fill="none" 
            stroke="url(#grad-pink)" 
            strokeWidth="3" 
            strokeLinecap="round"
            style={{ filter: 'url(#glow-strong-pink)' }}
            className="animate-neon-draw"
          />
           {/* Secondary Pink Line (Inner echo) */}
          <path 
            d="M 100 12 L 98% 12 L 98% 60%" 
            fill="none" 
            stroke="url(#grad-pink)" 
            strokeWidth="1" 
            strokeLinecap="round"
            className="opacity-60 animate-neon-draw"
            style={{ animationDelay: '0.2s' }}
          />

          {/* 
            Cyan Frame (Bottom-Left Bracket) 
            Starts Right-Bottom -> Bottom-Left -> Left-Top
          */}
          <path 
            d="M 95% 99% L 1% 99% L 1% 30%" 
            fill="none" 
            stroke="url(#grad-cyan)" 
            strokeWidth="3" 
            strokeLinecap="round"
            style={{ filter: 'url(#glow-strong-cyan)' }}
            className="animate-neon-draw-reverse"
          />
           {/* Secondary Cyan Line (Inner echo) */}
          <path 
             d="M 90% 97% L 2% 97% L 2% 40%" 
            fill="none" 
            stroke="url(#grad-cyan)" 
            strokeWidth="1" 
            strokeLinecap="round"
            className="opacity-60 animate-neon-draw-reverse"
            style={{ animationDelay: '0.2s' }}
          />
        </svg>
      </div>
      
      {/* Content */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
};