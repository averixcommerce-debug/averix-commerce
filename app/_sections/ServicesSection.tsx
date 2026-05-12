'use client';

import ScrollReveal from '../_components/ScrollReveal';
import GlowCard from '../_components/GlowCard';
import { ShoppingBag, Palette, Globe, BarChart3, Layers, Rocket } from 'lucide-react';

const services = [
  {
    icon: ShoppingBag,
    title: 'POD Store Development',
    desc: 'Xây dựng Shopify store POD từ đầu — từ thiết kế, cấu hình sản phẩm đến tối ưu conversion rate.',
    tags: ['Shopify', 'POD', 'CRO'],
    iconBg: 'rgba(255,215,0,0.15)',
    iconBorder: 'rgba(218,165,32,0.4)',
    iconColor: '#ffd700',
    accentFrom: '#b8860b',
    accentTo: '#ffd700',
  },
  {
    icon: Palette,
    title: 'Product Design & Personalization',
    desc: 'Thiết kế sản phẩm cá nhân hóa độc đáo — từ concept đến artwork ready cho các nền tảng in ấn.',
    tags: ['Design', 'Customily', 'Printify'],
    iconBg: 'rgba(251,191,36,0.15)',
    iconBorder: 'rgba(251,191,36,0.4)',
    iconColor: '#fbbf24',
    accentFrom: '#d97706',
    accentTo: '#fbbf24',
  },
  {
    icon: Globe,
    title: 'Amazon Marketplace',
    desc: 'Tối ưu listing, A+ Content, PPC campaigns và brand registry để dominate thị trường Amazon US.',
    tags: ['Amazon', 'FBA', 'PPC'],
    iconBg: 'rgba(251,146,60,0.15)',
    iconBorder: 'rgba(251,146,60,0.4)',
    iconColor: '#fb923c',
    accentFrom: '#ea580c',
    accentTo: '#fbbf24',
  },
  {
    icon: BarChart3,
    title: 'Growth Analytics',
    desc: 'Data-driven insights — theo dõi traffic, conversion, revenue và đưa ra chiến lược tối ưu.',
    tags: ['Analytics', 'Data', 'Growth'],
    iconBg: 'rgba(52,211,153,0.12)',
    iconBorder: 'rgba(52,211,153,0.35)',
    iconColor: '#34d399',
    accentFrom: '#059669',
    accentTo: '#34d399',
  },
  {
    icon: Layers,
    title: 'Brand Identity',
    desc: 'Xây dựng thương hiệu có hồn — từ naming, logo, visual identity đến brand story.',
    tags: ['Branding', 'Design', 'Strategy'],
    iconBg: 'rgba(167,139,250,0.15)',
    iconBorder: 'rgba(167,139,250,0.4)',
    iconColor: '#a78bfa',
    accentFrom: '#7c3aed',
    accentTo: '#c4b5fd',
  },
  {
    icon: Rocket,
    title: 'Operations & Scale',
    desc: 'Hệ thống vận hành tự động hóa — fulfillment, customer service, scaling playbook.',
    tags: ['Automation', 'Scale', 'Operations'],
    iconBg: 'rgba(56,189,248,0.12)',
    iconBorder: 'rgba(56,189,248,0.35)',
    iconColor: '#38bdf8',
    accentFrom: '#0284c7',
    accentTo: '#38bdf8',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative section-padding bg-dark-900 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(184,134,11,0.06) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.3em] text-gold-600 uppercase mb-4">
            — Dịch Vụ —
          </span>
          <h2 className="text-4xl md:text-6xl font-black font-display mb-6">
            <span className="text-white">Giải Pháp </span>
            <span className="text-gold-gradient">Toàn Diện</span>
          </h2>
          <p className="max-w-xl mx-auto text-white/50 text-lg leading-relaxed">
            Từ ý tưởng đến thương hiệu hoàn chỉnh — chúng tôi đồng hành cùng bạn
            trên toàn bộ hành trình xây dựng commerce.
          </p>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <ScrollReveal key={svc.title} delay={i * 0.08} direction="up">
                <GlowCard
                  className="h-full rounded-2xl p-7 transition-all duration-500 group"
                  style={{
                    background: '#111111',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  {/* Icon box — explicit rgba so it actually shows */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5 relative"
                    style={{
                      background: svc.iconBg,
                      border: `1px solid ${svc.iconBorder}`,
                      boxShadow: `0 0 16px ${svc.iconBg}`,
                    }}>
                    <Icon size={22} color={svc.iconColor} strokeWidth={1.8} />
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-white mb-3 font-display leading-snug">
                    {svc.title}
                  </h3>

                  {/* Desc */}
                  <p className="text-[15px] text-white/45 leading-relaxed mb-5">{svc.desc}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {svc.tags.map((tag) => (
                      <span key={tag}
                        className="px-3 py-1 rounded-full text-sm font-semibold"
                        style={{
                          background: 'rgba(255,215,0,0.07)',
                          border: '1px solid rgba(184,134,11,0.3)',
                          color: '#b8860b',
                        }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom colored accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(to right, ${svc.accentFrom}, ${svc.accentTo})` }} />
                </GlowCard>
              </ScrollReveal>
            );
          })}
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.4} className="text-center mt-12">
          <a href="/services"
            className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-300 font-semibold text-sm transition-colors group">
            Xem tất cả dịch vụ
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
