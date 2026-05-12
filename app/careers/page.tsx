import type { Metadata } from 'next';
import ScrollReveal from '../_components/ScrollReveal';
import GoldButton from '../_components/GoldButton';

export const metadata: Metadata = {
  title: 'Tuyển Dụng — Averix Commerce',
  description: 'Gia nhập Averix Commerce. Chúng tôi luôn tìm kiếm những con người sáng tạo, chủ động và có tinh thần phát triển dài hạn.',
};

const jobs = [
  'POD Design Artist',
  'Product Research Executive',
  'AI Video Ads Creator',
  'Facebook Ads Specialist',
  'Shopify Product & Personalization Specialist',
  'Customer Service & Fulfillment Executive',
];

export default function CareersPage() {
  return (
    <div className="pt-20">
      <section className="relative py-24 bg-dark-950 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold-700/8 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <span className="inline-block text-xs font-bold tracking-[0.3em] text-gold-600 uppercase mb-6 px-4 py-2 rounded-full glass border border-gold-700/30">
              — Tuyển Dụng —
            </span>
            <h1 className="text-5xl md:text-7xl font-black font-display mb-6">
              <span className="text-white">Gia Nhập</span><br />
              <span className="text-gold-gradient">Averix Commerce</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Chúng tôi luôn tìm kiếm những con người sáng tạo, chủ động và có tinh thần phát triển dài hạn trong lĩnh vực POD, Shopify và thương mại điện tử quốc tế.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative section-padding bg-dark-900 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <ScrollReveal className="mb-12">
            <h2 className="text-3xl font-black font-display text-white mb-8 text-center">
              Các vị trí chúng tôi <span className="text-gold-gradient">đang quan tâm</span>
            </h2>
            <div className="space-y-4">
              {jobs.map((job) => (
                <div key={job} className="flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-2xl bg-dark-800 border border-gold-700/20 hover:border-gold-500/40 transition-all duration-300 group">
                  <span className="text-lg font-bold text-white mb-4 sm:mb-0 group-hover:text-gold-400 transition-colors">
                    {job}
                  </span>
                  <GoldButton href="/contact" variant="outline" size="sm">
                    Ứng tuyển ngay
                  </GoldButton>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="text-center p-8 rounded-2xl glass border border-gold-700/30 mt-12">
            <p className="text-lg text-white/70 leading-relaxed mb-6">
              Nếu bạn yêu thích sáng tạo, sản phẩm, dữ liệu và thị trường US, Averix Commerce có thể là nơi phù hợp để bạn phát triển.
            </p>
            <GoldButton href="/contact" size="lg">
              Liên hệ ứng tuyển →
            </GoldButton>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
