import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const RisingSun = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="pointer-events-none absolute -top-48 left-1/2 -translate-x-1/2 h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,95,109,0.35),rgba(255,195,113,0.15)_60%,transparent_70%)]" />
    <div className="pointer-events-none absolute -top-32 right-10 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,173,173,0.25),transparent_70%)]" />
    <div className="pointer-events-none absolute top-20 left-10 h-48 w-48 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,221,148,0.2),transparent_70%)]" />
  </div>
);

const Wave = () => (
  <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 200" preserveAspectRatio="none" aria-hidden="true">
    <motion.path
      d="M0,160 C240,120 360,200 540,180 C720,160 900,80 1080,120 C1260,160 1440,120 1440,120 L1440,200 L0,200 Z"
      fill="url(#waveGrad)"
      initial={{ d: "M0,160 C240,160 360,160 540,160 C720,160 900,160 1080,160 C1260,160 1440,160 1440,160 L1440,200 L0,200 Z" }}
      animate={{ d: [
        "M0,160 C240,120 360,200 540,180 C720,160 900,80 1080,120 C1260,160 1440,120 1440,120 L1440,200 L0,200 Z",
        "M0,160 C240,140 360,120 540,140 C720,160 900,200 1080,180 C1260,160 1440,140 1440,140 L1440,200 L0,200 Z",
        "M0,160 C240,120 360,200 540,180 C720,160 900,80 1080,120 C1260,160 1440,120 1440,120 L1440,200 L0,200 Z",
      ]}}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
    />
    <defs>
      <linearGradient id="waveGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.25" />
        <stop offset="100%" stopColor="#0369a1" stopOpacity="0.35" />
      </linearGradient>
    </defs>
  </svg>
);

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 text-white">
      <RisingSun />

      <div className="mx-auto flex min-h-[90vh] max-w-6xl flex-col items-center justify-center gap-8 px-6 pt-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-wide text-white/80 backdrop-blur"
        >
          <span className="h-2 w-2 rounded-full bg-rose-400" />
          Crafted with a touch of Japanese aesthetics
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
          A portfolio inspired by ukiyo‑e and ocean waves — blending minimalism, motion, and code to create immersive user interfaces.
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

      <Wave />

      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:radial-gradient(rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:12px_12px]" />
    </section>
  );
}
