export default function AXLogo({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#b8860b" />
          <stop offset="40%" stopColor="#ffd700" />
          <stop offset="70%" stopColor="#fff8e1" />
          <stop offset="100%" stopColor="#daa520" />
        </linearGradient>
        <linearGradient id="goldGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#daa520" />
          <stop offset="50%" stopColor="#ffd700" />
          <stop offset="100%" stopColor="#b8860b" />
        </linearGradient>
      </defs>
      {/* A shape */}
      <polygon
        points="25,75 50,20 62,45 50,45 45,60 38,60"
        fill="url(#goldGrad)"
      />
      <polygon
        points="50,20 75,75 62,75 50,45"
        fill="url(#goldGrad)"
        opacity="0.9"
      />
      <polygon
        points="38,60 62,60 58,70 42,70"
        fill="url(#goldGrad)"
      />
      {/* X shape — overlapping right side */}
      <line
        x1="60" y1="22" x2="90" y2="70"
        stroke="url(#goldGrad2)" strokeWidth="10" strokeLinecap="round"
      />
      <line
        x1="90" y1="22" x2="60" y2="70"
        stroke="url(#goldGrad2)" strokeWidth="10" strokeLinecap="round"
      />
    </svg>
  );
}
