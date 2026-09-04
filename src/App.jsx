import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import USPsSection from './components/USPsSection';
import ProductsSection from './components/ProductsSection';
import IndustriesSection from './components/IndustriesSection';
import ClientsCertifications from './components/ClientsCertifications';
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
  const [activeTab, setActiveTab] = useState('home');
  const [selectedDashboard, setSelectedDashboard] = useState(DASHBOARDS_CATALOG[0]);
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]);
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  // Cart & Subscriptions State
  const [cartItems, setCartItems] = useState([
    {
      id: DASHBOARDS_CATALOG[0].id,
      title: DASHBOARDS_CATALOG[0].title,
      department: DASHBOARDS_CATALOG[0].department,
      price: DASHBOARDS_CATALOG[0].price
    }
  ]);
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
    const itemPrice = tier === 'module' && item.bundlePrice ? item.bundlePrice : item.price;
    const exists = cartItems.some(ci => ci.id === item.id);
    if (exists) {
      setCartItems(cartItems.filter(ci => ci.id !== item.id));
    } else {
      setCartItems([...cartItems, { ...item, price: itemPrice }]);
      setIsCartOpen(true);
    }
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
    <div className="min-h-screen flex flex-col bg-[#f7f5f0] text-[#17191c]">
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
      <main className="flex-1">
        {activeTab === 'home' && (
          <>
            <HeroSlider
              setActiveTab={setActiveTab}
              openDemoModal={() => handleOpenDemo('Hero Consultation')}
              openVideoModal={handleOpenVideo}
            />
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
            <ClientsCertifications />
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
        setActiveTab={setActiveTab}
        openTermsModal={() => setIsTermsModalOpen(true)}
        openDemoModal={() => handleOpenDemo('Footer Consultation')}
      />

      {/* Floating WhatsApp Contact */}
      <FloatingWhatsApp />

      {/* Interactive Modals */}
      <SubscriberPortalModal
        isOpen={isSubscriberPortalOpen}
        onClose={() => setIsSubscriberPortalOpen(false)}
        onSelectDashboard={handleSelectDashboard}
      />

      <CartCheckoutModal
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
