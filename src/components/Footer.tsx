import DynamicIcon from './DynamicIcon';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const SERVICES = [
    'Custom Website Development',
    'Android App Development',
    'UI/UX Design Frameworks',
    'Maintenance & Support',
    'E-commerce Online Stores',
    'SEO & Brand Strategy'
  ];

  const QUICK_LINKS = [
    { name: 'Services Suite', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Develop Flow', href: '#process' },
    { name: 'Price Sprints', href: '#pricing' },
    { name: 'FAQs', href: '#faq' }
  ];

  return (
    <footer
      id="site-footer"
      className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200/50 dark:border-white/10 pt-16 pb-8 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-slate-200/50 dark:border-white/10" id="footer-links-grid">
          
          {/* Col 1: Branding block (4 cols on lg screens) */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#" className="flex items-center gap-2 group" id="footer-logo">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-400 flex items-center justify-center text-white font-bold text-lg shadow-md hover:scale-105 transition-transform">
                N
              </div>
              <span className="font-display font-bold text-lg tracking-tight text-slate-900 dark:text-white">
                NovaStack<span className="text-indigo-600 dark:text-indigo-400 font-semibold">Solutions</span>
              </span>
            </a>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans max-w-sm">
              NovaStack Solutions is a forward-thinking digital engineering studio specialized in high-performance web development, custom Android applications, and optimized UI design frameworks.
            </p>
          </div>

          {/* Col 2: Navigation (2 cols on lg screens) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white font-display">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services map (3 cols on lg screens) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white font-display">
              Services Offered
            </h4>
            <ul className="space-y-2.5">
              {SERVICES.map((srv) => (
                <li key={srv}>
                  <span className="text-xs text-slate-505 dark:text-slate-400 cursor-default">
                    {srv}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Coordinate info (3 cols on lg screens) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white font-display">
              Contact Coordinate
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-xs text-slate-500 dark:text-slate-405">
                <DynamicIcon name="Mail" className="w-4 h-4 text-indigo-500 mt-0.5" />
                <a href="mailto:projects@novastack.solutions" className="hover:text-indigo-600">
                  projects@novastack.solutions
                </a>
              </li>
              <li className="flex items-start gap-2 text-xs text-slate-500 dark:text-slate-405">
                <DynamicIcon name="Phone" className="w-4 h-4 text-indigo-500 mt-0.5" />
                <a href="tel:+1234567890" className="hover:text-indigo-600">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-2 text-xs text-slate-505 dark:text-slate-405 cursor-default leading-loose">
                <span>San Francisco HQ Office &mdash; California, USA. Remote delivery worldwide.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright banner row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8" id="footer-bottom-bar">
          <p className="text-[11px] text-slate-450 dark:text-slate-500 font-sans">
            &copy; {currentYear} NovaStack Solutions. All digital rights reserved. ISO 27001 & SOC2 Compliant.
          </p>
          <div className="flex items-center gap-6 text-[11px] text-slate-400">
            <a href="#" className="hover:text-indigo-600">Terms of Use</a>
            <a href="#" className="hover:text-indigo-600">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-600">SitemapXML</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
