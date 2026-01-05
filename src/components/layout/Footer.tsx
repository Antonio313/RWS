import { Facebook, Instagram, Mail, Phone } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';
import { contactInfo } from '../../data/contactInfo';
import { socialLinks } from '../../data/socialLinks';
import { NAV_LINKS } from '../../utils/constants';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-cyan-500/30">
      <div className="container mx-auto px-6 py-12">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/RWS Logo.png"
                alt="RWS Logo"
                className="h-12 w-auto"
              />
              <h3 className="text-xl font-bold gradient-text">
                {contactInfo.companyName}
              </h3>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              {contactInfo.tagline}
            </p>
            <p className="text-gray-500 text-sm">
              Transforming business ideas into powerful digital solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-purple-500 transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href={socialLinks.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-500 transition-colors text-sm"
                >
                  Portfolio
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Get In Touch</h3>

            {/* Contact Details */}
            <div className="space-y-3 mb-6">
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center gap-3 text-gray-400 hover:text-purple-500 transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                {contactInfo.phoneFormatted}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 text-gray-400 hover:text-cyan-500 transition-colors text-sm break-all"
              >
                <Mail className="w-4 h-4" />
                {contactInfo.email}
              </a>
            </div>

            {/* Social Media */}
            <div>
              <p className="text-sm text-gray-400 mb-3">Follow Us</p>
              <div className="flex gap-3">
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-900 border border-purple-500/30 flex items-center justify-center text-purple-500 hover:bg-purple-500 hover:text-white hover:border-purple-500 transition-all"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-900 border border-purple-500/30 flex items-center justify-center text-purple-500 hover:bg-purple-500 hover:text-white hover:border-purple-500 transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href={socialLinks.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-900 border border-purple-500/30 flex items-center justify-center text-purple-500 hover:bg-purple-500 hover:text-white hover:border-purple-500 transition-all"
                  aria-label="TikTok"
                >
                  <FaTiktok className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} {contactInfo.companyName}. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
