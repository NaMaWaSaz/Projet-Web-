import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Store } from 'lucide-react';

export function HeroSection() {
  return (
    <div className="relative bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block">Black Friday Deals</span>
                <span className="block text-blue-500">Up to 70% Off</span>
              </h1>
              <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Discover amazing deals on the latest electronics. From laptops to smartphones, we've got everything you need at unbeatable prices.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start space-x-4">
                <Link
                  to="/category/deals"
                  className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                >
                  <ShoppingBag className="h-5 w-5 mr-2" />
                  Shop Now
                </Link>
                <Link
                  to="/seller/listings/create"
                  className="flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-white hover:bg-gray-800 md:py-4 md:text-lg md:px-10"
                >
                  <Store className="h-5 w-5 mr-2" />
                  Sell Your Products
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80"
          alt="Electronics collection"
        />
      </div>
    </div>
  );
}