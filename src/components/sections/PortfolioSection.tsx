'use client'

import { motion } from 'framer-motion'
import FeaturedProjectCard from '@/components/FeaturedProjectCard'
import { featuredProjects } from '@/data/featuredProjects'
import { contactConfig } from '@/lib/contactConfig'

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real client and personal builds showcasing modern UI, responsive design, and production-ready digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <FeaturedProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to See Your Project Here?
            </h3>
            <p className="text-gray-600 mb-6">
              Your business could be the next growth story. Let&apos;s build a digital presence that earns trust and drives inquiries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const message = encodeURIComponent(
                    "Hi Amrise Studio! I'd like to discuss my business and see relevant work examples."
                  )
                  window.open(`https://wa.me/${contactConfig.whatsapp}?text=${message}`, '_self')
                }}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover-lift"
              >
                Start Your Project
              </button>
              <button
                onClick={() => {
                  const message = encodeURIComponent(
                    'Hi Amrise Studio! Can you share more case examples relevant to my industry?'
                  )
                  window.open(`https://wa.me/${contactConfig.whatsapp}?text=${message}`, '_self')
                }}
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-full font-semibold hover-lift"
              >
                See More Cases
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
