import React from 'react';

export const GoldHeaderRibbons: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 right-0 h-40 pointer-events-none overflow-hidden select-none z-0">
      {/* Top Left Ribbon Fold */}
      <svg
        className="absolute top-0 left-0 w-36 h-36 drop-shadow-[0_8px_16px_rgba(0,0,0,0.8)]"
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="ribbonLeftMain" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2A8" />
            <stop offset="35%" stopColor="#DFB244" />
            <stop offset="70%" stopColor="#B3801C" />
            <stop offset="100%" stopColor="#7E5611" />
          </linearGradient>
          <linearGradient id="ribbonLeftFacet" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="50%" stopColor="#C8972C" />
            <stop offset="100%" stopColor="#533706" />
          </linearGradient>
        </defs>
        {/* Main corner wedge */}
        <polygon points="0,0 150,0 35,115 0,115" fill="url(#ribbonLeftMain)" />
        {/* Inner fold highlight */}
        <polygon points="0,0 50,0 120,70 35,115" fill="url(#ribbonLeftFacet)" opacity="0.6" />
        {/* Crisp edge highlight */}
        <line x1="0" y1="115" x2="150" y2="0" stroke="#FFF7C2" strokeWidth="1.5" opacity="0.8" />
      </svg>

      {/* Top Right Ribbon Fold */}
      <svg
        className="absolute top-0 right-0 w-36 h-36 drop-shadow-[0_8px_16px_rgba(0,0,0,0.8)]"
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="ribbonRightMain" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFF2A8" />
            <stop offset="35%" stopColor="#DFB244" />
            <stop offset="70%" stopColor="#B3801C" />
            <stop offset="100%" stopColor="#7E5611" />
          </linearGradient>
          <linearGradient id="ribbonRightFacet" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="50%" stopColor="#C8972C" />
            <stop offset="100%" stopColor="#533706" />
          </linearGradient>
        </defs>
        {/* Main corner wedge */}
        <polygon points="160,0 10,0 125,115 160,115" fill="url(#ribbonRightMain)" />
        {/* Inner fold highlight */}
        <polygon points="160,0 110,0 40,70 125,115" fill="url(#ribbonRightFacet)" opacity="0.6" />
        {/* Crisp edge highlight */}
        <line x1="10" y1="0" x2="160" y2="115" stroke="#FFF7C2" strokeWidth="1.5" opacity="0.8" />
      </svg>
    </div>
  );
};
