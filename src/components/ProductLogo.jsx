import React from 'react';

export default function ProductLogo({ id, name, className = "w-full h-full", size = "md" }) {
  const containerClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-20 h-20"
  }[size] || "w-12 h-12";

  switch (id) {
    case 'woodpecker':
      return (
        <div className={`${containerClasses} rounded-brand-lg bg-gradient-to-br from-[#212529] to-[#273140] p-2.5 flex items-center justify-center shadow-md relative overflow-hidden group-hover:shadow-brand-glow transition-all duration-300 border border-white/10`}>
          <div className="absolute -right-2 -bottom-2 w-7 h-7 rounded-full bg-[#ef6000]/30 blur-md pointer-events-none" />
          <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Background aura */}
            <circle cx="50" cy="50" r="42" stroke="#ef6000" strokeWidth="2" strokeDasharray="4 3" opacity="0.4" />
            {/* Geometric Woodpecker Head / Beak & Pharma Cross */}
            {/* Sharp beak striking */}
            <path d="M78 44L48 35L48 53L78 44Z" fill="#ef6000" />
            {/* Sleek head crown */}
            <path d="M48 24C36 24 28 32 28 44C28 56 36 64 48 64V24Z" fill="#ffffff" />
            <path d="M44 24C34 24 26 31 26 42C30 36 38 34 44 34V24Z" fill="#ef6000" />
            {/* Eye */}
            <circle cx="38" cy="40" r="3.5" fill="#212529" />
            <circle cx="39" cy="39" r="1.2" fill="#ffffff" />
            {/* Medical / Pharma Data Cube base */}
            <rect x="36" y="60" width="8" height="18" rx="2" fill="#ef6000" />
            <rect x="31" y="65" width="18" height="8" rx="2" fill="#ef6000" />
            {/* IQVIA Data bars */}
            <rect x="58" y="58" width="4" height="16" rx="1" fill="#ffffff" opacity="0.8" />
            <rect x="66" y="50" width="4" height="24" rx="1" fill="#ef6000" />
            <rect x="74" y="62" width="4" height="12" rx="1" fill="#ffffff" opacity="0.6" />
          </svg>
        </div>
      );

    case 'intellix':
      return (
        <div className={`${containerClasses} rounded-brand-lg bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-2.5 flex items-center justify-center shadow-md relative overflow-hidden group-hover:shadow-brand-glow transition-all duration-300 border border-cyan-500/20`}>
          <div className="absolute -left-2 -top-2 w-7 h-7 rounded-full bg-cyan-500/20 blur-md pointer-events-none" />
          <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Neural Brain / Database AI Matrix */}
            <ellipse cx="50" cy="28" rx="24" ry="8" stroke="#38bdf8" strokeWidth="2.5" />
            <path d="M26 28V46C26 50.4 36.7 54 50 54C63.3 54 74 50.4 74 46V28" stroke="#38bdf8" strokeWidth="2" opacity="0.6" />
            <path d="M26 46V64C26 68.4 36.7 72 50 72C63.3 72 74 68.4 74 64V46" stroke="#38bdf8" strokeWidth="2" opacity="0.3" />
            
            {/* Central Glowing AI Nexus Node */}
            <circle cx="50" cy="50" r="12" fill="#ef6000" />
            <circle cx="50" cy="50" r="16" stroke="#ef6000" strokeWidth="1.5" strokeDasharray="3 3" />
            
            {/* AI Network Connections */}
            <line x1="50" y1="50" x2="28" y2="34" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
            <line x1="50" y1="50" x2="72" y2="34" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
            <line x1="50" y1="50" x2="32" y2="68" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
            <line x1="50" y1="50" x2="68" y2="68" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />

            <circle cx="28" cy="34" r="3" fill="#ffffff" />
            <circle cx="72" cy="34" r="3" fill="#38bdf8" />
            <circle cx="32" cy="68" r="3" fill="#38bdf8" />
            <circle cx="68" cy="68" r="3" fill="#ffffff" />
          </svg>
        </div>
      );

    case 'fieldspark':
      return (
        <div className={`${containerClasses} rounded-brand-lg bg-gradient-to-br from-[#212529] to-[#18181b] p-2.5 flex items-center justify-center shadow-md relative overflow-hidden group-hover:shadow-brand-glow transition-all duration-300 border border-[#ef6000]/30`}>
          <div className="absolute inset-0 bg-radial from-[#ef6000]/15 to-transparent pointer-events-none" />
          <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* GPS Telemetry Target Circles */}
            <circle cx="50" cy="50" r="38" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.2" />
            <circle cx="50" cy="50" r="26" stroke="#ef6000" strokeWidth="1.5" strokeOpacity="0.4" />
            
            {/* Route GPS Pin at the center */}
            <path d="M50 18C41.2 18 34 25.2 34 34C34 45.5 50 62 50 62C50 62 66 45.5 66 34C66 25.2 58.8 18 50 18Z" fill="#212529" stroke="#ffffff" strokeWidth="2" />
            
            {/* High-Voltage Dynamic Spark inside the pin */}
            <path d="M52 24L44 35H51L47 46L58 33H50L52 24Z" fill="#ef6000" />
            
            {/* Telemetry wave pulses */}
            <circle cx="50" cy="76" r="14" stroke="#ef6000" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.8" />
            <circle cx="50" cy="76" r="3" fill="#ef6000" />
          </svg>
        </div>
      );

    case 'procurevision':
      return (
        <div className={`${containerClasses} rounded-brand-lg bg-gradient-to-br from-[#064e3b] to-[#0f172a] p-2.5 flex items-center justify-center shadow-md relative overflow-hidden group-hover:shadow-brand-glow transition-all duration-300 border border-emerald-500/30`}>
          <div className="absolute -right-2 -top-2 w-7 h-7 rounded-full bg-emerald-500/20 blur-md pointer-events-none" />
          <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* High-Tech Optical Vision Eye / Lens */}
            <path d="M12 50C24 30 76 30 88 50C76 70 24 70 12 50Z" stroke="#34d399" strokeWidth="3" strokeLinecap="round" />
            <circle cx="50" cy="50" r="20" fill="#0f172a" stroke="#10b981" strokeWidth="2" />
            
            {/* Isometric Spend Cube / Diamond inside Pupil */}
            <path d="M50 36L64 44V60L50 68L36 60V44L50 36Z" fill="#10b981" fillOpacity="0.2" stroke="#ef6000" strokeWidth="2" />
            <path d="M50 36V52L64 60" stroke="#ef6000" strokeWidth="1.5" />
            <path d="M50 52L36 60" stroke="#ef6000" strokeWidth="1.5" />
            
            {/* Center Core Sparkle */}
            <circle cx="50" cy="52" r="3.5" fill="#ffffff" />
          </svg>
        </div>
      );

    case 'saleslogic':
      return (
        <div className={`${containerClasses} rounded-brand-lg bg-gradient-to-br from-[#1e3a8a] to-[#1e1b4b] p-2.5 flex items-center justify-center shadow-md relative overflow-hidden group-hover:shadow-brand-glow transition-all duration-300 border border-blue-500/30`}>
          <div className="absolute -right-2 -bottom-2 w-7 h-7 rounded-full bg-[#ef6000]/30 blur-md pointer-events-none" />
          <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Ascending Commercial Growth Bars */}
            <rect x="20" y="58" width="10" height="24" rx="2" fill="#60a5fa" />
            <rect x="36" y="44" width="10" height="38" rx="2" fill="#3b82f6" />
            <rect x="52" y="32" width="10" height="50" rx="2" fill="#ef6000" />
            <rect x="68" y="20" width="10" height="62" rx="2" fill="#ffffff" />
            
            {/* Dynamic Algorithmic Logic Trend Line */}
            <path d="M18 64L38 48L54 38L78 18" stroke="#ef6000" strokeWidth="3.5" strokeLinecap="round" />
            
            {/* Arrow Head */}
            <path d="M68 18H80V30" stroke="#ef6000" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            
            {/* Vertices */}
            <circle cx="38" cy="48" r="3.5" fill="#ffffff" />
            <circle cx="54" cy="38" r="3.5" fill="#ffffff" />
          </svg>
        </div>
      );

    case 'datapulse':
    case 'data-pulse':
      return (
        <div className={`${containerClasses} rounded-brand-lg bg-gradient-to-br from-[#212529] to-[#3f1d24] p-2.5 flex items-center justify-center shadow-md relative overflow-hidden group-hover:shadow-brand-glow transition-all duration-300 border border-[#ef6000]/40`}>
          <div className="absolute -left-2 -bottom-2 w-8 h-8 rounded-full bg-[#ef6000]/30 blur-md pointer-events-none" />
          <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Digital Grid Matrix */}
            <rect x="18" y="20" width="18" height="18" rx="3" fill="#ffffff" fillOpacity="0.1" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.3" />
            <rect x="64" y="20" width="18" height="18" rx="3" fill="#ffffff" fillOpacity="0.1" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.3" />
            <rect x="18" y="62" width="18" height="18" rx="3" fill="#ffffff" fillOpacity="0.1" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.3" />
            <rect x="64" y="62" width="18" height="18" rx="3" fill="#ffffff" fillOpacity="0.1" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.3" />
            
            {/* Dynamic Real-Time ERP Pulse Heartbeat */}
            <path d="M10 50H32L40 26L48 76L58 38L64 56L70 50H90" stroke="#ef6000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            
            {/* Glowing Pulse Node */}
            <circle cx="48" cy="76" r="4" fill="#ffffff" />
            <circle cx="40" cy="26" r="4" fill="#ffffff" />
          </svg>
        </div>
      );

    case 'odoo-drive':
      return (
        <div className={`${containerClasses} rounded-brand-lg bg-gradient-to-br from-[#4c1d95] to-[#1e1b4b] p-2.5 flex items-center justify-center shadow-md relative overflow-hidden group-hover:shadow-brand-glow transition-all duration-300 border border-purple-400/30`}>
          <div className="absolute -right-2 -top-2 w-7 h-7 rounded-full bg-[#ef6000]/30 blur-md pointer-events-none" />
          <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* High-Octane Drive Cog / Wheel */}
            <circle cx="50" cy="50" r="32" stroke="#a855f7" strokeWidth="3" strokeDasharray="8 6" />
            <circle cx="50" cy="50" r="22" fill="#2e1065" stroke="#ef6000" strokeWidth="2.5" />
            
            {/* Odoo Letter O & Telematics Drive Arrow */}
            <circle cx="50" cy="50" r="12" stroke="#ffffff" strokeWidth="3" />
            <path d="M50 28L68 50L50 72" stroke="#ef6000" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      );

    case 'market-analysis':
    default:
      return (
        <div className={`${containerClasses} rounded-brand-lg bg-gradient-to-br from-[#212529] to-[#273140] p-2.5 flex items-center justify-center shadow-md relative overflow-hidden group-hover:shadow-brand-glow transition-all duration-300 border border-[#ef6000]/30`}>
          <div className="absolute -left-2 -top-2 w-7 h-7 rounded-full bg-[#ef6000]/30 blur-md pointer-events-none" />
          <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* 360-degree Global Market Radar */}
            <circle cx="50" cy="50" r="36" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.3" />
            <circle cx="50" cy="50" r="24" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.5" />
            <circle cx="50" cy="50" r="12" stroke="#ef6000" strokeWidth="2" />
            
            <line x1="50" y1="12" x2="50" y2="88" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.4" />
            <line x1="12" y1="50" x2="88" y2="50" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.4" />
            
            {/* Radar Beam Sweep */}
            <path d="M50 50L76 24A36 36 0 0 1 86 50Z" fill="#ef6000" fillOpacity="0.35" />
            
            <circle cx="68" cy="34" r="3" fill="#ef6000" />
            <circle cx="50" cy="50" r="4" fill="#ffffff" />
          </svg>
        </div>
      );
  }
}
