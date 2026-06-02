'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Award, Calendar, FolderOpen, Brain, TrendingUp, Coins } from 'lucide-react'
import AnimatedCounter from '@/components/animated-counter'

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-72px)] flex items-center overflow-hidden gradient-light">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a365d' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container-custom px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ed8936]/10 text-[#c05621] text-sm font-semibold mb-6 border border-[#ed8936]/20"
            >
              <Award className="w-4 h-4" />
              Gold Medalist Industrial Engineer
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-display text-[#0f2744] leading-[1.1] mb-6"
            >
              AI-Powered
              <br />
              <span className="text-gradient">Manufacturing</span>
              <br />
              Consultant
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg text-[#4a5568] leading-relaxed mb-8 max-w-xl"
            >
              Lean Six Sigma Master Black Belt | Industrial Engineer | Smart Factory & 
              Operational Excellence Specialist helping manufacturing industries reduce cost, 
              improve OEE, optimize production systems, and digitally transform operations 
              through AI, Lean Manufacturing, and Industry 5.0 solutions.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid grid-cols-3 gap-4 mb-8"
            >
              <div className="bg-white rounded-xl p-4 shadow-md border border-[#e2e8f0] card-hover">
                <div className="text-2xl lg:text-3xl font-bold font-display text-[#1a365d]">
                  <AnimatedCounter end={100} suffix="M+" />
                </div>
                <div className="text-xs text-[#718096] uppercase tracking-wider mt-1">PKR Impact</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md border border-[#e2e8f0] card-hover">
                <div className="text-2xl lg:text-3xl font-bold font-display text-[#1a365d]">
                  <AnimatedCounter end={18} suffix="%" />
                </div>
                <div className="text-xs text-[#718096] uppercase tracking-wider mt-1">OEE Boost</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md border border-[#e2e8f0] card-hover">
                <div className="text-2xl lg:text-3xl font-bold font-display text-[#1a365d]">
                  <AnimatedCounter end={30} suffix="+" />
                </div>
                <div className="text-xs text-[#718096] uppercase tracking-wider mt-1">AI Projects</div>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl btn-primary text-white font-semibold"
              >
                <Calendar className="w-5 h-5" />
                Book Consultation
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl btn-secondary font-semibold"
              >
                <FolderOpen className="w-5 h-5" />
                View Projects
              </Link>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="relative z-10 rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=500&fit=crop"
                  alt="Smart Manufacturing"
                  className="w-full h-auto object-cover"
                />
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -top-4 -left-8 z-20 bg-white rounded-xl p-4 shadow-xl border border-[#e2e8f0] animate-float-delay-1"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#3182ce]/10 flex items-center justify-center text-[#3182ce]">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-[#1a365d]">OEE +18%</div>
                    <div className="text-xs text-[#718096]">Performance Boost</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                className="absolute top-1/3 -right-8 z-20 bg-white rounded-xl p-4 shadow-xl border border-[#e2e8f0] animate-float-delay-2"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#ed8936]/10 flex items-center justify-center text-[#ed8936]">
                    <Brain className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-[#1a365d]">AI Powered</div>
                    <div className="text-xs text-[#718096]">Smart Analytics</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -bottom-4 left-8 z-20 bg-white rounded-xl p-4 shadow-xl border border-[#e2e8f0] animate-float-delay-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#38a169]/10 flex items-center justify-center text-[#38a169]">
                    <Coins className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-[#1a365d]">100M+ PKR</div>
                    <div className="text-xs text-[#718096]">Value Created</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
