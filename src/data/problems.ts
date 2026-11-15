import type { ServiceOption } from '../utils/constants';

export type Media =
  | { kind: 'image'; src: string; alt: string; phone?: boolean }
  | { kind: 'fragment'; which: 'ifps' | 'contentus' };

export interface Problem {
  id: string;
  /** Small picture of the build that fixed it, for the card. */
  thumb: string;
  label: string;
  /** One line under the label on the card. */
  hint: string;
  client: string;
  /** How it was fixed, in plain words. */
  fix: string;
  status: string;
  media: Media;
  service: ServiceOption;
  starter: string;
}

/**
 * The hero picker. Each problem comes from small-business research or the owner's own
 * content, and shows the real build that fixed one like it.
 */
export const problems: Problem[] = [
  {
    id: 'calls',
    thumb: '/work/pongs-shipping-6.webp',
    label: 'Customers keep calling for updates',
    hint: '"Where is my order?" all day long',
    client: 'Pongs Shipping',
    fix: 'Customers get a tracking page that shows where their package is, through six stages from the US warehouse to pickup. Staff update it once and everyone sees it.',
    status: 'Client system, live',
    media: { kind: 'image', src: '/work/pongs-shipping-6.webp', alt: 'Pongs Shipping tracking page showing a package moving through its stages' },
    service: 'A business system',
    starter: 'Customers keep calling us to ask for updates. ',
  },
  {
    id: 'spreadsheets',
    thumb: '/work/pongs-shipping-8.webp',
    label: 'Spreadsheets nobody trusts',
    hint: 'Three versions, none of them right',
    client: 'Pongs Shipping',
    fix: 'One live dashboard replaced the spreadsheets: revenue, packages, customers and staff for both branches, always current.',
    status: 'Client system, live',
    media: { kind: 'image', src: '/work/pongs-shipping-8.webp', alt: 'Pongs Shipping dashboard with revenue, packages, customers and branch totals' },
    service: 'A business system',
    starter: 'We run on spreadsheets and they keep going wrong. ',
  },
  {
    id: 'stock',
    thumb: '/work/luvchat-lowstock.webp',
    label: "Stock never matches what's on the shelf",
    hint: 'You find out when a customer asks',
    client: 'Luv Chat',
    fix: 'The online store takes its stock from the shops’ own point-of-sale system, and staff get a low-stock list for every store and the warehouse, checked every hour against each product’s alert level.',
    status: 'Client build, in development (staging, sample data)',
    media: { kind: 'image', src: '/work/luvchat-lowstock.webp', alt: 'Luv Chat back office low-stock list showing products, store, units left and alert level' },
    service: 'A business system',
    starter: "Our stock counts never match what's actually on the shelf. ",
  },
  {
    id: 'approvals',
    thumb: '/work/ifps-demo.webp',
    label: 'Approvals stuck on paper or email',
    hint: 'Chasing signatures between departments',
    client: 'IRIE FM',
    fix: 'Staff request what they need from their phone, managers approve it level by level, and every step is tracked from order to delivery with a record nobody can edit.',
    status: 'Internal tool (demo data shown)',
    media: { kind: 'fragment', which: 'ifps' },
    service: 'A business system',
    starter: 'Approvals and purchase requests are stuck on paper and email. ',
  },
  {
    id: 'whatsapp',
    thumb: '/work/luvchat-phone-cart.webp',
    label: 'Orders lost in WhatsApp',
    hint: 'Buried between voice notes and stickers',
    client: 'Luv Chat',
    fix: 'Customers order online and choose delivery or pickup at their nearest store. Every order lands in one back office instead of someone’s phone.',
    status: 'Client build, in development (staging, sample data)',
    media: { kind: 'image', src: '/work/luvchat-phone-cart.webp', alt: 'Luv Chat cart on a phone with an iPhone 16 and matching accessories', phone: true },
    service: 'A website or online store',
    starter: 'Orders come in over WhatsApp and get lost. ',
  },
  {
    id: 'reports',
    thumb: '/work/pongs-shipping-8.webp',
    label: 'Reports take hours every week',
    hint: 'Month-end eats a whole weekend',
    client: 'Pongs Shipping',
    fix: 'Revenue, packages and staff activity are counted as the work happens, so the numbers are ready whenever someone asks.',
    status: 'Client system, live',
    media: { kind: 'image', src: '/work/pongs-shipping-8.webp', alt: 'Pongs Shipping dashboard with live revenue and package figures' },
    service: 'A business system',
    starter: 'Putting our reports together takes hours every week. ',
  },
  {
    id: 'no-site',
    thumb: '/work/rasta-collections-1.webp',
    label: 'No website yet',
    hint: 'People search for you and find nothing',
    client: 'Rasta Collections',
    fix: 'A store of their own, with products, categories and photos the owner manages without help, so customers can find the brand and come back to it.',
    status: 'Client store, live',
    media: { kind: 'image', src: '/work/rasta-collections-1.webp', alt: 'Rasta Collections storefront home page' },
    service: 'A website or online store',
    starter: "We don't have a website yet. ",
  },
  {
    id: 'dated',
    thumb: '/work/mavis-scott-foundation-1.webp',
    label: 'My website looks dated',
    hint: 'It no longer looks like the business',
    client: 'The Mavis Scott Foundation',
    fix: 'A new site that tells the foundation’s story properly, with programs, events, a blog and donations that work on any phone.',
    status: 'Client website, live',
    media: { kind: 'image', src: '/work/mavis-scott-foundation-1.webp', alt: 'The Mavis Scott Foundation home page' },
    service: 'Fixing or improving what I have',
    starter: 'Our website looks dated. ',
  },
  {
    id: 'paper',
    thumb: '/work/pongs-shipping-15.webp',
    label: 'Records still on paper',
    hint: 'Receipt books, log books, sticky notes',
    client: 'Pongs Shipping',
    fix: 'Every package is logged once, with barcode labels and transfer lists, instead of being written in a book at each branch.',
    status: 'Client system, live',
    media: { kind: 'image', src: '/work/pongs-shipping-15.webp', alt: 'Pongs Shipping package list with tracking numbers, weights and status' },
    service: 'A business system',
    starter: 'We still keep our records on paper. ',
  },
  {
    id: 'one-person',
    thumb: '/work/pongs-shipping-15.webp',
    label: 'Only one person knows how it all works',
    hint: 'If they are out, everything stops',
    client: 'Pongs Shipping',
    fix: 'The way the business runs lives in the system: each role sees the steps for its job, and an activity log shows who did what and when.',
    status: 'Client system, live',
    media: { kind: 'image', src: '/work/pongs-shipping-15.webp', alt: 'Pongs Shipping staff view of packages with status for each step' },
    service: 'A business system',
    starter: 'Only one person really knows how everything works. ',
  },
  {
    id: 'copying',
    thumb: '/work/luvchat-admin-products.webp',
    label: 'Copying the same info into three places',
    hint: 'Typed into a book, a sheet and a chat',
    client: 'Luv Chat',
    fix: 'A product, its price with GCT and its stock are entered once and used everywhere: the website, the stores and the invoices.',
    status: 'Client build, in development (staging, sample data)',
    media: { kind: 'image', src: '/work/luvchat-admin-products.webp', alt: 'Luv Chat back office product list with variants and sales channels' },
    service: 'A business system',
    starter: 'We copy the same information into several places. ',
  },
  {
    id: 'leads',
    thumb: '/work/jewels-and-time-16.webp',
    label: "Can't tell which enquiries are serious",
    hint: 'Every message looks the same',
    client: 'Jewels and Time',
    fix: 'Each visitor gets a score from what they look at and save, and the team gets a WhatsApp and email alert when someone is ready to buy.',
    status: 'Client build, in progress',
    media: { kind: 'image', src: '/work/jewels-and-time-16.webp', alt: 'Jewels and Time lead board with enquiries sorted by stage' },
    service: 'A business system',
    starter: "We can't tell which enquiries are serious. ",
  },
  {
    id: 'marketplace',
    thumb: '/work/rasta-collections-3.webp',
    label: 'Only selling on social media or a marketplace',
    hint: 'Your customers belong to the platform',
    client: 'Rasta Collections',
    fix: 'Their own branded store sits beside their eBay listings. Purchases still go through eBay, but people now find and remember the brand.',
    status: 'Client store, live',
    media: { kind: 'image', src: '/work/rasta-collections-3.webp', alt: 'Rasta Collections product page with price and buy on eBay button' },
    service: 'A website or online store',
    starter: 'We only sell through social media or a marketplace. ',
  },
  {
    id: 'cant-update',
    thumb: '/work/mavis-scott-foundation-2.webp',
    label: "A website I can't update myself",
    hint: 'Every small change needs a developer',
    client: 'The Mavis Scott Foundation',
    fix: 'An admin area where the team adds events, writes posts and updates donation details themselves, with no technical help.',
    status: 'Client website, live',
    media: { kind: 'image', src: '/work/mavis-scott-foundation-2.webp', alt: 'The Mavis Scott Foundation page with impact figures the team updates' },
    service: 'A website I can update myself',
    starter: "We have a website but we can't update it ourselves. ",
  },
];

/** How many problem cards show before "Show more". */
export const FIRST_PROBLEMS = 8;
