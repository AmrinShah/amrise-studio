# TuunInceptionception Studio - Landing Page

A modern, high-converting landing page for TuunInceptionception Stusosoalamel i + branding + brandiagencyvice agency. Built wit4 Next.js 14, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, trendy 2025 design with smooth animations
- **Mobile-First**: Fully responsive design that works on all devices
- **High Converting**: Optimized for conversions with multiple CTAs
- **Fast Performance**: Built with Next.js for optimal loading speeds
- **SEO Optimized**: Proper meta tags and structured data
- **Contact Integration**: WhatsApp integration and Formspree form handling

## 📋 Sections Included

1. **Hero Section** - Bold headline with main CTAs
2. **Packages Section** - 3 tiered pricing plans (Starter, Growth, Pro)
3. **How It Works** - 3-step process visualization
4. **Portfolio Gallery** - Sample work showcase
5. **Testimonials** - Client reviews and social proof
6. **FAQ Section** - Common questions and answers
7. **Footer** - Final CTA and contact information

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Forms**: Formspree integration
- **Fonts**: Inter (Google Fonts)
- **Deployment**: Vercel (recommended)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd social-media-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file:
   ```env
   # Formspree (optional)
   FORMSPREEE_ID=your_formspree_id
   
   # WhatsApp number (replace with your actual number)
   WHATSAPP_NUMBER=1234567890
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## ⚙️ Configuration

### Customizing Content

1. **Update company information** in `src/components/sections/FooterSection.tsx`
2. **Modify pricing packages** in `src/components/sections/PackagesSection.tsx`
3. **Change testimonials** in `src/components/sections/TestimonialsSection.tsx`
4. **Update FAQ content** in `src/components/sections/FAQSection.tsx`

### Setting up Formspree

1. Go to [Formspree](https://formspree.io) and create an account
2. Create a new form
3. Copy your form ID
4. Update the form endpoint in `src/components/ContactForm.tsx`:
   ```javascript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```

### WhatsApp Integration

Update the WhatsApp number in all components:
- Replace `1234567890` with your actual WhatsApp number
- Update the pre-filled messages as needed

### Customizing Colors

The color scheme can be customized in `src/app/globals.css`:
- Primary colors: Purple and pink gradients
- Background: Light gray to white gradients
- Accent colors: Various gradient combinations

## 📱 Responsive Design

The landing page is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🎨 Customization Guide

### Adding New Sections

1. Create a new component in `src/components/sections/`
2. Import and add it to `src/app/page.tsx`
3. Follow the existing pattern with motion animations

### Modifying Animations

Animations are powered by Framer Motion. Key animation patterns:
- `initial={{ opacity: 0, y: 20 }}`
- `animate={{ opacity: 1, y: 0 }}`
- `transition={{ duration: 0.8 }}`
- `viewport={{ once: true }}`

### Styling Changes

- Use Tailwind CSS classes for styling
- Custom CSS can be added to `src/app/globals.css`
- Component-specific styles can be added inline

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimized for all metrics
- **Bundle Size**: Optimized with Next.js built-in optimizations

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── sections/       # Page sections
│   ├── ui/            # shadcn/ui components
│   └── ContactForm.tsx # Contact form component
└── lib/               # Utility functions
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support or questions:
- Email: amrisestudio09@gmail.com
- WhatsApp: +91 8830857785
- Create an issue on GitHub

## 🎯 Target Audience

This landing page is designed for:
- Small business owners
- Creators/influencers  
- Startups
- Gym/salon/boutique owners

## 💡 Features for Conversion

- **Multiple CTAs**: WhatsApp buttons throughout the page
- **Social Proof**: Testimonials and statistics
- **Clear Pricing**: Transparent package pricing
- **Trust Signals**: Professional design and testimonials
- **Urgency**: "Limited Time Offer" messaging
- **FAQ Section**: Addresses common objections
- **Mobile Optimized**: Works perfectly on mobile devices

---

Built with ❤️ by Amrise Studio
