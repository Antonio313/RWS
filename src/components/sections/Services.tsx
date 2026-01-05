import SectionHeader from '../ui/SectionHeader';
import ServiceCard from '../ui/ServiceCard';
import Button from '../ui/Button';
import { services } from '../../data/services';
import { SECTION_IDS } from '../../utils/constants';

export default function Services() {
  const scrollToContact = () => {
    const contactSection = document.getElementById(SECTION_IDS.CONTACT);
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id={SECTION_IDS.SERVICES} className="py-20 px-6 bg-black">
      <div className="container mx-auto max-w-7xl">
        <SectionHeader
          title="Our Services"
          subtitle="Comprehensive web development solutions tailored to elevate your business"
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-xl text-gray-400 mb-6">
            Ready to bring your project to life?
          </p>
          <Button size="lg" onClick={scrollToContact}>
            See How We Can Help
          </Button>
        </div>
      </div>
    </section>
  );
}
