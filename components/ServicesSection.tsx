'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { services, Service } from '@/data/services';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { GenerateImage } from './GenerateImage';
import Link from 'next/link';

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState<'All' | 'Adventure' | 'Personal' | 'Commercial'>('All');

  const filteredServices = useMemo(() => {
    if (activeTab === 'All') return services;
    return services.filter(service => service.classification === activeTab);
  }, [activeTab]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] as any },
    },
  };

  const tabs = [
    { id: 'All', label: 'All Services' },
    { id: 'Adventure', label: 'Adventure & Expeditions' },
    { id: 'Personal', label: 'Personal & Love' },
    { id: 'Commercial', label: 'Commercial & Brand' },
  ];

  return (
    <section className="py-20 bg-secondary/35">
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
            Our Photography Services
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            From deep-wilderness documentary shoots to high-end product campaigns and wedding coverage, explore our premium photography packages.
          </p>
        </motion.div>

        {/* Tab Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                  : 'bg-card text-foreground hover:bg-secondary border border-border hover:border-accent'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filteredServices.map(service => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="bg-card border border-border rounded-2xl overflow-hidden hover:border-accent/40 shadow-sm flex flex-col justify-between transition-all duration-300 group"
                whileHover={{ y: -6, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.05)' }}
              >
                {/* Visual Header */}
                <div>
                  <div className="relative h-56 w-full overflow-hidden bg-muted">
                    <GenerateImage
                      prompt={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                    
                    <span className="absolute top-4 left-4 px-2.5 py-1 bg-black/60 backdrop-blur-md text-white text-[9px] font-bold tracking-widest uppercase rounded border border-white/10">
                      {service.classification}
                    </span>

                    <h3 className="absolute bottom-4 left-6 text-xl font-bold text-white tracking-tight">
                      {service.title}
                    </h3>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-8 space-y-6">
                    <p className="text-muted-foreground text-sm leading-relaxed font-light">
                      {service.description}
                    </p>

                    {/* Features checklist */}
                    <div className="space-y-3">
                      <p className="text-xs font-semibold text-foreground tracking-wider uppercase">
                        What&apos;s Included:
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-muted-foreground font-light">
                            <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer and Price */}
                <div className="p-6 sm:p-8 border-t border-border flex items-center justify-between bg-secondary/10">
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Rate</p>
                    <p className="text-lg font-bold text-accent">{service.price}</p>
                  </div>
                  
                  <Link
                    href={`/contact?inquiry=${service.id}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-primary text-primary-foreground text-xs font-semibold rounded-lg hover:bg-accent hover:text-white transition-colors group/btn"
                  >
                    Book Session
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
