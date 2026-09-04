import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Database, 
  BarChart, 
  Cpu, 
  Boxes, 
  LineChart, 
  GraduationCap,
  MessageSquare,
  ShieldCheck
} from 'lucide-react';
import { SERVICES } from '../data/siteData';

export default function ServicesPage({ openDemoModal }) {
  const [selectedServiceForRequest, setSelectedServiceForRequest] = useState(null);

  const iconMap = [Database, BarChart, Cpu, Boxes, LineChart, GraduationCap];

  return (
    <div className="py-10 sm:py-14 bg-[#f7f5f0] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header (Slide 21 & 22) */}
        <div className="rak-page-header text-center max-w-5xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#ef6000] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Consulting, Suites & Engineering</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#212529] tracking-tight">
            Curated Services & Custom BI Implementations
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            We don't just deliver data, we deliver results. From hands-on workshops and automated ETL pipeline development to full enterprise suite rollouts.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {SERVICES.map((serv, index) => {
            const IconComp = iconMap[index % iconMap.length];
            return (
              <div
                key={serv.id}
                className="bg-white rounded-brand-xl p-8 border border-gray-200 hover:border-[#ef6000] shadow-sm hover:shadow-brand-card transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-brand-md bg-[#212529] group-hover:bg-[#ef6000] text-white flex items-center justify-center mb-6 transition-colors duration-300">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-[#212529] mb-2 group-hover:text-[#ef6000] transition-colors">
                    {serv.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#ef6000] mb-4">
                    {serv.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                    {serv.desc}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2 mb-6">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                      Key Deliverables:
                    </div>
                    {serv.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-gray-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#ef6000] mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Request Service CTA (Slide 22 requirement) */}
                <div className="pt-5 border-t border-gray-100">
                  <button
                    onClick={() => openDemoModal(`Custom Service: ${serv.title}`)}
                    className="w-full py-2.5 px-4 bg-[#212529] hover:bg-[#ef6000] text-white text-xs font-bold uppercase tracking-wider rounded-brand-md transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Request Service</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Workflow & Engagement Process */}
        <div className="bg-[#212529] text-white rounded-brand-xl p-8 sm:p-12 border border-gray-800 shadow-brand-elevated">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold text-[#ef6000] uppercase tracking-wider">
              How We Work
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Our 4-Phase Delivery Methodology
            </h3>
            <p className="text-xs sm:text-sm text-gray-400">
              A disciplined, collaborative approach ensuring zero disruption to existing business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery Workshop", desc: "Meet key stakeholders to audit schemas, identify bottlenecks, and define critical KPIs." },
              { step: "02", title: "Prototype & Architecture", desc: "Design data models, configure connectors, and present an interactive proof-of-concept." },
              { step: "03", title: "ETL & Deployment", desc: "Build automated ingestion pipelines with automated testing and enterprise access controls." },
              { step: "04", title: "Enablement & ROI", desc: "Executive training, analyst enablement workshops, and continuous quarterly optimization." }
            ].map((phase, idx) => (
              <div key={idx} className="bg-[#1a1f26] p-6 rounded-brand-lg border border-gray-800 relative">
                <span className="text-3xl font-extrabold text-[#ef6000]/30 font-mono absolute top-4 right-4">
                  {phase.step}
                </span>
                <h4 className="text-base font-bold text-white mb-2">{phase.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
