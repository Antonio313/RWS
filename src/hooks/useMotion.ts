import { useEffect } from 'react';

/**
 * Reveals [data-reveal] elements once as they enter the viewport, and drifts
 * [data-drift] pictures slightly with scroll. Content stays visible without JS
 * because the hidden start state is scoped to html.js in index.css.
 */
export function useMotion() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const reveal = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            reveal.unobserve(entry.target);
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    );
    const pending = new Set<Element>(document.querySelectorAll('[data-reveal]'));
    pending.forEach((el) => reveal.observe(el));

    // A jump (nav link, anchor, fast scroll) can skip past sections without them ever
    // intersecting; anything already above the bottom of the screen is shown at once.
    let sweepFrame = 0;
    const sweep = () => {
      sweepFrame = 0;
      const vh = window.innerHeight;
      for (const el of pending) {
        if (el.classList.contains('is-in')) {
          pending.delete(el);
        } else if (el.getBoundingClientRect().top < vh) {
          el.classList.add('is-in');
          reveal.unobserve(el);
          pending.delete(el);
        }
      }
    };
    const onSweep = () => {
      if (!sweepFrame) sweepFrame = requestAnimationFrame(sweep);
    };
    window.addEventListener('scroll', onSweep, { passive: true });

    const drifters = Array.from(document.querySelectorAll<HTMLElement>('[data-drift]'));
    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      for (const el of drifters) {
        const rect = el.getBoundingClientRect();
        if (rect.bottom < -200 || rect.top > vh + 200) continue;
        const progress = (rect.top + rect.height / 2 - vh / 2) / vh; // -1..1 around centre
        const amount = Number(el.dataset.drift) || 40;
        el.style.transform = `translate3d(0, ${(progress * amount).toFixed(1)}px, 0)`;
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    if (!reduce && drifters.length) {
      update();
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onScroll);
    }

    return () => {
      reveal.disconnect();
      window.removeEventListener('scroll', onSweep);
      if (sweepFrame) cancelAnimationFrame(sweepFrame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
}
