'use client'

import { motion } from 'framer-motion'
import { Brain, Cog, Factory, BarChart3, Database, DollarSign } from 'lucide-react'
import ScrollReveal from '@/components/scroll-reveal'
import SectionHeader from '@/components/section-header'

const specializations = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'AI for Manufacturing',
    description: 'Developing intelligent manufacturing systems using machine learning, predictive analytics, automation, and industrial AI solutions.',
    color: 'bg-[#3182ce]/10 text-[#3182ce]',
  },
  {
    icon: <Cog className="w-6 h-6" />,
    title: 'Lean Six Sigma & Operational Excellence',
    description: 'Implementing Lean systems, waste reduction strategies, Kaizen methodologies, process optimization, and continuous improvement frameworks.',
    color: 'bg-[#ed8936]/10 text-[#ed8936]',
  },
  {
    icon: <Factory className="w-6 h-6" />,
    title: 'Smart Factory Transformation',
    description: 'Helping organizations adopt Industry 4.0 and Industry 5.0 technologies through digital manufacturing and real-time operational visibility.',
    color: 'bg-[#805ad5]/10 text-[#805ad5]',
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Production Optimization',
    description: 'Improving OEE, reducing downtime, optimizing workflows, balancing production systems, and increasing manufacturing efficiency.',
    color: 'bg-[#38a169]/10 text-[#38a169]',
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: 'Industrial Data Analytics',
    description: 'Building Power BI dashboards, KPI systems, production intelligence platforms, and operational analytics frameworks.',
    color: 'bg-[#38b2ac]/10 text-[#38b2ac]',
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: 'Cost Reduction & Process Efficiency',
    description: 'Helping industries reduce operational costs, improve resource utilization, and increase profitability through intelligent process optimization.',
    color: 'bg-[#e53e3e]/10 text-[#e53e3e]',
  },
]

export default function Specializations() {
  return (
    <section className="py-20 lg:py-28 bg-[#f7fafc]">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="What I Specialize In"
          title="Core Expertise Areas"
          subtitle="Combining Industrial Engineering, Lean Six Sigma, AI, and Data Analytics to solve complex manufacturing challenges"
          icon={<Brain className="w-4 h-4" />}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {specializations.map((spec, index) => (
            <ScrollReveal key={spec.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8, transition: { duration: 0.3 } }
                className="bg-white rounded-2xl p-6 lg:p-8 border border-[#e2e8f0] shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl ${spec.color} flex items-center justify-center mb-5`}>
                  {spec.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1a365d] mb-3">
                  {spec.title}
                </h3>
                <p className="text-[#4a5568] leading-relaxed text-sm">
                  {spec.description}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
