import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Experience() {
  const { experience, education } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-4xl mx-auto space-y-12 text-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Experience & Education</h2>
          <div className="w-16 h-1 bg-cyan-400 mx-auto rounded-full mt-3" />
        </div>

        {/* Experience Section */}
        <div className="space-y-6 text-left">
          <h3 className="text-xl font-bold text-cyan-400 border-b border-slate-800 pb-2">Experience</h3>
          {experience.map((item) => (
            <div key={item.id} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h4 className="text-xl font-bold text-white">{item.role}</h4>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800/60 w-fit">
                  {item.period}
                </span>
              </div>
              <p className="text-sm font-medium text-slate-300">{item.company}</p>
              <p className="text-slate-400 text-sm">{item.description}</p>
              {item.highlights && item.highlights.length > 0 && (
                <ul className="list-disc list-inside text-sm text-slate-400 space-y-1 pt-1">
                  {item.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="space-y-6 text-left">
          <h3 className="text-xl font-bold text-cyan-400 border-b border-slate-800 pb-2">Education</h3>
          {education.map((item) => (
            <div key={item.id} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h4 className="text-xl font-bold text-white">{item.degree}</h4>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700 w-fit">
                  {item.period}
                </span>
              </div>
              <p className="text-slate-400 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

