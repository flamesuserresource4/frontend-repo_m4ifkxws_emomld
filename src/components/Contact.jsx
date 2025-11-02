import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">Let’s build something beautiful</h2>
          <p className="mx-auto mt-2 max-w-xl text-white/60">
            I’m available for freelance, collaborations, and full‑time roles.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-6">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="grid gap-4 md:grid-cols-2"
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              const subject = encodeURIComponent(`Project inquiry from ${fd.get('name')}`);
              const body = encodeURIComponent(`${fd.get('message')}\n\n— ${fd.get('name')} (${fd.get('email')})`);
              window.location.href = `mailto:your@email.com?subject=${subject}&body=${body}`;
            }}
          >
            <div className="md:col-span-1">
              <label className="text-sm text-white/70">Name</label>
              <input name="name" required className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-rose-500/40" placeholder="Your name" />
            </div>
            <div className="md:col-span-1">
              <label className="text-sm text-white/70">Email</label>
              <input type="email" name="email" required className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-rose-500/40" placeholder="you@example.com" />
            </div>
            <div className="md:col-span-2">
              <label className="text-sm text-white/70">Message</label>
              <textarea name="message" required rows={4} className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-rose-500/40" placeholder="Tell me about your project..." />
            </div>
            <div className="md:col-span-2 flex items-center justify-between gap-4">
              <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-rose-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-rose-500/25 transition hover:brightness-110">
                <Mail className="h-4 w-4" /> Send Message
              </button>

              <div className="flex items-center gap-3 text-white/70">
                <a className="rounded-full border border-white/10 bg-white/5 p-2 transition hover:bg-white/10" href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </a>
                <a className="rounded-full border border-white/10 bg-white/5 p-2 transition hover:bg-white/10" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.form>
        </div>
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:12px_12px]" />
    </section>
  );
}
