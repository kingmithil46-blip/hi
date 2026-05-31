import { Service, Metric, Benefit, Project, ProcessStep, Testimonial, PricingPlan, FAQItem } from './types';

export const SERVICES_DATA: Service[] = [
  {
    id: 'custom-web',
    title: 'Custom Website Development',
    description: 'Bespoke, blazing-fast websites engineered using modern stacks. Designed to engage your audience and drive organic digital growth.',
    iconName: 'Globe',
    features: ['React & Vite Single Page Apps', 'Headless & Jamstack Architectures', 'Optimized Core Web Vitals', 'CMS Integrations (Sanity, WordPress)'],
    ctaText: 'Build My Site'
  },
  {
    id: 'app-dev',
    title: 'Android & iOS App Dev',
    description: 'High-fidelity native and cross-platform mobile apps. Engineered for seamless touch performance and offline capability.',
    iconName: 'Smartphone',
    features: ['Native Android & Jetpack Compose', 'React Native Cross-Platform', 'Fluid Native Animations', 'Play Store & App Store Deployment'],
    ctaText: 'Launch My App'
  },
  {
    id: 'uiux-design',
    title: 'UI/UX Design Frameworks',
    description: 'High-converting interactive wireframes, custom design systems, and visual storyboarding to maximize conversion rates.',
    iconName: 'Palette',
    features: ['Visual Storyboarding & Research', 'Interactive Figma Mockups', 'Custom Design Brand Systems', 'Mobile-First Touch Architecture'],
    ctaText: 'Design My Interface'
  },
  {
    id: 'maintenance-support',
    title: 'Maintenance & Support',
    description: 'Continuous server monitoring, security patching, SEO audits, and speed optimizations to keep your portal ahead of the competition.',
    iconName: 'ShieldAlert',
    features: ['24/7 Server Monitoring', 'Regular Security Audits', 'Monthly Core Update Patches', 'Incremental Database Backups'],
    ctaText: 'Secure My Stack'
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Solutions',
    description: 'Conversion-optimized digital storefronts. Feature custom inventory dashboards, safe checkouts, and stripe integrations.',
    iconName: 'ShoppingCart',
    features: ['Stripe & Paypal Safe Checkouts', 'Custom Inventory Dashboards', 'Sub-second Product Searches', 'Automated Post-purchase Emails'],
    ctaText: 'Boost My Sales'
  },
  {
    id: 'seo-marketing',
    title: 'Personal Brand & SEO',
    description: 'Establish ultimate digital dominance with elite portfolios, high-impact SEO structures, and dynamic blog portals.',
    iconName: 'TrendingUp',
    features: ['Search Engine Page-1 Optimization', 'Social Brand Strategy', 'Schema Markup Injection', 'Ultra-fast Static Delivery'],
    ctaText: 'Scale My Brand'
  }
];

export const METRICS_DATA: Metric[] = [
  {
    id: 'metric-1',
    value: '99.4',
    suffix: '%',
    label: 'Client Satisfaction',
    subText: 'Based on 140+ global reviews'
  },
  {
    id: 'metric-2',
    value: '180',
    suffix: '+',
    label: 'Projects Delivered',
    subText: 'Web, mobile, & UI models'
  },
  {
    id: 'metric-3',
    value: '4-3',
    suffix: '+',
    label: 'Years of Experience',
    subText: 'Full-stack senior engineering'
  },
  {
    id: 'metric-4',
    value: '35',
    suffix: '%',
    label: 'Avg. Conversion Uplift',
    subText: 'Proven CRO design blueprints'
  }
];

export const BENEFITS_DATA: Benefit[] = [
  {
    id: 'benefit-1',
    title: 'Fast Agile Delivery',
    description: 'We run high-velocity sprints delivering functional premium prototypes within 14 days without cutting code style corners.',
    iconName: 'Zap'
  },
  {
    id: 'benefit-2',
    title: 'Affordable Flat Rates',
    description: 'Clear upfront pricing with absolutely zero hidden bills, retainer traps, or hosting surcharges. Pay only for exact deliverables.',
    iconName: 'Coins'
  },
  {
    id: 'benefit-3',
    title: 'Responsive & Accessible',
    description: 'Every layout matches WCAG guidelines and resizes beautifully from smartwatches to ultra-wide desktop monitors.',
    iconName: 'Layers'
  },
  {
    id: 'benefit-4',
    title: 'SEO Optimized Frameworks',
    description: 'Clean semantic elements, microdata formats, and ultra-high Core Web Vitals to score perfect 100 PageSpeed scores.',
    iconName: 'Search'
  },
  {
    id: 'benefit-5',
    title: 'Secure Cloud Engineering',
    description: 'Zero injection hazards, strict SSL/TLS deployment guidelines, and multi-layered database protection mechanisms.',
    iconName: 'Lock'
  },
  {
    id: 'benefit-6',
    title: '24/7 Ongoing Support',
    description: 'Dedicated Slack channels and immediate maintenance responses to guarantee your digital operations never halt.',
    iconName: 'Activity'
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'project-1',
    title: 'Apex Ledger - fintech dashboard',
    client: 'Apex Global Inc.',
    category: 'web',
    description: 'A revolutionary high-performance decentralized finance analytics portal featuring real-time telemetry, automated asset reports, and custom charts.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Recharts', 'Framer Motion'],
    results: { label: 'Conversion Lift', value: '+142%' },
    projectLink: '#contact'
  },
  {
    id: 'project-2',
    title: 'FitZen Yoga - wellness app',
    client: 'FitZen Wellness Studio',
    category: 'app',
    description: 'An elegant Android application utilizing responsive media components, live schedules, and modern biometric trackers for high user retention.',
    imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80',
    techStack: ['Android Kotlin', 'Jetpack Compose', 'Node.js', 'Firestore'],
    results: { label: 'App store Rating', value: '4.9★ (3k+ votes)' },
    projectLink: '#contact'
  },
  {
    id: 'project-3',
    title: 'Aura Cosmetics - glassmorphism e-store',
    client: 'Aura Labs',
    category: 'ux',
    description: 'A striking premium cosmetics store built with immersive glassmorphism materials, a sub-second search index, and a one-tap secure Apple Pay checkout.',
    imageUrl: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=600&q=80',
    techStack: ['UI UX Design System', 'Figma Blueprint', 'Tailwind', 'Stripe API'],
    results: { label: 'Sales Growth', value: '2.4x Speed boost' },
    projectLink: '#contact'
  },
  {
    id: 'project-4',
    title: 'EduPulse - interactive learning portal',
    client: 'EduPulse Institute',
    category: 'web',
    description: 'A complete interactive portal hosting custom online quiz structures, live tutor modules, and instant homework performance evaluation.',
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80',
    techStack: ['React SPA', 'Tailwind CSS', 'Express Server', 'PostgreSQL'],
    results: { label: 'Active Users', value: '45,000+ month' },
    projectLink: '#contact'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discovery & Consultation',
    duration: 'Days 1-3',
    description: 'We examine your business requirements, analyze your core competitors, and formulate a technical visual project specification sheet.',
    iconName: 'SearchCode',
    deliverables: ['Competitor Analysis Report', 'Technical Specification Sheet', 'Interactive Wireframe Roadmap']
  },
  {
    step: '02',
    title: 'UI/UX Visual Prototyping',
    duration: 'Days 4-7',
    description: 'We construct beautiful, bespoke visual layouts in Figma matching your brand’s personality. We fine-tune each element based on feedback.',
    iconName: 'Airplay',
    deliverables: ['Clickable High-Fidelity Mockup', 'Interactive Component Library', 'Responsive Mobile-Layout Designs']
  },
  {
    step: '03',
    title: 'Senior Frontend & Core Code',
    duration: 'Days 8-15',
    description: 'We engineer code using optimized, well-documented React, Vite, and Tailwind structures, keeping the application scalable and modular.',
    iconName: 'FileCode2',
    deliverables: ['SEO Semantically Perfect Frontend Code', 'Optimal Asset Compressions', 'Clean Server Route Interfaces']
  },
  {
    step: '04',
    title: 'Failsafe Testing & Analytics',
    duration: 'Days 16-18',
    description: 'We submit the app to strict auditing protocols, ensuring cross-browser design perfectness, swift load times, and error-free submissions.',
    iconName: 'ShieldCheck',
    deliverables: ['Cross-Device Performance Report', 'Error-Free API Validations', 'Pixel-Perfect Styling Audits']
  },
  {
    step: '05',
    title: 'Optimized Cloud Deployment',
    duration: 'Day 19-20',
    description: 'We configure DNS mapping, launch SSL/TLS systems, embed analytics code, and hand over complete repository access.',
    iconName: 'Rocket',
    deliverables: ['Live DNS Cloud Configuration', 'Google Analytics Setup', 'Complete Source-Code Deliverables']
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    role: 'Founder & CEO',
    company: 'Apex Global Inc.',
    quote: "NovaStack Solutions revolutionized our client intake workflow. Their clean coding layout and high-conversion strategy boosted our digital signups by 142% within three months. Exceptional communication!",
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=wrap&w=150&q=80'
  },
  {
    id: 't2',
    name: 'Dr. Rahul Mehta',
    role: 'Dean of Technology',
    company: 'EduPulse Institute',
    quote: "Developing our learning portal felt incredibly easy with NovaStack. Their discovery process resolved all our complex requirements cleanly. They gave us an experience that surpassed any prior agency encounters.",
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=wrap&w=150&q=80'
  },
  {
    id: 't3',
    name: 'Amara Diaz',
    role: 'Creative Director',
    company: 'Aura Cosmetics Labs',
    quote: "Their focus on micro-interactions and custom glassmorphism design brought our visual concept to light. Highly efficient delivery, affordable pricing quotes, and continuous fast feedback channels. 10/10 developer quality.",
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=wrap&w=150&q=80'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Normal Landing Page',
    tagline: 'Ideal for standard business launch campaigns, simple products, and elegant portfolios.',
    priceMonthly: 3999,
    priceYearly: 3399,
    features: [
      { text: 'Single High-performance Responsive Landing Page', included: true },
      { text: 'Tailwind CSS Modern Styling', included: true },
      { text: 'Direct WhatsApp Contact Form Integration', included: true },
      { text: 'Full SEO & Metadata Injection', included: true },
      { text: 'Fit as per Custom Design Requirements', included: true },
      { text: 'Multi-page Layout Integration', included: false },
      { text: 'Advanced API & Login Authentication', included: false }
    ],
    isPopular: false,
    ctaText: 'Launch Landing Page'
  },
  {
    id: 'business',
    name: 'Custom Web Suite',
    tagline: 'Highly personalized websites tailored specifically to your branding, content, and design ideas.',
    priceMonthly: 14999,
    priceYearly: 12499,
    features: [
      { text: 'Fully Custom Layout Design Mockups', included: true },
      { text: 'Fit as per your Specific Customizations', included: true },
      { text: 'Up to 5 Fully Responsive Modular Pages', included: true },
      { text: 'Forms Connected Directly to WhatsApp', included: true },
      { text: 'Framer Motion Premium Animation Fluidity', included: true },
      { text: 'Advanced Database Configurations', included: false }
    ],
    isPopular: true,
    ctaText: 'Build Custom Site'
  },
  {
    id: 'enterprise',
    name: 'Enterprise Platform',
    tagline: 'Bespoke dashboards, complete robust web apps, portals, or full-scale mobile app plans.',
    priceMonthly: 49999,
    priceYearly: 39999,
    features: [
      { text: 'Complete Custom App + Modular Architecture', included: true },
      { text: 'Advanced Client Controls & Admin Panels', included: true },
      { text: 'Sub-second Product Catalog & E-commerce', included: true },
      { text: 'Direct Forms with Real-time WhatsApp Alerts', included: true },
      { text: 'Dedicated Lead Senior Engineer Support', included: true },
      { text: 'Unlimited Future Code Design Optimization', included: true }
    ],
    isPopular: false,
    ctaText: 'Request Custom Quote'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How fast will my web portal or mobile app build compile?',
    answer: 'Standard Landing Pages are typically compiled, visual audits completed, and deployment configured within 7 to 10 working days. Large multi-page startup platforms require 3 to 4 weeks depending on database logic requirements.',
    category: 'Process'
  },
  {
    id: 'faq-2',
    question: 'How does NovaStack ensure high search optimization scoring?',
    answer: 'We build all pages following strict WCAG-2 standard semantic tags, compact local asset optimization, next-gen image formats, and lightning-fast Tailwind layout code, guaranteeing pristine Core Web Vitals.',
    category: 'SEO & Performance'
  },
  {
    id: 'faq-3',
    question: 'Do you charge monthly retainer fees for post-launch edits?',
    answer: 'Absolutely not. All projects are built on flat-rate quote guarantees. Once delivered, you own 100% of the code. We also offer optional modular support plans if you want us to do monthly database operations.',
    category: 'Billing'
  },
  {
    id: 'faq-4',
    question: 'Will my custom mobile application support offline operations?',
    answer: 'Yes! Our custom Android and iOS architectures utilize persistent local caches and background tasks (like Jetpack Database caches) so users can retrieve documents and view portfolios without an active network connection.',
    category: 'Mobile Apps'
  },
  {
    id: 'faq-5',
    question: 'Can you reconstruct our current website into a modular React app?',
    answer: 'We specialize in refactoring. We rebuild slow, legacy structures (like outdated WordPress platforms) into blazing-fast single-page React applications, keeping your live URL routing completely intact.',
    category: 'Process'
  }
];
