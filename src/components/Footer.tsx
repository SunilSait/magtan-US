import Link from 'next/link';

const footerLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Products & Services' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms-and-conditions', label: 'Terms & Conditions' },
  { href: '/refund-policy', label: 'Refund & Cancellation Policy' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold text-lg tracking-tight">
              MAGTAN INTERNATIONAL HOLDINGS INC
            </h3>
            <p className="text-gold text-sm font-medium tracking-wider mt-1 mb-4">
              One Vision. A Global Future.
            </p>
            <div className="space-y-2 text-sm text-white/70">
              <p>Delaware, United States</p>
              <p>Delaware File Number: 10631049</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <nav className="space-y-2.5">
              {footerLinks.slice(0, 3).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-white/70 hover:text-gold transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal & Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Legal
            </h4>
            <nav className="space-y-2.5 mb-6">
              {footerLinks.slice(3).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-white/70 hover:text-gold transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">
              Contact
            </h4>
            <div className="space-y-2 text-sm text-white/70">
              <a
                href="mailto:business@magtanholdings.com"
                className="block hover:text-gold transition-colors duration-200"
              >
                business@magtanholdings.com
              </a>
              <p>+91-8098566616</p>
              <p>+91-9025796305</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
            <p>© {currentYear} MAGTAN INTERNATIONAL HOLDINGS INC. All rights reserved.</p>
            <p>Delaware, United States</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
