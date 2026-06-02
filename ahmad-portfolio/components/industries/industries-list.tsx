'use client'

import { motion } from 'framer-motion'
import { Circle, Box, Shirt, FileText, Factory, Cpu, Leaf, ArrowRight, CheckCircle } from 'lucide-react'
import ScrollReveal from '@/components/scroll-reveal'
import SectionHeader from '@/components/section-header'

const industries = [
  {
    icon: <Circle className="w-8 h-8" />,
    title: 'Tyre Manufacturing Industry',
    subtitle: 'Smart Manufacturing & Operational Excellence for Tyre Production',
    color: 'bg-[#3182ce]/10 text-[#3182ce]',
    focusAreas: [
      'Tire curing process optimization',
      'Production flow balancing',
      'Predictive maintenance systems',
      'Real-time production visibility',
      'Waste reduction initiatives',
      'Manufacturing analytics dashboards',
    ],
    businessGoals: [
      'Improve productivity',
      'Reduce operational losses',
      'Increase machine reliability',
      'Optimize manpower utilization',
      'Enhance operational control',
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=350&fit=crop',
  },
  {
    icon: <Box className="w-8 h-8" />,
    title: 'Packaging & Corrugated Industry',
    subtitle: 'Intelligent Solutions for Packaging Manufacturing Operations',
    color: 'bg-[#ed8936]/10 text-[#ed8936]',
    focusAreas: [
      'Corrugation process optimization',
      'Production scheduling improvement',
      'Waste reduction systems',
      'Plant performance monitoring',
      'OEE optimization',
      'Cost analysis systems',
      'Workflow balancing',
      'Real-time KPI dashboards',
    ],
    businessGoals: [
      'Reduced paper waste',
      'Improved production efficiency',
      'Better machine utilization',
      'Enhanced operational visibility',
      'Lower manufacturing cost',
    ],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=350&fit=crop',
  },
  {
    icon: <Shirt className="w-8 h-8" />,
    title: 'Textile & Garments Industry',
    subtitle: 'Lean Manufacturing & Production Optimization for Textile Operations',
    color: 'bg-[#38a169]/10 text-[#38a169]',
    focusAreas: [
      'Lean transformation',
      'Production balancing',
      'Process standardization',
      'Industrial engineering solutions',
      'Time & motion studies',
      'Productivity improvement',
      'Workflow optimization',
      'Manufacturing KPI systems',
    ],
    businessGoals: [
      'Reduced operational waste',
      'Improved labor productivity',
      'Better production planning',
      'Enhanced process efficiency',
      'Increased throughput',
    ],
    image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&h=350&fit=crop',
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: 'Paper Manufacturing Industry',
    subtitle: 'Process Optimization & Smart Manufacturing for Paper Mills',
    color: 'bg-[#805ad5]/10 text-[#805ad5]',
    focusAreas: [
      'Process efficiency optimization',
      'Energy utilization monitoring',
      'Production analytics',
      'Maintenance optimization',
      'Cost reduction systems',
      'Operational KPI tracking',
      'Lean Manufacturing implementation',
    ],
    businessGoals: [
      'Improved production stability',
      'Better operational control',
      'Enhanced resource utilization',
      'Reduced downtime',
      'Improved cost visibility',
    ],
    image: 'https://images.unsplash.com/photo-1603484476271-a54f4251d5?w=600&h=350&fit=crop',
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: 'Smart Manufacturing & Industry 5.0',
    subtitle: 'Building Intelligent & Future-Ready Manufacturing Systems',
    color: 'bg-[#38b2ac]/10 text-[#38b2ac]',
    focusAreas: [
      'AI for Manufacturing',
      'Smart Factory Systems',
      'Industrial Analytics',
      'Real-Time Monitoring',
      'Digital Manufacturing Transformation',
      'KPI Automation',
      'Connected Operations',
      'Human-Centered Smart Systems',
    ],
    businessGoals: [
      'Real-time decision-making',
      'Improved operational intelligence',
      'Faster problem resolution',
      'Better production visibility',
      'Future-ready manufacturing systems',
    ],
    image: 'https://images.unsplash.com/photo-1565514020176-db9de8fd5f8e?w=600&h=350&fit=crop',
  },
  {
    icon: <Leaf className="w-8 h-8" />,
    title: 'Sustainability & Decarbonization',
    subtitle: 'Sustainable Manufacturing & Operational Efficiency',
    color: 'bg-[#38a169]/10 text-[#38a169]',
    focusAreas: [
      'Energy optimization',
      'Resource efficiency',
      'Waste reduction',
      'Sustainable operations',
      'Manufacturing efficiency improvement',
      'Environmental performance analytics',
      'Decarbonization support systems',
    ],
    businessGoals: [
      'Reduced energy consumption',
      'Improved sustainability performance',
      'Lower operational waste',
      'Better environmental efficiency',
      'Sustainable manufacturing growth',
    ],
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=350&fit=crop',
  },
]

export default function IndustriesList() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Industries Served"
          title="Specialized Solutions for Every Sector"
          subtitle="Tailored manufacturing transformation solutions designed for industry-specific challenges"
          icon={<Factory className="w-4 h-4" />}
        />

        <div className="space-y-12 lg:space-y-20 max-w-6xl mx-auto">
          {industries.map((industry, index) => (
            <ScrollReveal key={industry.title} delay={0.05}>
              <motion.div
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl border border-[#e2e8f0] shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image Side */}
                  <div className={`relative h-64 lg:h-auto overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/70 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl ${industry.color} text-sm font-bold mb-3`}>
                        {industry.icon}
                        {industry.title}
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className={`p-6 lg:p-10 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <h3 className="text-2xl lg:text-3xl font-bold text-[#1a365d] mb-2">{industry.title}</h3>
                    <p className="text-[#4a5568] mb-6">{industry.subtitle}</p>

                    <div className="grid sm:grid-cols-2 gap-6">
                      {/* Key Focus Areas */}
                      <div>
                        <h4 className="text-sm font-bold text-[#1a365d] uppercase tracking-wider mb-3 flex items-center gap-2">
                          <ArrowRight className="w-4 h-4 text-[#ed8936]" />
                          Key Focus Areas
                        </h4>
                        <ul className="space-y-2">
                          {industry.focusAreas.map((area) => (
                            <li key={area} className="text-sm text-[#4a5568] flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-[#3182ce] mt-0.5 flex-shrink-0" />
                              {area}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Business Goals */}
                      <div>
                        <h4 className="text-sm font-bold text-[#1a365d] uppercase tracking-wider mb-3 flex items-center gap-2">
                          <ArrowRight className="w-4 h-4 text-[#38a169]" />
                          Business Goals
                        </h4>
                        <ul className="space-y-2">
                          {industry.businessGoals.map((goal) => (
                            <li key={goal} className="text-sm text-[#4a5568] flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-[#38a169] mt-0.5 flex-shrink-0" />
                              {goal}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
