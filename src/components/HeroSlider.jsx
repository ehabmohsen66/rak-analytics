import React, { useEffect, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Play,
  ShieldCheck,
  Sparkles,
  TrendingUp
} from 'lucide-react';
import { HERO_SLIDES } from '../data/siteData';

const chartBars = [38, 52, 44, 67, 58, 78, 71, 92, 83, 100, 88, 112];

export default function HeroSlider({ setActiveTab, openDemoModal, openVideoModal }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return undefined;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const slide = HERO_SLIDES[currentSlide];
  const words = slide.title.split(' ');
  const accentStart = Math.max(1, words.length - 2);
  const titleLead = words.slice(0, accentStart).join(' ');
  const titleAccent = words.slice(accentStart).join(' ');

  const navigateToSlideLink = () => {
    if (slide.link === 'products') setActiveTab('products');
    else setActiveTab('solutions');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      className="rak-dark-grid rak-noise relative min-h-[720px] overflow-hidden bg-[#17191c] text-white lg:min-h-[790px]"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      aria-roledescription="carousel"
      aria-label="RAK Analytics capabilities"
    >
      <div className="absolute -right-40 -top-52 h-[610px] w-[610px] rounded-full border border-[#ef6000]/20" />
      <div className="absolute -right-20 -top-36 h-[460px] w-[460px] rounded-full border border-white/10" />
      <div className="absolute right-44 top-24 h-3 w-3 rounded-full bg-[#ef6000] shadow-[0_0_50px_20px_rgba(239,96,0,0.4)]" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#ef6000]/10 blur-[110px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_42%,rgba(239,96,0,0.12),transparent_27rem)]" />

      <div className="relative z-10 mx-auto flex min-h-[720px] max-w-[1440px] flex-col px-4 py-12 sm:px-6 lg:min-h-[790px] lg:px-10 lg:py-16">
        <div className="flex items-center justify-between border-b border-white/10 pb-4 font-mono text-[9px] uppercase tracking-[0.18em] text-white/40 sm:text-[10px]">
          <span>RAK / Enterprise intelligence</span>
          <span className="flex items-center gap-2 text-white/60">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Systems online
          </span>
        </div>

        <div className="grid flex-1 grid-cols-1 items-center gap-12 py-12 lg:grid-cols-12 lg:gap-8 lg:py-14">
          <div className="lg:col-span-7 xl:col-span-7">
            <div key={slide.id} className="animate-fadeIn">
              <div className="rak-kicker mb-7 text-[#ff7a22]">
                <Sparkles className="h-3.5 w-3.5" />
                <span>{slide.badge}</span>
              </div>

              <h1 className="max-w-[880px] font-heading text-[clamp(3.35rem,6.6vw,7.1rem)] font-medium leading-[0.92] tracking-[-0.07em] text-white">
                <span>{titleLead} </span>
                <span className="text-[#ef6000]">{titleAccent}</span>
              </h1>

              <p className="mt-7 max-w-2xl text-sm font-medium leading-7 text-white/60 sm:text-base sm:leading-8">
                {slide.subtitle}
              </p>

              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2.5">
                {slide.highlights.map((item) => (
                  <div key={item} className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.08em] text-white/65 sm:text-[10px]">
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#ef6000]/15 text-[#ff7a22]">
                      <Check className="h-2.5 w-2.5" />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <button
                  onClick={navigateToSlideLink}
                  className="rak-button-primary flex h-13 items-center gap-3 px-6 py-3.5 text-xs font-bold text-white sm:px-7"
                >
                  <span>{slide.ctaPrimary}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </button>

                <button
                  onClick={openDemoModal}
                  className="flex h-13 items-center gap-3 rounded-full border border-white/15 bg-white/[0.06] px-6 py-3.5 text-xs font-bold text-white transition-colors hover:bg-white/10"
                >
                  <span>{slide.ctaSecondary}</span>
                  <ArrowRight className="h-4 w-4 text-[#ef6000]" />
                </button>

                <button
                  onClick={() => openVideoModal(slide.title)}
                  className="group ml-1 flex items-center gap-2.5 px-2 py-3 text-[11px] font-semibold text-white/55 transition-colors hover:text-white"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-colors group-hover:border-[#ef6000] group-hover:bg-[#ef6000]">
                    <Play className="ml-0.5 h-3.5 w-3.5 fill-current" />
                  </span>
                  Watch film
                </button>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:col-span-5 lg:block xl:pl-8">
            <div className="absolute -left-6 top-14 z-20 rounded-brand-lg border border-white/10 bg-white/[0.07] px-4 py-3 backdrop-blur-xl animate-[rakFloat_6s_ease-in-out_infinite]">
              <div className="font-mono text-[8px] uppercase tracking-[0.14em] text-white/45">Forecast accuracy</div>
              <div className="mt-1 flex items-end gap-2">
                <span className="font-heading text-2xl font-semibold text-white">96.4%</span>
                <span className="mb-1 flex items-center gap-0.5 text-[9px] font-bold text-emerald-400"><TrendingUp className="h-3 w-3" /> 8.2%</span>
              </div>
            </div>

            <div className="relative rotate-[1.2deg] rounded-[30px] border border-white/10 bg-white/[0.055] p-2 shadow-[0_40px_120px_-35px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-transform duration-500 hover:rotate-0">
              <div className="rounded-[23px] border border-white/10 bg-[#101215]/95 p-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div>
                    <div className="font-mono text-[8px] uppercase tracking-[0.17em] text-white/35">Executive command center</div>
                    <div className="mt-1 font-heading text-sm font-semibold text-white">Business pulse / Live</div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#ef6000]" />
                    <span className="h-2 w-2 rounded-full bg-white/15" />
                    <span className="h-2 w-2 rounded-full bg-white/15" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 py-5">
                  <div className="rounded-brand-lg border border-white/10 bg-white/[0.035] p-4">
                    <div className="font-mono text-[8px] uppercase tracking-wider text-white/35">Revenue</div>
                    <div className="mt-2 font-heading text-2xl font-semibold text-white">$4.85M</div>
                    <div className="mt-1 text-[9px] font-bold text-emerald-400">+24.8% year on year</div>
                  </div>
                  <div className="rounded-brand-lg border border-[#ef6000]/35 bg-[#ef6000]/10 p-4">
                    <div className="font-mono text-[8px] uppercase tracking-wider text-[#ff9b59]">OEE index</div>
                    <div className="mt-2 font-heading text-2xl font-semibold text-white">88.4%</div>
                    <div className="mt-1 text-[9px] font-bold text-[#ff9b59]">Optimal performance</div>
                  </div>
                </div>

                <div className="rounded-brand-lg border border-white/10 bg-white/[0.025] p-5">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-white/45">Cross-regional velocity</span>
                    <span className="rounded-full bg-white/[0.06] px-2.5 py-1 font-mono text-[8px] text-white/50">Q3 / Forecast</span>
                  </div>
                  <div className="flex h-32 items-end justify-between gap-2 border-b border-white/10">
                    {chartBars.map((height, index) => (
                      <div key={index} className="group relative flex h-full flex-1 items-end">
                        <div
                          className={`w-full rounded-t-sm transition-all duration-700 ${index > 8 ? 'bg-[#ef6000]' : 'bg-white/15 group-hover:bg-white/30'}`}
                          style={{ height: `${height}px` }}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 flex justify-between font-mono text-[7px] uppercase tracking-wider text-white/25">
                    <span>Jan</span><span>Jun</span><span>Dec</span>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <div className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-wider text-white/40">
                    <ShieldCheck className="h-3.5 w-3.5 text-[#ef6000]" />
                    Private AI architecture
                  </div>
                  <button onClick={() => setActiveTab('solutions')} className="text-[10px] font-bold text-[#ff7a22] hover:text-white">
                    Explore modules
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-end justify-between border-t border-white/10 pt-5">
          <div className="flex items-center gap-2">
            {HERO_SLIDES.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setCurrentSlide(index)}
                className={`group flex items-center gap-2 rounded-full py-2 font-mono text-[9px] uppercase tracking-wider transition-all ${
                  currentSlide === index ? 'pr-4 text-white' : 'pr-1 text-white/30 hover:text-white/70'
                }`}
                aria-label={`Show slide ${index + 1}: ${item.title}`}
                aria-current={currentSlide === index ? 'true' : undefined}
              >
                <span className={`h-1.5 rounded-full transition-all duration-500 ${currentSlide === index ? 'w-9 bg-[#ef6000]' : 'w-1.5 bg-white/25 group-hover:bg-white/50'}`} />
                <span className={currentSlide === index ? 'block' : 'hidden sm:block'}>0{index + 1}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="mr-3 hidden font-mono text-[9px] uppercase tracking-[0.14em] text-white/30 sm:block">
              {String(currentSlide + 1).padStart(2, '0')} / {String(HERO_SLIDES.length).padStart(2, '0')}
            </span>
            <button
              onClick={() => setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1))}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-[#ef6000] hover:text-white"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-[#ef6000] hover:text-white"
              aria-label="Next slide"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
