'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Users, Zap, Target } from 'lucide-react'
import ScrollReveal from '@/components/scroll-reveal'
import SectionHeader from '@/components/section-header'

const philosophyPoints = [
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Artificial Intelligence',
    description: 'Supports decision-making with data-driven insights',
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Lean Thinking',
    description: 'Eliminates inefficiencies and reduces waste',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Industrial Engineering',
    description: 'Optimizes systems and processes for maximum efficiency',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Human-Centered Leadership',
    description: 'Empowers people through intelligent processes',
  },
]

export default function Philosophy() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ed8936]/10 text-[#c05621] text-sm font-semibold mb-6 border border-[#ed8936]/20">
                <Lightbulb className="w-4 h-4" />
                Core Philosophy
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold font-display text-[#0f2744] mb-6">
                Human Intelligence + <span className="text-gradient">Artificial Intelligence</span>
              </h2>
              <p className="text-lg text-[#4a5568] leading-relaxed max-w-3xl mx-auto">
                I believe the future of manufacturing is not just automated — it is intelligent, adaptive, and human-centered. 
                Technology alone cannot transform industries. Real transformation happens when AI supports decision-making, 
                data creates operational clarity, Lean systems eliminate inefficiencies, and people are empowered through intelligent processes.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {philosophyPoints.map((point, index) => (
              <ScrollReveal key={point.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="text-center p-6 rounded-2xl bg-[#f7fafc] border border-[#e2e8f0] hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#1a365d]/10 text-[#1a365d] flex items-center justify-center mx-auto mb-4">
                    {point.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#1a365d] mb-2">{point.title}</h3>
                  <p className="text-[#4a5568] text-sm">{point.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <div className="mt-16 p-8 lg:p-12 rounded-3xl gradient-primary text-white text-center">
              <h3 className="text-2xl lg:text-3xl font-bold font-display mb-4">Building the Future of Intelligent Industry</h3>
              <p className="text-white/80 leading-relaxed max-w-3xl mx-auto">
                My vision is to help organizations create next-generation manufacturing environments where operations are data-driven, 
                decisions are intelligent, systems are adaptive, processes are lean, technology empowers people, and sustainability 
                becomes operational culture. The goal is not simply digital transformation — it is building intelligent industrial 
                ecosystems prepared for the future of global manufacturing.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
