export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Jessica & Michael',
    role: 'Bride & Groom',
    content: 'Our wedding photos are absolutely stunning. The photographer captured every emotion perfectly. We couldn\'t be happier with the results!',
    rating: 5
  },
  {
    id: '2',
    name: 'Robert Johnson',
    role: 'CEO, Tech Solutions Inc.',
    content: 'The corporate headshots look professionally polished. My team loved their portraits and they\'ve been perfect for our marketing materials.',
    rating: 5
  },
  {
    id: '3',
    name: 'Amanda Foster',
    role: 'Founder, Beauty Brand Co.',
    content: 'Our product photography elevated our e-commerce presence significantly. Sales increased by 30% after launching the new images.',
    rating: 5
  },
  {
    id: '4',
    name: 'Thomas Richards',
    role: 'Event Director, Global Conferences',
    content: 'The event coverage was impeccable. Every important moment was captured and delivered quickly. Highly professional team!',
    rating: 5
  },
  {
    id: '5',
    name: 'Patricia Wong',
    role: 'Magazine Editor',
    content: 'We\'ve used them for several editorial shoots. Consistently excellent work, creative ideas, and reliable delivery every single time.',
    rating: 5
  }
];
