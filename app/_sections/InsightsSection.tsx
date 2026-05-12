import ScrollReveal from '../_components/ScrollReveal';
import CommerceChart from '../_components/CommerceChart';
import { Activity, Target, Users, DollarSign } from 'lucide-react';

const kpis = [
  {
    icon: Activity,
    label: 'Avg. Traffic Growth',
    value: '+127%',
    iconBg: 'rgba(255,215,0,0.15)',
    iconBorder: 'rgba(218,165,32,0.4)',
    iconColor: '#ffd700',
    valueColor: '#ffd700',
  },
  {
    icon: Target,
    label: 'Avg. Conversion Rate',
    value: '4.8%',
    iconBg: 'rgba(52,211,153,0.13)',
    iconBorder: 'rgba(52,211,153,0.4)',
    iconColor: '#34d399',
    valueColor: '#34d399',
  },
  {
    icon: DollarSign,
    label: 'Avg. ROAS',
    value: '4.2x',
    iconBg: 'rgba(251,191,36,0.15)',
    iconBorder: 'rgba(251,191,36,0.4)',
    iconColor: '#fbbf24',
    valueColor: '#fbbf24',
  },
  {
    icon: Users,
    label: 'Customer Retention',
    value: '68%',
    iconBg: 'rgba(167,139,250,0.13)',
    iconBorder: 'rgba(167,139,250,0.4)',
    iconColor: '#a78bfa',
    valueColor: '#a78bfa',
  },
];

export default function InsightsSection() {
  return (
    <section id="insights" className="relative section-padding bg-dark-950 overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(184,134,11,0.06) 0%, transparent 70%)' }} />

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
              <p className="text-white/50 text-lg leading-relaxed mb-8">
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
                    <div className="p-5 rounded-xl border border-white/6 bg-[#111]
                      hover:border-gold-600/40 hover:shadow-[0_0_20px_rgba(255,215,0,0.06)]
                      transition-all duration-300 group">
                      {/* Icon + label row */}
                      <div className="flex items-center gap-2.5 mb-4">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                          style={{
                            background: kpi.iconBg,
                            border: `1px solid ${kpi.iconBorder}`,
                          }}>
                          <Icon size={15} color={kpi.iconColor} strokeWidth={2} />
                        </div>
                        <span className="text-sm text-white/40 leading-tight">{kpi.label}</span>
                      </div>
                      {/* Value */}
                      <p className="text-3xl font-black font-display"
                        style={{ color: kpi.valueColor }}>
                        {kpi.value}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>

            <ScrollReveal direction="right" delay={0.5}>
              <p className="mt-6 text-xs text-white/30 italic">
                * Số liệu trung bình từ các brands do Averix Commerce quản lý.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
