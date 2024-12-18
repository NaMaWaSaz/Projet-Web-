import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export function SocialLinks() {
  return (
    <div className="flex space-x-4">
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white"
      >
        <Facebook className="h-6 w-6" />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white"
      >
        <Twitter className="h-6 w-6" />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white"
      >
        <Instagram className="h-6 w-6" />
      </a>
      <a
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white"
      >
        <Youtube className="h-6 w-6" />
      </a>
    </div>
  );
}