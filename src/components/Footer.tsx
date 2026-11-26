'use client';

import Link from 'next/link';
import Image from 'next/image';
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

const currentYear = 2026;

export default function Footer() {
  return (
    <footer className="bg-[#020712] text-white relative overflow-hidden border-t border-cyan-500/20">
      {/* Animated Electric Cyan Gradient Divider */}
      <motion.div
        className="h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#00F0FF]"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
      />

      {/* Subtle atmospheric background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/[0.04] rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600/[0.05] rounded-full translate-y-1/3 -translate-x-1/4 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-cyan-500/[0.04] rounded-full" />
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
            <Link href="/" className="inline-block py-1 group">
              <Image
                src="/magtan-logo.png"
                alt="MAGTAN INTERNATIONAL HOLDINGS INC"
                width={220}
                height={103}
                className="h-14 sm:h-16 w-auto object-contain transition-transform duration-200 group-hover:scale-105 drop-shadow-[0_0_15px_rgba(56,189,248,0.3)]"
              />
            </Link>
            <p className="text-white font-bold text-base sm:text-lg leading-snug tracking-tight">
              MAGTAN INTERNATIONAL
              <br />
              HOLDINGS INC
            </p>
            <p className="text-cyan-400 text-xs font-semibold tracking-wider uppercase">
              One Vision. A Global Future.
            </p>
            <div className="pt-2 text-sm text-slate-400 space-y-1.5">
              <p>
                A Delaware-registered U.S. corporation connecting international businesses with
                experienced technology delivery teams.
              </p>
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div variants={columnVariants}>
            <h4 className="text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 hover:text-cyan-300 hover:pl-1 transition-all duration-200 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Legal & Policies */}
          <motion.div variants={columnVariants}>
            <h4 className="text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-4">
              Legal & Policies
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 hover:text-cyan-300 hover:pl-1 transition-all duration-200 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-xs text-slate-500 mt-4 leading-relaxed italic">
              Delaware entity responsible for client contracting, billing, and international engagements.
            </p>
          </motion.div>

          {/* Column 4: Contact Us */}
          <motion.div variants={columnVariants}>
            <h4 className="text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-4">
              Contact Us
            </h4>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-cyan-300/80 text-xs font-semibold tracking-wider uppercase mb-1">
                  Email
                </p>
                <a
                  href="mailto:business@magtanholdings.com"
                  className="text-slate-200 hover:text-cyan-300 transition-colors duration-200 break-all"
                >
                  business@magtanholdings.com
                </a>
              </div>
              <div>
                <p className="text-cyan-300/80 text-xs font-semibold tracking-wider uppercase mb-1">
                  Telephone
                </p>
                <div className="space-y-1 text-slate-200">
                  <a
                    href="tel:+918098566616"
                    className="block hover:text-cyan-300 transition-colors duration-200 font-mono"
                  >
                    +91 80985 66616
                  </a>
                  <a
                    href="tel:+919025796305"
                    className="block hover:text-cyan-300 transition-colors duration-200 font-mono"
                  >
                    +91 90257 96305
                  </a>
                </div>
              </div>
              <div>
                <p className="text-cyan-300/80 text-xs font-semibold tracking-wider uppercase mb-1">
                  Jurisdiction
                </p>
                <p className="text-slate-300">Delaware, United States</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Copyright Bar */}
      <motion.div
        className="border-t border-cyan-500/10 bg-black/40"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
            <p>© {currentYear} MAGTAN INTERNATIONAL HOLDINGS INC. All rights reserved.</p>
            <div className="flex items-center gap-3">
              <span>Delaware, United States</span>
              <span className="text-cyan-400/50">•</span>
              <span className="font-mono text-cyan-300">File No. 10631049</span>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
