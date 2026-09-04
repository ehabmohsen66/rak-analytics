import React, { useState } from 'react';
import { 
  Sparkles, 
  Handshake, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Building, 
  Send 
} from 'lucide-react';
import { PARTNERS } from '../data/siteData';

export default function PartnersPage() {
  const [partnerForm, setPartnerForm] = useState({
    company: '',
    contactName: '',
    email: '',
    partnershipType: 'Technology Alliance',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setPartnerForm({
        company: '',
        contactName: '',
        email: '',
        partnershipType: 'Technology Alliance',
        message: ''
      });
    }, 4000);
  };

  return (
    <div className="py-10 sm:py-14 bg-[#f7f5f0] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header (Slide 26 & 27) */}
        <div className="rak-page-header text-center max-w-5xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#ef6000] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Strategic Alliances</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#212529] tracking-tight">
            Our Ecosystem Partners & Technology Alliances
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            We collaborate with world-class mobility, cybersecurity, and enterprise cloud providers to deliver seamless, secure, and sovereign data intelligence.
          </p>
        </div>

        {/* Strategic Partners Cards (Slide 27) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {PARTNERS.map((partner) => (
            <div
              key={partner.id}
              className="bg-white rounded-brand-xl p-8 border border-gray-200 hover:border-[#ef6000] shadow-sm hover:shadow-brand-card transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 text-xs font-bold uppercase rounded bg-orange-50 text-[#ef6000] border border-orange-100">
                    {partner.badge}
                  </span>
                  <Handshake className="w-5 h-5 text-[#ef6000]" />
                </div>

                <h3 className="text-2xl font-extrabold text-[#212529]">
                  {partner.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {partner.desc}
                </p>

                <div className="space-y-2 pt-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                    Core Collaboration Vectors:
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {partner.capabilities.map((cap, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#ef6000] shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <span>Certified Alliance Tier</span>
                <span className="font-bold text-[#ef6000]">Active Integration</span>
              </div>
            </div>
          ))}
        </div>

        {/* Become a Partner Form */}
        <div className="bg-white rounded-brand-xl p-8 sm:p-12 border border-gray-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold text-[#ef6000] uppercase tracking-wider">
                Grow With Us
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#212529]">
                Become an Authorized RAK Analytics Partner
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Whether you are an ERP implementation agency, systems integrator, software vendor, or consulting firm, our partner program provides revenue-sharing, co-selling resources, and white-label dashboard suites.
              </p>

              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-[#ef6000]" />
                  <span>Attractive recurring subscription revenue share</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-[#ef6000]" />
                  <span>Dedicated BI architecture and engineering support</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-[#ef6000]" />
                  <span>Co-branded collateral and demo sandbox access</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-gray-700 block mb-1">Company Name *</label>
                    <input
                      type="text"
                      required
                      value={partnerForm.company}
                      onChange={(e) => setPartnerForm({ ...partnerForm, company: e.target.value })}
                      placeholder="e.g. Acme Technologies"
                      className="w-full px-3.5 py-2.5 text-xs bg-gray-50 border border-gray-200 rounded-brand-md focus:bg-white focus:outline-none focus:border-[#ef6000]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-700 block mb-1">Contact Name *</label>
                    <input
                      type="text"
                      required
                      value={partnerForm.contactName}
                      onChange={(e) => setPartnerForm({ ...partnerForm, contactName: e.target.value })}
                      placeholder="Your full name"
                      className="w-full px-3.5 py-2.5 text-xs bg-gray-50 border border-gray-200 rounded-brand-md focus:bg-white focus:outline-none focus:border-[#ef6000]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-gray-700 block mb-1">Work Email *</label>
                    <input
                      type="email"
                      required
                      value={partnerForm.email}
                      onChange={(e) => setPartnerForm({ ...partnerForm, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-3.5 py-2.5 text-xs bg-gray-50 border border-gray-200 rounded-brand-md focus:bg-white focus:outline-none focus:border-[#ef6000]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-700 block mb-1">Partnership Track</label>
                    <select
                      value={partnerForm.partnershipType}
                      onChange={(e) => setPartnerForm({ ...partnerForm, partnershipType: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-gray-50 border border-gray-200 rounded-brand-md focus:bg-white focus:outline-none focus:border-[#ef6000]"
                    >
                      <option value="Technology Alliance">Technology Alliance</option>
                      <option value="ERP Integrator / Reseller">ERP Integrator / Reseller</option>
                      <option value="Consulting & Advisory">Consulting & Advisory</option>
                      <option value="Academic & Research">Academic & Research</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">Proposed Collaboration Details</label>
                  <textarea
                    rows={3}
                    value={partnerForm.message}
                    onChange={(e) => setPartnerForm({ ...partnerForm, message: e.target.value })}
                    placeholder="Briefly describe your client base, ERP expertise, and geographic focus..."
                    className="w-full px-3.5 py-2.5 text-xs bg-gray-50 border border-gray-200 rounded-brand-md focus:bg-white focus:outline-none focus:border-[#ef6000]"
                  />
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 bg-[#ef6000] hover:bg-[#dc5500] text-white font-bold text-xs uppercase tracking-wider rounded-brand-md transition-colors flex items-center gap-2"
                >
                  {submitted ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-white" />
                      <span>Application Submitted!</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Partner Application</span>
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
