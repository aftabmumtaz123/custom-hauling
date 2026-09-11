import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Phone, MessageSquare, Check, Sparkles } from 'lucide-react';
import { ServiceItem } from '../data/services';
import { getServiceIcon } from './ServiceIcons';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onCall: () => void;
  onText: (prefill?: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onCall,
  onText
}) => {
  if (!service) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0"
          onClick={onClose}
        />

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 26, stiffness: 300 }}
          className="relative w-full max-w-md bg-neutral-900 border border-amber-500/30 rounded-t-3xl sm:rounded-3xl p-6 shadow-2xl z-10 overflow-hidden text-left"
        >
          {/* Subtle gold glow behind header */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-neutral-800/80 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header with icon */}
          <div className="flex items-center gap-3.5 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-neutral-800/90 border border-amber-500/40 flex items-center justify-center shadow-md">
              {getServiceIcon(service.id, "w-7 h-7")}
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-400" /> Custom Hauling Service
              </span>
              <h3 className="text-xl font-extrabold text-white leading-tight whitespace-pre-line">
                {service.name.replace('\n', ' ')}
              </h3>
            </div>
          </div>

          <p className="text-neutral-300 text-sm leading-relaxed mb-5">
            {service.description}
          </p>

          <div className="mb-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2.5">
              What's Included:
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {service.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-neutral-200">
                  <div className="w-4 h-4 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-2.5 pt-2 border-t border-neutral-800">
            <button
              onClick={onCall}
              className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-neutral-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-transform active:scale-[0.98]"
            >
              <Phone className="w-4 h-4 fill-current" />
              Call for Quote
            </button>
            <button
              onClick={() => onText(`Hi, I'm interested in a free estimate for ${service.name.replace('\n', ' ')}.`)}
              className="flex-1 py-3 px-4 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 border border-neutral-700 font-semibold text-sm flex items-center justify-center gap-2 transition-colors active:scale-[0.98]"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              Text Us
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
