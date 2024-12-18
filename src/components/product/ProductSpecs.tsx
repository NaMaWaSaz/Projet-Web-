import React from 'react';

interface Spec {
  label: string;
  value: string;
}

interface ProductSpecsProps {
  specs: Spec[];
}

export function ProductSpecs({ specs }: ProductSpecsProps) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <h3 className="font-semibold mb-2">Key Specifications:</h3>
      <ul className="space-y-2 text-sm text-gray-600">
        {specs?.map((spec, index) => (
          <li key={index} className="flex items-center">
            <span className="w-24 font-medium">{spec.label}:</span>
            <span>{spec.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}