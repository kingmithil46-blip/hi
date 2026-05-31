import { useState } from 'react';
import { PRICING_PLANS } from '../data';
import DynamicIcon from './DynamicIcon';

interface PricingProps {
  onSelectPlan: (planName: string, billingCycle: string) => void;
}

export default function Pricing({ onSelectPlan }: PricingProps) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');

  return (
    <section
      id="pricing"
      className="py-20 md:py-28 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Discount Toggle */}
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16" id="pricing-header">
          <div className="inline-flex items-center gap-1.5 bg-indigo-505/10 dark:bg-indigo-500/20 px-3.5 py-1 rounded-full text-indigo-700 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider font-mono">
            UPFRONT FLAT PRICES
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            Transparent Pricing Structured for ROI
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-sans">
            Completely transparent, flat-rate pricing guides built around clear sprint milestones. Save up to **15%** immediately when choosing our annual security support subscription plans.
          </p>

          {/* Toggle Button Container */}
          <div className="pt-4 flex items-center justify-center gap-3" id="billing-selector-wrapper">
            <span className={`text-xs font-bold leading-none ${billingCycle === 'monthly' ? 'text-indigo-650 dark:text-indigo-400' : 'text-slate-400 dark:text-slate-500'}`}>
              Billed Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative w-12 h-6.5 bg-slate-200 dark:bg-slate-800 rounded-full transition-colors p-1 flex items-center cursor-pointer"
              aria-label="Toggle Billing Cycle"
              id="billing-cycle-switch"
            >
              <div
                className={`w-4.5 h-4.5 bg-indigo-600 dark:bg-indigo-500 rounded-full shadow transition-all ${
                  billingCycle === 'yearly' ? 'translate-x-5.5' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`flex items-center gap-1.5 text-xs font-bold leading-none ${billingCycle === 'yearly' ? 'text-indigo-650 dark:text-indigo-400' : 'text-slate-400 dark:text-slate-500'}`}>
              Billed Annually
              <span className="bg-emerald-150 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-[10px] font-mono px-2 py-0.5 rounded-full">
                Save ~15%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Layout Cards Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch" id="pricing-plans-grid">
          {PRICING_PLANS.map((plan) => {
            const currentPrice = billingCycle === 'monthly' ? plan.priceMonthly : plan.priceYearly;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-6 sm:p-8 border flex flex-col justify-between transition-all duration-300 ${
                  plan.isPopular
                    ? 'bg-slate-50 dark:bg-white/10 border-2 border-indigo-600/80 dark:border-cyan-500/50 shadow-xl'
                    : 'bg-white dark:bg-white/5 border-slate-200/60 dark:border-white/10 shadow-sm hover:shadow-lg'
                }`}
                id={`pricing-card-${plan.id}`}
              >
                {/* Popular Card Banner tag overlay */}
                {plan.isPopular && (
                  <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white text-[10px] uppercase tracking-widest font-bold px-4 py-1.5 rounded-full shadow-md">
                    Most Popular Sprints
                  </div>
                )}

                <div>
                  
                  {/* Name and Tag */}
                  <div className="space-y-2 pb-6">
                    <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans min-h-[48px]">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Pricing Number Row */}
                  <div className="pb-8 border-b border-slate-100 dark:border-white/10 flex items-baseline gap-1" id={`price-display-${plan.id}`}>
                    <span className="text-sm font-semibold text-slate-400 dark:text-slate-500 font-mono">₹</span>
                    <span className="text-4xl sm:text-5xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500 dark:from-indigo-400 dark:to-cyan-300 tracking-tight">
                      {currentPrice.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs font-medium text-slate-400 dark:text-slate-500">
                      / month
                    </span>
                  </div>

                  {/* Bullet features specifications checklist */}
                  <ul className="space-y-4 pt-8 pb-8" id={`features-list-${plan.id}`}>
                    {plan.features.map((feature, fIdx) => (
                      <li
                        key={fIdx}
                        className={`flex items-start gap-3 text-xs leading-tight ${
                          feature.included ? 'text-slate-600 dark:text-slate-350' : 'text-slate-400 dark:text-slate-650 line-through decoration-slate-300 dark:decoration-slate-800'
                        }`}
                      >
                        <div className="flex-shrink-0 mt-0.5">
                          {feature.included ? (
                            <DynamicIcon name="Check" className="text-cyan-500 dark:text-cyan-400 w-4 h-4 bg-cyan-50 dark:bg-cyan-500/10 rounded-full p-0.5" />
                          ) : (
                            <div className="w-4 h-4 rounded-full border border-slate-250 dark:border-white/10 flex items-center justify-center text-[8px] font-bold text-slate-300 dark:text-slate-700">
                              &mdash;
                            </div>
                          )}
                        </div>
                        <span>{feature.text}</span>
                      </li>
                    ))}
                  </ul>

                </div>

                {/* Direct Action Link passing dynamic options */}
                <button
                  onClick={() => onSelectPlan(plan.name, billingCycle)}
                  className={`w-full font-bold text-sm py-4 rounded-2xl transition-all cursor-pointer ${
                    plan.isPopular
                      ? 'bg-indigo-600 dark:bg-cyan-500 hover:bg-indigo-700 dark:hover:bg-cyan-600 text-white shadow-lg shadow-indigo-600/15'
                      : 'bg-slate-50 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 text-slate-800 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10'
                  }`}
                  id={`pricing-booking-btn-${plan.id}`}
                >
                  {plan.ctaText}
                </button>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
