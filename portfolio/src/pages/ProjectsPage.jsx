import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Folder } from 'lucide-react';
import { Github } from '../Components/Icons';

export default function ProjectsPage() {
  const { projects } = PORTFOLIO_DATA;
  const [selectedTag, setSelectedTag] = useState('All');

  // Extract all unique tags
  const allTags = ['All', ...new Set(projects.flatMap(p => p.tags))];

  const filteredProjects = selectedTag === 'All'
    ? projects
    : projects.filter(p => p.tags.includes(selectedTag));

  return (
    <div className="pt-28 pb-24 px-4 sm:px-12 md:px-16 relative min-h-screen bg-transparent text-neutral-100 overflow-hidden">
      {/* Ambient background glow elements like Hero section */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full space-y-12 relative z-10">

        {/* Page Header */}
        <div className="space-y-4 text-center sm:text-left border-b border-neutral-800/80 pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-cyan-400 text-xs font-mono">
            <Folder size={14} />
            <span>Dedicated Page // Selected Works</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            Featured <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h1>

          <p className="text-neutral-300 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
            A showcase of AI/ML workflows, GenAI knowledge search systems, cross-platform mobile apps, and full-stack web applications.
          </p>

          {/* Filter Tags */}
          <div className="flex flex-wrap gap-2 pt-4">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-semibold transition-all duration-300 cursor-pointer ${
                  selectedTag === tag
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20'
                    : 'bg-neutral-900/90 border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800/80'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="p-8 rounded-3xl bg-neutral-900/60 border border-neutral-800/80 hover:border-cyan-500/40 hover:bg-neutral-900/90 transition-all flex flex-col justify-between space-y-6 group shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 flex items-center justify-center">
                    <Folder size={22} />
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-black border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-all"
                      title="View GitHub Repository"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-neutral-300 text-sm leading-relaxed font-normal">
                  {project.description}
                </p>
              </div>

              <div className="space-y-4 pt-2 border-t border-neutral-800/60">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-neutral-800/90 text-cyan-300 text-xs font-mono border border-neutral-700/60"
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
    </div>
  );
}
