import ScrollReveal from '../_components/ScrollReveal';
import { TrendingUp, ShoppingCart, Package } from 'lucide-react';

const cases = [
  {
    icon: ShoppingCart,
    category: 'Shopify POD',
    brand: 'CustomCraft™',
    desc: 'Xây dựng Shopify store chuyên về custom home decor POD. Từ 0 đến profitable trong 90 ngày.',
    metrics: [
      { label: 'Revenue tháng đầu', value: '$18K' },
      { label: 'ROAS Facebook Ads', value: '3.8x' },
      { label: 'Conversion Rate', value: '4.2%' },
    ],
    tags: ['Shopify', 'Facebook Ads', 'POD'],
    iconBg: 'rgba(255,215,0,0.16)',
    iconBorder: 'rgba(218,165,32,0.45)',
    iconColor: '#ffd700',
    accentColor: 'rgba(184,134,11,0.5)',
  },
  {
    icon: Package,
    category: 'Amazon Marketplace',
    brand: 'WearUnique™',
    desc: 'Listing optimization + PPC cho dòng apparel POD tren Amazon US. Đạt BSR top 500 trong category.',
    metrics: [
      { label: 'Sales tăng trong 60 ngày', value: '+340%' },
      { label: 'ACoS tối ưu', value: '18%' },
      { label: 'Reviews earned', value: '500+' },
    ],
    tags: ['Amazon', 'PPC', 'BSR'],
    iconBg: 'rgba(251,146,60,0.15)',
    iconBorder: 'rgba(251,146,60,0.4)',
    iconColor: '#fb923c',
    accentColor: 'rgba(234,88,12,0.5)',
  },
  {
    icon: TrendingUp,
    category: 'Multi-Channel',
    brand: 'MemoryBox™',
    desc: 'Build thương hiệu POD gifts từ đầu — Shopify + Amazon + Email. $100K revenue trong năm 1.',
    metrics: [
      { label: 'Year 1 Revenue', value: '$100K+' },
      { label: 'Email Revenue %', value: '35%' },
      { label: 'Repeat Purchase Rate', value: '42%' },
    ],
    tags: ['Omnichannel', 'Email', 'Branding'],
    iconBg: 'rgba(52,211,153,0.13)',
    iconBorder: 'rgba(52,211,153,0.4)',
    iconColor: '#34d399',
    accentColor: 'rgba(5,150,105,0.5)',
  },
];

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="relative section-padding bg-dark-900 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.3em] text-gold-600 uppercase mb-4">
            — Case Studies —
          </span>
          <h2 className="text-4xl md:text-6xl font-black font-display mb-6">
            <span className="text-white">Kết Quả </span>
            <span className="text-gold-gradient">Thực Tế</span>
          </h2>
          <p className="max-w-xl mx-auto text-white/50 text-lg">
            Những thương hiệu chúng tôi đã xây dựng và kết quả đo lường được.
          </p>
        </ScrollReveal>

        {/* Cases */}
        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c, i) => {
            const Icon = c.icon;
            return (
              <ScrollReveal key={c.brand} delay={i * 0.12}>
                <div className={`relative h-full rounded-2xl bg-dark-800 border border-gold-700/20
                  hover:border-gold-500/40 transition-all duration-500 overflow-hidden
                  hover:shadow-[0_0_50px_rgba(255,215,0,0.08)] group`}>
                  {/* BG gradient */}
                  <div className="absolute inset-0 pointer-events-none"
                    style={{ background: `linear-gradient(to bottom, ${c.accentColor}, transparent)` }} />

                  <div className="relative p-7">
                    {/* Top */}
                    <div className="flex items-start justify-between mb-5">
                      <div>
                        <span className="text-xs font-semibold text-gold-600 tracking-wider uppercase mb-1 block">
                          {c.category}
                        </span>
                        <h3 className="text-xl font-black text-white font-display">{c.brand}</h3>
                      </div>
                      <div className="p-2.5 rounded-xl flex items-center justify-center"
                        style={{
                          background: c.iconBg,
                          border: `1px solid ${c.iconBorder}`,
                          boxShadow: `0 0 14px ${c.iconBg}`,
                        }}>
                        <Icon size={20} color={c.iconColor} strokeWidth={1.8} />
                      </div>
                    </div>

                    <p className="text-[15px] text-white/50 leading-relaxed mb-6">{c.desc}</p>

                    {/* Metrics */}
                    <div className="space-y-3 mb-6 p-4 rounded-xl bg-dark-950/60 border border-gold-700/15">
                      {c.metrics.map((m) => (
                        <div key={m.label} className="flex items-center justify-between">
                          <span className="text-sm text-white/45">{m.label}</span>
                          <span className="text-base font-bold text-gold-400">{m.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {c.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded-md text-sm font-medium bg-gold-500/8 text-gold-600 border border-gold-700/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-600/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
