import { Product } from '../types';

export const componentProducts: Product[] = [
  {
    id: 'component-1',
    name: 'NVIDIA RTX 4090',
    description: 'Experience unprecedented gaming performance with the NVIDIA GeForce RTX 4090. Built on the NVIDIA Ada Lovelace architecture, this flagship GPU delivers revolutionary AI-powered graphics, incredibly detailed ray-traced worlds, and game-changing performance. With 24GB of G6X memory and advanced cooling design, it\'s perfect for 4K gaming and intensive creative workloads.',
    price: 1599.99,
    category: 'components',
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80',
    stock: 2,
    rating: 5,
    reviews: 67,
    specs: [
      { label: 'Architecture', value: 'NVIDIA Ada Lovelace' },
      { label: 'CUDA Cores', value: '16384' },
      { label: 'Memory', value: '24GB GDDR6X' },
      { label: 'Clock Speed', value: '2.52 GHz (Boost)' },
      { label: 'Power Usage', value: '450W' },
      { label: 'Ports', value: '3x DisplayPort 1.4, 1x HDMI 2.1' }
    ]
  },
  {
    id: 'component-2',
    name: 'AMD Ryzen 9 7950X',
    description: 'Push the boundaries of what\'s possible with the AMD Ryzen 9 7950X processor. With 16 cores and 32 threads, it delivers exceptional multi-threaded performance for demanding workloads. The Zen 4 architecture and 5nm process technology ensure maximum efficiency and performance, making it ideal for content creation, gaming, and professional applications.',
    price: 699.99,
    category: 'components',
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1626&q=80',
    stock: 8,
    rating: 4.5,
    reviews: 89,
    specs: [
      { label: 'Cores/Threads', value: '16/32' },
      { label: 'Base Clock', value: '4.5 GHz' },
      { label: 'Boost Clock', value: '5.7 GHz' },
      { label: 'Cache', value: '80MB Total' },
      { label: 'TDP', value: '170W' },
      { label: 'Socket', value: 'AM5' }
    ]
  },
  {
    id: 'component-3',
    name: 'Corsair Dominator 32GB RAM',
    description: 'Elevate your system\'s performance with Corsair Dominator Platinum RGB DDR5 memory. This high-performance 32GB kit features stunning RGB lighting, patented DHX cooling technology, and support for Intel XMP 3.0. The premium aluminum construction and hand-sorted memory chips ensure reliable operation at extreme speeds.',
    price: 189.99,
    category: 'components',
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1626&q=80',
    stock: 15,
    rating: 4.5,
    reviews: 45,
    specs: [
      { label: 'Capacity', value: '32GB (2x16GB)' },
      { label: 'Speed', value: 'DDR5-6000' },
      { label: 'Timings', value: 'CL36-36-36-76' },
      { label: 'Voltage', value: '1.35V' },
      { label: 'RGB', value: '12 Individually addressable' },
      { label: 'Profile', value: 'XMP 3.0 Support' }
    ]
  },
  {
    id: 'component-4',
    name: 'Samsung 990 PRO 2TB SSD',
    description: 'Experience blazing-fast storage speeds with the Samsung 990 PRO NVMe SSD. This cutting-edge drive delivers sequential read speeds up to 7,450 MB/s and write speeds up to 6,900 MB/s. With advanced thermal control and Samsung\'s proprietary controller, it maintains peak performance even under heavy loads. Perfect for gaming, content creation, and professional workloads.',
    price: 219.99,
    category: 'components',
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1626&q=80',
    stock: 12,
    rating: 4.5,
    reviews: 76,
    specs: [
      { label: 'Capacity', value: '2TB' },
      { label: 'Interface', value: 'PCIe 4.0 x4' },
      { label: 'Read Speed', value: '7,450 MB/s' },
      { label: 'Write Speed', value: '6,900 MB/s' },
      { label: 'NAND', value: 'V-NAND 3-bit MLC' },
      { label: 'Endurance', value: '1200 TBW' }
    ]
  }
];