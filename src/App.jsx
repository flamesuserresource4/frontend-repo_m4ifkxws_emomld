import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#" className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-rose-400" />
            <span className="font-semibold tracking-wide">Ukiyo Dev</span>
          </a>
          <nav className="hidden gap-6 md:flex text-sm text-white/70">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <Hero />
      <About />
      <Projects />
      <Contact />

      <footer className="border-t border-white/10 bg-slate-950 py-8 text-center text-white/60">
        <p>© {new Date().getFullYear()} Ukiyo Dev — Crafted with care and motion.</p>
      </footer>
    </main>
  );
}

export default App;
