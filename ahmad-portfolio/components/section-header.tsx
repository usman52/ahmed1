'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionHeaderProps {
  label: string
  title: string
  subtitle?: string
  icon?: ReactNode
  light?: boolean
  className?: string
}

export default function SectionHeader({ 
  label, 
  title, 
  subtitle,
  icon,
  light = false,
  className = ''
}: SectionHeaderProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={`text-center max-w-3xl mx-auto mb-16 ${className}`}
    >
      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-4 ${
        light 
          ? 'bg-white/10 text-[#f6ad55] border border-white/20' 
          : 'bg-[#ed8936]/10 text-[#c05621] border border-[#ed8936]/20'
      }`}>
        {icon}
        {label}
      </div>
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-4 leading-tight ${
        light ? 'text-white' : 'text-[#0f2744]'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg leading-relaxed ${
          light ? 'text-white/80' : 'text-[#4a5568]'
        }`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
