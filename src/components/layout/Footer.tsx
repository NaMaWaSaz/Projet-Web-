import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { NewsletterForm } from './NewsletterForm';
import { PaymentMethods } from './PaymentMethods';
import { SocialLinks } from './SocialLinks';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <NewsletterForm />
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0" />
                <a 
                  href="https://maps.app.goo.gl/yAwJJ63jgtYQeUr5A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Supcom Technopole Elghazela Tunis
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                <a href="mailto:contact@e9dhilit7eb.tn" className="hover:text-white">
                  contact@e9dhilit7eb.tn
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                <a href="tel:+21699699696" className="hover:text-white">
                  +216 99 69 96 96
                </a>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Payment Methods</h3>
            <PaymentMethods />
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <SocialLinks />
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} TechMart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}