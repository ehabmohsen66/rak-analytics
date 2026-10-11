import React from 'react';

/* Vector logos (traced from the supplied artwork). Odoo Drive has no artwork yet, so it uses a typographic placeholder. */
export const LOGOS = {
  datapulse: { src: '/assets/logos/datapulse.svg', alt: 'DataPulse' },
  intellix: { src: '/assets/logos/intellix.svg', alt: 'Intellix', tall: true },
  woodpecker: { src: '/assets/logos/woodpecker.svg', alt: 'WoodPecker' },
  fieldspark: { src: '/assets/logos/fieldspark.svg', alt: 'FieldSpark', tall: true },
  procurevision: { src: '/assets/logos/procurevision.svg', alt: 'ProcureVision', tall: true },
  saleslogic: { src: '/assets/logos/saleslogic.svg', alt: 'Sales Logic' }
};

export default function ProductMark({ id, name, className = '' }) {
  const logo = LOGOS[id];
  if (!logo) return <span className={`pm-word ${className}`} role="img" aria-label={name}>Odoo<b>Drive</b></span>;
  return <img className={`pm-img${logo.tall ? ' tall' : ''} ${className}`} src={logo.src} alt={logo.alt} loading="lazy" decoding="async" />;
}
