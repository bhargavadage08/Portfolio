import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Award, Zap, Code, ShieldCheck, Download, Sparkles } from 'lucide-react';

const values = [
  {
    icon: Code,
    title: "Clean & Maintainable",
    description: "Prioritizing readable, modular, and well-tested code that scales easily over time."
  },
  {
    icon: Zap,
    title: "Performance First",
    description: "Optimizing asset sizes, state updates, and database queries for lightning-fast loads."
  },
  {
    icon: ShieldCheck,
    title: "Robust Security",
    description: "Following industry standards for authentication, data privacy, and secure API handling."
  },
  {
    icon: Sparkles,
    title: "Intuitive UI/UX",
    description: "Designing responsive, smooth interfaces that guide users effortlessly to their goals."
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            About Me
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Building software with purpose & craftsmanship
          </p>
          <p className="text-slate-400 text-base leading-relaxed">
            {PORTFOLIO_DATA.personal.bio}
          </p>
        </div>

        {/* Metric Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {PORTFOLIO_DATA.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-2xl p-6 text-center border border-slate-800/80 relative overflow-hidden"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Philosophy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800/80 space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
