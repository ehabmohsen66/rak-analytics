import React from 'react';
import { ArrowLeft, ArrowUpRight, Download, Check, Plus, PlayCircle } from 'lucide-react';
import AnalyticsPreview from '../components/AnalyticsPreview';

export default function DashboardSubPage({ dashboard: dashboard, onBack, openDemoModal, openVideoModal, openDataSheetModal, addToCart, inCart }) {
  if (!dashboard) return null;
  const view = ['Accounting', 'Procurement'].includes(dashboard.department)
    ? 'Finance'
    : ['Production', 'Stock', 'HR', 'Supply Chain'].includes(dashboard.department) ? 'Operations' : 'Sales';

  return (
    <div className="inner-page dashboard-page">
      <div className="signal-container">
        <button className="signal-text-link ink" onClick={onBack}><ArrowLeft size={17} />Back to dashboard explorer</button>
        <header className="inner-header" style={{ marginTop: 25 }}>
          <span className="signal-eyebrow">{dashboard.productFamily} / {dashboard.department}</span>
          <h1>{dashboard.title}</h1>
          <p>{dashboard.description}</p>
          <div className="hero-actions">
            <button className="signal-button orange" onClick={() => addToCart(dashboard)}>{inCart ? <Check size={16} /> : <Plus size={16} />} {inCart ? 'In selection' : 'Add to selection'}</button>
            <button className="signal-text-link ink" onClick={() => openDemoModal(dashboard.title)}>Request a demo<ArrowUpRight size={17} /></button>
            <button className="signal-text-link ink" onClick={() => openVideoModal(`${dashboard.title} · guided preview`)}>Guided preview<PlayCircle size={17} /></button>
            <button className="signal-text-link ink" onClick={() => openDataSheetModal(dashboard)}>Solution overview<Download size={16} /></button>
          </div>
        </header>

        <span className="signal-eyebrow">ILLUSTRATIVE WORKSPACE / SAMPLE DATA</span>
        <AnalyticsPreview key={dashboard.id} initialView={view} />

        <div className="detail-hero">
          <div>
            <h2 style={{ fontSize: 33 }}>A clearer view of performance.</h2>
            <p>Explore the sample workspace above. Full dashboard access and reporting are available through a subscription arranged with the RAK team.</p>
          </div>
          <div className="detail-features">
            {dashboard.features.map((feature) => <div key={feature}><Check size={17} /><span>{feature}</span></div>)}
          </div>
        </div>

        <div className="suite-note">
          <div><h2>See it with your business in mind.</h2><p>Discuss your data, dashboards, and subscription needs with a specialist.</p></div>
          <button className="signal-button orange" onClick={() => openDemoModal(dashboard.title)}>Request a guided demo<ArrowUpRight size={17} /></button>
        </div>
      </div>
    </div>
  );
}
