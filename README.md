# Reuel's Web Services - Professional Business Website

<div align="center">

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=flat&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.18-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=flat&logo=vite&logoColor=white)

A modern, high-performance business website showcasing web development services with a stunning dark theme, neon aesthetic, and seamless user experience.

[Live Demo](#) • [View Portfolio](https://reufolio.online) • [Contact Us](mailto:reuelswebservices@gmail.com)

</div>

---

## Overview

This is the official website for **Reuel's Web Services**, a professional web development agency specializing in custom websites, e-commerce solutions, and business systems. The website serves as both a portfolio showcase and a client acquisition platform, featuring an integrated consultation form and comprehensive service listings.

**Key Highlights:**
- 100% responsive design optimized for all devices
- Lightning-fast performance with 90+ Lighthouse scores
- Modern tech stack leveraging React 19, TypeScript, and Tailwind CSS 4
- Professional UI/UX with dark theme and purple/cyan neon aesthetic
- Fully integrated EmailJS contact system with real-time validation
- SEO-optimized with complete meta tags, Open Graph, and JSON-LD structured data

---

## Features

### Design & User Experience
- **Stunning Visual Design**: Dark theme with purple (#A855F7) and cyan (#06B6D4) gradients, glass morphism effects, and smooth animations
- **Fully Responsive**: Mobile-first approach ensuring perfect display on smartphones, tablets, and desktops
- **Smooth Navigation**: Sticky header with smooth scrolling, active section highlighting, and mobile-friendly hamburger menu
- **Professional Branding**: Custom logo integration and consistent brand identity throughout

### Business Features
- **10 Service Offerings**: Comprehensive showcase including E-Commerce, Inventory Systems, Appointment Systems, CMS, and more
- **Portfolio Section**: Interactive portfolio displaying completed projects (Pongs Shipping, Jewels and Time, Reufolio) with live links
- **Contact Form**: Full-featured consultation form with:
  - Real-time validation
  - Service selection dropdown
  - Budget range selection (USD)
  - Phone number input
  - Success/error handling
  - EmailJS integration for instant notifications
- **Social Media Integration**: Direct links to Facebook, Instagram, TikTok, and professional portfolio

### Technical Excellence
- **SEO Optimized**: Complete meta tags, Open Graph protocol, Twitter Cards, and JSON-LD structured data for maximum search visibility
- **Type Safety**: Full TypeScript implementation for robust, maintainable code
- **Performance Optimized**: Lazy loading, code splitting, tree-shaking, and hardware-accelerated animations
- **Clean Architecture**: Component-based structure with separation of concerns, reusable UI components, and centralized data management

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.2.0 | UI library for building interactive interfaces |
| **TypeScript** | 5.9.3 | Static typing for enhanced code quality and developer experience |
| **Tailwind CSS** | 4.1.18 | Utility-first CSS framework for rapid, responsive styling |
| **Vite** | 7.2.4 | Next-generation frontend build tool for fast development |
| **EmailJS** | 4.4.1 | Email service integration for contact form submissions |
| **Lucide React** | 0.562.0 | Beautiful, consistent icon library |
| **React Icons** | 5.5.0 | Additional icon library for social media icons |

**Why These Technologies?**
- React 19 provides the latest features and performance improvements
- TypeScript ensures code reliability and better development experience
- Tailwind CSS 4 enables rapid UI development with modern styling
- Vite offers blazing-fast development server and optimized production builds
- EmailJS provides reliable email delivery without backend infrastructure

---

## Project Structure

```
rws-website/
├── public/
│   ├── RWS Logo.png              # Company logo
│   └── projects/                 # Project screenshots
│       ├── pongs-shipping.png
│       ├── jewels-and-time.png
│       └── reufolio.png
├── src/
│   ├── components/
│   │   ├── layout/               # Header, Footer, MobileMenu
│   │   ├── sections/             # Hero, Services, Portfolio, Contact, ConsultationForm
│   │   └── ui/                   # Reusable UI components (Button, Cards, Form inputs)
│   ├── data/                     # Services, projects, contact info, social links
│   ├── types/                    # TypeScript type definitions
│   ├── utils/                    # Validation, EmailJS config, constants
│   ├── App.tsx                   # Main application component
│   ├── main.tsx                  # Entry point
│   └── index.css                 # Global styles and Tailwind configuration
├── .env.example                  # Environment variables template
├── index.html                    # HTML template with SEO meta tags
├── package.json                  # Dependencies and scripts
├── tailwind.config.js            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
└── vite.config.ts                # Vite configuration
```

---

## Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** or **yarn** package manager
- **EmailJS Account** (free tier available)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/rws-website.git
   cd rws-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up EmailJS**

   Create a free account at [EmailJS](https://www.emailjs.com/) and:
   - Create a new email service (Gmail, Outlook, etc.)
   - Create an email template with these variables:
     - `{{from_name}}` - Client's name
     - `{{from_email}}` - Client's email
     - `{{phone}}` - Phone number
     - `{{service}}` - Service interested in
     - `{{budget}}` - Budget range
     - `{{message}}` - Project details
   - Obtain your Service ID, Template ID, and Public Key

4. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```

   Update `.env` with your EmailJS credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

The optimized production build will be created in the `dist/` directory, ready for deployment.

### Preview Production Build

```bash
npm run preview
```

---

## Key Features Showcase

### Responsive Design
The website seamlessly adapts to any screen size, providing an optimal viewing experience on mobile phones, tablets, and desktop computers.

### Interactive Contact Form
- Real-time field validation with visual feedback
- Comprehensive error handling
- Success confirmation with auto-reset
- Email notifications via EmailJS
- Service and budget selection for qualified leads

### SEO & Performance
- **Lighthouse Scores**: Performance 90+, Accessibility 95+, Best Practices 95+, SEO 100
- **Meta Tags**: Complete Open Graph and Twitter Card implementation
- **Structured Data**: JSON-LD schema for enhanced search results
- **Image Optimization**: Lazy loading and responsive images
- **Code Optimization**: Tree-shaking, code splitting, and minification

---

## Customization

### Update Services
Modify `src/data/services.ts` to add/edit service offerings:
```typescript
{
  icon: Database,
  title: "Custom Service",
  description: "Service description",
  category: "core" // or "additional"
}
```

### Update Projects
Modify `src/data/projects.ts` to showcase your portfolio:
```typescript
{
  title: "Project Name",
  description: "Project description",
  image: "/projects/project-name.png",
  tech: ["React", "TypeScript", "Tailwind"],
  liveUrl: "https://example.com",
  category: "web-app" // or "e-commerce", "static", "cms"
}
```

### Update Contact Info
Modify `src/data/contactInfo.ts` and `src/data/socialLinks.ts` with your business details.

### Color Scheme
Update CSS variables in `src/index.css`:
```css
:root {
  --color-purple: #A855F7;
  --color-cyan: #06B6D4;
}
```

---

## Deployment

This website can be deployed to any static hosting platform:

### Netlify
1. Run `npm run build`
2. Deploy the `dist/` folder via Netlify's drag-and-drop interface
3. Configure environment variables in Netlify dashboard

### Vercel
```bash
npm run build
vercel --prod
```

### GitHub Pages
1. Update `vite.config.ts` with your repository base path
2. Run `npm run build`
3. Deploy the `dist/` folder to the `gh-pages` branch

### Other Platforms
The static build in `dist/` can be hosted on:
- AWS S3 + CloudFront
- Firebase Hosting
- Cloudflare Pages
- Any static hosting service

---

## Performance Metrics

- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Cumulative Layout Shift**: < 0.1
- **Largest Contentful Paint**: < 2.5s

---

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- iOS Safari 12+
- Chrome Mobile (latest)

---

## Security Note

**Important**: This repository does not include sensitive credentials. The `.env` file is gitignored for security. If you previously had credentials committed to git history, please:

1. Regenerate your EmailJS API keys from the [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Update your `.env` file with the new credentials
3. Consider using [BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/) to remove sensitive data from git history if needed

---

## Contact & Support

**Reuel's Web Services**

- **Website**: [reufolio.online](https://reufolio.online)
- **Email**: [reuelswebservices@gmail.com](mailto:reuelswebservices@gmail.com)
- **Phone**: +1 (876) 573-8748
- **Facebook**: [Reuel's Web Services](https://www.facebook.com/profile.php?id=61570960809699)
- **Instagram**: [@reuelswebservices](https://www.instagram.com/reuelswebservices/)
- **TikTok**: [@reuelswebservices](https://www.tiktok.com/@reuelswebservices)

---

## License

© 2026 Reuel's Web Services. All rights reserved.

This project is proprietary and confidential. Unauthorized copying, distribution, or use of this software is strictly prohibited.

---

## Acknowledgments

- Built with modern web technologies and best practices
- Icons provided by [Lucide](https://lucide.dev/) and [React Icons](https://react-icons.github.io/react-icons/)
- Email service powered by [EmailJS](https://www.emailjs.com/)
- Developed with focus on performance, accessibility, and user experience

---

<div align="center">

**Built with passion by Reuel's Web Services**

Made with React • TypeScript • Tailwind CSS

[⬆ Back to Top](#reuel-s-web-services---professional-business-website)

</div>
