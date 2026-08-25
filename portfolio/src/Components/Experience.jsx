import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            Work History
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Experience
          </p>
          <p className="text-slate-400 text-base">
            My journey through software development engineering roles and technical achievements.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative pl-6 sm:pl-8 border-l border-slate-800 space-y-12">
          {PORTFOLIO_DATA.experiences.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-[#0b0f19] border-2 border-cyan-400 group-hover:border-cyan-300 group-hover:scale-125 transition-all flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
              </div>

              {/* Experience Card */}
              <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 border border-slate-800/80 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-sm font-medium text-cyan-400 pt-1">
                      <Briefcase className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-slate-400 bg-slate-900 border border-slate-800 self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {exp.description}
                </p>

                {/* Achievements List */}
                <div className="space-y-2 pt-2">
                  {exp.achievements.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-400">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
