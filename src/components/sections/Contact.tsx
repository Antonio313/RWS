import { Phone, Mail, Facebook, Instagram } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';
import SocialIcon from '../ui/SocialIcon';
import { contactInfo } from '../../data/contactInfo';
import { socialLinks } from '../../data/socialLinks';

export default function Contact() {
  return (
    <div className="py-12 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-6 gradient-text">Get In Touch</h3>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Phone</p>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-lg text-white hover:text-purple-500 transition-colors"
                  >
                    {contactInfo.phoneFormatted}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-cyan-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Email</p>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-lg text-white hover:text-cyan-500 transition-colors break-all"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-2xl font-bold mb-6 gradient-text">Follow Us</h3>

            <p className="text-gray-400 mb-6">
              Stay connected and follow our journey on social media for updates, tips, and behind-the-scenes content.
            </p>

            <div className="flex gap-4">
              <SocialIcon
                href={socialLinks.facebook}
                icon={<Facebook className="w-6 h-6" />}
                label="Facebook"
              />
              <SocialIcon
                href={socialLinks.instagram}
                icon={<Instagram className="w-6 h-6" />}
                label="Instagram"
              />
              <SocialIcon
                href={socialLinks.tiktok}
                icon={<FaTiktok className="w-6 h-6" />}
                label="TikTok"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
