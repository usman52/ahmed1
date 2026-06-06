import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealOptions {
  y?: number;
  x?: number;
  scale?: number;
  opacity?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
  ease?: string;
  start?: string;
  end?: string;
  scrub?: boolean | number;
}

export function useScrollReveal<T extends HTMLElement>(
  options: ScrollRevealOptions = {}
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const {
      y = 60,
      x = 0,
      scale = 1,
      opacity = 0,
      duration = 0.8,
      delay = 0,
      stagger = 0,
      ease = 'power3.out',
      start = 'top 85%',
      end = 'bottom 20%',
      scrub = false,
    } = options;

    const children = stagger > 0 ? el.children : [el];

    gsap.set(children, { y, x, scale, opacity });

    const tween = gsap.to(children, {
      y: 0,
      x: 0,
      scale: 1,
      opacity: 1,
      duration,
      delay,
      stagger,
      ease,
      scrollTrigger: {
        trigger: el,
        start,
        end,
        scrub,
        toggleActions: scrub ? undefined : 'play none none none',
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll()
        .filter((st) => st.vars.trigger === el)
        .forEach((st) => st.kill());
    };
  }, []);

  return ref;
}
