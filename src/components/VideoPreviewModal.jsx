import React from 'react';
import { X, Play, ShieldCheck } from 'lucide-react';

export default function VideoPreviewModal({ isOpen, onClose, title }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#1a1f26] text-white rounded-brand-xl max-w-3xl w-full p-6 shadow-2xl relative border border-gray-800">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-2 mb-4">
          <span className="text-xs font-bold text-[#ef6000] uppercase tracking-wider">
            Video Presentation & Feature Walkthrough
          </span>
          <h3 className="text-xl font-extrabold text-white">
            {title || "RAK Analytics Platform Overview"}
          </h3>
        </div>

        {/* Video Player Container */}
        <div className="relative aspect-video rounded-brand-lg overflow-hidden bg-black border border-gray-800 flex items-center justify-center">
          <video
            controls
            autoPlay
            className="w-full h-full object-cover"
            poster="/assets/banner-dashboards.png"
          >
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="pt-4 flex items-center justify-between text-xs text-gray-400">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#ef6000]" />
            <span>High-definition executive walkthrough</span>
          </div>
          <button
            onClick={onClose}
            className="text-gray-300 hover:text-white font-bold"
          >
            Close Video
          </button>
        </div>
      </div>
    </div>
  );
}
