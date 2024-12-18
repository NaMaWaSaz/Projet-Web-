import React, { useState } from 'react';
import { Upload, X } from 'lucide-react';
import { UseFormRegister } from 'react-hook-form';

interface ImageUploadProps {
  register: UseFormRegister<any>;
  error?: any;
}

export function ImageUpload({ register, error }: ImageUploadProps) {
  const [previews, setPreviews] = useState<string[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newPreviews = Array.from(files).map(file => URL.createObjectURL(file));
      setPreviews(prev => [...prev, ...newPreviews]);
    }
  };

  const removeImage = (index: number) => {
    setPreviews(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Product Images</h2>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          {previews.map((preview, index) => (
            <div key={index} className="relative">
              <img
                src={preview}
                alt={`Preview ${index + 1}`}
                className="w-full h-32 object-cover rounded-lg"
              />
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <label className="cursor-pointer inline-block">
            <div className="flex flex-col items-center">
              <Upload className="h-12 w-12 text-gray-400" />
              <span className="mt-2 text-sm text-gray-600">
                Upload images
              </span>
            </div>
            <input
              type="file"
              multiple
              accept="image/*"
              className="hidden"
              {...register('images')}
              onChange={handleImageChange}
            />
          </label>
          <p className="text-xs text-gray-500 mt-2">
            PNG, JPG up to 5MB (Maximum 8 images)
          </p>
        </div>
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
}