import React, { useState } from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, MessageCircle, ChevronRight } from 'lucide-react';
import { SITE_INFO, SERVICES } from '../data/siteData';

const SOCIALS = [
  [Facebook, 'Facebook', SITE_INFO.socials.facebook],
  [Instagram, 'Instagram', SITE_INFO.socials.instagram],
  [MessageCircle, 'WhatsApp', SITE_INFO.whatsappLink],
  [Linkedin, 'LinkedIn', SITE_INFO.socials.linkedin],
  [Twitter, 'X (Twitter)', SITE_INFO.socials.twitter]
];

const PAGE_TITLES = {
  solutions: 'Subscribe', products: 'Products', services: 'Services', about: 'About Us',
  partners: 'Partners', news: 'News', contact: 'Contact Us', 'dashboard-sub': 'Dashboards'
};

/* Orange page-title bar used on inner pages (deck: products page mockup). */
export function CorporatePageTitle({ activeTab, setActiveTab }) {
  const title = PAGE_TITLES[activeTab];
  if (!title) return null;
  return (
    <div className="corp-page-title">
      <div className="corp-container corp-page-title-inner">
        <p className="corp-page-title-text">{title}</p>
        <nav aria-label="Breadcrumb"><button onClick={() => setActiveTab('home')}>Home</button><ChevronRight size={14} aria-hidden="true" /><span aria-current="page">{title}</span></nav>
      </div>
    </div>
  );
}

export default function CorporateFooter({ setActiveTab, openTermsModal }) {
  const [email, setEmail] = useState('');
  const [prepared, setPrepared] = useState(false);
  const subscribe = e => {
    e.preventDefault();
    window.location.href = `mailto:${SITE_INFO.email}?subject=${encodeURIComponent('Newsletter subscription request')}&body=${encodeURIComponent(`Please add ${email} to the RAK Analytics newsletter.`)}`;
    setPrepared(true);
  };
  return (
    <footer className="corp-footer">
      <div className="corp-container corp-footer-grid">
        <div className="corp-footer-brand">
          <button onClick={() => setActiveTab('home')} aria-label="RAK Analytics home"><img src="/assets/Rak-analytics-logo.png" alt="RAK 4 Analytics" width="500" height="100" loading="lazy" /></button>
          <p className="corp-footer-tagline">{SITE_INFO.tagline}</p>
        </div>
        <div className="corp-footer-col">
          <h2>Contact info</h2>
          <div className="corp-footer-contact"><Phone size={18} aria-hidden="true" /><div><span>Call us</span><a href={`tel:${SITE_INFO.phone.replaceAll(' ', '')}`}>{SITE_INFO.phoneDisplay}</a></div></div>
          <div className="corp-footer-contact"><Mail size={18} aria-hidden="true" /><div><span>Email</span><a href={`mailto:${SITE_INFO.email}`}>{SITE_INFO.email}</a></div></div>
          <div className="corp-footer-contact"><MapPin size={18} aria-hidden="true" /><div><span>Location</span><p>{SITE_INFO.regions.join('  |  ')}</p></div></div>
        </div>
        <div className="corp-footer-col">
          <h2>Our services</h2>
          <ul>{SERVICES.map(s => <li key={s.id}><button onClick={() => setActiveTab('services')}>{s.title}</button></li>)}</ul>
        </div>
        <div className="corp-footer-col">
          <h2 className="is-plain">Let’s Get in Touch</h2>
          <form className="corp-newsletter" onSubmit={subscribe}>
            <label className="sr-only" htmlFor="corp-newsletter-email">Your e-mail</label>
            <span className="corp-newsletter-field"><Mail size={14} aria-hidden="true" /><input id="corp-newsletter-email" type="email" required autoComplete="email" placeholder="Your e-mail" value={email} onChange={e => { setEmail(e.target.value); setPrepared(false); }} /></span>
            <button type="submit">Sign me up</button>
            {prepared && <p className="corp-newsletter-note" role="status">Send the request from your email app to finish.</p>}
          </form>
          <div className="corp-footer-social">{SOCIALS.map(([Icon, label, url]) => <a key={label} href={url} target="_blank" rel="noreferrer" aria-label={label}><Icon size={20} /></a>)}</div>
        </div>
      </div>
      <div className="corp-footer-bottom">
        <div className="corp-container corp-footer-bottom-inner">
          <span>© {new Date().getFullYear()} RAK4Analytics. All Rights Reserved.</span>
          <div><button onClick={openTermsModal}>Cookie policy</button><button onClick={openTermsModal}>Terms &amp; conditions</button></div>
        </div>
      </div>
    </footer>
  );
}
