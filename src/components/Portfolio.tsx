import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS_DATA } from '../data';
import { Project } from '../types';
import DynamicIcon from './DynamicIcon';
import { Maximize2, ChevronLeft, ChevronRight, X, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<'all' | 'web' | 'app' | 'ux'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Websites & Portals' },
    { id: 'app', label: 'Mobile Applications' },
    { id: 'ux', label: 'UI/UX Design' }
  ];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeTab === 'all') return true;
    return project.category === activeTab;
  });

  const handleNext = () => {
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex((p) => p.id === selectedProject.id);
    if (currentIndex !== -1) {
      const nextIndex = (currentIndex + 1) % filteredProjects.length;
      setSelectedProject(filteredProjects[nextIndex]);
    }
  };

  const handlePrev = () => {
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex((p) => p.id === selectedProject.id);
    if (currentIndex !== -1) {
      const prevIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
      setSelectedProject(filteredProjects[prevIndex]);
    }
  };

  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, filteredProjects]);

  return (
    <section
      id="portfolio"
      className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12" id="portfolio-header">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 bg-indigo-500/10 dark:bg-indigo-500/20 px-3.5 py-1 rounded-full text-indigo-700 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider font-mono">
              CURATED MASTERPIECES
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
              Case Studies Defining Digital Quality
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-400 font-sans">
              Take a self-directed tour of our previous web development and mobile application deployments. No empty visuals - every deployment is built to generate real commerce results.
            </p>
          </div>

          {/* Dynamic Switch Filter Tabs */}
          <div className="flex flex-wrap gap-2.5 p-1.5 bg-white dark:bg-white/5 rounded-2xl border border-slate-200/60 dark:border-white/10 self-start md:self-end" id="portfolio-filter-tabs">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id as any);
                  // Close modal if tab change makes selected project disappear from view
                  if (selectedProject && tab.id !== 'all' && PROJECTS_DATA.find(p => p.id === selectedProject.id)?.category !== tab.id) {
                    setSelectedProject(null);
                  }
                }}
                className={`px-4.5 py-2.5 rounded-xl text-xs font-bold font-sans transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-indigo-650 text-white shadow-md'
                    : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Project Grid with Framer Motion transitions */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
          id="portfolio-projects-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                key={project.id}
                className="group relative bg-white dark:bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-200/50 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                id={`project-card-${project.id}`}
              >
                
                {/* Image Wrapper (Clickable to open high resolution modal) */}
                <div 
                  onClick={() => setSelectedProject(project)}
                  className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-950 cursor-pointer group"
                >
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Dark transparent overlay on hover with magnification icon */}
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <Maximize2 className="w-5 h-5 pointer-events-none" />
                    </div>
                  </div>
                  
                  {/* Result Metric Banner Overlay */}
                  <div className="absolute top-4 right-4 bg-emerald-500 text-white font-bold text-xs px-3.5 py-1.5 rounded-xl shadow-md flex items-center gap-1 z-10">
                    <DynamicIcon name="TrendingUp" className="w-3.5 h-3.5" />
                    <span>{project.results.value} ({project.results.label})</span>
                  </div>

                  {/* Category Pill Tag Overlay */}
                  <div className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur-md text-white/90 text-[10px] font-mono tracking-wider uppercase px-3 py-1 rounded-lg z-10">
                    {project.category === 'web' ? 'Web Application' : project.category === 'app' ? 'Mobile App' : 'UI UX System'}
                  </div>
                </div>

                {/* Content Case Study body info */}
                <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 font-mono font-medium">
                      Client: {project.client}
                    </div>
                    <h3 className="font-display font-semibold text-xl text-slate-900 dark:text-white leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech stack & Action Consultation button */}
                  <div className="space-y-5 pt-6 border-t border-slate-100 dark:border-white/10">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="bg-slate-50 dark:bg-white/5 text-slate-500 dark:text-slate-400 text-[11px] font-mono px-2.5 py-1 rounded-lg border border-slate-200/20 dark:border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between gap-4">
                      <a
                        href={project.projectLink}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-650 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors group/link"
                      >
                        <span>Inquire about custom solution</span>
                        <DynamicIcon name="ArrowRight" className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                      </a>

                      <button
                        onClick={() => setSelectedProject(project)}
                        className="p-2 text-slate-400 hover:text-slate-800 dark:text-slate-500 dark:hover:text-slate-200 transition-colors cursor-pointer"
                        title="View Full Resolution mockup"
                      >
                        <Maximize2 className="w-4.5 h-4.5" />
                      </button>
                    </div>
                  </div>

                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* High-Resolution Project Viewer Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop Blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/85 backdrop-blur-md cursor-zoom-out"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="relative w-full max-w-5xl bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-200/60 dark:border-white/10 z-10 flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-950/50 backdrop-blur-sm border border-white/10 text-white hover:bg-slate-950/80 transition-all flex items-center justify-center group cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>

              {/* Prev / Next Nav Buttons on Desktop */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-slate-950/40 backdrop-blur-sm border border-white/10 text-white hover:bg-slate-950/70 transition-all hidden md:flex items-center justify-center group cursor-pointer"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-slate-950/40 backdrop-blur-sm border border-white/10 text-white hover:bg-slate-950/70 transition-all hidden md:flex items-center justify-center group cursor-pointer"
                aria-label="Next project"
              >
                <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
              </button>

              {/* Left Side: High-Resolution Image Container */}
              <div className="relative md:w-3/5 aspect-video md:aspect-auto md:min-h-[480px] bg-slate-950 overflow-hidden flex items-center justify-center">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                
                {/* Result Metric Pill Overlay */}
                <div className="absolute bottom-4 left-4 bg-emerald-500 text-white font-bold text-xs sm:text-sm px-4 py-2 rounded-xl shadow-lg flex items-center gap-1.5 z-10">
                  <DynamicIcon name="TrendingUp" className="w-4 h-4" />
                  <span>{selectedProject.results.value} ({selectedProject.results.label})</span>
                </div>

                {/* Category Pill Tag Overlay */}
                <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white/95 text-xs font-mono tracking-wider uppercase px-3.5 py-1.5 rounded-xl border border-white/10">
                  {selectedProject.category === 'web' ? 'Web Application' : selectedProject.category === 'app' ? 'Mobile App' : 'UI UX System'}
                </div>
              </div>

              {/* Right Side: Description Content & Specifications */}
              <div className="md:w-2/5 p-6 sm:p-8 md:p-10 flex flex-col justify-between bg-white dark:bg-slate-900 overflow-y-auto max-h-[50vh] md:max-h-[85vh]">
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 font-mono tracking-widest uppercase">
                      Client: {selectedProject.client}
                    </span>
                    <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white leading-tight mt-1">
                      {selectedProject.title}
                    </h3>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest font-mono">
                      Project Overview
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest font-mono">
                      Architectural Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 text-xs font-mono px-3 py-1.5 rounded-xl border border-slate-200/50 dark:border-white/5 shadow-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Controls & Link inside modal */}
                <div className="pt-8 mt-6 border-t border-slate-100 dark:border-white/10 space-y-4">
                  {/* Next / Prev Mobile Nav Row */}
                  <div className="flex xl:hidden items-center justify-between gap-4 md:hidden mb-2">
                    <button
                      onClick={handlePrev}
                      className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-indigo-650 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors py-2 cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Prev</span>
                    </button>
                    <button
                      onClick={handleNext}
                      className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-indigo-650 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors py-2 cursor-pointer"
                    >
                      <span>Next</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  <a
                    href={selectedProject.projectLink}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-650 text-white font-bold text-sm py-4 px-6 rounded-2xl shadow-lg shadow-indigo-600/15 hover:shadow-indigo-600/25 transition-all text-center flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <span>Inquire About Blueprint</span>
                    <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
