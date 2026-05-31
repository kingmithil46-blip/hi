export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
  ctaText: string;
}

export interface Metric {
  id: string;
  value: string;
  suffix: string;
  label: string;
  subText: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  category: 'web' | 'app' | 'ux';
  description: string;
  imageUrl: string;
  techStack: string[];
  results: { label: string; value: string };
  projectLink: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  duration: string;
  description: string;
  iconName: string;
  deliverables: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatarUrl: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  priceMonthly: number;
  priceYearly: number;
  features: { text: string; included: boolean }[];
  isPopular: boolean;
  ctaText: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}
