import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Activity, Factory, ShoppingBag, Store, Building2, Truck, ShieldAlert, Landmark, Boxes, Sparkles, Layers } from 'lucide-react';
import { INDUSTRIES } from '../data/siteData';

/*
  Industries: one row of slanted panels (same angle as the home banners).
  Photos are shown as an orange duotone and open into full colour when a panel is active.
  Names and descriptions are the copy from the submission deck (slide 10).
  Each panel links to the Solutions page filtered by that industry.
*/
const ICONS = { 'pharma-healthcare': Activity, 'industrial-manufacturing': Factory, 'fmcg-fb': ShoppingBag, retail: Store, 'real-estate': Building2, 'shipping-logistics': Truck, insurance: ShieldAlert, banking: Landmark, distribution: Boxes, 'beauty-wellness': Sparkles, others: Layers };

const PANELS = [
  { id: 'pharma-healthcare', label: 'Pharmaceutical & Healthcare', desc: 'Data-driven insights to optimize patient outcomes, regulatory compliance, and operational efficiency.', img: '/assets/industry-pharma.jpg', pos: '55% 50%' },
  { id: 'industrial-manufacturing', label: 'Industrial & Manufacturing', desc: 'Advanced analytics to improve production efficiency, quality control, and supply chain performance.', img: '/assets/industry-industrial.jpg', pos: '45% 50%' },
  { id: 'fmcg-fb', label: 'FMCG & F&B', desc: 'Consumer and sales analytics to enhance demand forecasting, pricing strategies, and brand performance.', img: '/assets/industry-retail.jpg', pos: '12% 62%', zoom: 1.15 },
  { id: 'retail', label: 'Retail', desc: 'Actionable insights to optimize customer experience, inventory management, and omnichannel growth.', img: '/assets/industry-retail.jpg', pos: '88% 18%', zoom: 1.5 },
  { id: 'real-estate', label: 'Real Estate', desc: 'Market and portfolio analytics to drive smarter investments, pricing, and asset utilization.', art: 'skyline' },
  { id: 'shipping-logistics', label: 'Shipping & Logistics', desc: 'Operational analytics to streamline logistics, reduce costs, and improve delivery performance.', img: '/assets/industry-shipping.jpg', img2: '/assets/industry-ship.jpg', pos: '50% 40%' },
  { id: 'insurance', label: 'Insurance', desc: 'Risk, claims, and customer analytics to enhance underwriting accuracy and profitability.', img: '/assets/industry-insurance.jpg', pos: '40% 50%' },
  { id: 'banking', label: 'Banking', desc: 'Financial analytics to strengthen risk management, customer intelligence, and regulatory compliance.', img: '/assets/industry-banking.jpg', pos: '50% 45%' },
  { id: 'distribution', label: 'Distribution', desc: 'Data insights to optimize channel performance, inventory flow, and partner efficiency.', img: '/assets/industry-distribution.jpg', pos: '65% 60%' },
  { id: 'beauty-wellness', label: 'Beauty & Wellness', desc: 'Consumer behavior analytics to personalize offerings and accelerate brand growth.', img: '/assets/industry-beauty.jpg', pos: '70% 40%' },
  { id: 'others', label: 'Others', desc: 'Customized analytics solutions tailored to unique business models and emerging industries.', art: 'mesh' }
];

function Skyline() {
  return (
    <svg className="ig-art-svg" viewBox="0 0 240 400" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      <defs>
        <pattern id="ig-win" width="10" height="14" patternUnits="userSpaceOnUse"><rect x="2" y="3" width="5" height="7" fill="none" stroke="#ff7415" strokeWidth=".8" opacity=".55" /></pattern>
      </defs>
      {[[8, 210, 56], [72, 120, 70], [150, 170, 50], [208, 250, 40]].map(([x, y, w], i) => (
        <g key={i}><rect x={x} y={y} width={w} height={400 - y} fill="url(#ig-win)" stroke="#ff7415" strokeWidth="1.2" opacity=".9" /><line x1={x} y1={y} x2={x + w} y2={y} stroke="#ffb27d" strokeWidth="2" /></g>
      ))}
      <line x1="0" y1="399" x2="240" y2="399" stroke="#ff7415" strokeWidth="2" />
    </svg>
  );
}

function Mesh() {
  const n = [[24, 60], [92, 28], [170, 74], [58, 150], [140, 176], [210, 130], [34, 250], [110, 282], [190, 246], [70, 350], [160, 366]];
  const e = [[0, 1], [1, 2], [0, 3], [1, 3], [1, 4], [2, 4], [2, 5], [3, 4], [4, 5], [3, 6], [3, 7], [4, 7], [4, 8], [5, 8], [6, 7], [7, 8], [7, 9], [7, 10], [8, 10], [9, 10]];
  return (
    <svg className="ig-art-svg" viewBox="0 0 240 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      {e.map(([a, b], i) => <line key={i} x1={n[a][0]} y1={n[a][1]} x2={n[b][0]} y2={n[b][1]} stroke="#fff" strokeWidth="1" opacity=".45" />)}
      {n.map(([x, y], i) => <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 5 : 3} fill="#fff" opacity=".85" />)}
    </svg>
  );
}

export default function IndustriesSection({ setActiveTab, setSelectedIndustry, openDemoModal }) {
  const [active, setActive] = useState(0);
  const go = id => {
    const industry = INDUSTRIES.find(item => item.id === id);
    setSelectedIndustry(industry ? industry.name : 'all');
    setActiveTab('solutions');
  };

  return (
    <section className="ig" id="industries" aria-labelledby="industries-title">
      <div className="signal-container">
        <div className="ig-head reveal">
          <div>
            <span className="signal-eyebrow">03 / YOUR WORLD, IN FOCUS</span>
            <h2 id="industries-title">We speak<br />your <span>industry.</span></h2>
          </div>
          <div className="ig-head-side">
            <p>The right insights start with the right context. Explore analytics shaped around your market, operations, and ambitions.</p>
            <button className="signal-text-link" onClick={openDemoModal}>Find the right fit<ArrowUpRight size={18} /></button>
          </div>
        </div>

        <div className="ig-rail reveal">
          {PANELS.map((p, i) => {
            const Icon = ICONS[p.id] || Layers;
            const isActive = active === i;
            return (
              <div key={p.id} className={`ig-panel${isActive ? ' is-active' : ''}${p.art ? ` ig-${p.art}` : ''}`} onMouseEnter={() => setActive(i)}>
                <div className="ig-media" aria-hidden="true">
                  {p.img && <img className="ig-img" src={p.img} alt="" loading="lazy" decoding="async" style={{ objectPosition: p.pos, '--zoom': p.zoom || 1 }} />}
                  {p.img2 && <img className="ig-img ig-img-alt" src={p.img2} alt="" loading="lazy" decoding="async" style={{ objectPosition: '50% 50%' }} />}
                  {p.art === 'skyline' && <Skyline />}
                  {p.art === 'mesh' && <Mesh />}
                  <span className="ig-tone" />
                  <span className="ig-shade" />
                </div>
                <button className="ig-tab" aria-expanded={isActive} aria-controls={`ig-${p.id}`} onClick={() => setActive(i)} onFocus={() => setActive(i)}>
                  <span className="ig-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="ig-name">{p.label}</span>
                </button>
                <div className="ig-detail" id={`ig-${p.id}`} role="region" aria-label={p.label}>
                  <span className="ig-icon"><Icon size={22} strokeWidth={1.6} /></span>
                  <h3>{p.label}</h3>
                  <p>{p.desc}</p>
                  <button className="hb-btn" tabIndex={isActive ? 0 : -1} onClick={() => go(p.id)}>Explore solutions<ArrowRight size={18} aria-hidden="true" /></button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
