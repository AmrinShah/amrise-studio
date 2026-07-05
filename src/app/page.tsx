import { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import PackagesSection from '@/components/sections/PackagesSection'
import HowItWorksSection from '@/components/sections/HowItWorksSection'
import PortfolioSection from '@/components/sections/PortfolioSection'
import FAQSection from '@/components/sections/FAQSection'
import ContactForm from '@/components/ContactForm'
import FooterSection from '@/components/sections/FooterSection'

export const metadata: Metadata = {
  title: 'Amrise Studio - Build a Strong Digital Presence for Your Business',
  description:
    'Professional digital services for small businesses and growing brands. Amrise Studio delivers website design, landing pages, branding, social media management, admin panels, product listing, and complete business digital setup.',
  keywords:
    'Amrise Studio, website design, landing page design, branding services, social media management, product listing services, portfolio websites, admin panel development, digital setup for small business',
  openGraph: {
    title: 'Amrise Studio - Freelancing Digital Service Studio',
    description:
      'Helping small businesses, boutiques, clinics, startups, and local brands grow online with modern websites, branding, and digital service solutions.',
    type: 'website',
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      <HeroSection />
      <PackagesSection />
      <HowItWorksSection />
      <PortfolioSection />
      <FAQSection />
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <ContactForm />
        </div>
      </section>
      <FooterSection />
    </main>
  )
}
