import React, { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  BarChart, 
  ChevronRight, 
  CheckCircle2, 
  Sparkles, 
  Code2, 
  Workflow, 
  Database,
  ArrowRight
} from 'lucide-react';
import { curriculumModules } from '../data/curriculumData';

export default function Curriculum() {
  const [selectedModuleId, setSelectedModuleId] = useState(1);

  const selectedModule = curriculumModules.find(m => m.id === selectedModuleId) || curriculumModules[0];

  const handleScrollToRegister = (e) => {
    e.preventDefault();
    const element = document.querySelector('#register');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="courses" className="py-20 md:py-28 relative bg-slate-950">
      {/* Glow background */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-600/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
            <span>Structured 12-Week Curriculum</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Comprehensive, Beginner-Friendly <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400">
              Module-by-Module Progression
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Built from the ground up for college students, fresh grads, and young professionals. Progress systematically from mental models to deploying automated AI agents and custom knowledge systems.
          </p>
        </div>

        {/* Curriculum Interactive Explorer */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Module List (Navigation) */}
          <div className="lg:col-span-5 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 px-2 mb-3">
              Select a Module to Inspect
            </p>
            {curriculumModules.map((module) => {
              const isSelected = module.id === selectedModuleId;
              return (
                <button
                  key={module.id}
                  type="button"
                  onClick={() => setSelectedModuleId(module.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between group ${
                    isSelected
                      ? 'bg-slate-900 border-indigo-500/80 shadow-lg shadow-indigo-950/40 ring-1 ring-indigo-500/50'
                      : 'bg-slate-900/50 border-slate-800/80 hover:bg-slate-900/80 hover:border-slate-700'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-[11px] font-mono font-semibold px-2 py-0.5 rounded ${
                        isSelected
                          ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40'
                          : 'bg-slate-800 text-slate-400'
                      }`}>
                        {module.tag}
                      </span>
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {module.duration}
                      </span>
                    </div>
                    <h3 className={`font-semibold text-sm sm:text-base ${
                      isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white'
                    }`}>
                      {module.title}
                    </h3>
                  </div>
                  <ChevronRight className={`w-5 h-5 shrink-0 transition-transform ${
                    isSelected ? 'text-indigo-400 translate-x-1' : 'text-slate-600 group-hover:text-slate-400'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right: Selected Module Details Card */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden">
              
              {/* Top ambient glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] pointer-events-none rounded-full" />

              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-800/80">
                <div className="flex items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
                    {selectedModule.tag}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
                    {selectedModule.level}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span className="font-medium text-slate-200">{selectedModule.duration} of guided learning</span>
                </div>
              </div>

              {/* Title & Summary */}
              <div className="mt-6">
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {selectedModule.title}
                </h3>
                <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                  {selectedModule.summary}
                </p>
              </div>

              {/* Topics Breakdown */}
              <div className="mt-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  Core Weekly Topics & Practical Concepts:
                </h4>
                <div className="space-y-2.5">
                  {selectedModule.topics.map((topic, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/70 flex items-start gap-3 text-sm text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hands-on Deliverable Box */}
              <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-indigo-950/60 to-purple-950/40 border border-indigo-500/30">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-300 shrink-0">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-indigo-300">
                      Module Capstone Deliverable
                    </span>
                    <p className="text-sm font-semibold text-white mt-0.5">
                      {selectedModule.deliverable}
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      {selectedModule.highlight}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Action */}
              <div className="mt-6 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-slate-400">
                  Starter code, templates, and reference guides included.
                </span>
                <a
                  href="#register"
                  onClick={handleScrollToRegister}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-md"
                >
                  <span>Enquire for Next Cohort</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
