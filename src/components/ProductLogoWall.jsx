import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { LOGOS } from './ProductMark';

/*
  Product logo showcase ("Purpose-built. Business-ready.").
  Logos are vector (SVG) versions traced from the supplied artwork, so they stay sharp at any size.
  Resting state: white silhouette on charcoal. Hover / selected: full-colour logo on a white tile.
  Odoo Drive: no logo artwork was supplied yet, so it shows a typographic placeholder.
*/

export default function ProductLogoWall({ products, activeId, onSelect, onAll, showHeading = false }) {
  return (
    <div className="plw reveal">
      {showHeading && (
        <div className="plw-head">
          <span className="signal-eyebrow">THE RAK PRODUCT FAMILY</span>
          <h2>Purpose-built.<br /><span>Business-ready.</span></h2>
        </div>
      )}
      <div className="plw-grid" role="group" aria-label="Product family">
        {products.map((p, i) => {
          const logo = LOGOS[p.id];
          const isActive = activeId === p.id;
          return (
            <button key={p.id} className={`plw-tile${isActive ? ' is-active' : ''}`} aria-pressed={isActive} onClick={() => onSelect(p)}>
              <span className="plw-idx">{String(i + 1).padStart(2, '0')}</span>
              <span className="plw-stage">
                {logo
                  ? <img className={`plw-logo${logo.tall ? ' tall' : ''}`} src={logo.src} alt={logo.alt} loading="lazy" decoding="async" />
                  : <span className="plw-word" role="img" aria-label={p.name}>Odoo<b>Drive</b></span>}
              </span>
              <span className="plw-tag">{p.tagline}</span>
              <span className="plw-bar" aria-hidden="true" />
            </button>
          );
        })}
        {onAll && (
          <button className="plw-tile plw-all" onClick={onAll}>
            <span className="plw-all-copy">Meet the<br />product family</span>
            <ArrowUpRight size={34} strokeWidth={1.3} aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  );
}
