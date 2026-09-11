import React from 'react';

export const CompanyLogo: React.FC<{ className?: string }> = ({ className = "w-full max-w-[390px]" }) => {
  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`}>
      {/* Ambient subtle warm gold illumination */}
      <div className="absolute inset-0 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <svg
        viewBox="0 0 540 225"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-[0_8px_24px_rgba(0,0,0,0.9)]"
      >
        <defs>
          {/* Master 3D Gold Metallic Face Gradient */}
          <linearGradient id="goldFace3D" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFADB" />
            <stop offset="18%" stopColor="#FDE68A" />
            <stop offset="42%" stopColor="#E5B53A" />
            <stop offset="68%" stopColor="#B37C15" />
            <stop offset="85%" stopColor="#F9DF7B" />
            <stop offset="100%" stopColor="#8C5B0E" />
          </linearGradient>

          {/* 3D Bevel Dark Edge */}
          <linearGradient id="goldBevelDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#573807" />
            <stop offset="40%" stopColor="#3A2402" />
            <stop offset="80%" stopColor="#1E1200" />
            <stop offset="100%" stopColor="#0B0600" />
          </linearGradient>

          {/* 3D Bevel Highlight Rim */}
          <linearGradient id="goldRimHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="35%" stopColor="#FFECA8" />
            <stop offset="70%" stopColor="#DFB244" />
            <stop offset="100%" stopColor="#875A0E" />
          </linearGradient>

          {/* 3D Emerald Green Face Gradient for HAULING */}
          <linearGradient id="greenFace3D" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#6EE7B7" />
            <stop offset="22%" stopColor="#10B981" />
            <stop offset="55%" stopColor="#059669" />
            <stop offset="80%" stopColor="#047857" />
            <stop offset="100%" stopColor="#064E3B" />
          </linearGradient>

          {/* Green 3D Extrusion Bevel */}
          <linearGradient id="greenBevelDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#044729" />
            <stop offset="60%" stopColor="#022E1A" />
            <stop offset="100%" stopColor="#01180D" />
          </linearGradient>

          {/* Heavy 3D Cast Shadow */}
          <filter id="shadow3D" x="-15%" y="-15%" width="130%" height="135%">
            <feDropShadow dx="0" dy="5" stdDeviation="4.5" floodColor="#000000" floodOpacity="0.95" />
            <feDropShadow dx="2" dy="2" stdDeviation="2" floodColor="#261702" floodOpacity="0.6" />
          </filter>
        </defs>

        {/* ============================================================ */}
        {/* GROUP 1: LEFT GRAPHIC EMBLEM (DUMP TRUCK & HOUSE WITH SPROUT) */}
        {/* ============================================================ */}
        <g id="truckAndHouseMaster" filter="url(#shadow3D)">
          
          {/* --- HOUSE STRUCTURE (BEHIND TRUCK) --- */}
          {/* Main House Roof Peak Outer Gable (Metallic Gold) */}
          <path
            d="M142 85L178 44L214 85V144H142V85Z"
            fill="#121215"
            stroke="url(#goldFace3D)"
            strokeWidth="7"
            strokeLinejoin="round"
          />
          {/* Gable Overhang Eaves Rim */}
          <path
            d="M134 91L178 40L222 91"
            fill="none"
            stroke="url(#goldRimHighlight)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* House Facade Dark Texture */}
          <rect x="146" y="88" width="64" height="52" fill="#1C1D22" rx="1" />

          {/* Medallion Base in Gable Peak */}
          <circle cx="178" cy="85" r="9" fill="url(#goldFace3D)" stroke="#573807" strokeWidth="1.5" />
          <circle cx="178" cy="85" r="5" fill="#FFEAA7" />

          {/* Plant Sprout Growing from Gable Peak (3 Green Leaves) */}
          <g id="greenSprout">
            {/* Center Vertical Stem */}
            <path d="M178 80V52" stroke="#10B981" strokeWidth="3" strokeLinecap="round" />
            {/* Top Leaf pointing straight up */}
            <path
              d="M178 52C172 45 178 34 178 34C178 34 184 45 178 52Z"
              fill="#10B981"
              stroke="#047857"
              strokeWidth="1.5"
            />
            {/* Left Leaf curving outward */}
            <path
              d="M177 62C167 56 162 64 162 64C162 64 172 70 177 62Z"
              fill="#10B981"
              stroke="#047857"
              strokeWidth="1.5"
            />
            {/* Right Leaf curving outward */}
            <path
              d="M179 62C189 56 194 64 194 64C194 64 184 70 179 62Z"
              fill="#10B981"
              stroke="#047857"
              strokeWidth="1.5"
            />
          </g>

          {/* 4-Pane Gold Window in House */}
          <g id="goldWindow">
            <rect
              x="160"
              y="98"
              width="36"
              height="36"
              fill="#0A0A0C"
              stroke="url(#goldFace3D)"
              strokeWidth="3.5"
              rx="1.5"
            />
            {/* Vertical Mullion */}
            <line x1="178" y1="98" x2="178" y2="134" stroke="url(#goldFace3D)" strokeWidth="2.5" />
            {/* Horizontal Mullion */}
            <line x1="160" y1="116" x2="196" y2="116" stroke="url(#goldFace3D)" strokeWidth="2.5" />
          </g>

          {/* --- HAULING TRUCK (FRONT & BED) --- */}
          {/* Hydraulic Cylinder (Lifting Bed) */}
          <line x1="102" y1="96" x2="136" y2="128" stroke="#3A2402" strokeWidth="8" strokeLinecap="round" />
          <line x1="102" y1="96" x2="136" y2="128" stroke="url(#goldRimHighlight)" strokeWidth="4.5" strokeLinecap="round" />

          {/* Raised Dump Bed (3D Extrusion) */}
          {/* Dump Bed Rear Shadow */}
          <polygon
            points="58,82 148,34 162,60 74,108"
            fill="#3A2402"
          />
          {/* Dump Bed Outer Face (Metallic Gold) */}
          <polygon
            points="56,80 144,32 158,58 72,106"
            fill="url(#goldFace3D)"
            stroke="#573807"
            strokeWidth="2.5"
          />
          {/* Dump Bed Inner Hollow Area */}
          <polygon
            points="64,82 138,40 148,56 76,98"
            fill="#211502"
          />
          {/* Dump Bed Top Ridge Highlight */}
          <line x1="56" y1="80" x2="144" y2="32" stroke="#FFFADB" strokeWidth="2" strokeLinecap="round" />

          {/* Truck Cab Structure */}
          {/* Cab Extrusion & Face */}
          <path
            d="M18 132L18 96L46 96L62 114V132H18Z"
            fill="url(#goldFace3D)"
            stroke="#573807"
            strokeWidth="2.5"
          />
          {/* Cab Window */}
          <polygon
            points="24 100 42 100 54 114 24 114"
            fill="#09090C"
            stroke="url(#goldRimHighlight)"
            strokeWidth="2"
          />
          {/* Door Handle */}
          <rect x="26" y="118" width="7" height="2" rx="1" fill="#FFF2A8" />
          {/* Front Bumper & Headlight */}
          <rect x="15" y="120" width="5" height="12" rx="2" fill="url(#goldFace3D)" stroke="#573807" strokeWidth="1" />
          <circle cx="17" cy="123" r="2" fill="#FFEAA7" />

          {/* Truck Chassis Base Bar */}
          <rect
            x="16"
            y="130"
            width="134"
            height="15"
            rx="3"
            fill="url(#goldFace3D)"
            stroke="#4A2F03"
            strokeWidth="2"
          />

          {/* Wheels (Front & Tandem Rear) */}
          {/* Front Wheel */}
          <g id="wheelFront">
            <circle cx="38" cy="144" r="16" fill="#0C0C0F" stroke="url(#goldFace3D)" strokeWidth="5" />
            <circle cx="38" cy="144" r="7" fill="url(#goldFace3D)" stroke="#573807" strokeWidth="1" />
            <circle cx="38" cy="144" r="3" fill="#0C0C0F" />
          </g>

          {/* Tandem Rear Wheel 1 */}
          <g id="wheelRear1">
            <circle cx="102" cy="144" r="16" fill="#0C0C0F" stroke="url(#goldFace3D)" strokeWidth="5" />
            <circle cx="102" cy="144" r="7" fill="url(#goldFace3D)" stroke="#573807" strokeWidth="1" />
            <circle cx="102" cy="144" r="3" fill="#0C0C0F" />
          </g>

          {/* Tandem Rear Wheel 2 */}
          <g id="wheelRear2">
            <circle cx="134" cy="144" r="16" fill="#0C0C0F" stroke="url(#goldFace3D)" strokeWidth="5" />
            <circle cx="134" cy="144" r="7" fill="url(#goldFace3D)" stroke="#573807" strokeWidth="1" />
            <circle cx="134" cy="144" r="3" fill="#0C0C0F" />
          </g>
        </g>

        {/* ============================================================ */}
        {/* GROUP 2: 3D METALLIC TYPOGRAPHY (CUSTOM HAULING INC.)        */}
        {/* ============================================================ */}
        <g id="text3DGroup" filter="url(#shadow3D)">
          
          {/* --- "CUSTOM" (3D METALLIC GOLD) --- */}
          {/* 3D Extruded Depth Shadow Layers */}
          <text
            x="215"
            y="98"
            fontFamily="'Montserrat', 'Arial Black', sans-serif"
            fontWeight="900"
            fontSize="58"
            letterSpacing="2"
            fill="url(#goldBevelDark)"
            dx="0"
            dy="5"
          >
            CUSTOM
          </text>
          <text
            x="215"
            y="98"
            fontFamily="'Montserrat', 'Arial Black', sans-serif"
            fontWeight="900"
            fontSize="58"
            letterSpacing="2"
            fill="#4A2E03"
            dx="0"
            dy="3"
          >
            CUSTOM
          </text>
          <text
            x="215"
            y="98"
            fontFamily="'Montserrat', 'Arial Black', sans-serif"
            fontWeight="900"
            fontSize="58"
            letterSpacing="2"
            fill="#80510A"
            dx="0"
            dy="1.5"
          >
            CUSTOM
          </text>
          {/* Main Metallic Gold Face */}
          <text
            x="215"
            y="98"
            fontFamily="'Montserrat', 'Arial Black', sans-serif"
            fontWeight="900"
            fontSize="58"
            letterSpacing="2"
            fill="url(#goldFace3D)"
            stroke="#573807"
            strokeWidth="1.5"
            paintOrder="stroke fill"
          >
            CUSTOM
          </text>

          {/* --- "HAULING" (3D GLOSSY EMERALD GREEN) --- */}
          {/* Green 3D Extrusion Shadow Layers */}
          <text
            x="215"
            y="148"
            fontFamily="'Montserrat', 'Arial Black', sans-serif"
            fontWeight="900"
            fontSize="46"
            letterSpacing="2"
            fill="url(#greenBevelDark)"
            dx="0"
            dy="4.5"
          >
            HAULING
          </text>
          <text
            x="215"
            y="148"
            fontFamily="'Montserrat', 'Arial Black', sans-serif"
            fontWeight="900"
            fontSize="46"
            letterSpacing="2"
            fill="#022817"
            dx="0"
            dy="2.5"
          >
            HAULING
          </text>
          {/* Main Emerald Green Face */}
          <text
            x="215"
            y="148"
            fontFamily="'Montserrat', 'Arial Black', sans-serif"
            fontWeight="900"
            fontSize="46"
            letterSpacing="2"
            fill="url(#greenFace3D)"
            stroke="#03381F"
            strokeWidth="1.5"
            paintOrder="stroke fill"
          >
            HAULING
          </text>

          {/* --- "INC." (3D METALLIC GOLD) --- */}
          {/* INC. Extrusion Shadow */}
          <text
            x="450"
            y="147"
            fontFamily="'Montserrat', 'Arial Black', sans-serif"
            fontWeight="900"
            fontSize="30"
            letterSpacing="1.5"
            fill="url(#goldBevelDark)"
            dx="0"
            dy="3.5"
          >
            INC.
          </text>
          {/* INC. Metallic Gold Face */}
          <text
            x="450"
            y="147"
            fontFamily="'Montserrat', 'Arial Black', sans-serif"
            fontWeight="900"
            fontSize="30"
            letterSpacing="1.5"
            fill="url(#goldFace3D)"
            stroke="#573807"
            strokeWidth="1.2"
            paintOrder="stroke fill"
          >
            INC.
          </text>

          {/* ============================================================ */}
          {/* GROUP 3: "— PROPERTY SOLUTIONS —" BOTTOM GOLD ACCENT         */}
          {/* ============================================================ */}
          {/* Left Gold Horizontal Bar with Bevel */}
          <line
            x1="12"
            y1="180"
            x2="68"
            y2="180"
            stroke="#382202"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <line
            x1="12"
            y1="178"
            x2="68"
            y2="178"
            stroke="url(#goldFace3D)"
            strokeWidth="3.8"
            strokeLinecap="round"
          />

          {/* "PROPERTY SOLUTIONS" Text */}
          <text
            x="78"
            y="185"
            fontFamily="'Montserrat', 'Arial Black', sans-serif"
            fontWeight="900"
            fontSize="21"
            letterSpacing="8"
            fill="url(#goldBevelDark)"
            dx="0"
            dy="2.5"
          >
            PROPERTY SOLUTIONS
          </text>
          <text
            x="78"
            y="185"
            fontFamily="'Montserrat', 'Arial Black', sans-serif"
            fontWeight="900"
            fontSize="21"
            letterSpacing="8"
            fill="url(#goldFace3D)"
            stroke="#573807"
            strokeWidth="1"
          >
            PROPERTY SOLUTIONS
          </text>

          {/* Right Gold Horizontal Bar with Bevel */}
          <line
            x1="468"
            y1="180"
            x2="528"
            y2="180"
            stroke="#382202"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <line
            x1="468"
            y1="178"
            x2="528"
            y2="178"
            stroke="url(#goldFace3D)"
            strokeWidth="3.8"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
};
