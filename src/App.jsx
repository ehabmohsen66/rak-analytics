import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import USPsSection from './components/USPsSection';
import ProductsSection from './components/ProductsSection';
import IndustriesSection from './components/IndustriesSection';
import ClientsCertifications, { ClientStrip } from './components/ClientsCertifications';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

import SolutionsPage from './pages/SolutionsPage';
import DashboardSubPage from './pages/DashboardSubPage';
import ProductsPage from './pages/ProductsPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import PartnersPage from './pages/PartnersPage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';

import SubscriberPortalModal from './components/SubscriberPortalModal';
import CartCheckoutModal from './components/CartCheckoutModal';
import DataSheetModal from './components/DataSheetModal';
import DemoRequestModal from './components/DemoRequestModal';
import VideoPreviewModal from './components/VideoPreviewModal';
import TermsModal from './components/TermsModal';

import { DASHBOARDS_CATALOG, PRODUCTS } from './data/siteData';

export default function App() {
  const validTabs = ['home','solutions','products','services','about','partners','news','contact','dashboard-sub'];
  const readRoute = () => { const value = window.location.hash.slice(1).split('/')[0]; return validTabs.includes(value) ? value : 'home'; };
  const [activeTab, updateActiveTab] = useState(readRoute);
  const setActiveTab = (tab) => { updateActiveTab(tab); window.location.hash = tab; window.scrollTo({ top: 0, behavior: 'instant' }); };
  useEffect(() => { const sync = () => { updateActiveTab(readRoute()); window.scrollTo({ top: 0, behavior: 'instant' }); }; window.addEventListener('hashchange', sync); return () => window.removeEventListener('hashchange', sync); }, []);
  useEffect(() => {
    document.title = `RAK Analytics | ${activeTab === 'home' ? 'Your data. A sharper advantage.' : activeTab.replace('-sub','').replace(/^./, c => c.toUpperCase())}`;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if(entry.isIntersecting){entry.target.classList.remove('reveal-pending');observer.unobserve(entry.target);} }), { threshold: .08 });
    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => { if(el.getBoundingClientRect().top > window.innerHeight){ el.classList.add('reveal-pending'); observer.observe(el); } });
    return () => { observer.disconnect(); elements.forEach(el => el.classList.remove('reveal-pending')); };
  }, [activeTab]);
  const [selectedDashboard, setSelectedDashboard] = useState(DASHBOARDS_CATALOG[0]);
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]);
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  // Cart & Subscriptions State
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Modals
  const [isSubscriberPortalOpen, setIsSubscriberPortalOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [demoTopic, setDemoTopic] = useState('');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [videoTitle, setVideoTitle] = useState('');
  const [isDataSheetModalOpen, setIsDataSheetModalOpen] = useState(false);
  const [activeDataSheet, setActiveDataSheet] = useState(null);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  // Cart Handlers
  const addToCart = (item, tier = 'individual') => {
    setCartItems(previous => [...previous.filter(ci => ci.id !== item.id), {...item, tier, isSuite: tier === 'module'}]);
    setIsCartOpen(true);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(ci => ci.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  // Nav to Dashboard subpage
  const handleSelectDashboard = (dash) => {
    setSelectedDashboard(dash);
    setActiveTab('dashboard-sub');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenDemo = (topic = '') => {
    setDemoTopic(topic);
    setIsDemoModalOpen(true);
  };

  const handleOpenVideo = (title = '') => {
    setVideoTitle(title);
    setIsVideoModalOpen(true);
  };

  const handleOpenDataSheet = (dash) => {
    setActiveDataSheet(dash);
    setIsDataSheetModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f4f5f6] text-[#17191c]">
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartItems={cartItems}
        openCart={() => setIsCartOpen(true)}
        openSubscriberPortal={() => setIsSubscriberPortalOpen(true)}
        openDemoModal={() => handleOpenDemo()}
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      />

      {/* Main Content Areas */}
      <main id="main-content" className="flex-1" tabIndex={-1}>
        {activeTab === 'home' && (
          <>
            <HeroSlider
              setActiveTab={setActiveTab}
              openDemoModal={() => handleOpenDemo('Hero Consultation')}
              openVideoModal={handleOpenVideo}
            />
            <ClientStrip />
            <USPsSection
              setActiveTab={setActiveTab}
              openDemoModal={() => handleOpenDemo('Core Pillars Consultation')}
            />
            <ProductsSection
              setActiveTab={setActiveTab}
              setSelectedProduct={setSelectedProduct}
              openDemoModal={handleOpenDemo}
              openVideoModal={handleOpenVideo}
              openDataSheetModal={handleOpenDataSheet}
            />
            <IndustriesSection
              setActiveTab={setActiveTab}
              setSelectedIndustry={setSelectedIndustry}
              openDemoModal={() => handleOpenDemo('Free Business Assessment')}
            />
            <ClientsCertifications setActiveTab={setActiveTab} />
          </>
        )}

        {activeTab === 'solutions' && (
          <SolutionsPage
            addToCart={addToCart}
            cartItems={cartItems}
            openDemoModal={handleOpenDemo}
            openDataSheetModal={handleOpenDataSheet}
            onSelectDashboard={handleSelectDashboard}
            initialIndustry={selectedIndustry}
          />
        )}

        {activeTab === 'dashboard-sub' && (
          <DashboardSubPage
            dashboard={selectedDashboard}
            onBack={() => setActiveTab('solutions')}
            openDemoModal={handleOpenDemo}
            openVideoModal={handleOpenVideo}
            openDataSheetModal={handleOpenDataSheet}
            addToCart={addToCart}
            inCart={cartItems.some(ci => ci.id === selectedDashboard.id)}
          />
        )}

        {activeTab === 'products' && (
          <ProductsPage
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
            openDemoModal={handleOpenDemo}
            openVideoModal={handleOpenVideo}
            openDataSheetModal={handleOpenDataSheet}
          />
        )}

        {activeTab === 'services' && (
          <ServicesPage
            openDemoModal={handleOpenDemo}
          />
        )}

        {activeTab === 'about' && (
          <AboutPage
            openDemoModal={() => handleOpenDemo('Executive Consultation')}
          />
        )}

        {activeTab === 'partners' && (
          <PartnersPage />
        )}

        {activeTab === 'news' && (
          <NewsPage />
        )}

        {activeTab === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Footer */}
      <Footer
        setSelectedProduct={setSelectedProduct}
        setActiveTab={setActiveTab}
        openTermsModal={() => setIsTermsModalOpen(true)}
        openDemoModal={() => handleOpenDemo('Footer Consultation')}
      />

      {/* Floating WhatsApp Contact */}
      <FloatingWhatsApp />

      {/* Interactive Modals */}
      <SubscriberPortalModal
        openDemoModal={handleOpenDemo}
        isOpen={isSubscriberPortalOpen}
        onClose={() => setIsSubscriberPortalOpen(false)}
        onSelectDashboard={handleSelectDashboard}
      />

      <CartCheckoutModal
        openDemoModal={handleOpenDemo}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        openSubscriberPortal={() => setIsSubscriberPortalOpen(true)}
      />

      <DataSheetModal
        isOpen={isDataSheetModalOpen}
        onClose={() => setIsDataSheetModalOpen(false)}
        dashboard={activeDataSheet}
      />

      <DemoRequestModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        topic={demoTopic}
      />

      <VideoPreviewModal
        openDemoModal={handleOpenDemo}
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        title={videoTitle}
      />

      <TermsModal
        isOpen={isTermsModalOpen}
        onClose={() => setIsTermsModalOpen(false)}
      />
    </div>
  );
}
