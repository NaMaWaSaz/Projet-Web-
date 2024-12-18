import React from 'react';
import { Link } from 'react-router-dom';
import { Package, DollarSign, Users, Plus, Settings } from 'lucide-react';

export function SellerDashboard() {
  const stats = [
    { label: 'Total Products', value: '124', icon: Package, color: 'bg-blue-500' },
    { label: 'Total Sales', value: '$12,456', icon: DollarSign, color: 'bg-green-500' },
    { label: 'Total Customers', value: '1,234', icon: Users, color: 'bg-purple-500' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Seller Dashboard</h1>
        <Link
          to="/seller/products/new"
          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          <Plus size={20} />
          <span>Add New Product</span>
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Products */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold">Recent Products</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="flex items-center justify-between px-6 py-4 hover:bg-gray-50">
              <div className="flex items-center">
                <img
                  src={`https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=100`}
                  alt="Product"
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div className="ml-4">
                  <p className="font-medium">Gaming PC Pro {item}</p>
                  <p className="text-sm text-gray-600">Added on March {item + 10}, 2024</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-green-600 font-medium">$1,299.99</span>
                <button className="text-gray-400 hover:text-gray-500">
                  <Settings size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}