'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowDown } from 'lucide-react';

const heroImages = [
  {
    url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=80',
    title: 'Sunlight filtering through forest trees',
  },
  {
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80',
    title: 'Ethereal forest wedding couple vows',
  },
  {
    url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1920&q=80',
    title: 'Vibrant live concert festival event',
  },
  {
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1920&q=80',
    title: 'Elegant editorial portrait photography',
  }
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight - 80,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative w-full h-[calc(100vh-5rem)] min-h-[550px] bg-primary overflow-hidden flex items-center justify-center">
      
      {/* Full-Screen Slideshow Background */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.5, ease: 'easeInOut' as any }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={heroImages[currentIndex].url}
              alt={heroImages[currentIndex].title}
              fill
              className="object-cover brightness-[0.70]"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dark overlay with dynamic forest gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-black/45 to-primary/45 z-10 pointer-events-none" />

      {/* Overlay Typography Content */}
      <div className="relative z-25 max-w-5xl mx-auto px-6 text-center text-white flex flex-col items-center justify-center h-full space-y-6">
        
        {/* Animated Subtext / Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-3.5"
        >
          <span className="h-[1.5px] w-6 bg-white/70" />
          <p className="text-[11px] sm:text-xs md:text-sm font-semibold tracking-[0.38em] uppercase text-white/90">
            CAPTURING LIFE&apos;S MOMENTS
          </p>
          <span className="h-[1.5px] w-6 bg-white/70" />
        </motion.div>

        {/* Animated Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.4 }}
          className="text-5xl sm:text-7xl md:text-8xl font-serif font-black tracking-wide leading-tight drop-shadow-xl text-white py-2"
        >
          Wildhood Photography
        </motion.h1>

        {/* Animated Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, delay: 0.7 }}
          className="text-sm sm:text-base md:text-lg text-white/80 font-light max-w-xl mx-auto leading-relaxed tracking-wider"
        >
          Rare captures, dynamic wedding stories, and impactful commercial shoots. Capturing nature&apos;s raw soul.
        </motion.p>

        {/* Animated CTA Actions */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 pt-6 justify-center w-full max-w-sm sm:max-w-none"
        >
          <Link
            href="/portfolio"
            className="px-7 py-3.5 bg-white text-primary font-bold rounded-lg text-xs uppercase tracking-widest hover:bg-white/90 hover:scale-105 active:scale-95 transition-all shadow-xl hover:shadow-2xl text-center"
          >
            Explore Portfolio
          </Link>
          <Link
            href="/contact"
            className="px-7 py-3.5 border border-white/40 text-white font-bold rounded-lg text-xs uppercase tracking-widest hover:bg-white/10 hover:border-white hover:scale-105 active:scale-95 transition-all text-center"
          >
            Book Consultation
          </Link>
        </motion.div>

      </div>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center justify-center cursor-pointer group">
        <button 
          onClick={handleScrollDown}
          className="p-3 bg-white/5 hover:bg-white/15 backdrop-blur-md rounded-full border border-white/25 hover:border-white transition-all text-white animate-bounce"
          aria-label="Scroll down to content"
        >
          <ArrowDown className="w-4 h-4" />
        </button>
      </div>

    </section>
  );
}
