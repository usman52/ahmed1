import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const caseStudies = [
  {
    number: '01',
    title: 'AI-Powered Production Optimization System',
    industry: 'Packaging & Corrugated Manufacturing',
    image: '/images/packaging-manufacturing.jpg',
    challenge: [
      'High changeover time',
      'Production planning inefficiencies',
      'Unbalanced workflows',
      'Downtime losses',
      'Reduced operational visibility',
    ],
    solution: [
      'Python automation',
      'Intelligent production scheduling',
      'Real-time KPI analysis',
      'Production sequencing optimization',
      'Workflow balancing logic',
    ],
    results: [
      '18% OEE Improvement',
      '30% Reduction in Planning Delays',
      '4.1% Daily Reduction in Changeover Time',
      'Improved production flow and operational visibility',
    ],
    tech: ['Python', 'Power BI', 'Production Analytics', 'Lean Manufacturing', 'AI Scheduling'],
  },
  {
    number: '02',
    title: 'Lean Manufacturing & Lead Time Reduction',
    industry: 'Manufacturing Operations',
    image: '/images/textile-manufacturing.jpg',
    challenge: [
      'Long lead times',
      'Inventory imbalance',
      'Production bottlenecks',
      'Delayed deliveries',
      'Workflow inefficiencies',
    ],
    solution: [
      'Heijunka Scheduling',
      'Lean Flow Systems',
      'Value Stream Mapping (VSM)',
      'Production Balancing',
      'Workflow Optimization',
    ],
    results: [
      'Lead Time Reduced from 15 Days to 2 Days',
      'Improved production stability',
      'Better inventory control',
      'Enhanced on-time delivery performance',
    ],
    tech: ['Lean Manufacturing', 'Heijunka', 'Kaizen', 'VSM', 'Continuous Improvement'],
  },
  {
    number: '03',
    title: 'Smart KPI Dashboard & Production Intelligence System',
    industry: 'Industrial Manufacturing',
    image: '/images/smart-factory.jpg',
    challenge: [
      'Management lacked real-time operational visibility',
      'No live KPI tracking',
      'Inaccurate production intelligence',
      'Slow decision-making capability',
    ],
    solution: [
      'Power BI dashboards',
      'Real-time KPI systems',
      'OEE monitoring dashboards',
      'Live production intelligence systems',
      'Automated reporting frameworks',
    ],
    results: [
      'Improved operational transparency',
      'Faster management decisions',
      'Real-time production visibility',
      'Better performance accountability',
    ],
    tech: ['Power BI', 'SQL', 'Python', 'KPI Systems', 'Data Analytics'],
  },
  {
    number: '04',
    title: 'Predictive Maintenance & Downtime Reduction',
    industry: 'Manufacturing & Production Systems',
    image: '/images/hero-manufacturing.jpg',
    challenge: [
      'Unexpected equipment breakdowns',
      'High maintenance costs',
      'Production interruptions',
      'Unplanned downtime',
    ],
    solution: [
      'Machine learning models',
      'Failure prediction analytics',
      'Maintenance intelligence dashboards',
      'Real-time equipment monitoring',
    ],
    results: [
      '25% Reduction in Equipment Breakdowns',
      'Improved maintenance planning',
      'Increased machine reliability',
      'Reduced downtime losses',
    ],
    tech: ['Machine Learning', 'Predictive Analytics', 'Python', 'Power BI', 'Reliability Engineering'],
  },
  {
    number: '05',
    title: 'Operational Cost Reduction & Financial Visibility',
    industry: 'Manufacturing Operations',
    image: '/images/data-analytics-viz.jpg',
    challenge: [
      'No real-time operational costing',
      'No financial visibility',
      'No cost control systems',
      'No performance-based cost intelligence',
    ],
    solution: [
      'Real-time operational costing system',
      'Cost visibility dashboards',
      'Machine-wise cost tracking',
      'Production cost intelligence framework',
    ],
    results: [
      'PKR 100M+ Operational Impact',
      'Improved financial visibility',
      'Better operational decision-making',
      'Enhanced cost optimization capability',
    ],
    tech: ['Power BI', 'Excel Automation', 'Industrial Costing', 'Manufacturing Analytics'],
  },
  {
    number: '06',
    title: 'Lean Transformation & Workplace Optimization',
    industry: 'Production & Manufacturing',
    image: '/images/paper-manufacturing.jpg',
    challenge: [
      'Process inconsistency',
      'Poor workplace organization',
      'Workflow inefficiencies',
      'High operational waste',
    ],
    solution: [
      '5S workplace systems',
      'Lean process optimization',
      'Standard operating procedures',
      'Continuous improvement systems',
      'Team-based Kaizen culture',
    ],
    results: [
      'Improved workplace organization',
      'Better process standardization',
      'Increased operational discipline',
      'Enhanced productivity and efficiency',
    ],
    tech: ['5S', 'Lean Manufacturing', 'SOP Development', 'Kaizen', 'Continuous Improvement'],
  },
];

const expertiseTags = [
  'AI for Manufacturing', 'Lean Six Sigma', 'Smart Factory', 'Production Optimization',
  'OEE Improvement', 'KPI Dashboards', 'Predictive Maintenance', 'Industrial Analytics',
  'Cost Reduction', 'Industry 4.0 & 5.0',
];

export default function CaseStudies() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Refresh after layout settles
    requestAnimationFrame(() => { setTimeout(() => ScrollTrigger.refresh(), 200); });
    const ctx = gsap.context(() => {
      gsap.from('.cs-hero > *', {
        y: 60, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', delay: 0.2,
      });

      gsap.from('.cs-card', {
        y: 80, opacity: 0, duration: 0.7, stagger: 0.2, ease: 'power3.out',
        scrollTrigger: { trigger: '.cs-grid', start: 'top 80%', once: true },
      });

      gsap.from('.expertise-tag', {
        y: 30, opacity: 0, duration: 0.4, stagger: 0.05, ease: 'power3.out',
        scrollTrigger: { trigger: '.expertise-section', start: 'top 80%', once: true },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      {/* Hero */}
      <section className="min-h-[50vh] flex items-center justify-center bg-[#2B3A4E] pt-20">
        <div className="cs-hero section-padding max-w-4xl mx-auto text-center py-16 lg:py-24">
          <p className="micro-label text-[#00B8A9] mb-4">PORTFOLIO</p>
          <h1 className="font-display text-[clamp(40px,7vw,96px)] font-medium text-[#FEFBF6] leading-[0.95] mb-6">
            Manufacturing Transformation Case Studies
          </h1>
          <p className="text-xl text-[#00B8A9] font-medium mb-4">Real Industrial Problems. Measurable Business Results.</p>
          <p className="text-[#FEFBF6]/60 leading-relaxed max-w-2xl mx-auto">
            A selection of manufacturing transformation projects focused on operational excellence, AI-driven optimization, Lean Manufacturing, production intelligence, and smart factory systems.
          </p>
        </div>
      </section>

      {/* Case Study Cards */}
      <section className="cs-grid section-padding py-20 lg:py-32 bg-[#FEFBF6]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
          {caseStudies.map((cs, i) => (
            <div key={i} className="cs-card group bg-white rounded-2xl overflow-hidden border border-[#2B3A4E]/10 hover:shadow-xl transition-all duration-500">
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={cs.image}
                  alt={cs.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <span className="micro-label text-[#E86A33] mb-1 block">CASE STUDY {cs.number}</span>
                    <h3 className="font-display text-xl font-medium text-[#FEFBF6]">{cs.title}</h3>
                  </div>
                </div>
                <span className="absolute top-4 right-4 px-3 py-1 bg-[#00B8A9] text-[#FEFBF6] text-xs font-medium rounded-full">
                  {cs.industry}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="micro-label text-[#2B3A4E]/50 mb-3">CHALLENGE</p>
                    <ul className="space-y-1.5">
                      {cs.challenge.map((c, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-[#2B3A4E]/70">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E86A33] mt-1.5 flex-shrink-0" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="micro-label text-[#2B3A4E]/50 mb-3">SOLUTION</p>
                    <ul className="space-y-1.5">
                      {cs.solution.map((s, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-[#2B3A4E]/70">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00B8A9] mt-1.5 flex-shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Results */}
                <div className="bg-[#00B8A9]/5 rounded-xl p-4 mb-4">
                  <p className="micro-label text-[#00B8A9] mb-2">RESULTS</p>
                  <div className="flex flex-wrap gap-2">
                    {cs.results.map((r, j) => (
                      <span key={j} className="text-sm font-medium text-[#2B3A4E]">{r}</span>
                    ))}
                  </div>
                </div>

                {/* Tech */}
                <div className="flex flex-wrap gap-2">
                  {cs.tech.map((t, j) => (
                    <span key={j} className="px-3 py-1 bg-[#2B3A4E]/5 rounded-full text-xs font-mono text-[#2B3A4E]/70">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Expertise Tags */}
      <section className="expertise-section section-padding py-16 bg-[#2B3A4E]">
        <div className="max-w-7xl mx-auto">
          <p className="micro-label text-[#00B8A9] mb-6 text-center">CORE AREAS OF EXPERTISE DEMONSTRATED</p>
          <div className="flex flex-wrap justify-center gap-3">
            {expertiseTags.map((tag, i) => (
              <span key={i} className="expertise-tag px-4 py-2 border border-[#00B8A9]/30 rounded-full text-[#FEFBF6] text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why These Projects Matter */}
      <section className="section-padding py-20 lg:py-32 bg-[#FEFBF6]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="micro-label text-[#E86A33] mb-4">IMPACT</p>
          <h2 className="font-display text-[clamp(28px,4vw,48px)] font-medium text-[#2B3A4E] mb-6">
            Why These Projects Matter
          </h2>
          <p className="text-lg text-[#2B3A4E]/70 leading-relaxed mb-8">
            Every project focuses on one objective: Creating measurable industrial impact through intelligent systems, operational excellence, and sustainable manufacturing transformation.
          </p>
          <p className="text-[#2B3A4E]/60 mb-10">
            The goal is not just improvement — but building manufacturing environments that are: Data-driven, Scalable, Efficient, Intelligent, Human-centered, Future-ready.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className="pill-btn pill-btn-primary">Schedule Consultation</Link>
            <Link to="/contact" className="pill-btn pill-btn-outline">Contact Me</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
