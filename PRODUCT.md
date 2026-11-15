# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- Owners and managers of small and growing businesses, local and overseas, whose operations have outgrown paper, spreadsheets or a long WhatsApp chat: shops, couriers, retailers, charities, schools, creators. Often their first proper website or system. They want to know whether it fixes their problem, whether they can run it themselves, and who to call when it breaks.
- The site addresses them as one audience, worldwide. It does not single out countries.
- Their job on this site: decide whether Reu can build what they need, see proof he has done it before, get a sense of price, and start a conversation (consultation form, WhatsApp, email).

## Product Purpose

Reuel's Web Services (RWS) is Reuel "Reu" Richards' web development business, founded 2023, working with clients worldwide. It builds custom websites, online stores and business systems. The site exists to turn visitors into consultation requests. Success is a qualified enquiry: a business that needs a site or system, knows roughly what it costs, and has seen work like theirs.

## Positioning

- **Built from scratch, no templates.** Every site and system is custom code, not Wix or WordPress themes.
- **Systems, not just websites.** Package tracking, procurement approvals, inventory, owner-run CMSs. "A website tells people about your business. A system runs your business."
- **Stays after launch.** Maintains what it ships; one point of contact.
- **Support you can trust.** One point of contact: the person who built it reproduces and fixes it. Reu's background: broadcast engineer at IRIE FM (systems that can't go down) and support work in Zendesk queues before production code.

## Location (decided 2026-11-15)

- No "built in Jamaica", no country list, no patriotic framing anywhere: it can signal the wrong thing to overseas clients, and some local clients dislike it. Say "worldwide" where scope matters.
- Practical contact facts stay: phone/WhatsApp number and a time-zone note (Eastern Time) in the contact section only.

## Operating Context

- Enquiries arrive through the site's consultation form (EmailJS to reuelswebservices@gmail.com), phone/WhatsApp (876) 573-8748, and social media (Facebook, Instagram, TikTok @reuelswebservices, LinkedIn).
- Social media runs a content calendar in Notion (pillars: case studies, build in public, teach business owners, behind RWS). The site and the posts should tell the same story.
- Clients have agreed to their builds being shown. Public material uses demo data only, never real customer information.

## Capabilities and Constraints

- Single-page React 19 + TypeScript + Tailwind CSS 4 (Vite plugin) + Vite, hosted on Railway. No backend; EmailJS handles the form.
- **Pricing (decided 2026-11-15):** no prices on the site for now, until Reu has more information. Later goal: detect the visitor's country and show local (JMD) or international (USD) prices accordingly. Reu wants to fit projects to each client's budget without undervaluing his work; the site may say that budgets are discussed openly, but must not publish figures, discounts or "cheap" positioning.

## Brand Commitments

- Name: Reuel's Web Services (RWS). Tagline "Your Vision, Our Code" is current; logo, colours and tagline are all open to change in the 2026-11 redesign.
- Voice: first person ("I build..."), plain, specific, no jargon, no em dashes. Honest even when the answer is "you don't need me yet".

## Evidence on Hand

- **Client work, OK to name and link:** Pongs Shipping (pongsshipping.com: customer portal and staff dashboard, six-stage package tracking, six-tier roles, two branches; about 80% more efficient operations), Rasta Collections (rastacollections.store: catalogue storefront with owner-run CMS, purchases via eBay), The Mavis Scott Foundation (themavisscottlegacyfoundation.org: site with admin for events, blog, donations, volunteers), IRIE FM procurement app IFPS (phone-first PWA: requests, approvals, delivery tracking, offline drafts; internal, no public link), Jewels and Time (luxury jewelry storefront with lead scoring; in progress).
- **Own products:** Dutchie (dutchpot.online), ReuGym (reugym.online), Reufolio (reufolio.online).
- **Screenshots:** Reufolio repo `public/projects/<slug>/screenshot-N.png` for Pongs, Jewels and Time, Dutchie, Mavis Scott, Rasta Collections, ReuGym, Reufolio. Current RWS `public/projects/*.png`.
- **None yet:** client testimonials or quotes, press, client logos, business statistics beyond the Pongs figure. Do not fabricate any of these.

## Problems the site speaks to (decided 2026-11-15)

The hero is an interactive problem picker ("What's slowing your business down?"): each problem shows the real build that fixed one like it and pre-fills the enquiry. Problems, with the build that answers each:
- Customers keep calling for updates: Pongs customer tracking.
- Records still on paper or receipt books: Pongs (also Lectio Prima replaces paper lesson plans).
- Spreadsheets nobody trusts: Pongs dashboard.
- Only one person knows how things work: Pongs roles and audit log.
- Copying the same information into three places: Luv Chat back office with POS sync.
- Stock runs out before anyone notices / never matches the shelf: Luv Chat stock sync and low-stock alerts.
- Reports take hours every week / month-end takes a weekend: Pongs live dashboard.
- Approvals stuck on paper or email: IRIE FM procurement (IFPS).
- Orders and enquiries lost in WhatsApp: Luv Chat online ordering and pickup; Jewels and Time enquiries.
- Can't tell which leads are serious: Jewels and Time lead scoring.
- No website yet: Rasta Collections.
- Only selling on social media or a marketplace: Rasta Collections own store beside eBay.
- A site I can't update myself: The Mavis Scott Foundation admin.
- My site looks dated: The Mavis Scott Foundation rebuild.
Evidence behind the list: small-business surveys rank manual processes, spreadsheet errors, inventory time and admin hours (roughly 11 to 16 hours a week) among the top operational problems; about a third of Jamaican MSMEs actively use digital tools, mostly social media. Reu's own content lists the five spreadsheet signs above.

## Product Principles

1. Start from the visitor's problem, then show the real build that fixed it.
2. Show the work. Real screens of real client builds beat any claim.
3. Speak to the business problem (paper, spreadsheets, WhatsApp chaos), not the tech stack.
4. Professional and plain: outcome-focused headlines, never techy or developer-ish, never cheap or template-like.
5. Make starting a conversation easy from anywhere on the page.
6. Every claim is true and checkable.
