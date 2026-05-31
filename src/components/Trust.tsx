import { METRICS_DATA } from '../data';
import DynamicIcon from './DynamicIcon';

export default function Trust() {
  const brandLogos = [
    { name: 'Apex Global', icon: 'Sparkles' },
    { name: 'EduPulse', icon: 'Layers' },
    { name: 'Aura Labs', icon: 'Palette' },
    { name: 'Helix Inc', icon: 'Activity' },
    { name: 'Zenith Retail', icon: 'ShoppingCart' }
  ];

  return (
    <section
      id="trust"
      className="py-12 bg-white dark:bg-slate-900 border-y border-slate-200/50 dark:border-white/10 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brand Bar / Social Proof */}
        <div className="text-center space-y-4 pb-12" id="brand-ticker-wrapper">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 font-mono">
            TRUSTED BY FORWARD-THINKING BRANDS GLOBAL-WIDE
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-60 dark:opacity-40">
            {brandLogos.map((brand, idx) => (
              <div key={idx} className="flex items-center gap-1.5 grayscale hover:grayscale-0 transition-all cursor-default">
                <div className="w-5 h-5 rounded bg-slate-400 dark:bg-slate-600 flex items-center justify-center text-[10px] text-white font-bold">
                  {brand.name[0]}
                </div>
                <span className="font-display font-bold text-sm tracking-wide text-slate-600 dark:text-slate-200">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Real Analytical Metrics Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-slate-100 dark:border-white/10" id="metrics-grid">
          {METRICS_DATA.map((metric) => (
            <div
              key={metric.id}
              className="text-center space-y-2 p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/5 border border-transparent dark:hover:border-white/5 transition-all duration-300"
            >
              {/* Metric Value */}
              <div className="font-display font-bold text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-650 to-cyan-500 dark:from-indigo-400 dark:to-cyan-300">
                {metric.value}
                <span className="text-slate-400 dark:text-slate-500 font-sans ml-0.5">{metric.suffix}</span>
              </div>
              
              {/* Metric Label */}
              <h3 className="font-display font-semibold text-sm sm:text-base text-slate-800 dark:text-white">
                {metric.label}
              </h3>
              
              {/* Supporting details description */}
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {metric.subText}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
