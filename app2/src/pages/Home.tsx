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

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const impactRef = useRef<HTMLDivElement>(null);
  const futureRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const industriesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.from('.hero-content > *', {
        y: 60, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', delay: 0.3,
      });

      // Impact section
      if (impactRef.current) {
        gsap.from('.impact-heading', {
          x: -60, opacity: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: impactRef.current, start: 'top 80%' },
        });
        gsap.from('.impact-stat', {
          y: 60, opacity: 0, duration: 0.6, stagger: 0.2, ease: 'power3.out',
          scrollTrigger: { trigger: impactRef.current, start: 'top 75%' },
        });
      }

      // Future section
      if (futureRef.current) {
        gsap.from('.future-heading .word', {
          y: 80, opacity: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: futureRef.current, start: 'top 70%' },
        });
        gsap.from('.future-body', {
          y: 40, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.3,
          scrollTrigger: { trigger: futureRef.current, start: 'top 70%' },
        });
      }

      // Services
      if (servicesRef.current) {
        gsap.from('.service-card', {
          y: 80, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: servicesRef.current, start: 'top 75%' },
        });
      }

      // Results
      if (resultsRef.current) {
        gsap.from('.result-item', {
          y: 50, opacity: 0, duration: 0.6, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: resultsRef.current, start: 'top 75%' },
        });
      }

      // Industries
      if (industriesRef.current) {
        gsap.from('.industry-card', {
          scale: 0.8, opacity: 0, duration: 0.5, stagger: 0.12, ease: 'back.out(1.7)',
          scrollTrigger: { trigger: industriesRef.current, start: 'top 75%' },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[100dvh] flex flex-col items-center justify-center bg-[#FEFBF6] pt-20">
        <div className="hero-content text-center px-6 max-w-5xl mx-auto">
          <p className="micro-label text-[#E86A33] mb-6">AI-POWERED MANUFACTURING CONSULTANT</p>
          <h1 className="font-display font-semibold text-[clamp(40px,8vw,96px)] text-[#2B3A4E] leading-[0.95] tracking-tight mb-6">
            Ahmad Bin Sadiq
          </h1>
          <p className="text-lg lg:text-xl text-[#2B3A4E]/70 max-w-2xl mx-auto mb-4 leading-relaxed">
            Lean Six Sigma Master Black Belt | Industrial Engineer | Smart Factory & Operational Excellence Specialist
          </p>
          <p className="text-base text-[#2B3A4E]/60 max-w-xl mx-auto mb-10">
            Helping manufacturing industries reduce cost, improve OEE, optimize production systems, and digitally transform operations through AI, Lean Manufacturing, and Industry 5.0 solutions.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className="pill-btn pill-btn-primary">Book Consultation</Link>
            <Link to="/case-studies" className="pill-btn pill-btn-outline">View Projects</Link>
          </div>
        </div>

        {/* Corner labels */}
        <div className="absolute top-24 left-6 lg:left-12 micro-label text-[#2B3A4E]/40 hidden lg:block">AI-POWERED MANUFACTURING</div>
        <div className="absolute top-24 right-6 lg:right-12 micro-label text-[#2B3A4E]/40 hidden lg:block">SCROLL TO EXPLORE</div>
        <div className="absolute bottom-8 left-6 lg:left-12 micro-label text-[#2B3A4E]/40 hidden lg:block">LEAN SIX SIGMA MBB</div>
        <div className="absolute bottom-8 right-6 lg:right-12 micro-label text-[#2B3A4E]/40 hidden lg:block">INDUSTRY 5.0</div>
      </section>

      {/* Operational Impact */}
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
              <div className="impact-stat">
                <StatCounter end={100} prefix="PKR " suffix="M+" label="Operational Impact" color="#00B8A9" />
              </div>
              <div className="impact-stat">
                <StatCounter end={18} suffix="%" label="OEE Improvement" color="#E86A33" />
              </div>
              <div className="impact-stat">
                <span className="font-display text-[clamp(36px,5vw,56px)] font-semibold text-[#00B8A9]">15 &rarr; 2 Days</span>
                <p className="micro-label text-[#2B3A4E]/60 mt-2">Lead Time Reduction</p>
              </div>
              <div className="impact-stat">
                <StatCounter end={30} suffix="+" label="AI & Analytics Projects" color="#E86A33" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Building the Future */}
      <section ref={futureRef} className="section-padding py-20 lg:py-32 bg-[#2B3A4E]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="future-heading font-display text-[clamp(32px,5vw,64px)] font-medium text-[#FEFBF6] leading-tight mb-8">
            {'Building the Future of Intelligent Manufacturing'.split(' ').map((word, i) => (
              <span key={i} className="word inline-block mr-[0.3em]">{word}</span>
            ))}
          </h2>
          <p className="future-body text-lg lg:text-xl text-[#FEFBF6]/80 leading-relaxed mb-8 max-w-3xl mx-auto">
            I help industries transform traditional manufacturing operations into intelligent, efficient, and data-driven systems through Artificial Intelligence, Lean Six Sigma, Industrial Engineering, and Operational Excellence. Currently serving as Deputy Manager at Servis Tyres with experience across packaging, textile, tyre manufacturing, sustainability, and smart factory transformation.
          </p>
          <p className="micro-label text-[#00B8A9]">AI • LEAN • SMART MANUFACTURING • INDUSTRY 5.0</p>
        </div>
      </section>

      {/* Core Services */}
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

      {/* Proven Results */}
      <section ref={resultsRef} className="section-padding py-20 lg:py-32 bg-[#2B3A4E]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="micro-label text-[#00B8A9] mb-3">TRACK RECORD</p>
            <h2 className="font-display text-[clamp(32px,4vw,56px)] font-medium text-[#FEFBF6]">Proven Industrial Results</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="result-item text-center">
              <span className="font-display text-[clamp(32px,4vw,56px)] font-semibold text-[#00B8A9]">PKR 100M+</span>
              <p className="micro-label text-[#FEFBF6]/60 mt-2">Operational Value Created</p>
            </div>
            <div className="result-item text-center">
              <span className="font-display text-[clamp(32px,4vw,56px)] font-semibold text-[#00B8A9]">18%</span>
              <p className="micro-label text-[#FEFBF6]/60 mt-2">OEE Improvement Achieved</p>
            </div>
            <div className="result-item text-center">
              <span className="font-display text-[clamp(32px,4vw,56px)] font-semibold text-[#00B8A9]">25%</span>
              <p className="micro-label text-[#FEFBF6]/60 mt-2">Reduction in Breakdowns</p>
            </div>
            <div className="result-item text-center">
              <span className="font-display text-[clamp(32px,4vw,56px)] font-semibold text-[#00B8A9]">Zero</span>
              <p className="micro-label text-[#FEFBF6]/60 mt-2">Downtime Achievement</p>
            </div>
            <div className="result-item text-center col-span-2 lg:col-span-1">
              <span className="font-display text-[clamp(32px,4vw,56px)] font-semibold text-[#00B8A9]">15 &rarr; 2</span>
              <p className="micro-label text-[#FEFBF6]/60 mt-2">Lead Time Reduction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
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

      {/* CTA Banner */}
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
