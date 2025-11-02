import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { Github, Mail } from 'lucide-react';

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-white backdrop-blur">
          <a href="#" className="font-semibold tracking-tight">dev.nippon</a>
          <nav className="hidden gap-6 text-sm text-white/80 md:flex">
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="mailto:hello@example.com" className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 hover:text-white">
              <Mail className="h-4 w-4" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 hover:text-white">
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Nav />
      <main>
        <Hero />
        <section id="skills">
          <Skills />
        </section>
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-slate-950 py-10 text-center text-sm text-white/60">
        <div className="mx-auto max-w-6xl px-6">© {new Date().getFullYear()} Built with care and a wave of inspiration.</div>
      </footer>
    </div>
  );
}
