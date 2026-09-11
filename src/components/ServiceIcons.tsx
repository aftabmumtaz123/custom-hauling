import React from 'react';

interface IconProps {
  className?: string;
}

// 1. Junk & Debris Removal (Truck with bed and cab)
export const JunkRemovalIcon: React.FC<IconProps> = ({ className = "w-7 h-7" }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4 11H18V21H4V11Z"
      stroke="#F3CA52"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 14H23L27 18V21H18V14Z"
      stroke="#F3CA52"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="9" cy="23" r="2.5" stroke="#F3CA52" strokeWidth="2" />
    <circle cx="23" cy="23" r="2.5" stroke="#F3CA52" strokeWidth="2" />
    <path d="M11.5 23H20.5" stroke="#F3CA52" strokeWidth="2" />
  </svg>
);

// 2. House & Garage Cleanouts (House with double gabled roof)
export const HouseCleanoutIcon: React.FC<IconProps> = ({ className = "w-7 h-7" }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Outer roof peak */}
    <path
      d="M16 4L3 15L6 17.5L16 9L26 17.5L29 15L16 4Z"
      fill="#F3CA52"
    />
    {/* House body */}
    <path
      d="M7 16V27H25V16"
      stroke="#F3CA52"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Door / garage entrance */}
    <path
      d="M12 27V19H20V27"
      stroke="#F3CA52"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 3. Yard Cleanup (Stylized Leaf)
export const YardCleanupIcon: React.FC<IconProps> = ({ className = "w-7 h-7" }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M24 6C13 6 7 13 7 21C7 24 9 26 12 26C19 26 26 19 26 7L24 6Z"
      stroke="#F3CA52"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 26L16 17"
      stroke="#F3CA52"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

// 4. Small Repairs (Hammer as in image (8).png)
export const SmallRepairsIcon: React.FC<IconProps> = ({ className = "w-7 h-7" }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Hammer head at 45 degree angle */}
    <path
      d="M19 6L25 12L23 14L21 12L13 20L11 18L19 10L17 8L19 6Z"
      fill="#F3CA52"
    />
    <path
      d="M22 5L27 10L25 12L20 7L22 5Z"
      stroke="#F3CA52"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Hammer handle extending to bottom-left */}
    <path
      d="M14 17L7 24C6.5 24.5 6.5 25.5 7 26C7.5 26.5 8.5 26.5 9 26L16 19"
      stroke="#F3CA52"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    {/* Claw curve */}
    <path
      d="M22 6C23 4 25 4 26 5"
      stroke="#F3CA52"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

// 5. Pressure Washing (Pressure spray gun with water droplets as in image (8).png)
export const PressureWashingIcon: React.FC<IconProps> = ({ className = "w-7 h-7" }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Gun body & barrel pointing to upper-right */}
    <path
      d="M12 25L15 20L19 17L23 15"
      stroke="#F3CA52"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    {/* Nozzle tip */}
    <path
      d="M23 14L25 13"
      stroke="#F3CA52"
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    {/* Trigger loop */}
    <path
      d="M14 21C16 22 17 21 17 19"
      stroke="#F3CA52"
      strokeWidth="2"
      strokeLinecap="round"
    />
    {/* Spray droplets */}
    <circle cx="27" cy="10" r="1" fill="#F3CA52" />
    <circle cx="29" cy="13" r="1" fill="#F3CA52" />
    <circle cx="28" cy="8" r="1.2" fill="#F3CA52" />
    <circle cx="25" cy="8" r="1" fill="#F3CA52" />
  </svg>
);

// 6. Painting (Paint roller with handle as in image (8).png)
export const PaintingIcon: React.FC<IconProps> = ({ className = "w-7 h-7" }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Roller cylinder */}
    <rect
      x="8"
      y="7"
      width="16"
      height="6"
      rx="2"
      stroke="#F3CA52"
      strokeWidth="2"
    />
    {/* Metal frame arm */}
    <path
      d="M24 10H27V17H16V22"
      stroke="#F3CA52"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Grip handle */}
    <rect
      x="14"
      y="22"
      width="4"
      height="7"
      rx="1.5"
      fill="#F3CA52"
    />
  </svg>
);

// 7. Moving Help (Hand truck dolly carrying box as in image (8).png)
export const MovingHelpIcon: React.FC<IconProps> = ({ className = "w-7 h-7" }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Frame tilted back */}
    <path
      d="M24 7L13 23"
      stroke="#F3CA52"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M22 6L25 9"
      stroke="#F3CA52"
      strokeWidth="2"
      strokeLinecap="round"
    />
    {/* Bottom toe plate */}
    <path
      d="M13 23L7 20"
      stroke="#F3CA52"
      strokeWidth="2"
      strokeLinecap="round"
    />
    {/* Wheel */}
    <circle cx="13" cy="24" r="3" stroke="#F3CA52" strokeWidth="2" />
    {/* Cargo box being wheeled */}
    <rect
      x="14"
      y="12"
      width="8"
      height="8"
      transform="rotate(35 17 15)"
      stroke="#F3CA52"
      strokeWidth="1.8"
      fill="#F3CA52"
      fillOpacity="0.15"
    />
  </svg>
);

// 8. Hauling & Delivery (Isometric cargo cube box as in image (8).png)
export const HaulingDeliveryIcon: React.FC<IconProps> = ({ className = "w-7 h-7" }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16 6L26 11V21L16 26L6 21V11L16 6Z"
      stroke="#F3CA52"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 16L26 11M16 16L6 11M16 16V26"
      stroke="#F3CA52"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function getServiceIcon(serviceId: string, className?: string) {
  switch (serviceId) {
    case 'junk-removal':
      return <JunkRemovalIcon className={className} />;
    case 'cleanouts':
      return <HouseCleanoutIcon className={className} />;
    case 'yard-cleanup':
      return <YardCleanupIcon className={className} />;
    case 'small-repairs':
      return <SmallRepairsIcon className={className} />;
    case 'pressure-washing':
      return <PressureWashingIcon className={className} />;
    case 'painting':
      return <PaintingIcon className={className} />;
    case 'moving-help':
      return <MovingHelpIcon className={className} />;
    case 'hauling-delivery':
    default:
      return <HaulingDeliveryIcon className={className} />;
  }
}
