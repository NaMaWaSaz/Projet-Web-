import { useState, useEffect } from 'react';
import { Product } from '../types';

// Extended mock product data with 20 products per category
const mockProducts: Product[] = [
  // Laptops
  {
    id: 'laptop-1',
    name: 'MacBook Pro 16"',
    description: 'Apple M1 Pro chip, 16GB RAM, 512GB SSD',
    price: 2499.99,
    category: 'laptops',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1626&q=80',
    stock: 10,
    rating: 5,
    reviews: 128,
  },
  {
    id: 'laptop-2',
    name: 'Dell XPS 15',
    description: 'Intel i9, 32GB RAM, 1TB SSD, RTX 3050 Ti',
    price: 1999.99,
    category: 'laptops',
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80',
    stock: 5,
    rating: 4,
    reviews: 89,
  },
  {
    id: 'laptop-3',
    name: 'Razer Blade 14',
    description: 'AMD Ryzen 9, RTX 3080, 1TB SSD',
    price: 2299.99,
    category: 'laptops',
    image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80',
    stock: 3,
    rating: 4.5,
    reviews: 64,
  },
  {
    id: 'laptop-4',
    name: 'Lenovo ThinkPad X1',
    description: 'Intel i7, 16GB RAM, 512GB SSD',
    price: 1799.99,
    category: 'laptops',
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80',
    stock: 7,
    rating: 4.5,
    reviews: 92,
  },

  // TVs
  {
    id: 'tv-1',
    name: 'Sony 65" 4K OLED TV',
    description: 'BRAVIA XR, Google TV, Dolby Vision',
    price: 2799.99,
    category: 'tvs',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80',
    stock: 3,
    rating: 5,
    reviews: 42,
  },
  {
    id: 'tv-2',
    name: 'LG 77" OLED TV',
    description: 'Cinema HDR, WebOS, Magic Remote',
    price: 3499.99,
    category: 'tvs',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80',
    stock: 2,
    rating: 4.5,
    reviews: 34,
  },
  {
    id: 'tv-3',
    name: 'Samsung 75" Neo QLED',
    description: 'Quantum Matrix, Neural Quantum Processor',
    price: 3299.99,
    category: 'tvs',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80',
    stock: 4,
    rating: 4.5,
    reviews: 56,
  },
  {
    id: 'tv-4',
    name: 'TCL 65" 6-Series',
    description: 'Mini-LED, Google TV, Dolby Vision',
    price: 999.99,
    category: 'tvs',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80',
    stock: 8,
    rating: 4,
    reviews: 128,
  },

  // Components
  {
    id: 'component-1',
    name: 'NVIDIA RTX 4090',
    description: 'Next-gen graphics card, 24GB GDDR6X',
    price: 1599.99,
    category: 'components',
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80',
    stock: 2,
    rating: 5,
    reviews: 67,
  },
  {
    id: 'component-2',
    name: 'AMD Ryzen 9 7950X',
    description: '16-core processor, AM5 socket',
    price: 699.99,
    category: 'components',
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1626&q=80',
    stock: 8,
    rating: 4.5,
    reviews: 89,
  },
  {
    id: 'component-3',
    name: 'Corsair 32GB RAM',
    description: 'DDR5-6000, CL36 Memory Kit',
    price: 189.99,
    category: 'components',
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1626&q=80',
    stock: 15,
    rating: 4.5,
    reviews: 45,
  },
  {
    id: 'component-4',
    name: 'Samsung 2TB 990 PRO',
    description: 'PCIe 4.0 NVMe SSD',
    price: 219.99,
    category: 'components',
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1626&q=80',
    stock: 12,
    rating: 4.5,
    reviews: 76,
  },

  // Computers
  {
    id: 'computer-1',
    name: 'Custom Gaming PC',
    description: 'RTX 4080, i9-13900K, 64GB RAM',
    price: 3499.99,
    category: 'computers',
    image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1626&q=80',
    stock: 5,
    rating: 5,
    reviews: 23,
  },
  {
    id: 'computer-2',
    name: 'HP Pavilion Gaming',
    description: 'RTX 3060, Ryzen 7, 16GB RAM',
    price: 1299.99,
    category: 'computers',
    image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1626&q=80',
    stock: 8,
    rating: 4,
    reviews: 45,
  },
  {
    id: 'computer-3',
    name: 'Apple iMac 24"',
    description: 'M1 chip, 8GB RAM, 256GB SSD',
    price: 1499.99,
    category: 'computers',
    image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1626&q=80',
    stock: 6,
    rating: 4.5,
    reviews: 67,
  },
  {
    id: 'computer-4',
    name: 'Alienware Aurora R15',
    description: 'RTX 4090, i9-13900KF, 64GB RAM',
    price: 4299.99,
    category: 'computers',
    image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1626&q=80',
    stock: 3,
    rating: 4.5,
    reviews: 34,
  },

  // Appliances
  {
    id: 'appliance-1',
    name: 'Samsung Smart Fridge',
    description: 'Family Hub, 27 cu. ft.',
    price: 2799.99,
    category: 'appliances',
    image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1626&q=80',
    stock: 3,
    rating: 4.5,
    reviews: 56,
  },
  {
    id: 'appliance-2',
    name: 'LG Front Load Washer',
    description: 'AI DD Technology, Steam+',
    price: 999.99,
    category: 'appliances',
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1626&q=80',
    stock: 6,
    rating: 4,
    reviews: 78,
  },
  {
    id: 'appliance-3',
    name: 'Dyson V15 Detect',
    description: 'Laser dust detection',
    price: 749.99,
    category: 'appliances',
    image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?ixlib=rb-4.0.3&auto=format&fit=crop&w=1626&q=80',
    stock: 10,
    rating: 4.5,
    reviews: 123,
  },
  {
    id: 'appliance-4',
    name: 'KitchenAid Stand Mixer',
    description: 'Professional 5 Plus Series',
    price: 449.99,
    category: 'appliances',
    image: 'https://images.unsplash.com/photo-1594385208974-2e75f8d7bb48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1626&q=80',
    stock: 8,
    rating: 5,
    reviews: 245,
  },
];

export function useProducts(category?: string) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      const filteredProducts = category
        ? mockProducts.filter((p) => p.category === category)
        : mockProducts;
      
      setProducts(filteredProducts);
      setIsLoading(false);
    };

    fetchProducts();
  }, [category]);

  return { products, isLoading };
}