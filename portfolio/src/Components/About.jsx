import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function About() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-24 bg-slate-900/40 border-y border-slate-800/50 px-4">
      <div className="max-w-4xl mx-auto space-y-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">About Me</h2>
        <div className="w-16 h-1 bg-cyan-400 mx-auto rounded-full" />
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
          {personal.bio}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 text-left">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
            <h3 className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Focus Area</h3>
            <p className="text-white text-base font-medium">Artificial Intelligence & Gen AI</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
            <h3 className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Development</h3>
            <p className="text-white text-base font-medium">Full Stack Web & Mobile Apps</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
            <h3 className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Philosophy</h3>
            <p className="text-white text-base font-medium">Learning by building & real impact</p>
          </div>
        </div>
      </div>
    </section>
  );
}

