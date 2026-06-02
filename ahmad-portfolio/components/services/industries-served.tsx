'use client'

import { motion } from 'framer-motion'
import { Building2, Circle, Box, Shirt, FileText, Factory, Leaf, FlaskConical } from 'lucide-react'
import ScrollReveal from '@/components/scroll-reveal'
import SectionHeader from '@/components/section-header'

const industries = [
  { icon: <Circle className="w-6 h-6" />, name: 'Tyre Manufacturing', color: 'bg-[#3182ce]/10 text-[#3182ce]' },
  { icon: <Box className="w-6 h-6" />, name: 'Packaging & Corrugated Industry', color: 'bg-[#ed8936]/10 text-[#ed8936]' },
  { icon: <Shirt className="w-6 h-6" />, name: 'Textile & Garments', color: 'bg-[#38a169]/10 text-[#38a169]' },
  { icon: <FileText className="w-6 h-6" />, name: 'Paper Manufacturing', color: 'bg-[#805ad5]/10 text-[#805ad5]' },
  { icon: <Factory className="w-6 h-6" />, name: 'Industrial Operations', color: 'bg-[#38b2ac]/10 text-[#38b2ac]' },
  { icon: <Building2 className="w-6 h-6" />, name: 'Smart Manufacturing', color: 'bg-[#e53e3e]/10 text-[#e53e3e]' },
  { icon: <Leaf className="w-6 h-6" />, name: 'Sustainability & Decarbonization', color: 'bg-[#38a169]/10 text-[#38a169]' },
  { icon: <FlaskConical className="w-6 h-6" />, name: 'Process Industries', color: 'bg-[#3182ce]/10 text-[#3182ce]' },
]

export default function IndustriesServed() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Industries Served"
          title="Expertise Across Diverse Sectors"
          subtitle="Delivering customized solutions for multiple manufacturing industries"
          icon={<Building2 className="w-4 h-4" />}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {industries.map((industry, index) => (
            <ScrollReveal key={industry.name} delay={index * 0.05}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-[#f7fafc] rounded-2xl p-6 border border-[#e2e8f0] hover:shadow-lg transition-all duration-300 flex items-center gap-4"
              >
                <div className={`w-12 h-12 rounded-xl ${industry.color} flex items-center justify-center flex-shrink-0`}>
                  {industry.icon}
                </div>
                <span className="font-semibold text-[#1a365d] text-sm">{industry.name}</span>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
