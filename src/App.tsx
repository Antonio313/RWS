import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Work from './components/sections/Work';
import Services from './components/sections/Services';
import About from './components/sections/About';
import Budget from './components/sections/Budget';
import Contact from './components/sections/Contact';
import { useMotion } from './hooks/useMotion';

function App() {
  useMotion();

  return (
    <div className="min-h-screen bg-ground text-ink">
      <a
        href="#main"
        className="btn btn-primary fixed left-4 top-4 z-[60] -translate-y-24 focus:translate-y-0"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="overflow-x-clip">
        <Hero />
        <Work />
        <Services />
        <About />
        <Budget />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
