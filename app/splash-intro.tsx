"use client";

import { useEffect, useRef } from "react";

export default function SplashIntro() {
  const introRef = useRef<HTMLDivElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const intro = introRef.current;
    const brand = brandRef.current;
    const target = document.querySelector<HTMLElement>("[data-site-brand]");

    if (!intro || !brand || !target) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      intro.remove();
      return;
    }

    document.body.classList.add("intro-playing");

    const moveBrand = () => {
      const sourceRect = brand.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();
      const tagline = intro.querySelector<HTMLElement>("p");
      const targetScale = targetRect.width / sourceRect.width;
      const deltaX =
        targetRect.left +
        targetRect.width / 2 -
        (sourceRect.left + sourceRect.width / 2);
      const deltaY =
        targetRect.top +
        targetRect.height / 2 -
        (sourceRect.top + sourceRect.height / 2);

      brand.animate(
        [
          { transform: "translate3d(0, 0, 0) scale(1)" },
          {
            transform: `translate3d(${deltaX}px, ${deltaY}px, 0) scale(${targetScale})`,
          },
        ],
        {
          duration: 780,
          easing: "cubic-bezier(.22,.75,.2,1)",
          fill: "forwards",
        },
      );

      tagline?.animate(
        [
          { opacity: 1, transform: "translateY(0)" },
          { opacity: 0, transform: "translateY(8px)" },
        ],
        {
          duration: 240,
          easing: "ease-out",
          fill: "forwards",
        },
      );

      intro.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 360,
        delay: 600,
        easing: "ease-out",
        fill: "forwards",
      }).finished.then(() => {
        document.body.classList.remove("intro-playing");
        intro.remove();
      });
    };

    const timer = window.setTimeout(moveBrand, 1050);
    return () => {
      window.clearTimeout(timer);
      document.body.classList.remove("intro-playing");
    };
  }, []);

  return (
    <div className="splash-intro" ref={introRef} aria-hidden="true">
      <div className="splash-brand" ref={brandRef}>
        <span className="splash-mark">
          <svg viewBox="0 0 108 108">
            <path className="logo-page" d="M27 35 50 40v37l-23-7Z" />
            <path className="logo-page" d="m58 40 23-5v35l-23 7Z" />
            <path className="logo-ribbon" d="M52 39h4v41h-4Z" />
          </svg>
        </span>
        <span>WordBucket</span>
      </div>
      <p>Keep worth reading.</p>
    </div>
  );
}
