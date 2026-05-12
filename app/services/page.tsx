import type { Metadata } from 'next';
import ServicesSection from '../_sections/ServicesSection';
import ScrollReveal from '../_components/ScrollReveal';
import GoldButton from '../_components/GoldButton';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dịch Vụ — Averix Commerce',
  description:
    'POD Store Development, Amazon Marketplace, Brand Identity, Growth Analytics. Giải pháp ecommerce toàn diện từ Averix Commerce.',
};

const process = [
  { step: '01', title: 'Discovery & Audit', desc: 'Phân tích thị trường, đối thủ và cơ hội. Define rõ target audience và positioning.' },
  { step: '02', title: 'Strategy & Plan', desc: 'Xây dựng roadmap chi tiết, KPIs và milestones cụ thể cho từng giai đoạn.' },
  { step: '03', title: 'Build & Launch', desc: 'Thực thi nhanh — store, products, campaigns. Launch với checklist đầy đủ.' },
  { step: '04', title: 'Optimize & Scale', desc: 'Dựa trên data, tối ưu liên tục và scale những gì đang hoạt động.' },
];

const includes = [
  'Tư vấn chiến lược miễn phí',
  'Dedicated project manager',
  'Weekly performance reports',
  'Slack/Zalo support channel',
  'Monthly strategy review',
  'Priority queue execution',
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-dark-950 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold-700/8 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <span className="inline-block text-xs font-bold tracking-[0.3em] text-gold-600 uppercase mb-6 px-4 py-2 rounded-full glass border border-gold-700/30">
              — Dịch Vụ —
            </span>
            <h1 className="text-5xl md:text-7xl font-black font-display mb-6">
              <span className="text-white">Giải Pháp</span><br />
              <span className="text-gold-gradient">Toàn Diện</span>
            </h1>
            <p className="text-base md:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
              Từ ý tưởng đến thương hiệu hoàn chỉnh — chúng tôi đồng hành
              trên toàn bộ hành trình xây dựng ecommerce của bạn.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services grid */}
      <ServicesSection />

      {/* Process */}
      <section className="relative section-padding bg-dark-950 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black font-display">
              <span className="text-white">Quy Trình </span>
              <span className="text-gold-gradient">Làm Việc</span>
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <ScrollReveal key={p.step} delay={i * 0.1}>
                <div className="relative p-6 rounded-2xl bg-dark-800 border border-gold-700/20 hover:border-gold-500/40 transition-all duration-500 group h-full">
                  <span className="block text-5xl font-black text-gold-gradient font-display mb-4 leading-none opacity-40 group-hover:opacity-80 transition-opacity">
                    {p.step}
                  </span>
                  <h3 className="text-base font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{p.desc}</p>
                  {/* connector */}
                  {i < process.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-gold-700/40 text-xl z-10">→</div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="relative py-20 bg-dark-900 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black font-display">
              <span className="text-white">Luôn Bao Gồm</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
              {includes.map((item) => (
                <div key={item} className="flex items-center gap-3 p-4 rounded-xl bg-dark-800 border border-gold-700/20">
                  <CheckCircle size={18} className="text-gold-500 shrink-0" />
                  <span className="text-sm text-white/80">{item}</span>
                </div>
              ))}
            </div>
            <div className="text-center">
              <GoldButton href="/contact" size="lg">
                Đặt lịch tư vấn miễn phí →
              </GoldButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
