'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export function QuoteForm({ title = 'Request a Free Quote', subtitle = 'Fast scheduling from a local, veteran-owned team serving Northeast Florida.' }) {
  const router = useRouter();
  const [status, setStatus] = useState('idle'); // idle | sending | error

  async function handleSubmit(e) {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');

    const form = e.currentTarget;
    const payload = {
      firstName: form.firstName.value.trim(),
      lastName: form.lastName.value.trim(),
      email: form.email.value.trim(),
      phone: form.phone.value.trim(),
      address: form.address.value.trim(),
      message: form.message.value.trim(),
      sourcePage: window.location.pathname,
    };

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('send failed');
      router.push('/thank-you');
    } catch {
      setStatus('error');
    }
  }

  return (
    <form className="quote-card" id="quote" onSubmit={handleSubmit}>
      <div className="quote-card-header">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <div className="quote-card-fields">
        <label>
          <span>First Name <b>*</b></span>
          <input type="text" name="firstName" autoComplete="given-name" required />
        </label>
        <label>
          <span>Last Name <b>*</b></span>
          <input type="text" name="lastName" autoComplete="family-name" required />
        </label>
        <label>
          <span>Email <b>*</b></span>
          <input type="email" name="email" autoComplete="email" required />
        </label>
        <label>
          <span>Phone Number <b>*</b></span>
          <input type="tel" name="phone" autoComplete="tel" required />
        </label>
        <label className="wide-field">
          <span>Street Address 1 <b>*</b></span>
          <input type="text" name="address" autoComplete="street-address" required />
        </label>
        <label className="wide-field">
          <span>How can we help?</span>
          <textarea name="message" rows="4" />
        </label>
      </div>
      <button className="quote-card-action" type="submit" disabled={status === 'sending'} style={{ border: 'none', cursor: 'pointer', marginTop: 14, fontFamily: 'inherit', fontSize: 'inherit', letterSpacing: 'inherit' }}>
        {status === 'sending' ? 'Sending…' : 'Get My Free Quote'}
      </button>
      {status === 'error' && (
        <p className="fine-print" style={{ color: '#b91c1c' }}>
          Something went wrong. Please try again or call (904) 290-6400.
        </p>
      )}
      <p className="fine-print">Licensed &amp; insured · No-obligation quote</p>
    </form>
  );
}
