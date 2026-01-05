import { ChevronDown } from 'lucide-react';
import Button from '../ui/Button';
import { contactInfo } from '../../data/contactInfo';
import { SECTION_IDS } from '../../utils/constants';

export default function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById(SECTION_IDS.CONTACT);
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id={SECTION_IDS.HOME}
      className="relative min-h-screen flex items-center justify-center circuit-pattern"
    >
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        {/* Logo */}
        <div className="mb-8 animate-float">
          <img
            src="/RWS Logo.png"
            alt="Reuel's Web Services Logo"
            className="w-64 md:w-80 lg:w-96 mx-auto drop-shadow-2xl"
          />
        </div>

        {/* Company Name */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text">
          {contactInfo.companyName}
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-3xl lg:text-4xl text-gray-300 mb-4 font-light">
          {contactInfo.tagline}
        </p>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
          Transforming your business ideas into powerful digital solutions.
          From e-commerce platforms to custom management systems, we bring your vision to life with cutting-edge technology.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={scrollToContact}
            className="w-full sm:w-auto"
          >
            Get Started
          </Button>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => {
              const servicesSection = document.getElementById(SECTION_IDS.SERVICES);
              servicesSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto"
          >
            View Services
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-purple-500" />
        </div>
      </div>
    </section>
  );
}
