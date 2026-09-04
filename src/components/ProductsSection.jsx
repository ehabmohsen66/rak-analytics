import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  ExternalLink, 
  Download, 
  Sparkles,
  Layers,
  ChevronRight,
  Video
} from 'lucide-react';
import { PRODUCTS } from '../data/siteData';
import ProductLogo from './ProductLogo';

export default function ProductsSection({ 
  setActiveTab, 
  setSelectedProduct, 
  openDemoModal, 
  openVideoModal,
  openDataSheetModal
}) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All In-House Products' },
    { id: 'Pharma & Life Sciences', label: 'Pharma & Life Sciences' },
    { id: 'Enterprise AI & Integration', label: 'AI & ERP Connectors' },
    { id: 'Commercial & FMCG', label: 'Commercial & FMCG' },
    { id: 'ERP Dashboards & BI', label: 'Modular BI' }
  ];

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory || p.category.includes(activeCategory));

  const handleLearnMore = (prod) => {
    setSelectedProduct(prod);
    setActiveTab('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-24 sm:py-28 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="grid lg:grid-cols-12 lg:items-end mb-12 sm:mb-14 gap-6">
          <div className="space-y-3 max-w-3xl lg:col-span-8">
            <div className="rak-kicker text-[#ef6000]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Flagship In-House Solutions</span>
            </div>
            <h2 className="mt-5 text-[clamp(2.5rem,4.5vw,4.6rem)] font-medium leading-[1.02] text-[#17191c] tracking-[-0.06em]">
              Predefined Analytical Products & AI Engines
            </h2>
            <p className="pt-1 text-[#6a6c68] text-sm sm:text-base leading-7">
              Turnkey intelligence software pre-built for specific industries and operational roles. Connect directly to ERPs, field sensors, and commercial databases.
            </p>
          </div>

          <button
            onClick={() => setActiveTab('products')}
            className="lg:col-start-11 lg:col-span-2 lg:justify-self-end self-start flex items-center gap-2 px-5 py-3 bg-[#17191c] hover:bg-[#ef6000] text-white font-bold text-xs rounded-full transition-colors"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none border-b border-black/10">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              className={`px-4 py-2.5 rounded-full text-[11px] font-bold whitespace-nowrap transition-all ${
                activeCategory === c.id
                  ? 'bg-[#ef6000] text-white shadow-sm'
                  : 'bg-[#f7f5f0] text-[#62645f] hover:bg-[#eeebe4] border border-black/[0.08]'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="rak-card bg-[#fbfaf7] rounded-brand-xl p-7 sm:p-8 flex flex-col justify-between group min-h-[430px]"
            >
              <div>
                {/* Product Logo / Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <ProductLogo id={prod.id} name={prod.name} size="md" />
                  <span className="max-w-[55%] px-2.5 py-1 text-[9px] font-mono font-semibold uppercase tracking-wider rounded-full bg-[#ef6000]/[0.08] text-[#d95500] border border-[#ef6000]/15 text-right">
                    {prod.category}
                  </span>
                </div>

                {/* Name & Tagline */}
                <h3 className="text-2xl font-semibold text-[#17191c] group-hover:text-[#ef6000] transition-colors">
                  {prod.name}
                </h3>
                <p className="text-xs font-semibold text-[#8a8b85] mb-4">
                  {prod.tagline}
                </p>

                {/* Description */}
                <p className="text-sm text-[#666862] mb-6 leading-7">
                  {prod.description}
                </p>

                {/* Key Bullet Highlights */}
                <div className="space-y-2 mb-6">
                  {prod.bullets.slice(0, 3).map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#ef6000] mt-0.5 shrink-0" />
                      <span className="line-clamp-2">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => handleLearnMore(prod)}
                  className="flex items-center gap-1.5 text-xs font-bold text-[#ef6000] hover:text-[#dc5500] transition-colors group/link"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => openVideoModal(`${prod.name} Overview`)}
                    className="p-2 text-gray-500 hover:text-[#ef6000] hover:bg-orange-50 rounded-brand-md transition-colors"
                    title="Watch Video"
                  >
                    <Video className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => openDemoModal(prod.name)}
                    className="px-4 py-2 bg-[#17191c] hover:bg-[#ef6000] text-white text-xs font-bold rounded-full transition-colors"
                  >
                    Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
