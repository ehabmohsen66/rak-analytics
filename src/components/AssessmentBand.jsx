import React from 'react';
import { ArrowRight } from 'lucide-react';

/* Home page call-to-action band, copy from the submission deck (slide 10). Redirects to the Contact Us page. */
export default function AssessmentBand({ setActiveTab }) {
  return (
    <section
      className="ab"
      aria-labelledby="assessment-title"
      style={{ '--ab-poster': "url('/assets/gif/Banner-5-poster.jpg')" }}
    >
      <img
        className="ab-img"
        src="/assets/gif/Banner-5-v1.gif"
        alt=""
        width="1920"
        height="648"
        loading="lazy"
        decoding="async"
      />
      <span className="ab-scrim" aria-hidden="true" />
      <div className="signal-container ab-inner">
        <div className="ab-copy">
          <h2 id="assessment-title">Not sure what fits your business needs?</h2>
          <span className="hb-rule" aria-hidden="true" />
          <p>Speak with our experts for a free business assessment.</p>
          <button className="hb-btn" onClick={() => setActiveTab('contact')}>
            Get in touch to request a demo.<ArrowRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
