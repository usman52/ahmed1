import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Brain, Target, Gauge, Factory, Settings, Wrench,
  BarChart3, TrendingDown, CircleDot, Package, Shirt, FileText, Cpu
} from 'lucide-react';
import { useCountUp } from '../hooks/useCountUp';

gsap.registerPlugin(ScrollTrigger);

function StatCounter({ end, prefix, suffix, label, color }: {
  end: number; prefix?: string; suffix?: string; label: string; color: string;
}) {
  const { ref, displayValue } = useCountUp(end, { prefix, suffix });
  return (
    <div className="text-center lg:text-left">
      <span ref={ref} className="font-display text-[clamp(36px,5vw,56px)] font-semibold" style={{ color }}>
        {displayValue}
      </span>
      <p className="micro-label text-[#2B3A4E]/60 mt-2">{label}</p>
    </div>
  );
}

const services = [
  { icon: TrendingDown, title: 'Cost Reduction',             desc: 'Operational excellence and resource optimization' },
  { icon: Target,     title: 'Lean Six Sigma Transformation', desc: 'Waste reduction, Kaizen, and continuous improvement' },
  { icon: Brain,      title: 'AI for Manufacturing',          desc: 'Machine learning, predictive analytics, and intelligent automation' },
  { icon: Gauge,      title: 'OEE Improvement',              desc: 'Overall Equipment Effectiveness optimization systems' },
  { icon: Factory,    title: 'Smart Factory Solutions',       desc: 'Industry 4.0 & 5.0 transformation and IoT integration' },
  { icon: Settings,   title: 'Production Optimization',      desc: 'Workflow balancing, bottleneck elimination, flow improvement' },
  { icon: Wrench,     title: 'Predictive Maintenance',       desc: 'ML-based failure prediction and reliability engineering' },
  { icon: BarChart3,  title: 'KPI & Power BI Dashboards',    desc: 'Real-time production intelligence and data visualization' },
];

const industries = [
  { icon: CircleDot, name: 'Tyre Manufacturing' },
  { icon: Package,   name: 'Packaging & Corrugated' },
  { icon: Shirt,     name: 'Textile & Garments' },
  { icon: FileText,  name: 'Paper Industry' },
  { icon: Cpu,       name: 'Smart Manufacturing' },
];

export default function Home() {
  const heroRef       = useRef<HTMLDivElement>(null);
  const impactRef     = useRef<HTMLDivElement>(null);
  const futureRef     = useRef<HTMLDivElement>(null);
  const servicesRef   = useRef<HTMLDivElement>(null);
  const resultsRef    = useRef<HTMLDivElement>(null);
  const industriesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    requestAnimationFrame(() => { setTimeout(() => ScrollTrigger.refresh(), 300); });

    const ctx = gsap.context(() => {
      gsap.from('.hero-content > *', {
        y: 50, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', delay: 0.4,
      });

      if (futureRef.current) {
        gsap.from('.future-heading .word', {
          y: 60, opacity: 0, duration: 0.6, stagger: 0.07, ease: 'power3.out',
          scrollTrigger: { trigger: futureRef.current, start: 'top 75%', once: true },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div>

      {/* ═══════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-[100dvh] flex flex-col items-center justify-center pt-20 overflow-hidden"
      >
        {/* Overlay — navy gradient base */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(160deg, #2B3A4E 0%, #2B3A4E 55%, rgba(0,184,169,0.25) 100%)',
          }}
        />
        {/* Subtle grid decoration */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,184,169,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,184,169,0.04) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Content */}
        <div className="hero-content relative z-10 px-6 max-w-7xl mx-auto w-full py-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — the hook */}
            <div className="text-center lg:text-left">
              <p className="micro-label text-[#00B8A9] mb-6 tracking-widest">
                AI-POWERED MANUFACTURING CONSULTANT
              </p>
              <h1 className="font-display font-semibold text-[clamp(34px,5.5vw,64px)] text-white leading-[1.1] pb-1 tracking-tight mb-6">
                I Turn Manufacturing Waste Into <span className="text-[#00B8A9]">Measurable Savings</span>
              </h1>
              <p className="text-lg lg:text-xl text-white/85 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                PKR 100M+ in operational impact delivered through AI, Lean Six Sigma, and Smart Manufacturing — for industries that want results, not theory.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
                <Link to="/contact" className="pill-btn pill-btn-primary">Book Consultation</Link>
                <Link to="/case-studies" className="pill-btn pill-btn-light-outline">View Projects</Link>
              </div>
              <p className="text-sm text-white/60">
                <span className="text-white font-medium">Ahmad Bin Sadiq</span> — Lean Six Sigma Master Black Belt &nbsp;|&nbsp; Gold Medalist Industrial Engineer
              </p>
            </div>

            {/* Right — visual proof */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/financial-growth-hero.jpg"
                  alt="Measurable operational growth and cost savings"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B3A4E]/50 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-4 lg:-left-8 bg-[#00B8A9] text-[#FEFBF6] px-6 py-4 rounded-xl shadow-xl">
                <p className="font-display font-semibold text-2xl">PKR 100M+</p>
                <p className="micro-label opacity-80">Operational Impact</p>
              </div>
              <div className="absolute -top-6 -right-4 lg:-right-8 bg-[#E86A33] text-[#FEFBF6] px-6 py-4 rounded-xl shadow-xl">
                <p className="font-display font-semibold text-2xl">18%</p>
                <p className="micro-label opacity-80">OEE Improvement</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll pulse */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
          <div className="w-px h-10 bg-gradient-to-b from-transparent via-[#00B8A9]/70 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          OPERATIONAL IMPACT
      ═══════════════════════════════════════════ */}
      <section ref={impactRef} className="section-padding py-20 lg:py-32 bg-[#FEFBF6]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <h2 className="font-display text-[clamp(32px,4vw,56px)] font-medium text-[#2B3A4E] leading-tight mb-4">
                Operational Impact Delivered
              </h2>
              <p className="text-[#2B3A4E]/60 text-lg">Measurable transformation across manufacturing operations</p>
            </div>
            <div className="lg:col-span-3 grid grid-cols-2 gap-8">
              <div className="impact-stat"><StatCounter end={100} prefix="PKR " suffix="M+" label="Operational Impact" color="#00B8A9" /></div>
              <div className="impact-stat"><StatCounter end={18} suffix="%" label="OEE Improvement" color="#E86A33" /></div>
              <div className="impact-stat">
                <span className="font-display text-[clamp(36px,5vw,56px)] font-semibold text-[#00B8A9]">15 → 2 Days</span>
                <p className="micro-label text-[#2B3A4E]/60 mt-2">Lead Time Reduction</p>
              </div>
              <div className="impact-stat"><StatCounter end={30} suffix="+" label="AI & Analytics Projects" color="#E86A33" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BUILDING THE FUTURE
      ═══════════════════════════════════════════ */}
      <section ref={futureRef} className="section-padding py-20 lg:py-32 bg-[#2B3A4E]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="future-heading font-display text-[clamp(32px,5vw,64px)] font-medium text-[#FEFBF6] leading-tight mb-8">
            {'Building the Future of Intelligent Manufacturing'.split(' ').map((word, i) => (
              <span key={i} className="word inline-block mr-[0.3em]">{word}</span>
            ))}
          </h2>
          <p className="future-body text-lg lg:text-xl text-[#FEFBF6]/80 leading-relaxed mb-8 max-w-3xl mx-auto">
            I help industries transform traditional manufacturing operations into intelligent, efficient,
            and data-driven systems through Artificial Intelligence, Lean Six Sigma, Industrial Engineering,
            and Operational Excellence. Currently serving as Head of Operational Excellence at Servis Tyres with experience
            across packaging, textile, tyre manufacturing, sustainability, and smart factory transformation.
          </p>
          <p className="micro-label text-[#00B8A9]">AI • LEAN • SMART MANUFACTURING • INDUSTRY 5.0</p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CORE SERVICES — white bg, navy cards
      ═══════════════════════════════════════════ */}
      <section ref={servicesRef} className="section-padding py-20 lg:py-32 bg-[#FEFBF6]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="micro-label text-[#E86A33] mb-3">WHAT I DO</p>
            <h2 className="font-display text-[clamp(32px,4vw,56px)] font-medium text-[#2B3A4E]">Core Consulting Services</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <Link
                to="/services"
                key={i}
                className="service-card group p-8 rounded-xl border-2 border-[#2B3A4E]/10 bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-[#00B8A9] transition-all duration-300 block"
              >
                <s.icon className="w-8 h-8 text-[#00B8A9] group-hover:text-[#E86A33] transition-colors mb-4" />
                <h3 className="font-semibold text-base text-[#2B3A4E] mb-2">{s.title}</h3>
                <p className="text-sm text-[#2B3A4E]/60 leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PROVEN RESULTS
      ═══════════════════════════════════════════ */}
      <section ref={resultsRef} className="section-padding py-20 lg:py-32 bg-[#2B3A4E]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="micro-label text-[#00B8A9] mb-3">TRACK RECORD</p>
            <h2 className="font-display text-[clamp(32px,4vw,56px)] font-medium text-[#FEFBF6]">Proven Industrial Results</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { val: 'PKR 100M+', label: 'Operational Value Created' },
              { val: '18%',       label: 'OEE Improvement Achieved' },
              { val: '25%',       label: 'Reduction in Breakdowns' },
              { val: 'Zero',      label: 'Downtime Achievement' },
              { val: '15 → 2',    label: 'Lead Time Reduction', full: true },
            ].map((r, i) => (
              <div key={i} className={`result-item text-center ${r.full ? 'col-span-2 lg:col-span-1' : ''}`}>
                <span className="font-display text-[clamp(28px,4vw,48px)] font-semibold text-[#00B8A9]">{r.val}</span>
                <p className="micro-label text-[#FEFBF6]/60 mt-2">{r.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          INDUSTRIES SERVED
      ═══════════════════════════════════════════ */}
      <section ref={industriesRef} className="section-padding py-20 lg:py-32 bg-[#FEFBF6]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="micro-label text-[#E86A33] mb-3">SECTORS</p>
            <h2 className="font-display text-[clamp(32px,4vw,56px)] font-medium text-[#2B3A4E]">Industries Served</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {industries.map((ind, i) => (
              <Link
                to="/industries"
                key={i}
                className="industry-card group flex flex-col items-center p-8 rounded-xl border-2 border-[#2B3A4E]/10 bg-white shadow-sm hover:border-[#00B8A9] hover:shadow-lg transition-all duration-300 text-center"
              >
                <ind.icon className="w-10 h-10 text-[#00B8A9] group-hover:scale-110 transition-transform mb-4" />
                <span className="font-medium text-[#2B3A4E] text-sm">{ind.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA BANNER
      ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00B8A9] to-[#2B3A4E]" />
        <div className="relative section-padding py-20 lg:py-28 text-center">
          <h2 className="font-display text-[clamp(28px,4vw,48px)] font-medium text-white mb-4">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Helping industries build intelligent manufacturing systems for the future of Industry 5.0.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className="pill-btn pill-btn-light">Schedule Consultation</Link>
            <Link to="/contact" className="pill-btn pill-btn-light-outline">Contact Me</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
