'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ShoppingBag, TrendingUp, Globe } from 'lucide-react';
import GoldParticles from '../_components/GoldParticles';
import AXLogo from '../_components/AXLogo';
import GoldButton from '../_components/GoldButton';
import Link from 'next/link';

const floatingBadges = [
  { icon: ShoppingBag, label: 'Shopify Partner', delay: 0.8, x: '-left-4 top-1/4', color: 'text-green-400' },
  { icon: Globe, label: 'Amazon Marketplace', delay: 1.0, x: '-right-4 top-1/3', color: 'text-orange-400' },
  { icon: TrendingUp, label: '5+ Năm POD US', delay: 1.2, x: 'left-1/4 -bottom-4', color: 'text-gold-400' },
];

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-dark-950">
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Radial glow center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-gold-700/10 blur-[120px]" />
      </div>

      {/* Gold particles */}
      {mounted && <GoldParticles />}

      {/* Scan line effect */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{ zIndex: 1 }}
      >
        <div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"
          style={{ animation: 'scan-line 8s linear infinite' }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* AX Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative inline-block mb-8"
        >
          {/* Orbital ring */}
          <div
            className="absolute inset-0 rounded-full border border-gold-700/20"
            style={{
              width: '140px', height: '140px',
              top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              animation: 'rotate-slow 20s linear infinite',
            }}
          >
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gold-500 shadow-[0_0_8px_rgba(255,215,0,0.8)]" />
          </div>
          <div
            className="absolute inset-0 rounded-full border border-gold-600/10"
            style={{
              width: '180px', height: '180px',
              top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              animation: 'rotate-reverse 15s linear infinite',
            }}
          >
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gold-700 shadow-[0_0_6px_rgba(218,165,32,0.8)]" />
          </div>

          <div
            className="w-24 h-24 animate-float"
            style={{ filter: 'drop-shadow(0 0 20px rgba(255,215,0,0.4))' }}
          >
            <AXLogo />
          </div>
        </motion.div>

        {/* Tag line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-gold-700/30 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
          <span className="text-xs font-semibold tracking-widest text-gold-500 uppercase">
            5+ Năm · POD US Market · Shopify · Amazon
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black font-display leading-[0.9] mb-6 tracking-tight"
        >
          <span className="block text-white uppercase tracking-wider text-4xl md:text-6xl mb-4">AVERIX COMMERCE</span>
          <span className="block text-gold-gradient animate-glow-text text-3xl md:text-5xl lg:text-6xl">
            Personalized POD Brands
          </span>
          <span className="block text-white text-3xl md:text-5xl lg:text-6xl">for the US Market</span>
        </motion.h1>

        {/* Sub text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-base md:text-lg text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Averix Commerce là công ty thương mại điện tử chuyên phát triển sản phẩm POD cá nhân hóa cho thị trường Mỹ.
          Với hơn 5 năm kinh nghiệm, chúng tôi kết hợp <span className="text-gold-400 font-medium">sáng tạo</span>, <span className="text-gold-400 font-medium">dữ liệu</span> và <span className="text-gold-400 font-medium">năng lực vận hành</span> để xây dựng các sản phẩm có giá trị thực, phù hợp với nhu cầu khách hàng và có khả năng mở rộng.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <GoldButton href="/capabilities" size="lg">
            Năng lực cốt lõi →
          </GoldButton>
          <GoldButton href="/about" variant="outline" size="lg">
            Về Averix Commerce
          </GoldButton>
        </motion.div>

        {/* Floating platform badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-3 mt-12"
        >
          {[
            { label: 'Creativity', color: 'border-gold-500/30 text-gold-400' },
            { label: 'Data', color: 'border-gold-500/30 text-gold-400' },
            { label: 'Execution', color: 'border-gold-500/30 text-gold-400' },
          ].map((b) => (
            <span
              key={b.label}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold border glass ${b.color}`}
            >
              {b.label}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#stats"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-gold-600 hover:text-gold-400 transition-colors"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  );
}
