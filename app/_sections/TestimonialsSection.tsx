'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../_components/ScrollReveal';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Minh Tuấn',
    role: 'Founder, CustomCraft™',
    avatar: 'MT',
    stars: 5,
    quote:
      'Averix Commerce đã giúp tôi xây dựng store từ 0 đến $18K revenue trong tháng đầu tiên. Team rất pro, data-driven và luôn deliver đúng cam kết.',
    result: '$18K / tháng đầu',
  },
  {
    name: 'Thu Hà',
    role: 'Brand Owner, WearUnique™',
    avatar: 'TH',
    stars: 5,
    quote:
      'Amazon listing optimization của Averix thực sự đỉnh. Từ rank #5000 lên top 500 BSR trong 60 ngày, ACoS giảm từ 45% xuống 18%. Không thể tin được.',
    result: '+340% Sales trong 60 ngày',
  },
  {
    name: 'Đức Long',
    role: 'CEO, MemoryBox™',
    avatar: 'DL',
    stars: 5,
    quote:
      'Team Averix không chỉ build store — họ build cả thương hiệu. Strategy rõ ràng, thực thi sắc bén. Năm đầu chúng tôi đạt $100K+ revenue.',
    result: '$100K+ Year 1',
  },
  {
    name: 'Phương Linh',
    role: 'Founder, PetMoment™',
    avatar: 'PL',
    stars: 5,
    quote:
      'Điều tôi thích nhất là Averix dùng data để quyết định mọi thứ, không đoán mò. ROAS của tôi đạt 4.5x chỉ sau 3 tháng tối ưu với team.',
    result: 'ROAS 4.5x',
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section id="testimonials" className="relative section-padding bg-dark-950 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold-700/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.3em] text-gold-600 uppercase mb-4">
            — Testimonials —
          </span>
          <h2 className="text-4xl md:text-6xl font-black font-display">
            <span className="text-white">Khách Hàng </span>
            <span className="text-gold-gradient">Nói Gì</span>
          </h2>
        </ScrollReveal>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="glass-dark rounded-3xl p-8 md:p-12 text-center"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} size={18} className="text-gold-500 fill-gold-500" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 italic max-w-2xl mx-auto">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Result badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gold-500/10 border border-gold-700/40 mb-8">
                <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
                <span className="text-sm font-bold text-gold-400">{t.result}</span>
              </div>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-700 to-gold-500 flex items-center justify-center text-dark-950 font-black text-sm">
                  {t.avatar}
                </div>
                <div className="text-left">
                  <p className="font-bold text-white">{t.name}</p>
                  <p className="text-sm text-muted">{t.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              id="testimonial-prev"
              onClick={prev}
              className="w-10 h-10 rounded-full border border-gold-700/40 flex items-center justify-center text-gold-500
                hover:border-gold-500 hover:bg-gold-500/10 transition-all duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? 'bg-gold-500 w-6 shadow-[0_0_8px_rgba(255,215,0,0.6)]'
                      : 'bg-gold-700/40 hover:bg-gold-600/60'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              id="testimonial-next"
              onClick={next}
              className="w-10 h-10 rounded-full border border-gold-700/40 flex items-center justify-center text-gold-500
                hover:border-gold-500 hover:bg-gold-500/10 transition-all duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
