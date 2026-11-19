import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  MapPin, Mail, Facebook, Instagram, Linkedin, Twitter, MessageCircle,
  Home, CreditCard, Package, Settings2, ChevronDown, Cloud, Users, Handshake,
  Megaphone, Phone, Search, ShoppingBasket, Menu, X
} from 'lucide-react';
import { SITE_INFO, SERVICES, PRODUCTS, DASHBOARDS_CATALOG } from '../data/siteData';

const NAV = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'solutions', label: 'Subscribe', icon: CreditCard },
  { id: 'products', label: 'Products', icon: Package },
  { id: 'services', label: 'Services', icon: Settings2, dropdown: true },
  { id: 'about', label: 'RAK Group', icon: Cloud, key: 'rak-group' },
  { id: 'about', label: 'About Us', icon: Users },
  { id: 'partners', label: 'Partners', icon: Handshake },
  { id: 'news', label: 'News', icon: Megaphone },
  { id: 'contact', label: 'Contact Us', icon: Phone }
];

const SOCIALS = [
  [Facebook, 'Facebook', SITE_INFO.socials.facebook],
  [Instagram, 'Instagram', SITE_INFO.socials.instagram],
  [MessageCircle, 'WhatsApp', SITE_INFO.whatsappLink],
  [Linkedin, 'LinkedIn', SITE_INFO.socials.linkedin],
  [Twitter, 'X (Twitter)', SITE_INFO.socials.twitter]
];

export default function CorporateHeader({ activeTab, setActiveTab, cartItems, openCart, openDemoModal, setSelectedProduct, onSelectDashboard }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const searchRef = useRef(null);

  useEffect(() => { setMenuOpen(false); setSearchOpen(false); }, [activeTab]);
  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') { setMenuOpen(false); setSearchOpen(false); } };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  useEffect(() => { if (searchOpen) searchRef.current?.focus(); }, [searchOpen]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];
    const products = PRODUCTS.filter(p => `${p.name} ${p.tagline}`.toLowerCase().includes(q)).map(p => ({ key: `p-${p.id}`, type: 'Product', label: p.name, go: () => { setSelectedProduct(p); window.location.hash = `products/${p.id}`; } }));
    const dashboards = DASHBOARDS_CATALOG.filter(d => `${d.title} ${d.department}`.toLowerCase().includes(q)).map(d => ({ key: `d-${d.id}`, type: 'Dashboard', label: d.title, go: () => onSelectDashboard(d) }));
    const services = SERVICES.filter(s => s.title.toLowerCase().includes(q)).map(s => ({ key: `s-${s.id}`, type: 'Service', label: s.title, go: () => setActiveTab('services') }));
    return [...products, ...dashboards, ...services].slice(0, 8);
  }, [query, setActiveTab, setSelectedProduct, onSelectDashboard]);

  const nav = id => { setMenuOpen(false); setActiveTab(id); };
  const isCurrent = item => activeTab === item.id && item.key !== 'rak-group';

  return (
    <header className="corp-header">
      <a href="#main-content" className="skip-link" onClick={e => { e.preventDefault(); document.getElementById('main-content')?.focus(); }}>Skip to content</a>

      <div className="corp-topbar">
        <div className="corp-container corp-topbar-inner">
          <span className="corp-topbar-regions"><MapPin size={14} aria-hidden="true" />{SITE_INFO.regions.join('  |  ')}</span>
          <a className="corp-topbar-mail" href={`mailto:${SITE_INFO.email}`}><Mail size={15} aria-hidden="true" />{SITE_INFO.email}</a>
          <div className="corp-topbar-social">
            {SOCIALS.map(([Icon, label, url]) => <a key={label} href={url} target="_blank" rel="noreferrer" aria-label={label}><Icon size={15} /></a>)}
          </div>
        </div>
      </div>

      <div className="corp-brandbar">
        <div className="corp-container corp-brandbar-inner">
          <button className="corp-logo" onClick={() => nav('home')} aria-label="RAK Analytics home">
            <img src="/assets/corporate/rak-logo-full.png" alt="RAK 4 Analytics. We don't just deliver data, we deliver results." width="563" height="194" />
          </button>
          <div className="corp-brandbar-actions">
            <button className="corp-btn corp-btn-orange" onClick={openDemoModal}>Request a Demo</button>
            <a className="corp-phone" href={`tel:${SITE_INFO.whatsapp.replaceAll(' ', '')}`}>{SITE_INFO.whatsapp}</a>
          </div>
          <button className="corp-menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="corp-nav" onClick={() => setMenuOpen(v => !v)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div className="corp-navbar">
        <div className="corp-container corp-navbar-inner">
          <nav id="corp-nav" className={`corp-nav${menuOpen ? ' is-open' : ''}`} aria-label="Primary navigation">
            {NAV.map(item => {
              const Icon = item.icon;
              if (item.dropdown) {
                return (
                  <div className="corp-nav-item has-dropdown" key={item.label}>
                    <button onClick={() => nav(item.id)} aria-current={isCurrent(item) ? 'page' : undefined} aria-haspopup="true">
                      <Icon size={16} aria-hidden="true" />{item.label}<ChevronDown size={13} aria-hidden="true" />
                    </button>
                    <div className="corp-dropdown" role="menu">
                      {SERVICES.map(s => <button key={s.id} role="menuitem" onClick={() => nav('services')}>{s.title}</button>)}
                    </div>
                  </div>
                );
              }
              return (
                <div className="corp-nav-item" key={item.label}>
                  <button onClick={() => nav(item.id)} aria-current={isCurrent(item) ? 'page' : undefined}>
                    <Icon size={16} aria-hidden="true" />{item.label}
                  </button>
                </div>
              );
            })}
          </nav>
          <div className="corp-nav-tools">
            <button className="corp-icon-btn" aria-label="Search the site" aria-expanded={searchOpen} onClick={() => setSearchOpen(v => !v)}><Search size={21} /></button>
            <button className="corp-icon-btn corp-cart" aria-label={`Open subscription basket, ${cartItems.length} items`} onClick={openCart}>
              <ShoppingBasket size={22} />{cartItems.length > 0 && <span>{cartItems.length}</span>}
            </button>
          </div>
        </div>
        {searchOpen && (
          <div className="corp-search">
            <div className="corp-container">
              <label className="sr-only" htmlFor="corp-search-input">Search products, dashboards and services</label>
              <input id="corp-search-input" ref={searchRef} type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search products, dashboards and services" autoComplete="off" />
              {query.trim().length >= 2 && (
                <ul className="corp-search-results">
                  {results.length === 0 && <li className="corp-search-empty">No matches for “{query}”.</li>}
                  {results.map(r => <li key={r.key}><button onClick={() => { r.go(); setSearchOpen(false); setQuery(''); }}><span>{r.type}</span>{r.label}</button></li>)}
                </ul>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
