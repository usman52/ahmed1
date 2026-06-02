'use client'

import { motion } from 'framer-motion'
import { Brain, Cog, BarChart3, Factory, Gauge, Wrench, DollarSign, Monitor, Database, ArrowRight, Check } from 'lucide-react'
import ScrollReveal from '@/components/scroll-reveal'
import SectionHeader from '@/components/section-header'

const services = [
  {
    icon: <Brain className="w-7 h-7" />,
    title: 'AI for Manufacturing',
    description: 'Transform traditional manufacturing into intelligent production ecosystems using Artificial Intelligence and industrial analytics.',
    color: 'bg-[#3182ce]/10 text-[#3182ce]',
    services: [
      'AI-Based Production Optimization',
      'Predictive Maintenance Systems',
      'Machine Learning Models for Manufacturing',
      'AI Decision Support Systems',
      'Smart Production Intelligence',
      'Industrial Automation Analytics',
      'AI-Powered Process Monitoring',
      'Manufacturing Forecasting Systems',
    ],
    impact: [
      'Reduced downtime',
      'Improved operational visibility',
      'Faster decision-making',
      'Increased manufacturing efficiency',
      'Better production planning',
    ],
  },
  {
    icon: <Cog className="w-7 h-7" />,
    title: 'Lean Six Sigma Transformation',
    description: 'Driving operational excellence through Lean Manufacturing and Six Sigma methodologies.',
    color: 'bg-[#ed8936]/10 text-[#ed8936]',
    services: [
      'Lean Manufacturing Implementation',
      'Six Sigma Process Improvement',
      'Kaizen Systems',
      'Waste Reduction Strategies',
      'Root Cause Analysis (RCA)',
      'Continuous Improvement Frameworks',
      'Value Stream Mapping (VSM)',
      'Standard Operating Procedures (SOPs)',
      '5S Workplace Organization',
      'DMAIC Project Execution',
    ],
    impact: [
      'Reduced operational waste',
      'Improved process efficiency',
      'Lower production cost',
      'Better workflow optimization',
      'Increased productivity',
    ],
  },
  {
    icon: <BarChart3 className="w-7 h-7" />,
    title: 'Production Optimization & OEE Improvement',
    description: 'Improving production performance through intelligent manufacturing optimization systems.',
    color: 'bg-[#38a169]/10 text-[#38a169]',
    services: [
      'OEE Improvement Systems',
      'Production Line Balancing',
      'Bottleneck Identification',
      'Production Scheduling Optimization',
      'Downtime Reduction Strategies',
      'Heijunka Production Leveling',
      'Capacity Utilization Analysis',
      'Workflow Optimization',
      'Production Flow Improvement',
    ],
    impact: [
      'Increased throughput',
      'Improved production efficiency',
      'Reduced lead times',
      'Better resource utilization',
      'Higher operational performance',
    ],
  },
  {
    icon: <Factory className="w-7 h-7" />,
    title: 'Smart Factory & Industry 5.0 Solutions',
    description: 'Helping organizations digitally transform manufacturing operations using smart technologies and connected systems.',
    color: 'bg-[#805ad5]/10 text-[#805ad5]',
    services: [
      'Smart Factory Development',
      'Industry 4.0 & Industry 5.0 Transformation',
      'Real-Time Production Monitoring',
      'Digital Manufacturing Systems',
      'IoT Manufacturing Analytics',
      'Intelligent KPI Systems',
      'Connected Operations Frameworks',
      'Human-Centered Smart Manufacturing',
    ],
    impact: [
      'Real-time operational visibility',
      'Faster operational response',
      'Improved manufacturing intelligence',
      'Enhanced production control',
      'Sustainable operational growth',
    ],
  },
  {
    icon: <Gauge className="w-7 h-7" />,
    title: 'KPI Dashboards & Industrial Analytics',
    description: 'Building real-time industrial intelligence systems for data-driven decision-making.',
    color: 'bg-[#38b2ac]/10 text-[#38b2ac]',
    services: [
      'Power BI Manufacturing Dashboards',
      'KPI Monitoring Systems',
      'Real-Time OEE Dashboards',
      'Production Intelligence Platforms',
      'Data Visualization Systems',
      'Operational Reporting Automation',
      'Manufacturing Data Analytics',
      'Performance Monitoring Systems',
    ],
    impact: [
      'Better operational visibility',
      'Faster management decisions',
      'Improved KPI tracking',
      'Real-time production insights',
      'Data-driven operational control',
    ],
  },
  {
    icon: <Wrench className="w-7 h-7" />,
    title: 'Predictive Maintenance & Reliability Engineering',
    description: 'Reducing machine failures and maintenance costs through intelligent predictive systems.',
    color: 'bg-[#e53e3e]/10 text-[#e53e3e]',
    services: [
      'Predictive Maintenance Models',
      'Equipment Reliability Analytics',
      'Machine Failure Prediction',
      'Preventive Maintenance Optimization',
      'Maintenance KPI Systems',
      'Breakdown Reduction Strategies',
      'AI-Based Maintenance Analytics',
      'Reliability Improvement Frameworks',
    ],
    impact: [
      'Reduced machine downtime',
      'Lower maintenance cost',
      'Increased equipment reliability',
      'Improved production continuity',
      'Better maintenance planning',
    ],
  },
  {
    icon: <DollarSign className="w-7 h-7" />,
    title: 'Cost Reduction & Operational Efficiency',
    description: 'Helping industries reduce manufacturing cost while improving operational performance.',
    color: 'bg-[#3182ce]/10 text-[#3182ce]',
    services: [
      'Operational Cost Analysis',
      'Manufacturing Cost Optimization',
      'Resource Utilization Improvement',
      'Energy Efficiency Optimization',
      'Labor Productivity Improvement',
      'Operational Waste Elimination',
      'Smart Costing Systems',
      'Financial Visibility Dashboards',
    ],
    impact: [
      'Reduced operational expenses',
      'Improved profitability',
      'Better cost visibility',
      'Increased resource efficiency',
      'Sustainable operational performance',
    ],
  },
  {
    icon: <Monitor className="w-7 h-7" />,
    title: 'Digital Manufacturing Transformation',
    description: 'Helping organizations modernize operations through data, automation, and industrial technology.',
    color: 'bg-[#805ad5]/10 text-[#805ad5]',
    services: [
      'Manufacturing Digitalization',
      'Data-Driven Operations',
      'Production System Automation',
      'Industrial Reporting Systems',
      'Manufacturing Intelligence Platforms',
      'Smart Decision Systems',
      'Digital KPI Tracking',
      'Process Automation Solutions',
    ],
    impact: [
      'Improved operational intelligence',
      'Faster reporting systems',
      'Better production control',
      'Increased digital visibility',
      'Future-ready manufacturing operations',
    ],
  },
]

export default function ServicesList() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Core Consulting Services"
          title="Comprehensive Manufacturing Solutions"
          subtitle="Every service is designed to deliver measurable operational impact and sustainable growth"
          icon={<Database className="w-4 h-4" />}
        />

        <div className="space-y-12 lg:space-y-16 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.05}>
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white rounded-3xl border border-[#e2e8f0] shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
              >
                <div className="p-6 lg:p-10">
                  <div className="flex items-start gap-4 lg:gap-6 mb-6">
                    <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-2xl ${service.color} flex items-center justify-center flex-shrink-0`}>
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-[#1a365d] mb-2">{service.title}</h3>
                      <p className="text-[#4a5568] leading-relaxed">{service.description}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mt-8">
                    {/* Services Include */}
                    <div>
                      <h4 className="text-sm font-bold text-[#1a365d] uppercase tracking-wider mb-4 flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-[#ed8936]" />
                        Services Include
                      </h4>
                      <ul className="space-y-2">
                        {service.services.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-[#4a5568] text-sm">
                            <Check className="w-4 h-4 text-[#38a169] mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Business Impact */}
                    <div>
                      <h4 className="text-sm font-bold text-[#1a365d] uppercase tracking-wider mb-4 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-[#38a169]" />
                        Business Impact
                      </h4>
                      <ul className="space-y-2">
                        {service.impact.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-[#4a5568] text-sm">
                            <Check className="w-4 h-4 text-[#38a169] mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
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
