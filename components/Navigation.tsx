'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
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

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/60 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo & WHP Brand */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <Logo className="w-9 h-9 transition-transform duration-300 group-hover:rotate-12" variant="adaptive" />
            <div className="flex flex-col">
              <span className="text-xl font-serif font-black tracking-wider text-primary leading-none uppercase">Wildhood</span>
              <span className="text-[9px] tracking-[0.22em] font-semibold text-muted-foreground uppercase leading-none mt-1">---Photography---</span>
            </div>
          </Link>

          {/* Desktop Navigation Link Menu */}
          <div className="hidden md:flex items-center gap-1.5">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="px-3.5 py-2 text-xs font-semibold uppercase tracking-widest text-foreground/80 hover:text-primary hover:bg-secondary/60 rounded-md transition-all duration-200"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* CTA & Social Links (Desktop) */}
          <div className="hidden md:flex items-center gap-6">
            {/* Social Icons */}
            <div className="flex items-center gap-3 border-r border-border pr-5 text-muted-foreground">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>

            <Link
              href="/contact"
              className="px-5 py-2.5 bg-primary text-primary-foreground rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-accent transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              className="p-2 text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 pt-2 border-t border-border/60 space-y-1">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="block px-4 py-3 text-sm font-semibold uppercase tracking-wider text-foreground hover:bg-secondary rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}

            {/* Social Links on Mobile */}
            <div className="flex items-center gap-4 px-4 py-3 text-muted-foreground border-t border-border/40 mt-3 pt-4">
              <span className="text-xs uppercase tracking-wider font-semibold">Follow Us:</span>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>

            <Link
              href="/contact"
              className="block mt-4 mx-4 px-4 py-3 bg-primary text-primary-foreground rounded-lg font-bold text-center text-xs uppercase tracking-wider hover:bg-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Get In Touch
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
