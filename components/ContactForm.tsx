'use client';

import { Suspense, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const projectOptions = [
  { value: 'wildlife', label: 'Wildlife & Nature Expedition' },
  { value: 'landscape', label: 'Landscape & Adventure Shoot' },
  { value: 'portrait', label: 'Portrait & Headshots' },
  { value: 'wedding', label: 'Wedding & Couple Story' },
  { value: 'commercial', label: 'Commercial & Product Campaign' },
  { value: 'street', label: 'Street & Urban Session' },
  { value: 'fashion', label: 'Fashion & Editorial Shoot' },
  { value: 'sports', label: 'Sports & Action Coverage' },
  { value: 'events', label: 'Event & Concert Photography' },
  { value: 'architectural', label: 'Architectural & Real Estate' },
  { value: 'macro', label: 'Macro & Close-up Details' },
  { value: 'astrophotography', label: 'Astrophotography & Night Sky' },
  { value: 'workshop', label: 'Photography Workshop / Education' },
  { value: 'other', label: 'Other Custom Project' },
];

function ContactFormInner() {
  const searchParams = useSearchParams();
  const inquiry = searchParams.get('inquiry');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Prefill the project type option if specified in URL query params
  useEffect(() => {
    if (inquiry) {
      const match = projectOptions.find(
        opt => opt.value === inquiry || opt.value.toLowerCase().includes(inquiry.toLowerCase())
      );
      if (match) {
        setFormData(prev => ({ ...prev, projectType: match.value }));
      }
    }
  }, [inquiry]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form.');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', projectType: '', budget: '', message: '' });
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err: any) {
      console.error('Error submitting form:', err);
      setSubmitError(err.message || 'An error occurred while sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Header */}
      <section className="py-16 bg-background border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(163,122,76,0.03),transparent)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-foreground mb-4 tracking-tight">
            Book a Session
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl font-light">
            Discuss your photography concepts, schedule an expedition, or request a custom licensing quote.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Info Cards */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-card border border-border rounded-xl p-6 hover:border-accent/40 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/15 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1 text-sm tracking-wide uppercase">Email Inquiries</h3>
                    <a href="mailto:wildhood00@gmail.com" className="text-foreground text-sm font-medium hover:text-accent transition-colors">wildhood00@gmail.com</a>
                    <p className="text-muted-foreground text-xs mt-1">We respond to general & booking inquiries within 24 hours.</p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 hover:border-accent/40 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/15 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1 text-sm tracking-wide uppercase">Direct Call</h3>
                    <a href="tel:+917349581177" className="text-foreground text-sm font-medium hover:text-accent transition-colors">+91 73495 81177</a>
                    <p className="text-muted-foreground text-xs mt-1">Available for quick queries and urgent bookings.</p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 hover:border-accent/40 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/15 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1 text-sm tracking-wide uppercase">Studio Address</h3>
                    <p className="text-foreground text-sm font-medium">Mysore, India</p>
                    <p className="text-muted-foreground text-xs mt-1">Metagalli, Mysore, 570016</p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 hover:border-accent/40 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/15 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1 text-sm tracking-wide uppercase">Response Rate</h3>
                    <p className="text-foreground text-sm font-medium">Fast Turnaround</p>
                    <p className="text-muted-foreground text-xs mt-1">We guarantee a comprehensive creative consultation call setup within 48 hours.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form Container */}
            <motion.form
              onSubmit={handleSubmit}
              className="lg:col-span-2 bg-card border border-border rounded-2xl p-8 sm:p-10 shadow-sm relative overflow-hidden"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent text-foreground text-sm placeholder-muted-foreground"
                      placeholder="e.g. Sarah Jenkins"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent text-foreground text-sm placeholder-muted-foreground"
                      placeholder="e.g. sarah@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent text-foreground text-sm placeholder-muted-foreground"
                      placeholder="e.g. +91 73495 81177"
                    />
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
                      Photography Category *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent text-foreground text-sm"
                    >
                      <option value="">Select a category</option>
                      {projectOptions.map(opt => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent text-foreground text-sm"
                  >
                    <option value="">Select your target budget</option>
                    <option value="under-25k">Under ₹25,000</option>
                    <option value="25k-75k">₹25,000 - ₹75,000</option>
                    <option value="75k-150k">₹75,000 - ₹1,50,000</option>
                    <option value="150k-plus">₹1,50,000+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
                    Project Details & Creative Concept *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent text-foreground text-sm placeholder-muted-foreground resize-none"
                    placeholder="Describe your goals, preferred locations, mood reference, or shooting dates..."
                  />
                </div>

                {submitError && (
                  <p className="text-red-500 text-xs font-semibold text-center mt-2">
                    {submitError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className="w-full px-6 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-accent hover:text-white transition-all duration-300 disabled:bg-green-600 disabled:text-white text-sm"
                >
                  {isSubmitting ? 'Sending Brief...' : submitted ? 'Inquiry Sent! We will contact you soon.' : 'Send Creative Brief'}
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>
    </>
  );
}

export function ContactForm() {
  return (
    <Suspense fallback={
      <div className="py-20 text-center text-muted-foreground animate-pulse text-sm">
        Loading interactive form configurations...
      </div>
    }>
      <ContactFormInner />
    </Suspense>
  );
}
