import React from 'react';
import { useCartStore } from '../store/useCartStore';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus } from 'lucide-react';
import { formatCurrency } from '../utils/formatCurrency';

export function Cart() {
  const { items, removeItem, updateQuantity } = useCartStore();
  
  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <p className="text-gray-600 mb-8">Add some products to your cart to continue shopping</p>
        <Link
          to="/"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        {items.map((item) => (
          <div key={item.product.id} className="flex items-center py-6 border-b">
            <img
              src={item.product.image}
              alt={item.product.name}
              className="w-24 h-24 object-cover rounded-md"
            />
            <div className="flex-1 ml-6">
              <h3 className="text-lg font-semibold">{item.product.name}</h3>
              <p className="text-gray-600">{formatCurrency(item.product.price)}</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateQuantity(item.product.id, Math.max(0, item.quantity - 1))}
                  className="p-1 rounded-md hover:bg-gray-100"
                >
                  <Minus size={16} />
                </button>
                <span className="w-8 text-center">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                  className="p-1 rounded-md hover:bg-gray-100"
                >
                  <Plus size={16} />
                </button>
              </div>
              <button
                onClick={() => removeItem(item.product.id)}
                className="text-red-500 hover:text-red-600"
              >
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        ))}
        <div className="mt-8 flex justify-between items-center">
          <div>
            <p className="text-lg font-semibold">Total: {formatCurrency(total)}</p>
          </div>
          <Link
            to="/checkout"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}