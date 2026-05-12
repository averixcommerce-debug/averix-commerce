import type { Metadata } from 'next';
import ScrollReveal from '../_components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Quy Trình Vận Hành — Averix Commerce',
  description: 'Quy trình phát triển sản phẩm của Averix Commerce: Research, Idea, Design, Listing, Launch, Optimize.',
};

const process = [
  { step: '01', title: 'Research', desc: 'Tìm niche, trend, keyword, mùa vụ và insight khách hàng.' },
  { step: '02', title: 'Idea', desc: 'Phát triển concept sản phẩm, thông điệp, thiết kế và yếu tố cá nhân hóa.' },
  { step: '03', title: 'Design', desc: 'Triển khai artwork phù hợp với sản phẩm, nền tảng và thị trường mục tiêu.' },
  { step: '04', title: 'Listing', desc: 'Xây dựng title, description, mockup, tag và nội dung bán hàng.' },
  { step: '05', title: 'Launch', desc: 'Đưa sản phẩm lên Merch by Amazon hoặc Shopify.' },
  { step: '06', title: 'Optimize', desc: 'Theo dõi dữ liệu, cải thiện sản phẩm và mở rộng các concept có tiềm năng.' },
];

export default function ProcessPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-dark-950 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold-700/8 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <span className="inline-block text-xs font-bold tracking-[0.3em] text-gold-600 uppercase mb-6 px-4 py-2 rounded-full glass border border-gold-700/30">
              — Quy Trình —
            </span>
            <h1 className="text-5xl md:text-7xl font-black font-display mb-6">
              <span className="text-white">Phát Triển</span><br />
              <span className="text-gold-gradient">Sản Phẩm</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Từ nghiên cứu insight đến khi ra mắt trên thị trường, mọi bước đều được thực thi với tiêu chuẩn cao nhất.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Process grid */}
      <section className="relative section-padding bg-dark-900 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((p, i) => (
              <ScrollReveal key={p.step} delay={i * 0.1}>
                <div className="relative p-8 rounded-2xl bg-dark-800 border border-gold-700/20 hover:border-gold-500/40 transition-all duration-500 group h-full">
                  <span className="block text-6xl font-black text-gold-gradient font-display mb-6 leading-none opacity-40 group-hover:opacity-80 transition-opacity">
                    {p.step}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3">{p.title}</h3>
                  <p className="text-base text-white/55 leading-relaxed">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
