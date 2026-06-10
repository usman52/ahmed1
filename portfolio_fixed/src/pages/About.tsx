import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: 'Deputy Manager',
    company: 'Servis Tyres',
    responsibilities: 'Production Optimization, Operational Excellence, Smart KPI Systems, Process Improvement, Manufacturing Intelligence, Cost Reduction, Digital Manufacturing Transformation',
  },
  {
    role: 'Industrial Engineering & Operational Excellence',
    company: 'Jahangir Packages Private Limited',
    responsibilities: 'AI-driven operational systems, Lean transformation, production intelligence, and cost optimization projects.',
  },
  {
    role: 'Industrial Engineering',
    company: 'Style Textile',
    responsibilities: 'Lean Manufacturing, workflow optimization, production balancing, and operational improvement initiatives.',
  },
  {
    role: 'Research & Sustainability',
    company: 'World Wide Fund for Nature (WWF)',
    responsibilities: 'Sustainability and industrial decarbonization initiatives.',
  },
];

const specializations = [
  { title: 'AI for Manufacturing', desc: 'Developing intelligent manufacturing systems using machine learning, predictive analytics, automation, and industrial AI solutions.' },
  { title: 'Lean Six Sigma & Operational Excellence', desc: 'Implementing Lean systems, waste reduction strategies, Kaizen methodologies, process optimization, and continuous improvement frameworks.' },
  { title: 'Smart Factory Transformation', desc: 'Helping organizations adopt Industry 4.0 and Industry 5.0 technologies through digital manufacturing and real-time operational visibility.' },
  { title: 'Production Optimization', desc: 'Improving OEE, reducing downtime, optimizing workflows, balancing production systems, and increasing manufacturing efficiency.' },
  { title: 'Industrial Data Analytics', desc: 'Building Power BI dashboards, KPI systems, production intelligence platforms, and operational analytics frameworks.' },
  { title: 'Cost Reduction & Process Efficiency', desc: 'Helping industries reduce operational costs, improve resource utilization, and increase profitability through intelligent process optimization.' },
];

const achievements = [
  { value: 'PKR 100M+', label: 'Operational Impact Delivered' },
  { value: '18%', label: 'OEE Improvement Achieved' },
  { value: '15 \u2192 2 Days', label: 'Lead Time Reduction' },
  { value: '25%', label: 'Reduction in Equipment Breakdowns' },
  { value: 'Real-Time KPI', label: 'OEE Systems Developed' },
  { value: 'AI-Driven', label: 'Manufacturing Solutions Implemented' },
  { value: 'Lean', label: 'Transformation Initiatives Executed' },
  { value: 'Smart', label: 'Operational Costing Systems Designed' },
];

export default function About() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Refresh after layout settles
    requestAnimationFrame(() => { setTimeout(() => ScrollTrigger.refresh(), 200); });
    const ctx = gsap.context(() => {
      gsap.from('.about-hero-text > *', {
        y: 60, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', delay: 0.2,
      });

      gsap.from('.exp-item', {
        x: 80, opacity: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: '.experience-section', start: 'top 75%', once: true },
      });

      gsap.from('.spec-card', {
        y: 60, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.specializations-section', start: 'top 75%', once: true },
      });

      gsap.from('.achievement-badge', {
        scale: 0, opacity: 0, duration: 0.5, stagger: 0.08, ease: 'back.out(1.7)',
        scrollTrigger: { trigger: '.achievements-section', start: 'top 75%', once: true },
      });

      gsap.from('.philosophy-content > *', {
        y: 40, opacity: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: '.philosophy-section', start: 'top 70%', once: true },
      });

      gsap.from('.vision-content > *', {
        y: 40, opacity: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: '.vision-section', start: 'top 70%', once: true },
      });

      gsap.from('.beyond-content > *', {
        y: 40, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.beyond-section', start: 'top 75%', once: true },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      {/* Hero */}
      <section className="min-h-[60vh] flex items-center bg-[#FEFBF6] pt-20">
        <div className="section-padding max-w-7xl mx-auto w-full py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="about-hero-text">
              <p className="micro-label text-[#E86A33] mb-4">ABOUT</p>
              <h1 className="font-display text-[clamp(40px,6vw,80px)] font-medium text-[#2B3A4E] leading-[0.95] mb-6">
                About Ahmad Bin Sadiq
              </h1>
              <p className="text-xl text-[#2B3A4E]/70 mb-6">
                Manufacturing Transformation Consultant | AI Strategist | Lean Six Sigma Master Black Belt
              </p>
              <p className="text-[#2B3A4E]/60 leading-relaxed">
                I am Ahmad Bin Sadiq, a Gold Medalist Industrial Engineer and AI-Powered Manufacturing Consultant focused on transforming industries through Operational Excellence, Smart Manufacturing Systems, Artificial Intelligence, and Lean Transformation.
              </p>
              <p className="text-[#2B3A4E]/60 leading-relaxed mt-4">
                My mission is to help manufacturing organizations build intelligent, efficient, scalable, and future-ready operational systems designed for the Industry 5.0 era.
              </p>
            </div>
            <div className="relative">
              <img
                src="/images/about-portrait.jpg"
                alt="Ahmad Bin Sadiq - Manufacturing Consultant"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto lg:ml-auto object-cover aspect-[3/4]"
              />
              <div className="absolute -bottom-4 -left-4 lg:-left-8 bg-[#00B8A9] text-[#FEFBF6] px-6 py-3 rounded-lg">
                <p className="font-display font-semibold text-lg">Gold Medalist</p>
                <p className="micro-label opacity-80">Industrial Engineering</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Background */}
      <section className="experience-section section-padding py-20 lg:py-32 bg-[#2B3A4E]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 lg:sticky lg:top-32 lg:self-start">
              <p className="micro-label text-[#00B8A9] mb-3">CAREER</p>
              <h2 className="font-display text-[clamp(32px,4vw,48px)] font-medium text-[#FEFBF6] leading-tight mb-4">
                Professional Background
              </h2>
              <p className="text-[#FEFBF6]/70">
                Currently serving as Deputy Manager at Servis Tyres, leading initiatives focused on production optimization, operational excellence, and smart manufacturing transformation.
              </p>
            </div>
            <div className="lg:col-span-3 space-y-8">
              {experiences.map((exp, i) => (
                <div key={i} className="exp-item border-l-2 border-[#00B8A9] pl-6 py-2">
                  <p className="text-[#00B8A9] font-medium text-lg mb-1">{exp.role}</p>
                  <p className="font-display text-2xl text-[#FEFBF6] mb-3">{exp.company}</p>
                  <p className="text-[#FEFBF6]/60 text-sm leading-relaxed">{exp.responsibilities}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="specializations-section section-padding py-20 lg:py-32 bg-[#FEFBF6]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="micro-label text-[#E86A33] mb-3">EXPERTISE</p>
            <h2 className="font-display text-[clamp(32px,4vw,56px)] font-medium text-[#2B3A4E]">What I Specialize In</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializations.map((spec, i) => (
              <div key={i} className="spec-card p-8 rounded-xl bg-[#2B3A4E]">
                <h3 className="font-medium text-lg text-[#00B8A9] mb-3">{spec.title}</h3>
                <p className="text-sm text-[#FEFBF6]/70 leading-relaxed">{spec.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="philosophy-section section-padding py-20 lg:py-32 bg-[#FEFBF6]">
        <div className="philosophy-content max-w-3xl mx-auto text-center">
          <p className="micro-label text-[#E86A33] mb-4">CORE PHILOSOPHY</p>
          <h2 className="font-display text-[clamp(28px,4vw,48px)] font-medium text-[#2B3A4E] leading-tight mb-8">
            Human Intelligence + Artificial Intelligence
          </h2>
          <p className="text-lg text-[#2B3A4E]/70 leading-relaxed mb-8">
            I believe the future of manufacturing is not just automated — it is intelligent, adaptive, and human-centered. Technology alone cannot transform industries.
          </p>
          <p className="text-lg text-[#2B3A4E]/70 leading-relaxed mb-8">
            Real transformation happens when Artificial Intelligence supports decision-making, Data creates operational clarity, Lean systems eliminate inefficiencies, and People are empowered through intelligent processes.
          </p>
          <p className="text-[#2B3A4E] font-medium">
            Artificial Intelligence • Lean Thinking • Industrial Engineering • Data-Driven Decision Making • Human-Centered Leadership
          </p>
        </div>
      </section>

      {/* Vision */}
      <section className="vision-section section-padding py-20 lg:py-32 bg-[#2B3A4E]">
        <div className="vision-content max-w-4xl mx-auto text-center">
          <p className="micro-label text-[#00B8A9] mb-4">VISION</p>
          <h2 className="font-display text-[clamp(32px,5vw,64px)] font-medium text-[#FEFBF6] leading-tight mb-8">
            Building the Future of Intelligent Industry
          </h2>
          <div className="text-lg text-[#FEFBF6]/80 leading-relaxed space-y-4">
            <p>My vision is to help organizations create next-generation manufacturing environments where: Operations are data-driven, Decisions are intelligent, Systems are adaptive, Processes are lean, Technology empowers people, Sustainability becomes operational culture.</p>
            <p>The goal is not simply digital transformation.</p>
            <p className="text-[#00B8A9] font-medium">The goal is building intelligent industrial ecosystems prepared for the future of global manufacturing.</p>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="achievements-section section-padding py-20 lg:py-32 bg-[#FEFBF6]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="micro-label text-[#E86A33] mb-3">TRACK RECORD</p>
            <h2 className="font-display text-[clamp(32px,4vw,56px)] font-medium text-[#2B3A4E]">Key Achievements</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((ach, i) => (
              <div key={i} className="achievement-badge flex flex-col items-center text-center">
                <div className="w-32 h-32 lg:w-44 lg:h-44 rounded-full border-2 border-[#00B8A9] flex flex-col items-center justify-center p-4 mb-4 hover:bg-[#00B8A9]/5 transition-colors">
                  <span className="font-display text-xl lg:text-2xl font-semibold text-[#2B3A4E]">{ach.value}</span>
                </div>
                <p className="micro-label text-[#2B3A4E]/60">{ach.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond Engineering */}
      <section className="beyond-section section-padding py-20 lg:py-32 bg-[#2B3A4E]">
        <div className="beyond-content max-w-4xl mx-auto">
          <p className="micro-label text-[#E86A33] mb-4">BEYOND ENGINEERING</p>
          <h2 className="font-display text-[clamp(24px,3vw,36px)] font-medium text-[#FEFBF6] leading-tight mb-8">
            For me, manufacturing transformation is more than improving machines and processes.
          </h2>
          <p className="text-[#00B8A9] font-medium text-lg mb-6">It is about:</p>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {['Improving decision-making', 'Creating operational transparency', 'Building continuous improvement culture', 'Empowering teams', 'Developing sustainable systems', 'Preparing industries for the future'].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#00B8A9]" />
                <span className="text-[#FEFBF6]/80">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-[#00B8A9] font-medium text-lg">
            I believe the best manufacturing systems combine: Technology, Intelligence, Efficiency, and Humanity.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding py-20 bg-[#FEFBF6]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-[clamp(28px,4vw,48px)] font-medium text-[#2B3A4E] mb-8">
            Let's Build the Future Together
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className="pill-btn pill-btn-primary">Schedule Consultation</Link>
            <Link to="/contact" className="pill-btn pill-btn-outline">Contact Me</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
