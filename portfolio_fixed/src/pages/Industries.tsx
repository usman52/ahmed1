import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CircleDot, Package, Shirt, FileText, Cpu, Leaf, CheckCircle, Award, BarChart3, TrendingUp, Globe, Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const industriesData = [
  {
    icon: CircleDot,
    title: 'Tyre Manufacturing',
    subtitle: 'Smart Manufacturing & Operational Excellence for Tyre Production',
    image: '/images/tire-manufacturing.jpg',
    focus: ['Tire curing process optimization', 'Production flow balancing', 'Predictive maintenance systems', 'Real-time production visibility', 'Waste reduction initiatives', 'Manufacturing analytics dashboards'],
    goals: ['Improve productivity', 'Reduce operational losses', 'Increase machine reliability', 'Optimize manpower utilization', 'Enhance operational control'],
  },
  {
    icon: Package,
    title: 'Packaging & Corrugated Industry',
    subtitle: 'Intelligent Solutions for Packaging Manufacturing Operations',
    image: '/images/packaging-manufacturing.jpg',
    focus: ['Corrugation process optimization', 'Production scheduling improvement', 'Waste reduction systems', 'Plant performance monitoring', 'OEE optimization', 'Cost analysis systems', 'Workflow balancing', 'Real-time KPI dashboards'],
    goals: ['Reduced paper waste', 'Improved production efficiency', 'Better machine utilization', 'Enhanced operational visibility', 'Lower manufacturing cost'],
  },
  {
    icon: Shirt,
    title: 'Textile & Garments Industry',
    subtitle: 'Lean Manufacturing & Production Optimization for Textile Operations',
    image: '/images/textile-manufacturing.jpg',
    focus: ['Lean transformation', 'Production balancing', 'Process standardization', 'Industrial engineering solutions', 'Time & motion studies', 'Productivity improvement', 'Workflow optimization', 'Manufacturing KPI systems'],
    goals: ['Reduced operational waste', 'Improved labor productivity', 'Better production planning', 'Enhanced process efficiency', 'Increased throughput'],
  },
  {
    icon: FileText,
    title: 'Paper Manufacturing Industry',
    subtitle: 'Process Optimization & Smart Manufacturing for Paper Mills',
    image: '/images/paper-manufacturing.jpg',
    focus: ['Process efficiency optimization', 'Energy utilization monitoring', 'Production analytics', 'Maintenance optimization', 'Cost reduction systems', 'Operational KPI tracking', 'Lean Manufacturing implementation'],
    goals: ['Improved production stability', 'Better operational control', 'Enhanced resource utilization', 'Reduced downtime', 'Improved cost visibility'],
  },
  {
    icon: Cpu,
    title: 'Smart Manufacturing & Industry 5.0',
    subtitle: 'Building Intelligent & Future-Ready Manufacturing Systems',
    image: '/images/industry-five.jpg',
    focus: ['AI for Manufacturing', 'Smart Factory Systems', 'Industrial Analytics', 'Real-Time Monitoring', 'Digital Manufacturing Transformation', 'KPI Automation', 'Connected Operations', 'Human-Centered Smart Systems'],
    goals: ['Real-time decision-making', 'Improved operational intelligence', 'Faster problem resolution', 'Better production visibility', 'Future-ready manufacturing systems'],
  },
  {
    icon: Leaf,
    title: 'Sustainability & Decarbonization',
    subtitle: 'Sustainable Manufacturing & Operational Efficiency',
    image: '/images/sustainability.jpg',
    focus: ['Energy optimization', 'Resource efficiency', 'Waste reduction', 'Sustainable operations', 'Manufacturing efficiency improvement', 'Environmental performance analytics', 'Decarbonization support systems'],
    goals: ['Reduced energy consumption', 'Improved sustainability performance', 'Lower operational waste', 'Better environmental efficiency', 'Sustainable manufacturing growth'],
  },
];

const commonChallenges = [
  'High manufacturing cost', 'Low operational visibility', 'Downtime losses', 'Poor production planning',
  'Inefficient workflows', 'Lack of real-time KPIs', 'Unbalanced operations', 'Operational waste',
  'Low OEE performance', 'Slow decision-making',
];

const whyWork = [
  { icon: CheckCircle, text: 'Strong Manufacturing Industry Experience' },
  { icon: Award, text: 'Lean Six Sigma Master Black Belt' },
  { icon: Cpu, text: 'AI & Smart Manufacturing Expertise' },
  { icon: BarChart3, text: 'Data-Driven Operational Approach' },
  { icon: TrendingUp, text: 'Focus on Measurable Industrial Results' },
  { icon: Globe, text: 'Industry 4.0 & Industry 5.0 Vision' },
  { icon: Heart, text: 'Real Operational Transformation Experience' },
  { icon: Award, text: 'Human-Centered Manufacturing Philosophy' },
];

export default function Industries() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Refresh after layout settles
    requestAnimationFrame(() => { setTimeout(() => ScrollTrigger.refresh(), 200); });
    const ctx = gsap.context(() => {
      gsap.from('.ind-hero > *', {
        y: 60, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', delay: 0.2,
      });

      gsap.from('.industry-card', {
        x: (i) => (i % 2 === 0 ? -60 : 60), opacity: 0, duration: 0.7, stagger: 0.2, ease: 'power3.out',
        scrollTrigger: { trigger: '.industries-list', start: 'top 80%', once: true },
      });

      gsap.from('.challenge-item', {
        y: 20, opacity: 0, duration: 0.4, stagger: 0.06, ease: 'power3.out',
        scrollTrigger: { trigger: '.challenges-section', start: 'top 75%', once: true },
      });

      gsap.from('.why-item', {
        y: 50, opacity: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.why-section', start: 'top 75%', once: true },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      {/* Hero */}
      <section className="min-h-[50vh] flex items-center bg-[#FEFBF6] pt-20">
        <div className="ind-hero section-padding max-w-7xl mx-auto py-16 lg:py-24">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <p className="micro-label text-[#E86A33] mb-4">SECTORS</p>
              <h1 className="font-display text-[clamp(40px,7vw,96px)] font-medium text-[#2B3A4E] leading-[0.95] mb-6">
                Industries Served
              </h1>
              <p className="text-xl text-[#E86A33] font-medium mb-4">
                Industry-Focused Manufacturing Transformation Solutions
              </p>
              <p className="text-[#2B3A4E]/60 leading-relaxed max-w-xl">
                Helping organizations across multiple industries improve operational efficiency, reduce manufacturing cost, optimize production systems, and digitally transform operations through Artificial Intelligence, Lean Manufacturing, and Smart Factory solutions.
              </p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-2 gap-3">
              {industriesData.slice(0, 4).map((ind, i) => (
                <div key={i} className={`aspect-square rounded-xl overflow-hidden ${i % 3 === 0 ? 'col-span-2' : ''}`}>
                  <img src={ind.image} alt={ind.title} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Detail Cards */}
      <section className="industries-list section-padding py-20 lg:py-32 bg-[#FEFBF6]">
        <div className="max-w-7xl mx-auto space-y-16">
          {industriesData.map((ind, i) => (
            <div
              key={i}
              className="industry-card grid lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white rounded-2xl overflow-hidden border border-[#2B3A4E]/10"
            >
              <div className={`relative h-72 lg:h-full ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <img src={ind.image} alt={ind.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <ind.icon className="w-12 h-12 text-[#00B8A9] mb-2" />
                </div>
              </div>
              <div className={`p-8 lg:p-12 ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <h2 className="font-display text-[clamp(24px,3vw,36px)] font-medium text-[#2B3A4E] mb-2">
                  {ind.title}
                </h2>
                <p className="text-[#00B8A9] font-medium mb-6">{ind.subtitle}</p>

                <div className="mb-6">
                  <p className="micro-label text-[#2B3A4E]/50 mb-3">KEY FOCUS AREAS</p>
                  <ul className="space-y-2">
                    {ind.focus.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-[#2B3A4E]/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00B8A9] mt-1.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="micro-label text-[#2B3A4E]/50 mb-3">OPERATIONAL BENEFITS</p>
                  <div className="flex flex-wrap gap-2">
                    {ind.goals.map((g, j) => (
                      <span key={j} className="px-3 py-1 bg-[#00B8A9]/10 text-[#00B8A9] text-xs font-medium rounded-full">
                        {g}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Common Challenges */}
      <section className="challenges-section section-padding py-20 lg:py-32 bg-[#2B3A4E]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="micro-label text-[#00B8A9] mb-3">UNIVERSAL CHALLENGES</p>
            <h2 className="font-display text-[clamp(28px,4vw,48px)] font-medium text-[#FEFBF6] mb-4">
              Common Business Challenges Solved
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            {commonChallenges.map((ch, i) => (
              <div key={i} className="challenge-item flex items-center gap-2 p-3 rounded-lg bg-[#FEFBF6]/5">
                <span className="w-2 h-2 rounded-full bg-[#E86A33] flex-shrink-0" />
                <span className="text-sm text-[#FEFBF6]/80">{ch}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-[#00B8A9] font-medium max-w-3xl mx-auto">
            My role is to transform these challenges into measurable operational improvements using Artificial Intelligence, Lean Six Sigma, Industrial Engineering, Smart Analytics, and Operational Excellence Frameworks.
          </p>
        </div>
      </section>

      {/* Why Industries Work With Me */}
      <section className="why-section section-padding py-20 lg:py-32 bg-[#FEFBF6]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="micro-label text-[#E86A33] mb-3">TRUST</p>
            <h2 className="font-display text-[clamp(32px,4vw,56px)] font-medium text-[#2B3A4E]">Why Industries Work With Me</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyWork.map((item, i) => (
              <div key={i} className="why-item flex items-start gap-4 p-6 rounded-xl bg-white border border-[#2B3A4E]/10">
                <item.icon className="w-10 h-10 text-[#00B8A9] flex-shrink-0" />
                <span className="font-medium text-[#2B3A4E] text-sm">{item.text}</span>
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
            Let's Transform Your Industry
          </h2>
          <p className="text-lg text-[#FEFBF6]/80 mb-10 max-w-2xl mx-auto">
            I help industries build intelligent manufacturing systems designed for operational excellence, sustainable growth, and future-ready performance.
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
