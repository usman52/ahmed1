'use client'

import { motion } from 'framer-motion'
import { Briefcase, Building2, Leaf } from 'lucide-react'
import ScrollReveal from '@/components/scroll-reveal'
import SectionHeader from '@/components/section-header'

const experiences = [
  {
    company: 'Servis Tyres',
    role: 'Deputy Manager',
    period: 'Current',
    description: 'Leading manufacturing optimization, operational excellence, process improvement, and smart manufacturing initiatives.',
    icon: <Building2 className="w-5 h-5" />,
    highlights: [
      'Production Optimization',
      'Operational Excellence',
      'Smart KPI Systems',
      'Process Improvement',
      'Manufacturing Intelligence',
      'Cost Reduction',
      'Digital Manufacturing Transformation'
    ]
  },
  {
    company: 'Jahangir Packages Private Limited',
    role: 'Industrial Engineering & Operational Excellence',
    period: 'Previous',
    description: 'Worked on AI-driven operational systems, Lean transformation, production intelligence, and cost optimization projects.',
    icon: <Briefcase className="w-5 h-5" />,
    highlights: [
      'AI-driven operational systems',
      'Lean transformation',
      'Production intelligence',
      'Cost optimization projects'
    ]
  },
  {
    company: 'Style Textile',
    role: 'Industrial Engineering',
    period: 'Previous',
    description: 'Focused on Lean Manufacturing, workflow optimization, production balancing, and operational improvement initiatives.',
    icon: <Briefcase className="w-5 h-5" />,
    highlights: [
      'Lean Manufacturing',
      'Workflow optimization',
      'Production balancing',
      'Operational improvement'
    ]
  },
  {
    company: 'World Wide Fund for Nature (WWF)',
    role: 'Research & Sustainability',
    period: 'Previous',
    description: 'Supported sustainability and industrial decarbonization initiatives.',
    icon: <Leaf className="w-5 h-5" />,
    highlights: [
      'Sustainability initiatives',
      'Industrial decarbonization',
      'Research projects'
    ]
  }
]

export default function ProfessionalBackground() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Professional Background"
          title="Experience That Drives Results"
          subtitle="A journey of building smarter, leaner, faster, and more sustainable manufacturing systems"
          icon={<Briefcase className="w-4 h-4" />}
        />

        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 lg:pl-12">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1a365d] via-[#2c5282] to-[#3182ce]" />

            {experiences.map((exp, index) => (
              <ScrollReveal key={exp.company} delay={index * 0.15}>
                <motion.div
                  whileHover={{ x: 8 }}
                  className="relative mb-12 last:mb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[39px] lg:-left-[55px] top-1 w-4 h-4 rounded-full bg-[#ed8936] border-4 border-white shadow-md" />

                  <div className="bg-[#f7fafc] rounded-2xl p-6 lg:p-8 border border-[#e2e8f0] hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-[#1a365d]/10 flex items-center justify-center text-[#1a365d] flex-shrink-0">
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#1a365d]">{exp.company}</h3>
                        <p className="text-[#ed8936] font-semibold">{exp.role}</p>
                        <span className="inline-block mt-1 px-3 py-1 rounded-full bg-[#1a365d]/10 text-[#1a365d] text-xs font-semibold">
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    <p className="text-[#4a5568] mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-3 py-1 rounded-full bg-white border border-[#e2e8f0] text-[#4a5568] text-sm"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
