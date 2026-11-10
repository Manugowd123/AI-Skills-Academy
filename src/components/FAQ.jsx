import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import { faqs } from '../data/faqData';

export default function FAQ() {
  const [openId, setOpenId] = useState(faqs[0]?.id || null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const handleScrollToRegister = (e) => {
    e.preventDefault();
    const element = document.querySelector('#register');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="faq" className="py-20 md:py-28 relative bg-slate-950/70 border-t border-slate-900">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-indigo-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Got Questions? <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400">
              Clear & Honest Answers
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Everything you need to know about course prerequisites, time commitments, hardware requirements, and hands-on deliverables.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="mt-14 space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-900/90 border-indigo-500/50 shadow-lg shadow-indigo-950/30 ring-1 ring-indigo-500/30'
                    : 'bg-slate-900/50 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/70'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={`text-base sm:text-lg font-semibold tracking-tight transition-colors ${
                    isOpen ? 'text-indigo-300' : 'text-white hover:text-slate-200'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-lg shrink-0 transition-all ${
                    isOpen ? 'bg-indigo-500/20 text-indigo-300 rotate-180' : 'bg-slate-800 text-slate-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-slate-300 text-sm leading-relaxed border-t border-slate-800/60 pt-4 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions prompt */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-base font-semibold text-white">
              Still have a specific question about your background?
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Leave your inquiry in the registration form below and our team will respond directly.
            </p>
          </div>
          <a
            href="#register"
            onClick={handleScrollToRegister}
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-md"
          >
            <span>Ask an Advisor</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
