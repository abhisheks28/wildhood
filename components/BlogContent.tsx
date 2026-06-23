'use client';

import { motion } from 'framer-motion';
import { blogPosts } from '@/data/blog';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';
import { GenerateImage } from './GenerateImage';
import Link from 'next/link';

export function BlogContent() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] as any },
    },
  };

  return (
    <>
      {/* Header */}
      <section className="py-16 bg-background border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(163,122,76,0.03),transparent)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-foreground mb-4 tracking-tight">
            Wildhood Journal
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl font-light">
            Insights, technical guides, field stories, and artistic inspiration from the photography team.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Featured Articles</h2>
            <div className="h-[1px] flex-1 bg-border mx-6 hidden sm:block" />
            <span className="text-xs font-bold text-accent uppercase tracking-widest">Our top reads</span>
          </div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-24"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {featuredPosts.map(post => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                className="bg-card border border-border rounded-2xl overflow-hidden hover:border-accent/40 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="relative h-72 bg-muted overflow-hidden">
                  <GenerateImage
                    prompt={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  <span className="absolute top-4 left-4 px-3 py-1 bg-accent text-accent-foreground text-[10px] font-bold tracking-widest uppercase rounded">
                    {post.category}
                  </span>
                </div>

                <div className="p-8 space-y-4">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-accent" />
                      <span>{new Date(post.date).toLocaleDateString(undefined, { dateStyle: 'medium' })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-accent" />
                      <span>{post.readTime} min read</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors leading-tight tracking-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm font-light leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="border-t border-border pt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-accent/25 flex items-center justify-center font-bold text-accent text-xs">
                        {post.author[0]}
                      </div>
                      <span className="text-xs font-semibold text-foreground">{post.author}</span>
                    </div>
                    
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-primary group-hover:text-accent group-hover:translate-x-1.5 transition-all">
                      Read Article <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* All Posts */}
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Latest Articles</h2>
            <div className="h-[1px] flex-1 bg-border mx-6 hidden sm:block" />
            <span className="text-xs font-bold text-accent uppercase tracking-widest font-mono">Archive</span>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {regularPosts.map(post => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                className="bg-card border border-border rounded-xl p-6 hover:border-accent/40 shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Article Thumbnail */}
                  <div className="relative h-48 w-full rounded-lg overflow-hidden bg-muted mb-4">
                    <GenerateImage
                      prompt={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 px-2 py-0.5 bg-black/60 backdrop-blur-md text-white text-[9px] font-bold tracking-widest uppercase rounded border border-white/10">
                      {post.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-3.5 text-[11px] text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-accent" />
                      <span>{new Date(post.date).toLocaleDateString(undefined, { dateStyle: 'medium' })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-accent" />
                      <span>{post.readTime} min</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors leading-snug tracking-tight">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground text-xs leading-relaxed font-light line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>

                <div className="border-t border-border pt-4 mt-6 flex items-center justify-between text-xs text-foreground">
                  <span className="font-medium text-muted-foreground">
                    By <span className="font-bold text-foreground">{post.author}</span>
                  </span>
                  
                  <span className="font-bold text-primary group-hover:text-accent inline-flex items-center gap-1 transition-colors">
                    Read <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
