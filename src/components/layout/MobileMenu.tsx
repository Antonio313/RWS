import { useEffect } from 'react';
import { NAV_LINKS } from '../../utils/constants';

interface MobileMenuProps {
  isOpen: boolean;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, activeSection, onNavigate, onClose }: MobileMenuProps) {
  useEffect(() => {
    // Prevent body scroll when menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    // Close menu on Escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden animate-fade-in"
        onClick={onClose}
      />

      {/* Menu */}
      <div className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm glass-strong z-50 md:hidden animate-slide-in-right">
        <div className="flex flex-col h-full p-8 pt-24">
          {/* Navigation Links */}
          <nav className="flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`text-left text-2xl font-semibold transition-colors ${
                  activeSection === link.id
                    ? 'text-purple-500'
                    : 'text-gray-300 hover:text-purple-500'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <div className="h-1 w-12 bg-gradient-to-r from-purple-500 to-cyan-500 mt-2"></div>
                )}
              </button>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="mt-auto pt-8 border-t border-purple-500/30">
            <p className="text-sm text-gray-400 mb-2">Ready to start?</p>
            <a
              href="tel:8765738748"
              className="text-lg font-semibold text-purple-500 hover:text-cyan-500 transition-colors"
            >
              (876) 573-8748
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
