export const SECTION_IDS = {
  HOME: 'home',
  SERVICES: 'services',
  PORTFOLIO: 'portfolio',
  CONTACT: 'contact',
} as const;

export const NAV_LINKS = [
  { id: SECTION_IDS.HOME, label: 'Home' },
  { id: SECTION_IDS.SERVICES, label: 'Services' },
  { id: SECTION_IDS.PORTFOLIO, label: 'Portfolio' },
  { id: SECTION_IDS.CONTACT, label: 'Contact' },
];

export const SERVICE_OPTIONS = [
  'E-Commerce Website',
  'Inventory Management System',
  'Appointment System',
  'Static Website',
  'Content Management System (CMS)',
  'Database Management System',
  'Website Maintenance',
  'System Optimization',
  'Other/Multiple Services'
];

export const BUDGET_OPTIONS = [
  'Less than $500',
  '$500 - $1,000',
  '$1,000 - $2,500',
  '$2,500+',
  'Not sure yet'
];
