import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Download, Linkedin, Github, Mail, ExternalLink } from 'lucide-react';
import { useCountUp } from '../hooks/useCountUp';

gsap.registerPlugin(ScrollTrigger);

const achievements = [
  { value: 100, prefix: 'PKR ', suffix: 'M+', label: 'Operational Impact Delivered' },
  { value: 18, suffix: '%', label: 'OEE Improvement Achieved' },
  { value: 15, display: '15 \u2192 2 Days', label: 'Lead Time Reduction' },
  { value: 25, suffix: '%', label: 'Reduction in Equipment Breakdowns' },
  { value: 0, display: 'AI-Based', label: 'Manufacturing Solutions Developed' },
  { value: 0, display: 'Smart KPI', label: 'Production Intelligence Systems Implemented' },
  { value: 0, display: 'Lean', label: 'Manufacturing Transformation Projects Executed' },
  { value: 0, display: 'Smart', label: 'Operational Costing Systems Designed' },
];

const experiences = [
  {
    role: 'Deputy Manager',
    company: 'Servis Tyres',
    description: 'Leading manufacturing optimization, operational excellence, process improvement, and smart manufacturing initiatives.',
  },
  {
    role: 'Industrial Engineering & Operational Excellence',
    company: 'Jahangir Packages Private Limited',
    description: 'Worked on AI-driven operational systems, Lean transformation, production intelligence, and cost optimization projects.',
  },
  {
    role: 'Industrial Engineering',
    company: 'Style Textile',
    description: 'Focused on Lean Manufacturing, workflow optimization, production balancing, and operational improvement initiatives.',
  },
  {
    role: 'Research & Sustainability',
    company: 'World Wide Fund for Nature (WWF)',
    description: 'Supported sustainability and industrial decarbonization initiatives.',
  },
];

const skills = [
  'Manufacturing Transformation', 'Lean Manufacturing', 'AI & Industrial Analytics',
  'OEE Improvement', 'Production Optimization', 'Operational Excellence',
  'Smart Manufacturing Systems', 'KPI Dashboard Development', 'Cost Reduction Strategies',
  'Predictive Maintenance', 'Process Optimization', 'Industrial Engineering Solutions',
];

const profiles = [
  { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com/in/ahmad-bin-sadiq', display: 'linkedin.com/in/ahmad-bin-sadiq' },
  { icon: Github, label: 'GitHub', url: 'https://github.com/ahmadbinsadiq', display: 'github.com/ahmadbinsadiq' },
  { icon: Mail, label: 'Email', url: 'mailto:ahmadbinsadiq@gmail.com', display: 'ahmadbinsadiq@gmail.com' },
];

function StatCounter({ end, prefix, suffix, label }: { end: number; prefix?: string; suffix?: string; label: string }) {
  const { ref, displayValue } = useCountUp(end, { prefix, suffix });
  return (
    <div className="text-center">
      <span ref={ref} className="font-display text-[clamp(28px,4vw,48px)] font-semibold text-[#00B8A9]">
        {displayValue}
      </span>
      <p className="micro-label text-[#2B3A4E]/60 mt-2">{label}</p>
    </div>
  );
}

export default function Resume() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.resume-hero > *', {
        y: 60, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', delay: 0.2,
      });

      gsap.from('.overview-content > *', {
        y: 40, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.overview-section', start: 'top 75%' },
      });

      gsap.from('.achievement-stat', {
        y: 50, opacity: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: '.achievements-grid', start: 'top 75%' },
      });

      gsap.from('.exp-item', {
        x: 60, opacity: 0, duration: 0.6, stagger: 0.2, ease: 'power3.out',
        scrollTrigger: { trigger: '.experience-section', start: 'top 75%' },
      });

      gsap.from('.skill-pill', {
        scale: 0, opacity: 0, duration: 0.4, stagger: 0.04, ease: 'back.out(1.7)',
        scrollTrigger: { trigger: '.skills-section', start: 'top 75%' },
      });

      gsap.from('.profile-card', {
        y: 40, opacity: 0, duration: 0.6, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: '.profiles-section', start: 'top 75%' },
      });

      gsap.from('.download-cta > *', {
        y: 40, opacity: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: '.download-cta', start: 'top 75%' },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const handleDownload = () => {
    // Create a professional CV content as text that can be downloaded
    const cvContent = `
AHMAD BIN SADIQ
AI-Powered Manufacturing Consultant | Lean Six Sigma Master Black Belt | Industrial Engineer

Email: ahmadbinsadiq@gmail.com
LinkedIn: linkedin.com/in/ahmad-bin-sadiq
GitHub: github.com/ahmadbinsadiq

PROFESSIONAL OVERVIEW
Gold Medalist Industrial Engineer with expertise in AI for Manufacturing, Lean Six Sigma, Smart Factory Transformation, Operational Excellence, Production Optimization, Industrial Data Analytics, KPI & Power BI Dashboards, Predictive Maintenance Systems, Manufacturing Intelligence, and Industry 4.0 & 5.0 Solutions.

Currently serving as Deputy Manager at Servis Tyres with experience across tyre manufacturing, packaging, textile, sustainability, and industrial transformation projects.

KEY ACHIEVEMENTS
- PKR 100M+ Operational Impact Delivered
- 18% OEE Improvement Achieved
- Lead Time Reduced from 15 Days to 2 Days
- 25% Reduction in Equipment Breakdowns
- AI-Based Manufacturing Solutions Developed
- Smart KPI & Production Intelligence Systems Implemented
- Lean Manufacturing Transformation Projects Executed
- Smart Operational Costing Systems Designed

PROFESSIONAL EXPERIENCE

Deputy Manager — Servis Tyres
Leading manufacturing optimization, operational excellence, process improvement, and smart manufacturing initiatives.

Industrial Engineering & Operational Excellence — Jahangir Packages Private Limited
Worked on AI-driven operational systems, Lean transformation, production intelligence, and cost optimization projects.

Industrial Engineering — Style Textile
Focused on Lean Manufacturing, workflow optimization, production balancing, and operational improvement initiatives.

Research & Sustainability — World Wide Fund for Nature (WWF)
Supported sustainability and industrial decarbonization initiatives.

CORE EXPERTISE
Manufacturing Transformation, Lean Manufacturing, AI & Industrial Analytics, OEE Improvement, Production Optimization, Operational Excellence, Smart Manufacturing Systems, KPI Dashboard Development, Cost Reduction Strategies, Predictive Maintenance, Process Optimization, Industrial Engineering Solutions

CERTIFICATIONS
- Lean Six Sigma Master Black Belt
- AI Engineering — IBM
- Data Science — IBM
- Data Analytics — Google
- Gold Medalist — Master of Industrial Engineering & Management

Industries Served: Tyre Manufacturing, Packaging & Corrugated, Textile & Garments, Paper Manufacturing, Smart Manufacturing, Sustainability & Decarbonization

Building intelligent manufacturing systems designed for operational excellence, sustainable growth, and Industry 5.0 transformation.
`;

    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Ahmad_Bin_Sadiq_CV.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div ref={pageRef} className="relative">
      {/* Toast */}
      {showToast && (
        <div className="fixed top-24 right-6 z-50 bg-[#00B8A9] text-[#FEFBF6] px-6 py-3 rounded-lg shadow-lg animate-slide-up">
          <p className="font-medium text-sm">CV Downloaded Successfully!</p>
        </div>
      )}

      {/* Hero */}
      <section className="min-h-[40vh] flex items-center bg-[#FEFBF6] pt-20">
        <div className="resume-hero section-padding max-w-7xl mx-auto w-full py-16 lg:py-20">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <p className="micro-label text-[#E86A33] mb-4">RESUME</p>
              <h1 className="font-display text-[clamp(40px,6vw,80px)] font-medium text-[#2B3A4E] leading-[0.95] mb-4">
                Resume & Professional Profile
              </h1>
              <p className="font-display text-xl text-[#2B3A4E] mb-2">Ahmad Bin Sadiq</p>
              <p className="text-[#2B3A4E]/60">
                AI-Powered Manufacturing Consultant | Lean Six Sigma Master Black Belt | Industrial Engineer | Smart Factory & Operational Excellence Specialist
              </p>
            </div>
            <div className="lg:col-span-1 flex lg:justify-end">
              <button
                onClick={handleDownload}
                className="pill-btn pill-btn-primary animate-pulse-glow"
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Overview */}
      <section className="overview-section section-padding py-20 lg:py-32 bg-[#2B3A4E]">
        <div className="overview-content max-w-4xl mx-auto text-center">
          <p className="micro-label text-[#00B8A9] mb-4">PROFESSIONAL OVERVIEW</p>
          <p className="text-lg text-[#FEFBF6]/80 leading-relaxed mb-8">
            Gold Medalist Industrial Engineer with expertise in AI for Manufacturing, Lean Six Sigma, Smart Factory Transformation, Operational Excellence, Production Optimization, Industrial Data Analytics, KPI & Power BI Dashboards, Predictive Maintenance Systems, Manufacturing Intelligence, and Industry 4.0 & 5.0 Solutions. Currently serving as Deputy Manager at Servis Tyres with experience across tyre manufacturing, packaging, textile, sustainability, and industrial transformation projects.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {['Manufacturing Transformation', 'Lean Manufacturing', 'AI & Industrial Analytics', 'OEE Improvement', 'Production Optimization', 'Operational Excellence', 'Smart Manufacturing', 'KPI Dashboards', 'Cost Reduction', 'Predictive Maintenance'].map((tag, i) => (
              <span key={i} className="px-3 py-1 bg-[#00B8A9]/20 text-[#00B8A9] text-xs font-medium rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="achievements-grid section-padding py-20 lg:py-32 bg-[#FEFBF6]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="micro-label text-[#E86A33] mb-3">TRACK RECORD</p>
            <h2 className="font-display text-[clamp(32px,4vw,56px)] font-medium text-[#2B3A4E]">Key Achievements</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.slice(0, 4).map((ach, i) => (
              <div key={i} className="achievement-stat text-center">
                {ach.display ? (
                  <span className="font-display text-[clamp(24px,3vw,40px)] font-semibold text-[#00B8A9]">
                    {ach.display}
                  </span>
                ) : (
                  <StatCounter end={ach.value} prefix={ach.prefix} suffix={ach.suffix} label={ach.label} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="experience-section section-padding py-20 lg:py-32 bg-[#2B3A4E]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="micro-label text-[#00B8A9] mb-3">CAREER</p>
            <h2 className="font-display text-[clamp(32px,4vw,56px)] font-medium text-[#FEFBF6]">Professional Experience</h2>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-[#00B8A9]/30 hidden md:block" />

            <div className="space-y-12">
              {experiences.map((exp, i) => (
                <div
                  key={i}
                  className={`exp-item relative grid md:grid-cols-2 gap-8 items-center ${
                    i % 2 === 0 ? '' : 'md:[direction:rtl] md:*:[direction:ltr]'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 lg:left-1/2 top-6 w-4 h-4 rounded-full bg-[#00B8A9] border-4 border-[#2B3A4E] transform -translate-x-1/2 hidden md:block animate-pulse" />

                  <div className={`md:text-right ${i % 2 !== 0 ? 'md:order-2 md:text-left' : ''}`}>
                    <p className="text-[#00B8A9] font-medium text-lg mb-1">{exp.role}</p>
                    <p className="font-display text-2xl text-[#FEFBF6] mb-3">{exp.company}</p>
                  </div>
                  <div className={i % 2 !== 0 ? 'md:order-1 md:text-right' : ''}>
                    <p className="text-[#FEFBF6]/60 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Expertise */}
      <section className="skills-section section-padding py-20 lg:py-32 bg-[#FEFBF6]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="micro-label text-[#E86A33] mb-3">SKILLS</p>
            <h2 className="font-display text-[clamp(32px,4vw,56px)] font-medium text-[#2B3A4E]">Core Expertise</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, i) => (
              <span key={i} className="skill-pill px-6 py-3 bg-[#2B3A4E] text-[#FEFBF6] text-sm font-medium rounded-full hover:bg-[#00B8A9] transition-colors cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Profiles */}
      <section className="profiles-section section-padding py-20 lg:py-32 bg-[#2B3A4E]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="micro-label text-[#00B8A9] mb-3">CONNECT</p>
            <h2 className="font-display text-[clamp(32px,4vw,56px)] font-medium text-[#FEFBF6]">Professional Profiles</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {profiles.map((profile, i) => (
              <a
                key={i}
                href={profile.url}
                target={profile.url.startsWith('mailto') ? undefined : '_blank'}
                rel={profile.url.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="profile-card group flex flex-col items-center text-center p-8 rounded-2xl bg-[#FEFBF6]/5 hover:bg-[#FEFBF6]/10 transition-colors"
              >
                <profile.icon className="w-12 h-12 text-[#00B8A9] mb-4 group-hover:scale-110 transition-transform" />
                <span className="font-medium text-lg text-[#FEFBF6] mb-1">{profile.label}</span>
                <span className="text-sm text-[#FEFBF6]/60 flex items-center gap-1">
                  {profile.display}
                  <ExternalLink className="w-3 h-3" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="section-padding py-20 lg:py-32 bg-[#FEFBF6]">
        <div className="download-cta max-w-4xl mx-auto text-center">
          <h2 className="font-display text-[clamp(28px,4vw,48px)] font-medium text-[#2B3A4E] mb-4">
            Download Complete Professional Resume
          </h2>
          <p className="text-[#2B3A4E]/60 mb-10 max-w-2xl mx-auto">
            Explore detailed experience, technical expertise, certifications, projects, and industrial transformation achievements.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button onClick={handleDownload} className="pill-btn pill-btn-primary animate-float">
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </button>
            <Link to="/contact" className="pill-btn pill-btn-outline">Contact Me</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
