import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { SITE_INFO } from '../data/siteData';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      {/* Tooltip Dialog */}
      {showTooltip && (
        <div className="hidden sm:block bg-white rounded-brand-lg shadow-brand-elevated border border-gray-200 p-4 max-w-xs text-[#212529] animate-fadeIn">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <span className="font-bold text-xs text-gray-900">RAK Analytics Support</span>
            </div>
            <button 
              onClick={() => setShowTooltip(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-xs text-gray-600 mb-3">
            Questions regarding our dashboards or custom ERP connectors? Chat directly with our solutions architect.
          </p>
          <a
            href={SITE_INFO.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="block text-center py-2 px-3 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold rounded-brand-md transition-colors"
          >
            Start WhatsApp Chat
          </a>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={SITE_INFO.whatsappLink}
        target="_blank"
        rel="noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-brand-elevated flex items-center justify-center hover:scale-110 transition-all duration-300 relative group"
        title="Chat on WhatsApp (+961 81 670100)"
      >
        <MessageSquare className="w-7 h-7 fill-current" />
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#ef6000] border-2 border-white" />
      </a>
    </div>
  );
}
