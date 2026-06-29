'use client';

import { useState } from 'react';

export function FaqList({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="pest-faq-list">
      {faqs.map((faq, index) => {
        const isOpen = index === openIndex;

        return (
          <article className={`faq-item${isOpen ? ' is-open' : ''}`} key={faq.question}>
            <button
              className="faq-question"
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              {faq.question}
            </button>
            {isOpen ? <p>{faq.answer}</p> : null}
          </article>
        );
      })}
    </div>
  );
}
