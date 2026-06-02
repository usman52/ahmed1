'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, ArrowRight, Award, Brain, BarChart3, Globe } from 'lucide-react'
import ScrollReveal from '@/components/scroll-reveal'

const reasons = [
  { icon: <Award className="w-5 h-5" />, text: 'Strong Manufacturing Industry Experience' },
  { icon: <Brain className="w-5 h-5" />, text: 'Lean Six Sigma Master Black Belt' },
  { icon: <BarChart3 className="w-5 h-5" />, text: 'AI & Smart Manufacturing Expertise' },
  { icon: <Globe className="w-5 h-5" />, text: 'Data-Driven Operational Approach' },
]

export default function IndustriesCTA() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-5xl font-bold font-display text-[#0f2744] mb-6">
                Let&apos;s Transform <span className="text-gradient">Your Industry</span>
              </h2>
              <p className="text-lg text-[#4a5568] leading-relaxed max-w-2xl mx-auto">
                Whether your organization operates in Tyre Manufacturing, Packaging & Corrugated Industry, 
                Textile & Garments, Paper Manufacturing, Industrial Operations, or Smart Manufacturing — 
                I help industries build intelligent manufacturing systems designed for operational excellence, 
                sustainable growth, and future-ready performance.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 max-w-3xl mx-auto">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-[#f7fafc] border border-[#e2e8f0]"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#1a365d]/10 text-[#1a365d] flex items-center justify-center flex-shrink-0">
                    {reason.icon}
                  </div>
                  <span className="text-sm font-semibold text-[#1a365d]">{reason.text}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl btn-primary text-white font-bold text-lg"
              >
                <Calendar className="w-5 h-5" />
                Schedule Consultation
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl btn-secondary font-bold text-lg"
              >
                <ArrowRight className="w-5 h-5" />
                Contact Me
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
