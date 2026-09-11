import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, UserPlus } from 'lucide-react';
import { CompanyLogo } from './components/CompanyLogo';
import { GoldHeaderRibbons } from './components/GoldHeaderRibbons';
import { GoldFooterRibbon } from './components/GoldFooterRibbon';
import { getServiceIcon } from './components/ServiceIcons';
import { SERVICES, ServiceItem } from './data/services';
import { ServiceModal } from './components/ServiceModal';
import { TextModal } from './components/TextModal';
import { Toast } from './components/Toast';
import { downloadVCard } from './utils/vcard';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isTextModalOpen, setIsTextModalOpen] = useState(false);
  const [textModalMessage, setTextModalMessage] = useState<string>('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<'success' | 'info'>('success');

  const showToast = (msg: string, type: 'success' | 'info' = 'success') => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const handleCall = () => {
    showToast("Calling (619) 634-5953...", "info");
    window.location.href = "tel:6196345953";
  };

  const handleOpenText = (initialMsg?: string) => {
    if (initialMsg) {
      setTextModalMessage(initialMsg);
    } else {
      setTextModalMessage("Hi Custom Hauling, I need an estimate for property services in San Diego.");
    }
    setIsTextModalOpen(true);
  };

  const handleGetDirections = () => {
    showToast("Opening San Diego, CA service area map...", "info");
    const mapsUrl = "https://www.google.com/maps/search/?api=1&query=San+Diego,+CA";
    window.open(mapsUrl, "_blank", "noopener,noreferrer");
  };

  const handleSaveContact = () => {
    try {
      downloadVCard();
      showToast("Custom Hauling Inc. contact card downloaded!", "success");
    } catch {
      showToast("Unable to download vCard directly. Call (619) 634-5953.", "info");
    }
  };

  const handleSocialClick = (platform: 'Facebook' | 'Instagram') => {
    showToast(`Opening Custom Hauling ${platform}...`, 'info');
    if (platform === 'Facebook') {
      window.open("https://www.facebook.com", "_blank", "noopener,noreferrer");
    } else {
      window.open("https://www.instagram.com", "_blank", "noopener,noreferrer");
    }
  };

  return (
    <main
      id="main-viewport"
      className="min-h-screen w-full bg-black flex items-center justify-center sm:py-6 sm:px-4 select-none"
    >
      {/* Centered Mobile Card: Matches phone view directly, empty dark asides on desktop */}
      <div
        id="mobile-phone-frame"
        className="w-full max-w-[430px] min-h-[920px] bg-[#0A0A0C] text-white relative flex flex-col justify-between overflow-hidden sm:rounded-[42px] sm:border sm:border-neutral-800/90 sm:shadow-[0_20px_70px_rgba(0,0,0,0.95)] sm:ring-1 sm:ring-[#D4AF37]/20"
      >
        {/* Top Gold Geometric Ribbons */}
        <GoldHeaderRibbons />

        {/* Ambient subtle background glow */}
        <div className="absolute top-28 left-1/2 -translate-x-1/2 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* Main Content Area */}
        <div className="relative z-10 px-5 sm:px-6 pt-7 pb-2 flex flex-col items-center text-center">
          
          {/* Master 3D Custom Hauling Inc. Logo Lockup */}
          <CompanyLogo className="w-full max-w-[360px] mt-0.5 mb-1" />

          {/* Slogan */}
          <div className="mt-1 text-neutral-200 text-xs sm:text-[13px] font-medium italic leading-relaxed">
            <p>More Than Just Hauling...</p>
            <p>We Take Care of Your Property!</p>
          </div>

          {/* Primary Call Action Pill */}
          <button
            id="btn-call-primary"
            onClick={handleCall}
            className="w-full max-w-[350px] py-3.5 px-6 rounded-full bg-gold-gradient gold-glow text-neutral-950 flex items-center justify-center gap-3.5 transition-transform hover:scale-[1.01] active:scale-[0.98] mt-3.5 cursor-pointer shadow-lg"
            aria-label="Call Custom Hauling Inc. at 619-634-5953"
          >
            <div className="w-8 h-8 rounded-full bg-[#0E0E10] flex items-center justify-center text-[#F3CA52] shrink-0 shadow-inner">
              <Phone className="w-4 h-4 fill-current rotate-[-10deg]" />
            </div>
            <span className="font-black text-xl sm:text-[23px] tracking-tight text-[#111114]">
              619-634-5953
            </span>
          </button>

          {/* Secondary Quick Action Circles */}
          <div className="grid grid-cols-3 gap-4 w-full max-w-[340px] mt-6 px-1">
            {/* 1. Text Me */}
            <div className="flex flex-col items-center">
              <button
                id="btn-quick-text"
                onClick={() => handleOpenText()}
                className="w-13 h-13 rounded-full bg-[#18181C] border border-[#7A6023]/70 hover:border-amber-400 text-neutral-200 hover:text-white flex items-center justify-center shadow-lg transition-all active:scale-95 cursor-pointer"
                aria-label="Text Custom Hauling"
              >
                <MessageSquare className="w-5 h-5 fill-current/20" />
              </button>
              <span className="text-xs font-semibold text-neutral-200 mt-2 tracking-tight">
                Text Me
              </span>
            </div>

            {/* 2. Get Directions */}
            <div className="flex flex-col items-center">
              <button
                id="btn-quick-directions"
                onClick={handleGetDirections}
                className="w-13 h-13 rounded-full bg-[#18181C] border border-[#7A6023]/70 hover:border-amber-400 text-neutral-200 hover:text-white flex items-center justify-center shadow-lg transition-all active:scale-95 cursor-pointer"
                aria-label="Get Directions to San Diego"
              >
                <MapPin className="w-5 h-5 fill-current/20" />
              </button>
              <span className="text-xs font-semibold text-neutral-200 mt-2 tracking-tight">
                Get Directions
              </span>
            </div>

            {/* 3. Save Contact */}
            <div className="flex flex-col items-center">
              <button
                id="btn-quick-save-contact"
                onClick={handleSaveContact}
                className="w-13 h-13 rounded-full bg-[#18181C] border border-[#7A6023]/70 hover:border-amber-400 text-neutral-200 hover:text-white flex items-center justify-center shadow-lg transition-all active:scale-95 cursor-pointer"
                aria-label="Save Custom Hauling contact to phone"
              >
                <UserPlus className="w-5 h-5" />
              </button>
              <span className="text-xs font-semibold text-neutral-200 mt-2 tracking-tight">
                Save Contact
              </span>
            </div>
          </div>

          {/* Section Heading: Our Services */}
          <div className="flex items-center justify-center gap-3 w-full my-5 px-2">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-neutral-700" />
            <h2 className="text-base sm:text-lg font-bold text-white tracking-normal px-2">
              Our Services
            </h2>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-neutral-700" />
          </div>

          {/* Services 4x2 Grid */}
          <div className="grid grid-cols-4 gap-x-1 sm:gap-x-2 gap-y-4 sm:gap-y-5 w-full">
            {SERVICES.map((service) => (
              <button
                key={service.id}
                id={`btn-service-${service.id}`}
                onClick={() => setSelectedService(service)}
                className="group flex flex-col items-center text-center p-1 rounded-xl transition-transform hover:scale-105 active:scale-95 cursor-pointer focus:outline-none"
                aria-label={`View details for ${service.name.replace('\n', ' ')}`}
              >
                <div className="w-11 h-11 rounded-lg flex items-center justify-center transition-colors group-hover:bg-neutral-800/60">
                  {getServiceIcon(service.id, "w-7 h-7 text-amber-400")}
                </div>
                <span className="text-[10px] sm:text-[11px] font-medium text-neutral-200 leading-tight mt-1 whitespace-pre-line group-hover:text-amber-200 transition-colors">
                  {service.name}
                </span>
              </button>
            ))}
          </div>

          {/* Service Area Pill */}
          <button
            id="btn-location-area"
            onClick={handleGetDirections}
            className="w-full max-w-[340px] py-2.5 px-4 rounded-full bg-[#141418]/90 border border-neutral-800 hover:border-amber-500/40 flex items-center justify-center gap-2 mt-5 transition-all active:scale-98 cursor-pointer shadow-sm"
          >
            <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="text-xs font-bold text-white">San Diego, CA</span>
            <span className="text-[11px] text-neutral-400 font-normal">
              & Surrounding Areas
            </span>
          </button>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mt-5 mb-3 text-[#F3CA52]">
            {/* Facebook Solid Circle Icon */}
            <button
              id="btn-social-facebook"
              onClick={() => handleSocialClick('Facebook')}
              className="p-1 hover:scale-110 transition-transform cursor-pointer"
              aria-label="Custom Hauling on Facebook"
            >
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="11" fill="#F3CA52" />
                <path
                  d="M13.8 12.5H15.5L16.2 9.5H13.8V8C13.8 7.3 14.1 6.8 15.2 6.8H16.3V4.2C15.8 4.1 14.9 4 13.9 4C11.5 4 10 5.4 10 8.1V9.5H7.5V12.5H10V20C10.5 20.1 11 20.1 11.5 20.1C12 20.1 12.5 20.1 13 20V12.5H13.8Z"
                  fill="#0D0D10"
                />
              </svg>
            </button>

            <span className="text-neutral-700 text-lg font-light">|</span>

            {/* Instagram Solid / Camera Icon */}
            <button
              id="btn-social-instagram"
              onClick={() => handleSocialClick('Instagram')}
              className="p-1 hover:scale-110 transition-transform cursor-pointer"
              aria-label="Custom Hauling on Instagram"
            >
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
                <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" stroke="#F3CA52" strokeWidth="2.4" />
                <circle cx="12" cy="12" r="4.2" stroke="#F3CA52" strokeWidth="2.4" />
                <circle cx="17.2" cy="6.8" r="1.3" fill="#F3CA52" />
              </svg>
            </button>
          </div>
        </div>

        {/* Bottom Sweeping Gold Metallic Ribbon Wave */}
        <GoldFooterRibbon />
      </div>

      {/* Service Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onCall={handleCall}
        onText={(prefill) => {
          setSelectedService(null);
          handleOpenText(prefill);
        }}
      />

      {/* SMS Quick Text Modal */}
      <TextModal
        isOpen={isTextModalOpen}
        onClose={() => setIsTextModalOpen(false)}
        initialMessage={textModalMessage}
        onCopied={() => showToast("Phone number copied to clipboard!", "success")}
      />

      {/* Feedback Toast */}
      <Toast
        message={toastMessage}
        type={toastType}
        onClose={() => setToastMessage(null)}
      />
    </main>
  );
}
