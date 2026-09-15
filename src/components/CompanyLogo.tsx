import React from 'react';
import logo from '../assets/images/logo_generated.jpg';

export const CompanyLogo: React.FC<{ className?: string }> = ({ className = "w-full max-w-[390px]" }) => {
  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`}>
      <img src={logo} alt="Custom Hauling Logo" className="w-full max-w-[390px] h-auto" />
    </div>
  );
};
