import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ExternalLink, Layers, Sparkles, X, CheckCircle2, ArrowUpRight } from 'lucide-react';

const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filterOptions = ['All', 'Full Stack', 'Web Apps', 'Cloud / DevOps'];

  const filteredProjects = filter === 'All'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            Portfolio
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects & Applications
          </p>
          <p className="text-slate-400 text-base">
            Explore recent software engineering projects across full stack development, APIs, and cloud services.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setFilter(opt)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all duration-200 ${
                filter === opt
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40 shadow-sm'
                  : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card glass-card-hover rounded-2xl border border-slate-800/80 overflow-hidden flex flex-col justify-between group"
            >
              {/* Graphic Banner Canvas */}
              <div className="relative h-48 bg-gradient-to-br from-slate-900 via-[#0f172a] to-slate-950 p-6 flex flex-col justify-between overflow-hidden border-b border-slate-800/80">
                <div className="absolute inset-0 bg-grid-pattern opacity-40" />
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[11px] font-mono font-medium uppercase tracking-wider text-cyan-400 bg-slate-950/80 px-2.5 py-1 rounded-md border border-cyan-500/30">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="flex items-center gap-1 text-[11px] font-semibold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded-md border border-amber-500/30">
                      <Sparkles className="w-3 h-3" /> Featured
                    </span>
                  )}
                </div>

                <div className="relative z-10 space-y-1">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-300 bg-slate-800/60 border border-slate-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group/btn"
                  >
                    <span>View Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>

                  <div className="flex items-center gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-400 hover:text-white transition-colors"
                      title="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-400 hover:text-cyan-400 transition-colors"
                      title="Live Preview"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="glass-card max-w-2xl w-full rounded-2xl border border-slate-700/80 overflow-hidden shadow-2xl space-y-6 p-6 sm:p-8 relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                {selectedProject.category}
              </span>
              <h3 className="text-2xl font-bold text-white">
                {selectedProject.title}
              </h3>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              {selectedProject.description}
            </p>

            {/* Highlights */}
            {selectedProject.highlights && (
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Key Technical Accomplishments:
                </h4>
                <ul className="space-y-2">
                  {selectedProject.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {selectedProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg text-xs font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-800/50"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
              <a
                href={selectedProject.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl font-semibold text-xs text-slate-900 bg-gradient-to-r from-cyan-400 to-indigo-400 hover:from-cyan-300 hover:to-indigo-300 flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Visit Live Site</span>
              </a>
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl font-semibold text-xs text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 flex items-center gap-2"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
