import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, ArrowDown, ChevronLeft, ChevronRight } from 'lucide-react';

const stories = [
  { label: 'Business intelligence', lead: 'Your data.', accent: 'A sharper', end: 'advantage.', description: 'Bring clarity to complexity. Turn your business data into the insights, decisions, and actions that move you forward.', cta: 'Explore our solutions', route: 'solutions' },
  { label: 'Dashboards & reporting', lead: 'Every signal.', accent: 'One clear', end: 'picture.', description: 'See the whole business. Discover connected dashboards for sales, finance, inventory, and the teams behind your performance.', cta: 'Discover dashboards', route: 'solutions' },
  { label: 'Intelligence for your industry', lead: 'Your industry.', accent: 'Understood', end: 'in depth.', description: 'From pharmaceutical markets to manufacturing floors, make decisions with analytics built around your world.', cta: 'Find your industry', route: 'industries' },
  { label: 'Enterprise AI', lead: 'Intelligence.', accent: 'Built around', end: 'you.', description: 'Connect AI to your own business data. Explore private AI, predictive analytics, and agents designed around your operations.', cta: 'Meet our products', route: 'products' }
];

export default function HeroSlider({ setActiveTab, openDemoModal }) {
  const [active, setActive] = useState(0);
  const story = stories[active];
  const navigate = () => story.route === 'industries' ? document.getElementById('industries')?.scrollIntoView({ behavior: 'smooth' }) : setActiveTab(story.route);
  return (
    <section className="signal-hero" aria-roledescription="carousel" aria-label="RAK Analytics capabilities">
      <div className="hero-art" aria-hidden="true" />
      <div className="hero-shade" aria-hidden="true" />
      <div className="signal-container hero-content">
        <div className="hero-topline"><span className="signal-eyebrow"><i /> DATA. INTELLIGENCE. IMPACT.</span><span className="hero-coordinate">RAK ANALYTICS · EST. 2018</span></div>
        <div className="hero-story" key={active} aria-live="polite" aria-atomic="true">
          <div className="hero-category"><span>0{active + 1}</span> / {story.label}</div>
          <h1>{story.lead}<br /><span>{story.accent}</span><br />{story.end}</h1>
          <p>{story.description}</p>
          <div className="hero-actions"><button className="signal-button orange" onClick={navigate}>{story.cta}<ArrowUpRight size={19} /></button><button className="signal-text-link" onClick={openDemoModal}>Let’s talk <ArrowRight size={18} /></button></div>
        </div>
        <div className="hero-art-caption"><span className="caption-cross">+</span><span>COMPLEXITY, CONNECTED.<br /><strong>CLARITY, UNLOCKED.</strong></span></div>
        <div className="hero-bottom"><button className="scroll-cue" onClick={() => document.getElementById('intelligence')?.scrollIntoView({ behavior: 'smooth' })}><span className="round-outline"><ArrowDown size={17}/></span> Discover the difference</button><div className="hero-pagination"><div className="hero-track">{stories.map((item, i) => <button key={item.label} onClick={() => setActive(i)} aria-label={`Show ${item.label}`} aria-current={active === i ? 'true' : undefined}><span className={active === i ? 'selected' : ''}/></button>)}</div><span className="hero-page-count">0{active + 1} <em>/ 04</em></span><button className="round-outline" aria-label="Previous slide" onClick={() => setActive((active + 3) % 4)}><ChevronLeft size={18}/></button><button className="round-outline" aria-label="Next slide" onClick={() => setActive((active + 1) % 4)}><ChevronRight size={18}/></button></div></div>
      </div>
    </section>
  );
}
