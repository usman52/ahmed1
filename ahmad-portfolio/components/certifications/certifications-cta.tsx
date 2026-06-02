'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, ArrowRight, Lightbulb } from 'lucide-react'
import ScrollReveal from '@/components/scroll-reveal'

export default function CertificationsCTA() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ed8936]/10 text-[#c05621] text-sm font-semibold mb-6 border border-[#ed8936]/20">
              <Lightbulb className="w-4 h-4" />
              Professional Philosophy
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold font-display text-[#0f2744] mb-6">
              Learning + Execution = <span className="text-gradient">Industrial Transformation</span>
            </h2>
            <p className="text-lg text-[#4a5568] leading-relaxed mb-10 max-w-2xl mx-auto">
              The true value of certifications comes from practical implementation. Every skill, methodology, 
              and technology I study is focused on one objective: Helping industries become smarter, leaner, 
              more efficient, and prepared for the future of Industry 5.0.
            </p>

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
