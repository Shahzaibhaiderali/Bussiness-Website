import React from 'react';

export const CyberBackground: React.FC = () => {
  // Generate random squares for animation
  // Fixed seed-like behavior by using index
  const squares = Array.from({ length: 15 }).map((_, i) => ({
    left: `${(i * 7 + 3) % 100}%`,
    top: `${(i * 13 + 5) % 100}%`,
    animationDelay: `${i * 1.5}s`,
    animationDuration: `${4 + (i % 5)}s`
  }));

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-black">
      {/* Background Gradient - Pure Dark */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050505] to-black"></div>
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage: `linear-gradient(to right, #3b82f6 1px, transparent 1px), linear-gradient(to bottom, #3b82f6 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem',
        }}
      ></div>

      {/* Illuminated Grid Squares */}
      {squares.map((sq, i) => (
        <div 
          key={i}
          className="absolute bg-cyan-500/10 border border-cyan-400/30 shadow-[0_0_15px_rgba(6,182,212,0.2)] animate-pulse"
          style={{
            left: sq.left,
            top: sq.top,
            width: '4rem',
            height: '4rem',
            animationDelay: sq.animationDelay,
            animationDuration: sq.animationDuration,
            opacity: 0
          }}
        >
            <style>{`
                @keyframes flicker-${i} {
                    0%, 100% { opacity: 0; transform: scale(0.95); }
                    50% { opacity: 1; transform: scale(1); }
                }
            `}</style>
            <div style={{
                width: '100%', 
                height: '100%', 
                animation: `flicker-${i} ${sq.animationDuration} ease-in-out infinite`,
                animationDelay: sq.animationDelay
            }}></div>
        </div>
      ))}

      {/* Vertical Scanline */}
      <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent animate-scanline blur-sm"></div>

      {/* Digital Matrix Rain / Falling Data Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-30">
        <defs>
          <linearGradient id="rain-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        
        {/* Random Falling Lines */}
        <rect x="20%" y="-100%" width="1" height="50%" fill="url(#rain-grad)" className="animate-matrix" style={{ animationDuration: '15s', animationDelay: '0s' }} />
        <rect x="50%" y="-100%" width="1" height="30%" fill="url(#rain-grad)" className="animate-matrix" style={{ animationDuration: '12s', animationDelay: '2s' }} />
        <rect x="80%" y="-100%" width="1" height="40%" fill="url(#rain-grad)" className="animate-matrix" style={{ animationDuration: '18s', animationDelay: '5s' }} />
        <rect x="35%" y="-100%" width="1" height="60%" fill="url(#rain-grad)" className="animate-matrix" style={{ animationDuration: '20s', animationDelay: '7s' }} />
        <rect x="65%" y="-100%" width="1" height="25%" fill="url(#rain-grad)" className="animate-matrix" style={{ animationDuration: '10s', animationDelay: '1s' }} />
      </svg>
      
      {/* Floating Orbs for Ambient Light */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[120px]"></div>
    </div>
  );
};