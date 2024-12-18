import { Product } from '../types';

export const computerProducts: Product[] = [
  {
    id: 'computer-1',
    name: 'Custom Gaming PC',
    description: 'Experience unparalleled gaming performance with our flagship custom gaming PC. Featuring the latest NVIDIA RTX 4080 graphics card and Intel i9-13900K processor, this powerhouse delivers exceptional frame rates at 4K resolution. The 64GB of high-speed RAM ensures smooth multitasking, while the custom RGB lighting system adds a stunning visual appeal to your setup.',
    price: 3499.99,
    category: 'computers',
    image: 'https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1626&q=80',
    stock: 5,
    rating: 5,
    reviews: 23,
    specs: [
      { label: 'Processor', value: 'Intel Core i9-13900K' },
      { label: 'Graphics', value: 'NVIDIA RTX 4080 16GB' },
      { label: 'RAM', value: '64GB DDR5-6000' },
      { label: 'Storage', value: '2TB NVMe SSD + 4TB HDD' },
      { label: 'Cooling', value: 'Custom Liquid Cooling' },
      { label: 'Case', value: 'Lian Li PC-O11 Dynamic' }
    ]
  },
  {
    id: 'computer-2',
    name: 'HP Pavilion Gaming',
    description: 'The HP Pavilion Gaming Desktop is perfect for casual gamers and content creators. With its powerful RTX 3060 graphics card and AMD Ryzen 7 processor, it handles modern games and creative applications with ease. The compact design makes it ideal for any setup, while still offering room for future upgrades.',
    price: 1299.99,
    category: 'computers',
    image: 'https://images.unsplash.com/photo-1587202372616-b43abea06c2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1626&q=80',
    stock: 8,
    rating: 4,
    reviews: 45,
    specs: [
      { label: 'Processor', value: 'AMD Ryzen 7 5700G' },
      { label: 'Graphics', value: 'NVIDIA RTX 3060 12GB' },
      { label: 'RAM', value: '16GB DDR4-3200' },
      { label: 'Storage', value: '512GB NVMe SSD + 1TB HDD' },
      { label: 'Cooling', value: 'Air Cooling' },
      { label: 'Case', value: 'HP Pavilion Gaming Case' }
    ]
  },
  {
    id: 'computer-3',
    name: 'Apple iMac 24"',
    description: 'Transform your workspace with the stunning 24-inch iMac. Powered by Apple\'s revolutionary M1 chip, it delivers exceptional performance for both everyday tasks and professional workflows. The 4.5K Retina display with P3 wide color brings your content to life, while the ultra-thin design adds a touch of elegance to any room.',
    price: 1499.99,
    category: 'computers',
    image: 'https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1626&q=80',
    stock: 6,
    rating: 4.5,
    reviews: 67,
    specs: [
      { label: 'Processor', value: 'Apple M1 8-Core' },
      { label: 'Graphics', value: '8-Core GPU' },
      { label: 'RAM', value: '8GB Unified Memory' },
      { label: 'Storage', value: '256GB SSD' },
      { label: 'Display', value: '24" 4.5K Retina' },
      { label: 'Camera', value: '1080p FaceTime HD' }
    ]
  },
  {
    id: 'computer-4',
    name: 'Alienware Aurora R15',
    description: 'Push the boundaries of gaming with the Alienware Aurora R15. This premium gaming desktop features the most powerful consumer GPU ever made - the NVIDIA RTX 4090, paired with Intel\'s top-tier i9-13900KF processor. The innovative chassis design optimizes airflow for sustained peak performance, while the tool-less upgrade system ensures future expandability.',
    price: 4299.99,
    category: 'computers',
    image: 'https://images.unsplash.com/photo-1600861194942-f883de0dfe96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1626&q=80',
    stock: 3,
    rating: 4.5,
    reviews: 34,
    specs: [
      { label: 'Processor', value: 'Intel Core i9-13900KF' },
      { label: 'Graphics', value: 'NVIDIA RTX 4090 24GB' },
      { label: 'RAM', value: '64GB DDR5-6000' },
      { label: 'Storage', value: '4TB NVMe SSD' },
      { label: 'Cooling', value: 'Cryo-tech Cooling' },
      { label: 'Case', value: 'Alienware Legend 2.0' }
    ]
  }
];