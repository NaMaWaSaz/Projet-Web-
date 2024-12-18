import React from 'react';

interface CategoryHeroProps {
  title: string;
  description: string;
  image: string;
}

export function CategoryHero({ title, description, image }: CategoryHeroProps) {
  return (
    <div className="relative h-64 overflow-hidden rounded-xl">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">{title}</h1>
          <p className="text-lg text-gray-200">{description}</p>
        </div>
      </div>
    </div>
  );
}