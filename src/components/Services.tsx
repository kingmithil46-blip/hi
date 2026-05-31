import { SERVICES_DATA } from '../data';
import DynamicIcon from './DynamicIcon';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  return (
    <section
      id="services"
      className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16" id="services-header">
          <div className="inline-flex items-center gap-1.5 bg-indigo-500/10 dark:bg-indigo-500/20 px-3.5 py-1 rounded-full text-indigo-700 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider font-mono">
            OUR TECHNICAL SUITE
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            Comprehensive Digital Capabilities
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
            We deliver pristine full-stack code and award-winning designs. Zero template shortcuts &mdash; everything is custom made to drive business conversion rates.
          </p>
        </div>

        {/* Services Grid (6 sub-services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="services-grid">
          {SERVICES_DATA.map((service, idx) => (
            <div
              key={service.id}
              className="group relative bg-white dark:bg-white/5 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 border border-slate-200/60 dark:border-white/10 transition-all duration-300 flex flex-col justify-between"
              id={`service-card-${idx}`}
            >
              {/* Card visual ambient gradient hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-500/5 to-cyan-500/5 dark:from-indigo-500/10 dark:to-cyan-550/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div>
                {/* Header icon row */}
                <div className="flex items-center justify-between pb-6">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-slate-100 dark:border-white/10 flex items-center justify-center text-indigo-600 dark:text-cyan-400 group-hover:scale-105 transition-transform">
                    <DynamicIcon name={service.iconName} className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 dark:text-slate-500">0{idx + 1}</span>
                </div>

                {/* Service Title */}
                <h3 className="font-display font-semibold text-xl text-slate-900 dark:text-white pb-3 group-hover:text-indigo-650 dark:group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-sm text-slate-600 dark:text-slate-400 pb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Bullet Features checklist */}
                <ul className="space-y-2.5 pb-8 border-t border-slate-100 dark:border-white/10 pt-6">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-500 dark:text-slate-400">
                      <DynamicIcon name="Check" className="text-cyan-500 dark:text-cyan-400 w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action consultation link */}
              <button
                onClick={() => onSelectService(service.title)}
                className="w-full bg-slate-50 hover:bg-indigo-600 group-hover:bg-indigo-600 dark:bg-white/5 hover:dark:bg-indigo-600 text-slate-800 group-hover:text-white dark:text-slate-200 hover:dark:text-white font-semibold text-sm py-3 rounded-2xl transition-all border border-slate-100 dark:border-white/10 flex items-center justify-center gap-2"
                id={`service-cta-btn-${idx}`}
              >
                <span>{service.ctaText}</span>
                <DynamicIcon name="ArrowRight" className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
