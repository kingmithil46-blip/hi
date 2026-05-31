import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_DATA } from '../data';
import DynamicIcon from './DynamicIcon';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-4 mb-16" id="faq-header">
          <div className="inline-flex items-center gap-1.5 bg-indigo-500/10 dark:bg-indigo-500/20 px-3.5 py-1 rounded-full text-indigo-700 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider font-mono">
            QUICK CLARIFICATIONS
          </div>
          <h2 className="font-display font-bold text-3xl text-slate-900 dark:text-white tracking-tight">
            Frequently Asked Core Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-sans">
            Have questions regarding specifications or licensing details? Here are high-level outlines. For complex custom integration queries, schedule a custom consultation!
          </p>
        </div>

        {/* FAQ Accordion Lists */}
        <div className="space-y-4" id="faq-accordions-wrapper">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="bg-white dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-slate-200/50 dark:border-white/10 overflow-hidden shadow-sm transition-all duration-300"
                id={`faq-accordion-item-${idx}`}
              >
                {/* Accordion clickable header */}
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-display font-semibold text-sm sm:text-base text-slate-800 hover:text-indigo-650 dark:text-slate-200 dark:hover:text-cyan-400 cursor-pointer"
                  aria-expanded={isOpen}
                  id={`faq-header-btn-${idx}`}
                >
                  <span>{item.question}</span>
                  <div className={`p-1.5 rounded-lg bg-slate-50 dark:bg-white/10 text-slate-400 dark:text-slate-550 transition-transform duration-300 ${isOpen ? 'rotate-180 text-indigo-600 dark:text-cyan-400' : ''}`}>
                    <DynamicIcon name="ChevronDown" className="w-4 h-4" />
                  </div>
                </button>

                {/* Animated Accordion answer wrapper */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                      id={`faq-answer-block-${idx}`}
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-white/10 text-xs sm:text-sm text-slate-600 dark:text-slate-405 leading-relaxed font-sans">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
