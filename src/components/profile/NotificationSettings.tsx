import React from 'react';
import { Bell, Mail, ShoppingBag, Tag } from 'lucide-react';

export function NotificationSettings() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900">Email Notifications</h3>
        <div className="mt-4 space-y-4">
          <div className="flex items-start">
            <div className="flex h-5 items-center">
              <input
                id="orders"
                type="checkbox"
                defaultChecked
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
            </div>
            <div className="ml-3">
              <label htmlFor="orders" className="flex items-center text-sm font-medium text-gray-700">
                <ShoppingBag className="h-5 w-5 mr-2 text-gray-400" />
                Order updates
              </label>
              <p className="text-sm text-gray-500">
                Get notified about your order status and shipping updates
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex h-5 items-center">
              <input
                id="promotions"
                type="checkbox"
                defaultChecked
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
            </div>
            <div className="ml-3">
              <label htmlFor="promotions" className="flex items-center text-sm font-medium text-gray-700">
                <Tag className="h-5 w-5 mr-2 text-gray-400" />
                Promotions and deals
              </label>
              <p className="text-sm text-gray-500">
                Receive updates about sales, special offers, and new products
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex h-5 items-center">
              <input
                id="newsletter"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
            </div>
            <div className="ml-3">
              <label htmlFor="newsletter" className="flex items-center text-sm font-medium text-gray-700">
                <Mail className="h-5 w-5 mr-2 text-gray-400" />
                Newsletter
              </label>
              <p className="text-sm text-gray-500">
                Weekly digest of our best deals and new arrivals
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900">Push Notifications</h3>
        <div className="mt-4 space-y-4">
          <div className="flex items-start">
            <div className="flex h-5 items-center">
              <input
                id="push-all"
                type="checkbox"
                defaultChecked
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
            </div>
            <div className="ml-3">
              <label htmlFor="push-all" className="flex items-center text-sm font-medium text-gray-700">
                <Bell className="h-5 w-5 mr-2 text-gray-400" />
                Allow push notifications
              </label>
              <p className="text-sm text-gray-500">
                Get real-time updates about your orders and account activity
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5">
        <button
          type="button"
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Save Preferences
        </button>
      </div>
    </div>
  );
}