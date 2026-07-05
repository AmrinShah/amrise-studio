'use client'

import { motion } from 'framer-motion'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { HelpCircle, Clock, RefreshCw, Globe, Palette, MessageCircle } from 'lucide-react'
import { contactConfig } from '@/lib/contactConfig'

const faqs = [
  {
    question: 'How quickly can Amrise Studio start and deliver a project?',
    answer: 'Most projects begin within 1-3 business days after confirmation. Initial deliveries typically happen within 7-10 days, based on scope, content readiness, and revision rounds.',
    icon: Clock
  },
  {
    question: 'Can I request revisions if something needs improvement?',
    answer: 'Yes. Every package includes revision rounds, and we collaborate with clear feedback checkpoints so the final output aligns with your business goals and brand direction.',
    icon: RefreshCw
  },
  {
    question: 'Do you help with domain, hosting, and technical setup?',
    answer: 'Absolutely. We guide you on domain, hosting, business email, and launch setup. If needed, we can also handle the complete handover so your team can manage everything confidently.',
    icon: Globe
  },
  {
    question: 'Do you work with specific industries like clinics or boutiques?',
    answer: 'Yes. We work with small businesses, boutiques, clinics, startups, and local brands. Our process is tailored to your industry context, target audience, and local market expectations.',
    icon: Palette
  },
  {
    question: 'What is the process after I choose a package?',
    answer: 'You get a structured onboarding call, requirement checklist, and delivery timeline. We then move through strategy, design, review, and launch with regular updates at each stage.',
    icon: HelpCircle
  },
  {
    question: 'Do you provide post-launch support?',
    answer: 'Yes. We offer post-launch support to help with updates, fixes, and guidance. Ongoing service options are also available for social media management, listings, and digital growth support.',
    icon: MessageCircle
  }
]

export default function FAQSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
                      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions from business owners planning their website, branding, and digital setup with Amrise Studio.
            </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg px-6 hover-lift"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                      <faq.icon className="w-5 h-5 text-purple-600" />
                    </div>
                    <span className="font-semibold text-gray-900 text-lg">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6 px-14">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Reach out and our team will guide you with the right recommendations for your business stage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const message = encodeURIComponent("Hi Amrise Studio! I have a few questions about your services. Can you help?")
                  window.open(`https://wa.me/${contactConfig.whatsapp}?text=${message}`, '_self')
                }}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover-lift"
              >
                <MessageCircle className="w-5 h-5 mr-2 inline" />
                Chat on WhatsApp
              </button>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=amrisestudio09@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-full font-semibold hover-lift text-center"
              >
                Email Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 