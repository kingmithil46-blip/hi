import { BENEFITS_DATA } from '../data';
import DynamicIcon from './DynamicIcon';

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="py-20 md:py-28 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Why Choose Us Grid headers */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16" id="why-choose-us-intro">
          
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-1.5 bg-indigo-500/10 dark:bg-indigo-500/20 px-3.5 py-1 rounded-full text-indigo-700 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider font-mono">
              ENGINEERED FOR SUPREMACY
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
              Why High-Growth Companies Partner with NovaStack
            </h2>
          </div>

          <div className="lg:col-span-6">
            <p className="text-base text-slate-600 dark:text-slate-405 leading-relaxed font-sans">
              Unlike legacy agencies that deliver bloated, slow frameworks, we construct bespoke architectures from scratch. Every element is tested to scale perfectly alongside your user acquisition cycles.
            </p>
          </div>

        </div>

        {/* Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="benefits-grid">
          {BENEFITS_DATA.map((benefit, idx) => (
            <div
              key={benefit.id}
              className="p-8 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-200/55 dark:border-white/10 hover:bg-white hover:dark:bg-white/10 hover:shadow-xl hover:shadow-indigo-500/5 dark:hover:shadow-indigo-500/10 transition-all duration-300 group"
              id={`benefit-card-${idx}`}
            >
              {/* Icon layout */}
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-cyan-400 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <DynamicIcon name={benefit.iconName} className="w-5 h-5" />
              </div>

              {/* Benefit Header */}
              <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white pb-2.5">
                {benefit.title}
              </h3>

              {/* Benefit Description */}
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
