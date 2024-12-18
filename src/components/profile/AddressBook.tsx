import React from 'react';
import { Plus, Pencil, Trash2 } from 'lucide-react';

interface Address {
  id: string;
  name: string;
  street: string;
  city: string;
  state: string;
  postalCode: string;
  isDefault: boolean;
}

export function AddressBook() {
  const [addresses] = React.useState<Address[]>([
    {
      id: '1',
      name: 'Home',
      street: '123 Main St',
      city: 'Tunis',
      state: 'Tunis',
      postalCode: '1000',
      isDefault: true,
    },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-900">Saved Addresses</h3>
        <button
          type="button"
          className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add New Address
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {addresses.map((address) => (
          <div
            key={address.id}
            className="relative rounded-lg border border-gray-200 p-4 hover:border-gray-300"
          >
            {address.isDefault && (
              <span className="absolute top-2 right-2 rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                Default
              </span>
            )}
            <div className="space-y-2">
              <p className="font-medium text-gray-900">{address.name}</p>
              <p className="text-gray-600">{address.street}</p>
              <p className="text-gray-600">
                {address.city}, {address.state} {address.postalCode}
              </p>
            </div>
            <div className="mt-4 flex space-x-3">
              <button
                type="button"
                className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700"
              >
                <Pencil className="h-4 w-4 mr-1" />
                Edit
              </button>
              <button
                type="button"
                className="inline-flex items-center text-sm text-red-500 hover:text-red-700"
              >
                <Trash2 className="h-4 w-4 mr-1" />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}