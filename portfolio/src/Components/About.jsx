import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Cpu, Code2, Sparkles } from 'lucide-react';

export default function About() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-5xl mx-auto space-y-12 relative z-10">

        {/* Section Title */}
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Get To Know Me</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">About Me</h2>
        </div>

        {/* Main About Content */}
        <div className="space-y-8">
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto text-center font-normal">
            {personal.bio}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm space-y-3 hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all group">
              <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Cpu size={20} />
              </div>
              <h3 className="text-cyan-400 font-semibold text-xs uppercase tracking-wider">Focus Area</h3>
              <p className="text-white text-base font-semibold">Artificial Intelligence & Gen AI</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm space-y-3 hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all group">
              <div className="w-10 h-10 rounded-xl bg-sky-950/80 border border-sky-800/60 text-sky-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Code2 size={20} />
              </div>
              <h3 className="text-cyan-400 font-semibold text-xs uppercase tracking-wider">Development</h3>
              <p className="text-white text-base font-semibold">Full Stack Web & Mobile Apps</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm space-y-3 hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all group">
              <div className="w-10 h-10 rounded-xl bg-blue-950/80 border border-blue-800/60 text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Sparkles size={20} />
              </div>
              <h3 className="text-cyan-400 font-semibold text-xs uppercase tracking-wider">Philosophy</h3>
              <p className="text-white text-base font-semibold">Learning by building real impact</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
