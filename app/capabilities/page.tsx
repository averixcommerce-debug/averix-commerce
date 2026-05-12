import type { Metadata } from 'next';
import CapabilitiesSection from '../_sections/CapabilitiesSection';
import ScrollReveal from '../_components/ScrollReveal';
import GlowCard from '../_components/GlowCard';
import { ShoppingBag, Shirt, Coffee, Gift, Tag, Calendar, Package } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Năng Lực Cốt Lõi — Averix Commerce',
  description:
    'Product Research, Creative Direction, POD Design, Personalization, Shopify Listing, Data-driven Optimization.',
};

const products = [
  { name: 'T-shirt & Apparel', icon: Shirt },
  { name: 'Mug & Drinkware', icon: Coffee },
  { name: 'Tumbler', icon: Package },
  { name: 'Personalized Gifts', icon: Gift },
  { name: 'Seasonal Products', icon: Calendar },
  { name: 'Niche Custom Products', icon: Tag },
];

export default function CapabilitiesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-dark-950 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold-700/8 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <span className="inline-block text-xs font-bold tracking-[0.3em] text-gold-600 uppercase mb-6 px-4 py-2 rounded-full glass border border-gold-700/30">
              — Năng Lực Cốt Lõi —
            </span>
            <h1 className="text-5xl md:text-7xl font-black font-display mb-6">
              <span className="text-white">Toàn Diện</span><br />
              <span className="text-gold-gradient">Mọi Khía Cạnh</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Từ nghiên cứu, sáng tạo đến vận hành và tối ưu — chúng tôi sở hữu năng lực toàn diện để phát triển thương hiệu thương mại điện tử của bạn.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Capabilities grid */}
      <CapabilitiesSection />

      {/* What we do */}
      <section className="relative section-padding bg-dark-950 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal className="text-center mb-16">
            <span className="inline-block text-xs font-bold tracking-[0.3em] text-gold-600 uppercase mb-4">
              — Phát triển sản phẩm —
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-display mb-6">
              <span className="text-white">Chúng Tôi </span>
              <span className="text-gold-gradient">Làm Gì</span>
            </h2>
            <p className="max-w-3xl mx-auto text-white/60 text-lg leading-relaxed">
              Averix Commerce nghiên cứu thị trường, phát triển ý tưởng, thiết kế sản phẩm và xây dựng listing cho các sản phẩm POD phục vụ khách hàng tại thị trường Mỹ.
            </p>
          </ScrollReveal>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {products.map((p, i) => {
              const Icon = p.icon;
              return (
                <ScrollReveal key={p.name} delay={i * 0.1}>
                  <div className="flex flex-col items-center justify-center gap-4 p-8 rounded-2xl bg-dark-800 border border-gold-700/20 hover:border-gold-500/40 transition-all duration-300 group h-full">
                    <div className="w-14 h-14 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 group-hover:scale-110 group-hover:bg-gold-500/20 transition-all">
                      <Icon size={24} />
                    </div>
                    <span className="text-base font-bold text-white text-center">{p.name}</span>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
