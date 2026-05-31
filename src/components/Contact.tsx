import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import DynamicIcon from './DynamicIcon';

interface ContactProps {
  selectedService: string;
  selectedPlan: string;
}

export default function Contact({ selectedService, selectedPlan }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Custom Website Development',
    budget: 'Under ₹3,999 (Normal Page)',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync state if selections change from Services or Pricing clicks
  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  useEffect(() => {
    if (selectedPlan) {
      setFormData((prev) => ({
        ...prev,
        budget: selectedPlan === 'Normal Landing Page' ? 'Under ₹3,999 (Normal Page)' : selectedPlan === 'Custom Web Suite' ? '₹3,999 - ₹15,000 (Custom Page)' : '₹15,000 - ₹50,005 (Complete Suite)',
        message: `Inquiry regarding the "${selectedPlan}" flat-rate pricing model.`
      }));
    }
  }, [selectedPlan]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const getWhatsAppUrl = () => {
    const whatsappPhone = "917418185936";
    const textQuery = `Hello NovaStack Solutions,
I would like to start a project consultation request. Here are my details:

*Name*: ${formData.name}
*Email*: ${formData.email}
*Phone*: ${formData.phone || 'N/A'}
*Selected Service*: ${formData.service}
*Estimated Budget/Customization*: ${formData.budget}
*Project Specifications*: ${formData.message || 'N/A'}`;

    return `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(textQuery)}`;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    
    // Simulate server-side submit wait and trigger redirection
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      const url = getWhatsAppUrl();
      window.open(url, '_blank');
    }, 1000);
  };

  const SERVICES_LIST = [
    'Custom Website Development',
    'Android App Development',
    'UI/UX Design',
    'Website Maintenance & Support',
    'E-commerce Store Development',
    'SEO & Brand Strategy'
  ];

  const BUDGETS_LIST = [
    'Under ₹3,999 (Normal Page)',
    '₹3,999 - ₹15,000 (Custom Page)',
    '₹15,000 - ₹50,005 (Complete Suite)',
    'Over ₹50,005 (Enterprise)'
  ];

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-white dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-[-10%] w-[30%] h-[30%] bg-indigo-500/5 dark:bg-indigo-500/1 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Contact Info and Direct Triggers (5 cols) */}
          <div className="lg:col-span-5 space-y-8 lg:space-y-10" id="contact-info-panel">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 bg-indigo-500/10 dark:bg-indigo-500/20 px-3.5 py-1 rounded-full text-indigo-700 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider font-mono">
                GET STARTED TODAY
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
                Let's Build Something Great Together
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                Ready to accelerate your startup or business? Fill out our visual consulting sheet or launch direct messages on WhatsApp. Our average feedback response time is under **2 hours**.
              </p>
            </div>

            {/* Core Direct Channels lists */}
            <div className="space-y-6" id="personal-channels">
              
              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/917418185936"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 dark:bg-emerald-500/1 hover:bg-emerald-500/10 dark:hover:bg-emerald-500/5 transition-all group"
                id="whatsapp-cta-banner"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/15">
                  <DynamicIcon name="MessageSquare" className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-bold">
                    FASTEST RESPONSE TIME
                  </div>
                  <div className="font-semibold text-slate-800 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    Chat on WhatsApp Live
                  </div>
                </div>
                <DynamicIcon name="ArrowRight" className="w-4 h-4 text-emerald-500 ml-auto transition-transform group-hover:translate-x-1" />
              </a>

              {/* Email channel */}
              <div className="flex items-center gap-4 p-5 rounded-2xl border border-slate-200/55 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-950/50 hover:bg-slate-100/50 transition-all">
                <div className="w-11 h-11 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                  <DynamicIcon name="Mail" className="w-4.5 h-4.5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400 dark:text-slate-500">
                    EMAIL INBOUNDS
                  </div>
                  <a
                    href="mailto:projects@novastack.solutions"
                    className="font-semibold text-sm sm:text-base text-slate-800 hover:text-indigo-600 dark:text-slate-100 dark:hover:text-indigo-400"
                  >
                    projects@novastack.solutions
                  </a>
                </div>
              </div>

              {/* Phone channel */}
              <div className="flex items-center gap-4 p-5 rounded-2xl border border-slate-200/55 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-950/50 hover:bg-slate-100/50 transition-all">
                <div className="w-11 h-11 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                  <DynamicIcon name="Phone" className="w-4.5 h-4.5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400 dark:text-slate-500">
                    OFFICE DIRECT
                  </div>
                  <a
                    href="tel:+917418185936"
                    className="font-semibold text-sm sm:text-base text-slate-800 hover:text-indigo-600 dark:text-slate-100 dark:hover:text-indigo-400"
                  >
                    +91 74181 85936
                  </a>
                </div>
              </div>

            </div>

            {/* Social linkages (Github, LinkedIn, Twitter) */}
            <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800/60">
              <span className="text-[10px] font-mono uppercase text-slate-450 dark:text-slate-500 block tracking-widest">
                FOLLOW OUR SPRINT COMMITS
              </span>
              <div className="flex items-center gap-3" id="social-icons-wrapper">
                {['Github', 'Linkedin', 'Twitter'].map((soc) => (
                  <a
                    key={soc}
                    href={`https://example.com/novastack-${soc.toLowerCase()}`}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-slate-50 dark:bg-slate-950 hover:bg-indigo-600 hover:text-white border border-slate-200/60 dark:border-slate-800/60 rounded-xl text-slate-500 dark:text-slate-405 transition-all shadow-sm"
                    aria-label={`Visit our ${soc}`}
                  >
                    <DynamicIcon name={soc} className="w-4.5 h-4.5" />
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right: Contact Form Cards area (7 cols) */}
          <div className="lg:col-span-7 bg-slate-50 dark:bg-white/5 p-6 sm:p-10 rounded-3xl border border-slate-200/50 dark:border-white/10 shadow-md backdrop-blur-sm">
            
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                // Form layout view
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  id="consultation-form"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name input */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-bold text-slate-750 dark:text-slate-300 uppercase tracking-wider font-mono">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full bg-white dark:bg-slate-950 border border-slate-250 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 dark:focus:border-cyan-400 outline-none text-slate-900 dark:text-white transition-all"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="space-y-2">
                       <label htmlFor="email" className="text-xs font-bold text-slate-755 dark:text-slate-300 uppercase tracking-wider font-mono">
                         Email Address <span className="text-rose-500">*</span>
                       </label>
                       <input
                         type="email"
                         name="email"
                         id="email"
                         required
                         value={formData.email}
                         onChange={handleInputChange}
                         placeholder="john@example.com"
                         className="w-full bg-white dark:bg-slate-950 border border-slate-250 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 dark:focus:border-cyan-400 outline-none text-slate-900 dark:text-white transition-all"
                       />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {/* Phone Number Input */}
                    <div className="space-y-2">
                       <label htmlFor="phone" className="text-xs font-bold text-slate-755 dark:text-slate-300 uppercase tracking-wider font-mono">
                         Phone Number
                       </label>
                       <input
                         type="tel"
                         name="phone"
                         id="phone"
                         value={formData.phone}
                         onChange={handleInputChange}
                         placeholder="+91 98765 43210"
                         className="w-full bg-white dark:bg-slate-950 border border-slate-250 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 dark:focus:border-cyan-400 outline-none text-slate-900 dark:text-white transition-all"
                       />
                    </div>

                    {/* Services Selector dropdown */}
                    <div className="space-y-2">
                      <label htmlFor="service" className="text-xs font-bold text-slate-755 dark:text-slate-300 uppercase tracking-wider font-mono">
                        Selected Service
                      </label>
                      <select
                        name="service"
                        id="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full bg-white dark:bg-slate-955 border border-slate-250 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 dark:focus:border-cyan-400 outline-none text-slate-800 dark:text-slate-300 transition-all cursor-pointer"
                      >
                        {SERVICES_LIST.map((srv) => (
                          <option key={srv} value={srv} className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white">{srv}</option>
                        ))}
                      </select>
                    </div>

                    {/* Budget Selector dropdown */}
                    <div className="space-y-2">
                      <label htmlFor="budget" className="text-xs font-bold text-slate-755 dark:text-slate-300 uppercase tracking-wider font-mono">
                        Estimated Budget
                      </label>
                      <select
                        name="budget"
                        id="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full bg-white dark:bg-slate-955 border border-slate-250 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 dark:focus:border-cyan-400 outline-none text-slate-800 dark:text-slate-300 transition-all cursor-pointer"
                      >
                        {BUDGETS_LIST.map((bgt) => (
                          <option key={bgt} value={bgt} className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white">{bgt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message Input text area */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-bold text-slate-750 dark:text-slate-300 uppercase tracking-wider font-mono">
                      Project Specifications
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Briefly describe your objectives, timelines, or designs..."
                      className="w-full bg-white dark:bg-slate-950 border border-slate-250 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 dark:focus:border-cyan-400 outline-none text-slate-900 dark:text-white transition-all resize-y"
                    />
                  </div>

                  {/* Form Submission button showing active progress spinners */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-indigo-600/15 hover:shadow-indigo-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                    id="form-submit-btn"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Validating Ticket...</span>
                      </>
                    ) : (
                      <>
                        <DynamicIcon name="Send" className="w-4.5 h-4.5" />
                        <span>Submit Consultation Request</span>
                      </>
                    )}
                  </button>

                </motion.form>
              ) : (
                // Success Confirmation sheet
                <motion.div
                  key="success-container"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10 space-y-6"
                  id="consultation-success-panel"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center shadow-md">
                    <DynamicIcon name="ShieldCheck" className="w-8 h-8 font-bold" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white">
                      Consultation Ticket Created
                    </h3>
                    <p className="text-sm font-sans text-slate-600 dark:text-slate-455 max-w-md mx-auto">
                      Thank you for submitting, **{formData.name}**! Our senior lead developer is reviewing your **{formData.service}** specification and will email you inside the next 2 hours.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200/50 dark:border-white/10 bg-white dark:bg-slate-950 p-4 max-w-sm mx-auto text-left space-y-2.5 shadow-sm">
                    <div className="text-[10px] font-mono text-slate-400 dark:text-slate-500 font-bold uppercase">
                      TICKET PARAMETERS DECLARED:
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      <strong>Budget Class:</strong> {formData.budget}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      <strong>Email:</strong> {formData.email}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      <strong>Date:</strong> {new Date().toLocaleDateString()}
                    </div>
                  </div>

                  <div className="max-w-sm mx-auto flex flex-col gap-3">
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-emerald-500/15 hover:shadow-emerald-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <DynamicIcon name="MessageSquare" className="w-5 h-5 fill-current text-white" />
                      <span>Send via WhatsApp Chat</span>
                    </a>
                    
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs font-semibold text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors mt-2"
                      id="submit-another-btn"
                    >
                      Modify parameters & submit another request
                    </button>
                  </div>

                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
