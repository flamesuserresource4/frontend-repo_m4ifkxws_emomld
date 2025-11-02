import { motion } from 'framer-motion';
import { Code2, Sparkles, MapPin } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 text-center">
          <div className="mx-auto mb-4 h-10 w-10 rotate-6 rounded-lg bg-gradient-to-tr from-rose-400/40 via-amber-300/40 to-sky-400/40 blur-[1px]" />
          <h2 className="text-3xl font-semibold md:text-4xl">About</h2>
          <p className="mt-2 text-white/60">Design with harmony, build with precision.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-6"
          >
            <div className="flex items-center gap-3">
              <Code2 className="h-5 w-5 text-rose-300" />
              <span className="text-sm uppercase tracking-wider text-white/60">Philosophy</span>
            </div>
            <p className="mt-4 leading-relaxed text-white/75">
              I craft interfaces that feel serene and responsive—balancing animation, layout, and accessibility. Inspired by ukiyo‑e prints and natural motion, my work blends subtle textures, soft gradients, and flowing shapes with clean engineering.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs text-white/70">
              {['Performance', 'A11y', 'Design Systems', 'Motion', 'DX'].map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">{t}</span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.06),transparent_60%)] p-6"
          >
            <div className="flex items-center gap-3">
              <Sparkles className="h-5 w-5 text-amber-300" />
              <span className="text-sm uppercase tracking-wider text-white/60">Highlights</span>
            </div>
            <ul className="mt-4 space-y-3 text-white/80">
              <li className="flex items-start gap-3"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-rose-400" /> Shipped animations that improved engagement by 23%.</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" /> Led UI system refactor across 40+ components.</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-300" /> Optimized Core Web Vitals to green across pages.</li>
            </ul>
            <div className="mt-6 flex items-center gap-2 text-sm text-white/60">
              <MapPin className="h-4 w-4" /> Remote • Open to opportunities
            </div>
          </motion.div>
        </div>
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:12px_12px]" />
    </section>
  );
}
