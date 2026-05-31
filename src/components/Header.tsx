import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import DynamicIcon from './DynamicIcon';

interface HeaderProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export default function Header({ isDark, onToggleTheme }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Projects', href: '#portfolio' },
    { name: 'Our Process', href: '#process' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-lg bg-white/80 dark:bg-slate-950/80 border-b border-slate-200/50 dark:border-slate-800/50 py-3 shadow-md'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-2 group" id="logo-link">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-400 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-indigo-550/20 group-hover:scale-105 transition-transform">
              N
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-slate-900 dark:text-white">
              NovaStack<span className="text-indigo-600 dark:text-indigo-450 font-semibold">Solutions</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" id="desktop-navbar">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:hover:w-full after:bg-indigo-600 dark:after:bg-indigo-400 after:transition-all py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Area */}
          <div className="hidden md:flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={onToggleTheme}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-all"
              aria-label="Toggle Theme"
              id="theme-toggler"
            >
              <DynamicIcon name={isDark ? 'Sun' : 'Moon'} className="w-4 h-4" />
            </button>

            {/* CTA Button */}
            <a
              href="#contact"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm px-5 py-2.5 rounded-xl shadow-lg shadow-indigo-600/15 hover:shadow-indigo-600/25 transition-all text-center"
              id="nav-cta-btn"
            >
              Get Free Consultation
            </a>
          </div>

          {/* Mobile Buttons */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 text-slate-600 dark:text-slate-300"
              aria-label="Toggle Theme"
              id="theme-toggler-mobile"
            >
              <DynamicIcon name={isDark ? 'Sun' : 'Moon'} className="w-4 h-4" />
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 text-slate-600 dark:text-slate-300"
              aria-label="Toggle Menu"
              id="mobile-nav-toggle"
            >
              <DynamicIcon name={isMenuOpen ? 'X' : 'Menu'} className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 overflow-hidden"
            id="mobile-nav-drawer"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-base font-semibold text-slate-700 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 py-1 border-b border-slate-100 dark:border-slate-900"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl shadow-md"
                  id="mobile-nav-cta"
                >
                  Get Free Consultation
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
