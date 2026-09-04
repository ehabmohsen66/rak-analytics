import React from 'react';
import { 
  Sparkles, 
  Users, 
  CheckCircle, 
  Award, 
  Target, 
  ShieldCheck, 
  TrendingUp, 
  Quote, 
  ArrowRight 
} from 'lucide-react';
import { SITE_INFO, TEAM_MEMBERS, CLIENTS } from '../data/siteData';

export default function AboutPage({ openDemoModal }) {
  return (
    <div className="py-10 sm:py-14 bg-[#f7f5f0] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header (Slide 24) */}
        <div className="rak-page-header text-center max-w-5xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#ef6000] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Know More About The Group</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#212529] tracking-tight">
            Founded in 2013 • RAK4 Group
          </h1>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Comprised of four departments, RAK4 Group was established in 2013 to cater to and develop businesses from the ground up by employing its constituting pillars: Analytics, Cloud, Communication, and Digital to enable sustainable growth.
          </p>
        </div>

        {/* Big Numbers Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {SITE_INFO.stats.map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded-brand-xl border border-gray-200 text-center shadow-sm">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#ef6000]">
                {stat.value}
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-gray-800 mt-2">
                {stat.label}
              </div>
              {stat.suffix && (
                <div className="text-[11px] text-gray-500 font-medium mt-1">
                  {stat.suffix}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Message from the Board (Slide 24) */}
        <div className="bg-[#212529] text-white rounded-brand-xl p-8 sm:p-12 border border-gray-800 shadow-brand-elevated mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="text-xs font-bold text-[#ef6000] uppercase tracking-wider">
                Message From The Board
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                "Let's Take Bold Steps Forward, United in Our Pursuit of Excellence"
              </h2>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                As we navigate the ever-changing business landscape, we remain committed to delivering excellence. Our dedicated team and commitment to innovation enable us to provide cutting-edge solutions and strategic insights to drive growth.
              </p>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                We believe in collaboration and building strong partnerships to overcome challenges and seize opportunities. We reaffirm our commitment to ethical practices and responsible corporate citizenship as we strive to shape a brighter future together by embracing innovation, harnessing the power of data, and unlocking the untapped potential within our client organizations.
              </p>
            </div>

            <div className="lg:col-span-4 bg-[#1a1f26] p-6 rounded-brand-lg border border-gray-800 text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-[#ef6000]/20 text-[#ef6000] mx-auto flex items-center justify-center font-extrabold text-xl">
                RAK
              </div>
              <div>
                <h4 className="font-bold text-white text-base">RAK4 Leadership</h4>
                <div className="text-xs text-[#ef6000] font-semibold">Board of Directors</div>
              </div>
              <div className="text-[11px] text-gray-400">
                Canada • GCC • Middle East
              </div>
            </div>
          </div>
        </div>

        {/* Curated Strategic Services Matrix (Slide 24) */}
        <div className="bg-white rounded-brand-xl p-8 sm:p-12 border border-gray-200 shadow-sm mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold text-[#ef6000] uppercase tracking-wider">
              Pillars of Excellence
            </span>
            <h3 className="text-2xl font-extrabold text-[#212529]">
              Curated, Strategic, and Distinctive Services
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Data Automation", desc: "Automate data collection and processing to save time and resources, ensuring your data is always up-to-date." },
              { title: "Data Visualization", desc: "Transform data into visually compelling dashboards that reveal hidden patterns and trends." },
              { title: "Real-Time Reporting", desc: "Access real-time financial, operational, and commercial data with zero human lag." },
              { title: "Data Integration", desc: "Combine data from multiple disparate sources (ERPs, CRMs, cloud buckets) for comprehensive analysis." },
              { title: "Performance Monitoring", desc: "Track organizational and employee performance against key industry benchmarks." },
              { title: "Cash Flow Analysis", desc: "Gain predictive insights into your cash flow, working capital, and runway with dynamic reporting." }
            ].map((s, idx) => (
              <div key={idx} className="p-5 rounded-brand-lg bg-[#f8f9fa] border border-gray-200 hover:border-[#ef6000] transition-colors">
                <div className="w-2 h-2 rounded-full bg-[#ef6000] mb-3" />
                <h4 className="text-base font-bold text-[#212529] mb-2">{s.title}</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Meet Our Data Analysts (Slide 24) */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold text-[#ef6000] uppercase tracking-wider">
              Our Specialists
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#212529]">
              Meet Our Data Analysts & Architects
            </h3>
            <p className="text-xs sm:text-sm text-gray-500">
              Seasoned data scientists, BI practitioners, and ERP engineers dedicated to your operational success.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_MEMBERS.map((member, i) => (
              <div key={i} className="bg-white rounded-brand-xl p-6 border border-gray-200 shadow-sm text-center space-y-3">
                <div className="w-20 h-20 rounded-full bg-[#212529] text-white flex items-center justify-center font-extrabold text-xl mx-auto border-2 border-[#ef6000]">
                  {member.name.substring(0, 2)}
                </div>
                <div>
                  <h4 className="font-bold text-base text-[#212529]">{member.name}</h4>
                  <div className="text-xs text-[#ef6000] font-semibold">{member.role}</div>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {member.bio}
                </p>
                <div className="pt-2 border-t border-gray-100 text-[11px] font-bold text-gray-500">
                  Focus: {member.focus}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Multi-Industry Clients (Slide 25) */}
        <div className="bg-white rounded-brand-xl p-8 sm:p-12 border border-gray-200 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold text-[#ef6000] uppercase tracking-wider">
              Client Portfolio
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#212529]">
              Multi-Industry Enterprise Clients
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CLIENTS.map((client, i) => (
              <div key={i} className="p-6 rounded-brand-lg bg-[#f8f9fa] border border-gray-200 space-y-2">
                <h4 className="font-extrabold text-lg text-[#212529]">{client.name}</h4>
                <div className="text-xs text-[#ef6000] font-semibold">{client.role}</div>
                <p className="text-xs text-gray-600 leading-relaxed italic">
                  "{client.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
