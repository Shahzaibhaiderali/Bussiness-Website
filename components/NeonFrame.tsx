import React from 'react';

interface NeonFrameProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  radius?: number; // Approximate radius in px
  variant?: 'default' | 'glass'; // Style variant
}

export const NeonFrame: React.FC<NeonFrameProps> = ({ 
  children, 
  className = '', 
  delay = 0,
  radius = 24, // Default to roughly rounded-3xl
  variant = 'default'
}) => {
  const bgClass = variant === 'glass' 
    ? 'bg-black/40 backdrop-blur-md border border-white/5 shadow-xl' 
    : '';

  return (
    <div className={`relative group ${bgClass} ${className}`}>
      {/* Animated SVG Border Layer */}
      <div className="absolute inset-0 -m-[1px] rounded-[inherit] pointer-events-none overflow-visible z-0">
        <svg className="w-[calc(100%+2px)] h-[calc(100%+2px)] -ml-[1px] -mt-[1px]" preserveAspectRatio="none">
          <defs>
            <linearGradient id={`neon-gradient-${delay}`} x1="0%" y1="0%" x2="100%" y2="0%">
               <stop offset="0%" stopColor="#06b6d4" /> {/* Cyan */}
               <stop offset="50%" stopColor="#8b5cf6" /> {/* Violet */}
               <stop offset="100%" stopColor="#ec4899" /> {/* Pink */}
            </linearGradient>
            <filter id={`glow-filter-${delay}`} x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          
          {/* Static Border (Dim Base) */}
          <rect 
            x="1" y="1"
            width="calc(100% - 2px)" 
            height="calc(100% - 2px)" 
            rx={radius} 
            ry={radius}
            fill="transparent" 
            stroke="rgba(255, 255, 255, 0.1)" 
            strokeWidth="1"
          />

          {/* Primary Moving Neon Beam */}
          <rect 
            x="1" y="1"
            width="calc(100% - 2px)" 
            height="calc(100% - 2px)" 
            rx={radius} 
            ry={radius}
            fill="transparent" 
            stroke={`url(#neon-gradient-${delay})`} 
            strokeWidth="2"
            strokeLinecap="round"
            className="animate-neon-draw opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            style={{ 
              animationDelay: `${delay}s`,
              filter: `url(#glow-filter-${delay})` 
            }}
          />
        </svg>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 h-full rounded-[inherit]">
        {children}
      </div>
    </div>
  );
};