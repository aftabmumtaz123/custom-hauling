import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Phone, MessageSquare, Copy, Check } from 'lucide-react';

const QUICK_TEMPLATES = [
  "Need junk & debris removal estimate",
  "House/garage cleanout inquiry",
  "Yard cleanup & hauling quote",
  "Small repairs & maintenance quote"
];

interface TextModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMessage?: string;
  onCopied: () => void;
}

export const TextModal: React.FC<TextModalProps> = ({
  isOpen,
  onClose,
  initialMessage = "Hi Custom Hauling! I would like to get an estimate for property solutions.",
  onCopied
}) => {
  const [message, setMessage] = useState(initialMessage);
  const [copied, setCopied] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<number | null>(null);

  useEffect(() => {
    setMessage(initialMessage);
    const matchedIndex = QUICK_TEMPLATES.findIndex((template) => initialMessage.includes(template));
    setSelectedTopic(matchedIndex >= 0 ? matchedIndex : null);
  }, [initialMessage, isOpen]);
  const phoneNumber = "+1 619-634-5953";
  // Include the US country code so devices in other countries do not infer their local country code (e.g. +92).
  const rawNumber = "+16196345953";

  if (!isOpen) return null;

  const handleSendSMS = () => {
    // Encodes for standard SMS url scheme
    window.location.href = `sms:${rawNumber}?body=${encodeURIComponent(message)}`;
  };

  const handleCopyNumber = async () => {
    try {
      await navigator.clipboard.writeText(rawNumber);
      setCopied(true);
      onCopied();
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

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
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-neutral-800/80 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-neutral-800 border border-amber-500/40 flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Text Custom Hauling</h3>
              <p className="text-xs text-neutral-400">Direct line: {phoneNumber}</p>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
              Select Quick Topic:
            </label>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {QUICK_TEMPLATES.map((template, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setSelectedTopic(idx);
                    setMessage(`Hi, I would like to inquire about: ${template}. Please let me know your availability.`);
                  }}
                  className={`text-[11px] py-1 px-2.5 rounded-full border transition-all ${
                    selectedTopic === idx
                      ? 'bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 border-amber-400 text-neutral-950 font-semibold shadow-md shadow-amber-500/20'
                      : 'bg-neutral-800 hover:bg-neutral-700 text-neutral-300 border-neutral-700/80'
                  }`}
                >
                  {template}
                </button>
              ))}
            </div>

            <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
              Your Message:
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              className="w-full bg-neutral-950 border border-neutral-700 rounded-xl p-3 text-xs text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all resize-none"
              placeholder="Type your message or project description here..."
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5">
            <button
              onClick={handleSendSMS}
              className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-neutral-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 active:scale-[0.98] transition-transform"
            >
              <Send className="w-4 h-4" />
              Open in Messages
            </button>

            <button
              onClick={handleCopyNumber}
              className="py-3 px-4 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 border border-neutral-700 font-medium text-xs flex items-center justify-center gap-2 transition-colors active:scale-[0.98]"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              {copied ? "Copied!" : "Copy Number"}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
