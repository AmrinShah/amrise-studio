export type FeaturedProject = {
  id: string
  title: string
  badge: string
  status: 'Live' | 'In Progress'
  projectType: string
  description: string
  features?: string[]
  techStack: string[]
  image: string
  liveUrl: string
  githubUrl: string
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: 'ivf-clinic',
    title: 'IVF Clinic Website',
    badge: 'Healthcare',
    status: 'Live',
    projectType: 'Healthcare Web Application',
    description:
      'A responsive healthcare website for an IVF & Fertility Centre featuring appointment booking, treatment information, doctor profiles, contact forms, and a modern user-friendly interface.',
    features: [
      'Appointment Booking',
      'Doctor Profiles',
      'Contact Form',
      'Responsive Design',
    ],
    techStack: ['React', 'Node.js', 'Express', 'MySQL'],
    image: '/portfolio/ivf-clinic.png',
    liveUrl: 'https://ivf-clinic-management-system.vercel.app',
    githubUrl: 'https://github.com/AmrinShah/ivf-clinic-management-system',
  },
  {
    id: 'kondaji-chivda',
    title: 'Kondaji Chivda Website',
    badge: 'Food & FMCG',
    status: 'Live',
    projectType: 'Food & FMCG Website',
    description:
      'A modern food business website showcasing traditional snacks, product catalog, business information, customer inquiries, and a responsive interface for local and online customers.',
    features: [
      'Product Showcase',
      'Product Categories',
      'Contact & Inquiry Form',
      'Responsive Design',
    ],
    techStack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    image: '/portfolio/kondaji-chivda.png',
    liveUrl: 'https://kondaji-chivda.vercel.app',
    githubUrl: 'https://github.com/AmrinShah/Kondaji-chivda',
  },
  {
    id: 'quote-blog-cms',
    title: 'Quote Blog CMS',
    badge: 'CMS',
    status: 'Live',
    projectType: 'Content Management System',
    description:
      'A full-stack content management system for creating, editing, organizing, and publishing inspirational quotes with a clean, responsive, and user-friendly interface.',
    features: [
      'CRUD Operations',
      'Category Management',
      'Responsive Design',
      'Dynamic Content',
    ],
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    image: '/portfolio/quote-blog-cms.png',
    liveUrl: 'https://quote-blog-cms.vercel.app',
    githubUrl: 'https://github.com/AmrinShah/Quote-Blog-CMS',
  },
  {
    id: 'stranger-things',
    title: 'Stranger Things Landing Page',
    badge: 'Entertainment',
    status: 'Live',
    projectType: 'Entertainment Landing Page',
    description:
      'A cinematic landing page inspired by the Stranger Things series featuring immersive visuals, modern UI, responsive layout, smooth animations, and engaging user experience.',
    features: [
      'Hero Section',
      'Modern UI',
      'Responsive Design',
      'Smooth Animations',
    ],
    techStack: ['HTML', 'CSS', 'JavaScript'],
    image: '/portfolio/stranger-things.png',
    liveUrl: 'https://v0-new-project-4v0vodt0zuz.vercel.app/',
    githubUrl: 'https://github.com/AmrinShah',
  },
]
