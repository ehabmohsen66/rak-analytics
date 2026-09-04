import React, { useState } from 'react';
import {
  Phone,
  Mail,
  Globe2,
  MessageSquare,
  ShoppingBag,
  UserCheck,
  Menu,
  X,
  ArrowUpRight
} from 'lucide-react';
import { SITE_INFO } from '../data/siteData';

export default function Navbar({
  activeTab,
  setActiveTab,
  cartItems,
  openCart,
  openSubscriberPortal,
  openDemoModal
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'solutions', label: 'Solutions', badge: 'Shop' },
    { id: 'products', label: 'Products' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'partners', label: 'Partners' },
    { id: 'news', label: 'Insights' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (tabId) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-[#f7f5f0]/95 backdrop-blur-xl">
      <div className="hidden sm:block bg-[#17191c] text-white">
        <div className="max-w-[1440px] mx-auto h-9 px-6 lg:px-10 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.12em]">
          <div className="flex items-center gap-2 text-white/60">
            <Globe2 className="w-3.5 h-3.5 text-[#ef6000]" />
            <span>{SITE_INFO.regions.join('  ·  ')}</span>
          </div>

          <div className="flex items-center gap-5 text-white/65">
            <a href={`tel:${SITE_INFO.phone}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3 h-3 text-[#ef6000]" />
              <span>{SITE_INFO.phoneDisplay}</span>
            </a>
            <a href={`mailto:${SITE_INFO.email}`} className="hidden lg:flex items-center gap-1.5 hover:text-white transition-colors normal-case tracking-normal">
              <Mail className="w-3 h-3 text-[#ef6000]" />
              <span>{SITE_INFO.email}</span>
            </a>
            <a href={SITE_INFO.whatsappLink} target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-1.5 text-[#65dc8c] hover:text-white transition-colors normal-case tracking-normal">
              <MessageSquare className="w-3 h-3" />
              <span>WhatsApp</span>
            </a>
            <button onClick={openSubscriberPortal} className="flex items-center gap-1.5 hover:text-white transition-colors">
              <UserCheck className="w-3 h-3 text-[#ef6000]" />
              <span>Client portal</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="h-[78px] flex items-center justify-between gap-6">
          <button
            onClick={() => handleNavClick('home')}
            className="group flex items-center shrink-0"
            aria-label="Go to RAK Analytics home"
          >
            <img
              src="/assets/Rak-analytics-logo.png"
              alt="RAK Analytics"
              className="h-10 lg:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </button>

          <nav className="hidden xl:flex items-center gap-5 2xl:gap-7" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`group relative py-3 text-[12px] font-bold tracking-[-0.01em] transition-colors ${
                  activeTab === link.id ? 'text-[#17191c]' : 'text-[#5f625f] hover:text-[#17191c]'
                }`}
              >
                <span className="flex items-center gap-1.5">
                  {link.label}
                  {link.badge && (
                    <span className="rounded-full bg-[#ef6000] px-1.5 py-0.5 text-[8px] font-mono font-semibold uppercase tracking-wider text-white">
                      {link.badge}
                    </span>
                  )}
                </span>
                <span className={`absolute bottom-1 left-0 h-0.5 bg-[#ef6000] transition-all duration-300 ${activeTab === link.id ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={openCart}
              className="relative w-11 h-11 rounded-full border border-black/10 bg-white/70 text-[#17191c] hover:border-[#ef6000]/50 hover:text-[#ef6000] transition-colors flex items-center justify-center"
              aria-label={`Open subscriptions cart with ${cartItems.length} items`}
            >
              <ShoppingBag className="w-[18px] h-[18px]" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-0.5 min-w-5 h-5 px-1 bg-[#ef6000] text-white text-[9px] font-mono font-semibold rounded-full flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </button>

            <button
              onClick={openDemoModal}
              className="rak-button-primary hidden md:flex h-11 items-center gap-2 px-5 text-[11px] font-bold uppercase tracking-[0.08em] text-white"
            >
              <span>Book a demo</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden w-11 h-11 rounded-full border border-black/10 bg-white/70 text-[#17191c] hover:border-[#ef6000]/50 transition-colors flex items-center justify-center"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-black/10 bg-[#f7f5f0] px-4 sm:px-6 pb-6 pt-3 shadow-2xl animate-fadeIn">
          <div className="max-w-[1440px] mx-auto grid grid-cols-2 sm:grid-cols-4 gap-2">
            {navLinks.map((link, index) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`min-h-14 rounded-brand-md px-4 text-left text-sm font-semibold flex items-center justify-between ${
                  activeTab === link.id
                    ? 'bg-[#17191c] text-white'
                    : 'bg-white/70 text-[#35383b] hover:bg-white'
                }`}
              >
                <span>{link.label}</span>
                <span className={`font-mono text-[9px] ${activeTab === link.id ? 'text-[#ef6000]' : 'text-black/30'}`}>
                  0{index + 1}
                </span>
              </button>
            ))}
          </div>
          <div className="max-w-[1440px] mx-auto mt-3 grid sm:grid-cols-2 gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); openSubscriberPortal(); }}
              className="h-12 rounded-full border border-black/15 text-[#17191c] font-bold text-xs flex items-center justify-center gap-2"
            >
              <UserCheck className="w-4 h-4 text-[#ef6000]" />
              <span>Subscriber portal</span>
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); openDemoModal(); }}
              className="rak-button-primary h-12 text-white font-bold text-xs flex items-center justify-center gap-2"
            >
              <span>Book a demo</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
