import React from "react";

export const GoldHeaderRibbons: React.FC = () => {
  return (
    <div
      className="
        absolute
        top-0
        left-0
        w-full
        h-[180px]
        overflow-hidden
        pointer-events-none
        select-none
        z-0
      "
      aria-hidden="true"
    >
      <svg
        className="absolute top-0 left-0 w-[280px] h-[190px]"
        viewBox="0 0 280 190"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Main bright gold */}
          <linearGradient
            id="headerGoldMain"
            x1="0"
            y1="0"
            x2="180"
            y2="110"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFF4B0" />
            <stop offset="0.28" stopColor="#FFD95A" />
            <stop offset="0.55" stopColor="#E5B52F" />
            <stop offset="0.82" stopColor="#B87D12" />
            <stop offset="1" stopColor="#805309" />
          </linearGradient>

          {/* Secondary gold */}
          <linearGradient
            id="headerGoldSecondary"
            x1="0"
            y1="0"
            x2="200"
            y2="150"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFE98A" />
            <stop offset="0.35" stopColor="#DCA72A" />
            <stop offset="0.7" stopColor="#A96F0C" />
            <stop offset="1" stopColor="#674207" />
          </linearGradient>

          {/* Dark ribbon */}
          <linearGradient
            id="headerDarkRibbon"
            x1="0"
            y1="0"
            x2="180"
            y2="140"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#181818" />
            <stop offset="0.55" stopColor="#0B0B0B" />
            <stop offset="1" stopColor="#050505" />
          </linearGradient>

          {/* Soft gold glow */}
          <filter id="goldGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Shadow */}
          <filter
            id="ribbonShadow"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feDropShadow
              dx="0"
              dy="4"
              stdDeviation="5"
              floodColor="#000000"
              floodOpacity="0.75"
            />
          </filter>
        </defs>

        {/* =========================================
            BACK DARK DIAGONAL RIBBON
            ========================================= */}

        <polygon
          points="0,0 255,0 0,190"
          fill="url(#headerDarkRibbon)"
          opacity="0.9"
        />

        {/* =========================================
            THICK MAIN GOLD RIBBON
            Matches reference top-left stripe
            ========================================= */}

        <polygon
          points="-20,0 112,0 -20,132"
          fill="url(#headerGoldMain)"
          filter="url(#ribbonShadow)"
        />

        {/* Bright inner edge of main ribbon */}
        <polygon points="-10,0 96,0 -10,106" fill="#FFD95A" opacity="0.45" />

        {/* =========================================
            THIN SECOND GOLD RIBBON
            ========================================= */}

        <polygon
          points="0,91 0,108 145,-37 128,-37"
          fill="url(#headerGoldSecondary)"
          filter="url(#goldGlow)"
        />

        {/* Bright edge */}
        <line
          x1="0"
          y1="91"
          x2="128"
          y2="-37"
          stroke="#FFE58A"
          strokeWidth="1.5"
          opacity="0.85"
        />

        {/* =========================================
            THIRD SUBTLE DARK/GOLD STRIPE
            ========================================= */}

        <polygon
          points="0,145 0,158 185,-27 172,-27"
          fill="#6F4A0A"
          opacity="0.65"
        />

        {/* Thin highlight on third stripe */}
        <line
          x1="0"
          y1="145"
          x2="172"
          y2="-27"
          stroke="#C89525"
          strokeWidth="1"
          opacity="0.65"
        />
      </svg>
    </div>
  );
};
