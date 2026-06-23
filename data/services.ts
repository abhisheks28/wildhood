export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  image: string;
  classification: 'Adventure' | 'Personal' | 'Commercial';
}

export const services: Service[] = [
  {
    id: 'wildlife',
    title: 'Wildlife & Nature Expeditions',
    description: 'Immersive wildlife photography. Capturing animals in their natural habitats with specialized super-telephoto lenses.',
    features: [
      'Expert guiding in remote wildlife regions',
      'Advanced super-telephoto lens tracking',
      'Ethical, respectful field approaches',
      'High-resolution fine-art nature prints',
      'Commercial licensing rights included'
    ],
    price: 'From ₹1,20,000',
    image: 'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?w=800&h=600&fit=crop',
    classification: 'Adventure'
  },
  {
    id: 'landscape',
    title: 'Landscape & Adventure',
    description: 'Breathtaking landscape documentation and outdoor lifestyle adventure photography for outdoor brands and tourism.',
    features: [
      'Challenging terrain and extreme climate shooting',
      'Drone aerial photography & mapping',
      'Ultra-high 100MP detail landscape stitching',
      'Advanced exposure blending for dynamic range',
      'Adventure apparel brand asset generation'
    ],
    price: 'From ₹1,40,000',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&h=600&fit=crop',
    classification: 'Adventure'
  },
  {
    id: 'portrait',
    title: 'Portrait & Corporate Headshots',
    description: 'Premium headshots, editorial profiles, and group photos that convey executive brand value, confidence, and professionalism.',
    features: [
      'Studio setup or on-location corporate backdrop',
      'Creative lighting and posing consultation',
      'Flawless professional high-end retouching',
      'Multiple outfit changes & styling guidance',
      'Same-day digital delivery capability'
    ],
    price: 'From ₹35,000',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop',
    classification: 'Personal'
  },
  {
    id: 'wedding',
    title: 'Wedding & Couple Stories',
    description: 'Artistic documentation of love stories, weddings, and couples, focusing on emotional candids and stunning editorial poses.',
    features: [
      'Full-day coverage by two photographers',
      'Pre-wedding engagement session',
      'Handcrafted high-end linen photo album',
      'Online digital gallery with lifetime hosting',
      'Sneak-peek files delivered in 48 hours'
    ],
    price: 'From ₹2,20,000',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
    classification: 'Personal'
  },
  {
    id: 'commercial',
    title: 'Commercial & Product Campaigns',
    description: 'Studio product photography, catalog layouts, and campaign key visuals designed to boost brand conversions.',
    features: [
      'Color-accurate macro product shooting',
      'Professional ghost mannequin for apparel',
      'Creative lifestyle setup with hand models',
      'High-end reflection & glare management',
      'Full print-ready billboard files'
    ],
    price: 'From ₹95,000',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&h=600&fit=crop',
    classification: 'Commercial'
  },
  {
    id: 'street',
    title: 'Street & Editorial Fashion',
    description: 'Vibrant, high-energy fashion editorial photography captured on urban streets, highlighting fabric texture and model expression.',
    features: [
      'Curated urban architectural scouts',
      'Natural-light & portable strobe editing',
      'High-contrast narrative storytelling style',
      'Creative model direction and dynamic angles',
      'Social media optimized format packages'
    ],
    price: 'From ₹65,000',
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800&h=600&fit=crop',
    classification: 'Commercial'
  },
  {
    id: 'architectural',
    title: 'Architectural & Real Estate',
    description: 'Interior and exterior architectural photography focusing on perspective, geometry, and the interplay of shadow and light.',
    features: [
      'Tilt-shift lens perspective correction',
      'HDR ambient + flash exposure blending',
      'Sunset/Twilight exterior photography sessions',
      'Detail architectural texture close-ups',
      'Licensed files for agency marketing'
    ],
    price: 'From ₹75,000',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
    classification: 'Commercial'
  },
  {
    id: 'sports',
    title: 'Sports & Action Coverage',
    description: 'High-speed sports event coverage and professional athlete promotional shoots capturing peak moments of motion and emotion.',
    features: [
      'High frame rate sports action tracking',
      'Weather-sealed professional camera bodies',
      'Dynamic low-angle action perspective',
      'Editorial match action selection',
      'High ISO low-light stadium coverage'
    ],
    price: 'From ₹85,000',
    image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&h=600&fit=crop',
    classification: 'Personal'
  }
];
