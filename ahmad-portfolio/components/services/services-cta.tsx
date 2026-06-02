'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, MessageCircle, ArrowRight } from 'lucide-react'
import ScrollReveal from '@/components/scroll-reveal'

export default function ServicesCTA() {
  return (
    <section className="py-20 lg:py-28 bg-[#f7fafc]">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-bold font-display text-[#0f2744] mb-6">
              Let&apos;s Transform Your <span className="text-gradient">Operations</span>
            </h2>
            <p className="text-lg text-[#4a5568] leading-relaxed mb-10 max-w-2xl mx-auto">
              Whether your organization wants to improve OEE, reduce manufacturing cost, digitally transform operations, 
              implement Lean systems, deploy AI in manufacturing, optimize production systems, build KPI dashboards, 
              or improve operational efficiency — I help industries create intelligent manufacturing systems built for 
              long-term operational excellence and sustainable growth.
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
                <MessageCircle className="w-5 h-5" />
                Contact Me
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
