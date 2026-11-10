import React, { useState } from 'react';
import { 
  FolderGit2, 
  Layers, 
  ExternalLink, 
  Cpu, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  Filter
} from 'lucide-react';
import { handsOnProjects } from '../data/projectsData';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Knowledge Systems', 'AI Agents', 'Developer Tools', 'Workflow Automation', 'Interactive Tools'];

  const filteredProjects = selectedCategory === 'All'
    ? handsOnProjects
    : handsOnProjects.filter(p => p.category === selectedCategory);

  const handleScrollToRegister = (e) => {
    e.preventDefault();
    const element = document.querySelector('#register');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-20 md:py-28 relative bg-slate-950/70 border-t border-slate-900">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Real-World Proof of Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Hands-On Projects You Will <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400">
              Build & Showcase
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Every project has a clear deliverable, starter code repository, and live demo architecture. Graduate with a production-ready portfolio that proves you can build practical AI applications.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                  : 'bg-slate-900/90 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700 transition-all duration-300 group hover:shadow-xl hover:shadow-indigo-950/30 hover:-translate-y-1"
            >
              <div>
                {/* Header with Category & Difficulty */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-md bg-slate-800 text-indigo-300 border border-slate-700/60">
                    {project.category}
                  </span>
                  <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${
                    project.difficulty === 'Beginner-Friendly'
                      ? 'bg-emerald-950/70 text-emerald-400 border border-emerald-800/40'
                      : project.difficulty === 'Intermediate'
                      ? 'bg-indigo-950/70 text-indigo-400 border border-indigo-800/40'
                      : 'bg-purple-950/70 text-purple-400 border border-purple-800/40'
                  }`}>
                    {project.difficulty}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-indigo-200 transition-colors">
                  {project.title}
                </h3>

                {/* Summary */}
                <p className="mt-3 text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {project.summary}
                </p>

                {/* Tech Stack Pills */}
                <div className="mt-5">
                  <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-2">
                    Core Technologies
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-950 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Learnings */}
                <div className="mt-5 pt-4 border-t border-slate-800/80">
                  <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-2">
                    Key Practical Competencies:
                  </p>
                  <ul className="space-y-1.5">
                    {project.keyLearnings.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono text-[11px]">
                  {project.metric}
                </span>
                <span className="text-indigo-400 group-hover:text-indigo-300 font-medium flex items-center gap-1 transition-colors">
                  Included in Lab <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 text-center">
          <p className="text-sm text-slate-400">
            All projects are built step-by-step with instructor guidance and comprehensive reference code repositories.
          </p>
          <div className="mt-4">
            <a
              href="#register"
              onClick={handleScrollToRegister}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 transition-all shadow-sm"
            >
              <span>Build These in the Next Cohort</span>
              <ArrowRight className="w-4 h-4 text-cyan-400" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
