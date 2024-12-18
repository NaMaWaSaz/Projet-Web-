import { Product } from '../types';

export const laptopProducts: Product[] = [
  {
    id: 'laptop-1',
    name: 'MacBook Pro 16"',
    description: 'Experience extraordinary performance with the MacBook Pro 16". Powered by the Apple M1 Pro chip, this laptop delivers exceptional speed and efficiency for professional workflows. The stunning Liquid Retina XDR display offers extreme dynamic range and incredible color accuracy, while the advanced thermal system ensures sustained performance under heavy workloads.',
    price: 2499.99,
    category: 'laptops',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1626&q=80',
    stock: 10,
    rating: 5,
    reviews: 128,
    specs: [
      { label: 'Processor', value: 'Apple M1 Pro 10-Core' },
      { label: 'Graphics', value: '16-Core GPU' },
      { label: 'RAM', value: '16GB Unified Memory' },
      { label: 'Storage', value: '512GB SSD' },
      { label: 'Display', value: '16" Liquid Retina XDR' },
      { label: 'Battery', value: 'Up to 21 hours' }
    ]
  },
  {
    id: 'laptop-2',
    name: 'Dell XPS 15',
    description: 'The Dell XPS 15 combines power and portability in a premium package. With its stunning 4K OLED display, powerful Intel i9 processor, and NVIDIA RTX graphics, it\'s perfect for content creators and professionals. The premium build quality and excellent keyboard make it a joy to use for long working sessions.',
    price: 1999.99,
    category: 'laptops',
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80',
    stock: 5,
    rating: 4,
    reviews: 89,
    specs: [
      { label: 'Processor', value: 'Intel i9-13900H' },
      { label: 'Graphics', value: 'NVIDIA RTX 3050 Ti' },
      { label: 'RAM', value: '32GB DDR5' },
      { label: 'Storage', value: '1TB NVMe SSD' },
      { label: 'Display', value: '15.6" 4K OLED' },
      { label: 'Battery', value: 'Up to 12 hours' }
    ]
  },
  {
    id: 'laptop-3',
    name: 'Razer Blade 14',
    description: 'The Razer Blade 14 is the ultimate compact gaming laptop. Despite its portable size, it packs the powerful AMD Ryzen 9 processor and NVIDIA RTX 3080 graphics card for exceptional gaming performance. The 165Hz QHD display ensures smooth, vibrant visuals, while the vapor chamber cooling keeps temperatures in check.',
    price: 2299.99,
    category: 'laptops',
    image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80',
    stock: 3,
    rating: 4.5,
    reviews: 64,
    specs: [
      { label: 'Processor', value: 'AMD Ryzen 9 6900HX' },
      { label: 'Graphics', value: 'NVIDIA RTX 3080 8GB' },
      { label: 'RAM', value: '16GB DDR5' },
      { label: 'Storage', value: '1TB NVMe SSD' },
      { label: 'Display', value: '14" QHD 165Hz' },
      { label: 'Cooling', value: 'Vapor Chamber' }
    ]
  },
  {
    id: 'laptop-4',
    name: 'Lenovo ThinkPad X1',
    description: 'The Lenovo ThinkPad X1 Carbon is the perfect business laptop. Its lightweight carbon fiber construction and long battery life make it ideal for mobile professionals. With Intel vPro technology and advanced security features, it keeps your data safe while delivering reliable performance for all your business needs.',
    price: 1799.99,
    category: 'laptops',
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80',
    stock: 7,
    rating: 4.5,
    reviews: 92,
    specs: [
      { label: 'Processor', value: 'Intel i7-1270P vPro' },
      { label: 'Graphics', value: 'Intel Iris Xe' },
      { label: 'RAM', value: '16GB LPDDR5' },
      { label: 'Storage', value: '512GB NVMe SSD' },
      { label: 'Display', value: '14" 2.8K OLED' },
      { label: 'Security', value: 'TPM 2.0, IR Camera' }
    ]
  }
];