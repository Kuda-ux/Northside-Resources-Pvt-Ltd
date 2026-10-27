'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Follyjorne Estates', href: '/follyjorne' },
    { name: 'Investment', href: '/investment' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Northside Resources Logo"
              width={180}
              height={60}
              className="h-16 w-auto"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-charcoal hover:text-navy transition-colors duration-200 font-medium"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-navy text-white px-6 py-2.5 rounded hover:bg-gold transition-colors duration-200 font-medium"
            >
              Talk to Us
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-charcoal hover:text-navy"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-6 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-charcoal hover:text-navy transition-colors duration-200 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block bg-navy text-white px-6 py-2.5 rounded hover:bg-gold transition-colors duration-200 font-medium text-center mt-4"
              onClick={() => setIsOpen(false)}
            >
              Talk to Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
