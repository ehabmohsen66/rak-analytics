import React, { useCallback, useEffect, useState } from 'react';
import {
  ChevronLeft, ChevronRight, Play, ShieldCheck, Bot, TrendingUp, LayoutDashboard, Boxes,
  Building2, Layers, Award
} from 'lucide-react';
import { PRODUCTS, INDUSTRIES, CERTIFICATIONS } from '../data/siteData';
import { articles as NEWS } from '../pages/NewsPage';

/*
  "Corporate" home page, laid out after the7.io/elementor-corporate as shown in the
  approved home page mockup (submission deck, slide 3). All copy comes from the
  submission deck / current site content; banners are the ones already used on the site.
*/

const reduceMotion = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function useAutoplay(next, delay, paused) {
  useEffect(() => {
    if (paused || reduceMotion()) return undefined;
    const t = setInterval(next, delay);
    return () => clearInterval(t);
  }, [next, delay, paused]);
}

/* ---------- Hero slider (deck slides 4-7) ---------- */
const SLIDES = [
  { id: 'innovation', image: '/assets/gif/Banner-1-v1.gif', still: '/assets/static/hero-slide-1.jpg', title: 'Embracing innovation, harnessing data power', text: 'Let’s take bold steps forward, united in our pursuit of excellence and collective success.', cta: 'Learn More', target: 'services' },
  { id: 'dashboards', image: '/assets/gif/Banner-2-v1.gif', still: '/assets/static/hero-slide-2.jpg', title: 'Customizable dashboards for your business', text: 'Clear, interactive dashboards that help you track performance, spot trends, and make smarter decisions.', cta: 'Request a Demo', target: 'contact' },
  { id: 'industries', image: '/assets/gif/Futuristic-Port-Logistics-and-Global-Trade-v1.gif', still: '/assets/static/hero-slide-3.jpg', title: 'Unlock insights for strategic growth', text: 'We cater to a diverse range of industries, providing tailored Data Analytics solutions.', cta: 'Our Industries', target: 'industries' },
  { id: 'ai', image: '/assets/gif/Banner-4-v1.gif', still: '/assets/static/hero-slide-4.jpg', title: 'Dedicated AI for your business data', text: 'We create tailored AI solutions within your database to deliver insights and power execution at scale.', cta: 'Learn More', target: 'services' }
];

function NetworkLines({ className }) {
  const n = [[10, 40], [70, 18], [130, 60], [40, 110], [110, 140], [180, 105], [20, 190], [90, 215], [160, 190], [60, 265], [140, 280], [205, 240]];
  const e = [[0, 1], [1, 2], [0, 3], [1, 3], [1, 4], [2, 4], [2, 5], [3, 4], [4, 5], [3, 6], [3, 7], [4, 7], [4, 8], [5, 8], [6, 7], [7, 8], [7, 9], [7, 10], [8, 10], [9, 10], [8, 11], [10, 11], [5, 11]];
  return (
    <svg className={className} viewBox="0 0 220 300" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      {e.map(([a, b], i) => <line key={i} x1={n[a][0]} y1={n[a][1]} x2={n[b][0]} y2={n[b][1]} />)}
      {n.map(([x, y], i) => <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 3 : 2} />)}
    </svg>
  );
}

function Hero({ setActiveTab, isStatic }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const next = useCallback(() => setIndex(i => (i + 1) % SLIDES.length), []);
  const prev = () => setIndex(i => (i - 1 + SLIDES.length) % SLIDES.length);
  useAutoplay(next, 7000, paused);

  const go = target => {
    if (target === 'industries') { document.getElementById('corp-industries')?.scrollIntoView({ behavior: 'smooth' }); return; }
    setActiveTab(target);
  };

  return (
    <section className="corp-hero" aria-roledescription="carousel" aria-label="Highlights" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
      <NetworkLines className="corp-hero-net" />
      {SLIDES.map((s, i) => (
        <div key={s.id} className={`corp-hero-slide${i === index ? ' is-active' : ''}`} aria-hidden={i !== index} role="group" aria-roledescription="slide" aria-label={`${i + 1} of ${SLIDES.length}`}>
          <div className="corp-container corp-hero-inner">
            <div className="corp-hero-copy">
              {i === 0 ? <h1>{s.title}</h1> : <h2>{s.title}</h2>}
              <span className="corp-hero-rule" aria-hidden="true" />
              <p>{s.text}</p>
              <button className="corp-btn corp-btn-white" tabIndex={i === index ? 0 : -1} onClick={() => go(s.target)}>{s.cta}</button>
            </div>
          </div>
          <div className="corp-hero-visual" aria-hidden="true">
            <img src={isStatic ? s.still : s.image} alt="" loading={i === 0 ? 'eager' : 'lazy'} decoding="async" />
          </div>
        </div>
      ))}
      <button className="corp-hero-arrow is-prev" onClick={prev} aria-label="Previous slide"><ChevronLeft size={34} /></button>
      <button className="corp-hero-arrow is-next" onClick={next} aria-label="Next slide"><ChevronRight size={34} /></button>
      <div className="corp-hero-dots" role="tablist" aria-label="Choose slide">
        {SLIDES.map((s, i) => <button key={s.id} role="tab" aria-selected={i === index} aria-label={`Slide ${i + 1}`} onClick={() => setIndex(i)} />)}
      </div>
    </section>
  );
}

/* ---------- Features strip (deck slide 8) ---------- */
const FEATURES = [
  { icon: ShieldCheck, title: 'Private AI', text: 'Secure, enterprise-grade AI deployed within your environment, ensuring full control over data and compliance.' },
  { icon: Bot, title: 'Agentic AI', text: 'Autonomous AI agents that analyze data, take action, and drive operational efficiency at scale.' },
  { icon: TrendingUp, title: 'Predictive Analysis', text: 'Use historical and real-time data to forecast trends, identify risks, and support smarter business decisions.' },
  { icon: LayoutDashboard, title: 'Pre-Built Business Dashboards', text: 'Industry-ready dashboard solutions that provide real-time visibility into operations, finance, sales, and performance.' },
  { icon: Boxes, title: 'ERP Integration', text: 'Seamlessly connect your ERP systems to unify data, automate reporting, and enable real-time business insights.' }
];

function Features() {
  const [start, setStart] = useState(0);
  const visible = [0, 1, 2, 3].map(o => FEATURES[(start + o) % FEATURES.length]);
  return (
    <section className="corp-features" aria-label="What we offer">
      <div className="corp-container corp-features-inner">
        <div className="corp-features-row">
          {visible.map(f => {
            const Icon = f.icon;
            return (
              <article className="corp-feature" key={f.title}>
                <span className="corp-feature-icon"><Icon size={30} strokeWidth={1.5} aria-hidden="true" /></span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </article>
            );
          })}
        </div>
        <button className="corp-features-next" onClick={() => setStart(s => (s + 1) % FEATURES.length)} aria-label="Show next feature"><ChevronRight size={26} /></button>
      </div>
    </section>
  );
}

/* ---------- Video ---------- */
function VideoBlock({ openVideoModal, isStatic }) {
  return (
    <section className="corp-video" aria-label="Company video">
      <div className="corp-container">
        <button className="corp-video-frame" onClick={() => openVideoModal('RAK Analytics in action')} aria-label="Play the RAK Analytics video">
          <img src={isStatic ? '/assets/gif/Futuristic-Port-Logistics-poster.jpg' : '/assets/gif/Futuristic-Port-Logistics-and-Global-Trade-v1.gif'} alt="" loading="lazy" decoding="async" />
          <span className="corp-video-play" aria-hidden="true"><Play size={38} fill="currentColor" /></span>
        </button>
      </div>
    </section>
  );
}

/* ---------- Welcome: tabs + product carousel (deck slides 8-9) ---------- */
const TABS = [
  { id: 'who', label: 'Who we are' },
  { id: 'expertise', label: 'Our expertise' },
  { id: 'principles', label: 'Principle of our work' }
];

const PRODUCT_COPY = {
  woodpecker: 'Transform IQVIA data into actionable insights, predictive foresight, and strategic decision intelligence.',
  intellix: 'An AI solution that integrates with company databases, ERP systems, and reporting tools to provide real-time data access.',
  fieldspark: 'A reporting tool that enhances field team performance through data-driven insights.',
  procurevision: 'A comprehensive dashboard tool for procurement operations, providing deep insights and analysis.',
  saleslogic: 'Advanced analytics for FMCG and pharmaceutical sales, enhancing visibility and optimizing performance.',
  datapulse: 'Pre-built, customizable analytics dashboards for ERP systems that provide instant insights.'
};
const CAROUSEL_PRODUCTS = ['woodpecker', 'intellix', 'fieldspark', 'procurevision', 'saleslogic', 'datapulse']
  .map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);

function ProductCard({ setActiveTab, setSelectedProduct }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const next = useCallback(() => setIndex(i => (i + 1) % CAROUSEL_PRODUCTS.length), []);
  const prev = () => setIndex(i => (i - 1 + CAROUSEL_PRODUCTS.length) % CAROUSEL_PRODUCTS.length);
  useAutoplay(next, 4500, paused);
  const p = CAROUSEL_PRODUCTS[index];
  return (
    <aside className="corp-side-card" aria-label="Our products" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
      <button className="corp-side-arrow is-prev" onClick={prev} aria-label="Previous product"><ChevronLeft size={26} /></button>
      <button className="corp-side-arrow is-next" onClick={next} aria-label="Next product"><ChevronRight size={26} /></button>
      <div className="corp-side-card-body" key={p.id} aria-live="polite">
        <span className="corp-side-circle"><img src={`/assets/logos/${p.id}.svg`} alt="" loading="lazy" /></span>
        <h3>{p.name}</h3>
        <p>{PRODUCT_COPY[p.id]}</p>
        <button className="corp-btn corp-btn-dark" onClick={() => { setSelectedProduct(p); window.location.hash = `products/${p.id}`; }}>Learn more<span className="sr-only"> about {p.name}</span></button>
      </div>
    </aside>
  );
}

function Welcome({ setActiveTab, setSelectedProduct }) {
  const [tab, setTab] = useState('who');
  const onKey = e => {
    const i = TABS.findIndex(t => t.id === tab);
    if (e.key === 'ArrowRight') setTab(TABS[(i + 1) % TABS.length].id);
    if (e.key === 'ArrowLeft') setTab(TABS[(i - 1 + TABS.length) % TABS.length].id);
  };
  return (
    <section className="corp-welcome" aria-labelledby="corp-welcome-title">
      <div className="corp-container">
        <h2 id="corp-welcome-title" className="corp-heading">Welcome to the analytics world</h2>
        <div className="corp-welcome-grid">
          <div>
            <div className="corp-tabs" role="tablist" aria-label="About RAK Analytics" onKeyDown={onKey}>
              {TABS.map(t => <button key={t.id} role="tab" id={`corp-tab-${t.id}`} aria-selected={tab === t.id} aria-controls={`corp-panel-${t.id}`} tabIndex={tab === t.id ? 0 : -1} onClick={() => setTab(t.id)}>{t.label}</button>)}
            </div>
            <div className="corp-tab-panel" role="tabpanel" id={`corp-panel-${tab}`} aria-labelledby={`corp-tab-${tab}`}>
              <img className="corp-tab-photo" src="/assets/corporate/who-we-are.jpg" alt="RAK Analytics consultants reviewing a report with a client" width="642" height="867" loading="lazy" decoding="async" />
              <div className="corp-tab-copy">
                {tab === 'who' && <>
                  <p>Founded in 2018, RAK4Analytics has rapidly grown to become a leading provider of data analytics solutions and services. With a strong presence in Canada, GCC, and the Middle East, we empower organizations to harness the power of their data and drive smarter decision-making.</p>
                  <button className="corp-link" onClick={() => setActiveTab('about')}>Learn more about us</button>
                </>}
                {tab === 'expertise' && <>
                  <p>We can help you with</p>
                  <ul className="corp-check-list">{['Data Analytics', 'Data Automation', 'Data Visualization', 'Business Intelligence'].map(x => <li key={x}>{x}</li>)}</ul>
                  <button className="corp-link" onClick={() => setActiveTab('services')}>Explore our services</button>
                </>}
                {tab === 'principles' && <>
                  <ul className="corp-check-list is-two-col">{['Collaboration', 'Accountability', 'Resourcefulness', 'Data Quality', 'Success', 'Agility'].map(x => <li key={x}>{x}</li>)}</ul>
                  <button className="corp-link" onClick={() => setActiveTab('about')}>How we work</button>
                </>}
              </div>
            </div>
          </div>
          <ProductCard setActiveTab={setActiveTab} setSelectedProduct={setSelectedProduct} />
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA band (deck slide 10) ---------- */
function CtaBand({ setActiveTab, isStatic }) {
  return (
    <section className="corp-cta" aria-labelledby="corp-cta-title">
      <img className="corp-cta-bg" src={isStatic ? '/assets/gif/Banner-6-poster.jpg' : '/assets/gif/Banner-6-v1.gif'} alt="" loading="lazy" decoding="async" />
      <NetworkLines className="corp-cta-net" />
      <div className="corp-container corp-cta-inner">
        <p className="corp-cta-kicker">Not sure what fits your business needs?</p>
        <h2 id="corp-cta-title">Speak with our experts for a free business assessment.</h2>
        <button className="corp-btn corp-btn-white corp-btn-lg" onClick={() => setActiveTab('contact')}>Get in touch to request a demo</button>
      </div>
    </section>
  );
}

/* ---------- Industries carousel (deck slide 10) ---------- */
const INDUSTRY_MEDIA = {
  'pharma-healthcare': { img: '/assets/industry-pharma.jpg', pos: '55% 50%' },
  'industrial-manufacturing': { img: '/assets/industry-industrial.jpg', pos: '45% 50%' },
  'fmcg-fb': { img: '/assets/industry-retail.jpg', pos: '12% 62%' },
  retail: { img: '/assets/industry-retail.jpg', pos: '88% 30%' },
  'real-estate': { icon: Building2 },
  'shipping-logistics': { img: '/assets/industry-shipping.jpg', pos: '50% 40%' },
  insurance: { img: '/assets/industry-insurance.jpg', pos: '40% 50%' },
  banking: { img: '/assets/industry-banking.jpg', pos: '50% 45%' },
  distribution: { img: '/assets/industry-distribution.jpg', pos: '65% 60%' },
  'beauty-wellness': { img: '/assets/industry-beauty.jpg', pos: '70% 40%' },
  others: { icon: Layers }
};
const INDUSTRY_COPY = {
  'pharma-healthcare': ['Pharmaceutical & Healthcare', 'Data-driven insights to optimize patient outcomes, regulatory compliance, and operational efficiency.'],
  'industrial-manufacturing': ['Industrial & Manufacturing', 'Advanced analytics to improve production efficiency, quality control, and supply chain performance.'],
  'fmcg-fb': ['FMCG & F&B', 'Consumer and sales analytics to enhance demand forecasting, pricing strategies, and brand performance.'],
  retail: ['Retail', 'Actionable insights to optimize customer experience, inventory management, and omnichannel growth.'],
  'real-estate': ['Real Estate', 'Market and portfolio analytics to drive smarter investments, pricing, and asset utilization.'],
  'shipping-logistics': ['Shipping & Logistics', 'Operational analytics to streamline logistics, reduce costs, and improve delivery performance.'],
  insurance: ['Insurance', 'Risk, claims, and customer analytics to enhance underwriting accuracy and profitability.'],
  banking: ['Banking', 'Financial analytics to strengthen risk management, customer intelligence, and regulatory compliance.'],
  distribution: ['Distribution', 'Data insights to optimize channel performance, inventory flow, and partner efficiency.'],
  'beauty-wellness': ['Beauty & Wellness', 'Consumer behavior analytics to personalize offerings and accelerate brand growth.'],
  others: ['Others', 'Customized analytics solutions tailored to unique business models and emerging industries.']
};

function useVisibleCount() {
  const get = () => (typeof window === 'undefined' ? 4 : window.innerWidth < 560 ? 1 : window.innerWidth < 900 ? 2 : window.innerWidth < 1100 ? 3 : 4);
  const [count, setCount] = useState(get);
  useEffect(() => { const onResize = () => setCount(get()); window.addEventListener('resize', onResize); return () => window.removeEventListener('resize', onResize); }, []);
  return count;
}

function Industries({ setActiveTab, setSelectedIndustry }) {
  const count = useVisibleCount();
  const [start, setStart] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = INDUSTRIES.length;
  const next = useCallback(() => setStart(s => (s + 1) % total), [total]);
  useAutoplay(next, 4000, paused);
  const items = Array.from({ length: count }, (_, o) => INDUSTRIES[(start + o) % total]);
  const open = ind => { setSelectedIndustry(ind.name); setActiveTab('solutions'); };
  return (
    <section className="corp-industries" id="corp-industries" aria-labelledby="corp-industries-title" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
      <div className="corp-container">
        <h2 id="corp-industries-title" className="corp-heading">Our industries</h2>
        <div className="corp-carousel">
          <button className="corp-carousel-arrow" onClick={() => setStart(s => (s - 1 + total) % total)} aria-label="Previous industries"><ChevronLeft size={36} strokeWidth={2.6} /></button>
          <div className="corp-industry-row" style={{ '--cols': count }}>
            {items.map(ind => {
              const media = INDUSTRY_MEDIA[ind.id] || { icon: Layers };
              const [title, text] = INDUSTRY_COPY[ind.id] || [ind.name, ind.desc];
              const Icon = media.icon;
              return (
                <article className="corp-industry" key={ind.id}>
                  <button className="corp-industry-media" onClick={() => open(ind)} aria-label={`Explore ${title} solutions`}>
                    {media.img ? <img src={media.img} alt="" loading="lazy" decoding="async" style={{ objectPosition: media.pos }} /> : <span className="corp-industry-fallback"><Icon size={56} strokeWidth={1.2} aria-hidden="true" /></span>}
                  </button>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              );
            })}
          </div>
          <button className="corp-carousel-arrow" onClick={next} aria-label="Next industries"><ChevronRight size={36} strokeWidth={2.6} /></button>
        </div>
      </div>
    </section>
  );
}

/* ---------- Certifications ---------- */
function Certifications() {
  const count = Math.min(3, useVisibleCount());
  const [start, setStart] = useState(0);
  const total = CERTIFICATIONS.length;
  const items = Array.from({ length: count }, (_, o) => CERTIFICATIONS[(start + o) % total]);
  return (
    <section className="corp-certs" aria-labelledby="corp-certs-title">
      <div className="corp-container">
        <h2 id="corp-certs-title" className="corp-heading is-small">Certified by leading technology providers</h2>
        <p className="corp-subheading">Validated through enterprise-grade certifications for security, integration, and scalability.</p>
        <div className="corp-carousel is-compact">
          <button className="corp-carousel-arrow is-light" onClick={() => setStart(s => (s - 1 + total) % total)} aria-label="Previous certifications"><ChevronLeft size={30} /></button>
          <div className="corp-cert-row" style={{ '--cols': count }}>
            {items.map(name => {
              const [title, code] = name.split(/\s\((?=[A-Z0-9-]+\)$)/);
              return (
                <article className="corp-cert" key={name}>
                  <div className="corp-cert-inner">
                    <span className="corp-cert-script">Certificate</span>
                    <h3>{title}</h3>
                    {code && <span className="corp-cert-code">{code.replace(')', '')}</span>}
                    <span className="corp-cert-seal" aria-hidden="true"><Award size={26} /></span>
                  </div>
                </article>
              );
            })}
          </div>
          <button className="corp-carousel-arrow is-light" onClick={() => setStart(s => (s + 1) % total)} aria-label="Next certifications"><ChevronRight size={30} /></button>
        </div>
      </div>
    </section>
  );
}

/* ---------- News & client stories ---------- */
const NEWS_THUMBS = ['/assets/gif/Banner-2-poster.jpg', '/assets/gif/Banner-4-poster.jpg', '/assets/gif/Banner-1-poster.jpg', '/assets/gif/Futuristic-Port-Logistics-poster.jpg'];
const STORIES = [
  { name: 'Nestlé', sector: 'Consumer goods', color: '#ef6000', text: 'Automate data collection and processing to save time and resources, ensuring your data is always up-to-date.' },
  { name: 'Mersaco', sector: 'Pharmaceuticals', color: '#8e1f7e', text: 'We possess comprehensive understanding of the healthcare landscape and incorporate advanced systems to deliver value.' },
  { name: 'Mike Sport', sector: 'Retail', color: '#e7b416', text: 'We help understand customer behaviour, personalize offerings, optimize inventory, and boost sales.' },
  { name: 'Al Wataniya Gypsum Company', sector: 'Manufacturing', color: '#1aa3d9', text: 'Our solutions help improve efficiency, predict maintenance needs, and enable data-driven decisions.' }
];

function CloudMark({ color }) {
  return (
    <svg viewBox="0 0 64 64" width="64" height="64" aria-hidden="true">
      <circle cx="32" cy="32" r="32" fill={color} />
      <path d="M21 39h22a8 8 0 0 0 0-16 11 11 0 0 0-21-2 8 8 0 0 0-1 18Z" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinejoin="round" />
      <path d="M32 28v16m0 0-4 4m4-4 4 4" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

function StoryCard({ setActiveTab }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const next = useCallback(() => setIndex(i => (i + 1) % STORIES.length), []);
  useAutoplay(next, 5000, paused);
  const s = STORIES[index];
  return (
    <aside className="corp-side-card is-story" aria-label="Client stories" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
      <button className="corp-side-arrow is-prev" onClick={() => setIndex(i => (i - 1 + STORIES.length) % STORIES.length)} aria-label="Previous client story"><ChevronLeft size={24} /></button>
      <button className="corp-side-arrow is-next" onClick={next} aria-label="Next client story"><ChevronRight size={24} /></button>
      <div className="corp-side-card-body" key={s.name} aria-live="polite">
        <span className="corp-side-circle is-mark"><CloudMark color={s.color} /></span>
        <span className="corp-side-eyebrow">{s.sector}</span>
        <h3>{s.name}</h3>
        <p>{s.text}</p>
        <button className="corp-btn corp-btn-orange" onClick={() => setActiveTab('contact')}>Contact us</button>
      </div>
    </aside>
  );
}

function News({ setActiveTab }) {
  return (
    <section className="corp-news" aria-labelledby="corp-news-title">
      <div className="corp-container">
        <h2 id="corp-news-title" className="corp-heading">Recent news &amp; events</h2>
        <div className="corp-news-grid">
          <ul className="corp-news-list">
            {NEWS.slice(0, 3).map((a, i) => (
              <li key={a.id}>
                <button className="corp-news-item" onClick={() => { window.location.hash = `news/${a.id}`; }}>
                  <img src={NEWS_THUMBS[i]} alt="" loading="lazy" decoding="async" />
                  <span className="corp-news-copy">
                    <span className="corp-news-meta">{a.category} · {a.date}</span>
                    <strong>{a.title}</strong>
                    <span>{a.intro}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
          <StoryCard setActiveTab={setActiveTab} />
        </div>
      </div>
    </section>
  );
}

/* ---------- Client logos ---------- */
const CLIENT_MARKS = [
  { name: 'Nestlé', cls: 'is-nestle' },
  { name: 'mersaco', sub: 'BEYOND CARE', cls: 'is-mersaco' },
  { name: 'MIKE SPORT', cls: 'is-mike' },
  { name: 'AL WATANIYA', sub: 'GYPSUM COMPANY', cls: 'is-wataniya' }
];

function Clients() {
  const count = useVisibleCount();
  const [start, setStart] = useState(0);
  const total = CLIENT_MARKS.length;
  const items = Array.from({ length: Math.min(count, total) }, (_, o) => CLIENT_MARKS[(start + o) % total]);
  return (
    <section className="corp-clients" aria-labelledby="corp-clients-title">
      <div className="corp-container">
        <h2 id="corp-clients-title" className="corp-heading is-xs">We are proud to work with these companies</h2>
        <div className="corp-carousel is-compact">
          <button className="corp-carousel-arrow is-light" onClick={() => setStart(s => (s - 1 + total) % total)} aria-label="Previous clients"><ChevronLeft size={34} /></button>
          <ul className="corp-client-row" style={{ '--cols': items.length }}>
            {items.map(c => <li key={c.name} className={`corp-client ${c.cls}`}><span>{c.name}</span>{c.sub && <small>{c.sub}</small>}</li>)}
          </ul>
          <button className="corp-carousel-arrow is-light" onClick={() => setStart(s => (s + 1) % total)} aria-label="Next clients"><ChevronRight size={34} /></button>
        </div>
      </div>
    </section>
  );
}

export default function CorporateHome({ setActiveTab, setSelectedProduct, setSelectedIndustry, openVideoModal, isStatic }) {
  return (
    <div className="corp-home">
      <Hero setActiveTab={setActiveTab} isStatic={isStatic} />
      <Features />
      <VideoBlock openVideoModal={openVideoModal} isStatic={isStatic} />
      <Welcome setActiveTab={setActiveTab} setSelectedProduct={setSelectedProduct} />
      <CtaBand setActiveTab={setActiveTab} isStatic={isStatic} />
      <Industries setActiveTab={setActiveTab} setSelectedIndustry={setSelectedIndustry} />
      <Certifications />
      <News setActiveTab={setActiveTab} />
      <Clients />
    </div>
  );
}
