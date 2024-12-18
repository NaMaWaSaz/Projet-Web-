import { Product } from '../types';

export const tvProducts: Product[] = [
  {
    id: 'tv-1',
    name: 'Sony 65" 4K OLED TV',
    description: 'Experience true-to-life picture quality with Sony\'s BRAVIA XR OLED TV. Powered by the Cognitive Processor XR, it delivers unprecedented contrast with pure blacks and vibrant colors. The acoustic surface technology turns the entire screen into a speaker for perfectly matched sound and picture. Perfect for movies, gaming, and sports.',
    price: 2799.99,
    category: 'tvs',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80',
    stock: 3,
    rating: 5,
    reviews: 42,
    specs: [
      { label: 'Display', value: '65" OLED 4K' },
      { label: 'Processor', value: 'Cognitive Processor XR' },
      { label: 'HDR', value: 'Dolby Vision, HDR10' },
      { label: 'Sound', value: 'Acoustic Surface Audio+' },
      { label: 'Smart TV', value: 'Google TV' },
      { label: 'Gaming', value: 'HDMI 2.1, 4K@120Hz' }
    ]
  },
  {
    id: 'tv-2',
    name: 'LG 77" OLED TV',
    description: 'Immerse yourself in the stunning world of LG\'s flagship OLED TV. The self-lit pixels deliver infinite contrast and perfect blacks, while the α9 Gen5 AI Processor 4K optimizes picture and sound quality. With NVIDIA G-SYNC and FreeSync Premium, it\'s also the perfect choice for next-gen gaming.',
    price: 3499.99,
    category: 'tvs',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80',
    stock: 2,
    rating: 4.5,
    reviews: 34,
    specs: [
      { label: 'Display', value: '77" OLED evo' },
      { label: 'Processor', value: 'α9 Gen5 AI Processor' },
      { label: 'HDR', value: 'Dolby Vision IQ' },
      { label: 'Sound', value: 'Dolby Atmos' },
      { label: 'Smart TV', value: 'webOS 22' },
      { label: 'Gaming', value: 'G-SYNC, FreeSync' }
    ]
  },
  {
    id: 'tv-3',
    name: 'Samsung 75" Neo QLED',
    description: 'Samsung\'s Neo QLED technology delivers breathtaking color, brightness, and contrast. Quantum Matrix Technology Pro precisely controls the Quantum Mini LEDs for exceptional picture quality. The Neural Quantum Processor 4K optimizes every scene, while Object Tracking Sound+ creates immersive 3D audio.',
    price: 3299.99,
    category: 'tvs',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80',
    stock: 4,
    rating: 4.5,
    reviews: 56,
    specs: [
      { label: 'Display', value: '75" Neo QLED 4K' },
      { label: 'Processor', value: 'Neural Quantum 4K' },
      { label: 'HDR', value: 'HDR10+' },
      { label: 'Sound', value: 'Object Tracking Sound+' },
      { label: 'Smart TV', value: 'Tizen' },
      { label: 'Gaming', value: 'Motion Xcelerator Turbo+' }
    ]
  },
  {
    id: 'tv-4',
    name: 'TCL 65" 6-Series',
    description: 'Experience premium features at an accessible price with the TCL 6-Series. Mini-LED technology and Quantum Dot color deliver bright, vivid pictures, while the enhanced gaming features ensure smooth gameplay. With Google TV built-in, you have access to all your favorite streaming content.',
    price: 999.99,
    category: 'tvs',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80',
    stock: 8,
    rating: 4,
    reviews: 128,
    specs: [
      { label: 'Display', value: '65" QLED' },
      { label: 'Technology', value: 'Mini-LED' },
      { label: 'HDR', value: 'Dolby Vision' },
      { label: 'Sound', value: 'Dolby Atmos' },
      { label: 'Smart TV', value: 'Google TV' },
      { label: 'Gaming', value: 'Variable Refresh Rate' }
    ]
  }
];