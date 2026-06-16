import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Linkedin, Github, CheckCircle, Shield, Lightbulb, Cog, BarChart3 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const consultingAreas = [
  'AI for Manufacturing', 'Lean Six Sigma Transformation', 'Smart Factory Solutions',
  'Production Optimization', 'OEE Improvement', 'KPI Dashboards & Analytics',
  'Predictive Maintenance Systems', 'Cost Reduction Strategies', 'Operational Excellence',
  'Industry 4.0 & 5.0 Transformation', 'Manufacturing Digital Transformation', 'Industrial Engineering Solutions',
];

const industriesSupported = [
  'Tyre Manufacturing', 'Packaging & Corrugated', 'Textile & Garments',
  'Paper Manufacturing', 'Industrial Operations', 'Smart Manufacturing', 'Sustainability & Decarbonization',
];

const opportunities = [
  'Manufacturing Consultancy Projects', 'Industrial Transformation Initiatives',
  'Lean Manufacturing Implementation', 'AI & Analytics Projects',
  'Smart Factory Development', 'Operational Excellence Programs',
  'Production Optimization Projects', 'Corporate Training & Workshops',
  'KPI Dashboard Development', 'Manufacturing Process Improvement',
];

const whyConnect = [
  'Improve productivity', 'Reduce operational waste', 'Increase manufacturing efficiency',
  'Build intelligent production systems', 'Improve operational visibility',
  'Develop data-driven decision systems', 'Implement sustainable manufacturing practices',
  'Prepare for Industry 5.0 transformation',
];

const pillars = [
  { icon: Shield, label: 'Professionalism' },
  { icon: Lightbulb, label: 'Strategic thinking' },
  { icon: Cog, label: 'Operational understanding' },
  { icon: BarChart3, label: 'Data-driven problem solving' },
];

export default function Contact() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Refresh after layout settles
    requestAnimationFrame(() => { setTimeout(() => ScrollTrigger.refresh(), 200); });
    const ctx = gsap.context(() => {
      gsap.from('.contact-hero > *', {
        y: 60, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', delay: 0.2,
      });

      gsap.from('.contact-card', {
        x: 80, opacity: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.contact-hero', start: 'top 60%', once: true },
      });

      gsap.from('.area-pill', {
        scale: 0, opacity: 0, duration: 0.3, stagger: 0.03, ease: 'back.out(1.7)',
        scrollTrigger: { trigger: '.areas-section', start: 'top 75%', once: true },
      });

      gsap.from('.industry-tag', {
        y: 20, opacity: 0, duration: 0.4, stagger: 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: '.industries-section', start: 'top 75%', once: true },
      });

      gsap.from('.opp-item', {
        x: -40, opacity: 0, duration: 0.5, stagger: 0.06, ease: 'power3.out',
        scrollTrigger: { trigger: '.opportunities-section', start: 'top 75%', once: true },
      });

      gsap.from('.why-point', {
        y: 30, opacity: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: '.why-section', start: 'top 75%', once: true },
      });

      gsap.from('.pillar-item', {
        scale: 0, opacity: 0, duration: 0.5, stagger: 0.1, ease: 'back.out(1.7)',
        scrollTrigger: { trigger: '.pillars-section', start: 'top 75%', once: true },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      {/* Hero */}
      <section className="min-h-[50vh] flex items-center bg-[#FEFBF6] pt-20">
        <div className="contact-hero section-padding max-w-7xl mx-auto w-full py-16 lg:py-24">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3">
              <p className="micro-label text-[#E86A33] mb-4">CONTACT</p>
              <h1 className="font-display text-[clamp(40px,7vw,96px)] font-medium text-[#2B3A4E] leading-[1.05] pb-1 mb-6">
                Contact Ahmad Bin Sadiq
              </h1>
              <p className="text-xl text-[#E86A33] font-medium mb-4">
                Let's Build the Future of Intelligent Manufacturing
              </p>
              <p className="text-[#2B3A4E]/60 leading-relaxed max-w-xl">
                Whether you are looking to improve operational efficiency, reduce manufacturing cost, implement Lean systems, deploy Artificial Intelligence, or digitally transform industrial operations — I'm available to collaborate with organizations focused on operational excellence and smart manufacturing transformation.
              </p>
            </div>
            <div className="lg:col-span-2">
              <div className="contact-card glass-card rounded-2xl p-8">
                <p className="font-display text-xl text-[#2B3A4E] mb-1">Ahmad Bin Sadiq</p>
                <div className="space-y-1 mb-6">
                  <p className="text-sm text-[#2B3A4E]/70">Manufacturing Transformation Consultant</p>
                  <p className="text-sm text-[#2B3A4E]/70">AI-Powered Manufacturing Strategist</p>
                  <p className="text-sm text-[#2B3A4E]/70">Lean Six Sigma Master Black Belt</p>
                </div>
                <div className="space-y-4">
                  <a
                    href="mailto:ahmadbinsadiq@gmail.com"
                    className="flex items-center gap-3 text-[#2B3A4E] hover:text-[#00B8A9] transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span className="text-sm">ahmadbinsadiq@gmail.com</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/ahmad-bin-sadiq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[#2B3A4E] hover:text-[#00B8A9] transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="text-sm">linkedin.com/in/ahmad-bin-sadiq</span>
                  </a>
                  <a
                    href="https://github.com/ahmadbinsadiq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[#2B3A4E] hover:text-[#00B8A9] transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span className="text-sm">github.com/ahmadbinsadiq</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Areas */}
      <section className="areas-section section-padding py-20 lg:py-32 bg-[#2B3A4E]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="micro-label text-[#00B8A9] mb-3">SERVICES AVAILABLE FOR</p>
            <h2 className="font-display text-[clamp(28px,4vw,48px)] font-medium text-[#FEFBF6]">Consulting Areas</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {consultingAreas.map((area, i) => (
              <span key={i} className="area-pill px-4 py-2 border border-[#00B8A9] rounded-full text-[#FEFBF6] text-sm font-medium hover:bg-[#00B8A9] transition-colors cursor-default">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Supported */}
      <section className="industries-section section-padding py-16 bg-[#FEFBF6]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="micro-label text-[#E86A33] mb-6">INDUSTRIES SUPPORTED</p>
          <div className="flex flex-wrap justify-center gap-3">
            {industriesSupported.map((ind, i) => (
              <span key={i} className="industry-tag px-4 py-2 bg-[#2B3A4E]/5 text-[#2B3A4E] text-sm font-medium rounded-full">
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Opportunities */}
      <section className="opportunities-section section-padding py-20 lg:py-32 bg-[#2B3A4E]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <p className="micro-label text-[#00B8A9] mb-3">AVAILABLE FOR</p>
              <h2 className="font-display text-[clamp(28px,4vw,48px)] font-medium text-[#FEFBF6] leading-tight">
                Collaboration Opportunities
              </h2>
            </div>
            <div className="lg:col-span-3">
              <div className="grid sm:grid-cols-2 gap-4">
                {opportunities.map((opp, i) => (
                  <div key={i} className="opp-item flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-[#00B8A9] flex-shrink-0" />
                    <span className="text-[#FEFBF6]/85 text-sm">{opp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Connect */}
      <section className="why-section section-padding py-20 lg:py-32 bg-[#FEFBF6]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="micro-label text-[#E86A33] mb-3">VALUE</p>
            <h2 className="font-display text-[clamp(28px,4vw,48px)] font-medium text-[#2B3A4E]">Why Connect?</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {whyConnect.map((point, i) => (
              <div key={i} className="why-point flex items-center gap-3 p-4 rounded-xl bg-white border border-[#2B3A4E]/10">
                <span className="w-2 h-2 rounded-full bg-[#00B8A9]" />
                <span className="text-[#2B3A4E]/75">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Response Commitment */}
      <section className="pillars-section section-padding py-20 lg:py-32 bg-[#2B3A4E]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-[clamp(24px,3vw,36px)] font-medium text-[#FEFBF6] mb-12">
            Response Commitment
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {pillars.map((pillar, i) => (
              <div key={i} className="pillar-item flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-[#00B8A9]/20 flex items-center justify-center mb-3">
                  <pillar.icon className="w-8 h-8 text-[#00B8A9]" />
                </div>
                <span className="text-[#FEFBF6] font-medium text-sm">{pillar.label}</span>
              </div>
            ))}
          </div>
          <p className="text-[#FEFBF6]/60">Long-term transformation mindset</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00B8A9] to-[#2B3A4E]" />
        <div className="relative section-padding py-20 lg:py-28 text-center">
          <h2 className="font-display text-[clamp(28px,5vw,56px)] font-medium text-[#FEFBF6] mb-4">
            Let's Start the Conversation
          </h2>
          <p className="text-lg text-[#FEFBF6]/80 mb-10 max-w-3xl mx-auto">
            If your organization is ready to improve operational performance, optimize manufacturing systems, deploy AI in operations, build smart factory solutions, reduce manufacturing costs, improve OEE, or digitally transform operations — let's discuss how intelligent manufacturing systems can create measurable operational impact for your business.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="mailto:ahmadbinsadiq@gmail.com" className="pill-btn pill-btn-light">Schedule Consultation</a>
            <a href="mailto:ahmadbinsadiq@gmail.com" className="pill-btn pill-btn-light-outline">Send Message</a>
          </div>
        </div>
      </section>

      {/* Final Statement */}
      <section className="section-padding py-20 lg:py-32 bg-[#FEFBF6]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-[clamp(24px,4vw,48px)] font-medium text-[#2B3A4E] leading-tight mb-6">
            Transforming Manufacturing Through Intelligence, Innovation & Operational Excellence
          </h2>
          <p className="text-[#2B3A4E]/60 max-w-2xl mx-auto">
            Building smarter, leaner, and future-ready manufacturing systems through Artificial Intelligence, Lean Thinking, Industrial Engineering, and Industry 5.0 transformation.
          </p>
        </div>
      </section>
    </div>
  );
}
