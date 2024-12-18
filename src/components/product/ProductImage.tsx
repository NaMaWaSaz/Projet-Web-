import React from 'react';

interface ProductImageProps {
  src: string;
  alt: string;
  stock: number;
}

export function ProductImage({ src, alt, stock }: ProductImageProps) {
  return (
    <div className="relative">
      <img
        src={src}
        alt={alt}
        className="w-full rounded-lg shadow-lg"
      />
      {stock < 5 && (
        <span className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
          Low Stock
        </span>
      )}
    </div>
  );
}