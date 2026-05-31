import { TESTIMONIALS_DATA } from '../data';
import DynamicIcon from './DynamicIcon';

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16" id="testimonials-header">
          <div className="inline-flex items-center gap-1.5 bg-indigo-500/10 dark:bg-indigo-500/20 px-3.5 py-1 rounded-full text-indigo-700 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider font-mono">
            SUCCESS REVELATIONS
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            Loved By Ambitious Founders and Tech Teams
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-405 font-sans">
            Hear directly from our client portfolio. We don't just write functional code &mdash; we deliver strategic competitive advantages that directly impact core margins.
          </p>
        </div>

        {/* Testimonials Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="testimonials-grid">
          {TESTIMONIALS_DATA.map((client) => (
            <div
              key={client.id}
              className="bg-white dark:bg-white/5 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-slate-200/50 dark:border-white/10 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              id={`client-testimonial-card-${client.id}`}
            >
              <div className="space-y-6">
                
                {/* Visual Stars Rating Row */}
                <div className="flex items-center gap-1 text-cyan-500 dark:text-cyan-400" id={`stars-${client.id}`}>
                  {Array.from({ length: client.rating }).map((_, idx) => (
                    <span key={idx}>
                      <DynamicIcon name="Star" className="w-4 h-4 fill-current text-amber-500 dark:text-cyan-400" />
                    </span>
                  ))}
                </div>

                {/* Client Quote Review */}
                <p className="text-slate-600 dark:text-slate-350 italic text-sm leading-relaxed font-sans cursor-default">
                  "{client.quote}"
                </p>

              </div>

              {/* Client Profile details */}
              <div className="flex items-center gap-4 pt-8 mt-6 border-t border-slate-100 dark:border-white/10">
                <img
                  src={client.avatarUrl}
                  alt={client.name}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover shadow-sm bg-slate-200"
                />
                <div>
                  <div className="font-display font-semibold text-sm text-slate-900 dark:text-white">
                    {client.name}
                  </div>
                  <div className="text-[11px] text-slate-400 dark:text-slate-500 font-mono">
                    {client.role} &mdash; <span className="text-indigo-600 dark:text-indigo-400">{client.company}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
