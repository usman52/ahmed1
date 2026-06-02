'use client'

import { motion } from 'framer-motion'
import { Award, BookOpen } from 'lucide-react'
import ScrollReveal from '@/components/scroll-reveal'

export default function AboutHero() {
  return (
    <section className="relative py-20 lg:py-28 gradient-light overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a365d' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ed8936]/10 text-[#c05621] text-sm font-semibold mb-6 border border-[#ed8936]/20">
              <Award className="w-4 h-4" />
              Manufacturing Transformation Consultant | AI Strategist
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-[#0f2744] mb-6 leading-tight">
              About <span className="text-gradient">Ahmad Bin Sadiq</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-xl text-[#4a5568] leading-relaxed mb-8 max-w-3xl mx-auto">
              Lean Six Sigma Master Black Belt focused on transforming industries through 
              Operational Excellence, Smart Manufacturing Systems, Artificial Intelligence, 
              and Lean Transformation.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white shadow-md border border-[#e2e8f0]">
                <BookOpen className="w-5 h-5 text-[#ed8936]" />
                <span className="font-semibold text-[#1a365d]">Gold Medalist Industrial Engineer</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
