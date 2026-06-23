import { Metadata } from 'next'
import { ServicesSection } from '@/components/ServicesSection'
import { CTASection } from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Services - Wildhood Photography',
  description: 'Professional photography services including wildlife, landscape, adventure, editorial shoots, and photography workshops.',
}

export default function ServicesPage() {
  return (
    <>
      <section className="py-16 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Comprehensive photography solutions tailored to your unique vision and creative goals
          </p>
        </div>
      </section>
      <ServicesSection />
      <CTASection />
    </>
  )
}
