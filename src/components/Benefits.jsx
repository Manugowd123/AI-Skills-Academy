import React from 'react';
import { 
  Zap, 
  Code, 
  Briefcase, 
  GitBranch, 
  CheckCircle2, 
  Terminal, 
  Wrench, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { courseBenefits } from '../data/benefitsData';

export default function Benefits() {
  const getIcon = (id) => {
    switch (id) {
      case 'practical-skills':
        return <Zap className="w-6 h-6 text-indigo-400" />;
      case 'hands-on-learning':
        return <Code className="w-6 h-6 text-purple-400" />;
      case 'real-world-applications':
        return <Briefcase className="w-6 h-6 text-cyan-400" />;
      case 'developer-readiness':
        return <GitBranch className="w-6 h-6 text-emerald-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-indigo-400" />;
    }
  };

  return (
    <section id="benefits" className="py-20 md:py-28 relative bg-slate-950/60 border-t border-slate-900">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-purple-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Wrench className="w-3.5 h-3.5 text-cyan-400" />
            <span>Why AI Skills Academy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Designed for Real Work, <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400">
              Not Just Academic Theory
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Most AI courses either drown you in complex mathematical proofs or stop at trivial chatbot prompts. We bridge the gap with actionable, hands-on engineering workflows you can use immediately.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {courseBenefits.map((benefit) => (
            <div
              key={benefit.id}
              className="relative rounded-2xl bg-slate-900/70 border border-slate-800 p-8 hover:border-slate-700 transition-all duration-300 group hover:shadow-xl hover:shadow-indigo-950/30 flex flex-col justify-between"
            >
              {/* Top Accent Gradient Border */}
              <div className={`absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r ${benefit.accent} opacity-40 group-hover:opacity-100 transition-opacity`} />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/90 border border-slate-700/60 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(benefit.id)}
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-800/70 text-slate-300 border border-slate-700/50">
                    {benefit.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-indigo-200 transition-colors">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                  {benefit.description}
                </p>

                {/* Bullet points */}
                <ul className="mt-6 space-y-3">
                  {benefit.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono">Active Lab Exercises</span>
                <span className="text-indigo-400 font-medium group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                  Weekly Deliverable <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Learning comparison pill box */}
        <div className="mt-16 rounded-2xl bg-slate-900/80 border border-slate-800 p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <Terminal className="w-5 h-5 text-indigo-400" />
                The Hands-On Academy Guarantee
              </h4>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                By the time you finish the program, you won't just know how to type queries into a web app. You will have built end-to-end RAG systems, orchestrated multi-agent automations, and built a tangible portfolio of deployed applications.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-center">
                <span className="text-2xl font-bold text-indigo-400">0%</span>
                <p className="text-xs text-slate-400 mt-1">Fluff or Outdated Theory</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-center">
                <span className="text-2xl font-bold text-cyan-400">6+</span>
                <p className="text-xs text-slate-400 mt-1">Deployable Code Repos</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
