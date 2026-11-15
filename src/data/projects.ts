import type { Chapter, OwnProduct } from '../types';

/** The product shelf: each chapter takes over the page in its own colours. */
export const chapters: Chapter[] = [
  {
    id: 'luvchat',
    name: 'Luv Chat',
    kind: 'Online store with in-store pickup',
    headline: 'A phone store with five branches and one stock count.',
    problem:
      'A phone and accessories retailer with five stores needed to sell online without the website and the shops disagreeing about what is in stock.',
    built:
      'An online store with delivery or pickup at any of five stores, stock that syncs with their point-of-sale system, serial numbers and warranty for every phone, prices with GCT worked out properly, and a back office for staff.',
    result: 'In development, running on a staging server with sample products.',
    madeWith: 'Next.js, Medusa, PostgreSQL, Redis, Meilisearch',
    status: 'Client build, in development',
    theme: { bg: '#0d3b1e', ink: '#f2fbe6', muted: '#b9d9a8' },
    layout: 'phones',
    shots: [
      { src: '/work/luvchat-cart.webp', alt: 'Luv Chat cart with an iPhone 16, accessories that fit it, and an order summary with GCT shown' },
      { src: '/work/luvchat-phone-product.webp', alt: 'Luv Chat product page on a phone with delivery, pickup at five stores and warranty', phone: true },
    ],
  },
  {
    id: 'selah',
    name: 'Selah',
    kind: 'Private app grounded in research',
    headline: 'A quiet place to work out what you are feeling.',
    problem:
      'Most wellbeing apps give confident advice with nothing behind it. I wanted one that only says what real research supports.',
    built:
      'A private app that walks you through a check-in, then answers only from peer-reviewed studies and Scripture it can quote and cite. A safety check runs before every answer, and real crisis lines are one tap away.',
    result: 'Running in production for a small number of invited users.',
    madeWith: 'React, Express, PostgreSQL with pgvector, Claude',
    status: 'Personal product, private',
    theme: { bg: '#6b5a49', ink: '#fbf6ee', muted: '#eadfcf' },
    layout: 'side',
    shots: [
      { src: '/work/selah-welcome.webp', alt: 'Selah welcome screen: a pause, and a quiet place to work out what you are feeling' },
    ],
  },
  {
    id: 'pongs',
    name: 'Pongs Shipping',
    kind: 'Freight forwarding system',
    headline: 'Every package, from the US warehouse to pickup.',
    problem:
      'A courier with branches in Priory and Ocho Rios was tracking every package with spreadsheets and phone calls.',
    built:
      'A customer portal and a staff dashboard: package tracking through six stages, barcode labels, transfer lists, revenue in local currency, and access set by role so each person sees what their job needs.',
    result: 'Their operations got about 80% more efficient, and staff actually like using it.',
    madeWith: 'React, Express, PostgreSQL, AWS, SendGrid',
    status: 'Client system, live',
    url: 'https://pongsshipping.com',
    theme: { bg: '#2f5a2c', ink: '#ffffff', muted: '#cfe3cb' },
    layout: 'stack',
    shots: [
      { src: '/work/pongs-shipping-8.webp', alt: 'Pongs Shipping admin dashboard showing revenue, packages, customers and package status by branch' },
      { src: '/work/pongs-shipping-15.webp', alt: 'Pongs Shipping package list with tracking numbers, weights, costs in JMD and delivery status' },
    ],
  },
  {
    id: 'contentus',
    name: 'Contentus',
    kind: 'Editing coach for video creators',
    headline: 'An editing coach that never uploads your footage.',
    problem:
      'Creators want help cutting better videos, but sending hours of raw footage to a server is slow and private.',
    built:
      'An app that studies footage on your own computer (speech, faces, pacing), then gives step-by-step edits written for the editor you use: CapCut, Premiere, After Effects or DaVinci.',
    result: 'The coach and on-device analysis are working; the publishing side is next.',
    madeWith: 'React, Node, Python, PostgreSQL, Whisper and MediaPipe in the browser',
    status: 'Client product, in development',
    theme: { bg: '#1534d6', ink: '#ffffff', muted: '#c9d2ff' },
    layout: 'side',
    fragment: 'contentus',
    shots: [],
  },
  {
    id: 'ifps',
    name: 'IFPS',
    kind: 'IRIE FM Procurement System',
    headline: 'Purchase requests that follow engineers to the hilltop.',
    problem: 'Buying a transmitter part meant paper forms and chasing signatures between departments.',
    built:
      'A phone-first app: engineers request what they need, managers approve it level by level, and every step is tracked from order to delivery, with vendors, budgets and an audit log nobody can edit. Drafts save offline, because transmitter sites do not always have signal.',
    result: 'Requests and approvals now live in one place instead of on paper.',
    madeWith: 'Next.js, Fastify, PostgreSQL, Redis, Google sign-in',
    status: 'Internal tool',
    theme: { bg: '#f2c230', ink: '#141414', muted: '#4a3f12' },
    layout: 'stack',
    fragment: 'ifps',
    shots: [],
  },
  {
    id: 'mavis',
    name: 'The Mavis Scott Foundation',
    kind: 'Charity website with its own admin',
    headline: 'A charity site the team runs without me.',
    problem: 'A foundation with a real legacy needed a site its administrator could update without a developer.',
    built:
      'A public site for programs, events, the blog, volunteers and donations, with an admin area where the team adds events, writes posts and updates bank details for local and overseas donors.',
    result: 'They post and update everything themselves.',
    madeWith: 'Next.js, PostgreSQL, S3, Resend',
    status: 'Client website, live',
    url: 'https://themavisscottlegacyfoundation.org',
    theme: { bg: '#2a1535', ink: '#f6eef9', muted: '#d2bfdb' },
    layout: 'side',
    shots: [
      { src: '/work/mavis-scott-foundation-1.webp', alt: 'The Mavis Scott Foundation home page, Honouring a Legacy of Service' },
      { src: '/work/mavis-scott-foundation-2.webp', alt: 'Foundation impact figures and photos from community outreach' },
    ],
  },
  {
    id: 'rasta',
    name: 'Rasta Collections',
    kind: 'Online store',
    headline: 'Their own store, without leaving eBay.',
    problem: 'They already sold coins and stones on eBay but had no site of their own for people to find and remember.',
    built:
      'A catalogue storefront where the owner manages products, categories and photos, and every purchase goes through the eBay listings they already had.',
    result: 'Same orders, now with a brand people can find.',
    madeWith: 'React, Express, Prisma, PostgreSQL, S3',
    status: 'Client store, live',
    url: 'https://rastacollections.store',
    theme: { bg: '#8c1d18', ink: '#fff6ec', muted: '#f1c9b8' },
    layout: 'stack',
    shots: [
      { src: '/work/rasta-collections-3.webp', alt: 'Rasta Collections product page for a conch shell with price and buy on eBay button' },
      { src: '/work/rasta-collections-7.webp', alt: 'Rasta Collections admin product list' },
    ],
  },
  {
    id: 'jewels',
    name: 'Jewels and Time',
    kind: 'Luxury store with lead scoring',
    headline: 'Knowing which visitor is ready to buy.',
    problem: 'Luxury buyers browse, compare and come back, and a plain enquiry form treats them all the same.',
    built:
      'A storefront with shareable wishlists, an admin area for products and content, and a lead score from nine signals that alerts the team on WhatsApp and email when a serious buyer shows up.',
    result: 'Core features are built; final tuning is under way before launch.',
    madeWith: 'React, TypeScript, Express, Twilio',
    status: 'Client build, in progress',
    theme: { bg: '#0f1b2d', ink: '#f4f6fa', muted: '#b4bfd1' },
    layout: 'side',
    shots: [
      { src: '/work/jewels-and-time-16.webp', alt: 'Jewels and Time lead board with leads sorted by stage' },
      { src: '/work/jewels-and-time-1.webp', alt: 'Jewels and Time storefront home page' },
    ],
  },
];

export const ownProducts: OwnProduct[] = [
  {
    id: 'dutchie',
    name: 'Dutchie',
    summary: 'A community recipe platform for Caribbean food, with real-time chat and an installable app.',
    url: 'https://dutchpot.online',
    shot: { src: '/work/dutchie-12.webp', alt: 'Dutchie recipe page for Jamaican curried chicken' },
  },
  {
    id: 'reugym',
    name: 'ReuGym',
    summary: 'A workout tracker that works offline and plans a training program with AI.',
    url: 'https://reugym.online',
    shot: { src: '/work/reugym-1.webp', alt: 'ReuGym home screen with push, pull, legs and core workouts' },
  },
  {
    id: 'reufolio',
    name: 'Reufolio',
    summary: 'My personal portfolio, with a case study page for each project.',
    url: 'https://reufolio.online',
    shot: { src: '/work/reufolio-1.webp', alt: 'Reufolio portfolio home page' },
  },
];
