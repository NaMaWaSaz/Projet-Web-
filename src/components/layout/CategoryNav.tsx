import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Laptop, Cpu, Tv, Home } from 'lucide-react';

const categories = [
  { name: 'Computers', icon: Monitor, path: '/category/computers' },
  { name: 'Laptops', icon: Laptop, path: '/category/laptops' },
  { name: 'Components', icon: Cpu, path: '/category/components' },
  { name: 'TVs', icon: Tv, path: '/category/tvs' },
  { name: 'Home Appliances', icon: Home, path: '/category/appliances' },
];

export function CategoryNav() {
  return (
    <nav className="bg-gray-100 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex items-center justify-around">
          {categories.map((category) => (
            <li key={category.name}>
              <Link
                to={category.path}
                className="flex flex-col items-center space-y-1 text-gray-600 hover:text-blue-600"
              >
                <category.icon size={24} />
                <span className="text-sm">{category.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}