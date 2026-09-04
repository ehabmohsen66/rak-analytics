import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Lock, 
  Unlock, 
  Download, 
  Video, 
  Calendar, 
  Globe2, 
  TrendingUp, 
  Sparkles, 
  ShieldAlert, 
  CheckCircle2, 
  FileSpreadsheet, 
  Layers,
  ChevronRight,
  Eye,
  SlidersHorizontal,
  RefreshCw
} from 'lucide-react';

export default function DashboardSubPage({ 
  dashboard, 
  onBack, 
  openDemoModal, 
  openVideoModal, 
  openDataSheetModal, 
  addToCart, 
  inCart 
}) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [passError, setPassError] = useState(false);
  const [dateRange, setDateRange] = useState('q3');
  const [selectedRegion, setSelectedRegion] = useState('all');

  if (!dashboard) return null;

  const handleUnlock = (e) => {
    e.preventDefault();
    // Allow any demo passcode e.g. "rak2026" or "subscriber" or non-empty for demonstration
    if (passcode.trim().length >= 3) {
      setIsUnlocked(true);
      setPassError(false);
    } else {
      setPassError(true);
    }
  };

  return (
    <div className="py-10 bg-[#f8f9fa] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Breadcrumb & Navigation */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-xs font-bold text-gray-600 hover:text-[#ef6000] transition-colors bg-white px-3.5 py-2 rounded-brand-md border border-gray-200"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Solutions Catalog</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={() => openVideoModal(`${dashboard.title} Walkthrough`)}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-gray-700 bg-white hover:bg-gray-50 border border-gray-200 rounded-brand-md transition-colors"
            >
              <Video className="w-4 h-4 text-[#ef6000]" />
              <span>Watch Video Tour</span>
            </button>

            <button
              onClick={() => openDataSheetModal(dashboard)}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-gray-700 bg-white hover:bg-gray-50 border border-gray-200 rounded-brand-md transition-colors"
            >
              <Download className="w-4 h-4 text-blue-600" />
              <span>Download PDF Data Sheet</span>
            </button>
          </div>
        </div>

        {/* Dashboard Header Bar */}
        <div className="bg-white rounded-brand-xl p-8 border border-gray-200 shadow-sm mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 text-xs font-extrabold uppercase rounded bg-orange-100 text-[#ef6000]">
                  {dashboard.department} Analytics
                </span>
                <span className="px-3 py-1 text-xs font-bold rounded bg-gray-100 text-gray-700">
                  {dashboard.productFamily}
                </span>
                {isUnlocked ? (
                  <span className="px-3 py-1 text-xs font-bold rounded bg-green-100 text-green-800 flex items-center gap-1">
                    <Unlock className="w-3 h-3" />
                    <span>Subscriber Tier: Unlocked</span>
                  </span>
                ) : (
                  <span className="px-3 py-1 text-xs font-bold rounded bg-yellow-100 text-yellow-800 flex items-center gap-1">
                    <Lock className="w-3 h-3" />
                    <span>Free Preview Mode</span>
                  </span>
                )}
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#212529] tracking-tight">
                {dashboard.title}
              </h1>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {dashboard.description}
              </p>
            </div>

            {/* Subscribe & Pricing CTA */}
            <div className="bg-[#f8f9fa] p-5 rounded-brand-lg border border-gray-200 text-right shrink-0 space-y-3">
              <div>
                <div className="text-xs font-bold text-gray-500 uppercase">Individual Subscription</div>
                <div className="text-2xl font-extrabold text-[#212529]">${dashboard.price}<span className="text-xs font-normal text-gray-500"> / month</span></div>
                <div className="text-[11px] text-gray-500">Module Bundle available at ${dashboard.bundlePrice}/mo</div>
              </div>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => addToCart(dashboard)}
                  className={`w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider rounded-brand-md transition-all ${
                    inCart
                      ? 'bg-green-600 hover:bg-green-700 text-white'
                      : 'bg-[#ef6000] hover:bg-[#dc5500] text-white shadow-brand-card'
                  }`}
                >
                  {inCart ? 'Subscribed (In Cart)' : 'Subscribe to Dashboard'}
                </button>
                <button
                  onClick={() => openDemoModal(dashboard.title)}
                  className="w-full py-2 px-4 text-xs font-bold text-gray-700 hover:text-[#212529] border border-gray-300 rounded-brand-md hover:bg-white transition-colors"
                >
                  Request Live Demo
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive BI Dashboard Viewport */}
        <div className="bg-[#1a1f26] rounded-brand-xl border border-gray-800 shadow-2xl p-6 sm:p-8 text-white space-y-8 mb-10">
          
          {/* Dashboard Control Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-gray-800">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#ef6000] animate-pulse" />
              <span className="font-mono text-xs text-gray-400">
                LIVE_BI_VIEWPORT // {dashboard.id.toUpperCase()}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {/* Date Filter */}
              <div className="flex items-center gap-1.5 bg-[#212529] border border-gray-700 rounded-brand-md px-2.5 py-1.5 text-xs text-gray-300">
                <Calendar className="w-3.5 h-3.5 text-[#ef6000]" />
                <select 
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                  className="bg-transparent border-none text-xs text-white focus:outline-none"
                >
                  <option value="7d" className="bg-[#212529]">Last 7 Days</option>
                  <option value="30d" className="bg-[#212529]">Last 30 Days</option>
                  <option value="q3" className="bg-[#212529]">Q3 Fiscal 2026</option>
                  <option value="ytd" className="bg-[#212529]">Year to Date</option>
                </select>
              </div>

              {/* Region Filter */}
              <div className="flex items-center gap-1.5 bg-[#212529] border border-gray-700 rounded-brand-md px-2.5 py-1.5 text-xs text-gray-300">
                <Globe2 className="w-3.5 h-3.5 text-[#ef6000]" />
                <select 
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="bg-transparent border-none text-xs text-white focus:outline-none"
                >
                  <option value="all" className="bg-[#212529]">All Territories</option>
                  <option value="gcc" className="bg-[#212529]">GCC (UAE, KSA, Qatar)</option>
                  <option value="canada" className="bg-[#212529]">Canada & North America</option>
                  <option value="levant" className="bg-[#212529]">Levant Regional</option>
                </select>
              </div>
            </div>
          </div>

          {/* Real-Time KPI Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {dashboard.kpis.map((kpi, idx) => (
              <div 
                key={idx}
                className="bg-[#212529] p-5 rounded-brand-lg border border-gray-800 hover:border-[#ef6000]/60 transition-colors"
              >
                <div className="text-xs text-gray-400 font-medium">
                  {kpi.label}
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                  {kpi.value}
                </div>
                <div className="flex items-center gap-1 text-xs font-bold text-green-400 mt-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>{kpi.change} vs Prev Period</span>
                </div>
              </div>
            ))}
          </div>

          {/* Visual Interactive BI Chart (Interactive Bar & Trend Visualizer) */}
          <div className="bg-[#212529] p-6 rounded-brand-lg border border-gray-800 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-white">
                  Monthly Performance Progression & Variance
                </h3>
                <p className="text-xs text-gray-400">
                  Visual breakdown across the last 6 reported operational cycles
                </p>
              </div>
              <div className="flex items-center gap-4 text-xs">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-sm bg-[#ef6000]" />
                  <span className="text-gray-300">Actual Realized</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-sm bg-gray-600" />
                  <span className="text-gray-300">Baseline Target</span>
                </div>
              </div>
            </div>

            {/* Custom Interactive SVG Chart Canvas */}
            <div className="h-64 w-full flex items-end justify-between gap-4 pt-8 pb-2 px-2 border-b border-gray-800">
              {dashboard.sampleChartData.map((d, index) => {
                const actual = d.actual || d.revenue || d.headcount || d.ourBrand || (d.lineA * 5) || 400;
                const target = d.target || d.expenses || (actual * 0.85);
                const heightPercentActual = Math.min(100, Math.max(25, (actual / 800) * 100));
                const heightPercentTarget = Math.min(100, Math.max(20, (target / 800) * 100));

                return (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2 group relative">
                    {/* Hover Tooltip */}
                    <div className="absolute -top-12 bg-black/90 text-white text-[10px] font-mono py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 whitespace-nowrap border border-gray-700">
                      <div>Actual: {actual}</div>
                      <div>Target: {target}</div>
                    </div>

                    <div className="w-full flex items-end justify-center gap-1.5 h-48">
                      {/* Actual Bar */}
                      <div 
                        className="w-1/2 bg-[#ef6000] hover:bg-[#dc5500] rounded-t-sm transition-all duration-500 relative cursor-pointer"
                        style={{ height: `${heightPercentActual}%` }}
                      />
                      {/* Target Bar */}
                      <div 
                        className="w-1/2 bg-gray-700 hover:bg-gray-600 rounded-t-sm transition-all duration-500 relative cursor-pointer"
                        style={{ height: `${heightPercentTarget}%` }}
                      />
                    </div>
                    <span className="text-xs font-mono text-gray-400">{d.month}</span>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-between text-xs text-gray-400">
              <span>* Showing synchronized telemetry stream. Filter options active.</span>
              <span className="text-[#ef6000] font-bold">Confidence Interval: 98.6%</span>
            </div>
          </div>

          {/* Locked Subscriber Experience (Slide 16 & Docx) */}
          <div className="bg-[#14181d] rounded-brand-lg p-6 sm:p-8 border border-gray-800 relative overflow-hidden">
            {isUnlocked ? (
              /* Unlocked Content View */
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center justify-between border-b border-gray-800 pb-4">
                  <div className="flex items-center gap-2 text-green-400">
                    <Unlock className="w-5 h-5" />
                    <h4 className="text-base font-bold text-white">
                      Subscriber Premium View (Full License Active)
                    </h4>
                  </div>
                  <button
                    onClick={() => setIsUnlocked(false)}
                    className="text-xs text-gray-400 hover:text-white"
                  >
                    Lock Preview
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-[#212529] p-4 rounded-brand-md border border-gray-800">
                    <div className="text-xs text-gray-400">Unfiltered Ledger Export</div>
                    <div className="text-sm font-bold text-white mt-1">Full 25,000+ Records</div>
                    <button className="mt-3 px-3 py-1.5 bg-gray-800 hover:bg-[#ef6000] text-xs font-bold rounded text-white flex items-center gap-1.5 transition-colors">
                      <FileSpreadsheet className="w-3.5 h-3.5" />
                      <span>Download .XLSX</span>
                    </button>
                  </div>

                  <div className="bg-[#212529] p-4 rounded-brand-md border border-gray-800">
                    <div className="text-xs text-gray-400">Automated Weekly Dispatch</div>
                    <div className="text-sm font-bold text-white mt-1">PDF to Executives</div>
                    <div className="text-[11px] text-green-400 mt-2">Active (Dispatched Mondays)</div>
                  </div>

                  <div className="bg-[#212529] p-4 rounded-brand-md border border-gray-800">
                    <div className="text-xs text-gray-400">Agentic AI Copilot API</div>
                    <div className="text-sm font-bold text-white mt-1">Active Integration</div>
                    <div className="text-[11px] text-[#ef6000] mt-2 font-mono">auth_token_active_rak</div>
                  </div>
                </div>

                <div className="p-4 bg-green-950/40 border border-green-800/60 rounded-brand-md text-xs text-green-300">
                  <strong>Subscriber Benefit:</strong> You have full unredacted access to drill-down hierarchies, automated data refreshes every 15 minutes, and direct support SLA response within 2 hours.
                </div>
              </div>
            ) : (
              /* Locked Gate View */
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="space-y-3 max-w-xl text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-900/40 text-yellow-400 text-xs font-bold uppercase tracking-wider border border-yellow-800">
                    <Lock className="w-3.5 h-3.5" />
                    <span>Locked Subscriber Feature</span>
                  </div>
                  <h4 className="text-xl font-extrabold text-white">
                    Unlock Full Drill-Down Analytics & Raw Data Export
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    Full dashboard interaction, ledger-level transaction drill-down, automated scheduled email reports, and raw Excel/PDF export are reserved for active subscribers.
                  </p>
                </div>

                {/* Login / Passcode Input */}
                <form onSubmit={handleUnlock} className="bg-[#212529] p-5 rounded-brand-md border border-gray-800 w-full lg:w-80 space-y-3 shrink-0">
                  <div className="text-xs font-bold text-gray-300">
                    Subscriber Access Login
                  </div>
                  <input
                    type="password"
                    value={passcode}
                    onChange={(e) => setPasscode(e.target.value)}
                    placeholder="Enter subscriber passcode..."
                    className="w-full px-3 py-2 text-xs bg-[#14181d] border border-gray-700 rounded text-white focus:outline-none focus:border-[#ef6000]"
                  />
                  {passError && (
                    <div className="text-[11px] text-red-400">
                      Please enter a valid subscriber passcode (e.g. "rak2026").
                    </div>
                  )}
                  <button
                    type="submit"
                    className="w-full py-2 bg-[#ef6000] hover:bg-[#dc5500] text-white text-xs font-bold uppercase rounded transition-colors"
                  >
                    Unlock Premium Dashboard
                  </button>
                  <div className="text-[10px] text-gray-500 text-center">
                    Demo key: type any password or "rak2026"
                  </div>
                </form>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
