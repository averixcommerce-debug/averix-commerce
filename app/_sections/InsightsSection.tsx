import ScrollReveal from '../_components/ScrollReveal';
import CommerceChart from '../_components/CommerceChart';
import { Activity, Target, Users, DollarSign } from 'lucide-react';

const kpis = [
  { icon: Activity, label: 'Avg. Traffic Growth', value: '+127%', color: 'text-gold-400' },
  { icon: Target, label: 'Avg. Conversion Rate', value: '4.8%', color: 'text-gold-500' },
  { icon: DollarSign, label: 'Avg. ROAS', value: '4.2x', color: 'text-gold-400' },
  { icon: Users, label: 'Customer Retention', value: '68%', color: 'text-gold-500' },
];

export default function InsightsSection() {
  return (
    <section id="insights" className="relative section-padding bg-dark-950 overflow-hidden">
      {/* Decorative */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gold-700/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Chart */}
          <ScrollReveal direction="left">
            <CommerceChart />
          </ScrollReveal>

          {/* Right: KPIs */}
          <div>
            <ScrollReveal direction="right">
              <span className="inline-block text-xs font-bold tracking-[0.3em] text-gold-600 uppercase mb-4">
                — Commerce Insights —
              </span>
              <h2 className="text-4xl md:text-5xl font-black font-display mb-4">
                <span className="text-white">Dữ Liệu Dẫn Lối</span><br />
                <span className="text-gold-gradient">Tăng Trưởng</span>
              </h2>
              <p className="text-muted text-base leading-relaxed mb-8">
                Chúng tôi không đoán mò — mọi quyết định đều dựa trên data.
                Từ traffic analysis đến ROAS optimization, chúng tôi giúp brand của bạn
                tăng trưởng bền vững và có thể đo lường được.
              </p>
            </ScrollReveal>

            {/* KPI Grid */}
            <div className="grid grid-cols-2 gap-4">
              {kpis.map((kpi, i) => {
                const Icon = kpi.icon;
                return (
                  <ScrollReveal key={kpi.label} direction="right" delay={0.1 + i * 0.1}>
                    <div className="p-5 rounded-xl bg-dark-800 border border-gold-700/20
                      hover:border-gold-500/40 hover:shadow-[0_0_20px_rgba(255,215,0,0.08)]
                      transition-all duration-300 group">
                      <div className="flex items-center gap-2 mb-3">
                        <Icon size={16} className={`${kpi.color} group-hover:scale-110 transition-transform`} />
                        <span className="text-xs text-muted">{kpi.label}</span>
                      </div>
                      <p className={`text-3xl font-black font-display ${kpi.color}`}>{kpi.value}</p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>

            <ScrollReveal direction="right" delay={0.5}>
              <p className="mt-6 text-xs text-muted/60 italic">
                * Số liệu trung bình từ các brands do Averix Commerce quản lý.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
