import { 
  Globe, 
  Smartphone, 
  Palette, 
  ShieldAlert, 
  ShoppingCart, 
  TrendingUp, 
  Zap, 
  Coins, 
  Layers, 
  Search, 
  Lock, 
  Activity, 
  Code, 
  Monitor, 
  Sparkles, 
  Check, 
  Star, 
  Mail, 
  Phone, 
  Send, 
  Github, 
  Linkedin, 
  Twitter, 
  Moon, 
  Sun, 
  Menu, 
  X, 
  ArrowRight,
  MessageSquare,
  ShieldCheck,
  Rocket,
  Plus,
  Play
} from 'lucide-react';

interface DynamicIconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function DynamicIcon({ name, className = '', size }: DynamicIconProps) {
  const props = { className, ...(size ? { size } : {}) };

  switch (name) {
    case 'Globe': return <Globe {...props} />;
    case 'Smartphone': return <Smartphone {...props} />;
    case 'Palette': return <Palette {...props} />;
    case 'ShieldAlert': return <ShieldAlert {...props} />;
    case 'ShoppingCart': return <ShoppingCart {...props} />;
    case 'TrendingUp': return <TrendingUp {...props} />;
    case 'Zap': return <Zap {...props} />;
    case 'Coins': return <Coins {...props} />;
    case 'Layers': return <Layers {...props} />;
    case 'Search': return <Search {...props} />;
    case 'Lock': return <Lock {...props} />;
    case 'Activity': return <Activity {...props} />;
    case 'Code': return <Code {...props} />;
    case 'Monitor': return <Monitor {...props} />;
    case 'Sparkles': return <Sparkles {...props} />;
    case 'Check': return <Check {...props} />;
    case 'Star': return <Star {...props} />;
    case 'Mail': return <Mail {...props} />;
    case 'Phone': return <Phone {...props} />;
    case 'Send': return <Send {...props} />;
    case 'Github': return <Github {...props} />;
    case 'Linkedin': return <Linkedin {...props} />;
    case 'Twitter': return <Twitter {...props} />;
    case 'Moon': return <Moon {...props} />;
    case 'Sun': return <Sun {...props} />;
    case 'Menu': return <Menu {...props} />;
    case 'X': return <X {...props} />;
    case 'ArrowRight': return <ArrowRight {...props} />;
    case 'MessageSquare': return <MessageSquare {...props} />;
    case 'ShieldCheck': return <ShieldCheck {...props} />;
    case 'Rocket': return <Rocket {...props} />;
    case 'Plus': return <Plus {...props} />;
    case 'Play': return <Play {...props} />;
    default: return <Code {...props} />;
  }
}
