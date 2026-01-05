# Reuel's Web Services Website

A modern, responsive business website built with React, TypeScript, and Tailwind CSS, featuring a dark theme with purple/cyan neon aesthetic.

## Features

- **Responsive Design**: Mobile-first approach with seamless experience across all devices
- **Modern UI/UX**: Dark theme with purple/cyan gradients, glass morphism effects, and smooth animations
- **10 Service Offerings**: Comprehensive showcase of web development services
- **Portfolio Section**: Display of completed projects (Pongs Shipping, Jewels and Time, Reufolio)
- **Contact Form**: EmailJS integration for consultation requests with real-time validation
- **SEO Optimized**: Complete meta tags, Open Graph, Twitter Cards, and JSON-LD structured data
- **Smooth Navigation**: Sticky header with smooth scrolling and active section highlighting
- **Social Media Integration**: Links to Facebook, Instagram, TikTok, and portfolio

## Tech Stack

- **React 19.2.0** - UI library
- **TypeScript 5.9.3** - Type safety
- **Tailwind CSS 4.1.18** - Utility-first styling
- **Vite 7.2.4** - Build tool and dev server
- **EmailJS** - Form submission service
- **Lucide React** - Icon library
- **React Icons** - Additional icons (TikTok)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository (if applicable) or navigate to the project directory:
```bash
cd rws-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up EmailJS credentials:
   - Create an account at [EmailJS](https://www.emailjs.com/)
   - Create a new email service
   - Create an email template with these variables:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{phone}}` - Phone number
     - `{{service}}` - Service interested in
     - `{{budget}}` - Budget range
     - `{{message}}` - Message content
   - Get your Service ID, Template ID, and Public Key

4. Create a `.env.local` file in the root directory:
```bash
cp .env.example .env.local
```

5. Add your EmailJS credentials to `.env.local`:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
rws-website/
├── public/
│   ├── RWS Logo.png         # Company logo
│   ├── RWS Poster.png       # Marketing poster (reference)
│   └── projects/            # Project screenshots (add your images here)
│       ├── pongs-shipping.png
│       ├── jewels-and-time.png
│       └── reufolio.png
├── src/
│   ├── components/
│   │   ├── layout/          # Header, Footer, MobileMenu
│   │   ├── sections/        # Hero, Services, Portfolio, Contact, ConsultationForm
│   │   └── ui/              # Reusable components (Button, Cards, Form inputs)
│   ├── data/                # Services, projects, contact info, social links
│   ├── types/               # TypeScript type definitions
│   ├── utils/               # Validation, EmailJS config, constants
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles and Tailwind
├── .env.example             # Environment variables template
├── .env.local               # Your EmailJS credentials (not in git)
├── index.html               # HTML template with SEO meta tags
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Important Next Steps

### 1. Add Project Screenshots

Add high-quality screenshots for your projects in the `/public/projects/` folder:
- `pongs-shipping.png` - Pongs Shipping Company screenshot
- `jewels-and-time.png` - Jewels and Time screenshot
- `reufolio.png` - Reufolio screenshot

**Recommended dimensions**: 1920x1080px (16:9 aspect ratio)
**Format**: PNG or WebP (compressed)

### 2. Configure EmailJS

Follow the setup instructions above to enable the consultation form. Without EmailJS configuration, the form will show a warning message directing users to email directly.

### 3. Update Domain URLs

When deploying to production, update the domain URLs in:
- `index.html` - Open Graph and Twitter Card URLs
- Any hardcoded URLs if applicable

### 4. Optional: Optimize Images

For better performance, consider:
- Converting images to WebP format
- Creating multiple sizes for responsive loading
- Using image optimization tools like [Squoosh](https://squoosh.app/)

## Customization

### Colors

The color scheme is defined in `src/index.css`. Update CSS variables to change colors:
```css
:root {
  --color-purple: #A855F7;      /* Primary purple */
  --color-cyan: #06B6D4;        /* Secondary cyan */
  /* ... more colors ... */
}
```

### Services

Update services in `src/data/services.ts`. Each service has:
- Icon (from Lucide React)
- Title
- Description
- Features (optional)
- Category (core or additional)

### Projects

Update projects in `src/data/projects.ts`. Each project has:
- Title
- Description
- Image path
- Tech stack
- Live URL
- Category

### Contact Information

Update contact details in `src/data/contactInfo.ts` and social links in `src/data/socialLinks.ts`.

## Performance

The website is optimized for performance with:
- Lazy loading images
- Optimized CSS (Tailwind purging)
- Tree-shaking (Vite)
- Code splitting
- Smooth animations (hardware accelerated)

**Expected Lighthouse Scores:**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

The site can be deployed to any static hosting service:

### Netlify
```bash
npm run build
# Drag and drop the `dist` folder to Netlify
```

### Vercel
```bash
npm run build
vercel --prod
```

### GitHub Pages
1. Update `vite.config.ts` with base path
2. Run `npm run build`
3. Deploy the `dist` folder

## Support

For questions or support:
- **Email**: reuelswebservices@gmail.com
- **Phone**: (876) 573-8748
- **Portfolio**: [reufolio.online](https://reufolio.online)

## License

© 2026 Reuel's Web Services. All rights reserved.

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
