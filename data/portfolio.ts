export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  location: string;
  camera: string;
  lens: string;
  aperture: string;
  shutterSpeed: string;
  iso: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Siberian Tiger in Winter',
    category: 'Behind the Lens: Rare Captures',
    image: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=1200&h=800&fit=crop',
    description: 'A striking profile of a Siberian tiger walking through the snow-dusted forest floor.',
    location: 'Siberia, Russia',
    camera: 'Sony Alpha 1',
    lens: 'FE 600mm f/4 GM OSS',
    aperture: 'f/4.0',
    shutterSpeed: '1/2000s',
    iso: '400'
  },
  {
    id: '2',
    title: 'Glacial Reflection',
    category: 'Behind the Lens: Rare Captures',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=800&fit=crop',
    description: 'Symmetrical reflection of snow-capped mountains in a mirror-still alpine lake.',
    location: 'Banff, Canada',
    camera: 'Fujifilm GFX 100S',
    lens: 'GF 23mm f/4 R LM WR',
    aperture: 'f/11',
    shutterSpeed: '1/15s',
    iso: '100'
  },
  {
    id: '3',
    title: 'Corporate Leadership Headshot',
    category: 'Impactful Commercial Shoots',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&h=800&fit=crop',
    description: 'Professional environmental headshot focusing on confidence, authority, and approachability.',
    location: 'New York, USA',
    camera: 'Canon EOS R5',
    lens: 'RF 85mm f/1.2L USM',
    aperture: 'f/1.4',
    shutterSpeed: '1/200s',
    iso: '100'
  },
  {
    id: '4',
    title: 'Forest Wedding Vows',
    category: 'Ethereal Wedding Moments',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=800&fit=crop',
    description: 'An intimate moment between a bride and groom during their outdoor forest ceremony.',
    location: 'Oregon, USA',
    camera: 'Sony Alpha 7R V',
    lens: 'FE 50mm f/1.2 GM',
    aperture: 'f/1.8',
    shutterSpeed: '1/500s',
    iso: '250'
  },
  {
    id: '5',
    title: 'Luxury Perfume Campaign',
    category: 'Impactful Commercial Shoots',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=1200&h=800&fit=crop',
    description: 'Studio product shot of a luxury perfume bottle utilizing high-end commercial backlight setups.',
    location: 'London, UK',
    camera: 'Phase One XF IQ4 150MP',
    lens: 'Schneider Kreuznach 120mm LS Macro f/4.0',
    aperture: 'f/8.0',
    shutterSpeed: '1/160s',
    iso: '50'
  },
  {
    id: '6',
    title: 'Shinjuku Neon Rain',
    category: 'Behind the Lens: Rare Captures',
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=1200&h=800&fit=crop',
    description: 'Vibrant neon light reflections on wet streets in the heart of Tokyo during a rainy night.',
    location: 'Tokyo, Japan',
    camera: 'Leica M11',
    lens: 'Summilux-M 35mm f/1.4 ASPH',
    aperture: 'f/2.0',
    shutterSpeed: '1/125s',
    iso: '800'
  },
  {
    id: '7',
    title: 'Avant-Garde Editorial',
    category: 'Impactful Commercial Shoots',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1200&h=800&fit=crop',
    description: 'A dynamic outdoor editorial fashion shot showing movement and luxury textures.',
    location: 'Paris, France',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 90mm f/2.5',
    aperture: 'f/2.8',
    shutterSpeed: '1/250s',
    iso: '64'
  },
  {
    id: '8',
    title: 'Crest of the Wave',
    category: 'Behind the Lens: Rare Captures',
    image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1200&h=800&fit=crop',
    description: 'A high-speed capture of a professional surfer cutting through a massive ocean barrel.',
    location: 'Oahu, Hawaii',
    camera: 'Nikon Z9',
    lens: 'NIKKOR Z 400mm f/2.8 TC VR S',
    aperture: 'f/4.0',
    shutterSpeed: '1/4000s',
    iso: '200'
  },
  {
    id: '9',
    title: 'Festival Mainstage Glow',
    category: 'Impactful Commercial Shoots',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&h=800&fit=crop',
    description: 'Wide shot capturing the energy and laser display of a live music festival crowd.',
    location: 'Sydney, Australia',
    camera: 'Sony Alpha 7S III',
    lens: 'FE 24-70mm f/2.8 GM II',
    aperture: 'f/2.8',
    shutterSpeed: '1/160s',
    iso: '1600'
  },
  {
    id: '10',
    title: 'Brutalist Concrete Lines',
    category: 'Behind the Lens: Rare Captures',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop',
    description: 'Dramatic lighting highlighting geometric concrete lines of modernist brutalist structures.',
    location: 'Berlin, Germany',
    camera: 'Canon EOS R5',
    lens: 'TS-E 17mm f/4L Tilt-Shift',
    aperture: 'f/8.0',
    shutterSpeed: '1/60s',
    iso: '100'
  },
  {
    id: '11',
    title: 'Forest Dewdrop Macro',
    category: 'Behind the Lens: Rare Captures',
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1200&h=800&fit=crop',
    description: 'Incredible magnification of micro water droplets suspended on a delicate forest fern leaf.',
    location: 'Kyoto, Japan',
    camera: 'OM System OM-1',
    lens: 'M.Zuiko Digital ED 90mm f/3.5 Macro IS PRO',
    aperture: 'f/5.6',
    shutterSpeed: '1/100s',
    iso: '320'
  },
  {
    id: '12',
    title: 'Milky Way Arch over Canyonlands',
    category: 'Behind the Lens: Rare Captures',
    image: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1200&h=800&fit=crop',
    description: 'A composite panoramic exposure showing the complete galactic core arching over rock formations.',
    location: 'Utah, USA',
    camera: 'Nikon Z7 II',
    lens: 'NIKKOR Z 14-24mm f/2.8 S',
    aperture: 'f/2.8',
    shutterSpeed: '20s',
    iso: '3200'
  },
  {
    id: '13',
    title: 'The Great Migration Crossing',
    category: 'Behind the Lens: Rare Captures',
    image: 'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?w=1200&h=800&fit=crop',
    description: 'Zebras and wildebeests attempting the dangerous river crossing, avoiding predators.',
    location: 'Mara River, Kenya',
    camera: 'Sony Alpha 1',
    lens: 'FE 400mm f/2.8 GM OSS',
    aperture: 'f/2.8',
    shutterSpeed: '1/1600s',
    iso: '250'
  },
  {
    id: '14',
    title: 'Golden Sand Dunes',
    category: 'Behind the Lens: Rare Captures',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=1200&h=800&fit=crop',
    description: 'Elegant patterns of shifting desert sand dunes glowing under the low golden sunset.',
    location: 'Sahara, Morocco',
    camera: 'Canon EOS R5',
    lens: 'RF 24-105mm f/4L IS USM',
    aperture: 'f/8.0',
    shutterSpeed: '1/80s',
    iso: '100'
  },
  {
    id: '15',
    title: 'Atmospheric Street Silhouette',
    category: 'Behind the Lens: Rare Captures',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&h=800&fit=crop',
    description: 'A solitary pedestrian walking through thick city fog illuminated by vintage streetlamps.',
    location: 'Chicago, USA',
    camera: 'Ricoh GR III',
    lens: '18.3mm f/2.8 (28mm equiv)',
    aperture: 'f/4.0',
    shutterSpeed: '1/250s',
    iso: '400'
  }
];

export const categories = [
  'All',
  'Ethereal Wedding Moments',
  'Impactful Commercial Shoots',
  'Behind the Lens: Rare Captures'
];
