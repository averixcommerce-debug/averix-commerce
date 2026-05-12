import type { Metadata } from 'next';
import ScrollReveal from '../_components/ScrollReveal';
import { Target, Users, Zap } from 'lucide-react';
import GlowCard from '../_components/GlowCard';

export const metadata: Metadata = {
  title: 'Văn Hóa Averix — Averix Commerce',
  description: 'Môi trường làm việc dành cho những người yêu thích sáng tạo, có tư duy học hỏi và muốn phát triển trong lĩnh vực thương mại điện tử quốc tế.',
};

const culturePoints = [
  {
    icon: Zap,
    title: 'Sáng Tạo & Học Hỏi',
    desc: 'Môi trường dành cho những người yêu thích sáng tạo, có tư duy học hỏi liên tục trong lĩnh vực E-commerce quốc tế.',
  },
  {
    icon: Target,
    title: 'Kết Quả Là Thước Đo',
    desc: 'Chúng tôi đề cao sự chủ động, tinh thần trách nhiệm, khả năng cải tiến liên tục và tư duy làm việc dựa trên kết quả.',
  },
  {
    icon: Users,
    title: 'Tinh Thần Đồng Đội',
    desc: 'Mỗi thành viên không chỉ làm một phần việc riêng lẻ. Mỗi người đều góp phần vào quá trình xây dựng sản phẩm và thương hiệu.',
  },
];

export default function CulturePage() {
  return (
    <div className="pt-20">
      <section className="relative py-24 bg-dark-950 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold-700/8 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <span className="inline-block text-xs font-bold tracking-[0.3em] text-gold-600 uppercase mb-6 px-4 py-2 rounded-full glass border border-gold-700/30">
              — Văn Hóa Averix —
            </span>
            <h1 className="text-5xl md:text-7xl font-black font-display mb-6">
              <span className="text-white">Môi Trường</span><br />
              <span className="text-gold-gradient">Phát Triển</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Averix Commerce xây dựng môi trường làm việc dành cho những người yêu thích sáng tạo, có tư duy học hỏi và muốn phát triển trong lĩnh vực thương mại điện tử quốc tế.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative section-padding bg-dark-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-3 gap-6">
            {culturePoints.map((p, i) => {
              const Icon = p.icon;
              return (
                <ScrollReveal key={p.title} delay={i * 0.1}>
                  <GlowCard className="h-full rounded-2xl bg-dark-800 border border-gold-700/20 p-8 text-center hover:border-gold-500/40 transition-all duration-500">
                    <div className="inline-flex p-4 rounded-2xl bg-gold-500/10 border border-gold-700/25 mb-5">
                      <Icon size={28} className="text-gold-500" />
                    </div>
                    <h3 className="text-xl font-bold font-display text-white mb-3">{p.title}</h3>
                    <p className="text-base text-white/55 leading-relaxed">{p.desc}</p>
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
