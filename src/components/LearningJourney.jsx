import React from 'react';
import { 
  Milestone, 
  CheckCircle2, 
  Compass, 
  Target, 
  ArrowRight, 
  Sparkles,
  Quote
} from 'lucide-react';
import { learningJourneyStages } from '../data/learningJourneyData';

export default function LearningJourney() {
  const handleScrollToRegister = (e) => {
    e.preventDefault();
    const element = document.querySelector('#register');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="journey" className="py-20 md:py-28 relative bg-slate-950/70 border-t border-slate-900">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-600/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5 text-cyan-400" />
            <span>Structured Growth Path</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Your 4-Phase Journey: <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400">
              Beginner to Practical Project Builder
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            A clear, deliberate progression that takes you from understanding basic LLM fundamentals to deploying complete, autonomous AI systems and building a public portfolio.
          </p>
        </div>

        {/* Journey Timeline */}
        <div className="mt-16 space-y-8 relative">
          
          {/* Vertical connecting line for desktop */}
          <div className="hidden lg:block absolute left-8 top-12 bottom-12 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-500 opacity-30" />

          {learningJourneyStages.map((stage, idx) => (
            <div
              key={stage.step}
              className="relative rounded-2xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 hover:border-slate-700 transition-all duration-300 group hover:shadow-xl hover:shadow-indigo-950/20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Step / Timeline Badge */}
                <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-start justify-between lg:justify-start gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center font-mono font-bold text-white text-lg shadow-md shadow-indigo-600/30 group-hover:scale-105 transition-transform">
                      {stage.step}
                    </div>
                    <div>
                      <span className="block text-xs font-mono font-bold text-cyan-400">
                        {stage.timeline}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        {stage.statusPill}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Main Content */}
                <div className="lg:col-span-9 space-y-4">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
                      {stage.phase}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 group-hover:text-indigo-200 transition-colors">
                      {stage.title}
                    </h3>
                    <p className="mt-2 text-slate-300 text-sm leading-relaxed">
                      {stage.description}
                    </p>
                  </div>

                  {/* Mindset Shift Quote */}
                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-start gap-3 text-xs sm:text-sm text-indigo-200 italic">
                    <Quote className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5 not-italic" />
                    <span>{stage.mindset}</span>
                  </div>

                  {/* Concrete Milestones */}
                  <div className="pt-2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                      <Target className="w-3.5 h-3.5 text-cyan-400" />
                      Key Practical Milestones:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {stage.milestones.map((milestone, mIdx) => (
                        <div
                          key={mIdx}
                          className="p-3 rounded-lg bg-slate-950/50 border border-slate-800/60 text-xs text-slate-300 flex items-start gap-2"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{milestone}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>

        {/* Bottom CTA Card */}
        <div className="mt-16 text-center bg-gradient-to-r from-indigo-950/40 via-purple-950/40 to-slate-900 border border-slate-800 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white">
            Ready to Begin Phase 1?
          </h3>
          <p className="mt-2 text-sm text-slate-300 max-w-xl mx-auto">
            Take the first step toward building practical, production-level AI capabilities. Enquire today for cohort schedules and curriculum details.
          </p>
          <div className="mt-6">
            <a
              href="#register"
              onClick={handleScrollToRegister}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-lg shadow-indigo-600/25 transition-all"
            >
              <span>Apply for Upcoming Cohort</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
