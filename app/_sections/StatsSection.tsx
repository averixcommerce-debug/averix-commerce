'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import AnimatedCounter from '../_components/AnimatedCounter';
import { Award, Users, TrendingUp, Star } from 'lucide-react';

const stats = [
  {
    icon: Award,
    value: 5,
    suffix: '+',
    label: 'Năm Kinh Nghiệm',
    sub: 'POD US Market',
    iconBg: 'bg-amber-500/20',
    iconBorder: 'border-amber-500/40',
    iconColor: 'text-amber-400',
    accent: 'from-amber-600 to-yellow-400',
  },
  {
    icon: Users,
    value: 120,
    suffix: '+',
    label: 'Thương Hiệu',
    sub: 'Đã xây dựng thành công',
    iconBg: 'bg-yellow-400/20',
    iconBorder: 'border-yellow-400/40',
    iconColor: 'text-yellow-300',
    accent: 'from-yellow-500 to-amber-300',
  },
  {
    icon: TrendingUp,
    value: 10,
    prefix: '$',
    suffix: 'M+',
    label: 'Doanh Thu',
    sub: 'Revenue generated',
    iconBg: 'bg-gold-500/20',
    iconBorder: 'border-gold-500/40',
    iconColor: 'text-gold-300',
    accent: 'from-gold-600 to-gold-300',
  },
  {
    icon: Star,
    value: 95,
    suffix: '%',
    label: 'Client Satisfaction',
    sub: 'Khách hàng hài lòng',
    iconBg: 'bg-amber-400/20',
    iconBorder: 'border-amber-400/40',
    iconColor: 'text-amber-300',
    accent: 'from-amber-500 to-yellow-300',
  },
];

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="stats" className="relative py-20 bg-dark-900 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-700/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-700/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="relative group"
              >
                <div className="relative rounded-2xl overflow-hidden
                  bg-[#111111] border border-white/8
                  hover:border-gold-600/50 transition-all duration-500
                  hover:shadow-[0_0_40px_rgba(255,215,0,0.12)]
                  p-6 md:p-7">

                  {/* Top corner glow */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gold-500/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Icon box — bright enough to pop */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5
                    ${stat.iconBg} border ${stat.iconBorder}
                    shadow-[0_0_12px_rgba(255,200,0,0.15)]`}>
                    <Icon size={22} className={stat.iconColor} strokeWidth={1.8} />
                  </div>

                  {/* Number */}
                  <div className="text-4xl md:text-5xl font-black font-display leading-none mb-2"
                    style={{ background: 'linear-gradient(135deg,#b8860b,#ffd700,#fff8e1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    <AnimatedCounter
                      target={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      duration={2000}
                    />
                  </div>

                  <p className="font-bold text-white text-sm md:text-base mb-1">{stat.label}</p>
                  <p className="text-xs text-white/40">{stat.sub}</p>

                  {/* Bottom accent bar */}
                  <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${stat.accent} opacity-20 group-hover:opacity-70 transition-opacity duration-500`} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
