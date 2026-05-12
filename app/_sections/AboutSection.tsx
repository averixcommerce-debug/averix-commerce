'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '../_components/ScrollReveal';
import { Shield, Zap, Users, Target } from 'lucide-react';

const meanings = [
  {
    icon: Shield,
    letter: '"A"',
    title: 'Apex — Đỉnh Cao',
    desc: 'Tinh thần theo đuổi tiêu chuẩn cao nhất trong sản phẩm, sáng tạo và vận hành.',
  },
  {
    icon: Zap,
    letter: '"X"',
    title: 'The X Factor',
    desc: 'Yếu tố khác biệt giúp sản phẩm có khả năng chiến thắng trên thị trường.',
  },
  {
    icon: Users,
    letter: 'Team',
    title: 'Đội Ngũ',
    desc: 'X Factor nằm ở cách đội ngũ kết hợp sáng tạo, insight khách hàng và dữ liệu.',
  },
  {
    icon: Target,
    letter: 'Mission',
    title: 'Sứ Mệnh',
    desc: 'Biến ý tưởng thành sản phẩm có giá trị thật trên thị trường Mỹ.',
  },
];

const timeline = [
  { year: '2019', title: 'Khởi đầu', desc: 'Bắt đầu với POD đầu tiên trên Shopify US market' },
  { year: '2021', title: 'Mở rộng', desc: 'Mở rộng sang Amazon Marketplace, 30+ brands' },
  { year: '2023', title: 'Scale', desc: 'Scale lên 100+ brands, $5M+ revenue generated' },
  { year: '2024+', title: 'Tăng trưởng', desc: 'Hướng đến $10M+ và mở rộng thị trường' },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative section-padding bg-dark-950 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-700/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold-600/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.3em] text-gold-600 uppercase mb-4">
            — Về Averix Commerce —
          </span>
          <h2 className="text-4xl md:text-6xl font-black font-display text-gold-gradient mb-6">
            Hơn 5 Năm<br />
            <span className="text-white">Kinh Nghiệm POD US</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted text-base md:text-lg leading-relaxed">
            Averix Commerce là công ty thương mại điện tử chuyên phát triển các sản phẩm
            cá nhân hóa theo mô hình POD cho thị trường Mỹ. Chúng tôi kết hợp sáng tạo,
            dữ liệu và năng lực vận hành để xây dựng các thương hiệu commerce
            có giá trị thực và khả năng mở rộng.
          </p>
        </ScrollReveal>

        {/* Two columns */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Name meaning */}
          <div>
            <ScrollReveal direction="left">
              <h3 className="text-2xl font-bold font-display text-gold-gradient mb-2">Ý Nghĩa Tên Công Ty</h3>
              <p className="text-sm text-muted mb-8">
                Averix không phải một cái tên có sẵn trong từ điển —
                bởi vì chúng tôi không xây dựng công ty này để đi theo những định nghĩa cũ.
              </p>
            </ScrollReveal>

            <div className="space-y-4">
              {meanings.map((m, i) => {
                const Icon = m.icon;
                return (
                  <ScrollReveal key={m.title} direction="left" delay={i * 0.1}>
                    <div className="flex gap-4 p-4 rounded-xl border border-gold-700/20 bg-dark-800/60 hover:border-gold-500/40 transition-all duration-300 group">
                      <div className="shrink-0 w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-700/30 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                        <Icon size={18} className="text-gold-500" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold text-gold-600 font-mono">{m.letter}</span>
                          <h4 className="text-sm font-bold text-white">{m.title}</h4>
                        </div>
                        <p className="text-xs text-muted leading-relaxed">{m.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>

            {/* Platforms */}
            <ScrollReveal delay={0.4} direction="left">
              <div className="flex flex-wrap gap-3 mt-8">
                {[
                  { label: '5+ Năm', sub: 'POD US' },
                  { label: 'Shopify', sub: 'Commerce' },
                  { label: 'Amazon', sub: 'Marketplace' },
                ].map((b) => (
                  <div
                    key={b.label}
                    className="flex items-center gap-3 px-5 py-3 rounded-xl border border-gold-700/30 bg-dark-800/80 hover:border-gold-500/50 transition-all duration-300 group"
                  >
                    <div>
                      <p className="text-sm font-bold text-gold-gradient">{b.label}</p>
                      <p className="text-xs text-muted">{b.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Timeline */}
          <ScrollReveal direction="right">
            <div className="relative pl-6">
              {/* Vertical line */}
              <div className="absolute left-0 top-4 bottom-4 w-px bg-gradient-to-b from-gold-700/80 via-gold-600/40 to-transparent" />

              <div className="space-y-8">
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ delay: i * 0.15, duration: 0.6 }}
                    className="relative group"
                  >
                    {/* Dot */}
                    <div className="absolute -left-[29px] top-1 w-4 h-4 rounded-full border-2 border-gold-500 bg-dark-950 group-hover:bg-gold-500 group-hover:shadow-[0_0_12px_rgba(255,215,0,0.6)] transition-all duration-300" />

                    <div className="p-5 rounded-xl bg-dark-800/60 border border-gold-700/20 hover:border-gold-500/40 transition-all duration-300">
                      <span className="inline-block text-xs font-bold text-gold-500 tracking-widest uppercase mb-2 font-mono">
                        {item.year}
                      </span>
                      <h4 className="text-base font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-muted">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Tagline */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="mt-8 p-5 rounded-xl glass border border-gold-700/30 text-center"
              >
                <p className="text-sm text-muted italic">
                  &ldquo;Nơi khát vọng tạo nên{' '}
                  <span className="text-gold-400 font-bold not-italic">GIÁ TRỊ</span>,
                  dữ liệu dẫn lối{' '}
                  <span className="text-gold-400 font-bold not-italic">TĂNG TRƯỞNG</span>&rdquo;
                </p>
                <p className="text-xs text-gold-700 mt-2 font-medium tracking-widest uppercase">
                  — Averix Commerce
                </p>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
