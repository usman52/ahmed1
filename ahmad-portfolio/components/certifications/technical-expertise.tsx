'use client'

import { motion } from 'framer-motion'
import { Brain, Cog, Factory, BarChart3, Database, Code, Monitor, GitBranch } from 'lucide-react'
import ScrollReveal from '@/components/scroll-reveal'
import SectionHeader from '@/components/section-header'

const expertiseAreas = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'Artificial Intelligence & Manufacturing Analytics',
    color: 'bg-[#3182ce]/10 text-[#3182ce]',
    skills: ['Machine Learning', 'Predictive Analytics', 'Industrial AI Systems', 'Predictive Maintenance', 'Manufacturing Intelligence'],
  },
  {
    icon: <Cog className="w-6 h-6" />,
    title: 'Lean Manufacturing & Operational Excellence',
    color: 'bg-[#ed8936]/10 text-[#ed8936]',
    skills: ['Lean Six Sigma', 'Kaizen', 'Value Stream Mapping', 'Process Optimization', 'Continuous Improvement'],
  },
  {
    icon: <Factory className="w-6 h-6" />,
    title: 'Industrial Engineering',
    color: 'bg-[#38a169]/10 text-[#38a169]',
    skills: ['Production Optimization', 'OEE Improvement', 'Production Planning', 'Workflow Optimization', 'Manufacturing Systems'],
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Data Analytics & Visualization',
    color: 'bg-[#805ad5]/10 text-[#805ad5]',
    skills: ['Power BI', 'Python', 'SQL', 'KPI Dashboards', 'Real-Time Reporting Systems'],
  },
]

export default function TechnicalExpertise() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Technical Expertise"
          title="Core Technical Competencies"
          subtitle="A comprehensive skill set spanning AI, Lean Manufacturing, Industrial Engineering, and Data Analytics"
          icon={<Code className="w-4 h-4" />}
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {expertiseAreas.map((area, index) => (
            <ScrollReveal key={area.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                className="bg-[#f7fafc] rounded-2xl p-8 border border-[#e2e8f0] hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl ${area.color} flex items-center justify-center`}>
                    {area.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#1a365d]">{area.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {area.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-lg bg-white border border-[#e2e8f0] text-sm font-semibold text-[#4a5568] hover:bg-[#1a365d] hover:text-white transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
