import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface CategoryLinkProps {
  category: string;
}

export function CategoryLink({ category }: CategoryLinkProps) {
  const getCategoryName = () => {
    const categories = {
      computers: 'Computers',
      laptops: 'Laptops',
      components: 'Components',
      tvs: 'TVs',
      appliances: 'Appliances'
    };
    return categories[category as keyof typeof categories] || 'Products';
  };

  return (
    <Link 
      to={`/category/${category}`} 
      className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
    >
      <ArrowLeft className="mr-2" size={20} />
      Back to {getCategoryName()}
    </Link>
  );
}