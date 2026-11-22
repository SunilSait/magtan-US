'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Products & Services' },
  { href: '/how-we-work', label: 'How We Work' },
  { href: '/contact', label: 'Contact Us' },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#020712]/92 backdrop-blur-xl border-b border-cyan-500/20 shadow-[0_10px_35px_rgba(0,0,0,0.6)]'
          : 'bg-[#020712]/80 backdrop-blur-md border-b border-cyan-500/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Official Company Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 py-1 group">
            <Image
              src="/magtan-logo.png"
              alt="MAGTAN INTERNATIONAL HOLDINGS INC"
              width={180}
              height={84}
              className="h-12 sm:h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-105 drop-shadow-[0_0_15px_rgba(56,189,248,0.3)]"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href;
              const isContact = link.href === '/contact';

              if (isContact) {
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.08 * i + 0.2 }}
                  >
                    <Link
                      href={link.href}
                      className="ml-4 inline-flex items-center justify-center px-5 py-2 rounded-full border border-cyan-400/80 text-cyan-300 text-xs font-semibold tracking-wider uppercase hover:bg-cyan-500/20 hover:text-white hover:border-cyan-300 hover:shadow-[0_0_22px_rgba(0,240,255,0.5)] transition-all duration-300 backdrop-blur-sm cursor-pointer"
                    >
                      Contact Us
                    </Link>
                  </motion.div>
                );
              }

              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.08 * i + 0.2 }}
                >
                  <Link
                    href={link.href}
                    className={`px-3 xl:px-4 py-2 text-sm font-medium transition-colors duration-200 relative whitespace-nowrap ${
                      isActive
                        ? 'text-cyan-300 font-semibold drop-shadow-[0_0_8px_rgba(0,240,255,0.4)]'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-3 right-3 xl:left-4 xl:right-4 h-0.5 bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 rounded-full shadow-[0_0_8px_#00F0FF]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-slate-300 hover:text-cyan-400 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu — AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-[#040D1A]/95 backdrop-blur-xl border-t border-cyan-500/20 shadow-2xl"
          >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-1">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 * i }}
                  >
                    <Link
                      href={link.href}
                      className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-cyan-950/60 text-cyan-300 border-l-2 border-cyan-400 font-semibold'
                          : 'text-slate-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
