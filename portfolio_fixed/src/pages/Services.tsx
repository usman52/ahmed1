import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  CheckCircle, Award, Cpu, Factory, BarChart3, TrendingUp, Globe, Heart,
  Brain, Target, Gauge, Settings, TrendingDown
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const servicesList = [
  {
    icon: Brain,
    title: 'AI for Manufacturing',
    desc: 'Transform traditional manufacturing into intelligent production ecosystems using Artificial Intelligence and industrial analytics.',
    services: ['AI-Based Production Optimization', 'Predictive Maintenance Systems', 'Machine Learning Models for Manufacturing', 'AI Decision Support Systems', 'Smart Production Intelligence', 'Industrial Automation Analytics', 'AI-Powered Process Monitoring', 'Manufacturing Forecasting Systems'],
    impact: ['Reduced downtime', 'Improved operational visibility', 'Faster decision-making', 'Increased manufacturing efficiency', 'Better production planning'],
  },
  {
    icon: Target,
    title: 'Lean Six Sigma Transformation',
    desc: 'Driving operational excellence through Lean Manufacturing and Six Sigma methodologies.',
    services: ['Lean Manufacturing Implementation', 'Six Sigma Process Improvement', 'Kaizen Systems', 'Waste Reduction Strategies', 'Root Cause Analysis (RCA)', 'Continuous Improvement Frameworks', 'Value Stream Mapping (VSM)', 'Standard Operating Procedures (SOPs)', '5S Workplace Organization', 'DMAIC Project Execution'],
    impact: ['Reduced operational waste', 'Improved process efficiency', 'Lower production cost', 'Better workflow optimization', 'Increased productivity'],
  },
  {
    icon: Gauge,
    title: 'Production Optimization & OEE Improvement',
    desc: 'Improving production performance through intelligent manufacturing optimization systems.',
    services: ['OEE Improvement Systems', 'Production Line Balancing', 'Bottleneck Identification', 'Production Scheduling Optimization', 'Downtime Reduction Strategies', 'Heijunka Production Leveling', 'Capacity Utilization Analysis', 'Workflow Optimization', 'Production Flow Improvement'],
    impact: ['Increased throughput', 'Improved production efficiency', 'Reduced lead times', 'Better resource utilization', 'Higher operational performance'],
  },
  {
    icon: Cpu,
    title: 'Smart Factory & Industry 5.0 Solutions',
    desc: 'Helping organizations digitally transform manufacturing operations using smart technologies and connected systems.',
    services: ['Smart Factory Development', 'Industry 4.0 & Industry 5.0 Transformation', 'Real-Time Production Monitoring', 'Digital Manufacturing Systems', 'IoT Manufacturing Analytics', 'Intelligent KPI Systems', 'Connected Operations Frameworks', 'Human-Centered Smart Manufacturing'],
    impact: ['Real-time operational visibility', 'Faster operational response', 'Improved manufacturing intelligence', 'Enhanced production control', 'Sustainable operational growth'],
  },
  {
    icon: BarChart3,
    title: 'KPI Dashboards & Industrial Analytics',
    desc: 'Building real-time industrial intelligence systems for data-driven decision-making.',
    services: ['Power BI Manufacturing Dashboards', 'KPI Monitoring Systems', 'Real-Time OEE Dashboards', 'Production Intelligence Platforms', 'Data Visualization Systems', 'Operational Reporting Automation', 'Manufacturing Data Analytics', 'Performance Monitoring Systems'],
    impact: ['Better operational visibility', 'Faster management decisions', 'Improved KPI tracking', 'Real-time production insights', 'Data-driven operational control'],
  },
  {
    icon: Settings,
    title: 'Predictive Maintenance & Reliability Engineering',
    desc: 'Reducing machine failures and maintenance costs through intelligent predictive systems.',
    services: ['Predictive Maintenance Models', 'Equipment Reliability Analytics', 'Machine Failure Prediction', 'Preventive Maintenance Optimization', 'Maintenance KPI Systems', 'Breakdown Reduction Strategies', 'AI-Based Maintenance Analytics', 'Reliability Improvement Frameworks'],
    impact: ['Reduced machine downtime', 'Lower maintenance cost', 'Increased equipment reliability', 'Improved production continuity', 'Better maintenance planning'],
  },
  {
    icon: TrendingDown,
    title: 'Cost Reduction & Operational Efficiency',
    desc: 'Helping industries reduce manufacturing cost while improving operational performance.',
    services: ['Operational Cost Analysis', 'Manufacturing Cost Optimization', 'Resource Utilization Improvement', 'Energy Efficiency Optimization', 'Labor Productivity Improvement', 'Operational Waste Elimination', 'Smart Costing Systems', 'Financial Visibility Dashboards'],
    impact: ['Reduced operational expenses', 'Improved profitability', 'Better cost visibility', 'Increased resource efficiency', 'Sustainable operational performance'],
  },
];

const whyWork = [
  { icon: CheckCircle, text: 'Strong Industrial Engineering Background' },
  { icon: Award, text: 'Lean Six Sigma Master Black Belt' },
  { icon: Cpu, text: 'AI & Manufacturing Integration Expertise' },
  { icon: Factory, text: 'Real Manufacturing Industry Experience' },
  { icon: BarChart3, text: 'Data-Driven Decision Making Approach' },
  { icon: TrendingUp, text: 'Focus on Measurable Operational Results' },
  { icon: Globe, text: 'Industry 5.0 & Smart Manufacturing Vision' },
  { icon: Heart, text: 'Human-Centered Transformation Philosophy' },
];

const industryTags = [
  'Tyre Manufacturing', 'Packaging & Corrugated', 'Textile & Garments', 'Paper Manufacturing',
  'Industrial Operations', 'Smart Manufacturing', 'Sustainability & Decarbonization', 'Process Industries',
];

export default function Services() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Refresh after layout settles
    requestAnimationFrame(() => { setTimeout(() => ScrollTrigger.refresh(), 200); });
    const ctx = gsap.context(() => {
      gsap.from('.services-hero > *', {
        y: 60, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', delay: 0.2,
      });

      gsap.from('.service-detail', {
        y: 80, opacity: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: '.services-list', start: 'top 80%', once: true },
      });

      gsap.from('.why-card', {
        y: 60, opacity: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: '.why-section', start: 'top 75%', once: true },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      {/* Hero */}
      <section className="min-h-[50vh] flex items-center justify-center bg-[#FEFBF6] pt-20">
        <div className="services-hero section-padding max-w-4xl mx-auto text-center py-16 lg:py-24">
          <p className="micro-label text-[#E86A33] mb-4">SERVICES</p>
          <h1 className="font-display text-[clamp(40px,7vw,96px)] font-medium text-[#2B3A4E] leading-[0.95] mb-6">
            Manufacturing Consulting Services
          </h1>
          <p className="text-xl text-[#00B8A9] font-medium mb-4">AI-Powered Manufacturing Transformation</p>
          <p className="text-[#2B3A4E]/60 leading-relaxed max-w-2xl mx-auto">
            Helping industries build intelligent, efficient, and future-ready manufacturing systems through Artificial Intelligence, Lean Manufacturing, Industrial Engineering, and Operational Excellence.
          </p>
        </div>
      </section>

      {/* Service Detail Cards */}
      <section className="services-list section-padding py-20 lg:py-32 bg-[#FEFBF6]">
        <div className="max-w-7xl mx-auto space-y-16">
          {servicesList.map((service, i) => (
            <div
              key={i}
              className={`service-detail grid lg:grid-cols-2 gap-8 lg:gap-16 items-start p-8 lg:p-12 rounded-2xl ${
                i % 2 === 0 ? 'bg-white' : 'bg-[#2B3A4E]'
              }`}
            >
              <div className={i % 2 === 0 ? '' : 'lg:order-2'}>
                <div className="flex items-center gap-4 mb-4">
                  <service.icon className={`w-10 h-10 ${i % 2 === 0 ? 'text-[#00B8A9]' : 'text-[#00B8A9]'}`} />
                  <span className={`micro-label ${i % 2 === 0 ? 'text-[#E86A33]' : 'text-[#E86A33]'}`}>0{i + 1}</span>
                </div>
                <h3 className={`font-display text-[clamp(24px,3vw,36px)] font-medium mb-4 ${
                  i % 2 === 0 ? 'text-[#2B3A4E]' : 'text-[#FEFBF6]'
                }`}>
                  {service.title}
                </h3>
                <p className={`leading-relaxed mb-6 ${i % 2 === 0 ? 'text-[#2B3A4E]/70' : 'text-[#FEFBF6]/70'}`}>
                  {service.desc}
                </p>
              </div>
              <div className={i % 2 === 0 ? '' : 'lg:order-1'}>
                <div className="mb-6">
                  <p className={`micro-label mb-3 ${i % 2 === 0 ? 'text-[#2B3A4E]/50' : 'text-[#FEFBF6]/50'}`}>SERVICES INCLUDE</p>
                  <ul className="space-y-2">
                    {service.services.map((s, j) => (
                      <li key={j} className={`flex items-start gap-2 text-sm ${
                        i % 2 === 0 ? 'text-[#2B3A4E]/80' : 'text-[#FEFBF6]/80'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${
                          i % 2 === 0 ? 'bg-[#00B8A9]' : 'bg-[#00B8A9]'
                        }`} />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className={`micro-label mb-3 ${i % 2 === 0 ? 'text-[#2B3A4E]/50' : 'text-[#FEFBF6]/50'}`}>BUSINESS IMPACT</p>
                  <div className="flex flex-wrap gap-2">
                    {service.impact.map((imp, j) => (
                      <span key={j} className={`px-3 py-1 rounded-full text-xs font-medium ${
                        i % 2 === 0
                          ? 'bg-[#00B8A9]/10 text-[#00B8A9]'
                          : 'bg-[#00B8A9]/20 text-[#00B8A9]'
                      }`}>
                        {imp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Industries Marquee */}
      <section className="py-12 bg-[#2B3A4E] overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...industryTags, ...industryTags].map((tag, i) => (
            <span key={i} className="mx-4 px-6 py-2 border border-[#00B8A9] rounded-full text-[#FEFBF6] text-sm font-medium">
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="why-section section-padding py-20 lg:py-32 bg-[#FEFBF6]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="micro-label text-[#E86A33] mb-3">DIFFERENTIATORS</p>
            <h2 className="font-display text-[clamp(32px,4vw,56px)] font-medium text-[#2B3A4E]">Why Work With Me?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyWork.map((item, i) => (
              <div key={i} className="why-card flex items-start gap-4 p-6 rounded-xl bg-white border border-[#2B3A4E]/10">
                <item.icon className="w-10 h-10 text-[#00B8A9] flex-shrink-0" />
                <span className="font-medium text-[#2B3A4E]">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00B8A9] to-[#2B3A4E]" />
        <div className="relative section-padding py-20 lg:py-28 text-center">
          <h2 className="font-display text-[clamp(28px,4vw,48px)] font-medium text-[#FEFBF6] mb-4">
            Let's Transform Your Operations
          </h2>
          <p className="text-lg text-[#FEFBF6]/80 mb-10 max-w-2xl mx-auto">
            I help industries create intelligent manufacturing systems built for long-term operational excellence and sustainable growth.
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
