'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Building2, ArrowRight } from 'lucide-react'
import SectionHeader from '@/components/section-header'
import ScrollReveal from '@/components/scroll-reveal'

const industries = [
  {
    title: 'Tyre Manufacturing',
    description: 'Production optimization, OEE improvement, and smart factory development for tyre production operations.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=300&fit=crop',
  },
  {
    title: 'Packaging & Corrugated',
    description: 'Intelligent solutions for corrugated packaging manufacturing with waste reduction and efficiency optimization.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop',
  },
  {
    title: 'Textile & Garments',
    description: 'Lean manufacturing and production optimization for textile operations with workflow improvement.',
    image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&h=300&fit=crop',
  },
  {
    title: 'Paper Industry',
    description: 'Process optimization and smart manufacturing solutions for paper mills and production facilities.',
    image: 'https://images.unsplash.com/photo-1603484476271-a54f4251d5?w=400&h=300&fit=crop',
  },
  {
    title: 'Smart Manufacturing',
    description: 'Industry 4.0 and Industry 5.0 transformation with AI, automation, and connected operations.',
    image: 'https://images.unsplash.com/photo-1565514020176-db9de8fd5f8e?w=400&h=300&fit=crop',
  },
]

export default function IndustriesPreview() {
  return (
    <section className="py-20 lg:py-28 bg-[#f7fafc]">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Industries Served"
          title="Expertise Across Multiple Industries"
          subtitle="Delivering customized manufacturing transformation solutions across diverse industrial sectors"
          icon={<Building2 className="w-4 h-4" />}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {industries.map((industry, index) => (
            <ScrollReveal key={industry.title} delay={index * 0.1}>
              <Link href="/industries">
                <motion.div
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group relative h-[280px] rounded-2xl overflow-hidden cursor-pointer shadow-lg"
                >
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/95 via-[#1a365d]/50 to-transparent transition-all duration-300 group-hover:from-[#1a365d]/98 group-hover:via-[#1a365d]/60" />

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#f6ad55] transition-colors">
                      {industry.title}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      {industry.description}
                    </p>
                    <div className="flex items-center gap-2 mt-3 text-[#f6ad55] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm font-semibold">Explore</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
