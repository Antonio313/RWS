import type { ReactNode } from 'react';

interface SocialIconProps {
  href: string;
  icon: ReactNode;
  label: string;
}

export default function SocialIcon({ href, icon, label }: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-12 h-12 rounded-full bg-gray-900 border border-purple-500/30 flex items-center justify-center text-purple-500 hover:bg-purple-500 hover:text-white hover:border-purple-500 hover:rotate-360 hover:scale-110 transition-all duration-300 group"
    >
      {icon}
    </a>
  );
}
