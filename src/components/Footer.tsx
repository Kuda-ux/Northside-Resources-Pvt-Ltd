'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Image
              src="/logo.png"
              alt="Northside Resources Logo"
              width={150}
              height={50}
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              Building value and developing futures across land development, property, mining and commodity trading in Zimbabwe.
            </p>
          </div>

          <div>
            <h3 className="text-gold font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-gold transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/follyjorne" className="text-gray-300 hover:text-gold transition-colors">
                  Follyjorne Estates
                </Link>
              </li>
              <li>
                <Link href="/investment" className="text-gray-300 hover:text-gold transition-colors">
                  Investment
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gold font-semibold mb-4 text-lg">Business Areas</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Land Development</li>
              <li className="text-gray-300">Property Sales</li>
              <li className="text-gray-300">Mining</li>
              <li className="text-gray-300">Commodity Trading</li>
            </ul>
          </div>

          <div>
            <h3 className="text-gold font-semibold mb-4 text-lg">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone size={18} className="text-gold mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p className="hover:text-gold transition-colors">+263 77 778 2801</p>
                  <p className="hover:text-gold transition-colors">+263 71 823 7810</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail size={18} className="text-gold mt-1 flex-shrink-0" />
                <a
                  href="mailto:northsideresources@gmail.com"
                  className="text-gray-300 hover:text-gold transition-colors"
                >
                  northsideresources@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {year} Northside Resources (Pvt) Ltd. All Rights Reserved.
            </p>
            <p className="text-gray-500 text-xs mt-2 md:mt-0">
              Website by KuWeX Studios
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
