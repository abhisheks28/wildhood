import { Metadata } from 'next'
import { CTASection } from '@/components/CTASection'
import { GenerateImage } from '@/components/GenerateImage'

export const metadata: Metadata = {
  title: 'About - Wildhood Photography',
  description: 'Learn about Wildhood Photography studio, our mission, and the team behind the most captivating wildlife photography.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-4">
            About Wildhood Photography
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl font-light">
            Capturing the beauty of life&apos;s fleeting, extraordinary moments.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Story Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                At Wildhood Photography, we believe in the beauty of life&apos;s fleeting moments. Our studio specializes in various genres of photography, from stunning weddings to vibrant portraits and dynamic events. With a passion for capturing the essence of every occasion, we strive to create timeless images that resonate with joy and emotion.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                Our journey began with a simple idea: to document the rare moments that make life extraordinary. We take pride in our personalized approach, ensuring every client feels valued and understood. 
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                Join us as we explore the world through the lens and share the stories that make up our wildhood.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <GenerateImage
                prompt="Expert wildlife photographer with professional camera equipment in natural landscape, portrait style photography, warm golden lighting"
                alt="Wildhood Photography Team"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Mission & Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To create extraordinary photography that inspires environmental conservation and celebrates the beauty of our planet&apos;s wildlife.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Conservation</h3>
              <p className="text-muted-foreground leading-relaxed">
                We donate 10% of all profits to wildlife conservation organizations working to protect endangered species globally.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Excellence</h3>
              <p className="text-muted-foreground leading-relaxed">
                We pursue technical perfection and creative innovation in every project, never compromising on quality or artistic integrity.
              </p>
            </div>
          </div>

          {/* Team Section */}
          <div className="bg-card border border-border rounded-xl p-12">
            <h2 className="text-4xl font-bold text-foreground mb-8 text-center">Meet the Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Alex Wildwood', role: 'Founder & Lead Photographer' },
                { name: 'Jamie Stone', role: 'Creative Director & Editor' },
                { name: 'Taylor Fox', role: 'Adventure Specialist' },
                { name: 'Morgan Rivers', role: 'Logistics & Operations' }
              ].map((member) => (
                <div key={member.name} className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent overflow-hidden">
                    <GenerateImage
                      prompt={`Professional headshot portrait of ${member.name}, studio lighting, professional photography`}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
