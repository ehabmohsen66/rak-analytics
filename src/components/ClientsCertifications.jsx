import React from 'react';
import { Award, Quote, CheckCircle2, ShieldCheck } from 'lucide-react';
import { CLIENTS, CERTIFICATIONS } from '../data/siteData';

export default function ClientsCertifications() {
  return (
    <section className="py-24 sm:py-28 bg-[#eeebe4]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Multi-Industry Clients Testimonials (Slide 25) */}
        <div className="mb-20">
          <div className="text-center max-w-4xl mx-auto mb-14 space-y-4">
            <div className="rak-kicker text-[#ef6000]">
              <span>Trusted Across The Region</span>
            </div>
            <h2 className="text-[clamp(2.5rem,4.5vw,4.6rem)] font-medium leading-[1.03] text-[#17191c] tracking-[-0.06em]">
              Proven Impact with Enterprise Leaders
            </h2>
            <p className="max-w-2xl mx-auto text-[#6a6c68] text-sm sm:text-base leading-7">
              Delivering quantifiable ROI and operational precision for Fortune 500 multinationals and regional conglomerates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {CLIENTS.map((c, i) => (
              <div
                key={i}
                className="rak-card bg-white rounded-brand-xl p-7 flex flex-col justify-between min-h-[260px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading font-semibold text-lg text-[#17191c] tracking-tight">
                      {c.name}
                    </span>
                    <span className="px-2 py-1 text-[8px] font-mono font-semibold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full">
                      {c.metric}
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-gray-500 mb-3">
                    {c.role}
                  </div>
                  <p className="text-sm text-[#646762] leading-6 italic relative">
                    "{c.quote}"
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-black/[0.07] flex items-center gap-2 font-mono text-[8px] uppercase tracking-wider font-semibold text-[#94958f]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#ef6000]" />
                  <span>Verified Client Outcome</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Certifications Strip (Slide 3) */}
        <div className="bg-[#17191c] text-white rounded-[30px] p-8 sm:p-10 shadow-brand-elevated">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-[#ef6000] text-white flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">
                  Industry Certified Analytical Engineers
                </h3>
                <p className="text-xs text-white/40">
                  Our architecture team holds premier global accreditations in Cloud BI, Big Data, and AI Engineering
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-white/50">
              <ShieldCheck className="w-4 h-4 text-green-600" />
              <span>100% Certified Data Governance</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {CERTIFICATIONS.map((cert, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-medium bg-white/[0.05] text-white/55 border border-white/10 hover:border-[#ef6000] hover:text-white transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#ef6000]" />
                <span>{cert}</span>
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
