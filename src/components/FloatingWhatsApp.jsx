import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { SITE_INFO } from '../data/siteData';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      {showTooltip && (
        <div className="hidden sm:block bg-white rounded-brand-lg shadow-brand-elevated border border-[#828a96] p-4 max-w-xs text-[#16191e] animate-fadeIn">
          <div className="flex items-center justify-between gap-2 mb-1">
            <span className="font-bold text-xs text-[#16191e]">RAK Analytics Support</span>
            <button
              type="button"
              aria-label="Close WhatsApp support card"
              onClick={() => setShowTooltip(false)}
              className="w-11 h-11 -mr-2 -my-2 flex items-center justify-center text-[#4a5361] hover:text-[#16191e]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-[#4a5361] mb-3 leading-relaxed">
            Questions regarding our dashboards or custom ERP connectors? Chat directly with our solutions architect.
          </p>
          <a
            href={SITE_INFO.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="block text-center py-2.5 px-3 bg-[#126b34] hover:bg-[#0d5227] text-white text-xs font-bold rounded-brand-md transition-colors min-h-[44px] flex items-center justify-center"
          >
            Start WhatsApp Chat
          </a>
        </div>
      )}

      <a
        href={SITE_INFO.whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp (+961 81 670100)"
        onMouseEnter={() => setShowTooltip(true)}
        onFocus={() => setShowTooltip(true)}
        className="w-14 h-14 rounded-full bg-[#126b34] hover:bg-[#0d5227] text-white shadow-brand-elevated flex items-center justify-center transition-colors duration-200 relative"
        title="Chat on WhatsApp (+961 81 670100)"
      >
        <MessageSquare className="w-6 h-6 fill-current" />
      </a>
    </div>
  );
}
