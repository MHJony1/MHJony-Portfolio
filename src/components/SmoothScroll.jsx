"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    let lenis;
    let tickerCallback;

    const init = async () => {
      const { default: Lenis } = await import("lenis");

      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 2,
        infinite: false,
        syncTouch: true,
      });

      lenis.on("scroll", ScrollTrigger.update);

      tickerCallback = (time) => {
        lenis.raf(time * 1000);
      };
      gsap.ticker.add(tickerCallback);

      gsap.ticker.lagSmoothing(0);
      gsap.registerPlugin(ScrollTrigger);

      const hash = window.location.hash;
      if (hash) {
        const target = document.querySelector(hash);
        if (target) {
          setTimeout(() => {
            lenis.scrollTo(target, { offset: -80, duration: 1.5 });
          }, 200);
        }
      } else {
        lenis.scrollTo(0, { immediate: true });
      }
    };

    init();

    return () => {
      if (lenis) {
        lenis.destroy();
      }
      if (tickerCallback) {
        gsap.ticker.remove(tickerCallback);
      }
    };
  }, []);

  return <>{children}</>;
}
