'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, Brain, Cog, Wrench, BarChart3, Target, ArrowRight, CheckCircle } from 'lucide-react'
import ScrollReveal from '@/components/scroll-reveal'
import SectionHeader from '@/components/section-header'

const challenges = [
  'High manufacturing cost',
  'Low operational visibility',
  'Downtime losses',
  'Poor production planning',
  'Inefficient workflows',
  'Lack of real-time KPIs',
  'Unbalanced operations',
  'Operational waste',
  'Low OEE performance',
  'Slow decision-making',
]

const solutions = [
  { icon: <Brain className="w-5 h-5" />, title: 'Artificial Intelligence', color: 'bg-[#3182ce]/10 text-[#3182ce]' },
  { icon: <Cog className="w-5 h-5" />, title: 'Lean Six Sigma', color: 'bg-[#ed8936]/10 text-[#ed8936]' },
  { icon: <Wrench className="w-5 h-5" />, title: 'Industrial Engineering', color: 'bg-[#38a169]/10 text-[#38a169]' },
  { icon: <BarChart3 className="w-5 h-5" />, title: 'Smart Analytics', color: 'bg-[#805ad5]/10 text-[#805ad5]' },
  { icon: <Target className="w-5 h-5" />, title: 'Operational Excellence', color: 'bg-[#38b2ac]/10 text-[#38b2ac]' },
]

export default function CommonChallenges() {
  return (
    <section className="py-20 lg:py-28 bg-[#f7fafc]">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Operational Excellence Across Industries"
          title="Common Business Challenges Solved"
          subtitle="Across different industries, organizations often face similar operational challenges. My role is to transform these challenges into measurable operational improvements."
          icon={<AlertTriangle className="w-4 h-4" />}
        />

        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="bg-white rounded-3xl p-8 lg:p-12 border border-[#e2e8f0] shadow-sm mb-12">
              <h3 className="text-xl font-bold text-[#1a365d] mb-6 text-center">Challenges I Help Solve</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {challenges.map((challenge, index) => (
                  <motion.div
                    key={challenge}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-[#f7fafc] border border-[#e2e8f0]"
                  >
                    <AlertTriangle className="w-5 h-5 text-[#ed8936] flex-shrink-0" />
                    <span className="text-sm font-medium text-[#4a5568]">{challenge}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="bg-white rounded-3xl p-8 lg:p-12 border border-[#e2e8f0] shadow-sm">
              <h3 className="text-xl font-bold text-[#1a365d] mb-6 text-center">Transformation Solutions</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {solutions.map((solution, index) => (
                  <motion.div
                    key={solution.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    whileHover={{ y: -4 }}
                    className="text-center p-6 rounded-2xl bg-[#f7fafc] border border-[#e2e8f0] hover:shadow-lg transition-all duration-300"
                  >
                    <div className={`w-12 h-12 rounded-xl ${solution.color} flex items-center justify-center mx-auto mb-3`}>
                      {solution.icon}
                    </div>
                    <span className="text-sm font-bold text-[#1a365d]">{solution.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
