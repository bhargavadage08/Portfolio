import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Code2, Server, Cloud, Cpu, Database, Layers, Wrench, Terminal, FileCode, Palette, Component, Network, Zap, Container, GitBranch } from 'lucide-react';

const iconMap = {
  Code2, FileCode, Palette, Layers, Component, Server, Cpu, Network, Database, Zap, Container, Cloud, GitBranch, Wrench
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Tech' },
    { id: 'frontend', label: 'Frontend UI' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'devops', label: 'Cloud & DevOps' },
  ];

  const getSkillsToDisplay = () => {
    if (activeCategory === 'frontend') return PORTFOLIO_DATA.skills.frontend;
    if (activeCategory === 'backend') return PORTFOLIO_DATA.skills.backend;
    if (activeCategory === 'devops') return PORTFOLIO_DATA.skills.devops;
    return [
      ...PORTFOLIO_DATA.skills.frontend,
      ...PORTFOLIO_DATA.skills.backend,
      ...PORTFOLIO_DATA.skills.devops,
    ];
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            Technical Stack
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Core Competencies
          </p>
          <p className="text-slate-400 text-base">
            Modern tools and technologies I use to craft robust end-to-end applications.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-full bg-slate-900/80 border border-slate-800 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-500 text-white shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getSkillsToDisplay().map((skill, idx) => {
            const IconComponent = iconMap[skill.icon] || Code2;
            return (
              <div
                key={idx}
                className="glass-card glass-card-hover rounded-2xl p-5 border border-slate-800/80 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-cyan-400">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-white text-base">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-xs font-mono font-medium text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded-full border border-cyan-800/50">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-2 bg-slate-800/80 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
