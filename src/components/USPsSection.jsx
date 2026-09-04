import React from 'react';
import { 
  ShieldCheck, 
  Bot, 
  TrendingUp, 
  LayoutDashboard, 
  Boxes,
  Award,
  Users,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { USPS, SITE_INFO } from '../data/siteData';

export default function USPsSection({ setActiveTab, openDemoModal }) {
  const iconMap = {
    ShieldCheck: ShieldCheck,
    Bot: Bot,
    TrendingUp: TrendingUp,
    LayoutDashboard: LayoutDashboard,
    Boxes: Boxes
  };

  const principles = [
    { title: "Collaboration", desc: "Partnering closely to overcome enterprise bottlenecks." },
    { title: "Accountability", desc: "Measurable ROI and transparent SLAs on every deliverable." },
    { title: "Resourcefulness", desc: "Maximizing legacy systems through modern ETL connectors." },
    { title: "Data Quality", desc: "Rigorous automated validation and audit compliance." },
    { title: "Success & Agility", desc: "Iterative sprints delivering actionable BI in weeks, not years." }
  ];

  return (
    <section className="bg-[#f7f5f0] py-24 sm:py-28">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end mb-14 sm:mb-16">
          <div className="lg:col-span-8">
          <div className="rak-kicker text-[#ef6000]">
            <span>Our Core Capabilities</span>
          </div>
          <h2 className="mt-5 max-w-4xl text-[clamp(2.6rem,5vw,5rem)] font-medium leading-[1.02] text-[#17191c] tracking-[-0.06em]">
            Engineered for High-Stakes Enterprise Decisions
          </h2>
          </div>
          <p className="lg:col-span-4 lg:pb-2 text-[#656762] text-sm sm:text-base leading-7">
            Combining private autonomous AI, real-time data orchestration, and battle-tested industry business logic to deliver decisive operational superiority.
          </p>
        </div>

        {/* 5 USPs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5 mb-20">
          {USPS.map((usp, index) => {
            const IconComponent = iconMap[usp.icon] || ShieldCheck;
            return (
              <div
                key={usp.id}
                className={`rak-card group relative min-h-[270px] overflow-hidden bg-white p-7 sm:p-8 rounded-brand-xl flex flex-col justify-between md:col-span-1 ${index < 3 ? 'lg:col-span-4' : 'lg:col-span-6'}`}
              >
                <span className="absolute -right-2 -top-7 font-heading text-[8rem] font-semibold leading-none text-[#17191c]/[0.025]">0{index + 1}</span>
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#17191c] group-hover:bg-[#ef6000] flex items-center justify-center text-white mb-8 transition-colors duration-300">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#17191c] mb-3">
                    {usp.title}
                  </h3>
                  <p className="max-w-xl text-sm text-[#6a6c68] leading-7">
                    {usp.description}
                  </p>
                </div>
                <div className="pt-5 mt-5 border-t border-black/[0.07] flex items-center justify-between font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-[#9a9a93] group-hover:text-[#ef6000]">
                  <span>Capability / 0{index + 1}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Who We Are & Statistics Showcase */}
        <div className="rak-dark-grid rak-noise bg-[#17191c] text-white rounded-[32px] p-7 sm:p-12 lg:p-16 shadow-brand-elevated relative overflow-hidden">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full border border-[#ef6000]/30" />
          <div className="absolute right-10 top-10 h-40 w-40 rounded-full border border-white/10" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="rak-kicker text-[#ff7a22]">
                Who We Are • RAK4 Group Since 2013
              </div>
              <h3 className="max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-[1.08] tracking-[-0.05em]">
                Empowering Organizations Across Canada, GCC, and the Middle East
              </h3>
              <p className="max-w-3xl text-white/55 text-sm sm:text-base leading-7">
                Founded in 2018 (with group heritage established in 2013 across Analytics, Cloud, Communication, and Digital), RAK4Analytics has rapidly grown into a premier data intelligence consultancy. We unify disparate business silos into clear, actionable, executive dashboards that fuel sustainable profitability.
              </p>

              {/* Principles badges */}
              <div className="space-y-3 pt-2">
                <div className="font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-white/35">
                  Principles Of Our Work
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {principles.map((p, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-[#ef6000] mt-0.5 shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-white">{p.title}</div>
                        <div className="text-[11px] leading-5 text-white/40">{p.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => setActiveTab('about')}
                  className="rak-button-primary px-6 py-3.5 text-white font-bold text-xs transition-all"
                >
                  Meet Our Analysts
                </button>
                <button
                  onClick={openDemoModal}
                  className="px-6 py-3.5 bg-white/[0.06] hover:bg-white/10 text-white font-bold text-xs rounded-full transition-all border border-white/15"
                >
                  Request Consultation
                </button>
              </div>
            </div>

            {/* Numeric Stats */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {SITE_INFO.stats.map((stat, i) => (
                <div 
                  key={i} 
                    className="bg-white/[0.045] p-6 sm:p-7 rounded-brand-xl border border-white/10 text-left hover:border-[#ef6000]/60 transition-colors"
                >
                  <div className="text-3xl sm:text-4xl font-semibold text-[#ff7a22] tracking-[-0.05em]">
                    {stat.value}
                  </div>
                  <div className="font-mono text-[8px] font-semibold uppercase tracking-[0.12em] text-white/40 mt-2">
                    {stat.label}
                  </div>
                  {stat.suffix && (
                    <div className="text-[11px] text-gray-500 mt-0.5 font-mono">
                      {stat.suffix}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
