export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  readTime: number;
  featured: boolean;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Capturing Timeless Moments with Wildhood Photography',
    excerpt: 'Photography is more than just a hobby; it\'s a way to capture the essence of life\'s fleeting moments. At Wildhood Photography, we believe that every click of the shutter can tell a story, evoke emotions, and preserve memories that last a lifetime.',
    content: 'Photography is more than just a hobby; it\'s a way to capture the essence of life\'s fleeting moments. At Wildhood Photography, we believe that every click of the shutter can tell a story, evoke emotions, and preserve memories that last a lifetime. In this blog post, we will explore the art of photography, the unique approach of Wildhood Photography, and how you can capture your own timeless moments.',
    date: '2026-06-23',
    author: 'Abhishek S',
    category: 'Nature & Storytelling',
    readTime: 3,
    featured: true,
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&h=600&fit=crop'
  },
  {
    id: '2',
    title: 'Portrait Photography Tips for Business Headshots',
    excerpt: 'Professional headshots that make a lasting impression and build trust.',
    content: 'Your professional headshot is often the first impression you make. We share tips for posing, lighting, and styling to create headshots that reflect your professionalism and personality. Learn how to look confident and approachable in your corporate portraits.',
    date: '2024-01-10',
    author: 'Michael Chen',
    category: 'Portrait',
    readTime: 6,
    featured: true,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop'
  },
  {
    id: '3',
    title: 'Editing Workflow for Professional Results',
    excerpt: 'How we process thousands of images to deliver consistent, stunning photography.',
    content: 'The digital darkroom is where good photography becomes great. Our editing workflow emphasizes non-destructive techniques, color grading principles, and maintaining the integrity of the original moment. Learn the software, techniques, and mindset we use to achieve professional results.',
    date: '2024-01-05',
    author: 'Jamie Stone',
    category: 'Technical',
    readTime: 10,
    featured: false,
    image: 'https://images.unsplash.com/photo-1542744094-3a31f103e35f?w=800&h=600&fit=crop'
  },
  {
    id: '4',
    title: 'Product Photography for E-Commerce Success',
    excerpt: 'How great product photos increase conversions and customer satisfaction.',
    content: 'Product photography directly impacts your bottom line. Discover lighting techniques, backgrounds, and styling that make products look their absolute best. Learn how professional product photography can increase conversions and reduce returns.',
    date: '2023-12-28',
    author: 'Alex Turner',
    category: 'Commercial',
    readTime: 7,
    featured: false,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop'
  },
  {
    id: '5',
    title: 'Event Photography: Capturing the Moments That Matter',
    excerpt: 'How to document corporate events, conferences, and celebrations.',
    content: 'Event photography requires quick thinking, technical skill, and the ability to anticipate moments before they happen. We share our approach to covering corporate events, conferences, and celebrations to tell the complete story of your event.',
    date: '2023-12-20',
    author: 'Jamie Stone',
    category: 'Events',
    readTime: 9,
    featured: false,
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop'
  },
  {
    id: '6',
    title: 'Choosing Your Photography Style and Brand',
    excerpt: 'Developing your unique visual voice in a competitive industry.',
    content: 'Your photography style is what sets you apart. We discuss how to develop a consistent visual language, choose your niche, and build a brand that resonates with your ideal clients. Find your unique voice in the world of professional photography.',
    date: '2023-12-12',
    author: 'Taylor Fox',
    category: 'Business',
    readTime: 11,
    featured: false,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=600&fit=crop'
  }
];
