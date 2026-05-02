import magicCircle from '../assets/generated/magic_circle.png';
import sakuraCluster from '../assets/generated/sakura_cluster.png';
import sparkleStar from '../assets/generated/sparkle_star.png';

const stars = [
  'left-[8%] top-[12%] h-1.5 w-1.5 delay-0',
  'left-[28%] top-[8%] h-1 w-1 delay-500',
  'right-[18%] top-[16%] h-2 w-2 delay-1000',
  'left-[14%] top-[58%] h-1 w-1 delay-700',
  'right-[9%] top-[52%] h-1.5 w-1.5 delay-300',
  'left-[46%] top-[78%] h-1 w-1 delay-1000',
];

const petals = [
  'left-[10%] top-[28%] delay-0',
  'left-[34%] top-[18%] delay-700',
  'right-[25%] top-[35%] delay-1000',
  'right-[8%] top-[66%] delay-300',
  'left-[20%] top-[82%] delay-500',
];

export function Decorations() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
      <style>{`
        @keyframes lp-glow {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); opacity: .72; }
          50% { transform: translate3d(18px, -14px, 0) scale(1.08); opacity: .95; }
        }
        @keyframes lp-drift {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
          50% { transform: translate3d(18px, -24px, 0) rotate(12deg); }
        }
        @keyframes lp-petal {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(18deg); }
          50% { transform: translate3d(-18px, 26px, 0) rotate(46deg); }
        }
      `}</style>

      <div className="absolute -left-28 top-20 h-72 w-72 rounded-full bg-pink-500/30 blur-3xl [animation:lp-glow_8s_ease-in-out_infinite]" />
      <div className="absolute -right-24 top-48 h-80 w-80 rounded-full bg-sky-400/20 blur-3xl [animation:lp-glow_10s_ease-in-out_infinite_reverse]" />
      <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-purple-300/20 blur-3xl [animation:lp-glow_12s_ease-in-out_infinite]" />

      <img
        src={magicCircle}
        alt=""
        className="absolute -right-20 top-[18%] w-72 opacity-[0.15] [animation:lp-drift_14s_ease-in-out_infinite] sm:w-96"
      />
      <img
        src={sakuraCluster}
        alt=""
        className="absolute -left-8 bottom-[10%] w-44 opacity-[0.35] [animation:lp-petal_13s_ease-in-out_infinite] sm:w-60"
      />

      <div className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-pink-200/10 shadow-[0_0_80px_rgba(244,114,182,0.16)]" />
      <div className="absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-200/10" />

      {stars.map((className) => (
        <img
          key={className}
          src={sparkleStar}
          alt=""
          className={`absolute object-contain drop-shadow-[0_0_14px_rgba(255,255,255,0.85)] [animation:lp-drift_7s_ease-in-out_infinite] ${className}`}
        />
      ))}

      {petals.map((className) => (
        <span
          key={className}
          className={`absolute h-4 w-2 rounded-full rounded-bl-none bg-pink-200/70 shadow-[0_0_16px_rgba(251,207,232,0.45)] [animation:lp-petal_9s_ease-in-out_infinite] ${className}`}
        />
      ))}
    </div>
  );
}
