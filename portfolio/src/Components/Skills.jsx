import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Skills() {
  const { skills } = PORTFOLIO_DATA;

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-5xl mx-auto space-y-10 text-center">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Capabilities</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Skills & Technologies</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900/90 hover:scale-102 transition-all text-center space-y-1.5 group cursor-default"
            >
              <h3 className="text-slate-100 font-semibold text-sm sm:text-base group-hover:text-cyan-300 transition-colors">
                {skill.name}
              </h3>
              <p className="text-[11px] text-slate-400 group-hover:text-cyan-400/80 font-medium transition-colors">
                {skill.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
