import React from 'react';
import { X, Shield, FileText } from 'lucide-react';

export default function TermsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-brand-xl max-w-3xl w-full p-6 sm:p-10 shadow-2xl relative max-h-[85vh] overflow-y-auto space-y-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#ef6000] text-xs font-bold uppercase tracking-wider">
            <Shield className="w-3.5 h-3.5" />
            <span>Legal & Compliance</span>
          </div>
          <h2 className="text-2xl font-extrabold text-[#212529]">
            Terms and Conditions & Cookie Policy
          </h2>
          <p className="text-xs text-gray-500">
            Last revised: September 2026 • RAK4Analytics SARL
          </p>
        </div>

        {/* Content matching Slide 32 verbatim */}
        <div className="text-xs sm:text-sm text-gray-700 leading-relaxed space-y-4 border-t border-gray-100 pt-4">
          <h4 className="font-extrabold text-base text-[#212529]">1. Introduction</h4>
          <p>
            Welcome to <strong>RAK4ANALYTICS</strong>! By using our website and using the services we provide, you acknowledge that you have read and agreed to our Terms and Conditions. These Terms and Conditions unconditionally apply to all related services and website extensions. If you are not in agreement with all of these Terms and Conditions, you must not use this website.
          </p>

          <h4 className="font-extrabold text-base text-[#212529]">2. Cookie Policy</h4>
          <p>
            This website uses cookies. By using this website and agreeing to these terms and conditions, you consent to our use of cookies in accordance with the terms of our privacy policy to enhance navigation, analyze site usage, and assist in our marketing efforts.
          </p>

          <h4 className="font-extrabold text-base text-[#212529]">3. License to Use Website</h4>
          <p>
            Unless otherwise stated, RAK4ANALYTICS and its licensors own the intellectual property rights in the website and material on the website. Subject to the license below, all these intellectual property rights are reserved.
          </p>
          <p>You must not:</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            <li>Republish material from this website (including republication on another website);</li>
            <li>Sell, rent, or sub-license material from the website;</li>
            <li>Show any material from the website in public without express written permission;</li>
            <li>Reproduce, duplicate, copy, or otherwise exploit material on this website for a commercial purpose;</li>
            <li>Edit or otherwise modify any material on the website;</li>
            <li>Redistribute material from this website, except for content specifically and expressly made available for redistribution.</li>
          </ul>

          <h4 className="font-extrabold text-base text-[#212529]">4. Acceptable Use</h4>
          <p>
            You must not use this website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website; or in any way which is unlawful, illegal, fraudulent, or harmful, or in connection with any unlawful, illegal, fraudulent, or harmful purpose or activity.
          </p>
          <p>
            You must not use this website to copy, store, host, transmit, send, use, publish, or distribute any material which consists of (or is linked to) any spyware, computer virus, Trojan horse, worm, keystroke logger, rootkit, or other malicious computer software.
          </p>
        </div>

        <div className="pt-4 border-t border-gray-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#212529] hover:bg-[#ef6000] text-white font-bold text-xs uppercase rounded-brand-md transition-colors"
          >
            I Acknowledge & Agree
          </button>
        </div>
      </div>
    </div>
  );
}
