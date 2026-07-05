'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Send, CheckCircle } from 'lucide-react'
import { contactConfig } from '@/lib/contactConfig'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    message: '',
    package: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: '', email: '', business: '', message: '', package: '' })
      } else {
        alert(data.error || 'Unable to send your inquiry. Please try again later.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Unable to send your inquiry. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="text-center p-8">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
            Thank You!
          </CardTitle>
          <CardDescription className="text-lg text-gray-600">
            Your inquiry has been received. We will contact you shortly.
          </CardDescription>
        </Card>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Card className="max-w-md mx-auto">
        <CardHeader className="text-center">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-6 h-6 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">
            Start Your Project
          </CardTitle>
          <CardDescription className="text-gray-600">
            Share your requirements for website design, branding, social media, listings, or admin setup.
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                name="name"
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>
            
            <div>
              <Input
                name="email"
                type="email"
                placeholder="Business Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>
            
            <div>
              <Input
                name="business"
                type="text"
                placeholder="Business Name"
                value={formData.business}
                onChange={handleChange}
                className="w-full"
              />
            </div>
            
            <div>
              <select
                name="package"
                value={formData.package}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">Select a Plan (Optional)</option>
                <option value="Starter">Starter Plan</option>
                <option value="Business">Business Plan</option>
                <option value="Premium">Premium Plan</option>
                <option value="Custom">Custom Plan</option>
              </select>
            </div>
            
            <div>
              <Textarea
                name="message"
                placeholder="Tell us about your business goals and the services you need..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full resize-none"
              />
            </div>
            
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 rounded-full font-semibold hover-lift"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Sending...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Send Inquiry
                </div>
              )}
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Or reach out directly on{' '}
              <button
                onClick={() => {
                  const message = encodeURIComponent("Hi Amrise Studio! I&apos;d like to discuss my project requirements.")
                  window.open(`https://wa.me/${contactConfig.whatsapp}?text=${message}`, '_self')
                }}
                className="text-purple-600 hover:text-purple-700 font-medium"
              >
                WhatsApp
              </button>
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
} 