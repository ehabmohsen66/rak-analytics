import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SITE_INFO } from '../data/siteData';

export function createInquiryLink(fields, topic, recipient = SITE_INFO.demoEmail) {
  const subject = `RAK Analytics enquiry: ${topic || fields.topic || 'Business assessment'}`;
  const body = `Name: ${fields.name}\nEmail: ${fields.email}\nCompany: ${fields.company || 'Not provided'}\nTopic: ${topic || fields.topic || 'Business assessment'}\n\n${fields.message || ''}`;
  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function InquiryForm({ topic = '', recipient = SITE_INFO.demoEmail }) {
  const [fields, setFields] = useState({ name: '', email: '', company: '', topic: topic || 'Business assessment', message: '', website: '' });
  const [prepared, setPrepared] = useState(false);
  const change = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
    setPrepared(false);
  };
  const submit = (event) => {
    event.preventDefault();
    if (fields.website) return;
    window.location.href = createInquiryLink(fields, topic, recipient);
    setPrepared(true);
  };

  return (
    <form className="signal-form" onSubmit={submit}>
      <label>Your name<input name="name" value={fields.name} onChange={change} autoComplete="name" required placeholder="Full name" /></label>
      <label>Work email<input name="email" type="email" value={fields.email} onChange={change} autoComplete="email" required placeholder="you@company.com" /></label>
      <label className="full-field">Company<input name="company" value={fields.company} onChange={change} autoComplete="organization" placeholder="Your organization" /></label>
      <label className="full-field">Topic<input name="topic" value={topic || fields.topic} readOnly={Boolean(topic)} onChange={change} /></label>
      <label className="full-field">Message<textarea name="message" value={fields.message} onChange={change} placeholder="Tell us about your business, data, or reporting challenges." rows={4} required /></label>
      <label className="form-trap" aria-hidden="true">Website<input name="website" value={fields.website} onChange={change} tabIndex="-1" autoComplete="off" /></label>
      <p className="full-field form-note">This opens an email draft to {recipient}. Review and send it from your email app.</p>
      {prepared && <div className="form-status full-field" role="status">Your email draft is ready. If no email app opened, email {recipient} directly.</div>}
      <button type="submit" className="signal-button orange full-field">Prepare my enquiry<ArrowUpRight size={17} /></button>
    </form>
  );
}
