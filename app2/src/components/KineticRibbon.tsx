import { useEffect, useRef } from 'react';

const WORDS = ['OPERATIONS', 'DIGITAL', 'SUPPLY CHAIN', 'ANALYTICS', 'AUTOMATION'];

export default function KineticRibbon() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wordIndex = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      wordIndex.current = (wordIndex.current + 1) % WORDS.length;
      const textEl = container.querySelector('.ribbon-text');
      if (textEl) {
        textEl.classList.add('opacity-0', 'translate-y-4');
        setTimeout(() => {
          textEl.textContent = WORDS[wordIndex.current];
          textEl.classList.remove('opacity-0', 'translate-y-4');
        }, 300);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className="relative flex flex-col items-center justify-center gap-6">
      <div className="relative overflow-hidden">
        <div
          className="ribbon-text font-display font-semibold text-[clamp(40px,10vw,120px)] text-[#2B3A4E] uppercase leading-none tracking-tight transition-all duration-300 ease-out"
        >
          {WORDS[0]}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#00B8A9] via-[#E86A33] to-[#00B8A9]" />
      </div>
      <div className="flex items-center gap-3">
        <span className="micro-label text-[#2B3A4E]/50">AI-POWERED</span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#00B8A9] animate-pulse" />
        <span className="micro-label text-[#2B3A4E]/50">MANUFACTURING</span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#E86A33] animate-pulse" />
        <span className="micro-label text-[#2B3A4E]/50">TRANSFORMATION</span>
      </div>
    </div>
  );
}
