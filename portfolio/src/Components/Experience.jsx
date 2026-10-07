import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Briefcase, GraduationCap } from 'lucide-react';

export default function Experience() {
  const { experience, education } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="min-h-screen py-24 px-4 sm:px-12 md:px-16 flex flex-col justify-center relative bg-transparent text-neutral-100 overflow-hidden">
      {/* Ambient background glow elements like Hero section */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full space-y-12 relative z-10">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-cyan-400">Background</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Experience & Education</h2>
        </div>

        {/* Experience Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-cyan-400 font-bold text-lg border-b border-neutral-800/80 pb-2">
            <Briefcase size={20} />
            <h3>Experience</h3>
          </div>
          {experience.map((item) => (
            <div key={item.id} className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 space-y-3 hover:border-neutral-700 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h4 className="text-lg font-bold text-white">{item.role}</h4>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-950/80 text-cyan-400 border border-cyan-800/60 w-fit">
                  {item.period}
                </span>
              </div>
              <p className="text-sm font-medium text-neutral-300">{item.company}</p>
              <p className="text-neutral-400 text-sm leading-relaxed">{item.description}</p>
              {item.highlights && item.highlights.length > 0 && (
                <ul className="list-disc list-inside text-sm text-neutral-400 space-y-1 pt-1">
                  {item.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-cyan-400 font-bold text-lg border-b border-neutral-800/80 pb-2">
            <GraduationCap size={20} />
            <h3>Education</h3>
          </div>
          {education.map((item) => (
            <div key={item.id} className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 space-y-2 hover:border-neutral-700 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h4 className="text-lg font-bold text-white">{item.degree}</h4>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-neutral-800 text-neutral-300 border border-neutral-700 w-fit">
                  {item.period}
                </span>
              </div>
              <p className="text-neutral-400 text-sm">{item.institution}</p>
              <p className="text-neutral-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
