import React, { useState } from 'react';
import { 
  X, 
  UserCheck, 
  Lock, 
  Key, 
  Download, 
  Calendar, 
  CreditCard, 
  Video, 
  ExternalLink, 
  CheckCircle2, 
  ShieldCheck, 
  Layers,
  Sparkles
} from 'lucide-react';
import { SITE_INFO, DASHBOARDS_CATALOG } from '../data/siteData';

export default function SubscriberPortalModal({ isOpen, onClose, onSelectDashboard }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      setIsLoggedIn(true);
    }
  };

  const activeSubscriptions = [
    {
      id: "sub-101",
      name: "Sales Analytics Master Suite",
      module: "Sales Drive",
      startDate: "2026-01-15",
      renewalDate: "2027-01-15",
      amount: "$149.00 / month",
      status: "Active",
      licenseKey: "RAK-SLS-9842-ENTERPRISE",
      dashRef: DASHBOARDS_CATALOG[0]
    },
    {
      id: "sub-102",
      name: "WoodPecker IQVIA Pharma Market Insights",
      module: "Pharma Intelligence",
      startDate: "2026-03-01",
      renewalDate: "2027-03-01",
      amount: "$199.00 / month",
      status: "Active",
      licenseKey: "RAK-WDP-3129-LIFESCI",
      dashRef: DASHBOARDS_CATALOG[3]
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-brand-xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isLoggedIn ? (
          /* Login View */
          <div className="space-y-6">
            <div className="text-center space-y-2 max-w-md mx-auto">
              <div className="w-12 h-12 rounded-full bg-orange-100 text-[#ef6000] mx-auto flex items-center justify-center">
                <UserCheck className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-extrabold text-[#212529]">
                Subscriber Account Portal
              </h2>
              <p className="text-xs sm:text-sm text-gray-500">
                Log in to view your active dashboard subscriptions, renewal history, license keys, and premium data sheets.
              </p>
            </div>

            <form onSubmit={handleLogin} className="max-w-md mx-auto space-y-4">
              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">Subscriber Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="subscriber@enterprise.com"
                  className="w-full px-3.5 py-2.5 text-xs bg-gray-50 border border-gray-200 rounded-brand-md focus:bg-white focus:outline-none focus:border-[#ef6000]"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">Password / Access Key</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full px-3.5 py-2.5 text-xs bg-gray-50 border border-gray-200 rounded-brand-md focus:bg-white focus:outline-none focus:border-[#ef6000]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#ef6000] hover:bg-[#dc5500] text-white font-bold text-xs uppercase tracking-wider rounded-brand-md shadow-brand-card transition-all"
              >
                Access Account Dashboard
              </button>

              <div className="p-3 bg-gray-50 rounded-brand-md text-[11px] text-gray-500 text-center border border-gray-200">
                <span>Demo credentials: enter any email & password to enter the subscriber area.</span>
              </div>
            </form>
          </div>
        ) : (
          /* Active Account Dashboard */
          <div className="space-y-6 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-4">
              <div>
                <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-green-100 text-green-800 uppercase">
                  Verified Subscriber Account
                </span>
                <h3 className="text-xl font-extrabold text-[#212529] mt-1">
                  Welcome, Enterprise Subscriber
                </h3>
                <div className="text-xs text-gray-500">{email || "subscriber@enterprise.com"}</div>
              </div>

              <button
                onClick={() => setIsLoggedIn(false)}
                className="px-3 py-1.5 text-xs font-bold text-gray-500 hover:text-gray-800 border border-gray-200 rounded-brand-md"
              >
                Log Out
              </button>
            </div>

            {/* Subscriptions History Table (Docx Requirement) */}
            <div className="space-y-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-gray-400">
                Active Subscriptions & Renewal History
              </h4>

              <div className="space-y-3">
                {activeSubscriptions.map((sub) => (
                  <div 
                    key={sub.id}
                    className="p-4 rounded-brand-lg border border-gray-200 bg-[#f8f9fa] space-y-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <div className="text-sm font-extrabold text-[#212529]">{sub.name}</div>
                        <div className="text-xs text-gray-500">Module: {sub.module}</div>
                      </div>
                      <span className="px-2.5 py-1 text-xs font-bold rounded-full bg-green-100 text-green-800 self-start sm:self-auto">
                        {sub.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-gray-600 pt-2 border-t border-gray-200/60">
                      <div>
                        <span className="text-gray-400 block text-[10px]">Renewal Amount:</span>
                        <strong className="text-[#212529]">{sub.amount}</strong>
                      </div>
                      <div>
                        <span className="text-gray-400 block text-[10px]">Next Renewal:</span>
                        <strong>{sub.renewalDate}</strong>
                      </div>
                      <div>
                        <span className="text-gray-400 block text-[10px]">License Key:</span>
                        <code className="font-mono text-[11px] text-[#ef6000]">{sub.licenseKey}</code>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-2">
                      {sub.dashRef && (
                        <button
                          onClick={() => {
                            onClose();
                            onSelectDashboard(sub.dashRef);
                          }}
                          className="px-3 py-1.5 bg-[#ef6000] hover:bg-[#dc5500] text-white font-bold text-xs rounded-brand-md flex items-center gap-1.5 transition-colors"
                        >
                          <Layers className="w-3.5 h-3.5" />
                          <span>Open Premium Dashboard</span>
                        </button>
                      )}
                      <button className="px-3 py-1.5 bg-white hover:bg-gray-100 text-gray-700 font-bold text-xs rounded-brand-md border border-gray-200 flex items-center gap-1.5 transition-colors">
                        <Download className="w-3.5 h-3.5 text-blue-600" />
                        <span>Download Datasheet & Schema</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Subscriber Tutorials & Demos (Docx Requirement) */}
            <div className="p-4 bg-orange-50 border border-orange-200 rounded-brand-lg space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#ef6000] uppercase">
                <Video className="w-4 h-4" />
                <span>Subscriber Video Tutorials & User Guides</span>
              </div>
              <p className="text-xs text-gray-700 leading-relaxed">
                Watch our 10-minute guided walkthrough on how to connect your ERP database, configure automated alert thresholds, and export unredacted financial reports.
              </p>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
