'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Phone, FileText, Sparkles, TrendingUp, Users, Zap } from 'lucide-react'
import { openWhatsApp } from '@/lib/openWhatsApp'

export default function HeroSection() {
  const handleWhatsAppClick = () => {
    openWhatsApp("Hi Amrise Studio! I want to discuss digital services for my business. Can you help me choose the right package?")
  }

  const handlePricingClick = () => {
    document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-purple-200 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-700">Freelancing Digital Service Studio for Growing Brands</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Build a Brand That Looks{' '}
            <span className="gradient-text">Trustworthy & Premium</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Amrise Studio helps small businesses, boutiques, clinics, startups, and local brands launch a complete digital presence.
            <span className="font-semibold text-purple-600"> Modern execution, clear communication, and results-focused delivery.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Button 
            onClick={handleWhatsAppClick}
            size="lg" 
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-full hover-lift"
          >
            <Phone className="w-5 h-5 mr-2" />
            Start on WhatsApp
          </Button>
          
          <Button 
            onClick={handlePricingClick}
            variant="outline" 
            size="lg" 
            className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-full hover-lift"
          >
            <FileText className="w-5 h-5 mr-2" />
            Explore Packages
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="p-2 bg-purple-100 rounded-lg">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-gray-900">7-Day Delivery</h3>
              <p className="text-sm text-gray-600">Fast launch-ready execution</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="p-2 bg-green-100 rounded-lg">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-gray-900">Client-Focused Delivery</h3>
              <p className="text-sm text-gray-600">Built around business goals</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Zap className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-gray-900">Unlimited Revisions</h3>
              <p className="text-sm text-gray-600">Refined until it feels right</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 