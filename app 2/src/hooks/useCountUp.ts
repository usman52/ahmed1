import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useCountUp(
  end: number,
  options: { duration?: number; prefix?: string; suffix?: string; decimals?: number } = {}
) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState('0');
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const { duration = 2, prefix = '', suffix = '', decimals = 0 } = options;

    const obj = { value: 0 };

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      onEnter: () => {
        if (hasAnimated.current) return;
        hasAnimated.current = true;

        gsap.to(obj, {
          value: end,
          duration,
          ease: 'power2.out',
          onUpdate: () => {
            const formatted =
              decimals > 0
                ? obj.value.toFixed(decimals)
                : Math.round(obj.value).toLocaleString();
            setDisplayValue(`${prefix}${formatted}${suffix}`);
          },
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [end, options.duration, options.prefix, options.suffix, options.decimals]);

  return { ref, displayValue };
}
