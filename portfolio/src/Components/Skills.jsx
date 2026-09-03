import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Skills() {
  const { skills } = PORTFOLIO_DATA;

  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-5xl mx-auto space-y-8 text-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Skills & Technologies</h2>
          <div className="w-16 h-1 bg-cyan-400 mx-auto rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all text-center space-y-1"
            >
              <h3 className="text-slate-100 font-semibold text-base">{skill.name}</h3>
              <p className="text-xs text-cyan-400 font-medium">{skill.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

