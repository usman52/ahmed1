'use client'

import { motion } from 'framer-motion'
import { Trophy, TrendingUp, Clock, Shield, Monitor, Cpu, CheckCircle } from 'lucide-react'
import ScrollReveal from '@/components/scroll-reveal'
import SectionHeader from '@/components/section-header'
import AnimatedCounter from '@/components/animated-counter'

const achievements = [
  {
    icon: <Trophy className="w-6 h-6" />,
    value: 100,
    suffix: 'M+',
    prefix: 'PKR ',
    label: 'Operational Impact Delivered',
    color: 'bg-[#ed8936]/10 text-[#ed8936]',
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    value: 18,
    suffix: '%',
    prefix: '',
    label: 'OEE Improvement Achieved',
    color: 'bg-[#38a169]/10 text-[#38a169]',
  },
  {
    icon: <Clock className="w-6 h-6" />,
    value: 15,
    suffix: '→2 Days',
    prefix: '',
    label: 'Lead Time Reduction',
    color: 'bg-[#3182ce]/10 text-[#3182ce]',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    value: 25,
    suffix: '%',
    prefix: '',
    label: 'Equipment Breakdown Reduction',
    color: 'bg-[#805ad5]/10 text-[#805ad5]',
  },
  {
    icon: <Monitor className="w-6 h-6" />,
    value: 1,
    suffix: '',
    prefix: '',
    label: 'Real-Time KPI & OEE Systems Developed',
    color: 'bg-[#38b2ac]/10 text-[#38b2ac]',
    textValue: 'Real-Time Systems',
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    value: 1,
    suffix: '',
    prefix: '',
    label: 'AI-Driven Manufacturing Solutions Implemented',
    color: 'bg-[#e53e3e]/10 text-[#e53e3e]',
    textValue: 'AI Solutions',
  },
]

const additionalAchievements = [
  'Lean Transformation Initiatives Successfully Executed',
  'Smart Operational Costing Systems Designed',
]

export default function Achievements() {
  return (
    <section className="py-20 lg:py-28 bg-[#f7fafc]">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Key Achievements"
          title="Proven Track Record of Excellence"
          subtitle="Measurable results that demonstrate real industrial transformation"
          icon={<Trophy className="w-4 h-4" />}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
            <ScrollReveal key={achievement.label} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8, transition: { duration: 0.3 } } }
                className="bg-white rounded-2xl p-6 lg:p-8 border border-[#e2e8f0] shadow-sm hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className={`w-14 h-14 rounded-xl ${achievement.color} flex items-center justify-center mx-auto mb-4`}>
                  {achievement.icon}
                </div>
                <div className="text-3xl lg:text-4xl font-bold font-display text-[#1a365d] mb-2">
                  {achievement.textValue ? (
                    achievement.textValue
                  ) : (
                    <>
                      {achievement.prefix}
                      <AnimatedCounter end={achievement.value} suffix={achievement.suffix} />
                    </>
                  )}
                </div>
                <div className="text-[#4a5568] text-sm font-medium">
                  {achievement.label}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-6 lg:p-8 border border-[#e2e8f0] shadow-sm">
              <h3 className="text-xl font-bold text-[#1a365d] mb-4 text-center">Additional Achievements</h3>
              <div className="space-y-3">
                {additionalAchievements.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#38a169] flex-shrink-0" />
                    <span className="text-[#4a5568]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
