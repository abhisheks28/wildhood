import { Metadata } from 'next'
import { PortfolioGallery } from '@/components/PortfolioGallery'
import { CTASection } from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Portfolio - Wildhood Photography',
  description: 'Explore our comprehensive portfolio of wildlife, landscape, adventure, and editorial photography from around the world.',
}

export default function PortfolioPage() {
  return (
    <>
      <section className="py-16 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Our Portfolio
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A curated collection of our most impactful photography work from expeditions across the globe
          </p>
        </div>
      </section>
      <PortfolioGallery />
      <CTASection />
    </>
  )
}
