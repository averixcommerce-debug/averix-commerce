import ScrollReveal from '../_components/ScrollReveal';
import GoldButton from '../_components/GoldButton';
import AXLogo from '../_components/AXLogo';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function CtaSection() {
  return (
    <section id="cta" className="relative py-24 bg-dark-900 overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-700/50 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[300px] bg-gold-700/8 blur-[100px] rounded-full" />
      </div>

      {/* Decorative orbits */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div
          className="w-[500px] h-[500px] rounded-full border border-gold-700/10"
          style={{ animation: 'rotate-slow 30s linear infinite' }}
        >
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gold-600/60 shadow-[0_0_8px_rgba(255,215,0,0.4)]" />
        </div>
        <div
          className="absolute inset-0 rounded-full border border-gold-600/8 scale-125"
          style={{ animation: 'rotate-reverse 25s linear infinite' }}
        >
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gold-700/60" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Logo */}
        <ScrollReveal>
          <div className="flex justify-center mb-8">
            <div
              className="w-20 h-20 animate-float"
              style={{ filter: 'drop-shadow(0 0 30px rgba(255,215,0,0.5))' }}
            >
              <AXLogo />
            </div>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black font-display leading-tight mb-6">
            <span className="text-white">Sẵn sàng tạo nên</span><br />
            <span className="text-gold-gradient animate-glow-text">GIÁ TRỊ</span>
            <span className="text-white"> cùng chúng tôi?</span>
          </h2>

          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            Đặt lịch tư vấn miễn phí với team Averix Commerce.
            Chúng tôi sẽ phân tích cơ hội và đề xuất chiến lược phù hợp
            cho thị trường của bạn.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GoldButton href="/contact" size="lg">
              Tư vấn miễn phí →
            </GoldButton>
            <GoldButton href="/services" variant="outline" size="lg">
              Xem dịch vụ
            </GoldButton>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-muted">
            {[
              '✅ Không cam kết dài hạn',
              '✅ Tư vấn 100% miễn phí',
              '✅ Phản hồi trong 24h',
              '✅ 5+ năm kinh nghiệm',
            ].map((b) => (
              <span key={b} className="text-[15px] font-medium text-white/60">{b}</span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
