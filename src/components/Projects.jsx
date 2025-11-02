import { motion } from 'framer-motion';
import { ExternalLink, Globe, Star } from 'lucide-react';

const projects = [
  {
    title: 'Wavescape UI',
    desc: 'A minimal landing page with flowing SVG waves and smooth scroll sections.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
    link: '#',
  },
  {
    title: 'Torii Dashboard',
    desc: 'Admin toolkit themed around torii gates and soft gradients.',
    tech: ['React', 'Zustand', 'Charts'],
    link: '#',
  },
  {
    title: 'Ukiyo Blog',
    desc: 'Typography-first blog with vertical rhythm and light textures.',
    tech: ['Vite', 'MDX', 'SEO'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">Featured Work</h2>
            <p className="mt-2 max-w-xl text-white/60">
              Selected projects that balance craft and performance.
            </p>
          </div>
          <a
            href="#"
            className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur transition hover:bg-white/10 md:inline-flex"
          >
            <Globe className="h-4 w-4" />
            Visit portfolio site
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-5 shadow-lg shadow-black/20"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100" style={{ backgroundImage: 'radial-gradient(circle at 20% 10%, rgba(255, 99, 132, 0.15), transparent 40%), radial-gradient(circle at 80% 80%, rgba(56, 189, 248, 0.15), transparent 40%)' }} />

              <div className="relative flex h-40 items-end justify-between rounded-xl bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.06),transparent_60%)] p-4">
                <div className="absolute -right-10 -top-10 h-40 w-40 rotate-12 rounded-full bg-gradient-to-tr from-rose-400/20 via-amber-300/20 to-sky-400/20 blur-xl" />
                <Star className="relative h-6 w-6 text-rose-300" />
                <ExternalLink className="relative h-4 w-4 text-white/60" />
              </div>

              <div className="relative mt-4">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-white/70">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
