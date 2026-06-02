'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Award, Brain, BarChart3, Target, Lightbulb, Users, Globe } from 'lucide-react'
import ScrollReveal from '@/components/scroll-reveal'
import SectionHeader from '@/components/section-header'

const reasons = [
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: 'Strong Industrial Engineering Background',
    color: 'bg-[#3182ce]/10 text-[#3182ce]',
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Lean Six Sigma Master Black Belt',
    color: 'bg-[#ed8936]/10 text-[#ed8936]',
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'AI & Manufacturing Integration Expertise',
    color: 'bg-[#805ad5]/10 text-[#805ad5]',
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Data-Driven Decision Making Approach',
    color: 'bg-[#38a169]/10 text-[#38a169]',
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Focus on Measurable Operational Results',
    color: 'bg-[#e53e3e]/10 text-[#e53e3e]',
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Industry 5.0 & Smart Manufacturing Vision',
    color: 'bg-[#38b2ac]/10 text-[#38b2ac]',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Real Manufacturing Transformation Experience',
    color: 'bg-[#3182ce]/10 text-[#3182ce]',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Human-Centered Transformation Philosophy',
    color: 'bg-[#ed8936]/10 text-[#ed8936]',
  },
]

export default function WhyWorkWithMe() {
  return (
    <section className="py-20 lg:py-28 bg-[#f7fafc]">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Why Work With Me?"
          title="The Difference That Delivers Results"
          subtitle="A unique combination of technical expertise, industry experience, and transformation mindset"
          icon={<Award className="w-4 h-4" />}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <ScrollReveal key={reason.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 border border-[#e2e8f0] shadow-sm hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className={`w-14 h-14 rounded-xl ${reason.color} flex items-center justify-center mx-auto mb-4`}>
                  {reason.icon}
                </div>
                <h3 className="text-sm font-bold text-[#1a365d] leading-tight">
                  {reason.title}
                </h3>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
