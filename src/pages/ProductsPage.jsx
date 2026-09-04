import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Video, 
  Download, 
  ShieldCheck, 
  Layers,
  ChevronRight
} from 'lucide-react';
import { PRODUCTS } from '../data/siteData';
import ProductLogo from '../components/ProductLogo';

export default function ProductsPage({ 
  selectedProduct, 
  setSelectedProduct, 
  openDemoModal, 
  openVideoModal,
  openDataSheetModal
}) {
  const [activeProdId, setActiveProdId] = useState(
    selectedProduct ? selectedProduct.id : PRODUCTS[0].id
  );

  const activeProduct = PRODUCTS.find(p => p.id === activeProdId) || PRODUCTS[0];

  return (
    <div className="py-10 sm:py-14 bg-[#f7f5f0] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="rak-page-header text-center max-w-5xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#ef6000] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Predefined In-House Solutions</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#212529] tracking-tight">
            RAK Flagship Analytics & AI Products
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Software built to eliminate the complexity of enterprise data. Tailored for life sciences, FMCG commerce, procurement audit, and ERP telematics.
          </p>
        </div>

        {/* Product Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {PRODUCTS.map((prod) => (
            <button
              key={prod.id}
              onClick={() => setActiveProdId(prod.id)}
              className={`px-4 py-2.5 rounded-brand-md text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                activeProdId === prod.id
                  ? 'bg-[#ef6000] text-white shadow-brand-card'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <span>{prod.name}</span>
            </button>
          ))}
        </div>

        {/* Selected Product Hero & Deep Dive */}
        <div className="bg-white rounded-brand-xl border border-gray-200 shadow-sm overflow-hidden mb-12">
          <div className="p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-4">
                  <ProductLogo id={activeProduct.id} name={activeProduct.name} size="lg" />
                  <div>
                    <span className="px-2.5 py-0.5 text-xs font-bold uppercase rounded bg-orange-50 text-[#ef6000]">
                      {activeProduct.category}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#212529] mt-1">
                      {activeProduct.name}
                    </h2>
                    <p className="text-xs sm:text-sm font-semibold text-gray-500">
                      {activeProduct.tagline}
                    </p>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {activeProduct.description}
                </p>

                {/* Bullets */}
                <div className="space-y-3 pt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Key Value Capabilities
                  </div>
                  {activeProduct.bullets.map((b, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-[#ef6000] mt-0.5 shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-3 pt-4">
                  <button
                    onClick={() => openDemoModal(activeProduct.name)}
                    className="px-6 py-3 bg-[#ef6000] hover:bg-[#dc5500] text-white font-bold text-xs uppercase tracking-wider rounded-brand-md shadow-brand-card transition-all"
                  >
                    Request {activeProduct.name} Demo
                  </button>

                  <button
                    onClick={() => openVideoModal(`${activeProduct.name} Showcase`)}
                    className="flex items-center gap-2 px-4 py-3 bg-white hover:bg-gray-50 text-gray-700 font-bold text-xs rounded-brand-md border border-gray-300 transition-colors"
                  >
                    <Video className="w-4 h-4 text-[#ef6000]" />
                    <span>Watch Video Tour</span>
                  </button>

                  <button
                    onClick={() => openDataSheetModal({
                      title: activeProduct.name,
                      department: activeProduct.category,
                      description: activeProduct.description,
                      kpis: [
                        { label: "Deployment", value: "Turnkey" },
                        { label: "Architecture", value: "Enterprise AI" },
                        { label: "SLA", value: "99.9%" }
                      ],
                      features: activeProduct.bullets
                    })}
                    className="flex items-center gap-2 px-4 py-3 bg-white hover:bg-gray-50 text-gray-700 font-bold text-xs rounded-brand-md border border-gray-300 transition-colors"
                  >
                    <Download className="w-4 h-4 text-blue-600" />
                    <span>Download Brochure</span>
                  </button>
                </div>
              </div>

              {/* Right: Architecture & Features Cards */}
              <div className="lg:col-span-5 bg-[#212529] text-white rounded-brand-xl p-6 sm:p-8 space-y-6">
                <div className="flex items-center justify-between border-b border-gray-800 pb-4">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Core Technical Modules
                  </span>
                  <ShieldCheck className="w-4 h-4 text-[#ef6000]" />
                </div>

                <div className="space-y-4">
                  {activeProduct.features.map((f, i) => (
                    <div key={i} className="bg-[#1a1f26] p-4 rounded-brand-md border border-gray-800">
                      <h4 className="text-sm font-bold text-white mb-1">
                        {f.title}
                      </h4>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-orange-950/30 border border-orange-800/40 rounded-brand-md text-xs text-orange-200">
                  <strong>Zero-Risk Deployment:</strong> Connects directly to existing data lakes or ERPs without requiring rip-and-replace infrastructure changes.
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* All Products Quick Matrix */}
        <div className="space-y-6">
          <h3 className="text-xl font-extrabold text-[#212529]">
            Compare All In-House Solutions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.map((p) => (
              <div
                key={p.id}
                onClick={() => setActiveProdId(p.id)}
                className={`p-5 rounded-brand-lg border cursor-pointer transition-all ${
                  activeProdId === p.id
                    ? 'bg-white border-[#ef6000] shadow-brand-card ring-1 ring-[#ef6000]'
                    : 'bg-white border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <ProductLogo id={p.id} name={p.name} size="sm" />
                  <div>
                    <h4 className="font-bold text-sm text-[#212529]">{p.name}</h4>
                    <span className="text-[10px] text-gray-500 font-medium block">{p.category}</span>
                  </div>
                </div>
                <p className="text-xs text-gray-600 line-clamp-2">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
