import React from 'react';
import { ArrowUpRight, Check, Download, MousePointer2 } from 'lucide-react';
import { PRODUCTS } from '../data/siteData';
import AnalyticsPreview from '../components/AnalyticsPreview';
import ProductLogoWall from '../components/ProductLogoWall';

export default function ProductsPage({ selectedProduct, setSelectedProduct, openDemoModal, openVideoModal, openDataSheetModal }) {
  const product = PRODUCTS.find((item) => item.id === selectedProduct?.id) || PRODUCTS[0];

  const selectProduct = (item) => {
    setSelectedProduct(item);
    window.location.hash = `products/${item.id}`;
  };

  return (
    <div className="inner-page">
      <div className="signal-container">
        <header className="inner-header">
          <span className="signal-eyebrow">THE RAK PRODUCT FAMILY</span>
          <h1>Built for your business.<br /><span>Ready for what’s next.</span></h1>
          <p>Discover analytics products for your industry and connected dashboards for the departments that keep your business moving.</p>
        </header>

        <ProductLogoWall showHeading products={PRODUCTS.filter((item) => item.id !== 'market-analysis')} activeId={product.id} onSelect={selectProduct} />

        <div className="detail-tabs" aria-label="Select product">
          {PRODUCTS.map((item) => (
            <button key={item.id} className={product.id === item.id ? 'active' : ''} onClick={() => selectProduct(item)} aria-pressed={product.id === item.id}>
              {item.name}
            </button>
          ))}
        </div>
        <p className="product-route-note">Each product has a shareable page with its benefits, architecture, guided preview, and downloadable overview.</p>

        <div className="detail-hero" key={product.id}>
          <div>
            <span className="signal-eyebrow">{product.category}</span>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <div className="detail-features">
              {product.bullets.map((bullet) => <div key={bullet}><Check size={18} /><span>{bullet}</span></div>)}
            </div>
            <div className="hero-actions">
              <button className="signal-button orange" onClick={() => openDemoModal(`${product.name} demo`)}>Request a {product.name} demo<ArrowUpRight size={17} /></button>
              <button className="signal-text-link ink" onClick={() => openDataSheetModal({ ...product, title: product.name, department: product.category, features: product.bullets })}>Download overview<Download size={16} /></button>
            </div>
          </div>
          <div className="detail-architecture">
            <span>DESIGNED AROUND WHAT MATTERS</span>
            {product.features.map((feature) => <div key={feature.title}><h3>{feature.title}</h3><p>{feature.desc}</p></div>)}
          </div>
        </div>

        <div className="inner-header-row" style={{ marginBottom: 23 }}>
          <div>
            <span className="signal-eyebrow">FROM DATA TO A CLEARER PICTURE</span>
            <p style={{ fontSize: 15, color: '#6a7582', marginTop: 12 }}>Try an illustrative analytics workspace with sample data. Live dashboards and report downloads are available to subscribed clients.</p>
          </div>
          <button className="signal-text-link ink" onClick={() => openVideoModal(`${product.name} · guided preview`)}>Open interactive preview<MousePointer2 size={17} /></button>
        </div>
        <AnalyticsPreview key={product.id} initialView={product.id === 'procurevision' ? 'Finance' : product.id === 'fieldspark' ? 'Operations' : 'Sales'} />
      </div>
    </div>
  );
}
