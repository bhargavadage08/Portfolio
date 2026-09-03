import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Projects() {
  const { projects } = PORTFOLIO_DATA;

  return (
    <section id="projects" className="py-24 bg-slate-900/40 border-y border-slate-800/50 px-4">
      <div className="max-w-5xl mx-auto space-y-10 text-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Featured Projects</h2>
          <div className="w-16 h-1 bg-cyan-400 mx-auto rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-slate-800 text-cyan-400 text-xs font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-2 border-t border-slate-800/80">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-300 hover:text-cyan-400 font-semibold transition-colors"
                  >
                    GitHub Code →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

