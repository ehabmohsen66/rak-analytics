import React, { useState } from 'react';
import { 
  Sparkles, 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Clock, 
  Globe2 
} from 'lucide-react';
import { SITE_INFO } from '../data/siteData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    topic: 'Dashboard Subscription & Demos',
    message: '',
    consent: true
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.consent) return;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        topic: 'Dashboard Subscription & Demos',
        message: '',
        consent: true
      });
    }, 5000);
  };

  return (
    <div className="py-10 sm:py-14 bg-[#f7f5f0] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header (Slide 30 & 31) */}
        <div className="rak-page-header text-center max-w-5xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#ef6000] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect With Our Team</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#212529] tracking-tight">
            Contact RAK Analytics
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Reach out for a personalized demonstration, custom ERP connector assessment, or subscription licensing inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Details Card (Slide 31) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#212529] text-white rounded-brand-xl p-8 shadow-brand-card space-y-6">
              <div>
                <span className="text-xs font-bold text-[#ef6000] uppercase tracking-wider">
                  Direct Inquiries
                </span>
                <h3 className="text-2xl font-extrabold text-white mt-1">
                  We Are Here To Accelerate Your Data Strategy
                </h3>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-brand-md bg-white/10 text-[#ef6000] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-bold uppercase">Call Us</div>
                    <a href={`tel:${SITE_INFO.phone}`} className="text-sm font-extrabold text-white hover:text-[#ef6000] transition-colors">
                      {SITE_INFO.phoneDisplay}
                    </a>
                    <div className="text-[11px] text-gray-400">Headquarters Direct Line</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-brand-md bg-white/10 text-[#ef6000] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-bold uppercase">Email Inquiries</div>
                    <a href={`mailto:${SITE_INFO.demoEmail}`} className="text-sm font-extrabold text-white hover:text-[#ef6000] transition-colors block">
                      {SITE_INFO.demoEmail}
                    </a>
                    <a href={`mailto:${SITE_INFO.email}`} className="text-xs text-gray-300 hover:text-[#ef6000] transition-colors block">
                      {SITE_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-brand-md bg-white/10 text-[#ef6000] flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-bold uppercase">WhatsApp Instant Support</div>
                    <a 
                      href={SITE_INFO.whatsappLink} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-sm font-extrabold text-green-400 hover:underline block"
                    >
                      {SITE_INFO.whatsapp}
                    </a>
                    <div className="text-[11px] text-gray-400">Direct Chat with Architect</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-brand-md bg-white/10 text-[#ef6000] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-bold uppercase">Global Headquarters</div>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                      {SITE_INFO.location}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-800 text-xs text-gray-400">
                <span className="font-bold text-gray-300">Regional Coverage:</span> {SITE_INFO.regions.join(' • ')}
              </div>
            </div>
          </div>

          {/* Contact Message Form (Slide 31) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-brand-xl p-8 sm:p-10 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-extrabold text-[#212529] mb-1">
                Questions? Send us a message
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mb-6">
                Fill in the details below and our team will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-gray-700 block mb-1">Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-3.5 py-2.5 text-xs bg-gray-50 border border-gray-200 rounded-brand-md focus:bg-white focus:outline-none focus:border-[#ef6000]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-700 block mb-1">Corporate Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="s.jenkins@company.com"
                      className="w-full px-3.5 py-2.5 text-xs bg-gray-50 border border-gray-200 rounded-brand-md focus:bg-white focus:outline-none focus:border-[#ef6000]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-gray-700 block mb-1">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+961..."
                      className="w-full px-3.5 py-2.5 text-xs bg-gray-50 border border-gray-200 rounded-brand-md focus:bg-white focus:outline-none focus:border-[#ef6000]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-700 block mb-1">Company / Organization</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Company name"
                      className="w-full px-3.5 py-2.5 text-xs bg-gray-50 border border-gray-200 rounded-brand-md focus:bg-white focus:outline-none focus:border-[#ef6000]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">Topic *</label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-gray-50 border border-gray-200 rounded-brand-md focus:bg-white focus:outline-none focus:border-[#ef6000]"
                  >
                    <option value="Dashboard Subscription & Demos">Dashboard Subscription & Demos</option>
                    <option value="Custom BI & ERP Integration">Custom BI & ERP Integration</option>
                    <option value="WoodPecker Pharma Analytics">WoodPecker Pharma Analytics</option>
                    <option value="Intellix AI Copilot">Intellix AI Copilot</option>
                    <option value="Partnership & Reseller Inquiries">Partnership & Reseller Inquiries</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">Message *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your requirements, ERP version, or desired dashboard views..."
                    className="w-full px-3.5 py-2.5 text-xs bg-gray-50 border border-gray-200 rounded-brand-md focus:bg-white focus:outline-none focus:border-[#ef6000]"
                  />
                </div>

                {/* Consent Checkbox (Slide 31) */}
                <div className="flex items-start gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="consent"
                    required
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-0.5 rounded text-[#ef6000] focus:ring-[#ef6000]"
                  />
                  <label htmlFor="consent" className="text-xs text-gray-600">
                    By using this form, you agree with the storage and handling of your data by this website in accordance with our Privacy Policy.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#ef6000] hover:bg-[#dc5500] text-white font-bold text-xs uppercase tracking-wider rounded-brand-md shadow-brand-card transition-all flex items-center justify-center gap-2"
                >
                  {sent ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-white" />
                      <span>Message Sent! We will contact you shortly.</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message (Redirected to info@rak4analytics.com)</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
