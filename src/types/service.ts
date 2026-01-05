import type { LucideIcon } from 'lucide-react';

export interface Service {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  category: 'core' | 'additional';
}
