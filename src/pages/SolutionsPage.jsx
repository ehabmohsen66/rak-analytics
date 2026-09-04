import React, { useState, useMemo } from 'react';
import { 
  Filter, 
  Search, 
  Download, 
  Eye, 
  ShoppingCart, 
  Check, 
  Sparkles, 
  Building2, 
  UserCheck, 
  Layers, 
  ArrowRight,
  RotateCcw,
  SlidersHorizontal
} from 'lucide-react';
import { 
  DASHBOARDS_CATALOG, 
  DEPARTMENTS, 
  POSITIONS, 
  INDUSTRIES, 
  PRODUCTS 
} from '../data/siteData';

export default function SolutionsPage({ 
  addToCart, 
  cartItems, 
  openDemoModal, 
  openDataSheetModal, 
  onSelectDashboard, 
  initialIndustry 
}) {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedPosition, setSelectedPosition] = useState('all');
  const [selectedIndustry, setSelectedIndustry] = useState(initialIndustry || 'all');
  const [selectedProductFamily, setSelectedProductFamily] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSubscriptionTier, setActiveSubscriptionTier] = useState('individual');

  const filteredDashboards = useMemo(() => {
    return DASHBOARDS_CATALOG.filter((item) => {
      // Department
      if (selectedDepartment !== 'all' && item.department !== selectedDepartment) {
        return false;
      }
      // Position
      if (selectedPosition !== 'all' && !item.positions.includes(selectedPosition)) {
        return false;
      }
      // Industry
      if (selectedIndustry !== 'all' && !item.industries.includes(selectedIndustry)) {
        return false;
      }
      // Product Family
      if (selectedProductFamily !== 'all' && item.productFamily !== selectedProductFamily) {
        return false;
      }
      // Search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = item.title.toLowerCase().includes(q);
        const matchDesc = item.description.toLowerCase().includes(q);
        const matchDept = item.department.toLowerCase().includes(q);
        return matchTitle || matchDesc || matchDept;
      }
      return true;
    });
  }, [selectedDepartment, selectedPosition, selectedIndustry, selectedProductFamily, searchQuery]);

  const resetFilters = () => {
    setSelectedDepartment('all');
    setSelectedPosition('all');
    setSelectedIndustry('all');
    setSelectedProductFamily('all');
    setSearchQuery('');
  };

  const hasActiveFilters = selectedDepartment !== 'all' || 
    selectedPosition !== 'all' || 
    selectedIndustry !== 'all' || 
    selectedProductFamily !== 'all' || 
    searchQuery !== '';

  const productFamilies = [
    'all',
    'DataPulse',
    'Odoo Drive',
    'WoodPecker',
    'ProcureVision',
    'FieldSpark',
    'Sales Logic'
  ];

  return (
    <div className="py-10 sm:py-14 bg-[#f7f5f0] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="rak-page-header mb-10 text-center lg:text-left space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#ef6000] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Solutions Catalog & Subscription Shop</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#212529] tracking-tight">
                Enterprise Solutions & Pre-Built Dashboards
              </h1>
              <p className="text-gray-600 text-sm sm:text-base mt-1">
                Filter by Department, Executive Position, Industry vertical, or Product family. Subscribe individually or bundle by module.
              </p>
            </div>

            {/* Quick Actions / Reset */}
            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="self-start lg:self-auto flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-gray-600 hover:text-[#ef6000] bg-white border border-gray-200 rounded-brand-md transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset All Filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Subscription Model Tiers Banner (Docx clarification) */}
        <div className="bg-white rounded-brand-xl p-6 border border-gray-200 shadow-sm mb-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#ef6000]">
                Flexible Subscription Architecture
              </span>
              <h3 className="text-lg font-bold text-[#212529]">
                Choose How You Subscribe to Analytical Dashboards
              </h3>
              <p className="text-xs text-gray-500 max-w-xl">
                Subscribe individually to a specific dashboard, bundle an entire operational module (e.g., Sales Drive), or unlock the entire RAK enterprise suite with full data sheets.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setActiveSubscriptionTier('individual')}
                className={`px-4 py-2 text-xs font-bold rounded-brand-md transition-all ${
                  activeSubscriptionTier === 'individual'
                    ? 'bg-[#212529] text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Individual ($149/mo)
              </button>
              <button
                onClick={() => setActiveSubscriptionTier('module')}
                className={`px-4 py-2 text-xs font-bold rounded-brand-md transition-all ${
                  activeSubscriptionTier === 'module'
                    ? 'bg-[#ef6000] text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Module Bundle ($499/mo)
              </button>
              <button
                onClick={() => {
                  addToCart({
                    id: 'all-dashboards-suite',
                    title: 'All Dashboards Enterprise Suite (Unlimited)',
                    department: 'All Departments',
                    price: 1499,
                    isSuite: true
                  });
                }}
                className="px-5 py-2 text-xs font-extrabold text-white bg-gradient-to-r from-[#ef6000] to-[#dc5500] hover:brightness-105 rounded-brand-md shadow-brand-card transition-all"
              >
                Subscribe All Dashboards ($1,499/mo)
              </button>
            </div>
          </div>
        </div>

        {/* 3-Dimensional Shopping Filter Bar */}
        <div className="bg-white rounded-brand-xl p-6 border border-gray-200 shadow-sm mb-10 space-y-5">
          
          {/* Search bar & Product Family Filter */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-8 relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dashboards by keyword, metric, or KPI (e.g., EBITDA, IQVIA, Inventory)..."
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-brand-md focus:bg-white focus:outline-none focus:border-[#ef6000]"
              />
            </div>

            <div className="md:col-span-4">
              <select
                value={selectedProductFamily}
                onChange={(e) => setSelectedProductFamily(e.target.value)}
                className="w-full py-2.5 px-3 text-xs font-bold bg-gray-50 border border-gray-200 rounded-brand-md focus:outline-none focus:border-[#ef6000] text-[#212529]"
              >
                <option value="all">All Product Families</option>
                {productFamilies.filter(f => f !== 'all').map(p => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Filter Facets Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-gray-100">
            
            {/* 1. By Department */}
            <div className="space-y-1.5">
              <label className="text-xs font-extrabold uppercase tracking-wider text-[#212529] flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#ef6000]" />
                <span>By Department</span>
              </label>
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="w-full py-2 px-3 text-xs bg-gray-50 border border-gray-200 rounded-brand-md focus:outline-none focus:border-[#ef6000] font-medium"
              >
                <option value="all">All Departments (14)</option>
                {DEPARTMENTS.map((dept) => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>

            {/* 2. By Position / Role */}
            <div className="space-y-1.5">
              <label className="text-xs font-extrabold uppercase tracking-wider text-[#212529] flex items-center gap-1.5">
                <UserCheck className="w-3.5 h-3.5 text-[#ef6000]" />
                <span>By Position / Role</span>
              </label>
              <select
                value={selectedPosition}
                onChange={(e) => setSelectedPosition(e.target.value)}
                className="w-full py-2 px-3 text-xs bg-gray-50 border border-gray-200 rounded-brand-md focus:outline-none focus:border-[#ef6000] font-medium"
              >
                <option value="all">All Executive Roles (18)</option>
                {POSITIONS.map((pos) => (
                  <option key={pos} value={pos}>{pos}</option>
                ))}
              </select>
            </div>

            {/* 3. By Industry */}
            <div className="space-y-1.5">
              <label className="text-xs font-extrabold uppercase tracking-wider text-[#212529] flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-[#ef6000]" />
                <span>By Industry</span>
              </label>
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="w-full py-2 px-3 text-xs bg-gray-50 border border-gray-200 rounded-brand-md focus:outline-none focus:border-[#ef6000] font-medium"
              >
                <option value="all">All Industries (11)</option>
                {INDUSTRIES.map((ind) => (
                  <option key={ind.id} value={ind.name}>{ind.name}</option>
                ))}
              </select>
            </div>

          </div>

          {/* Results Summary Bar */}
          <div className="flex items-center justify-between text-xs text-gray-500 pt-2">
            <span>Showing <strong className="text-[#212529]">{filteredDashboards.length}</strong> enterprise dashboard solutions</span>
            {hasActiveFilters && (
              <span className="text-[#ef6000] font-semibold">Active filtering applied</span>
            )}
          </div>
        </div>

        {/* Dashboard Grid */}
        {filteredDashboards.length === 0 ? (
          <div className="bg-white rounded-brand-xl p-12 text-center border border-gray-200">
            <SlidersHorizontal className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-800">No dashboards match your criteria</h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 mb-6">
              Try adjusting your department, position, or industry filters.
            </p>
            <button
              onClick={resetFilters}
              className="px-4 py-2 bg-[#ef6000] text-white text-xs font-bold rounded-brand-md"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
            {filteredDashboards.map((item) => {
              const inCart = cartItems.some(ci => ci.id === item.id);
              const price = activeSubscriptionTier === 'module' ? item.bundlePrice : item.price;
              const period = activeSubscriptionTier === 'module' ? 'mo / module' : 'mo / dashboard';

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-brand-xl border border-gray-200 hover:border-[#ef6000] shadow-sm hover:shadow-brand-card transition-all duration-300 overflow-hidden flex flex-col justify-between group"
                >
                  {/* Top Bar of Card */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="px-2.5 py-0.5 text-[10px] font-extrabold uppercase rounded bg-orange-50 text-[#ef6000] border border-orange-100">
                            {item.department}
                          </span>
                          <span className="px-2.5 py-0.5 text-[10px] font-bold rounded bg-gray-100 text-gray-700">
                            {item.productFamily}
                          </span>
                        </div>
                        <h3 className="text-xl font-extrabold text-[#212529] group-hover:text-[#ef6000] transition-colors">
                          {item.title}
                        </h3>
                      </div>

                      {/* Price Badge */}
                      <div className="text-right shrink-0">
                        <div className="text-xl font-extrabold text-[#212529]">
                          ${price}
                        </div>
                        <div className="text-[10px] font-bold text-gray-500 uppercase">
                          {period}
                        </div>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>

                    {/* KPI Metrics Highlight Box */}
                    <div className="bg-[#f8f9fa] rounded-brand-md p-3.5 border border-gray-100 grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {item.kpis.map((kpi, kidx) => (
                        <div key={kidx} className="space-y-0.5">
                          <div className="text-[10px] text-gray-500 font-medium truncate">
                            {kpi.label}
                          </div>
                          <div className="text-xs sm:text-sm font-extrabold text-[#212529]">
                            {kpi.value}
                          </div>
                          <div className="text-[9px] font-bold text-green-600">
                            {kpi.change}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Features list */}
                    <div className="space-y-1.5 pt-1">
                      {item.features.slice(0, 3).map((feat, fidx) => (
                        <div key={fidx} className="flex items-center gap-2 text-xs text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#ef6000]" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA Actions */}
                  <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      {/* Interactive Preview Button (opens subpage) */}
                      <button
                        onClick={() => onSelectDashboard(item)}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-gray-700 bg-white hover:bg-gray-100 border border-gray-200 rounded-brand-md transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5 text-[#ef6000]" />
                        <span>Preview Live</span>
                      </button>

                      {/* Download Data Sheet Button */}
                      <button
                        onClick={() => openDataSheetModal(item)}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-gray-700 bg-white hover:bg-gray-100 border border-gray-200 rounded-brand-md transition-colors"
                      >
                        <Download className="w-3.5 h-3.5 text-blue-600" />
                        <span>Data Sheet</span>
                      </button>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => openDemoModal(item.title)}
                        className="px-3 py-1.5 text-xs font-bold text-gray-600 hover:text-[#212529] hover:underline"
                      >
                        Request Demo
                      </button>

                      <button
                        onClick={() => addToCart(item, activeSubscriptionTier)}
                        className={`flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-brand-md transition-all shadow-sm ${
                          inCart
                            ? 'bg-green-600 text-white hover:bg-green-700'
                            : 'bg-[#ef6000] text-white hover:bg-[#dc5500]'
                        }`}
                      >
                        {inCart ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>In Cart</span>
                          </>
                        ) : (
                          <>
                            <ShoppingCart className="w-3.5 h-3.5" />
                            <span>Subscribe</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
}
