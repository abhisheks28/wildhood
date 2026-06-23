import { Metadata } from 'next'
import { ContactForm } from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact - Wildhood Photography',
  description: 'Get in touch with Wildhood Photography. Let&apos;s discuss your photography project.',
}

export default function ContactPage() {
  return <ContactForm />
}
