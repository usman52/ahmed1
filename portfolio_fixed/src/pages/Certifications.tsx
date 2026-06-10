import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Shield, TrendingUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const certifications = [
  {
    icon: Shield,
    title: 'Lean Six Sigma Master Black Belt',
    expertise: ['Lean Manufacturing', 'Six Sigma Methodologies', 'DMAIC Framework', 'Waste Reduction', 'Continuous Improvement', 'Root Cause Analysis', 'Process Optimization', 'Operational Excellence'],
    description: 'Focused on improving manufacturing performance, reducing operational waste, increasing efficiency, and building sustainable process improvement systems.',
  },
  {
    icon: Award,
    title: 'AI Engineering — IBM',
    expertise: ['Artificial Intelligence', 'Machine Learning', 'Predictive Analytics', 'AI Model Development', 'Industrial AI Applications', 'Intelligent Decision Systems'],
    description: 'Applied in manufacturing analytics, predictive maintenance, and smart factory transformation projects.',
  },
  {
    icon: Award,
    title: 'Data Science — IBM',
    expertise: ['Data Science', 'Industrial Data Analytics', 'Data Visualization', 'Machine Learning', 'Statistical Analysis', 'Predictive Modeling'],
    description: 'Focused on transforming manufacturing and operational data into actionable business intelligence.',
  },
  {
    icon: Award,
    title: 'Data Analytics — Google',
    expertise: ['Business Intelligence', 'Data Visualization', 'KPI Reporting', 'Dashboard Development', 'Data-Driven Decision Making', 'Analytical Problem Solving'],
    description: 'Applied in operational reporting systems, production intelligence platforms, and manufacturing KPI dashboards.',
  },
];

const techExpertise = [
  {
    category: 'AI & Manufacturing Analytics',
    skills: ['Machine Learning', 'Predictive Analytics', 'Industrial AI Systems', 'Predictive Maintenance', 'Manufacturing Intelligence'],
  },
  {
    category: 'Lean & Operational Excellence',
    skills: ['Lean Six Sigma', 'Kaizen', 'Value Stream Mapping', 'Process Optimization', 'Continuous Improvement'],
  },
  {
    category: 'Industrial Engineering',
    skills: ['Production Optimization', 'OEE Improvement', 'Production Planning', 'Workflow Optimization', 'Manufacturing Systems'],
  },
  {
    category: 'Data Analytics & Visualization',
    skills: ['Power BI', 'Python', 'SQL', 'KPI Dashboards', 'Real-Time Reporting Systems'],
  },
];

const awards = [
  'Gold Medalist in Master of Industrial Engineering & Management',
  'Merit-Based Academic Recognition',
  'Professional Excellence in Manufacturing Transformation',
  'Operational Excellence Leadership',
  'Industrial Process Optimization Achievements',
  'Smart Manufacturing & AI Integration Contributions',
];

export default function Certifications() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Refresh after layout settles
    requestAnimationFrame(() => { setTimeout(() => ScrollTrigger.refresh(), 200); });
    const ctx = gsap.context(() => {
      gsap.from('.cert-hero > *', {
        y: 60, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', delay: 0.2,
      });

      gsap.from('.academic-card', {
        y: 60, opacity: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.academic-section', start: 'top 75%', once: true },
      });

      gsap.from('.cert-card', {
        y: 80, opacity: 0, duration: 0.6, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: '.certs-grid', start: 'top 75%', once: true },
      });

      gsap.from('.tech-col', {
        y: 60, opacity: 0, duration: 0.6, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: '.tech-section', start: 'top 75%', once: true },
      });

      gsap.from('.award-item', {
        x: -40, opacity: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.awards-section', start: 'top 75%', once: true },
      });

      gsap.from('.philosophy-content > *', {
        y: 40, opacity: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: '.philosophy-section', start: 'top 70%', once: true },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      {/* Hero */}
      <section className="min-h-[50vh] flex items-center justify-center bg-[#2B3A4E] pt-20">
        <div className="cert-hero section-padding max-w-4xl mx-auto text-center py-16 lg:py-24">
          <p className="micro-label text-[#00B8A9] mb-4">CREDENTIALS</p>
          <h1 className="font-display text-[clamp(40px,7vw,96px)] font-medium text-[#FEFBF6] leading-[0.95] mb-6">
            Certifications & Achievements
          </h1>
          <p className="text-xl text-[#00B8A9] font-medium mb-4">
            Continuous Learning. Industrial Excellence. Operational Impact.
          </p>
          <p className="text-[#FEFBF6]/60 leading-relaxed max-w-2xl mx-auto">
            My professional journey is built on a foundation of Industrial Engineering, Artificial Intelligence, Operational Excellence, Lean Manufacturing, and continuous professional development.
          </p>
        </div>
      </section>

      {/* Academic Excellence */}
      <section className="academic-section section-padding py-20 lg:py-32 bg-[#FEFBF6]">
        <div className="max-w-4xl mx-auto">
          <div className="academic-card relative bg-white rounded-2xl overflow-hidden border border-[#2B3A4E]/10 shadow-lg">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#00B8A9] via-[#E86A33] to-[#00B8A9]" />
            <div className="p-8 lg:p-12">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8 text-[#E86A33]" />
                <span className="micro-label text-[#E86A33]">ACADEMIC EXCELLENCE</span>
              </div>
              <h2 className="font-display text-[clamp(24px,3vw,40px)] font-medium text-[#2B3A4E] mb-4">
                Gold Medalist — Master of Industrial Engineering & Management
              </h2>
              <p className="text-[#2B3A4E]/70 leading-relaxed mb-6">
                Awarded for achieving outstanding academic performance and excellence in Industrial Engineering, operational systems, process optimization, and manufacturing management.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Industrial Engineering', 'Manufacturing Systems', 'Operational Excellence', 'Production Optimization', 'Data-Driven Decision Making', 'Smart Manufacturing'].map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-[#00B8A9]/10 text-[#00B8A9] text-xs font-medium rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Certifications */}
      <section className="certs-grid section-padding py-20 lg:py-32 bg-[#FEFBF6]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="micro-label text-[#E86A33] mb-3">CERTIFICATIONS</p>
            <h2 className="font-display text-[clamp(32px,4vw,56px)] font-medium text-[#2B3A4E]">Professional Certifications</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, i) => (
              <div key={i} className="cert-card bg-white rounded-2xl border border-[#2B3A4E]/10 p-8 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-[#00B8A9]/10 flex items-center justify-center group-hover:bg-[#00B8A9] transition-colors">
                    <cert.icon className="w-7 h-7 text-[#00B8A9] group-hover:text-[#FEFBF6] transition-colors" />
                  </div>
                  <span className="px-3 py-1 bg-[#00B8A9] text-[#FEFBF6] text-xs font-medium rounded-full">
                    {cert.title.includes('IBM') ? 'IBM' : cert.title.includes('Google') ? 'Google' : 'Certified'}
                  </span>
                </div>
                <h3 className="font-display text-xl font-medium text-[#2B3A4E] mb-2">{cert.title}</h3>
                <p className="text-sm text-[#2B3A4E]/60 mb-4">{cert.description}</p>
                <div>
                  <p className="micro-label text-[#2B3A4E]/40 mb-2">EXPERTISE</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.expertise.map((e, j) => (
                      <span key={j} className="px-2 py-0.5 bg-[#2B3A4E]/5 text-[#2B3A4E]/70 text-xs rounded">
                        {e}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Expertise */}
      <section className="tech-section section-padding py-20 lg:py-32 bg-[#2B3A4E]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="micro-label text-[#00B8A9] mb-3">SKILLS</p>
            <h2 className="font-display text-[clamp(32px,4vw,56px)] font-medium text-[#FEFBF6]">Technical Expertise</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techExpertise.map((tech, i) => (
              <div key={i} className="tech-col">
                <h3 className="font-medium text-lg text-[#00B8A9] mb-4">{tech.category}</h3>
                <ul className="space-y-2">
                  {tech.skills.map((skill, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-[#FEFBF6]/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00B8A9]" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="awards-section section-padding py-20 lg:py-32 bg-[#FEFBF6]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="micro-label text-[#E86A33] mb-3">RECOGNITION</p>
            <h2 className="font-display text-[clamp(32px,4vw,56px)] font-medium text-[#2B3A4E]">Awards & Recognition</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, i) => (
              <div key={i} className="award-item flex items-center gap-4 p-6 rounded-xl bg-white border border-[#2B3A4E]/10">
                <TrendingUp className="w-8 h-8 text-[#00B8A9] flex-shrink-0" />
                <span className="font-medium text-[#2B3A4E] text-sm">{award}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="philosophy-section section-padding py-20 lg:py-32 bg-[#2B3A4E]">
        <div className="philosophy-content max-w-4xl mx-auto text-center">
          <p className="micro-label text-[#E86A33] mb-4">PROFESSIONAL PHILOSOPHY</p>
          <h2 className="font-display text-[clamp(28px,4vw,48px)] font-medium text-[#FEFBF6] leading-tight mb-8">
            Learning + Execution = Industrial Transformation
          </h2>
          <p className="text-lg text-[#FEFBF6]/70 leading-relaxed mb-8">
            I believe continuous learning is essential for building future-ready manufacturing systems. My focus is not only on gaining certifications — but applying knowledge in real industrial environments to create measurable operational impact, sustainable manufacturing systems, intelligent production environments, data-driven operational excellence, and human-centered industrial transformation.
          </p>
          <p className="text-[#00B8A9] font-medium">
            Every skill, methodology, and technology I study is focused on one objective: Helping industries become smarter, leaner, more efficient, and prepared for the future of Industry 5.0.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding py-20 bg-[#FEFBF6]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-[clamp(28px,4vw,48px)] font-medium text-[#2B3A4E] mb-8">
            Let's Build the Future of Manufacturing
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
