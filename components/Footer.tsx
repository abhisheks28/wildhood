'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import { Logo } from './Logo';

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground relative border-t border-border/10 overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(44,94,84,0.15),transparent)] pointer-events-none" />

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand & Logo */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <Logo className="w-10 h-10" variant="light" />
              <div className="flex flex-col">
                <h3 className="text-xl font-serif font-black tracking-wider text-white leading-none uppercase">Wildhood</h3>
                <span className="text-[9px] tracking-[0.22em] font-semibold text-white/60 uppercase leading-none mt-1">--Photography--</span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed font-light">
              Premium photography capturing the rare and beautiful moments of nature, love, and life. Guided by a spirit of adventure.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-sm uppercase tracking-widest text-white/95">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-white/70 hover:text-white transition-colors font-light">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-white/70 hover:text-white transition-colors font-light">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/70 hover:text-white transition-colors font-light">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/70 hover:text-white transition-colors font-light">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="font-bold text-sm uppercase tracking-widest text-white/95">Portfolio</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/portfolio" className="text-white/70 hover:text-white transition-colors font-light">
                  Ethereal Weddings
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-white/70 hover:text-white transition-colors font-light">
                  Commercial Shoots
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-white/70 hover:text-white transition-colors font-light">
                  Rare Wildlife
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details from Business Card */}
          <div className="space-y-4">
            <h4 className="font-bold text-sm uppercase tracking-widest text-white/95">Get In Touch</h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a href="mailto:wildhood00@gmail.com" className="flex items-start gap-2.5 text-white/70 hover:text-white transition-colors font-light group">
                  <Mail className="w-4 h-4 text-white/60 group-hover:text-white flex-shrink-0 mt-0.5" />
                  <span className="break-all">wildhood00@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+917349581177" className="flex items-start gap-2.5 text-white/70 hover:text-white transition-colors font-light group">
                  <Phone className="w-4 h-4 text-white/60 group-hover:text-white flex-shrink-0 mt-0.5" />
                  <span>+91 73495 81177, +91 96114 18625</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-white/70 font-light">
                <MapPin className="w-4 h-4 text-white/60 flex-shrink-0 mt-0.5" />
                <span>Metagalli, Mysore, 570016</span>
              </li>
              <li>
                <a href="https://www.wildhoodphoto.com" target="_blank" rel="noreferrer" className="flex items-start gap-2.5 text-white/70 hover:text-white transition-colors font-light group">
                  <Globe className="w-4 h-4 text-white/60 group-hover:text-white flex-shrink-0 mt-0.5" />
                  <span>www.wildhoodphoto.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 mt-12"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-xs text-white/60 font-light">
            &copy; {currentYear} by Wildhood Photography. All rights reserved.
          </p>

          {/* Social Links matching Business Card / Wix */}
          <div className="flex items-center gap-4 text-white/60">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white hover:scale-110 transition-all"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4.5 h-4.5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white hover:scale-110 transition-all"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-4.5 h-4.5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white hover:scale-110 transition-all"
              aria-label="X (Twitter)"
            >
              <TwitterIcon className="w-4.5 h-4.5" />
            </a>
          </div>

          {/* Links */}
          <div className="flex gap-6 text-xs text-white/60 font-light">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
