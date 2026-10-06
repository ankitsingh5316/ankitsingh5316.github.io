export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceCard {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface TechItem {
  name: string;
  description: string;
}

export interface Project {
  number: string;
  title: string;
  technology: string;
  description: string;
  tags: string[];
  accent: string;
  preview:
    | 'calendar'
    | 'gventure'
    | 'clouducaas'
    | 'bharat'
    | 'ringpilot'
    | 'smschat'
    | 'zipcapital'
    | 'directdial'
    | 'freeswitch';
  image?: string;
  url?: string;
}

export interface PerformanceMetric {
  label: string;
  value: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  responsibilities: string[];
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: ServiceCard[] = [
  {
    number: '01',
    title: 'Product Interfaces',
    description:
      'Responsive, reusable and scalable interfaces built with Angular and modern frontend architecture.',
    icon: 'interface',
  },
  {
    number: '02',
    title: 'Modern Web Experiences',
    description:
      'Next.js applications with SSR, SEO-friendly rendering and performance-focused implementation.',
    icon: 'web',
  },
  {
    number: '03',
    title: 'Dynamic Applications',
    description:
      'JSON/API-driven interfaces with reusable components and flexible content structures.',
    icon: 'dynamic',
  },
  {
    number: '04',
    title: 'Performance & UX',
    description:
      'Lighthouse, Core Web Vitals, image optimization, responsive behavior and real-world UX improvements.',
    icon: 'performance',
  },
];

export const TECH_STACK: TechItem[] = [
  { name: 'Angular', description: 'Component architecture, routing, and production SPA development.' },
  { name: 'Next.js', description: 'SSR, SEO-friendly rendering, and modern React-based web apps.' },
  { name: 'TypeScript', description: 'Type-safe, maintainable frontend code at scale.' },
  { name: 'JavaScript', description: 'Core language for interactive, dynamic web experiences.' },
  { name: 'HTML5', description: 'Semantic markup and accessible document structure.' },
  { name: 'CSS3', description: 'Modern layouts, animations, and responsive design systems.' },
  { name: 'SCSS', description: 'Organized, scalable styling with variables and mixins.' },
  { name: 'REST APIs', description: 'Integrating dynamic data into frontend applications.' },
  { name: 'SSR', description: 'Server-side rendering for faster loads and SEO benefits.' },
  { name: 'SEO', description: 'Meta tags, structured content, and search-friendly pages.' },
  { name: 'Git', description: 'Version control, branching, and collaborative workflows.' },
  { name: 'SVN', description: 'Enterprise version control in production environments.' },
];

export const PROJECTS: Project[] = [
  {
    number: '01',
    title: 'Calendar Application',
    technology: 'Angular / TypeScript',
    description:
      'Production calendar application with dashboard, event types, availability, account settings and booking workflows.',
    tags: ['Angular', 'TypeScript', 'Responsive UI', 'Component Architecture'],
    accent: '#6366f1',
    preview: 'calendar',
    image: '/images/projects/calendar.png',
  },
  {
    number: '02',
    title: 'Gventure Website',
    technology: 'Angular / SSR',
    description:
      'Production business website with dynamic JSON-driven pages, SSR, SEO and performance-focused frontend implementation.',
    tags: ['Angular', 'SSR', 'SEO', 'JSON', 'Performance'],
    accent: '#818cf8',
    preview: 'gventure',
    image: '/images/projects/gventure.png',
  },
  {
    number: '03',
    title: 'CloudUCaaS',
    technology: 'Next.js',
    description:
      'Next.js business platform with responsive product interfaces, performance optimization, broken-link fixes and production validation.',
    tags: ['Next.js', 'SSR', 'Performance', 'Responsive UI'],
    accent: '#4f46e5',
    preview: 'clouducaas',
    image: '/images/projects/clouducaas.png',
  },
  {
    number: '04',
    title: 'Bharat Global',
    technology: 'Next.js',
    description:
      'Modern business website with responsive navigation, mobile UI improvements, hero video sections and content-driven layouts.',
    tags: ['Next.js', 'Responsive', 'UI Engineering'],
    accent: '#7c3aed',
    preview: 'bharat',
    image: '/images/projects/bharat-global.jpg',
  },
  {
    number: '05',
    title: 'RingPilot',
    technology: 'Angular / SSR',
    description:
      'Built the RingPilot marketing site with Angular SSR and developed portal UI on portal.ringpilot.us — new module screens, login experience, UI improvements and production bug fixes.',
    tags: ['Angular', 'SSR', 'Portal UI', 'Bug Fixes', 'Responsive UI'],
    accent: '#6366f1',
    preview: 'ringpilot',
    image: '/images/projects/ringpilot-portal.png',
  },
  {
    number: '06',
    title: 'LexiFlow',
    technology: 'Angular',
    description:
      'Smart text admin panel (LexiFlow) with reporting dashboard, data tables, pagination, filters and status badges. Built frontend logic, UI corrections and production bug fixes.',
    tags: ['Angular', 'Dashboard', 'Data Tables', 'Filters', 'Admin Panel'],
    accent: '#22c55e',
    preview: 'smschat',
    image: '/images/projects/sms-chat.png',
    url: 'https://smarttext.gventure.info/auth/login',
  },
  {
    number: '07',
    title: 'LeadsVicidial',
    technology: 'Angular',
    description:
      'Data cleaner and leads workflow panel for Vicidial — lead filters, date pickers, dropdowns, multi-select tags and search. Implemented clipboard copy and frontend bug fixes.',
    tags: ['Angular', 'Lead Management', 'Vicidial', 'Forms', 'Search'],
    accent: '#f59e0b',
    preview: 'zipcapital',
    image: '/images/projects/zip-capital.png',
    url: 'https://dataccleanerworkflow.gventure.info/',
  },
  {
    number: '08',
    title: 'Direct Dial',
    technology: 'HTML / CSS / JavaScript',
    description:
      'UI development on a call-routing admin panel — user dashboard, funnel workflow stepper, KPI cards and module screens. Built layouts and interactions in HTML, CSS and JS alongside the team.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Dashboard UI', 'Module UI', 'Team'],
    accent: '#f97316',
    preview: 'directdial',
    image: '/images/projects/direct-dial.png',
  },
  {
    number: '09',
    title: 'FreeSwitch Dialer',
    technology: 'Angular / TypeScript / Bootstrap',
    description:
      'Customer and admin panels for a FreeSwitch dialer platform — dashboard analytics, campaign modules, reporting UI, responsive layouts, UI corrections and production bug fixes.',
    tags: ['Angular', 'TypeScript', 'Bootstrap', 'Dialer Dashboard', 'Bug Fixes'],
    accent: '#0ea5e9',
    preview: 'freeswitch',
    image: '/images/projects/freeswitch-dialer.png',
    url: 'https://dialer.gventure.info/#/login',
  },
];

export const PERFORMANCE_METRICS: PerformanceMetric[] = [
  { label: 'Performance', value: 'Focused', description: 'Performance-focused implementation' },
  { label: 'SEO', value: 'Aware', description: 'SEO-aware rendering and metadata' },
  { label: 'Accessibility', value: 'Mindful', description: 'Semantic HTML and keyboard navigation' },
  { label: 'Best Practices', value: 'Tested', description: 'Production-tested frontend standards' },
];

export const PERFORMANCE_FEATURES = [
  'Lighthouse & PageSpeed',
  'Core Web Vitals',
  'Image Optimization',
  'SSR',
  'Responsive Rendering',
  'Production Debugging',
];

export const PROCESS_STEPS: ProcessStep[] = [
  { number: '01', title: 'Discover', description: 'Understand requirements and existing architecture.' },
  { number: '02', title: 'Build', description: 'Create reusable, responsive components.' },
  { number: '03', title: 'Integrate', description: 'Connect APIs, JSON content and application flows.' },
  { number: '04', title: 'Optimize', description: 'Improve performance, rendering and UX.' },
  { number: '05', title: 'Validate', description: 'Test responsive behavior, browser compatibility and production functionality.' },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'GVenture Technologies',
    role: 'Front-End Developer',
    period: '2024 – Present',
    responsibilities: [
      'Angular / Next.js development',
      'Production websites',
      'Dynamic JSON/API integration',
      'SSR/SEO',
      'Performance optimization',
      'Calendar application',
      'Production debugging',
      'Responsive UI',
    ],
  },
  {
    company: 'Oasis Infobyte',
    role: 'Web Development Intern',
    period: '2023',
    responsibilities: [
      'Web development fundamentals',
      'Responsive layouts',
      'Frontend implementation',
    ],
  },
];

export const ABOUT_FACTS = ['2+ Years Experience', 'Angular', 'Next.js', 'TypeScript', 'Production Applications'];

export const CONTACT = {
  email: 'ankitsingh9660@gmail.com',
  phone: '+91-9260925931',
  phoneTel: '+919260925931',
  address: 'Noida, India',
  headline: 'Have a product that needs a better frontend?',
  subtext: "Let's build something fast, thoughtful and production-ready.",
};
