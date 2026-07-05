# Amrise Studio

A modern business portfolio and lead-generation website for Amrise Studio built with Next.js, TypeScript and Tailwind CSS.

## About

Amrise Studio is a freelancing digital service studio helping small businesses, boutiques, clinics, startups, and local brands grow online with strategy-led execution. This website showcases services, portfolio projects, and provides a professional contact experience for potential clients.

## Features

- Modern responsive UI
- Portfolio showcase with real projects
- Service packages (Starter, Business, Premium, Custom)
- Contact form with Nodemailer integration
- Gmail Compose URL integration
- WhatsApp CTA buttons
- Mobile responsive design
- Smooth animations with Framer Motion
- SEO friendly with proper meta tags
- Clean, professional layout

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Email**: Nodemailer
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Components**: shadcn/ui

## Installation

```bash
npm install
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## Environment Variables

Create a `.env.local` file in the project root:

```env
EMAIL_USER=amrisestudio09@gmail.com
EMAIL_PASS=YOUR_GMAIL_APP_PASSWORD
```

Note: To use Gmail SMTP, generate an App Password from your Google Account settings (Security → 2-Step Verification → App Passwords).

## Build

```bash
npm run build
npm start
```

## Folder Structure

```
src/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   └── contact/      # Contact form endpoint
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # React components
│   ├── sections/         # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── PackagesSection.tsx
│   │   ├── HowItWorksSection.tsx
│   │   ├── PortfolioSection.tsx
│   │   ├── FAQSection.tsx
│   │   └── FooterSection.tsx
│   ├── ui/              # shadcn/ui components
│   └── ContactForm.tsx  # Contact form component
├── data/                # Data files
│   └── featuredProjects.ts
└── lib/                 # Utility functions
    └── contactConfig.ts
```

## Deployment

Optimized for Vercel deployment. The project includes environment variable configuration for production email functionality.

## Contact

- **Email**: amrisestudio09@gmail.com
- **Website**: https://amrise-studio.vercel.app

## License

Copyright © Amrise Studio.
