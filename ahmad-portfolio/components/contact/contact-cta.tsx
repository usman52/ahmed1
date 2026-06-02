'use client'

import { motion } from 'framer-motion'
import { Lightbulb, TrendingUp, Users, Target, ArrowRight, Calendar } from 'lucide-react'
import Link from 'next/link'
import ScrollReveal from '@/components/scroll-reveal'

const whyConnect = [
  { icon: <TrendingUp className="w-5 h-5" />, text: 'Improve productivity' },
  { icon: <Target className="w-5 h-5" />, text: 'Reduce operational waste' },
  { icon: <Users className="w-5 h-5" />, text: 'Increase manufacturing efficiency' },
  { icon: <Lightbulb className="w-5 h-5" />, text: 'Build intelligent production systems' },
  { icon: <TrendingUp className="w-5 h-5" />, text: 'Improve operational visibility' },
  { icon: <Target className="w-5 h-5" />, text: 'Develop data-driven decision systems' },
  { icon: <Users className="w-5 h-5" />, text: 'Implement sustainable manufacturing practices' },
  { icon: <Lightbulb className="w-5 h-5" />, text: 'Prepare for Industry 5.0 transformation' },
]

export default function ContactCTA() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ed8936]/10 text-[#c05621] text-sm font-semibold mb-6 border border-[#ed8936]/20">
              <Lightbulb className="w-4 h-4" />
              Final Statement
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold font-display text-[#0f2744] mb-6">
              Transforming Manufacturing Through <span className="text-gradient">Intelligence, Innovation</span> & Operational Excellence
            </h2>
            <p className="text-lg text-[#4a5568] leading-relaxed mb-10 max-w-2xl mx-auto">
              Building smarter, leaner, and future-ready manufacturing systems through Artificial Intelligence, 
              Lean Thinking, Industrial Engineering, and Industry 5.0 transformation.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto mb-10">
              {whyConnect.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#f7fafc] border border-[#e2e8f0]"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#1a365d]/10 text-[#1a365d] flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-sm font-semibold text-[#4a5568]">{item.text}</span>
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
                href="/case-studies"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl btn-secondary font-bold text-lg"
              >
                <ArrowRight className="w-5 h-5" />
                View Case Studies
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
