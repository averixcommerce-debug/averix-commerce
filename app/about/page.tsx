import type { Metadata } from 'next';
import AboutSection from '../_sections/AboutSection';
import StatsSection from '../_sections/StatsSection';
import ScrollReveal from '../_components/ScrollReveal';
import GlowCard from '../_components/GlowCard';
import { Target, Zap, BarChart3, Rocket, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Về Chúng Tôi — Averix Commerce',
  description:
    'Averix Commerce — 5+ năm kinh nghiệm POD US market. A = Apex (Đỉnh cao), X = The X Factor. Xây dựng thương hiệu commerce có giá trị thực.',
};

const values = [
  {
    icon: Target,
    title: 'Apex Standard',
    desc: 'Theo đuổi tiêu chuẩn cao trong từng sản phẩm, từng thiết kế và từng quy trình làm việc.',
  },
  {
    icon: Zap,
    title: 'X Factor',
    desc: 'Tìm kiếm sự khác biệt để sản phẩm có lý do được khách hàng lựa chọn.',
  },
  {
    icon: BarChart3,
    title: 'Data-driven Thinking',
    desc: 'Ra quyết định dựa trên dữ liệu, không chỉ dựa vào cảm tính.',
  },
  {
    icon: Rocket,
    title: 'Execution Matters',
    desc: 'Ý tưởng chỉ có giá trị khi được thực thi tốt, đúng tiến độ và đúng tiêu chuẩn.',
  },
  {
    icon: Heart,
    title: 'Real Value',
    desc: 'Tạo ra sản phẩm có giá trị thật cho khách hàng và thị trường.',
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-dark-950 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold-700/8 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <span className="inline-block text-xs font-bold tracking-[0.3em] text-gold-600 uppercase mb-6 px-4 py-2 rounded-full glass border border-gold-700/30">
              — Về Averix Commerce —
            </span>
            <h1 className="text-5xl md:text-7xl font-black font-display mb-6">
              <span className="text-white">Kiến Tạo</span><br />
              <span className="text-gold-gradient">Giá Trị Thật</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              Từ nền tảng Merch by Amazon đến mô hình Shopify kết hợp quảng cáo, Averix Commerce tập trung phát triển các sản phẩm cá nhân hóa có tính thương mại cao, phục vụ khách hàng tại thị trường US và hướng đến khả năng mở rộng dài hạn.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* About detail */}
      <AboutSection />

      {/* Core values */}
      <section className="relative section-padding bg-dark-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black font-display">
              <span className="text-white">Giá Trị </span>
              <span className="text-gold-gradient">Cốt Lõi</span>
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <ScrollReveal key={v.title} delay={i * 0.12}>
                  <GlowCard className="h-full rounded-2xl bg-dark-800 border border-gold-700/20 p-8 text-center hover:border-gold-500/40 transition-all duration-500">
                    <div className="inline-flex p-4 rounded-2xl bg-gold-500/10 border border-gold-700/25 mb-5">
                      <Icon size={28} className="text-gold-500" />
                    </div>
                    <h3 className="text-xl font-bold font-display text-white mb-3">{v.title}</h3>
                    <p className="text-base text-white/55 leading-relaxed">{v.desc}</p>
                  </GlowCard>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
