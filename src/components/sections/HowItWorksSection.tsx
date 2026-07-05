'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Search, Palette, TrendingUp, ArrowRight } from 'lucide-react'
import { contactConfig } from '@/lib/contactConfig'

const steps = [
  {
    step: '01',
    title: 'Discovery & Strategy',
    description: 'We understand your business goals, audience, and service priorities to define the right digital roadmap.',
    icon: Search,
    color: 'from-blue-500 to-cyan-500',
    details: [
      'Business requirement call',
      'Target audience clarity',
      'Service scope planning',
      'Transparent timeline and pricing'
    ]
  },
  {
    step: '02',
    title: 'Design & Build',
    description: 'Amrise Studio creates your brand assets, website pages, and digital systems with a clean and conversion-focused approach.',
    icon: Palette,
    color: 'from-purple-500 to-pink-500',
    details: [
      'Website and landing page design',
      'Branding and visual consistency',
      'Social media-ready creatives',
      'Review-driven quality checks'
    ]
  },
  {
    step: '03',
    title: 'Launch & Support',
    description: 'We help you go live confidently and support your team with practical guidance for smooth daily operations.',
    icon: TrendingUp,
    color: 'from-green-500 to-emerald-500',
    details: [
      'Business digital setup',
      'Product listing and structure',
      'Admin panel handover',
      'Post-launch improvement support'
    ]
  }
]

export default function HowItWorksSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A clear 3-step workflow to move your business from offline or outdated to modern and trustworthy online.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 transform -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <Card className="hover-lift bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-sm font-semibold text-purple-600 mb-2">STEP {step.step}</div>
                    <CardTitle className="text-2xl font-bold text-gray-900">{step.title}</CardTitle>
                    <CardDescription className="text-gray-600 text-base leading-relaxed">
                      {step.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center gap-3 text-sm text-gray-700">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color}`} />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-6">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-purple-600" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-6">
              Work with Amrise Studio to launch a digital presence that attracts the right customers and builds long-term trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                              <button 
                  onClick={() => {
                    const message = encodeURIComponent("Hi Amrise Studio! I am ready to start my project. Can we schedule a quick consultation?")
                    window.open(`https://wa.me/${contactConfig.whatsapp}?text=${message}`, '_self')
                  }}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover-lift"
                >
                  Start Your Project
                </button>
              <button 
                onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-full font-semibold hover-lift"
              >
                View Packages
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 