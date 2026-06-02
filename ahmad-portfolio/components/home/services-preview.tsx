'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Cog, Brain, BarChart3, Factory, Gauge, Wrench, ArrowRight } from 'lucide-react'
import SectionHeader from '@/components/section-header'
import ScrollReveal from '@/components/scroll-reveal'

const services = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'AI for Manufacturing',
    description: 'Transform traditional manufacturing into intelligent production ecosystems using Artificial Intelligence and industrial analytics for optimization and predictive systems.',
    color: 'blue',
    bgColor: 'bg-[#3182ce]/10',
    textColor: 'text-[#3182ce]',
  },
  {
    icon: <Cog className="w-6 h-6" />,
    title: 'Lean Six Sigma Transformation',
    description: 'Driving operational excellence through Lean Manufacturing and Six Sigma methodologies with measurable waste reduction and process efficiency.',
    color: 'orange',
    bgColor: 'bg-[#ed8936]/10',
    textColor: 'text-[#ed8936]',
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'OEE Improvement',
    description: 'Improving production performance through intelligent manufacturing optimization systems and real-time performance monitoring.',
    color: 'green',
    bgColor: 'bg-[#38a169]/10',
    textColor: 'text-[#38a169]',
  },
  {
    icon: <Factory className="w-6 h-6" />,
    title: 'Smart Factory Solutions',
    description: 'Helping organizations digitally transform manufacturing operations using smart technologies and connected Industry 5.0 systems.',
    color: 'purple',
    bgColor: 'bg-[#805ad5]/10',
    textColor: 'text-[#805ad5]',
  },
  {
    icon: <Gauge className="w-6 h-6" />,
    title: 'KPI Dashboards & Analytics',
    description: 'Building real-time industrial intelligence systems with Power BI dashboards for data-driven decision-making.',
    color: 'teal',
    bgColor: 'bg-[#38b2ac]/10',
    textColor: 'text-[#38b2ac]',
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: 'Predictive Maintenance',
    description: 'Reducing machine failures and maintenance costs through intelligent predictive systems and reliability engineering.',
    color: 'red',
    bgColor: 'bg-[#e53e3e]/10',
    textColor: 'text-[#e53e3e]',
  },
]

export default function ServicesPreview() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Core Consulting Services"
          title="Building the Future of Intelligent Manufacturing"
          subtitle="Comprehensive solutions combining AI, Lean Six Sigma, Industrial Engineering, and Industry 5.0 technologies"
          icon={<Cog className="w-4 h-4" />}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group bg-white rounded-2xl p-6 lg:p-8 border border-[#e2e8f0] shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1a365d] via-[#2c5282] to-[#3182ce] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div className={`w-14 h-14 rounded-xl ${service.bgColor} ${service.textColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-[#1a202c] mb-3 group-hover:text-[#1a365d] transition-colors">
                  {service.title}
                </h3>

                <p className="text-[#4a5568] leading-relaxed text-sm">
                  {service.description}
                </p>

                <Link 
                  href="/services"
                  className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-[#1a365d] group-hover:text-[#ed8936] transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
