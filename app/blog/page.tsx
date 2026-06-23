import { Metadata } from 'next'
import { BlogContent } from '@/components/BlogContent'
import { CTASection } from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Photography Blog - Wildhood Photography',
  description: 'Insights, techniques, and stories from the world of professional photography',
}

export default function BlogPage() {
  return (
    <>
      <BlogContent />
      <CTASection />
    </>
  )
}
