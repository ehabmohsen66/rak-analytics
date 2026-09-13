import React from 'react';
import { ArrowUpRight, Check, ShieldCheck } from 'lucide-react';
import Modal from './Modal';
import { SITE_INFO } from '../data/siteData';

const workspaceFeatures = [
  'Subscribed dashboards and selected modules',
  'Subscription history, renewal amounts, and status',
  'Reports, data sheets, and available downloads',
  'Organization-specific access and support',
];

export default function SubscriberPortalModal({ isOpen, onClose, openDemoModal }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Your client workspace">
      <ShieldCheck size={32} color="#ef6000" style={{ marginBottom: 20 }} />
      <p>The planned client workspace brings account, subscription, dashboard, and reporting information together.</p>
      <div className="portal-feature-list">
        {workspaceFeatures.map((feature) => <div key={feature}><Check size={16} /><span>{feature}</span></div>)}
      </div>
      <p className="modal-inline-note">Account sign-in and payments are awaiting the approved gateway, pricing, and account integration. The public site currently provides safe sample previews.</p>
      <div className="hero-actions">
        <button className="signal-button dark" onClick={() => { onClose(); openDemoModal('Client workspace access'); }}>Request access<ArrowUpRight size={17} /></button>
        <a className="signal-text-link ink" href={`mailto:${SITE_INFO.email}`}>Contact support<ArrowUpRight size={16} /></a>
      </div>
    </Modal>
  );
}
