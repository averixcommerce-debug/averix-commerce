'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '../_components/ScrollReveal';
import GlowCard from '../_components/GlowCard';
import { ShoppingBag, Globe } from 'lucide-react';

const platforms = [
  {
    icon: Globe,
    title: 'Merch by Amazon',
    desc: 'Averix Commerce có nền tảng kinh nghiệm nhiều năm trong việc nghiên cứu niche, xây dựng ý tưởng và phát triển sản phẩm trên hệ sinh thái Merch by Amazon. Chúng tôi tập trung vào sản phẩm có khả năng tìm kiếm, phù hợp xu hướng và đáp ứng nhu cầu mua hàng thực tế của khách hàng Mỹ.',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20'
  },
  {
    icon: ShoppingBag,
    title: 'Shopify',
    desc: 'Trên Shopify, Averix Commerce phát triển các store bán hàng trực tiếp, kết hợp sản phẩm cá nhân hóa, tối ưu listing, mockup, creative quảng cáo và trải nghiệm mua hàng. Shopify là hướng phát triển quan trọng giúp chúng tôi mở rộng mô hình POD từ marketplace sang hệ thống commerce chủ động hơn.',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/20'
  }
];

export default function PlatformsSection() {
  return (
    <section className="relative section-padding bg-dark-900 overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.3em] text-gold-600 uppercase mb-4">
            — Nền tảng hoạt động —
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-display mb-6">
            <span className="text-white">Hệ Sinh Thái </span>
            <span className="text-gold-gradient">Thương Mại</span>
          </h2>
          <p className="max-w-2xl mx-auto text-white/55 text-lg leading-relaxed">
            Hiện tại, Averix Commerce đang hoạt động và mở rộng mạnh mẽ trên hai nền tảng thương mại điện tử hàng đầu dành cho thị trường Mỹ.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {platforms.map((p, i) => {
            const Icon = p.icon;
            return (
              <ScrollReveal key={p.title} delay={i * 0.2}>
                <GlowCard className="h-full rounded-2xl bg-dark-950/50 border border-gold-700/20 p-8 md:p-10 text-left hover:border-gold-500/40 transition-all duration-500">
                  <div className={`inline-flex p-4 rounded-2xl ${p.bg} ${p.border} border mb-6`}>
                    <Icon size={32} className={p.color} />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-white mb-4">{p.title}</h3>
                  <p className="text-base text-white/60 leading-relaxed">{p.desc}</p>
                </GlowCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
