'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Products & Services' },
  { href: '/contact', label: 'Contact Us' },
];

const legalLinks = [
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms-and-conditions', label: 'Terms & Conditions' },
  { href: '/refund-policy', label: 'Refund & Cancellation Policy' },
];

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-navy text-white border-t border-white/10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 items-start">
          
          {/* Column 1: Company Profile */}
          <div className="space-y-3">
            <h3 className="text-white font-semibold text-base sm:text-lg leading-snug tracking-tight">
              MAGTAN INTERNATIONAL HOLDINGS INC
            </h3>
            <p className="text-gold text-xs font-semibold tracking-wider uppercase">
              One Vision. A Global Future.
            </p>
            <div className="pt-2 text-sm text-white/70 space-y-1">
              <p>Delaware, United States</p>
              <p>
                Delaware File Number: <span className="text-white font-medium">10631049</span>
              </p>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-gold text-xs font-semibold tracking-widest uppercase mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 hover:text-white transition-colors duration-200 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal Links */}
          <div>
            <h4 className="text-gold text-xs font-semibold tracking-widest uppercase mb-4">
              Legal & Policy
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 hover:text-white transition-colors duration-200 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div>
            <h4 className="text-gold text-xs font-semibold tracking-widest uppercase mb-4">
              Contact
            </h4>
            <div className="space-y-2.5 text-sm text-white/75">
              <div>
                <a
                  href="mailto:business@magtanholdings.com"
                  className="hover:text-gold transition-colors duration-200 break-all"
                >
                  business@magtanholdings.com
                </a>
              </div>
              <p>+91-8098566616</p>
              <p>+91-9025796305</p>
              <p className="text-xs text-white/50 pt-1">Delaware, United States</p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
            <p>© {currentYear} MAGTAN INTERNATIONAL HOLDINGS INC. All rights reserved.</p>
            <div className="flex items-center gap-3">
              <span>Delaware, United States</span>
              <span>•</span>
              <span>Delaware File Number: 10631049</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
