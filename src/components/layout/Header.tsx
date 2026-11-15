import Wordmark from '../ui/Wordmark';
import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import { NAV_LINKS, SECTION_IDS } from '../../utils/constants';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string>('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const ids = [...NAV_LINKS.map((l) => l.id), SECTION_IDS.CONTACT];
    const spy = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) spy.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      spy.disconnect();
    };
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
          scrolled ? 'bg-ground' : 'bg-transparent'
        }`}
      >
        <nav className="frame flex h-[72px] items-center justify-between" aria-label="Main">
          <a href={`#${SECTION_IDS.HOME}`} className="shrink-0" aria-label="Reuel's Web Services, back to top">
            <Wordmark />
          </a>

          <div className="hidden items-center gap-9 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                aria-current={active === link.id ? 'true' : undefined}
                className={`text-[16px] font-medium transition-colors duration-200 hover:text-ink ${
                  active === link.id ? 'text-ink' : 'text-ink-2'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a href={`#${SECTION_IDS.CONTACT}`} className="btn btn-primary !min-h-[44px] !px-5 !text-[16px]">
              Start a project
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="btn btn-quiet !min-h-[44px] !px-4 md:hidden"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
            <span className="text-[16px]">Menu</span>
          </button>
        </nav>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
