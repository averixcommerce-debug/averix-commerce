import Link from 'next/link';
import AXLogo from './AXLogo';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const services = [
  'POD Store Development',
  'Product Design & POD',
  'Amazon Marketplace',
  'Growth Analytics',
  'Brand Identity',
  'Operations & Scale',
];

const socialLinks = [
  { label: 'Facebook', href: '#', icon: 'fb' },
  { label: 'LinkedIn', href: '#', icon: 'li' },
  { label: 'YouTube', href: '#', icon: 'yt' },
];

export default function Footer() {
  return (
    <footer className="relative bg-dark-900 border-t border-gold-700/20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gold-700/5 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="w-12 h-12">
                <AXLogo />
              </div>
              <div>
                <span className="block text-base font-bold tracking-[0.2em] text-gold-gradient font-display uppercase">
                  Averix
                </span>
                <span className="block text-[10px] tracking-[0.35em] text-gold-700 uppercase">
                  Commerce
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted leading-relaxed mb-5">
              Nơi khát vọng tạo nên <span className="text-gold-500 font-semibold">GIÁ TRỊ</span>,
              dữ liệu dẫn lối <span className="text-gold-500 font-semibold">TĂNG TRƯỞNG</span>.
            </p>
            {/* Platform badges */}
            <div className="flex flex-wrap gap-2">
              {['Shopify Partner', 'Amazon Seller'].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border border-gold-700/40 text-gold-600 bg-gold-500/5"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold tracking-widest text-gold-500 uppercase mb-5">
              Dịch vụ
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-sm text-muted hover:text-gold-400 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold-700 group-hover:bg-gold-400 transition-colors duration-200" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-bold tracking-widest text-gold-500 uppercase mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Trang chủ', href: '/' },
                { label: 'Về chúng tôi', href: '/about' },
                { label: 'Dịch vụ', href: '/services' },
                { label: 'Liên hệ', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-gold-400 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold-700 group-hover:bg-gold-400 transition-colors duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold tracking-widest text-gold-500 uppercase mb-5">
              Liên hệ
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:contact@averixcommerce.com"
                  className="flex items-start gap-3 text-sm text-muted hover:text-gold-400 transition-colors duration-200 group"
                >
                  <Mail size={16} className="mt-0.5 shrink-0 text-gold-600 group-hover:text-gold-400 transition-colors" />
                  contact@averixcommerce.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+84000000000"
                  className="flex items-start gap-3 text-sm text-muted hover:text-gold-400 transition-colors duration-200 group"
                >
                  <Phone size={16} className="mt-0.5 shrink-0 text-gold-600 group-hover:text-gold-400 transition-colors" />
                  +84 xxx xxx xxx
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-muted">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-gold-600" />
                  Vietnam · US Market
                </div>
              </li>
            </ul>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-gold-700/30 flex items-center justify-center text-gold-600 hover:text-gold-400 hover:border-gold-500 hover:bg-gold-500/10 transition-all duration-200"
                >
                  <ExternalLink size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gold-700/15 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted/60">
            © {new Date().getFullYear()} Averix Commerce. All rights reserved.
          </p>
          <p className="text-xs text-muted/40">
            A = <span className="text-gold-700">Apex</span> · X = <span className="text-gold-700">The X Factor</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
