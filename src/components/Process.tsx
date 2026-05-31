import { PROCESS_STEPS } from '../data';
import DynamicIcon from './DynamicIcon';

export default function Process() {
  return (
    <section
      id="process"
      className="py-20 md:py-28 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20" id="process-header">
          <div className="inline-flex items-center gap-1.5 bg-indigo-500/10 dark:bg-indigo-500/20 px-3.5 py-1 rounded-full text-indigo-700 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider font-mono">
            OUR TIMELINE & FLOW
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            How We Take Your Project From Vision to Launch
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
            Our optimized delivery sprints eliminate bloated communication loops. We commit to a systematic, high-fidelity timeline keeping you updated every single day.
          </p>
        </div>

        {/* Timelines list */}
        <div className="space-y-12 max-w-5xl mx-auto relative before:absolute before:top-4 before:bottom-4 before:left-6 md:before:left-1/2 before:w-0.5 before:bg-slate-100 dark:before:bg-white/10 pointer-events-none" id="process-timeline-wrapper">
          {PROCESS_STEPS.map((step, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={step.step}
                className={`relative flex flex-col md:flex-row items-start ${
                  isEven ? 'md:flex-row-reverse' : ''
                } gap-8 md:gap-0`}
                id={`process-item-${idx}`}
              >
                
                {/* Visual Timeline Circle Marker */}
                <div className="absolute left-6 md:left-1/2 -translate-x-[11px] w-6 h-6 rounded-full bg-cyan-400 border-[5px] border-white dark:border-slate-905 ring-4 ring-cyan-550/15 z-10" />

                {/* Left/Right Card Spacer on Desktop */}
                <div className="w-full md:w-1/2 px-0 md:px-12 pointer-events-auto">
                  
                  <div className="bg-slate-50 dark:bg-white/5 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-slate-200/50 dark:border-white/10 shadow-sm hover:shadow-lg transition-all duration-300">
                    
                    {/* Step Card Header info */}
                    <div className="flex items-center justify-between pb-4">
                      <div className="flex items-center gap-2.5">
                        <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-500/10 dark:bg-white/10 px-2.5 py-1 rounded-lg dark:text-cyan-400">
                          Phase {step.step}
                        </span>
                        <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                          {step.duration}
                        </span>
                      </div>
                      <div className="text-slate-200 dark:text-white/5 font-display font-medium text-4xl">
                        {step.step}
                      </div>
                    </div>

                    {/* Step Content */}
                    <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white pb-3">
                      {step.title}
                    </h3>
                    
                    <p className="text-sm text-slate-600 dark:text-slate-400 pb-5 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Concrete Deliverables Sub list */}
                    <div className="border-t border-slate-200/40 dark:border-white/10 pt-4 space-y-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
                        KEY PROCESS DELIVERABLES
                      </span>
                      <ul className="space-y-2">
                        {step.deliverables.map((del, dIdx) => (
                          <li key={dIdx} className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                </div>

                {/* Empty block on direct opposite side for grid alignment on desktop */}
                <div className="hidden md:block w-1/2" />

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
