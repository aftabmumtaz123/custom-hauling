import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, UserPlus } from 'lucide-react';
import { CompanyLogo } from './components/CompanyLogo';
import { GoldHeaderRibbons } from './components/GoldHeaderRibbons';
import { GoldFooterRibbon } from './components/GoldFooterRibbon';
import { getServiceIcon } from './components/ServiceIcons';
import contactData from './data/contact.json';
import { ServiceModal } from './components/ServiceModal';
import { TextModal } from './components/TextModal';
import { Toast } from './components/Toast';
import { downloadVCard } from './utils/vcard';

type ServiceItem = (typeof contactData.services)[number];

const CONTACT = contactData;
const SERVICES = CONTACT.services;

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

  const getWebsite = () => CONTACT.website?.trim() || window.location.origin;

  const getLocationQuery = () => CONTACT.location.mapQuery || CONTACT.location.label;

  const handleCall = () => {
    showToast(`Calling ${CONTACT.phone}...`, "info");
    window.location.href = `tel:${CONTACT.phone.replace(/\D/g, "")}`;
  };

  const handleOpenText = (initialMsg?: string) => {
    if (initialMsg) {
      setTextModalMessage(initialMsg);
    } else {
      setTextModalMessage(`Hi ${CONTACT.name}, I need an estimate for property services in ${CONTACT.serviceArea}.`);
    }
    setIsTextModalOpen(true);
  };

  const getDirectionsUrl = () => {
    const location = getLocationQuery();
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;
  };

  const handleDirectionsClick = () => {
    showToast(`Opening ${CONTACT.location.city} map...`, "info");
  };

  const handleSaveContact = async () => {
    try {
      await downloadVCard({
        name: CONTACT.name,
        organization: CONTACT.organization,
        title: CONTACT.title,
        phone: CONTACT.phone,
        email: CONTACT.email,
        address: CONTACT.location.address,
        city: CONTACT.location.city,
        state: CONTACT.location.state,
        postalCode: CONTACT.location.postalCode,
        country: CONTACT.location.country,
        label: CONTACT.location.label,
        website: getWebsite(),
        note: [
          CONTACT.slogan,
          `Service area: ${CONTACT.serviceArea}.`,
          `Services: ${SERVICES.map((service) => service.name.replace(/\n/g, " ")).join(", ")}.`,
          `Contact location: ${CONTACT.location.label}.`
        ].join("\n"),
        links: CONTACT.whatsappNumber
          ? [{ name: 'WhatsApp', value: `https://wa.me/${CONTACT.whatsappNumber}` }]
          : undefined,
      });
      showToast(`${CONTACT.name} contact card downloaded!`, "success");
    } catch (error) {
      console.error("vCard download failed:", error);
      showToast(`Unable to download vCard directly. Call ${CONTACT.phone}.`, "info");
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
            <p>{CONTACT.slogan.split("...")[0]}...</p>
            <p>{CONTACT.slogan.split("...").slice(1).join("...").trim()}</p>
          </div>

          {/* Primary Call Action Pill */}
          <button
            id="btn-call-primary"
            onClick={handleCall}
            className="w-full max-w-[350px] py-3.5 px-6 rounded-full bg-gold-gradient gold-glow text-neutral-950 flex items-center justify-center gap-3.5 transition-transform hover:scale-[1.01] active:scale-[0.98] mt-3.5 cursor-pointer shadow-lg"
            aria-label={`Call ${CONTACT.name} at ${CONTACT.phone}`}
          >
            <div className="w-8 h-8 rounded-full bg-[#0E0E10] flex items-center justify-center text-[#F3CA52] shrink-0 shadow-inner">
              <Phone className="w-4 h-4 fill-current rotate-[-10deg]" />
            </div>
            <span className="font-black text-xl sm:text-[23px] tracking-tight text-[#111114]">
              {CONTACT.phone}
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
              <a
                id="btn-quick-directions"
                href={getDirectionsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleDirectionsClick}
                className="w-13 h-13 rounded-full bg-[#18181C] border border-[#7A6023]/70 hover:border-amber-400 text-neutral-200 hover:text-white flex items-center justify-center shadow-lg transition-all active:scale-95 cursor-pointer"
                aria-label={`Get Directions to ${CONTACT.location.businessName}, ${CONTACT.location.city}`}
              >
                <MapPin className="w-5 h-5 fill-current/20" />
              </a>
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

          {/* Contact Location — driven entirely by contact.json */}
          <a
            id="btn-location-area"
            href={getDirectionsUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleDirectionsClick}
            className="w-full max-w-[340px] py-2.5 px-4 rounded-full bg-[#141418]/90 border border-neutral-800 hover:border-amber-500/40 flex items-center justify-center gap-2 mt-5 transition-all active:scale-98 cursor-pointer shadow-sm"
          >
            <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="text-xs font-bold text-white">{CONTACT.location.city}, {CONTACT.location.state}</span>
            <span className="text-[11px] text-neutral-400 font-normal">
              {CONTACT.location.address}
            </span>
          </a>

          {/* WhatsApp Contact */}
          <div className="flex items-center justify-center mt-5 mb-3 text-[#F3CA52]">
            <a
              id="btn-social-whatsapp"
              href={`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
                `Hi! Welcome to ${CONTACT.name}. How can we help you today?`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 hover:scale-110 transition-transform cursor-pointer inline-flex"
              aria-label={`Contact ${CONTACT.name} on WhatsApp`}
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M20.52 3.48A11.8 11.8 0 0 0 12.08.01C5.56.01.25 5.32.25 11.84c0 2.09.55 4.13 1.6 5.93L.15 23.99l6.36-1.67a11.8 11.8 0 0 0 5.57 1.42h.01c6.52 0 11.83-5.31 11.83-11.83 0-3.16-1.23-6.13-3.4-8.43Zm-8.44 18.23h-.01a9.82 9.82 0 0 1-5.01-1.37l-.36-.21-3.78.99 1.01-3.69-.23-.38a9.8 9.8 0 0 1-1.5-5.21C2.2 6.41 6.63 1.98 12.08 1.98c2.64 0 5.12 1.03 6.98 2.89a9.8 9.8 0 0 1 2.89 6.98c0 5.45-4.43 9.88-9.87 9.88Zm5.42-7.4c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.69.15-.2.3-.79.98-.97 1.18-.18.2-.36.23-.66.08-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.78-1.67-2.08-.18-.3-.02-.46.13-.61.13-.13.3-.36.46-.54.15-.18.2-.3.3-.51.1-.2.05-.38-.02-.54-.08-.15-.69-1.66-.94-2.28-.25-.6-.5-.52-.69-.53h-.59c-.2 0-.51.08-.77.38-.26.3-1 1-1 2.44s1.03 2.83 1.18 3.02c.15.2 2.02 3.08 4.9 4.32.69.3 1.22.48 1.64.62.69.22 1.31.19 1.8.12.55-.08 1.78-.73 2.03-1.43.25-.71.25-1.31.18-1.43-.08-.13-.28-.2-.58-.35Z"
                  fill="#F3CA52"
                />
              </svg>
            </a>
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
