"use client";

import { useState } from "react";

export default function FaqAccordion({ faqs }) {
  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <>
      {faqs.map((faq, i) => (
        <div
          key={i}
          onClick={() => setActiveFaq(activeFaq === i ? null : i)}
          className={`tv-faq-item${activeFaq === i ? " tv-faq-item--open" : ""}`}
        >
          <div className="tv-faq-header">
            <span className="tv-faq-question">{faq.q}</span>
            <span className="tv-faq-toggle">{activeFaq === i ? "×" : "+"}</span>
          </div>
          {activeFaq === i && <div className="tv-faq-answer">{faq.a}</div>}
        </div>
      ))}
    </>
  );
}
