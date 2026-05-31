import { motion } from 'motion/react';
import DynamicIcon from './DynamicIcon';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      {/* Background ambient glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 dark:bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
          
          {/* Lead Tagline Banner */}
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 dark:bg-indigo-500/20 border border-indigo-500/20 dark:border-indigo-400/30 px-4 py-1.5 rounded-full text-indigo-600 dark:text-indigo-400 text-xs font-semibold tracking-wide" id="hero-tag">
            <DynamicIcon name="Sparkles" className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>#1 SENIOR DIGITAL WEB & APP AGENCY 2026</span>
          </div>

          {/* Powerful Headline */}
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white leading-[1.1] tracking-tight" id="hero-title">
            We Transform Ideas <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-400 dark:from-indigo-400 dark:to-cyan-300">
              Into Digital Reality
            </span>
          </h1>

          {/* Subheading explaining services */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-sans" id="hero-subtitle">
            NovaStack Solutions builds premium custom websites, high-converting portfolios, and native Android applications for ambitious startups worldwide. We deliver beautiful, speed-optimized digital platforms.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-sm text-slate-500 dark:text-slate-400" id="hero-quick-trust">
            <span className="flex items-center gap-1.5">
              <DynamicIcon name="Check" className="text-emerald-500 w-4 h-4" /> No monthly retainer locks
            </span>
            <span className="flex items-center gap-1.5">
              <DynamicIcon name="Check" className="text-emerald-500 w-4 h-4" /> 100% IP & source handover
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto" id="hero-cta-wrapper">
            <a
              href="#contact"
              className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-base px-8 py-4 rounded-2xl shadow-xl shadow-indigo-600/20 hover:shadow-indigo-600/35 transition-all text-center flex items-center justify-center gap-2"
              id="hero-cta-primary"
            >
              Get Free Consultation
              <DynamicIcon name="ArrowRight" className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
