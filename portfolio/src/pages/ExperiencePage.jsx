import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Briefcase, GraduationCap, Calendar, Building, CheckCircle2 } from 'lucide-react';

export default function ExperiencePage() {
  const { experience, education } = PORTFOLIO_DATA;

  return (
    <div className="pt-28 pb-24 px-4 sm:px-12 md:px-16 relative min-h-screen bg-transparent text-neutral-100 overflow-hidden">
      {/* Ambient background glow elements like Hero section */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full space-y-16 relative z-10">

        {/* Page Header */}
        <div className="space-y-4 text-center sm:text-left border-b border-neutral-800/80 pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-cyan-400 text-xs font-mono">
            <Briefcase size={14} />
            <span>Dedicated Page // Background & Timeline</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            Experience & <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent" style={{ fontFamily: "'Caveat', cursive", fontSize: '1.2em' }}>Education</span>
          </h1>

          <p className="text-neutral-300 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
            A chronological timeline of my practical software experience, independent AI/ML engineering projects, and academic degree specialization.
          </p>
        </div>

        {/* Experience Section */}
        <section className="space-y-8">
          <div className="flex items-center gap-2 text-cyan-400 font-bold text-xl border-b border-neutral-800/80 pb-3">
            <Briefcase size={22} />
            <h2>Experience Timeline</h2>
          </div>

          <div className="space-y-6">
            {experience.map((item) => (
              <div
                key={item.id}
                className="p-8 rounded-3xl bg-neutral-900/60 border border-neutral-800/80 space-y-4 hover:border-cyan-500/40 transition-all shadow-xl"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">{item.role}</h3>
                    <p className="text-sm font-semibold text-cyan-400 flex items-center gap-1.5 pt-1">
                      <Building size={14} />
                      <span>{item.company}</span>
                    </p>
                  </div>

                  <span className="px-3.5 py-1 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-800/60 text-xs font-mono font-semibold w-fit flex items-center gap-1.5">
                    <Calendar size={12} />
                    <span>{item.period}</span>
                  </span>
                </div>

                <p className="text-neutral-300 text-sm leading-relaxed font-normal">
                  {item.description}
                </p>

                {item.highlights && item.highlights.length > 0 && (
                  <div className="space-y-2 pt-2 border-t border-neutral-800/80">
                    <p className="text-xs font-mono text-neutral-400 uppercase">Key Achievements & Deliverables:</p>
                    <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
                      {item.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="space-y-8">
          <div className="flex items-center gap-2 text-cyan-400 font-bold text-xl border-b border-neutral-800/80 pb-3">
            <GraduationCap size={22} />
            <h2>Academic Background</h2>
          </div>

          <div className="space-y-6">
            {education.map((item) => (
              <div
                key={item.id}
                className="p-8 rounded-3xl bg-neutral-900/60 border border-neutral-800/80 space-y-4 hover:border-cyan-500/40 transition-all shadow-xl"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">{item.degree}</h3>
                    <p className="text-sm font-semibold text-cyan-400 pt-1">{item.institution}</p>
                  </div>

                  <span className="px-3.5 py-1 rounded-full bg-neutral-800 border border-neutral-700 text-neutral-300 text-xs font-mono font-semibold w-fit flex items-center gap-1.5">
                    <Calendar size={12} />
                    <span>{item.period}</span>
                  </span>
                </div>

                <p className="text-neutral-300 text-sm leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
