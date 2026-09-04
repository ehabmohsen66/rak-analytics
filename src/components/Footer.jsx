import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  ArrowRight, 
  Instagram, 
  Facebook, 
  Linkedin, 
  Twitter,
  Shield,
  FileText,
  CheckCircle2
} from 'lucide-react';
import { SITE_INFO } from '../data/siteData';

export default function Footer({ setActiveTab, openTermsModal, openDemoModal }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
      setSubscribed(false);
    }, 4000);
  };

  const handleNav = (tabId) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="rak-dark-grid bg-[#121417] text-white border-t border-white/5">
      {/* Top Banner / Newsletter Strip */}
      <div className="border-b border-white/10 bg-white/[0.02]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left space-y-1">
              <div className="rak-kicker mb-3 text-[#ff7a22]">The signal, not the noise</div>
              <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-[-0.04em]">
                Subscribe to Executive Data Insights & Case Studies
              </h3>
              <p className="text-xs sm:text-sm text-white/40">
                Join over 2,500+ C-suite leaders receiving our monthly business intelligence digest.
              </p>
            </div>

            <form onSubmit={handleNewsletterSubmit} className="w-full lg:w-[480px] flex flex-col sm:flex-row gap-2 rounded-brand-lg sm:rounded-full border border-white/10 bg-white/[0.04] p-1.5">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your corporate email..."
                className="px-4 py-3 bg-transparent border-0 rounded-full text-sm text-white placeholder-white/30 focus:outline-none flex-1"
              />
              <button
                type="submit"
                className="rak-button-primary px-6 py-3 text-white font-bold text-xs rounded-full transition-colors flex items-center justify-center gap-2 shrink-0"
              >
                {subscribed ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-white" />
                    <span>Subscribed!</span>
                  </>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/assets/Rak-analytics-logo-white.png" 
                alt="RAK Analytics" 
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                  e.target.parentNode.innerHTML = '<span class="font-extrabold text-2xl text-white">RAK<span class="text-[#ef6000]">ANALYTICS</span></span>';
                }}
              />
            </div>
            <p className="text-xs sm:text-sm text-gray-400 max-w-sm leading-relaxed">
              {SITE_INFO.tagline} Built across Analytics, Cloud, Communication, and Digital, RAK4 Group delivers end-to-end data intelligence and private AI solutions worldwide.
            </p>
            
            {/* Regions list */}
            <div className="text-xs text-gray-400">
              <span className="text-gray-500 font-bold uppercase tracking-wider block mb-1">Global Presence:</span>
              <span className="font-semibold text-gray-300">{SITE_INFO.regions.join(' • ')}</span>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href={SITE_INFO.socials.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.03] hover:bg-[#ef6000] flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href={SITE_INFO.socials.instagram} 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.03] hover:bg-[#ef6000] flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href={SITE_INFO.socials.facebook} 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.03] hover:bg-[#ef6000] flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href={SITE_INFO.socials.twitter} 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.03] hover:bg-[#ef6000] flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                title="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Solutions & Shop */}
          <div className="space-y-3">
            <h4 className="font-mono text-[9px] font-semibold uppercase tracking-[0.15em] text-[#ff7a22]">
              Solutions & Shop
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              <li>
                <button onClick={() => handleNav('solutions')} className="hover:text-[#ef6000] transition-colors">
                  Sales Analytics Drive
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('solutions')} className="hover:text-[#ef6000] transition-colors">
                  Stock & Inventory Pulse
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('solutions')} className="hover:text-[#ef6000] transition-colors">
                  Financial Ledger Health
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('solutions')} className="hover:text-[#ef6000] transition-colors">
                  Procurement Spend Cube
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('solutions')} className="hover:text-[#ef6000] transition-colors">
                  Production OEE Analytics
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('solutions')} className="hover:text-[#ef6000] transition-colors font-bold text-[#ef6000]">
                  View All Dashboards (Shop) →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: In-House Products */}
          <div className="space-y-3">
            <h4 className="font-mono text-[9px] font-semibold uppercase tracking-[0.15em] text-[#ff7a22]">
              Products
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              <li>
                <button onClick={() => handleNav('products')} className="hover:text-[#ef6000] transition-colors">
                  WoodPecker (Pharma & IQVIA)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('products')} className="hover:text-[#ef6000] transition-colors">
                  Intellix (AI Copilot & Connector)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('products')} className="hover:text-[#ef6000] transition-colors">
                  FieldSpark (Field Telemetry)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('products')} className="hover:text-[#ef6000] transition-colors">
                  ProcureVision (Spend Intelligence)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('products')} className="hover:text-[#ef6000] transition-colors">
                  Sales Logic (FMCG Execution)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('products')} className="hover:text-[#ef6000] transition-colors">
                  DataPulse & Odoo Drive
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('products')} className="hover:text-[#ef6000] transition-colors">
                  Market Analysis Reports
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Office */}
          <div className="space-y-3">
            <h4 className="font-mono text-[9px] font-semibold uppercase tracking-[0.15em] text-[#ff7a22]">
              Headquarters & Support
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-gray-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#ef6000] mt-0.5 shrink-0" />
                <span>{SITE_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#ef6000] shrink-0" />
                <a href={`tel:${SITE_INFO.phone}`} className="hover:text-white transition-colors">
                  {SITE_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#ef6000] shrink-0" />
                <a href={`mailto:${SITE_INFO.email}`} className="hover:text-white transition-colors">
                  {SITE_INFO.email}
                </a>
              </div>
              <div className="pt-2">
                <button
                  onClick={openDemoModal}
                  className="w-full py-2.5 bg-white/[0.06] hover:bg-[#ef6000] text-white text-xs font-bold rounded-full border border-white/10 transition-colors"
                >
                  Schedule Assessment
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Terms */}
        <div className="pt-8 mt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[9px] uppercase tracking-wider text-white/30">
          <div>
            © 2026 RAK4Analytics SARL. All rights reserved. RAK4 Group member.
          </div>

          <div className="flex items-center gap-6">
            <button 
              onClick={openTermsModal} 
              className="hover:text-gray-300 transition-colors flex items-center gap-1"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Terms & Conditions</span>
            </button>
            <button 
              onClick={openTermsModal} 
              className="hover:text-gray-300 transition-colors flex items-center gap-1"
            >
              <Shield className="w-3.5 h-3.5" />
              <span>Privacy & Cookie Policy</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
