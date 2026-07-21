import coverImg from './assets/images/cover.jpg';
import journalImg from './assets/images/journal.jpg';
import candleImg from './assets/images/candle.jpg';
import mugImg from './assets/images/mug.jpg';
import studyGuideImg from './assets/images/studyguide.jpg';
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'now-i-see-hardcover',
    title: 'Now I See — Hardcover Edition',
    price: 24.99,
    category: 'Books',
    image: coverImg,
    description: 'The premium, durable hardcover edition of Toni ME Taylor’s spiritual memoir. Beautifully printed with high-quality binding and vibrant lettering.',
    features: [
      'Gold foil display highlights',
      'Elegant cream-colored archival pages',
      'Durable library-quality library binding',
      'Includes the personal introductory letter'
    ],
    inStock: true
  },
  {
    id: 'now-i-see-paperback',
    title: 'Now I See — Paperback Edition',
    price: 14.99,
    category: 'Books',
    image: coverImg,
    description: 'The complete, uncompromised paperback edition of the memoir. Perfect for reading on the go, highlighting, and passing on to loved ones.',
    features: [
      'Soft-touch premium matte cover',
      'Easy-to-read elegant typography',
      'Lightweight and perfect for sharing',
      'Full 197 pages of testimony'
    ],
    inStock: true
  },
  {
    id: 'now-i-see-studyguide',
    title: '6-Week Guided Bible Study Guide',
    price: 19.99,
    category: 'Study',
    image: studyGuideImg,
    description: 'A beautifully structured 6-week companion bible study guide designed to go deeper into the memoir’s core themes of grace, truth, and free will.',
    features: [
      'Perfect for church small groups',
      'Weekly memory scriptures and journaling prompt lines',
      'In-depth study of James 1:25 and Romans 8:25',
      'Step-by-step reflection guide'
    ],
    inStock: true
  },
  {
    id: 'now-i-see-journal',
    title: 'Now I See — Linen Guided Study Journal',
    price: 12.99,
    category: 'Merchandise',
    image: journalImg,
    description: 'A luxury linen study journal decorated with matching gold lettering. Features guided prompt pages, motivational book quotes, and plenty of space for prayer requests.',
    features: [
      'Premium textured linen hard cover',
      'A5 size - perfect for study and prayer desks',
      '120 GSM ink-proof cream pages',
      'Gold ribbon bookmark ribbon'
    ],
    inStock: true
  },
  {
    id: 'now-i-see-candle',
    title: '“Keep the Flame” Soy Wax Candle',
    price: 18.99,
    category: 'Merchandise',
    image: candleImg,
    description: 'A hand-poured natural soy wax candle in an amber glass jar. Infused with a soothing scent of warm amber, sweet vanilla, and cedarwood.',
    features: [
      '100% natural, eco-friendly soy wax',
      'Up to 45 hours of clean, soot-free burn time',
      'Features a custom miniature lighthouse label',
      'Soothes the mind during evening quiet prayer'
    ],
    inStock: true
  },
  {
    id: 'now-i-see-mug',
    title: 'Liberty Lighthouse Ceramic Coffee Mug',
    price: 15.99,
    category: 'Merchandise',
    image: mugImg,
    description: 'A gorgeous dark-glazed ceramic mug featuring a glittering gold foil lighthouse imprint and Grandma Toni’s core quote: “We are God’s lighthouses.”',
    features: [
      'High-quality durable stoneware',
      'Comfortable 15 oz large-handle grip',
      'Shimmering gold metallic accents',
      'Perfect for your morning coffee or warm tea'
    ],
    inStock: true
  }
];
