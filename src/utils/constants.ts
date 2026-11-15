export const SECTION_IDS = {
  HOME: 'home',
  WORK: 'work',
  SERVICES: 'services',
  ABOUT: 'about',
  CONTACT: 'contact',
} as const;

export const NAV_LINKS = [
  { id: SECTION_IDS.WORK, label: 'Work' },
  { id: SECTION_IDS.SERVICES, label: 'Services' },
  { id: SECTION_IDS.ABOUT, label: 'About' },
];

export const SERVICE_OPTIONS = [
  'A website or online store',
  'A website I can update myself',
  'A business system',
  'Fixing or improving what I have',
  'Hosting and support',
  'Not sure yet',
] as const;

export type ServiceOption = (typeof SERVICE_OPTIONS)[number];

export const PREFILL_EVENT = 'rws:prefill';

export interface PrefillDetail {
  service: ServiceOption;
  starter: string;
}
