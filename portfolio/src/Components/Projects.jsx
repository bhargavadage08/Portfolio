import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Folder } from 'lucide-react';
import { Github } from './Icons';

export default function Projects() {
  const { projects } = PORTFOLIO_DATA;

  return (
    <section id="projects" className="min-h-screen py-24 px-4 sm:px-12 md:px-16 flex flex-col justify-center relative bg-transparent text-neutral-100 overflow-hidden">
      {/* Ambient background glow elements like Hero section */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full space-y-12 text-center relative z-10">
        <div className="space-y-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-cyan-400">Featured Work</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 hover:border-cyan-500/40 hover:bg-neutral-900/90 transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 flex items-center justify-center">
                    <Folder size={18} />
                  </div>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-neutral-400 hover:text-cyan-400 hover:bg-neutral-800 transition-colors"
                    title="View Source Code"
                  >
                    <Github size={18} />
                  </a>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed font-normal">
                  {project.description}
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full bg-neutral-800/80 text-cyan-300 text-xs font-mono border border-neutral-700/50"
                    >
                      {tag}
                    </span>
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
