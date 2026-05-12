'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AXLogo from './AXLogo';

const navLinks = [
  { href: '/', label: 'Trang chủ' },
  { href: '/about', label: 'Về chúng tôi' },
  { href: '/services', label: 'Dịch vụ' },
  { href: '/contact', label: 'Liên hệ' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-dark-950/90 backdrop-blur-xl border-b border-gold-700/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_rgba(255,215,0,0.6)]">
              <AXLogo />
            </div>
            <div className="leading-none">
              <span className="block text-sm font-bold tracking-[0.2em] text-gold-gradient font-display uppercase">
                Averix
              </span>
              <span className="block text-[10px] tracking-[0.35em] text-gold-700 uppercase font-medium">
                Commerce
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-muted hover:text-gold-400 transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-gold-700 to-gold-400 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold text-dark-950 relative overflow-hidden
                before:absolute before:inset-0 before:bg-[linear-gradient(90deg,#b8860b,#ffd700,#fff8e1,#ffd700,#b8860b)]
                before:bg-[length:200%_100%] before:[animation:shimmer_3s_linear_infinite]
                hover:shadow-[0_0_25px_rgba(255,215,0,0.5)] hover:scale-105 transition-transform duration-200 active:scale-95"
            >
              <span className="relative z-10 mix-blend-multiply">Tư vấn miễn phí</span>
            </Link>

            <button
              id="mobile-menu-btn"
              className="md:hidden p-2 text-gold-500 hover:text-gold-300 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-dark-950/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  href={link.href}
                  className="text-3xl font-bold text-gold-gradient font-display hover:scale-105 transition-transform duration-200 inline-block"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-dark-950 relative overflow-hidden
                  before:absolute before:inset-0 before:bg-[linear-gradient(90deg,#b8860b,#ffd700,#fff8e1,#ffd700,#b8860b)]
                  before:bg-[length:200%_100%] before:[animation:shimmer_3s_linear_infinite]"
              >
                <span className="relative z-10 mix-blend-multiply">Tư vấn miễn phí</span>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
