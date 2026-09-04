import React, { useState } from 'react';
import { 
  Sparkles, 
  Calendar, 
  Clock, 
  ArrowRight, 
  BookOpen, 
  Share2, 
  Check, 
  X 
} from 'lucide-react';
import { NEWS_ARTICLES } from '../data/siteData';

export default function NewsPage() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [copiedId, setCopiedId] = useState(null);

  const handleShare = (articleId) => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedId(articleId);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <div className="py-10 sm:py-14 bg-[#f7f5f0] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header (Slide 28 & 29) */}
        <div className="rak-page-header text-center max-w-5xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#ef6000] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Research & Industry News</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#212529] tracking-tight">
            Latest Insights in Enterprise BI & AI
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Perspectives from our data architects on Agentic AI, IQVIA pharma data models, and supply chain telemetry.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {NEWS_ARTICLES.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-brand-xl border border-gray-200 hover:border-[#ef6000] shadow-sm hover:shadow-brand-card transition-all duration-300 overflow-hidden flex flex-col justify-between group cursor-pointer"
              onClick={() => setSelectedArticle(article)}
            >
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span className="px-2.5 py-0.5 font-bold rounded-full bg-orange-50 text-[#ef6000] border border-orange-100">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-gray-400" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="text-lg font-extrabold text-[#212529] group-hover:text-[#ef6000] transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3">
                  {article.snippet}
                </p>
              </div>

              <div className="bg-gray-50 px-6 py-3.5 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#ef6000]">
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>

        {/* Modal Reader */}
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white rounded-brand-xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto space-y-6">
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <span className="px-2.5 py-1 text-xs font-bold rounded bg-orange-100 text-[#ef6000]">
                  {selectedArticle.category}
                </span>
                <div className="text-xs text-gray-500 flex items-center gap-3 pt-1">
                  <span>{selectedArticle.date}</span>
                  <span>•</span>
                  <span>{selectedArticle.readTime}</span>
                </div>
                <h2 className="text-2xl font-extrabold text-[#212529]">
                  {selectedArticle.title}
                </h2>
              </div>

              <div className="text-sm text-gray-700 leading-relaxed space-y-4 border-t border-gray-100 pt-4">
                <p className="font-semibold text-gray-800">
                  {selectedArticle.snippet}
                </p>
                <p>
                  {selectedArticle.content}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <button
                  onClick={() => handleShare(selectedArticle.id)}
                  className="flex items-center gap-1.5 text-xs font-bold text-gray-600 hover:text-[#ef6000]"
                >
                  <Share2 className="w-4 h-4" />
                  <span>{copiedId === selectedArticle.id ? "Link Copied!" : "Share Article"}</span>
                </button>

                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-4 py-2 bg-[#212529] hover:bg-[#ef6000] text-white text-xs font-bold rounded-brand-md"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
