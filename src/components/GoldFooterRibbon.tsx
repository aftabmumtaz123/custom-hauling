import React from 'react';

export const GoldFooterRibbon: React.FC = () => {
  return (
    <div className="w-full relative h-16 pointer-events-none overflow-hidden select-none">
      <svg
        className="w-full h-full"
        viewBox="0 0 420 80"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="footerGoldWave1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#875E12" />
            <stop offset="25%" stopColor="#F9DF7B" />
            <stop offset="50%" stopColor="#DFB244" />
            <stop offset="75%" stopColor="#FFF2A8" />
            <stop offset="100%" stopColor="#8A6318" />
          </linearGradient>

          <linearGradient id="footerGoldWave2" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#5E3F0A" />
            <stop offset="30%" stopColor="#CCA033" />
            <stop offset="70%" stopColor="#FFEF94" />
            <stop offset="100%" stopColor="#7E5611" />
          </linearGradient>
        </defs>

        {/* Base dark gold wave */}
        <path
          d="M0 45C80 30 180 55 260 40C330 25 380 35 420 30V80H0V45Z"
          fill="url(#footerGoldWave2)"
          opacity="0.8"
        />

        {/* Upper sweeping main gold wave */}
        <path
          d="M0 55C100 28 220 50 320 32C370 22 400 30 420 25V80H0V55Z"
          fill="url(#footerGoldWave1)"
        />

        {/* Highlight ridge line */}
        <path
          d="M0 55C100 28 220 50 320 32C370 22 400 30 420 25"
          stroke="#FFFADC"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </div>
  );
};
