import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const RisingSun = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="pointer-events-none absolute -top-48 left-1/2 -translate-x-1/2 h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,95,109,0.35),rgba(255,195,113,0.15)_60%,transparent_70%)]" />
    <div className="pointer-events-none absolute -top-32 right-10 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,173,173,0.25),transparent_70%)]" />
    <div className="pointer-events-none absolute top-20 left-10 h-48 w-48 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,221,148,0.2),transparent_70%)]" />
  </div>
);

const Waves = () => (
  <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 260" preserveAspectRatio="none" aria-hidden="true">
    <defs>
      <linearGradient id="waveGrad1" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.25" />
        <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.35" />
      </linearGradient>
      <linearGradient id="waveGrad2" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.18" />
        <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.25" />
      </linearGradient>
    </defs>

    <motion.path
      d="M0,200 C240,160 360,240 540,220 C720,200 900,120 1080,160 C1260,200 1440,160 1440,160 L1440,260 L0,260 Z"
      fill="url(#waveGrad1)"
      initial={{ d: 'M0,220 C240,220 360,220 540,220 C720,220 900,220 1080,220 C1260,220 1440,220 1440,220 L1440,260 L0,260 Z' }}
      animate={{ d: [
        'M0,200 C240,160 360,240 540,220 C720,200 900,120 1080,160 C1260,200 1440,160 1440,160 L1440,260 L0,260 Z',
        'M0,210 C240,190 360,170 540,190 C720,210 900,250 1080,230 C1260,210 1440,190 1440,190 L1440,260 L0,260 Z',
        'M0,200 C240,160 360,240 540,220 C720,200 900,120 1080,160 C1260,200 1440,160 1440,160 L1440,260 L0,260 Z',
      ]}}
      transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
    />

    <motion.path
      d="M0,220 C200,200 380,240 560,230 C740,220 920,180 1100,200 C1280,220 1440,200 1440,200 L1440,260 L0,260 Z"
      fill="url(#waveGrad2)"
      initial={{ opacity: 0.8 }}
      animate={{ opacity: [0.6, 0.9, 0.6] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
    />
  </svg>
);

// Sakura petals falling
const Sakura = () => {
  const petals = Array.from({ length: 14 });
  return (
    <div className="pointer-events-none absolute inset-0">
      {petals.map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-2 w-3 origin-center rounded-[2px] bg-rose-300/70"
          style={{ left: `${Math.random() * 100}%` }}
          initial={{ y: -40, rotate: 0, opacity: 0 }}
          animate={{
            y: ['-10%', '110%'],
            x: [0, Math.random() * 60 - 30],
            rotate: [0, 180, 360],
            opacity: [0, 1, 0],
          }}
          transition={{ duration: 10 + Math.random() * 8, repeat: Infinity, delay: Math.random() * 6, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
};

// Seaweed sway at the seabed
const Seaweed = () => (
  <svg className="pointer-events-none absolute bottom-0 left-0 w-full opacity-40" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden>
    {[...Array(10)].map((_, i) => (
      <motion.path
        key={i}
        d={`M${80 + i * 130},120 C${60 + i * 130},80 ${100 + i * 130},40 ${80 + i * 130},0`}
        stroke="#86efac"
        strokeWidth="3"
        strokeLinecap="round"
        fill="transparent"
        animate={{ d: [
          `M${80 + i * 130},120 C${60 + i * 130},80 ${100 + i * 130},40 ${80 + i * 130},0`,
          `M${80 + i * 130},120 C${70 + i * 130},85 ${90 + i * 130},35 ${80 + i * 130},0`,
          `M${80 + i * 130},120 C${60 + i * 130},80 ${100 + i * 130},40 ${80 + i * 130},0`,
        ]}}
        transition={{ duration: 5 + (i % 3), repeat: Infinity, ease: 'easeInOut' }}
      />
    ))}
  </svg>
);

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 text-white">
      <RisingSun />
      <Sakura />

      <div className="mx-auto flex min-h-[95vh] max-w-6xl flex-col items-center justify-center gap-8 px-6 pt-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-wide text-white/80 backdrop-blur"
        >
          <Sparkles className="h-3.5 w-3.5 text-amber-300" />
          A portfolio with Japanese-inspired motion and texture
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-5xl font-semibold leading-tight md:text-7xl"
        >
          Konnichiwa — I build elegant, performant web experiences
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl text-balance text-white/70"
        >
          Inspired by ukiyo‑e waves, sakura petals, and gentle ocean sway — blending minimalism, motion, and modern engineering.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-rose-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-rose-500/25 transition hover:brightness-110">
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10">
            Contact Me
          </a>
        </motion.div>
      </div>

      <Seaweed />
      <Waves />

      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:radial-gradient(rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:12px_12px]" />
    </section>
  );
}
