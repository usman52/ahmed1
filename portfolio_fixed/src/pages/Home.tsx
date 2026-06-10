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

function StatCounter({ end, prefix, suffix, label, color }: { end: number; prefix?: string; suffix?: string; label: string; color: string }) {
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
  { icon: Brain, title: 'AI for Manufacturing', desc: 'Machine learning, predictive analytics, and intelligent automation' },
  { icon: Target, title: 'Lean Six Sigma Transformation', desc: 'Waste reduction, Kaizen, and continuous improvement' },
  { icon: Gauge, title: 'OEE Improvement', desc: 'Overall Equipment Effectiveness optimization systems' },
  { icon: Factory, title: 'Smart Factory Solutions', desc: 'Industry 4.0 & 5.0 transformation and IoT integration' },
  { icon: Settings, title: 'Production Optimization', desc: 'Workflow balancing, bottleneck elimination, flow improvement' },
  { icon: Wrench, title: 'Predictive Maintenance', desc: 'ML-based failure prediction and reliability engineering' },
  { icon: BarChart3, title: 'KPI & Power BI Dashboards', desc: 'Real-time production intelligence and data visualization' },
  { icon: TrendingDown, title: 'Cost Reduction', desc: 'Operational excellence and resource optimization' },
];

const industries = [
  { icon: CircleDot, name: 'Tyre Manufacturing' },
  { icon: Package, name: 'Packaging & Corrugated' },
  { icon: Shirt, name: 'Textile & Garments' },
  { icon: FileText, name: 'Paper Industry' },
  { icon: Cpu, name: 'Smart Manufacturing' },
];

// Unsplash free-to-use data analytics / factory / dashboard images
const heroBgUrl =
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80&fit=crop&auto=format';

export default function Home() {
  const heroRef      = useRef<HTMLDivElement>(null);
  const impactRef    = useRef<HTMLDivElement>(null);
  const futureRef    = useRef<HTMLDivElement>(null);
  const servicesRef  = useRef<HTMLDivElement>(null);
  const resultsRef   = useRef<HTMLDivElement>(null);
  const industriesRef= useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Give fonts + layout time to settle, then refresh ScrollTrigger
    const rafId = requestAnimationFrame(() => {
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 200);
    });

    const ctx = gsap.context(() => {
      // Hero animation
      gsap.from('.hero-content > *', {
        y: 60, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', delay: 0.4,
      });

      // Impact section
      if (impactRef.current) {
        gsap.from('.impact-heading', {
          x: -60, opacity: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: impactRef.current, start: 'top 80%', once: true },
        });
        gsap.from('.impact-stat', {
          y: 60, opacity: 0, duration: 0.6, stagger: 0.2, ease: 'power3.out',
          scrollTrigger: { trigger: impactRef.current, start: 'top 75%', once: true },
        });
      }

      // Future section
      if (futureRef.current) {
        gsap.from('.future-heading .word', {
          y: 80, opacity: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: futureRef.current, start: 'top 70%', once: true },
        });
        gsap.from('.future-body', {
          y: 40, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.3,
          scrollTrigger: { trigger: futureRef.current, start: 'top 70%', once: true },
        });
      }

      // Services
      if (servicesRef.current) {
        gsap.from('.service-card', {
          y: 80, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: servicesRef.current, start: 'top 75%', once: true },
        });
      }

      // Results
      if (resultsRef.current) {
        gsap.from('.result-item', {
          y: 50, opacity: 0, duration: 0.6, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: resultsRef.current, start: 'top 75%', once: true },
        });
      }

      // Industries
      if (industriesRef.current) {
        gsap.from('.industry-card', {
          scale: 0.8, opacity: 0, duration: 0.5, stagger: 0.12, ease: 'back.out(1.7)',
          scrollTrigger: { trigger: industriesRef.current, start: 'top 75%', once: true },
        });
      }
    });

    return () => {
      ctx.revert();
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div>
      {/* ─── Hero Section ─── */}
      <section
        ref={heroRef}
        className="relative min-h-[100dvh] flex flex-col items-center justify-center pt-20 overflow-hidden"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${heroBgUrl}')` }}
          aria-hidden="true"
        />
        {/* Dark gradient overlay so text stays readable */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(43,58,78,0.88) 0%, rgba(43,58,78,0.72) 50%, rgba(0,184,169,0.35) 100%)',
          }}
          aria-hidden="true"
        />

        {/* Floating data-grid decoration */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute border border-[#00B8A9]/10 rounded-lg"
              style={{
                width: `${120 + i * 40}px`,
                height: `${80 + i * 30}px`,
                top: `${10 + i * 12}%`,
                left: `${5 + i * 14}%`,
                opacity: 0.4 - i * 0.05,
                transform: `rotate(${-8 + i * 3}deg)`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="hero-content relative text-center px-6 max-w-5xl mx-auto z-10">
          <p className="micro-label text-[#00B8A9] mb-6 tracking-widest">
            AI-POWERED MANUFACTURING CONSULTANT
          </p>
          <h1 className="font-display font-semibold text-[clamp(40px,8vw,96px)] text-[#FEFBF6] leading-[0.95] tracking-tight mb-6">
            Ahmad Bin Sadiq
          </h1>
          <p className="text-lg lg:text-xl text-[#FEFBF6]/80 max-w-2xl mx-auto mb-4 leading-relaxed">
            Lean Six Sigma Master Black Belt&nbsp;|&nbsp;Industrial Engineer&nbsp;|&nbsp;Smart Factory &amp; Operational Excellence Specialist
          </p>
          <p className="text-base text-[#FEFBF6]/60 max-w-xl mx-auto mb-10">
            Helping manufacturing industries reduce cost, improve OEE, optimize production systems,
            and digitally transform operations through AI, Lean Manufacturing, and Industry 5.0 solutions.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className="pill-btn pill-btn-primary">Book Consultation</Link>
            <Link to="/case-studies" className="pill-btn pill-btn-light-outline">View Projects</Link>
          </div>
        </div>

        {/* Corner labels */}
        <div className="absolute top-24 left-6 lg:left-12 micro-label text-[#FEFBF6]/40 hidden lg:block">AI-POWERED MANUFACTURING</div>
        <div className="absolute top-24 right-6 lg:right-12 micro-label text-[#FEFBF6]/40 hidden lg:block">SCROLL TO EXPLORE</div>
        <div className="absolute bottom-8 left-6 lg:left-12 micro-label text-[#FEFBF6]/40 hidden lg:block">LEAN SIX SIGMA MBB</div>
        <div className="absolute bottom-8 right-6 lg:right-12 micro-label text-[#FEFBF6]/40 hidden lg:block">INDUSTRY 5.0</div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <div className="w-[1px] h-10 bg-gradient-to-b from-[#00B8A9]/0 via-[#00B8A9]/60 to-[#00B8A9]/0 animate-pulse" />
        </div>
      </section>

      {/* ─── Operational Impact ─── */}
      <section ref={impactRef} className="section-padding py-20 lg:py-32 bg-[#FEFBF6]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <h2 className="impact-heading font-display text-[clamp(32px,4vw,56px)] font-medium text-[#2B3A4E] leading-tight mb-4">
                Operational Impact Delivered
              </h2>
              <p className="text-[#2B3A4E]/60 text-lg">Measurable transformation across manufacturing operations</p>
            </div>
            <div className="lg:col-span-3 grid grid-cols-2 gap-8">
              <div className="impact-stat"><StatCounter end={100} prefix="PKR " suffix="M+" label="Operational Impact" color="#00B8A9" /></div>
              <div className="impact-stat"><StatCounter end={18} suffix="%" label="OEE Improvement" color="#E86A33" /></div>
              <div className="impact-stat">
                <span className="font-display text-[clamp(36px,5vw,56px)] font-semibold text-[#00B8A9]">15 &rarr; 2 Days</span>
                <p className="micro-label text-[#2B3A4E]/60 mt-2">Lead Time Reduction</p>
              </div>
              <div className="impact-stat"><StatCounter end={30} suffix="+" label="AI & Analytics Projects" color="#E86A33" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Building the Future ─── */}
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
            and Operational Excellence. Currently serving as Deputy Manager at Servis Tyres with experience
            across packaging, textile, tyre manufacturing, sustainability, and smart factory transformation.
          </p>
          <p className="micro-label text-[#00B8A9]">AI • LEAN • SMART MANUFACTURING • INDUSTRY 5.0</p>
        </div>
      </section>

      {/* ─── Core Services ─── */}
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
                className="service-card group p-8 rounded-xl border border-[#2B3A4E]/10 bg-white hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
              >
                <s.icon className="w-8 h-8 text-[#00B8A9] group-hover:text-[#E86A33] transition-colors mb-4" />
                <h3 className="font-medium text-lg text-[#2B3A4E] mb-2">{s.title}</h3>
                <p className="text-sm text-[#2B3A4E]/60 leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Proven Results ─── */}
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
                <span className="font-display text-[clamp(32px,4vw,56px)] font-semibold text-[#00B8A9]">{r.val}</span>
                <p className="micro-label text-[#FEFBF6]/60 mt-2">{r.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Industries ─── */}
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
                className="industry-card group flex flex-col items-center p-8 rounded-xl border border-[#2B3A4E]/10 bg-white hover:border-[#00B8A9] transition-all duration-300 text-center"
              >
                <ind.icon className="w-10 h-10 text-[#00B8A9] group-hover:scale-110 transition-transform mb-4" />
                <span className="font-medium text-[#2B3A4E]">{ind.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00B8A9] to-[#2B3A4E]" />
        <div className="relative section-padding py-20 lg:py-28 text-center">
          <h2 className="font-display text-[clamp(28px,4vw,48px)] font-medium text-[#FEFBF6] mb-4">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-lg text-[#FEFBF6]/80 mb-10 max-w-2xl mx-auto">
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
