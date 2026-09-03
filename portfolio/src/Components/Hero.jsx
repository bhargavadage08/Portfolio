import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Hero() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section className="min-h-screen pt-32 pb-20 flex items-center justify-center bg-slate-950 text-center px-4 relative overflow-hidden">
      {/* Glow background effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-semibold tracking-wide">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          {personal.status}
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              {personal.name}
            </span>
          </h1>
          <p className="text-xl sm:text-2xl font-medium text-slate-300">
            {personal.title}
          </p>
          <p className="max-w-2xl mx-auto text-slate-400 text-base sm:text-lg leading-relaxed">
            {personal.tagline}
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 transition-all transform hover:-translate-y-0.5 shadow-lg shadow-cyan-500/20"
          >
            Explore Projects
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 transition-all border border-slate-700/80 hover:border-slate-600"
          >
            GitHub Profile
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 transition-all border border-slate-700/80 hover:border-slate-600"
          >
            LinkedIn Profile
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl font-semibold text-cyan-400 bg-slate-900/50 hover:bg-slate-800/80 transition-all border border-cyan-500/30 hover:border-cyan-400/50"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}

