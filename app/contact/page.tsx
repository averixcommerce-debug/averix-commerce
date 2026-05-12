'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../_components/ScrollReveal';
import GoldButton from '../_components/GoldButton';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'contact@averixcommerce.com', href: 'mailto:contact@averixcommerce.com' },
  { icon: Phone, label: 'Hotline', value: '+84 xxx xxx xxx', href: 'tel:+84000000000' },
  { icon: MapPin, label: 'Location', value: 'Vietnam · US Market', href: '#' },
];

const services = [
  'POD Store Development',
  'Amazon Marketplace',
  'Product Design & POD',
  'Growth Analytics',
  'Brand Identity',
  'Tư vấn chiến lược',
  'Khác',
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', service: '', budget: '', message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate async
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-dark-950 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold-700/8 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <span className="inline-block text-xs font-bold tracking-[0.3em] text-gold-600 uppercase mb-6 px-4 py-2 rounded-full glass border border-gold-700/30">
              — Liên Hệ —
            </span>
            <h1 className="text-5xl md:text-7xl font-black font-display mb-6">
              <span className="text-white">Bắt Đầu</span><br />
              <span className="text-gold-gradient">Hành Trình</span>
            </h1>
            <p className="text-base text-muted max-w-xl mx-auto">
              Đặt lịch tư vấn miễn phí. Chúng tôi sẽ phân tích cơ hội và đề xuất
              chiến lược phù hợp cho bạn trong vòng 24h.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="relative section-padding bg-dark-900 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left: Info */}
            <div className="lg:col-span-2">
              <ScrollReveal direction="left">
                <h2 className="text-2xl font-black font-display text-gold-gradient mb-3">Liên hệ trực tiếp</h2>
                <p className="text-sm text-muted mb-8 leading-relaxed">
                  Tư vấn hoàn toàn miễn phí — không cam kết, không áp lực.
                  Chúng tôi chỉ nhận project khi chắc chắn tạo được giá trị thực.
                </p>

                <div className="space-y-4 mb-8">
                  {contactInfo.map((c) => {
                    const Icon = c.icon;
                    return (
                      <a key={c.label} href={c.href}
                        className="flex items-center gap-4 p-4 rounded-xl bg-dark-800 border border-gold-700/20
                          hover:border-gold-500/40 transition-all duration-300 group">
                        <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-700/25 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                          <Icon size={18} className="text-gold-500" />
                        </div>
                        <div>
                          <p className="text-xs text-muted mb-0.5">{c.label}</p>
                          <p className="text-sm font-medium text-white">{c.value}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>

                {/* Trust */}
                <div className="p-5 rounded-xl glass border border-gold-700/25">
                  <p className="text-xs font-bold text-gold-500 uppercase tracking-wider mb-3">Cam kết của chúng tôi</p>
                  {['Phản hồi trong 24h', 'Tư vấn 100% miễn phí', 'Không áp lực mua hàng', '5+ năm kinh nghiệm'].map((item) => (
                    <div key={item} className="flex items-center gap-2 py-1.5">
                      <CheckCircle size={14} className="text-gold-500 shrink-0" />
                      <span className="text-xs text-muted">{item}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <ScrollReveal direction="right">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center p-12 rounded-2xl glass border border-gold-700/30"
                  >
                    <div className="w-20 h-20 rounded-full bg-gold-500/20 border border-gold-500/40 flex items-center justify-center mb-6">
                      <CheckCircle size={40} className="text-gold-500" />
                    </div>
                    <h3 className="text-2xl font-black font-display text-gold-gradient mb-3">
                      Đã nhận được!
                    </h3>
                    <p className="text-muted text-sm max-w-xs">
                      Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi trong vòng 24h.
                    </p>
                  </motion.div>
                ) : (
                  <form
                    id="contact-form"
                    onSubmit={handleSubmit}
                    className="rounded-2xl glass-dark border border-gold-700/25 p-8 space-y-5"
                  >
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-xs font-semibold text-gold-600 uppercase tracking-wide mb-2">
                          Tên của bạn *
                        </label>
                        <input
                          id="name" name="name" type="text" required
                          value={form.name} onChange={handleChange}
                          placeholder="Nguyễn Văn A"
                          className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-gold-700/25 text-white text-sm
                            placeholder:text-muted/50 focus:outline-none focus:border-gold-500/60 focus:shadow-[0_0_15px_rgba(255,215,0,0.1)]
                            transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs font-semibold text-gold-600 uppercase tracking-wide mb-2">
                          Email *
                        </label>
                        <input
                          id="email" name="email" type="email" required
                          value={form.email} onChange={handleChange}
                          placeholder="you@example.com"
                          className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-gold-700/25 text-white text-sm
                            placeholder:text-muted/50 focus:outline-none focus:border-gold-500/60 focus:shadow-[0_0_15px_rgba(255,215,0,0.1)]
                            transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className="block text-xs font-semibold text-gold-600 uppercase tracking-wide mb-2">
                          Số điện thoại
                        </label>
                        <input
                          id="phone" name="phone" type="tel"
                          value={form.phone} onChange={handleChange}
                          placeholder="+84 xxx xxx xxx"
                          className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-gold-700/25 text-white text-sm
                            placeholder:text-muted/50 focus:outline-none focus:border-gold-500/60 focus:shadow-[0_0_15px_rgba(255,215,0,0.1)]
                            transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-xs font-semibold text-gold-600 uppercase tracking-wide mb-2">
                          Dịch vụ quan tâm *
                        </label>
                        <select
                          id="service" name="service" required
                          value={form.service} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-gold-700/25 text-white text-sm
                            focus:outline-none focus:border-gold-500/60 transition-all duration-300 appearance-none"
                        >
                          <option value="" disabled>Chọn dịch vụ...</option>
                          {services.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-xs font-semibold text-gold-600 uppercase tracking-wide mb-2">
                        Budget dự kiến
                      </label>
                      <select
                        id="budget" name="budget"
                        value={form.budget} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-gold-700/25 text-white text-sm
                          focus:outline-none focus:border-gold-500/60 transition-all duration-300 appearance-none"
                      >
                        <option value="">Chọn budget...</option>
                        <option>Dưới $1,000</option>
                        <option>$1,000 - $3,000</option>
                        <option>$3,000 - $10,000</option>
                        <option>$10,000+</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-semibold text-gold-600 uppercase tracking-wide mb-2">
                        Mô tả dự án *
                      </label>
                      <textarea
                        id="message" name="message" required rows={4}
                        value={form.message} onChange={handleChange}
                        placeholder="Chia sẻ về ý tưởng, mục tiêu hoặc thách thức bạn đang gặp phải..."
                        className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-gold-700/25 text-white text-sm
                          placeholder:text-muted/50 focus:outline-none focus:border-gold-500/60 focus:shadow-[0_0_15px_rgba(255,215,0,0.1)]
                          transition-all duration-300 resize-none"
                      />
                    </div>

                    <button
                      id="contact-submit"
                      type="submit"
                      disabled={loading}
                      className="w-full relative flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-dark-950 overflow-hidden
                        before:absolute before:inset-0 before:bg-[linear-gradient(90deg,#b8860b,#ffd700,#fff8e1,#ffd700,#b8860b)]
                        before:bg-[length:200%_100%] before:[animation:shimmer_3s_linear_infinite]
                        hover:shadow-[0_0_30px_rgba(255,215,0,0.4)] hover:scale-[1.02]
                        disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200 active:scale-[0.99]"
                    >
                      {loading ? (
                        <span className="relative z-10 flex items-center gap-2 mix-blend-multiply">
                          <span className="w-4 h-4 border-2 border-dark-900/30 border-t-dark-900 rounded-full animate-spin" />
                          Đang gửi...
                        </span>
                      ) : (
                        <span className="relative z-10 flex items-center gap-2 mix-blend-multiply">
                          <Send size={16} />
                          Gửi yêu cầu tư vấn
                        </span>
                      )}
                    </button>
                  </form>
                )}
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
