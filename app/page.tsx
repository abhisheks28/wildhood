import { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { PortfolioGallery } from '@/components/PortfolioGallery'
import { ServicesSection } from '@/components/ServicesSection'
import { TestimonialsSection } from '@/components/TestimonialsSection'
import { CTASection } from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Professional Photography Studio - Portraits, Weddings & Commercial',
  description: 'Professional photography for portraits, weddings, commercial, and events. Capturing life&apos;s most important moments with artistic vision and technical excellence.',
}

export default function Home() {
  return (
    <>
      <Hero />
      <PortfolioGallery />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
