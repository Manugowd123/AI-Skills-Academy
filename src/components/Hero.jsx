import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Terminal, 
  Cpu, 
  Bot, 
  Layers, 
  CheckCircle2, 
  Play, 
  Workflow, 
  Database,
  Code2,
  BookOpen
} from 'lucide-react';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('prompt');
  const [isExecuting, setIsExecuting] = useState(false);
  const [executionOutput, setExecutionOutput] = useState(null);

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRunDemo = () => {
    setIsExecuting(true);
    setExecutionOutput(null);
    setTimeout(() => {
      setIsExecuting(false);
      setExecutionOutput(activeTab);
    }, 600);
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/15 to-cyan-500/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-500/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-500/10 blur-[130px] pointer-events-none rounded-full" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Copy & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/70 border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm font-medium mb-6 shadow-sm shadow-indigo-500/10 animate-fade-in">
              <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span>Tailored for College Students, Fresh Grads & Young Pros</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400">Practical AI Skills</span> to Build, Automate & Accelerate.
            </h1>

            {/* Short Description */}
            <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Stop watching passive videos. Gain hands-on fluency in generative AI, structured prompt engineering, modern AI coding tools, and automated agent workflows through real-world projects.
            </p>

            {/* Two Primary CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#courses"
                onClick={(e) => handleScrollTo(e, '#courses')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/40 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <BookOpen className="w-5 h-5" />
                <span>Explore Courses</span>
              </a>

              <a
                href="#register"
                onClick={(e) => handleScrollTo(e, '#register')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all duration-200"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </a>
            </div>

            {/* Micro Trust & Realistic Commitments Strip */}
            <div className="mt-10 pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <p className="text-2xl font-bold text-white tracking-tight">6</p>
                <p className="text-xs text-slate-400 font-medium">Hands-On Projects</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl font-bold text-white tracking-tight">12</p>
                <p className="text-xs text-slate-400 font-medium">Focused Weeks</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl font-bold text-cyan-400 tracking-tight">100%</p>
                <p className="text-xs text-slate-400 font-medium">Practical & Project-First</p>
              </div>
            </div>

          </div>

          {/* Right Column: Attractive AI / Technology Visual Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer decorative glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500/30 via-purple-500/20 to-cyan-500/30 blur-xl opacity-80" />

              {/* Main Futuristic AI Sandbox Container */}
              <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-xl overflow-hidden">
                
                {/* Window Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                      ai-skills-workspace v2.4
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-950 text-emerald-400 border border-emerald-800/60">
                      Live Engine Active
                    </span>
                  </div>
                </div>

                {/* Interactive Mode Tabs */}
                <div className="grid grid-cols-3 border-b border-slate-800/80 bg-slate-950/40 text-xs font-medium">
                  <button
                    type="button"
                    onClick={() => { setActiveTab('prompt'); setExecutionOutput(null); }}
                    className={`py-2.5 px-2 text-center transition-colors flex items-center justify-center gap-1.5 ${
                      activeTab === 'prompt'
                        ? 'text-indigo-300 border-b-2 border-indigo-500 bg-indigo-500/10'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>Prompting</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => { setActiveTab('rag'); setExecutionOutput(null); }}
                    className={`py-2.5 px-2 text-center transition-colors flex items-center justify-center gap-1.5 ${
                      activeTab === 'rag'
                        ? 'text-cyan-300 border-b-2 border-cyan-500 bg-cyan-500/10'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Database className="w-3.5 h-3.5" />
                    <span>RAG Pipeline</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => { setActiveTab('agent'); setExecutionOutput(null); }}
                    className={`py-2.5 px-2 text-center transition-colors flex items-center justify-center gap-1.5 ${
                      activeTab === 'agent'
                        ? 'text-purple-300 border-b-2 border-purple-500 bg-purple-500/10'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Workflow className="w-3.5 h-3.5" />
                    <span>AI Agent</span>
                  </button>
                </div>

                {/* Interactive Workspace Body */}
                <div className="p-5 font-mono text-xs space-y-4">
                  
                  {activeTab === 'prompt' && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-[11px] text-slate-400">
                        <span>System Role: <span className="text-indigo-300 font-semibold">Structured JSON Extractor</span></span>
                        <span className="text-emerald-400 font-mono">temp: 0.1</span>
                      </div>
                      <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 space-y-1">
                        <p className="text-slate-500">// Few-Shot System Directive</p>
                        <p className="text-indigo-400">ROLE: "Senior Research Analyst"</p>
                        <p className="text-slate-300">INPUT: "Summarize Q3 cloud GPU cost dynamics for team lead"</p>
                        <p className="text-slate-400">SCHEMA: &#123; summary: string, actions: string[] &#125;</p>
                      </div>

                      {/* Execution simulation */}
                      {executionOutput === 'prompt' ? (
                        <div className="p-3 rounded-lg bg-indigo-950/40 border border-indigo-500/30 text-emerald-300 space-y-1 animate-in fade-in duration-300">
                          <p className="text-slate-400 text-[10px] flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                            Validation passed • 184 tokens • 48ms
                          </p>
                          <pre className="text-[11px] text-indigo-200 whitespace-pre-wrap">
{`{
  "summary": "Inference costs down 24% with quantization",
  "actions": ["Switch to 8-bit cache", "Cap token limits"]
}`}
                          </pre>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between pt-1">
                          <span className="text-slate-500 text-[11px]">Ready to benchmark model response...</span>
                          <button
                            type="button"
                            onClick={handleRunDemo}
                            disabled={isExecuting}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-sans text-xs font-medium transition-colors"
                          >
                            <Play className={`w-3 h-3 ${isExecuting ? 'animate-spin' : ''}`} />
                            <span>{isExecuting ? 'Running...' : 'Run Lab Test'}</span>
                          </button>
                        </div>
                      )}
                    </div>
                  )}

                  {activeTab === 'rag' && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-[11px] text-slate-400">
                        <span>Vector Index: <span className="text-cyan-300 font-semibold">lecture_notes_embeddings.bin</span></span>
                        <span className="text-cyan-400">k=3 chunks</span>
                      </div>
                      <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 space-y-1">
                        <p className="text-slate-500">// Semantic Search Query</p>
                        <p className="text-cyan-400">QUERY: "How does token masking prevent lookahead bias?"</p>
                        <p className="text-slate-400">SIMILARITY: Cosine match 0.942 against Section 4.2</p>
                      </div>

                      {executionOutput === 'rag' ? (
                        <div className="p-3 rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-cyan-200 space-y-1 animate-in fade-in duration-300">
                          <p className="text-slate-400 text-[10px] flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                            Source grounded in verified course PDF (pg. 42)
                          </p>
                          <p className="text-[11px] text-slate-200">
                            "Masked self-attention prevents positions from attending to subsequent tokens, preserving auto-regressive properties."
                          </p>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between pt-1">
                          <span className="text-slate-500 text-[11px]">Ready to retrieve source vectors...</span>
                          <button
                            type="button"
                            onClick={handleRunDemo}
                            disabled={isExecuting}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-sans text-xs font-medium transition-colors"
                          >
                            <Play className={`w-3 h-3 ${isExecuting ? 'animate-spin' : ''}`} />
                            <span>{isExecuting ? 'Retrieving...' : 'Test Retrieval'}</span>
                          </button>
                        </div>
                      )}
                    </div>
                  )}

                  {activeTab === 'agent' && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-[11px] text-slate-400">
                        <span>Workflow: <span className="text-purple-300 font-semibold">Autonomous Research Loop</span></span>
                        <span className="text-purple-400">Tool Use Enabled</span>
                      </div>
                      <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 space-y-1.5">
                        <div className="flex items-center gap-2 text-slate-400">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                          <span>Step 1: Web Scraping & Synthesis</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-400">
                          <span className="w-2 h-2 rounded-full bg-indigo-400 inline-block" />
                          <span>Step 2: Markdown Report Generation</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-400">
                          <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block" />
                          <span>Step 3: Webhook Notification Trigger</span>
                        </div>
                      </div>

                      {executionOutput === 'agent' ? (
                        <div className="p-3 rounded-lg bg-purple-950/40 border border-purple-500/30 text-purple-200 space-y-1 animate-in fade-in duration-300">
                          <p className="text-slate-400 text-[10px] flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                            Multi-agent execution complete (0 errors)
                          </p>
                          <p className="text-[11px] text-purple-200">
                            Research summary written to ./reports/weekly-ai-trends.md and webhook sent to Discord channel.
                          </p>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between pt-1">
                          <span className="text-slate-500 text-[11px]">Ready to trigger workflow nodes...</span>
                          <button
                            type="button"
                            onClick={handleRunDemo}
                            disabled={isExecuting}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-sans text-xs font-medium transition-colors"
                          >
                            <Play className={`w-3 h-3 ${isExecuting ? 'animate-spin' : ''}`} />
                            <span>{isExecuting ? 'Orchestrating...' : 'Trigger Agent'}</span>
                          </button>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Sandbox Footer Stats */}
                  <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                      Runtime: Node v22 / Python 3.12
                    </span>
                    <span className="text-slate-500">Zero Math Pre-reqs</span>
                  </div>

                </div>

              </div>

              {/* Floating tech badge bottom right */}
              <div className="hidden sm:flex absolute -bottom-5 -right-5 items-center gap-3 bg-slate-900/95 border border-slate-700/80 px-4 py-2.5 rounded-xl shadow-xl backdrop-blur-md">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Full Stack AI Portfolio</p>
                  <p className="text-[11px] text-slate-400">GitHub-ready code repositories</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
