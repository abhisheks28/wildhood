'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioItems, categories, PortfolioItem } from '@/data/portfolio';
import { GenerateImage } from './GenerateImage';
import { X, ChevronLeft, ChevronRight, Camera, Info, MapPin } from 'lucide-react';
import Link from 'next/link';

export function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return portfolioItems;
    return portfolioItems.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  // Find index of selected item within the current filtered list for navigation
  const selectedIndex = useMemo(() => {
    if (!selectedItem) return -1;
    return filteredItems.findIndex(item => item.id === selectedItem.id);
  }, [selectedItem, filteredItems]);

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex < filteredItems.length - 1) {
      setSelectedItem(filteredItems[selectedIndex + 1]);
    } else {
      setSelectedItem(filteredItems[0]); // Wrap to first
    }
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex > 0) {
      setSelectedItem(filteredItems[selectedIndex - 1]);
    } else {
      setSelectedItem(filteredItems[filteredItems.length - 1]); // Wrap to last
    }
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedItem) return;
      if (e.key === 'Escape') setSelectedItem(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem, selectedIndex, filteredItems]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] as any },
    },
  };

  return (
    <section className="py-20 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
            Our Photography Portfolio
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Click on any capture to explore full high-definition details, project locations, and camera configurations.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {categories.map(category => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setSelectedItem(null); // Close modal if open to prevent list sync issues
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground shadow-lg scale-105 border-primary'
                  : 'bg-card text-foreground hover:bg-secondary border border-border hover:border-accent'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              onClick={() => setSelectedItem(item)}
              className="group relative h-80 rounded-xl overflow-hidden bg-card border border-border hover:border-accent/40 shadow-sm transition-all duration-500 cursor-pointer"
              whileHover={{ y: -6, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }}
            >
              {/* Image component */}
              <GenerateImage
                prompt={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Sophisticated Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[10px] tracking-[0.2em] font-semibold text-accent mb-1 uppercase">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                  {item.title}
                </h3>
                
                <div className="flex items-center gap-1.5 text-xs text-gray-300">
                  <MapPin className="w-3.5 h-3.5 text-accent" />
                  <span>{item.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 cursor-zoom-out"
              onClick={() => setSelectedItem(null)}
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-5xl bg-card border border-border rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row z-10 max-h-[90vh] lg:max-h-[85vh]"
            >
              {/* Left Close Button for Mobile */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-30 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white lg:hidden transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Slider Left Arrow */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 hover:bg-accent hover:text-white text-gray-300 transition-all"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Slider Right Arrow */}
              <button
                onClick={handleNext}
                className="absolute right-4 lg:right-[350px] top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 hover:bg-accent hover:text-white text-gray-300 transition-all"
                aria-label="Next photo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Image Container */}
              <div className="flex-1 relative bg-black min-h-[300px] sm:min-h-[400px] lg:min-h-full">
                <GenerateImage
                  prompt={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Info Column (Right Side) */}
              <div className="w-full lg:w-[360px] bg-card p-6 sm:p-8 flex flex-col justify-between overflow-y-auto border-t lg:border-t-0 lg:border-l border-border">
                <div className="space-y-6">
                  {/* Category and Close */}
                  <div className="flex justify-between items-center">
                    <span className="px-3 py-1 bg-accent/15 text-accent text-[10px] font-bold tracking-widest uppercase rounded-full border border-accent/20">
                      {selectedItem.category}
                    </span>
                    <button
                      onClick={() => setSelectedItem(null)}
                      className="hidden lg:flex p-1.5 rounded-full hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="Close modal"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Title and location */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground tracking-tight">
                      {selectedItem.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-accent" />
                      <span>{selectedItem.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider flex items-center gap-1.5">
                      <Info className="w-3.5 h-3.5 text-accent" /> Description
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed font-light">
                      {selectedItem.description}
                    </p>
                  </div>

                  {/* Camera Metadata (EXIF Details) */}
                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider flex items-center gap-1.5 border-b border-border pb-2">
                      <Camera className="w-3.5 h-3.5 text-accent" /> Camera Specifications
                    </h4>
                    
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <p className="text-muted-foreground font-light mb-0.5">Camera Body</p>
                        <p className="font-medium text-foreground">{selectedItem.camera}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground font-light mb-0.5">Lens Used</p>
                        <p className="font-medium text-foreground">{selectedItem.lens}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground font-light mb-0.5">Aperture</p>
                        <p className="font-medium text-foreground">{selectedItem.aperture}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground font-light mb-0.5">Shutter Speed</p>
                        <p className="font-medium text-foreground">{selectedItem.shutterSpeed}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground font-light mb-0.5">ISO</p>
                        <p className="font-medium text-foreground">{selectedItem.iso}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Booking CTA */}
                <div className="pt-8 border-t border-border mt-6">
                  <Link
                    href={`/contact?inquiry=${selectedItem.category.toLowerCase()}`}
                    className="w-full inline-block text-center px-4 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:bg-accent hover:text-white transition-colors"
                  >
                    Inquire About This Style
                  </Link>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
