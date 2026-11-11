export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: 'Apple' | 'Samsung' | 'Google' | 'Oppo' | 'Accessory';
  category: string;
  price: number;
  originalPrice?: number;
  badge?: string;
  stock: number;
  image: string;
  description: string;
  features: string[];
  specs: Record<string, string>;
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    slug: 'iphone-16-pro-max',
    name: 'iPhone 16 Pro Max (512GB) — Desert Titanium',
    brand: 'Apple',
    category: 'Flagship Smartphone',
    price: 1850000,
    originalPrice: 1980000,
    badge: 'China Pre-Order',
    stock: 8,
    image: '/products/iphone-16-promax.webp',
    description: 'Apple flagship featuring the A18 Pro chip, Grade 5 Titanium chassis, 48MP Fusion camera system, and all-day battery life. Direct China factory pre-order.',
    features: [
      'A18 Pro Chip with 6-Core GPU',
      '6.9-inch Super Retina XDR ProMotion Display',
      '48MP Fusion Camera with 5x Telephoto',
      'Action Button & Camera Control',
      'Guangzhou Skycargo Flight Freight'
    ],
    specs: {
      Storage: '512GB',
      Color: 'Desert Titanium',
      Condition: 'Brand New Sealed',
      Network: 'Factory Unlocked (Physical SIM + eSIM)'
    }
  },
  {
    id: '2',
    slug: 'iphone-16-pro',
    name: 'iPhone 16 Pro (256GB) — Natural Titanium',
    brand: 'Apple',
    category: 'Flagship Smartphone',
    price: 1550000,
    originalPrice: 1650000,
    badge: 'Popular',
    stock: 12,
    image: '/products/iphone16-png38.webp',
    description: 'Pro performance in a compact 6.3-inch design. Titanium build, A18 Pro chip, and advanced 4K 120 fps Dolby Vision video recording.',
    features: [
      'A18 Pro Bionic Architecture',
      '6.3-inch Always-On Display',
      '48MP Ultra Wide & 5x Telephoto',
      'USB-C with USB 3 Speeds'
    ],
    specs: {
      Storage: '256GB',
      Color: 'Natural Titanium',
      Condition: 'Brand New Sealed',
      Network: 'Factory Unlocked'
    }
  },
  {
    id: '3',
    slug: 'iphone-15-pro-max',
    name: 'iPhone 15 Pro Max (256GB) — Blue Titanium',
    brand: 'Apple',
    category: 'Flagship Smartphone',
    price: 1350000,
    originalPrice: 1450000,
    badge: 'Best Value',
    stock: 15,
    image: '/products/i-phone-15-pro-max-black-premium-smartphone-png-transparent-luxurious-design.webp',
    description: 'Lightweight titanium design with A17 Pro processor, 5x optical zoom, and USB-C. Fully tested IMEI verified stock.',
    features: [
      'A17 Pro 3nm Chip',
      '6.7-inch Super Retina XDR',
      '5x Optical Zoom Telephoto',
      'Titanium Frame'
    ],
    specs: {
      Storage: '256GB',
      Color: 'Blue Titanium',
      Condition: 'Grade A+ / Factory Sealed Available',
      Network: 'Unlocked'
    }
  },
  {
    id: '4',
    slug: 'samsung-s25-ultra',
    name: 'Samsung Galaxy S25 Ultra (512GB) — Titanium Gray',
    brand: 'Samsung',
    category: 'Android Flagship',
    price: 1780000,
    originalPrice: 1900000,
    badge: 'New Arrival',
    stock: 6,
    image: '/products/samsung-galaxy-s25-ultra-titanium-black-premium-smartphone-1.webp',
    description: 'Samsung ultimate Galaxy AI flagship with Snapdragon 8 Elite, 200MP camera system, anti-reflective display, and built-in S-Pen.',
    features: [
      'Snapdragon 8 Elite for Galaxy',
      '200MP Quad Camera with AI Zoom',
      'Built-in S-Pen Stylus',
      'Dynamic AMOLED 2X 120Hz'
    ],
    specs: {
      Storage: '512GB / 12GB RAM',
      Color: 'Titanium Gray',
      Condition: 'Brand New Sealed',
      Network: 'Dual SIM Unlocked'
    }
  },
  {
    id: '5',
    slug: 'samsung-s24-ultra',
    name: 'Samsung Galaxy S24 Ultra (256GB) — Titanium Black',
    brand: 'Samsung',
    category: 'Android Flagship',
    price: 1380000,
    originalPrice: 1480000,
    badge: 'Wholesale Discount',
    stock: 10,
    image: '/products/samsung-galaxy-s24-ultra-flagship-smartphone-transparent-png-image.webp',
    description: 'Galaxy AI smartphone powered by Snapdragon 8 Gen 3, Titanium body, live call translation, and 100x Space Zoom.',
    features: [
      'Snapdragon 8 Gen 3 for Galaxy',
      'Circle to Search with Google',
      '200MP Main Sensor',
      '5000mAh Battery'
    ],
    specs: {
      Storage: '256GB / 12GB RAM',
      Color: 'Titanium Black',
      Condition: 'Brand New Sealed',
      Network: 'Dual SIM Unlocked'
    }
  },
  {
    id: '6',
    slug: 'google-pixel-9-pro',
    name: 'Google Pixel 9 Pro (256GB) — Obsidian',
    brand: 'Google',
    category: 'Android Flagship',
    price: 1250000,
    originalPrice: 1350000,
    badge: 'AI Camera',
    stock: 7,
    image: '/products/google-pixel-9-pro.png',
    description: 'Google AI phone powered by Tensor G4 chip, Gemini Advanced built-in, Super Res Zoom, and cleanest Android 15 software experience.',
    features: [
      'Google Tensor G4 Processor',
      'Gemini AI Assistant Integration',
      'Pro Triple Rear Camera System',
      '7 Years of OS Updates'
    ],
    specs: {
      Storage: '256GB / 16GB RAM',
      Color: 'Obsidian Black',
      Condition: 'Brand New Sealed',
      Network: 'Unlocked'
    }
  },
  {
    id: '7',
    slug: 'airpods-max',
    name: 'Apple AirPods Max (USB-C) — Space Gray',
    brand: 'Accessory',
    category: 'Audio',
    price: 680000,
    originalPrice: 740000,
    badge: 'Premium Audio',
    stock: 9,
    image: '/products/airpods-max.webp',
    description: 'Over-ear wireless headphones with Active Noise Cancellation, Transparency mode, Spatial Audio, and USB-C fast charging.',
    features: [
      'Apple H1 Headphone Chips',
      'Pro-Level Active Noise Cancellation',
      'Personalized Spatial Audio',
      '20 Hours Listening Time'
    ],
    specs: {
      Type: 'Over-Ear Wireless',
      Charging: 'USB-C Cable',
      Condition: 'Brand New Sealed'
    }
  },
  {
    id: '8',
    slug: 'apple-watch-ultra',
    name: 'Apple Watch Ultra 2 (49mm Titanium)',
    brand: 'Accessory',
    category: 'Wearable',
    price: 920000,
    originalPrice: 980000,
    badge: 'Rugged GPS',
    stock: 5,
    image: '/products/apple-watch-ultra.webp',
    description: 'Most capable Apple smartwatch with S9 SiP, double tap gesture, 3000 nits display, precision dual-frequency GPS, and 36-hour battery.',
    features: [
      '49mm Aerospace Titanium Case',
      '3000 Nits Always-On Retina Display',
      'Water Resistant 100m / Dive Computer',
      'Cellular + GPS'
    ],
    specs: {
      Size: '49mm Titanium',
      Band: 'Black Ocean Band',
      Condition: 'Brand New Sealed'
    }
  },
  {
    id: '9',
    slug: 'google-pixel-10-pro',
    name: 'Google Pixel 10 Pro (256GB) — Obsidian',
    brand: 'Google',
    category: 'Android Flagship',
    price: 1650000,
    originalPrice: 1750000,
    badge: 'New Arrival',
    stock: 6,
    image: '/products/google-pixel-10-pro.png',
    description: 'Google AI flagship with the Tensor G5 chip, Gemini built in, a pro triple camera system and a clean Android experience.',
    features: [
      'Google Tensor G5 Processor',
      '6.3-inch Super Actua OLED Display',
      'Pro Triple Rear Camera System',
      '7 Years of OS Updates'
    ],
    specs: {
      Storage: '256GB',
      Color: 'Obsidian',
      Condition: 'Brand New Sealed',
      Network: 'Unlocked'
    }
  },
  {
    id: '10',
    slug: 'iphone-17-pro-max',
    name: 'iPhone 17 Pro Max (256GB) — Cosmic Orange',
    brand: 'Apple',
    category: 'Flagship Smartphone',
    price: 2450000,
    originalPrice: 2600000,
    badge: 'Latest',
    stock: 5,
    image: '/products/iphone-17-pro-max.png',
    description: 'Apple latest Pro Max with the A19 Pro chip, a large 6.9-inch ProMotion display and an advanced pro camera system.',
    features: [
      'A19 Pro Chip',
      '6.9-inch Super Retina XDR ProMotion Display',
      'Pro Fusion Camera System with Telephoto',
      'USB-C Fast Charging'
    ],
    specs: {
      Storage: '256GB',
      Color: 'Cosmic Orange',
      Condition: 'Brand New Sealed',
      Network: 'Factory Unlocked'
    }
  },
  {
    id: '11',
    slug: 'iphone-13-pro-max',
    name: 'iPhone 13 Pro Max (256GB) — Sierra Blue',
    brand: 'Apple',
    category: 'Flagship Smartphone',
    price: 750000,
    originalPrice: 820000,
    badge: 'Budget Pick',
    stock: 14,
    image: '/products/iphone-13-pro-max.png',
    description: 'A proven flagship with the A15 Bionic chip, ProMotion 120Hz display and excellent battery life. Tested and IMEI verified.',
    features: [
      'A15 Bionic Chip',
      '6.7-inch Super Retina XDR ProMotion',
      'Pro Camera System with 3x Optical Zoom',
      'Excellent Battery Life'
    ],
    specs: {
      Storage: '256GB',
      Color: 'Sierra Blue',
      Condition: 'Grade A+ / Tested',
      Network: 'Factory Unlocked'
    }
  },
  {
    id: '12',
    slug: 'oppo-reno-14-pro',
    name: 'Oppo Reno 14 Pro (512GB) — Pearl White',
    brand: 'Oppo',
    category: 'Android Smartphone',
    price: 720000,
    originalPrice: 780000,
    badge: 'Portrait Camera',
    stock: 10,
    image: '/products/oppo-reno-14-pro.png',
    description: 'Stylish mid-premium phone built for portraits, with a large curved AMOLED display, a big battery and fast charging.',
    features: [
      '6.83-inch Curved AMOLED Display',
      'Triple 50MP Camera System',
      'Large Battery with Fast Charging',
      'Slim Premium Design'
    ],
    specs: {
      Storage: '512GB',
      Color: 'Pearl White',
      Condition: 'Brand New Sealed',
      Network: 'Dual SIM Unlocked'
    }
  },
  {
    id: '13',
    slug: 'oppo-reno-8-5g',
    name: 'Oppo Reno 8 5G (256GB) — Shimmer Gold',
    brand: 'Oppo',
    category: 'Android Smartphone',
    price: 380000,
    originalPrice: 420000,
    badge: 'Great Value',
    stock: 12,
    image: '/products/oppo-reno-8-5g.png',
    description: 'A 5G phone with a sharp AMOLED display, a 50MP camera and 80W SuperVOOC charging at an affordable price.',
    features: [
      '6.4-inch AMOLED 90Hz Display',
      '50MP Main Camera',
      '80W SuperVOOC Fast Charging',
      '5G Connectivity'
    ],
    specs: {
      Storage: '256GB',
      Color: 'Shimmer Gold',
      Condition: 'Brand New Sealed',
      Network: 'Dual SIM Unlocked'
    }
  },
  {
    id: '14',
    slug: 'oppo-turbo-k13-pro',
    name: 'Oppo K13 Turbo Pro (512GB)',
    brand: 'Oppo',
    category: 'Gaming Smartphone',
    price: 650000,
    originalPrice: 710000,
    badge: 'China Pre-Order',
    stock: 7,
    image: '/products/oppo-turbo-k13-pro.png',
    description: 'Performance-focused phone with a huge battery, fast charging and an active cooling design for long gaming sessions.',
    features: [
      'Flagship-Class Snapdragon Processor',
      'Active Cooling System',
      '7000mAh Battery with Fast Charging',
      'High-Refresh AMOLED Display'
    ],
    specs: {
      Storage: '512GB',
      Condition: 'Brand New Sealed',
      Network: 'Dual SIM Unlocked',
      Note: 'China-market model'
    }
  },
  {
    id: '15',
    slug: 'samsung-z-fold-5',
    name: 'Samsung Galaxy Z Fold 5 (512GB) — Phantom Black',
    brand: 'Samsung',
    category: 'Foldable Smartphone',
    price: 1150000,
    originalPrice: 1280000,
    badge: 'Foldable',
    stock: 4,
    image: '/products/samsung-z-fold-5.png',
    description: 'Tablet-sized foldable with a 7.6-inch inner display, Snapdragon 8 Gen 2 and a refined flex hinge.',
    features: [
      'Snapdragon 8 Gen 2 for Galaxy',
      '7.6-inch Dynamic AMOLED 2X Inner Display',
      '6.2-inch Cover Display',
      'Multi-Window Productivity'
    ],
    specs: {
      Storage: '512GB / 12GB RAM',
      Color: 'Phantom Black',
      Condition: 'Brand New Sealed',
      Network: 'Dual SIM Unlocked'
    }
  },
  {
    id: '16',
    slug: 'samsung-z-fold-6',
    name: 'Samsung Galaxy Z Fold 6 (512GB) — Silver Shadow',
    brand: 'Samsung',
    category: 'Foldable Smartphone',
    price: 1650000,
    originalPrice: 1780000,
    badge: 'Galaxy AI',
    stock: 4,
    image: '/products/samsung-z-fold-6.png',
    description: 'Lighter, tougher foldable with Snapdragon 8 Gen 3, Galaxy AI features and a brighter, wider cover display.',
    features: [
      'Snapdragon 8 Gen 3 for Galaxy',
      '7.6-inch Dynamic AMOLED 2X Inner Display',
      'Galaxy AI Features',
      'Armor Aluminum Frame'
    ],
    specs: {
      Storage: '512GB / 12GB RAM',
      Color: 'Silver Shadow',
      Condition: 'Brand New Sealed',
      Network: 'Dual SIM Unlocked'
    }
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}