'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Check, Star, Zap, Crown, MessageCircle, Instagram, Globe, Palette } from 'lucide-react'
import { contactConfig } from '@/lib/contactConfig'

const packages = [
  {
    name: 'Starter',
    price: '₹2,999',
    originalPrice: null,
    description: 'Perfect for freelancers and small businesses launching their first digital presence',
    icon: Star,
    color: 'from-blue-500 to-cyan-500',
    features: [
      'Single Landing Page',
      'Contact Form Integration',
      'WhatsApp Integration',
      'Basic Branding Setup',
      '1 Revision Round',
      'Mobile Responsive Design'
    ],
    popular: false
  },
  {
    name: 'Business',
    price: '₹5,999',
    originalPrice: null,
    description: 'Ideal for growing businesses needing a complete website with professional features',
    icon: Zap,
    color: 'from-purple-500 to-pink-500',
    features: [
      'Multi-page Website (3-5 pages)',
      'Professional Branding Setup',
      'Basic SEO Configuration',
      'Contact Form Integration',
      'WhatsApp Integration',
      '2 Revision Rounds',
      'Priority Support',
      'Mobile Responsive Design'
    ],
    popular: true
  },
  {
    name: 'Premium',
    price: '₹9,999',
    originalPrice: null,
    description: 'Complete digital solution for established businesses and startups needing advanced features',
    icon: Crown,
    color: 'from-orange-500 to-red-500',
    features: [
      'Full Business Website',
      'Admin Dashboard (Basic CRUD)',
      'Contact & Lead Management',
      'Blog Setup',
      'WhatsApp Integration',
      'Mobile Responsive Design',
      'Basic SEO Setup',
      '30 Days Support',
      '3 Revision Rounds'
    ],
    popular: false
  }
]

export default function PackagesSection() {
  const handleWhatsAppClick = (packageName: string) => {
    const message = encodeURIComponent(`Hi Amrise Studio! I'm interested in the ${packageName} package. Can you share deliverables and timeline details?`)
    window.open(`https://wa.me/${contactConfig.whatsapp}?text=${message}`, '_self')
  }

  return (
    <section id="packages" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose the <span className="gradient-text">Right Plan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Flexible packages designed for small businesses, boutiques, clinics, startups, and local brands.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`relative hover-lift ${pkg.popular ? 'border-2 border-purple-500 shadow-xl scale-105' : 'border border-gray-200'}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Chosen
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${pkg.color} flex items-center justify-center mx-auto mb-4`}>
                    <pkg.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">{pkg.name}</CardTitle>
                  <CardDescription className="text-gray-600">{pkg.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="text-center">
                    {pkg.originalPrice && (
                      <div className="text-lg text-gray-500 line-through mb-2">
                        {pkg.originalPrice}
                      </div>
                    )}
                    <div className="text-4xl font-bold text-gray-900 mb-2">{pkg.price}</div>
                    <p className="text-gray-600">One-time payment</p>
                    {pkg.originalPrice && (
                      <div className="mt-2">
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                          Save ₹10,000
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    onClick={() => handleWhatsAppClick(pkg.name)}
                    className={`w-full py-3 text-lg font-semibold rounded-full hover-lift ${
                      pkg.popular 
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white' 
                        : 'bg-gray-900 hover:bg-gray-800 text-white'
                    }`}
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need a Custom Scope for Your Business?
            </h3>
            <p className="text-gray-600 mb-6">
              Need a custom combination of website design, branding, social media support, product listing, or admin panel setup? We can build a package around your business stage and budget.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="flex items-center gap-3">
                <Instagram className="w-6 h-6 text-purple-600" />
                <span className="text-gray-700">Social Media Management</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-6 h-6 text-blue-600" />
                <span className="text-gray-700">Website and Landing Pages</span>
              </div>
              <div className="flex items-center gap-3">
                <Palette className="w-6 h-6 text-green-600" />
                <span className="text-gray-700">Branding and Business Setup</span>
              </div>
            </div>
            <Button 
              onClick={() => handleWhatsAppClick('custom')}
              variant="outline" 
              size="lg" 
              className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3 text-lg font-semibold rounded-full hover-lift"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Request a Custom Plan
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 