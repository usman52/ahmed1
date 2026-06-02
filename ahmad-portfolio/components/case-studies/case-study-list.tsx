'use client'

import { motion } from 'framer-motion'
import { Cpu, Cog, BarChart3, Wrench, DollarSign, Users, ArrowRight, CheckCircle } from 'lucide-react'
import ScrollReveal from '@/components/scroll-reveal'

const caseStudies = [
  {
    number: '01',
    icon: <Cpu className="w-6 h-6" />,
    tag: 'AI-Powered Production Optimization',
    title: 'AI-Powered Production Optimization System',
    industry: 'Packaging & Corrugated Manufacturing',
    color: 'bg-[#3182ce]/10 text-[#3182ce]',
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
    technologies: 'Python • Power BI • Production Analytics • Lean Manufacturing • AI Scheduling',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
  },
  {
    number: '02',
    icon: <Cog className="w-6 h-6" />,
    tag: 'Lean Manufacturing & Lead Time Reduction',
    title: 'Lean Manufacturing & Lead Time Reduction',
    industry: 'Manufacturing Operations',
    color: 'bg-[#ed8936]/10 text-[#ed8936]',
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
    technologies: 'Lean Manufacturing • Heijunka • Kaizen • VSM • Continuous Improvement',
    image: 'https://images.unsplash.com/photo-1565514020176-db9de8fd5f8e?w=600&h=400&fit=crop',
  },
  {
    number: '03',
    icon: <BarChart3 className="w-6 h-6" />,
    tag: 'Smart KPI Dashboard & Production Intelligence',
    title: 'Smart KPI Dashboard & Production Intelligence System',
    industry: 'Industrial Manufacturing',
    color: 'bg-[#38a169]/10 text-[#38a169]',
    challenge: [
      'Management lacked real-time operational visibility',
      'Live KPI tracking unavailable',
      'Accurate production intelligence missing',
      'Fast decision-making capability limited',
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
    technologies: 'Power BI • SQL • Python • KPI Systems • Data Analytics',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
  },
  {
    number: '04',
    icon: <Wrench className="w-6 h-6" />,
    tag: 'Predictive Maintenance & Downtime Reduction',
    title: 'Predictive Maintenance & Downtime Reduction',
    industry: 'Manufacturing & Production Systems',
    color: 'bg-[#805ad5]/10 text-[#805ad5]',
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
    technologies: 'Machine Learning • Predictive Analytics • Python • Power BI • Reliability Engineering',
    image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=600&h=400&fit=crop',
  },
  {
    number: '05',
    icon: <DollarSign className="w-6 h-6" />,
    tag: 'Operational Cost Reduction & Financial Visibility',
    title: 'Operational Cost Reduction & Financial Visibility',
    industry: 'Manufacturing Operations',
    color: 'bg-[#e53e3e]/10 text-[#e53e3e]',
    challenge: [
      'Lack of real-time operational costing',
      'Financial visibility missing',
      'Cost control systems absent',
      'Performance-based cost intelligence unavailable',
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
    technologies: 'Power BI • Excel Automation • Industrial Costing • Manufacturing Analytics',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
  },
  {
    number: '06',
    icon: <Users className="w-6 h-6" />,
    tag: 'Lean Transformation & Workplace Optimization',
    title: 'Lean Transformation & Workplace Optimization',
    industry: 'Production & Manufacturing',
    color: 'bg-[#38b2ac]/10 text-[#38b2ac]',
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
    technologies: '5S • Lean Manufacturing • SOP Development • Kaizen • Continuous Improvement',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
  },
]

export default function CaseStudyList() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="space-y-16 lg:space-y-24 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => (
            <ScrollReveal key={study.number} delay={0.05}>
              <motion.div
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl border border-[#e2e8f0] shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image Side */}
                  <div className={`relative h-64 lg:h-auto overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img
                      src={study.image}
                      alt={study.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg ${study.color} text-sm font-bold`}>
                        {study.icon}
                        {study.tag}
                      </span>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className={`p-6 lg:p-10 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-5xl font-bold font-display text-[#e2e8f0]">{study.number}</span>
                      <div>
                        <span className="text-sm text-[#718096] font-semibold uppercase tracking-wider">Case Study</span>
                        <h3 className="text-2xl font-bold text-[#1a365d] leading-tight">{study.title}</h3>
                      </div>
                    </div>

                    <div className="mb-6">
                      <span className="inline-block px-3 py-1 rounded-full bg-[#1a365d]/10 text-[#1a365d] text-xs font-bold uppercase tracking-wider">
                        {study.industry}
                      </span>
                    </div>

                    <div className="space-y-6">
                      {/* Challenge */}
                      <div>
                        <h4 className="text-sm font-bold text-[#e53e3e] uppercase tracking-wider mb-2 flex items-center gap-2">
                          <ArrowRight className="w-4 h-4" />
                          Challenge
                        </h4>
                        <ul className="space-y-1">
                          {study.challenge.map((item) => (
                            <li key={item} className="text-sm text-[#4a5568] flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#e53e3e] mt-1.5 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Solution */}
                      <div>
                        <h4 className="text-sm font-bold text-[#3182ce] uppercase tracking-wider mb-2 flex items-center gap-2">
                          <ArrowRight className="w-4 h-4" />
                          Solution
                        </h4>
                        <ul className="space-y-1">
                          {study.solution.map((item) => (
                            <li key={item} className="text-sm text-[#4a5568] flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#3182ce] mt-1.5 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Results */}
                      <div className="bg-[#f7fafc] rounded-xl p-4">
                        <h4 className="text-sm font-bold text-[#38a169] uppercase tracking-wider mb-3 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          Results
                        </h4>
                        <ul className="space-y-2">
                          {study.results.map((item) => (
                            <li key={item} className="text-sm text-[#1a365d] font-semibold flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-[#38a169] mt-0.5 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-bold text-[#1a365d] uppercase tracking-wider mb-2">
                          Technologies Used
                        </h4>
                        <p className="text-sm text-[#718096]">{study.technologies}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
