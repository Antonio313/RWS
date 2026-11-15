import Wordmark from '../ui/Wordmark';
import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { NAV_LINKS, SECTION_IDS } from '../../utils/constants';
import { contactInfo } from '../../data/contactInfo';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      hidden={!open}
      className="fixed inset-0 z-50 flex flex-col bg-ground md:hidden"
    >
      <div className="frame flex h-[72px] items-center justify-between">
        <Wordmark />
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="btn btn-quiet !min-h-[44px] !px-4"
          aria-label="Close menu"
        >
          <X className="h-5 w-5" aria-hidden="true" />
          <span className="text-[16px]">Close</span>
        </button>
      </div>

      <nav className="frame flex flex-1 flex-col justify-center gap-2" aria-label="Mobile">
        {[...NAV_LINKS, { id: SECTION_IDS.CONTACT, label: 'Contact' }].map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={onClose}
            className="title py-2 text-ink"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="frame flex flex-col gap-3 pb-10">
        <a href={`#${SECTION_IDS.CONTACT}`} onClick={onClose} className="btn btn-primary w-full">
          Start a project
        </a>
        <a href={`https://wa.me/1${contactInfo.phone}`} className="btn btn-quiet w-full">
          WhatsApp {contactInfo.phoneFormatted}
        </a>
      </div>
    </div>
  );
}
