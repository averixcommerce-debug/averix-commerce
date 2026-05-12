'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';

export default function CommerceChart() {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const months = ['Q1\'23', 'Q2\'23', 'Q3\'23', 'Q4\'23', 'Q1\'24', 'Q2\'24'];
  const revenueData = [30, 48, 62, 78, 88, 100];
  const trafficData = [20, 38, 50, 65, 80, 95];
  const conversionData = [15, 25, 38, 52, 68, 82];

  // SVG dimensions
  const W = 560;
  const H = 220;
  const PAD = { top: 20, right: 20, bottom: 40, left: 40 };
  const innerW = W - PAD.left - PAD.right;
  const innerH = H - PAD.top - PAD.bottom;

  const toPath = (data: number[]) => {
    return data
      .map((v, i) => {
        const x = PAD.left + (i / (data.length - 1)) * innerW;
        const y = PAD.top + innerH - (v / 100) * innerH;
        return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
      })
      .join(' ');
  };

  const toAreaPath = (data: number[]) => {
    const linePath = toPath(data);
    const lastX = PAD.left + innerW;
    const firstX = PAD.left;
    const baseY = PAD.top + innerH;
    return `${linePath} L ${lastX} ${baseY} L ${firstX} ${baseY} Z`;
  };

  const metrics = [
    { label: 'Revenue', color: '#ffd700', value: '$2.4M', change: '+127%' },
    { label: 'Traffic',  color: '#b8860b', value: '184K',  change: '+95%' },
    { label: 'Conversion', color: '#daa520', value: '4.8%', change: '+82%' },
  ];

  const animDuration = isInView ? '1.8s' : '0s';

  return (
    <div className="rounded-2xl glass border border-gold-700/30 p-6 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-xs uppercase tracking-widest text-gold-600 font-semibold mb-1">
            Commerce Insights
          </p>
          <h3 className="text-xl font-bold text-gold-gradient font-display">
            E-Commerce Growth Trend
          </h3>
        </div>
        <div className="flex gap-4">
          {metrics.map((m) => (
            <div key={m.label} className="text-right">
              <p className="text-xs text-muted">{m.label}</p>
              <p className="text-base font-bold" style={{ color: m.color }}>{m.value}</p>
              <p className="text-xs text-green-400 font-medium">{m.change}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SVG Chart */}
      <svg
        ref={ref}
        viewBox={`0 0 ${W} ${H}`}
        className="w-full"
        style={{ height: 'auto' }}
      >
        {/* Grid lines */}
        {[0, 25, 50, 75, 100].map((pct) => {
          const y = PAD.top + innerH - (pct / 100) * innerH;
          return (
            <g key={pct}>
              <line
                x1={PAD.left} y1={y} x2={PAD.left + innerW} y2={y}
                stroke="rgba(255,215,0,0.06)" strokeWidth="1"
              />
              <text x={PAD.left - 6} y={y + 4} textAnchor="end"
                fill="rgba(255,215,0,0.3)" fontSize="10">
                {pct}
              </text>
            </g>
          );
        })}

        {/* X axis labels */}
        {months.map((m, i) => {
          const x = PAD.left + (i / (months.length - 1)) * innerW;
          return (
            <text key={m} x={x} y={H - 8} textAnchor="middle"
              fill="rgba(255,215,0,0.4)" fontSize="10">
              {m}
            </text>
          );
        })}

        {/* Area fills */}
        <defs>
          <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffd700" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#ffd700" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="traGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#b8860b" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#b8860b" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="conGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#daa520" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#daa520" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path d={toAreaPath(revenueData)} fill="url(#revGrad)" />
        <path d={toAreaPath(trafficData)} fill="url(#traGrad)" />
        <path d={toAreaPath(conversionData)} fill="url(#conGrad)" />

        {/* Lines */}
        {[
          { data: revenueData, color: '#ffd700', id: 'rev' },
          { data: trafficData, color: '#b8860b', id: 'tra' },
          { data: conversionData, color: '#daa520', id: 'con' },
        ].map(({ data, color, id }) => {
          const pathLen = 1000;
          return (
            <path
              key={id}
              d={toPath(data)}
              fill="none"
              stroke={color}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray={pathLen}
              strokeDashoffset={isInView ? 0 : pathLen}
              style={{
                transition: `stroke-dashoffset ${animDuration} cubic-bezier(0.4, 0, 0.2, 1)`,
                filter: `drop-shadow(0 0 4px ${color}88)`,
              }}
            />
          );
        })}

        {/* Data point dots */}
        {revenueData.map((v, i) => {
          const x = PAD.left + (i / (revenueData.length - 1)) * innerW;
          const y = PAD.top + innerH - (v / 100) * innerH;
          return (
            <circle key={i} cx={x} cy={y} r="4"
              fill="#ffd700"
              stroke="#0a0a0a" strokeWidth="2"
              style={{
                opacity: isInView ? 1 : 0,
                transition: `opacity 0.3s ease ${0.8 + i * 0.15}s`,
                filter: 'drop-shadow(0 0 4px #ffd700)',
              }}
            />
          );
        })}
      </svg>

      {/* Legend */}
      <div className="flex gap-6 mt-4 pt-4 border-t border-gold-700/20">
        {[
          { label: 'Revenue', color: '#ffd700' },
          { label: 'Traffic', color: '#b8860b' },
          { label: 'Conversion', color: '#daa520' },
        ].map(({ label, color }) => (
          <div key={label} className="flex items-center gap-2">
            <div className="w-8 h-0.5 rounded" style={{ background: color }} />
            <span className="text-xs text-muted">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
