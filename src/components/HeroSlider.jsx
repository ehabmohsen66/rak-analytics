import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

/*
  Home page slider: 4 banners from "ANALYTICS - WEBSITE SUBMISSION V10" (slides 4-7).
  Headline, subtext and button text are the exact copy from those slides.
  Redirections follow the slide notes:
    Slider 1 / 4  "Learn More"       -> Services page
    Slider 2      "Request a Demo"   -> Contact page
    Slider 3      "Our Industries"   -> Industries section on the Home page
*/
const SLIDES = [
  {
    id: 'innovation',
    theme: 'orange',
    image: '/assets/hero-slide-1.jpg',
    title: 'EMBRACING INNOVATION, HARNESSING DATA POWER',
    text: 'Let’s take bold steps forward, united in our pursuit of excellence and collective success.',
    cta: 'Learn More',
    target: 'services'
  },
  {
    id: 'dashboards',
    theme: 'dark',
    image: '/assets/hero-slide-2.jpg',
    title: 'CUSTOMIZABLE DASHBOARDS FOR YOUR BUSINESS',
    text: 'Clear, interactive dashboards that help you track performance, spot trends, and make smarter decisions.',
    cta: 'Request a Demo',
    target: 'contact'
  },
  {
    id: 'industries',
    theme: 'orange',
    image: '/assets/hero-slide-3.jpg',
    title: 'UNLOCK INSIGHTS FOR STRATEGIC GROWTH',
    text: 'We cater to a diverse range of industries, providing tailored Data Analytics solutions.',
    cta: 'Our Industries',
    target: 'industries'
  },
  {
    id: 'ai',
    theme: 'gray',
    image: '/assets/hero-slide-4.jpg',
    title: 'DEDICATED AI FOR YOUR BUSINESS DATA',
    text: 'We create tailored AI solutions within your database to deliver insights and power execution at scale.',
    cta: 'Learn More',
    target: 'services'
  }
];

const INTERVAL = 8000;

export default function HeroSlider({ setActiveTab }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useRef(false);
  const count = SLIDES.length;

  useEffect(() => {
    reduceMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  useEffect(() => {
    if (paused || reduceMotion.current) return undefined;
    const timer = setInterval(() => setActive(i => (i + 1) % count), INTERVAL);
    return () => clearInterval(timer);
  }, [paused, active, count]);

  const go = useCallback(target => {
    if (target === 'industries') {
      document.getElementById('industries')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      setActiveTab(target);
    }
  }, [setActiveTab]);

  return (
    <section
      className="hb"
      aria-roledescription="carousel"
      aria-label="RAK Analytics highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="hb-stage" aria-live={paused ? 'polite' : 'off'}>
        {SLIDES.map((slide, i) => {
          const isActive = i === active;
          const Heading = i === 0 ? 'h1' : 'h2';
          return (
            <div
              key={slide.id}
              className={`hb-slide hb-${slide.theme}${isActive ? ' is-active' : ''}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}`}
              aria-hidden={!isActive}
            >
              <img className="hb-img" src={slide.image} alt="" width="1903" height="566" loading={i === 0 ? 'eager' : 'lazy'} decoding="async" />
              <div className="signal-container hb-inner">
                <div className="hb-copy">
                  <Heading>{slide.title}</Heading>
                  <span className="hb-rule" aria-hidden="true" />
                  <p>{slide.text}</p>
                  <button className="hb-btn" tabIndex={isActive ? 0 : -1} onClick={() => go(slide.target)}>
                    {slide.cta}<ArrowRight size={18} aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="hb-controls">
        <div className="signal-container hb-controls-row">
          <div className="hb-dots">
            {SLIDES.map((slide, i) => (
              <button key={slide.id} onClick={() => setActive(i)} aria-label={`Show slide ${i + 1} of ${count}`} aria-current={active === i ? 'true' : undefined}>
                <span className={active === i ? 'selected' : ''} />
              </button>
            ))}
          </div>
          <div className="hb-arrows">
            <button aria-label="Previous slide" onClick={() => setActive((active + count - 1) % count)}><ChevronLeft size={20} /></button>
            <button aria-label="Next slide" onClick={() => setActive((active + 1) % count)}><ChevronRight size={20} /></button>
          </div>
        </div>
      </div>
    </section>
  );
}
