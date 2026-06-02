'use client'

import { motion } from 'framer-motion'
import { Download, FileText, Award, TrendingUp, Users, Lightbulb } from 'lucide-react'
import Link from 'next/link'
import ScrollReveal from '@/components/scroll-reveal'

const reasons = [
  { icon: <Award className="w-5 h-5" />, text: 'Strong Manufacturing Industry Experience' },
  { icon: <TrendingUp className="w-5 h-5" />, text: 'Lean Six Sigma Master Black Belt' },
  { icon: <Lightbulb className="w-5 h-5" />, text: 'AI & Smart Manufacturing Expertise' },
  { icon: <Users className="w-5 h-5" />, text: 'Data-Driven Operational Approach' },
  { icon: <TrendingUp className="w-5 h-5" />, text: 'Focus on Measurable Industrial Results' },
  { icon: <Lightbulb className="w-5 h-5" />, text: 'Industry 5.0 Vision' },
  { icon: <Users className="w-5 h-5" />, text: 'Real Manufacturing Transformation Experience' },
  { icon: <Award className="w-5 h-5" />, text: 'Human-Centered Operational Philosophy' },
]

export default function ResumeDownload() {
  return (
    <section id="download" className="py-20 lg:py-28 bg-[#f7fafc]">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#1a365d] to-[#2c5282] rounded-3xl p-8 lg:p-16 text-white text-center relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-[0.05]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />

              <div className="relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-10 h-10 text-[#f6ad55]" />
                </div>

                <h2 className="text-3xl lg:text-5xl font-bold font-display mb-4">
                  Download Resume / CV
                </h2>
                <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                  Download the complete professional resume to explore detailed experience, technical expertise, 
                  certifications, projects, and industrial transformation achievements.
                </p>

                <motion.a
                  href="/resume-ahmad-bin-sadiq.pdf"
                  download
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-white text-[#1a365d] font-bold text-lg hover:bg-[#f7fafc] hover:shadow-xl transition-all duration-300 mb-12"
                >
                  <Download className="w-6 h-6" />
                  Download CV
                </motion.a>

                <div className="border-t border-white/20 pt-8">
                  <h3 className="text-xl font-bold mb-6">Why Work With Me?</h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {reasons.map((reason, index) => (
                      <motion.div
                        key={reason.text}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05, duration: 0.4 }}
                        className="flex items-center gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-sm"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#f6ad55]/20 flex items-center justify-center text-[#f6ad55] flex-shrink-0">
                          {reason.icon}
                        </div>
                        <span className="text-sm font-semibold text-left">{reason.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/20">
                  <p className="text-white/70 text-sm mb-6">
                    Let&apos;s build the future of manufacturing together. Whether your organization wants to 
                    improve OEE, reduce manufacturing cost, implement Lean systems, deploy AI in manufacturing, 
                    build smart factory systems, optimize production operations, or digitally transform industrial processes.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#f6ad55] text-white font-bold hover:bg-[#ed8936] transition-colors duration-300"
                    >
                      Schedule Consultation
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 text-white font-bold border-2 border-white/30 hover:bg-white/20 transition-colors duration-300"
                    >
                      Contact Me
                    </Link>
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
