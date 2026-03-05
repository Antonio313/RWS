import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Pongs Shipping Company",
    description: "A two-sided freight forwarding platform built to replace paper and phone calls. Customers get dedicated Florida shipping addresses, package pre-alerts with receipt uploads, and live tracking across six status stages. Staff get a full operations dashboard with transfer list generation, JMD revenue tracking, and six-tier role-based access control.",
    image: "/projects/pongs-shipping.png",
    techStack: ["React 19", "Node.js", "Express", "PostgreSQL", "Railway", "AWS S3", "SendGrid", "Docker"],
    liveUrl: "https://pongsshipping.com",
    category: "Freight Forwarding",
    featured: true
  },
  {
    id: 2,
    title: "Jewels and Time",
    description: "A three-tier luxury e-commerce system: a headless CMS for content management, a polished customer storefront with accounts and shareable wishlists, and a TypeScript backend with a custom lead-scoring engine that grades visitors on 9 behavioral signals. High-intent leads trigger instant WhatsApp and email alerts to the team — no tool-switching required.",
    image: "/projects/jewels-and-time.png",
    techStack: ["React 19", "TypeScript", "Tailwind CSS", "Node.js", "Express", "Twilio", "Nodemailer", "Railway"],
    liveUrl: "https://jewelsandtime-production.up.railway.app/",
    category: "E-commerce",
    featured: true
  },
  {
    id: 3,
    title: "Dutchie",
    description: "A community-driven Caribbean recipe platform — a love letter to the cuisine. Named after the iconic Dutch pot, it features contributor tiers, recipe verification, full-text search with PostgreSQL tsvector, real-time chat via Socket.IO, and a moderation dashboard. Installable as a PWA with offline support and Web Push notifications.",
    image: "/projects/dutchie.png",
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "PostgreSQL", "Redis", "Socket.IO", "AWS S3", "Docker", "Turborepo"],
    liveUrl: "https://dutchpot.online",
    category: "Community Platform",
    featured: true
  },
  {
    id: 4,
    title: "Rasta Collections",
    description: "A full-stack e-commerce storefront rooted in Rastafarian culture and Jamaican identity. Features a public product catalogue with category filtering, search, and pagination, plus a password-protected admin CMS so the owner manages all inventory without touching code. Images are compressed to WebP and served from AWS S3. Ships as a single Docker container on Railway.",
    image: "/projects/rastacollections.png",
    techStack: ["React 19", "TypeScript", "Tailwind CSS v4", "Node.js", "Express", "Prisma", "PostgreSQL", "AWS S3", "Docker", "Railway"],
    liveUrl: "https://rastacollections.store",
    category: "E-commerce",
    featured: true
  },
  {
    id: 5,
    title: "Reufolio",
    description: "A handcrafted developer portfolio built to stand apart from templated alternatives. Features session-gated intro video, spring-physics scroll progress bar, per-project case study pages with a lightbox gallery, and a serverless EmailJS contact form. Every animation — from GPU-accelerated Framer Motion transitions to prefers-reduced-motion support — was a deliberate engineering decision.",
    image: "/projects/reufolio.png",
    techStack: ["React 19", "Tailwind CSS", "Framer Motion", "React Router DOM", "EmailJS", "Vite"],
    liveUrl: "https://reufolio.online",
    githubUrl: "https://github.com/Antonio313",
    category: "Portfolio",
    featured: true
  }
];
