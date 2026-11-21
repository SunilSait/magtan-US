'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Products & Services' },
  { href: '/how-we-work', label: 'How We Work' },
  { href: '/contact', label: 'Contact Us' },
];

const legalLinks = [
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms-and-conditions', label: 'Terms & Conditions' },
  { href: '/refund-policy', label: 'Refund & Cancellation Policy' },
];

const columnVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] },
  },
};

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-navy text-white relative overflow-hidden">
      {/* Animated gold gradient divider */}
      <motion.div
        className="h-[2px] w-full bg-gradient-to-r from-transparent via-gold to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
      />

      {/* Subtle background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/[0.015] rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/[0.01] rounded-full translate-y-1/3 -translate-x-1/4 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/[0.02] rounded-full" />
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
          }}
        >
          {/* Column 1: Company Profile */}
          <motion.div className="space-y-3" variants={columnVariants}>
            <h3 className="text-gold text-xs font-semibold tracking-widest uppercase mb-4">
              Company
            </h3>
            <p className="text-white font-semibold text-base sm:text-lg leading-snug tracking-tight">
              MAGTAN INTERNATIONAL
              <br />
              HOLDINGS INC
            </p>
            <p className="text-gold/80 text-xs font-semibold tracking-wider uppercase">
              One Vision. A Global Future.
            </p>
            <div className="pt-2 text-sm text-white/60 space-y-1.5">
              <p>
                A Delaware-registered U.S. corporation connecting international businesses with
                skilled technology delivery teams.
              </p>
              <p className="pt-1">
                Delaware File No: <span className="text-white font-medium">10631049</span>
              </p>
              <p className="text-white/40 text-xs">Incorporated in Delaware, USA</p>
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div variants={columnVariants}>
            <h4 className="text-gold text-xs font-semibold tracking-widest uppercase mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white hover:pl-1 transition-all duration-200 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Legal & Policies */}
          <motion.div variants={columnVariants}>
            <h4 className="text-gold text-xs font-semibold tracking-widest uppercase mb-4">
              Legal & Policies
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white hover:pl-1 transition-all duration-200 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-xs text-white/35 mt-4 leading-relaxed italic">
              Delaware entity responsible for client contracting, billing and engagements.
            </p>
          </motion.div>

          {/* Column 4: Contact Us */}
          <motion.div variants={columnVariants}>
            <h4 className="text-gold text-xs font-semibold tracking-widest uppercase mb-4">
              Contact Us
            </h4>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-gold/70 text-xs font-semibold tracking-wider uppercase mb-1">
                  Email
                </p>
                <a
                  href="mailto:business@magtanholdings.com"
                  className="text-white/75 hover:text-gold transition-colors duration-200 break-all"
                >
                  business@magtanholdings.com
                </a>
              </div>
              <div>
                <p className="text-gold/70 text-xs font-semibold tracking-wider uppercase mb-1">
                  Telephone
                </p>
                <div className="space-y-1 text-white/75">
                  <a
                    href="tel:+918098566616"
                    className="block hover:text-gold transition-colors duration-200"
                  >
                    +91-8098566616
                  </a>
                  <a
                    href="tel:+919025796305"
                    className="block hover:text-gold transition-colors duration-200"
                  >
                    +91-9025796305
                  </a>
                </div>
              </div>
              <div>
                <p className="text-gold/70 text-xs font-semibold tracking-wider uppercase mb-1">
                  Jurisdiction
                </p>
                <p className="text-white/75">Delaware, United States</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Copyright Bar */}
      <motion.div
        className="border-t border-white/10 bg-black/20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
            <p>© {currentYear} MAGTAN INTERNATIONAL HOLDINGS INC. All rights reserved.</p>
            <div className="flex items-center gap-3">
              <span>Delaware, United States</span>
              <span className="text-gold/40">•</span>
              <span>File # 10631049</span>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
