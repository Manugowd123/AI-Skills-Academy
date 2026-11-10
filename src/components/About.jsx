import React from 'react';
import { 
  Building2, 
  Target, 
  Lightbulb, 
  ShieldCheck, 
  Code, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function About() {
  const values = [
    {
      title: "Project-First Pedagogy",
      description: "We believe true skill comes from debugging, testing, and shipping working applications—not from passively memorizing slide decks or watching videos."
    },
    {
      title: "Accessible & Math-Demystified",
      description: "You do not need a machine learning Ph.D. to build powerful AI applications. We focus on modern API tools, prompt architecture, and practical engineering."
    },
    {
      title: "Workplace & Academic Relevance",
      description: "Everything taught connects directly to realistic productivity gains, coursework acceleration, and software development challenges facing modern teams."
    },
    {
      title: "Ethical & Responsible AI",
      description: "We teach safety guardrails, hallucination prevention, data privacy, and cost-efficient token architectures so your AI tools are safe and sustainable."
    }
  ];

  const handleScrollToRegister = (e) => {
    e.preventDefault();
    const element = document.querySelector('#register');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 md:py-28 relative bg-slate-950 border-t border-slate-900">
      {/* Glow background */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-cyan-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Building2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>About AI Skills Academy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Empowering the Next Generation of <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400">
              Practical AI Builders
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            AI Skills Academy was founded with a single mission: to cut through the noise of AI hype and provide college students, fresh graduates, and young professionals with the practical, hands-on capabilities required in today's digital landscape.
          </p>
        </div>

        {/* Story & Philosophy Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                <Target className="w-5 h-5 text-indigo-400" />
                Our Core Philosophy
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                The modern AI wave is not just about using chatbots—it is about orchestrating software, APIs, and automated workflows. Traditional academic curriculums often move too slowly to reflect state-of-the-art tools, while random online tutorials lack cohesive structure and project depth.
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                AI Skills Academy fills that exact gap. We provide a structured, mentor-supported learning environment where learners build tangible proof-of-work: from custom document retrieval engines to autonomous research agents and workflow automations.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-indigo-950/50 to-slate-900 border border-indigo-500/30">
              <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-cyan-400" />
                Commitment to Transparent Education
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mt-2">
                We believe in realistic education. We do not make inflated guarantees or market artificial placement shortcuts. Instead, we equip you with real technical competency, clean code repositories, and deployable projects that speak for themselves.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all duration-300 group hover:shadow-lg"
              >
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center font-mono text-xs font-bold text-indigo-400 mb-4 group-hover:bg-indigo-500/20 transition-colors">
                  0{idx + 1}
                </div>
                <h4 className="text-base font-bold text-white group-hover:text-indigo-200 transition-colors">
                  {val.title}
                </h4>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Quick Link to Registration */}
        <div className="mt-12 text-center">
          <a
            href="#register"
            onClick={handleScrollToRegister}
            className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors group"
          >
            <span>Have questions about our teaching methodology? Enquire with our admissions team</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
