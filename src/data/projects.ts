import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Pongs Shipping Company",
    description: "Full-stack freight forwarding management system connecting Florida to Jamaica. Features personal shipping addresses, package prealerts, real-time tracking, staff dashboard with comprehensive management, automated transfer lists, and revenue analytics. Built with role-based access controls.",
    image: "/projects/pongs-shipping.png",
    techStack: ["React", "Tailwind", "Node.js", "Express", "PostgreSQL", "Railway", "AWS", "SendGrid"],
    liveUrl: "https://pongsshipping.com",
    category: "Freight Forwarding",
    featured: true
  },
  {
    id: 2,
    title: "Jewels and Time",
    description: "Three-tier luxury jewelry e-commerce system with headless CMS, customer storefront, and TypeScript API. Features custom lead scoring algorithm tracking visitor engagement (hot/cold leads) and integrated multi-channel communications (WhatsApp, phone, email) for seamless admin-customer interactions.",
    image: "/projects/jewels-and-time.png",
    techStack: ["React", "TypeScript", "Tailwind", "Node.js"],
    liveUrl: "https://jewelsandtime-production.up.railway.app/",
    category: "E-commerce",
    featured: true
  },
  {
    id: 3,
    title: "Reufolio",
    description: "Modern portfolio website showcasing software engineering expertise. Built with React 19 and Vite 7 for optimal performance, featuring smooth Framer Motion animations, responsive Tailwind CSS design, and serverless contact form via EmailJS. Demonstrates proficiency in modern frontend development and UI/UX design.",
    image: "/projects/reufolio.png",
    techStack: ["React", "Tailwind", "EmailJS", "Vite", "Framer Motion"],
    liveUrl: "https://reufolio.online",
    category: "Portfolio",
    featured: true
  }
];
