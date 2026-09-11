import React from 'react';

export const CompanyLogo: React.FC<{ className?: string }> = ({ className = "w-full max-w-[390px]" }) => {
  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`}>
      <img src="../../public/logo_generated.jpg" alt="Custom Hauling Logo" className="w-full max-w-[390px] h-auto" />
    </div>
  );
};
