'use client'

import { motion } from 'framer-motion'
import { Trophy, Star, Award, Medal, TrendingUp, Cpu } from 'lucide-react'
import ScrollReveal from '@/components/scroll-reveal'
import SectionHeader from '@/components/section-header'

const awards = [
  {
    icon: <Trophy className="w-6 h-6" />,
    title: 'Gold Medalist in Master of Industrial Engineering & Management',
    color: 'bg-[#ed8936]/10 text-[#ed8936]',
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: 'Merit-Based Academic Recognition',
    color: 'bg-[#3182ce]/10 text-[#3182ce]',
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Professional Excellence in Manufacturing Transformation',
    color: 'bg-[#38a169]/10 text-[#38a169]',
  },
  {
    icon: <Medal className="w-6 h-6" />,
    title: 'Operational Excellence Leadership',
    color: 'bg-[#805ad5]/10 text-[#805ad5]',
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Industrial Process Optimization Achievements',
    color: 'bg-[#38b2ac]/10 text-[#38b2ac]',
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: 'Smart Manufacturing & AI Integration Contributions',
    color: 'bg-[#e53e3e]/10 text-[#e53e3e]',
  },
]

export default function AwardsRecognition() {
  return (
    <section className="py-20 lg:py-28 bg-[#f7fafc]">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Awards & Recognition"
          title="Academic & Professional Achievements"
          subtitle="Recognition for outstanding contributions to manufacturing transformation and operational excellence"
          icon={<Trophy className="w-4 h-4" />}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {awards.map((award, index) => (
            <ScrollReveal key={award.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 border border-[#e2e8f0] hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className={`w-14 h-14 rounded-xl ${award.color} flex items-center justify-center mx-auto mb-4`}>
                  {award.icon}
                </div>
                <h3 className="text-sm font-bold text-[#1a365d] leading-tight">
                  {award.title}
                </h3>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 max-w-3xl mx-auto text-center">
            <div className="bg-gradient-to-br from-[#1a365d] to-[#2c5282] rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.05]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold font-display mb-4">Commitment to Excellence</h3>
                <p className="text-white/80 leading-relaxed">
                  I believe continuous learning is essential for building future-ready manufacturing systems. 
                  My focus is not only on gaining certifications — but applying knowledge in real industrial 
                  environments to create measurable operational impact, sustainable manufacturing systems, 
                  intelligent production environments, data-driven operational excellence, and human-centered 
                  industrial transformation.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
