import React from 'react';
import { 
  Activity, 
  Factory, 
  ShoppingBag, 
  Store, 
  Building2, 
  Truck, 
  ShieldAlert, 
  Landmark, 
  Boxes, 
  Sparkles, 
  Layers,
  ArrowRight,
  Headphones
} from 'lucide-react';
import { INDUSTRIES } from '../data/siteData';

export default function IndustriesSection({ setActiveTab, setSelectedIndustry, openDemoModal }) {
  const iconMap = {
    Activity: Activity,
    Factory: Factory,
    ShoppingBag: ShoppingBag,
    Store: Store,
    Building2: Building2,
    Truck: Truck,
    ShieldAlert: ShieldAlert,
    Landmark: Landmark,
    Boxes: Boxes,
    Sparkles: Sparkles,
    Layers: Layers
  };

  const handleIndustryClick = (industryName) => {
    if (setSelectedIndustry) {
      setSelectedIndustry(industryName);
    }
    setActiveTab('solutions');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-24 sm:py-28 bg-[#f7f5f0]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-16 space-y-4">
          <div className="rak-kicker text-[#ef6000]">
            <span>Specialized Sector Intelligence</span>
          </div>
          <h2 className="text-[clamp(2.5rem,4.5vw,4.6rem)] font-medium leading-[1.03] text-[#17191c] tracking-[-0.06em]">
            Tailored Analytics for Every Industry
          </h2>
          <p className="max-w-2xl mx-auto text-[#6a6c68] text-sm sm:text-base leading-7">
            Every vertical has unique data schemas, KPIs, and regulatory constraints. We provide purpose-built analytical models tuned to your industry dynamics.
          </p>
        </div>

        {/* 11 Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 mb-16">
          {INDUSTRIES.map((ind) => {
            const IconComp = iconMap[ind.icon] || Activity;
            return (
              <div
                key={ind.id}
                onClick={() => handleIndustryClick(ind.name)}
                className="rak-card group cursor-pointer p-6 sm:p-7 rounded-brand-xl bg-white flex flex-col justify-between min-h-[250px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-full bg-[#17191c] group-hover:bg-[#ef6000] text-white flex items-center justify-center transition-colors duration-300">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[8px] font-semibold uppercase tracking-wider text-[#858680] bg-[#f7f5f0] group-hover:bg-orange-50 px-2.5 py-1.5 rounded-full border border-black/[0.07] group-hover:border-orange-200 group-hover:text-[#ef6000] transition-colors">
                      {ind.count} Dashboards
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-[#17191c] group-hover:text-[#ef6000] mb-2 transition-colors">
                    {ind.name}
                  </h3>
                  <p className="text-sm text-[#6a6c68] leading-6 line-clamp-3">
                    {ind.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-black/[0.07] flex items-center justify-between text-[11px] font-bold text-[#ef6000]">
                  <span>Explore Solutions</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Free Business Assessment Banner (Slide 10) */}
        <div className="rak-dark-grid rak-noise relative overflow-hidden rounded-[32px] bg-[#17191c] text-white p-8 sm:p-12 lg:p-14 shadow-brand-elevated border border-white/5">
          <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full border border-[#ef6000]/30" />
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl text-center lg:text-left">
              <div className="rak-kicker text-[#ff7a22]">
                <Headphones className="w-3.5 h-3.5" />
                <span>Executive Consultation</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-medium text-white leading-tight">
                Not sure what fits your business needs?
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Speak directly with our senior data architects for a free business assessment. We will evaluate your current ERP schema, reporting bottlenecks, and propose an actionable 90-day roadmap.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <button
                onClick={openDemoModal}
                className="rak-button-primary w-full sm:w-auto px-6 py-3.5 text-white font-bold text-xs transition-all"
              >
                Request Free Assessment
              </button>
              <button
                onClick={() => setActiveTab('contact')}
                className="w-full sm:w-auto px-6 py-3.5 bg-white/[0.06] hover:bg-white/10 text-white font-bold text-xs rounded-full border border-white/15 transition-all"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
