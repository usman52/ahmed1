'use client'

import { motion } from 'framer-motion'
import { GraduationCap, BookOpen, Target, Lightbulb, BarChart3, Factory } from 'lucide-react'
import ScrollReveal from '@/components/scroll-reveal'
import SectionHeader from '@/components/section-header'

const focusAreas = [
  { icon: <Factory className="w-5 h-5" />, title: 'Industrial Engineering', color: 'bg-[#3182ce]/10 text-[#3182ce]' },
  { icon: <BookOpen className="w-5 h-5" />, title: 'Manufacturing Systems', color: 'bg-[#ed8936]/10 text-[#ed8936]' },
  { icon: <Target className="w-5 h-5" />, title: 'Operational Excellence', color: 'bg-[#38a169]/10 text-[#38a169]' },
  { icon: <BarChart3 className="w-5 h-5" />, title: 'Production Optimization', color: 'bg-[#805ad5]/10 text-[#805ad5]' },
  { icon: <Lightbulb className="w-5 h-5" />, title: 'Data-Driven Decision Making', color: 'bg-[#38b2ac]/10 text-[#38b2ac]' },
  { icon: <Factory className="w-5 h-5" />, title: 'Smart Manufacturing', color: 'bg-[#e53e3e]/10 text-[#e53e3e]' },
]

export default function AcademicExcellence() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Academic Excellence"
          title="Gold Medalist — Master of Industrial Engineering & Management"
          subtitle="Awarded for achieving outstanding academic performance and excellence in Industrial Engineering, operational systems, process optimization, and manufacturing management."
          icon={<GraduationCap className="w-4 h-4" />}
        />

        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#1a365d] to-[#2c5282] rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-[0.05]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-[#f6ad55]" />
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold font-display">Gold Medalist</h3>
                    <p className="text-white/80">Master of Industrial Engineering & Management</p>
                  </div>
                </div>

                <p className="text-white/90 leading-relaxed mb-8">
                  Awarded for achieving outstanding academic performance and excellence in Industrial Engineering, 
                  operational systems, process optimization, and manufacturing management.
                </p>

                <div>
                  <h4 className="text-sm font-bold text-[#f6ad55] uppercase tracking-wider mb-4">Core Focus Areas</h4>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {focusAreas.map((area) => (
                      <div key={area.title} className="flex items-center gap-3 bg-white/10 rounded-xl p-3 backdrop-blur-sm">
                        <div className={`w-8 h-8 rounded-lg ${area.color} flex items-center justify-center`}>
                          {area.icon}
                        </div>
                        <span className="text-sm font-semibold">{area.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
