import { useEffect, useRef } from 'react';

export function useScrollReveal(staggerDelay = 100) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = el.querySelectorAll('.reveal');
            children.forEach((child, i) => {
              setTimeout(() => {
                child.classList.add('visible');
              }, i * staggerDelay);
            });
            // Also reveal the container itself if it has .reveal
            if (el.classList.contains('reveal')) {
              el.classList.add('visible');
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [staggerDelay]);

  return ref;
}
