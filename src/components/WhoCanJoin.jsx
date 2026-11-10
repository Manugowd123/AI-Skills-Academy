import React from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  TrendingUp, 
  Sparkles, 
  CheckCircle2, 
  Users, 
  Info,
  ShieldCheck
} from 'lucide-react';
import { targetAudiences, prerequisites } from '../data/whoCanJoinData';

export default function WhoCanJoin() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-indigo-400" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-cyan-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-purple-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-emerald-400" />;
      default:
        return <Users className="w-6 h-6 text-indigo-400" />;
    }
  };

  return (
    <section id="who-can-join" className="py-20 md:py-28 relative bg-slate-950">
      {/* Glow background */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-indigo-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Users className="w-3.5 h-3.5 text-cyan-400" />
            <span>Target Audience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Who Can Join & Succeed in <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400">
              AI Skills Academy?
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Whether you are on campus, starting your first job, or looking to automate your daily workplace workflow, this academy gives you practical, job-ready AI capabilities.
          </p>
        </div>

        {/* 4 Audience Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {targetAudiences.map((audience) => (
            <div
              key={audience.id}
              className="rounded-2xl bg-slate-900/80 border border-slate-800 p-8 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:shadow-indigo-950/30"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/90 border border-slate-700/60 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(audience.iconName)}
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700/60">
                    {audience.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-indigo-200 transition-colors">
                  {audience.title}
                </h3>
                <p className="text-xs font-medium text-indigo-400 mt-1">
                  {audience.subtitle}
                </p>

                <p className="mt-4 text-slate-300 text-sm leading-relaxed">
                  {audience.whyJoin}
                </p>

                <div className="mt-6 pt-5 border-t border-slate-800/80">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                    What You Gain from This Track:
                  </p>
                  <ul className="space-y-2.5">
                    {audience.keyOutcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>Tailored Mentorship</span>
                <span className="text-cyan-400">Zero Math Degree Needed</span>
              </div>
            </div>
          ))}
        </div>

        {/* Prerequisites & Transparency Box */}
        <div className="mt-16 rounded-2xl bg-slate-900/90 border border-slate-800 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                Course Prerequisites & Transparency
              </h3>
              <p className="text-xs text-slate-400">
                We believe in honest requirements so you know exactly what to expect before enrolling.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {prerequisites.map((req, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80">
                <span className="text-xs font-mono font-bold text-indigo-400 block mb-1">
                  0{i + 1}. Requirement
                </span>
                <h4 className="text-sm font-bold text-white mb-2">
                  {req.label}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {req.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
