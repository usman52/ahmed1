'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, ArrowRight, CheckCircle } from 'lucide-react'
import ScrollReveal from '@/components/scroll-reveal'

const capabilities = [
  'Improve OEE',
  'Reduce manufacturing cost',
  'Deploy AI systems',
  'Build KPI dashboards',
  'Optimize production flow',
  'Reduce downtime',
  'Digitally transform operations',
  'Implement Lean Manufacturing systems',
]

export default function CaseStudiesCTA() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-bold font-display text-[#0f2744] mb-6">
              Let&apos;s Build Your Next <span className="text-gradient">Transformation</span> Project
            </h2>
            <p className="text-lg text-[#4a5568] leading-relaxed mb-10 max-w-2xl mx-auto">
              I help industries create intelligent manufacturing systems built for long-term operational excellence and sustainable growth.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-3xl mx-auto mb-10">
              {capabilities.map((cap) => (
                <div key={cap} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#f7fafc] border border-[#e2e8f0]">
                  <CheckCircle className="w-4 h-4 text-[#38a169] flex-shrink-0" />
                  <span className="text-sm text-[#4a5568] font-medium">{cap}</span>
                </div>
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
