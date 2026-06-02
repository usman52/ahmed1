'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Factory, Linkedin, Github, Mail, ArrowUp } from 'lucide-react'

const footerLinks = {
  services: [
    { label: 'AI for Manufacturing', href: '/services' },
    { label: 'Lean Six Sigma', href: '/services' },
    { label: 'OEE Improvement', href: '/services' },
    { label: 'Smart Factory', href: '/services' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Industries', href: '/industries' },
    { label: 'Certifications', href: '/certifications' },
  ],
  contact: [
    { label: 'Schedule Consultation', href: '/contact' },
    { label: 'Download Resume', href: '/resume' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/ahmad-bin-sadiq' },
    { label: 'GitHub', href: 'https://github.com/ahmadbinsadiq' },
  ],
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#0f2744] text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center text-white">
                <Factory className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl font-display">Ahmad Bin Sadiq</span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              AI-Powered Manufacturing Consultant | Lean Six Sigma Master Black Belt | 
              Industrial Engineer | Smart Factory & Operational Excellence Specialist
            </p>
            <div className="flex gap-3">
              <motion.a
                whileHover={{ scale: 1.1, y: -3 }}
                href="https://linkedin.com/in/ahmad-bin-sadiq"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-[#ed8936] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -3 }}
                href="https://github.com/ahmadbinsadiq"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-[#ed8936] transition-colors"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -3 }}
                href="mailto:ahmadbinsadiq@gmail.com"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-[#ed8936] transition-colors"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-[#f6ad55] mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-white/70 hover:text-[#f6ad55] text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-[#f6ad55] mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-white/70 hover:text-[#f6ad55] text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-[#f6ad55] mb-4">Contact</h4>
            <ul className="space-y-3">
              {footerLinks.contact.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-white/70 hover:text-[#f6ad55] text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm text-center sm:text-left">
            © 2024 Ahmad Bin Sadiq. All rights reserved. Built for Industry 5.0 Transformation.
          </p>
          <motion.button
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
