import {
  ShoppingCart,
  Database,
  Calendar,
  Globe,
  Search,
  Cloud,
  Server,
  TrendingUp,
  Wrench,
  Gauge
} from 'lucide-react';
import type { Service } from '../types';

export const services: Service[] = [
  {
    id: 1,
    icon: ShoppingCart,
    title: "E-Commerce Websites",
    description: "Build powerful online stores with secure payment processing, inventory management, and seamless checkout experiences that convert visitors into customers.",
    features: ["Payment Gateway Integration", "Product Management", "Order Tracking"],
    category: 'core'
  },
  {
    id: 2,
    icon: Database,
    title: "Inventory Management Systems",
    description: "Streamline your business operations with custom inventory tracking, automated restocking alerts, and real-time stock monitoring across multiple locations.",
    features: ["Real-time Tracking", "Automated Alerts", "Multi-location Support"],
    category: 'core'
  },
  {
    id: 3,
    icon: Calendar,
    title: "Appointment Systems",
    description: "Simplify scheduling with automated booking systems, calendar integration, and SMS/email reminders that keep your clients engaged and your schedule organized.",
    features: ["Online Booking", "Calendar Sync", "Automated Reminders"],
    category: 'core'
  },
  {
    id: 4,
    icon: Globe,
    title: "Static Websites",
    description: "Fast, secure, and cost-effective websites perfect for portfolios, landing pages, and informational sites that load instantly and rank well in search engines.",
    features: ["Lightning Fast", "SEO Optimized", "Fully Responsive"],
    category: 'core'
  },
  {
    id: 5,
    icon: Search,
    title: "SEO Optimization",
    description: "Boost your online visibility with comprehensive SEO strategies, keyword optimization, and technical SEO improvements that drive organic traffic to your site.",
    features: ["Keyword Research", "On-page SEO", "Performance Optimization"],
    category: 'additional'
  },
  {
    id: 6,
    icon: Cloud,
    title: "Cloud Hosting & Storage",
    description: "Reliable, scalable cloud solutions with automated backups, 99.9% uptime guarantee, and enterprise-grade security to keep your data safe and accessible.",
    features: ["Auto Backups", "99.9% Uptime", "Scalable Resources"],
    category: 'additional'
  },
  {
    id: 7,
    icon: Server,
    title: "Database Management Systems",
    description: "Design, implement, and maintain robust database systems that handle your data securely and efficiently, ensuring data integrity and optimal performance.",
    features: ["Database Design", "Optimization", "Security Hardening"],
    category: 'additional'
  },
  {
    id: 8,
    icon: TrendingUp,
    title: "Building Scalable Systems",
    description: "Build applications that grow with your business, handling increased traffic and data without performance loss through modern architecture and best practices.",
    features: ["Auto-scaling", "Load Balancing", "Performance Monitoring"],
    category: 'additional'
  },
  {
    id: 9,
    icon: Wrench,
    title: "Website Maintenance",
    description: "Keep your website running smoothly with regular updates, security patches, bug fixes, and performance monitoring to ensure optimal operation.",
    features: ["Regular Updates", "Security Patches", "Performance Reports"],
    category: 'additional'
  },
  {
    id: 10,
    icon: Gauge,
    title: "System Optimization",
    description: "Improve existing systems with code optimization, database tuning, infrastructure improvements, and caching strategies for maximum performance.",
    features: ["Code Optimization", "Database Tuning", "Caching Strategies"],
    category: 'additional'
  }
];
