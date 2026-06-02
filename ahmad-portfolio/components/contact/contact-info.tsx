'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, MapPin, Briefcase, Building2, Brain, BarChart3, Factory, Gauge, Wrench, DollarSign, Award, Monitor, Cpu } from 'lucide-react'
import ScrollReveal from '@/components/scroll-reveal'
import SectionHeader from '@/components/section-header'

const contactDetails = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: 'Email',
    value: 'ahmadbinsadiq@gmail.com',
    href: 'mailto:ahmadbinsadiq@gmail.com',
    color: 'bg-[#ed8936]/10 text-[#ed8936]',
  },
  {
    icon: <Linkedin className="w-6 h-6" />,
    title: 'LinkedIn',
    value: 'linkedin.com/in/ahmad-bin-sadiq',
    href: 'https://linkedin.com/in/ahmad-bin-sadiq',
    color: 'bg-[#3182ce]/10 text-[#3182ce]',
  },
  {
    icon: <Github className="w-6 h-6" />,
    title: 'GitHub',
    value: 'github.com/ahmadbinsadiq',
    href: 'https://github.com/ahmadbinsadiq',
    color: 'bg-[#805ad5]/10 text-[#805ad5]',
  },
]

const consultingAreas = [
  { icon: <Brain className="w-5 h-5" />, title: 'AI for Manufacturing', color: 'bg-[#3182ce]/10 text-[#3182ce]' },
  { icon: <Award className="w-5 h-5" />, title: 'Lean Six Sigma Transformation', color: 'bg-[#ed8936]/10 text-[#ed8936]' },
  { icon: <Factory className="w-5 h-5" />, title: 'Smart Factory Solutions', color: 'bg-[#38a169]/10 text-[#38a169]' },
  { icon: <Gauge className="w-5 h-5" />, title: 'Production Optimization', color: 'bg-[#805ad5]/10 text-[#805ad5]' },
  { icon: <BarChart3 className="w-5 h-5" />, title: 'OEE Improvement', color: 'bg-[#38b2ac]/10 text-[#38b2ac]' },
  { icon: <Monitor className="w-5 h-5" />, title: 'KPI Dashboards & Analytics', color: 'bg-[#e53e3e]/10 text-[#e53e3e]' },
  { icon: <Wrench className="w-5 h-5" />, title: 'Predictive Maintenance Systems', color: 'bg-[#3182ce]/10 text-[#3182ce]' },
  { icon: <DollarSign className="w-5 h-5" />, title: 'Cost Reduction Strategies', color: 'bg-[#ed8936]/10 text-[#ed8936]' },
  { icon: <Award className="w-5 h-5" />, title: 'Operational Excellence', color: 'bg-[#38a169]/10 text-[#38a169]' },
  { icon: <Cpu className="w-5 h-5" />, title: 'Industry 4.0 & Industry 5.0', color: 'bg-[#805ad5]/10 text-[#805ad5]' },
  { icon: <Monitor className="w-5 h-5" />, title: 'Manufacturing Digital Transformation', color: 'bg-[#38b2ac]/10 text-[#38b2ac]' },
  { icon: <Briefcase className="w-5 h-5" />, title: 'Industrial Engineering Solutions', color: 'bg-[#e53e3e]/10 text-[#e53e3e]' },
]

const industries = [
  { icon: <Building2 className="w-5 h-5" />, title: 'Tyre Manufacturing', color: 'bg-[#3182ce]/10 text-[#3182ce]' },
  { icon: <Building2 className="w-5 h-5" />, title: 'Packaging & Corrugated Industry', color: 'bg-[#ed8936]/10 text-[#ed8936]' },
  { icon: <Building2 className="w-5 h-5" />, title: 'Textile & Garments', color: 'bg-[#38a169]/10 text-[#38a169]' },
  { icon: <Building2 className="w-5 h-5" />, title: 'Paper Manufacturing', color: 'bg-[#805ad5]/10 text-[#805ad5]' },
  { icon: <Building2 className="w-5 h-5" />, title: 'Industrial Operations', color: 'bg-[#38b2ac]/10 text-[#38b2ac]' },
  { icon: <Building2 className="w-5 h-5" />, title: 'Smart Manufacturing', color: 'bg-[#e53e3e]/10 text-[#e53e3e]' },
  { icon: <Building2 className="w-5 h-5" />, title: 'Sustainability & Decarbonization', color: 'bg-[#3182ce]/10 text-[#3182ce]' },
]

export default function ContactInfo() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Contact Information */}
          <ScrollReveal>
            <div className="bg-white rounded-3xl p-8 lg:p-12 border border-[#e2e8f0] shadow-sm mb-12">
              <SectionHeader
                label="Get in Touch"
                title="Contact Information"
                subtitle="Manufacturing Transformation Consultant | AI-Powered Manufacturing Strategist | Lean Six Sigma Master Black Belt"
                icon={<Mail className="w-4 h-4" />}
              />

              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {contactDetails.map((contact, index) => (
                  <motion.a
                    key={contact.title}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="flex flex-col items-center text-center p-6 rounded-2xl bg-[#f7fafc] border border-[#e2e8f0] hover:shadow-lg transition-all duration-300"
                  >
                    <div className={`w-14 h-14 rounded-xl ${contact.color} flex items-center justify-center mb-4`}>
                      {contact.icon}
                    </div>
                    <h3 className="font-bold text-[#1a365d] mb-1">{contact.title}</h3>
                    <p className="text-sm text-[#4a5568]">{contact.value}</p>
                  </motion.a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Consulting Areas */}
          <ScrollReveal delay={0.1}>
            <div className="bg-white rounded-3xl p-8 lg:p-12 border border-[#e2e8f0] shadow-sm mb-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ed8936]/10 text-[#c05621] text-sm font-semibold mb-4 border border-[#ed8936]/20">
                  <Briefcase className="w-4 h-4" />
                  Consulting Areas
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-[#0f2744] mb-2">Services Available For</h2>
                <p className="text-[#4a5568]">Comprehensive manufacturing transformation solutions</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {consultingAreas.map((area, index) => (
                  <motion.div
                    key={area.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03, duration: 0.4 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-[#f7fafc] border border-[#e2e8f0]"
                  >
                    <div className={`w-10 h-10 rounded-lg ${area.color} flex items-center justify-center flex-shrink-0`}>
                      {area.icon}
                    </div>
                    <span className="text-sm font-semibold text-[#4a5568]">{area.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Industries Supported */}
          <ScrollReveal delay={0.1}>
            <div className="bg-white rounded-3xl p-8 lg:p-12 border border-[#e2e8f0] shadow-sm">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3182ce]/10 text-[#3182ce] text-sm font-semibold mb-4 border border-[#3182ce]/20">
                  <Building2 className="w-4 h-4" />
                  Industries Supported
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-[#0f2744] mb-2">Industries Served</h2>
                <p className="text-[#4a5568]">Expertise across multiple manufacturing sectors</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {industries.map((industry, index) => (
                  <motion.div
                    key={industry.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-[#f7fafc] border border-[#e2e8f0]"
                  >
                    <div className={`w-10 h-10 rounded-lg ${industry.color} flex items-center justify-center flex-shrink-0`}>
                      {industry.icon}
                    </div>
                    <span className="text-sm font-semibold text-[#4a5568]">{industry.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
