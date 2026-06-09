"use client";

import { useEffect, useRef } from "react";

const ADSENSE_CLIENT = "ca-pub-9223370591083087";

// Responsiv AdSense-annonsenhet. Renderar ingenting om slot saknas, så sidan
// fungerar innan annonsenheten är skapad i AdSense-konsolen.
export default function AdUnit({ slot, style }) {
  const pushed = useRef(false);

  useEffect(() => {
    if (!slot || pushed.current) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch {
      // adsbygoogle kastar om scriptet blockeras eller enheten redan fyllts
    }
  }, [slot]);

  if (!slot) return null;

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block", margin: "24px 0", ...style }}
      data-ad-client={ADSENSE_CLIENT}
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
