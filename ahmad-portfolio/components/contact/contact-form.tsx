'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, User, Mail, Building2, MessageSquare, CheckCircle, ArrowRight, Calendar, MessageCircle } from 'lucide-react'
import ScrollReveal from '@/components/scroll-reveal'
import SectionHeader from '@/components/section-header'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', company: '', subject: '', message: '' })

    // Reset after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section className="py-20 lg:py-28 bg-[#f7fafc]">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            label="Let's Start the Conversation"
            title="Send a Message"
            subtitle="Every inquiry is approached with professionalism, strategic thinking, operational understanding, data-driven problem solving, and long-term transformation mindset."
            icon={<MessageSquare className="w-4 h-4" />}
          />

          <ScrollReveal>
            <div className="bg-white rounded-3xl p-8 lg:p-12 border border-[#e2e8f0] shadow-sm">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 rounded-full bg-[#38a169]/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-[#38a169]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1a365d] mb-2">Message Sent Successfully!</h3>
                  <p className="text-[#4a5568]">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-[#1a365d] mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#718096]" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-[#e2e8f0] bg-[#f7fafc] text-[#1a202c] font-medium focus:border-[#1a365d] focus:bg-white focus:outline-none transition-all duration-200"
                          placeholder="Your name"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-[#1a365d] mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#718096]" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-[#e2e8f0] bg-[#f7fafc] text-[#1a202c] font-medium focus:border-[#1a365d] focus:bg-white focus:outline-none transition-all duration-200"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-[#1a365d] mb-2">
                        Company
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#718096]" />
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-[#e2e8f0] bg-[#f7fafc] text-[#1a202c] font-medium focus:border-[#1a365d] focus:bg-white focus:outline-none transition-all duration-200"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-[#1a365d] mb-2">
                        Subject *
                      </label>
                      <div className="relative">
                        <ArrowRight className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#718096]" />
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-[#e2e8f0] bg-[#f7fafc] text-[#1a202c] font-medium focus:border-[#1a365d] focus:bg-white focus:outline-none transition-all duration-200 appearance-none cursor-pointer"
                        >
                          <option value="">Select a topic</option>
                          <option value="ai-manufacturing">AI for Manufacturing</option>
                          <option value="lean-six-sigma">Lean Six Sigma Transformation</option>
                          <option value="smart-factory">Smart Factory Solutions</option>
                          <option value="oee-improvement">OEE Improvement</option>
                          <option value="kpi-dashboards">KPI Dashboards & Analytics</option>
                          <option value="predictive-maintenance">Predictive Maintenance</option>
                          <option value="cost-reduction">Cost Reduction</option>
                          <option value="digital-transformation">Digital Transformation</option>
                          <option value="consultation">General Consultation</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-[#1a365d] mb-2">
                      Message *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-[#718096]" />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-[#e2e8f0] bg-[#f7fafc] text-[#1a202c] font-medium focus:border-[#1a365d] focus:bg-white focus:outline-none transition-all duration-200 resize-none"
                        placeholder="Tell me about your manufacturing challenges and goals..."
                      />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl btn-primary text-white font-bold text-lg disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </motion.button>

                    <a
                      href="https://calendly.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl btn-secondary font-bold text-lg"
                    >
                      <Calendar className="w-5 h-5" />
                      Schedule Consultation
                    </a>
                  </div>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
