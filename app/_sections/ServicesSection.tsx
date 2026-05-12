'use client';

import ScrollReveal from '../_components/ScrollReveal';
import GlowCard from '../_components/GlowCard';
import {
  ShoppingBag, Palette, Globe, BarChart3, Layers, Rocket
} from 'lucide-react';

const services = [
  {
    icon: ShoppingBag,
    title: 'POD Store Development',
    desc: 'Xây dựng Shopify store POD từ đầu — từ thiết kế, cấu hình sản phẩm đến tối ưu conversion rate.',
    tags: ['Shopify', 'POD', 'CRO'],
    gradient: 'from-gold-700 to-gold-500',
  },
  {
    icon: Palette,
    title: 'Product Design & Personalization',
    desc: 'Thiết kế sản phẩm cá nhân hóa độc đáo — từ concept đến artwork ready cho các nền tảng in ấn.',
    tags: ['Design', 'Customily', 'Printify'],
    gradient: 'from-gold-600 to-amber-400',
  },
  {
    icon: Globe,
    title: 'Amazon Marketplace',
    desc: 'Tối ưu listing, A+ Content, PPC campaigns và brand registry để dominate thị trường Amazon US.',
    tags: ['Amazon', 'FBA', 'PPC'],
    gradient: 'from-orange-600 to-gold-500',
  },
  {
    icon: BarChart3,
    title: 'Growth Analytics',
    desc: 'Data-driven insights — theo dõi traffic, conversion, revenue và đưa ra chiến lược tối ưu.',
    tags: ['Analytics', 'Data', 'Growth'],
    gradient: 'from-gold-700 to-gold-400',
  },
  {
    icon: Layers,
    title: 'Brand Identity',
    desc: 'Xây dựng thương hiệu có hồn — từ naming, logo, visual identity đến brand story.',
    tags: ['Branding', 'Design', 'Strategy'],
    gradient: 'from-purple-600 to-gold-500',
  },
  {
    icon: Rocket,
    title: 'Operations & Scale',
    desc: 'Hệ thống vận hành tự động hóa — fulfillment, customer service, scaling playbook.',
    tags: ['Automation', 'Scale', 'Operations'],
    gradient: 'from-gold-500 to-gold-300',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative section-padding bg-dark-900 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gold-700/5 blur-[120px] rounded-full pointer-events-none" />

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
          <p className="max-w-xl mx-auto text-muted text-base leading-relaxed">
            Từ ý tưởng đến thương hiệu hoàn chỉnh — chúng tôi đồng hành cùng bạn
            trên toàn bộ hành trình xây dựng commerce.
          </p>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <ScrollReveal key={svc.title} delay={i * 0.08} direction="up">
                <GlowCard
                  className="h-full rounded-2xl bg-dark-800/80 border border-gold-700/20 p-7
                    hover:border-gold-500/50 transition-all duration-500
                    hover:shadow-[0_0_40px_rgba(255,215,0,0.08)]"
                >
                  {/* Icon */}
                  <div className={`inline-flex p-3.5 rounded-xl bg-gradient-to-br ${svc.gradient} bg-opacity-15 mb-5 border border-gold-700/20`}>
                    <Icon size={22} className="text-gold-400" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-white mb-3 font-display group-hover:text-gold-300 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-5">{svc.desc}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {svc.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-xs font-semibold bg-gold-500/8 text-gold-600 border border-gold-700/25"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom gradient line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${svc.gradient} opacity-0 hover:opacity-60 transition-opacity duration-500 rounded-b-2xl`} />
                </GlowCard>
              </ScrollReveal>
            );
          })}
        </div>

        {/* CTA below */}
        <ScrollReveal delay={0.4} className="text-center mt-12">
          <a
            href="/services"
            className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-300 font-semibold text-sm transition-colors group"
          >
            Xem tất cả dịch vụ
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
