import { motion } from 'framer-motion';
import { Code, Rocket, Cpu, Paintbrush, Workflow } from 'lucide-react';

const skills = [
  { icon: Code, label: 'Frontend Architecture' },
  { icon: Cpu, label: 'Performance & Accessibility' },
  { icon: Rocket, label: 'Animations & Motion' },
  { icon: Paintbrush, label: 'Design Systems' },
];

export default function Skills() {
  return (
    <section id="skills" className="relative bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
          <Workflow className="h-3.5 w-3.5 text-sky-300" />
          What I Do
        </div>
        <h2 className="text-3xl font-semibold md:text-4xl">Capabilities</h2>
        <p className="mt-2 max-w-xl text-white/60">
          Bridging artful aesthetics with engineering discipline to build robust, delightful interfaces.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {skills.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-rose-400/20 to-sky-400/20 blur-xl" />
              <Icon className="relative mb-3 h-6 w-6 text-white/80" />
              <div className="relative text-sm text-white/85">{label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:12px_12px]" />
    </section>
  );
}
