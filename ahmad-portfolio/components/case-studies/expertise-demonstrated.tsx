'use client'

import { motion } from 'framer-motion'
import { Brain, Cog, Factory, BarChart3, Gauge, Monitor, Wrench, Database, DollarSign, Award, Globe, Cpu } from 'lucide-react'
import ScrollReveal from '@/components/scroll-reveal'
import SectionHeader from '@/components/section-header'

const expertiseAreas = [
  { icon: <Brain className="w-5 h-5" />, title: 'AI for Manufacturing', color: 'bg-[#3182ce]/10 text-[#3182ce]' },
  { icon: <Cog className="w-5 h-5" />, title: 'Lean Six Sigma Transformation', color: 'bg-[#ed8936]/10 text-[#ed8936]' },
  { icon: <Factory className="w-5 h-5" />, title: 'Smart Factory Systems', color: 'bg-[#805ad5]/10 text-[#805ad5]' },
  { icon: <BarChart3 className="w-5 h-5" />, title: 'Production Optimization', color: 'bg-[#38a169]/10 text-[#38a169]' },
  { icon: <Gauge className="w-5 h-5" />, title: 'OEE Improvement', color: 'bg-[#38b2ac]/10 text-[#38b2ac]' },
  { icon: <Monitor className="w-5 h-5" />, title: 'KPI Dashboards & Analytics', color: 'bg-[#e53e3e]/10 text-[#e53e3e]' },
  { icon: <Wrench className="w-5 h-5" />, title: 'Predictive Maintenance', color: 'bg-[#3182ce]/10 text-[#3182ce]' },
  { icon: <Database className="w-5 h-5" />, title: 'Industrial Data Analytics', color: 'bg-[#ed8936]/10 text-[#ed8936]' },
  { icon: <DollarSign className="w-5 h-5" />, title: 'Cost Reduction', color: 'bg-[#38a169]/10 text-[#38a169]' },
  { icon: <Award className="w-5 h-5" />, title: 'Operational Excellence', color: 'bg-[#805ad5]/10 text-[#805ad5]' },
  { icon: <Cpu className="w-5 h-5" />, title: 'Industry 4.0 & Industry 5.0', color: 'bg-[#38b2ac]/10 text-[#38b2ac]' },
]

export default function ExpertiseDemonstrated() {
  return (
    <section className="py-20 lg:py-28 bg-[#f7fafc]">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Core Areas of Expertise Demonstrated"
          title="Comprehensive Manufacturing Transformation Skills"
          subtitle="Every project showcases practical expertise across multiple domains"
          icon={<Award className="w-4 h-4" />}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {expertiseAreas.map((area, index) => (
            <ScrollReveal key={area.title} delay={index * 0.05}>
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white rounded-xl p-5 border border-[#e2e8f0] hover:shadow-lg transition-all duration-300 flex items-center gap-4"
              >
                <div className={`w-10 h-10 rounded-lg ${area.color} flex items-center justify-center flex-shrink-0`}>
                  {area.icon}
                </div>
                <span className="font-semibold text-[#1a365d] text-sm">{area.title}</span>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-8 lg:p-12 border border-[#e2e8f0] shadow-sm">
              <h3 className="text-2xl font-bold text-[#1a365d] mb-4">Why These Projects Matter</h3>
              <p className="text-[#4a5568] leading-relaxed mb-6">
                Every project focuses on one objective: Creating measurable industrial impact through intelligent systems, 
                operational excellence, and sustainable manufacturing transformation. The goal is not just improvement — 
                but building manufacturing environments that are data-driven, scalable, efficient, intelligent, human-centered, and future-ready.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {['Data-driven', 'Scalable', 'Efficient', 'Intelligent', 'Human-centered', 'Future-ready'].map((tag) => (
                  <span key={tag} className="px-4 py-2 rounded-full bg-[#1a365d]/10 text-[#1a365d] text-sm font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
