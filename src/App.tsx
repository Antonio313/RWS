import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Portfolio from './components/sections/Portfolio';
import ConsultationForm from './components/sections/ConsultationForm';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main>
        <Hero />
        <Services />
        <Portfolio />
        <ConsultationForm />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
