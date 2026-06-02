'use client'

import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Award, Brain, BarChart3, Factory, Gauge, Wrench, DollarSign, Monitor, CheckCircle, TrendingUp, Clock, Shield, Star, Cpu, Database, Code } from 'lucide-react'
import ScrollReveal from '@/components/scroll-reveal'

const coreExpertise = [
  'Manufacturing Transformation',
  'Lean Manufacturing',
  'AI & Industrial Analytics',
  'OEE Improvement',
  'Production Optimization',
  'Operational Excellence',
  'Smart Manufacturing Systems',
  'KPI Dashboard Development',
  'Cost Reduction Strategies',
  'Predictive Maintenance',
  'Process Optimization',
  'Industrial Engineering Solutions',
]

const achievements = [
  { icon: <TrendingUp className="w-5 h-5" />, text: 'PKR 100M+ Operational Impact Delivered' },
  { icon: <BarChart3 className="w-5 h-5" />, text: '18% OEE Improvement Achieved' },
  { icon: <Clock className="w-5 h-5" />, text: 'Lead Time Reduced from 15 Days to 2 Days' },
  { icon: <Shield className="w-5 h-5" />, text: '25% Reduction in Equipment Breakdowns' },
  { icon: <Cpu className="w-5 h-5" />, text: 'AI-Based Manufacturing Solutions Developed' },
  { icon: <Monitor className="w-5 h-5" />, text: 'Smart KPI & Production Intelligence Systems Implemented' },
  { icon: <Star className="w-5 h-5" />, text: 'Lean Manufacturing Transformation Projects Executed' },
]

const experiences = [
  {
    title: 'Deputy Manager',
    company: 'Servis Tyres',
    description: 'Leading manufacturing optimization, operational excellence, process improvement, and smart manufacturing initiatives.',
    icon: <Factory className="w-5 h-5" />,
  },
  {
    title: 'Industrial Engineering & Operational Excellence',
    company: 'Jahangir Packages Private Limited',
    description: 'Worked on AI-driven operational systems, Lean transformation, production intelligence, and cost optimization projects.',
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    title: 'Industrial Engineering',
    company: 'Style Textile',
    description: 'Focused on Lean Manufacturing, workflow optimization, production balancing, and operational improvement initiatives.',
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    title: 'Research & Sustainability',
    company: 'World Wide Fund for Nature (WWF)',
    description: 'Supported sustainability and industrial decarbonization initiatives.',
    icon: <GraduationCap className="w-5 h-5" />,
  },
]

const certifications = [
  { icon: <Award className="w-5 h-5" />, title: 'Lean Six Sigma Master Black Belt', org: 'Professional Certification' },
  { icon: <Brain className="w-5 h-5" />, title: 'AI Engineering', org: 'IBM' },
  { icon: <Database className="w-5 h-5" />, title: 'Data Science', org: 'IBM' },
  { icon: <BarChart3 className="w-5 h-5" />, title: 'Data Analytics', org: 'Google' },
]

export default function ResumeContent() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Professional Overview */}
          <ScrollReveal>
            <div className="bg-white rounded-3xl p-8 lg:p-12 border border-[#e2e8f0] shadow-sm mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#1a365d]/10 flex items-center justify-center text-[#1a365d]">
                  <Star className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-[#1a365d]">Professional Overview</h2>
              </div>
              <p className="text-[#4a5568] leading-relaxed mb-8">
                Gold Medalist Industrial Engineer with expertise in AI for Manufacturing, Lean Six Sigma, 
                Smart Factory Transformation, Operational Excellence, Production Optimization, Industrial Data Analytics, 
                KPI & Power BI Dashboards, Predictive Maintenance Systems, Manufacturing Intelligence, and 
                Industry 4.0 & Industry 5.0 Solutions. Currently serving as Deputy Manager at Servis Tyres with 
                experience across tyre manufacturing, packaging, textile, sustainability, and industrial transformation projects.
              </p>

              <div className="flex flex-wrap gap-2">
                {coreExpertise.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-[#f7fafc] border border-[#e2e8f0] text-sm font-semibold text-[#4a5568] hover:bg-[#1a365d] hover:text-white transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Key Achievements */}
          <ScrollReveal delay={0.1}>
            <div className="bg-white rounded-3xl p-8 lg:p-12 border border-[#e2e8f0] shadow-sm mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#ed8936]/10 flex items-center justify-center text-[#ed8936]">
                  <Award className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-[#1a365d]">Key Professional Achievements</h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.text}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-[#f7fafc] border border-[#e2e8f0]"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#38a169]/10 flex items-center justify-center text-[#38a169] flex-shrink-0 mt-0.5">
                      {achievement.icon}
                    </div>
                    <span className="text-sm font-semibold text-[#4a5568]">{achievement.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Professional Experience */}
          <ScrollReveal delay={0.1}>
            <div className="bg-white rounded-3xl p-8 lg:p-12 border border-[#e2e8f0] shadow-sm mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#3182ce]/10 flex items-center justify-center text-[#3182ce]">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-[#1a365d]">Professional Experience</h2>
              </div>

              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.company}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="flex items-start gap-4 p-5 rounded-xl bg-[#f7fafc] border border-[#e2e8f0] hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#1a365d]/10 flex items-center justify-center text-[#1a365d] flex-shrink-0">
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1a365d]">{exp.title}</h3>
                      <p className="text-[#ed8936] font-semibold text-sm">{exp.company}</p>
                      <p className="text-[#4a5568] text-sm mt-1">{exp.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Certifications */}
          <ScrollReveal delay={0.1}>
            <div className="bg-white rounded-3xl p-8 lg:p-12 border border-[#e2e8f0] shadow-sm mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#38a169]/10 flex items-center justify-center text-[#38a169]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-[#1a365d]">Certifications</h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    className="flex items-center gap-4 p-5 rounded-xl bg-[#f7fafc] border border-[#e2e8f0]"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#1a365d]/10 flex items-center justify-center text-[#1a365d] flex-shrink-0">
                      {cert.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1a365d] text-sm">{cert.title}</h3>
                      <p className="text-[#718096] text-xs">{cert.org}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Professional Profiles */}
          <ScrollReveal delay={0.1}>
            <div className="bg-white rounded-3xl p-8 lg:p-12 border border-[#e2e8f0] shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#805ad5]/10 flex items-center justify-center text-[#805ad5]">
                  <Code className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-[#1a365d]">Professional Profiles</h2>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <a
                  href="https://linkedin.com/in/ahmad-bin-sadiq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl bg-[#f7fafc] border border-[#e2e8f0] hover:bg-[#1a365d] hover:text-white transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#3182ce]/10 group-hover:bg-white/20 flex items-center justify-center text-[#3182ce] group-hover:text-white transition-colors duration-300">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">LinkedIn</p>
                    <p className="text-xs text-[#718096] group-hover:text-white/70">linkedin.com/in/ahmad-bin-sadiq</p>
                  </div>
                </a>

                <a
                  href="https://github.com/ahmadbinsadiq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl bg-[#f7fafc] border border-[#e2e8f0] hover:bg-[#1a365d] hover:text-white transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#805ad5]/10 group-hover:bg-white/20 flex items-center justify-center text-[#805ad5] group-hover:text-white transition-colors duration-300">
                    <Code className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">GitHub</p>
                    <p className="text-xs text-[#718096] group-hover:text-white/70">github.com/ahmadbinsadiq</p>
                  </div>
                </a>

                <a
                  href="mailto:ahmadbinsadiq@gmail.com"
                  className="flex items-center gap-3 p-4 rounded-xl bg-[#f7fafc] border border-[#e2e8f0] hover:bg-[#1a365d] hover:text-white transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#ed8936]/10 group-hover:bg-white/20 flex items-center justify-center text-[#ed8936] group-hover:text-white transition-colors duration-300">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Email</p>
                    <p className="text-xs text-[#718096] group-hover:text-white/70">ahmadbinsadiq@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
