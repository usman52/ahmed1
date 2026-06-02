'use client'

import { motion } from 'framer-motion'
import { Award, Brain, Database, BarChart3, CheckCircle } from 'lucide-react'
import ScrollReveal from '@/components/scroll-reveal'
import SectionHeader from '@/components/section-header'

const certifications = [
  {
    icon: <Award className="w-8 h-8" />,
    title: 'Lean Six Sigma Master Black Belt',
    org: 'Professional Certification',
    color: 'bg-[#ed8936]/10 text-[#ed8936]',
    skills: [
      'Lean Manufacturing',
      'Six Sigma Methodologies',
      'DMAIC Framework',
      'Waste Reduction',
      'Continuous Improvement',
      'Root Cause Analysis',
      'Process Optimization',
      'Operational Excellence',
    ],
    description: 'Advanced expertise in improving manufacturing performance, reducing operational waste, increasing efficiency, and building sustainable process improvement systems.',
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: 'AI Engineering',
    org: 'IBM',
    color: 'bg-[#3182ce]/10 text-[#3182ce]',
    skills: [
      'Artificial Intelligence',
      'Machine Learning',
      'Predictive Analytics',
      'AI Model Development',
      'Industrial AI Applications',
      'Intelligent Decision Systems',
    ],
    description: 'Applied in manufacturing analytics, predictive maintenance, and smart factory transformation projects.',
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: 'Data Science',
    org: 'IBM',
    color: 'bg-[#805ad5]/10 text-[#805ad5]',
    skills: [
      'Data Science',
      'Industrial Data Analytics',
      'Data Visualization',
      'Machine Learning',
      'Statistical Analysis',
      'Predictive Modeling',
    ],
    description: 'Focused on transforming manufacturing and operational data into actionable business intelligence.',
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: 'Data Analytics',
    org: 'Google',
    color: 'bg-[#38a169]/10 text-[#38a169]',
    skills: [
      'Business Intelligence',
      'Data Visualization',
      'KPI Reporting',
      'Dashboard Development',
      'Data-Driven Decision Making',
      'Analytical Problem Solving',
    ],
    description: 'Applied in operational reporting systems, production intelligence platforms, and manufacturing KPI dashboards.',
  },
]

export default function ProfessionalCertifications() {
  return (
    <section className="py-20 lg:py-28 bg-[#f7fafc]">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Professional Certifications"
          title="Industry-Recognized Credentials"
          subtitle="Continuous professional development to stay at the forefront of manufacturing transformation"
          icon={<Award className="w-4 h-4" />}
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <ScrollReveal key={cert.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl p-8 lg:p-10 border border-[#e2e8f0] shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1a365d] via-[#2c5282] to-[#3182ce] transform scale-x-0 hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl ${cert.color} flex items-center justify-center flex-shrink-0`}>
                    {cert.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1a365d] mb-1">{cert.title}</h3>
                    <span className="inline-block px-3 py-1 rounded-full bg-[#ed8936]/10 text-[#c05621] text-xs font-bold">
                      {cert.org}
                    </span>
                  </div>
                </div>

                <p className="text-[#4a5568] text-sm leading-relaxed mb-6">
                  {cert.description}
                </p>

                <div>
                  <h4 className="text-xs font-bold text-[#1a365d] uppercase tracking-wider mb-3">Key Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#f7fafc] border border-[#e2e8f0] text-xs text-[#4a5568] font-medium"
                      >
                        <CheckCircle className="w-3 h-3 text-[#38a169]" />
                        {skill}
                      </span>
                    ))}
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
