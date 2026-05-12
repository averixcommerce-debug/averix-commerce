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
    color: 'from-gold-700 to-gold-500',
  },
  {
    icon: Users,
    value: 120,
    suffix: '+',
    label: 'Thương Hiệu',
    sub: 'Đã xây dựng thành công',
    color: 'from-gold-600 to-gold-400',
  },
  {
    icon: TrendingUp,
    value: 10,
    prefix: '$',
    suffix: 'M+',
    label: 'Doanh Thu',
    sub: 'Revenue generated',
    color: 'from-gold-500 to-gold-300',
  },
  {
    icon: Star,
    value: 95,
    suffix: '%',
    label: 'Client Satisfaction',
    sub: 'Khách hàng hài lòng',
    color: 'from-gold-700 to-gold-500',
  },
];

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="stats" className="relative py-20 bg-dark-900 overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-700/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-700/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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
                <div className="relative rounded-2xl bg-dark-800 border border-gold-700/20 p-6 md:p-8 overflow-hidden
                  hover:border-gold-500/40 transition-all duration-500
                  hover:shadow-[0_0_40px_rgba(255,215,0,0.1)]">
                  {/* BG glow */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${stat.color} blur-3xl`} style={{ opacity: 0.04 }} />

                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} bg-opacity-10 mb-4`}>
                    <Icon size={22} className="text-gold-500" />
                  </div>

                  {/* Number */}
                  <div className="text-4xl md:text-5xl font-black font-display text-gold-gradient leading-none mb-2">
                    <AnimatedCounter
                      target={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      duration={2000}
                    />
                  </div>

                  {/* Label */}
                  <p className="font-bold text-white text-sm md:text-base mb-1">{stat.label}</p>
                  <p className="text-xs text-muted">{stat.sub}</p>

                  {/* Bottom accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${stat.color} opacity-30 group-hover:opacity-80 transition-opacity duration-500`} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
