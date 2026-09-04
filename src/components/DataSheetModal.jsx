import React from 'react';
import { X, Download, Printer, ShieldCheck, CheckCircle2, FileText } from 'lucide-react';
import { SITE_INFO } from '../data/siteData';

export default function DataSheetModal({ isOpen, onClose, dashboard }) {
  if (!isOpen || !dashboard) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-brand-xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[92vh] overflow-y-auto print:p-0 print:max-h-none print:shadow-none">
        
        {/* Modal Controls (Hidden when printing) */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-gray-100 print:hidden">
          <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-wider">
            <FileText className="w-4 h-4 text-[#ef6000]" />
            <span>Official Technical Data Sheet (PDF Specification)</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold rounded-brand-md transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-gray-400 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Data Sheet Document Layout (1-2 pages standard) */}
        <div className="space-y-8 bg-white border border-gray-200 p-8 rounded-brand-lg shadow-sm print:border-none print:p-0">
          
          {/* Header */}
          <div className="flex items-start justify-between border-b-2 border-[#ef6000] pb-6">
            <div className="space-y-1">
              <div className="text-2xl font-extrabold text-[#212529]">
                RAK4<span className="text-[#ef6000]">ANALYTICS</span>
              </div>
              <div className="text-xs text-gray-500 font-semibold tracking-wide">
                ENTERPRISE BUSINESS INTELLIGENCE & TELEMATICS
              </div>
              <div className="text-[10px] text-gray-400">
                Doc Ref: DS-{dashboard.id ? dashboard.id.toUpperCase() : 'RAK-01'} • Rev 2026.3
              </div>
            </div>

            <div className="text-right text-xs text-gray-500 space-y-0.5">
              <div className="font-bold text-gray-800">{SITE_INFO.phoneDisplay}</div>
              <div>{SITE_INFO.email}</div>
              <div>{SITE_INFO.regions.join(' • ')}</div>
            </div>
          </div>

          {/* Title & Metadata */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase rounded bg-orange-100 text-[#ef6000]">
                {dashboard.department || 'Enterprise'} Analytics
              </span>
              <span className="px-2.5 py-0.5 text-[10px] font-bold rounded bg-gray-100 text-gray-700">
                {dashboard.productFamily || 'DataPulse Core'}
              </span>
            </div>
            <h1 className="text-2xl font-extrabold text-[#212529]">
              {dashboard.title}
            </h1>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              {dashboard.description}
            </p>
          </div>

          {/* Key Metrics Benchmark Matrix */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#212529] border-l-2 border-[#ef6000] pl-2">
              Performance Metrics & KPI Baseline
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-gray-50 p-4 rounded-brand-md border border-gray-200">
              {dashboard.kpis && dashboard.kpis.map((k, i) => (
                <div key={i}>
                  <div className="text-[10px] text-gray-500">{k.label}</div>
                  <div className="text-base font-extrabold text-[#212529]">{k.value}</div>
                  <div className="text-[10px] font-bold text-green-600">{k.change || '+Optimal'}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture & Feature Breakdown */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#212529] border-l-2 border-[#ef6000] pl-2">
              Architectural Specifications & Deliverables
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {(dashboard.features || [
                "Automated zero-downtime ERP connector",
                "Sub-second drill down from enterprise total to invoice level",
                "Role-based access security and row-level filtering",
                "Automated scheduled email and PDF dispatch engine"
              ]).map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#ef6000] mt-0.5 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Data Governance & SLA */}
          <div className="bg-[#f8f9fa] p-4 rounded-brand-md border border-gray-200 text-xs text-gray-600 space-y-1">
            <div className="font-bold text-gray-800 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-green-600" />
              <span>Enterprise Governance & Compliance</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              Certified for Microsoft Fabric, Azure DP-203, and Power BI PL-300 enterprise environments. Compatible with Odoo Community & Enterprise, SAP, and custom PostgreSQL/Oracle databases.
            </p>
          </div>

          {/* Document Footer */}
          <div className="pt-4 border-t border-gray-200 flex items-center justify-between text-[10px] text-gray-400">
            <span>© 2026 RAK4Analytics SARL. Confidential technical data sheet.</span>
            <span>https://rak4analytics.com</span>
          </div>

        </div>

        {/* Bottom CTA (Hidden in Print) */}
        <div className="pt-6 flex items-center justify-end gap-3 print:hidden">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-bold text-gray-600 hover:text-gray-900"
          >
            Close
          </button>
          <button
            onClick={handlePrint}
            className="px-5 py-2.5 bg-[#ef6000] hover:bg-[#dc5500] text-white font-bold text-xs uppercase tracking-wider rounded-brand-md shadow-brand-card flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>Save Data Sheet PDF</span>
          </button>
        </div>

      </div>
    </div>
  );
}
