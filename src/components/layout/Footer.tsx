import Wordmark from '../ui/Wordmark';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import { NAV_LINKS, SECTION_IDS } from '../../utils/constants';
import { socialLinks } from '../../data/socialLinks';
import { contactInfo } from '../../data/contactInfo';

const socials = [
  { href: socialLinks.facebook, label: 'Facebook', Icon: FaFacebook },
  { href: socialLinks.instagram, label: 'Instagram', Icon: FaInstagram },
  { href: socialLinks.tiktok, label: 'TikTok', Icon: FaTiktok },
];

export default function Footer() {
  return (
    <footer className="section pb-10">
      <div className="frame">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-3">
            <Wordmark full={false} />
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3 md:col-span-5">
            {[...NAV_LINKS, { id: SECTION_IDS.CONTACT, label: 'Contact' }].map((l) => (
              <a key={l.id} href={`#${l.id}`} className="text-link text-[16px] no-underline">
                {l.label}
              </a>
            ))}
          </nav>
          <ul className="flex gap-3 md:col-span-4 md:justify-end">
            {socials.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label} (opens in a new tab)`}
                  className="btn btn-quiet !min-h-[48px] !w-[48px] !p-0"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p
          className="mt-16 text-[clamp(2.5rem,7vw,6rem)] font-bold leading-[0.9] tracking-[-0.04em]"
          aria-hidden="true"
        >
          Reuel's Web Services
        </p>

        <div className="mt-8 flex flex-wrap justify-between gap-4 text-[16px] text-ink-2">
          <p>Working with clients worldwide.</p>
          <p>
            © {new Date().getFullYear()} {contactInfo.companyName}
          </p>
        </div>
      </div>
    </footer>
  );
}
