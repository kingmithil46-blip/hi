import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Trust from './components/Trust';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return true; // We default to a sleek dark mode for web-agency high-tech visual feel!
  });

  const [selectedService, setSelectedService] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('');

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const handleToggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPlan = (planName: string, billingCycle: string) => {
    setSelectedPlan(`${planName} - Billed ${billingCycle === 'monthly' ? 'Monthly' : 'Annually'}`);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={isDark ? 'dark' : ''} id="app-root-theme">
      
      {/* Outer Content wrapper React context mimicking standard body selector to support dark: prefixed utility tags */}
      <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 font-sans transition-colors duration-300">
        
        {/* Dynamic Static Header Navigation with Toggle themes */}
        <Header isDark={isDark} onToggleTheme={handleToggleTheme} />

        {/* Global Sections list */}
        <main id="main-content">
          
          {/* Section 1: Hero Section */}
          <Hero />

          {/* Section 2: Trust bar / client metrics */}
          <Trust />

          {/* Section 3: Curated Services Suite */}
          <Services onSelectService={handleSelectService} />

          {/* Section 4: Why Us Benefits */}
          <WhyChooseUs />

          {/* Section 5: Curated Portfolios */}
          <Portfolio />

          {/* Section 6: Standard Delivery Process */}
          <Process />

          {/* Section 7: Success Testimonials portfolio */}
          <Testimonials />

          {/* Section 8: Pricing plans */}
          <Pricing onSelectPlan={handleSelectPlan} />

          {/* Section 9: Frequently Asked Questions */}
          <FAQ />

          {/* Section 10: Inbounds Capture Lead sheets */}
          <Contact selectedService={selectedService} selectedPlan={selectedPlan} />

        </main>

        {/* Section 11: Global Footer Maps */}
        <Footer />

      </div>
    </div>
  );
}
