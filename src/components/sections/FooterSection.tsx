'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { MessageCircle, Mail, MapPin, Clock, Sparkles } from 'lucide-react'
import { contactConfig } from '@/lib/contactConfig'

export default function FooterSection() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi Amrise Studio! I'm ready to start my digital project. Let's discuss the next steps.")
    window.open(`https://wa.me/${contactConfig.whatsapp}?text=${message}`, '_self')
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">Built for Ambitious Businesses</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let&apos;s Build Your{' '}
              <span className="text-yellow-300">Digital Growth System</span>
            </h2>
            
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              From branding and websites to admin panels and business setup, Amrise Studio helps you launch with clarity and confidence.
            </p>
            
            <Button 
              onClick={handleWhatsAppClick}
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full hover-lift"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Talk to Amrise Studio
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer Content */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Amrise Studio</h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Amrise Studio is a freelancing digital service studio helping small businesses, boutiques, clinics, startups, and local brands grow online with strategy-led execution.
              </p>
                          <div className="flex gap-4">
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=amrisestudio09@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
              </a>
                              <a 
                  href={`https://wa.me/${contactConfig.whatsapp}`}
                  target="_self"
                  className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
            </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="cursor-pointer hover:gradient-text transition-all duration-300 hover:translate-x-1">Website Design</li>
                <li className="cursor-pointer hover:gradient-text transition-all duration-300 hover:translate-x-1">Landing Pages</li>
                <li className="cursor-pointer hover:gradient-text transition-all duration-300 hover:translate-x-1">Branding</li>
                <li className="cursor-pointer hover:gradient-text transition-all duration-300 hover:translate-x-1">Social Media Management</li>
                <li className="cursor-pointer hover:gradient-text transition-all duration-300 hover:translate-x-1">Product Listing</li>
                <li className="cursor-pointer hover:gradient-text transition-all duration-300 hover:translate-x-1">Portfolio Websites</li>
                <li className="cursor-pointer hover:gradient-text transition-all duration-300 hover:translate-x-1">Admin Panels</li>
                <li className="cursor-pointer hover:gradient-text transition-all duration-300 hover:translate-x-1">Business Digital Setup</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3 text-gray-300">
                <a
                  href={`tel:${contactConfig.phone}`}
                  className="flex items-center gap-3 hover:text-purple-300 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-purple-400 flex-shrink-0">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <span>{contactConfig.phone}</span>
                </a>
                <a
                  href={`https://wa.me/${contactConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-purple-300 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=amrisestudio09@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-purple-300 transition-colors"
                >
                  <Mail className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span>{contactConfig.email}</span>
                </a>
                <a
                  href="https://www.instagram.com/amrisestudio09/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-purple-300 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-purple-400 flex-shrink-0">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                  <span>Instagram</span>
                </a>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span>{contactConfig.businessHours}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex justify-center items-center">
              <p className="text-gray-400 text-sm">
                © 2026 Amrise Studio. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 