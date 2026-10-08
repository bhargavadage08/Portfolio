import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Cpu, Code2, Sparkles, CheckCircle2 } from 'lucide-react';

export default function SkillsPage() {
  const { skills } = PORTFOLIO_DATA;
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Extract unique categories
  const categories = ['All', ...new Set(skills.map(s => s.category))];

  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(s => s.category === selectedCategory);

  return (
    <div className="pt-28 pb-24 px-4 sm:px-12 md:px-16 relative min-h-screen bg-transparent text-neutral-100 overflow-hidden">
      {/* Ambient background glow elements like Hero section */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full space-y-12 relative z-10">

        {/* Page Header */}
        <div className="space-y-4 text-center sm:text-left border-b border-neutral-800/80 pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-cyan-400 text-xs font-mono">
            <Cpu size={14} />
            <span>Dedicated Page // Skills & Tech Stack</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            Technical <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent" style={{ fontFamily: "'Caveat', cursive", fontSize: '1.2em' }}>Capabilities</span>
          </h1>

          <p className="text-neutral-300 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
            A comprehensive overview of programming languages, AI/ML tools, frontend & backend frameworks, and databases I utilize.
          </p>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-semibold transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20'
                    : 'bg-neutral-900/90 border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 hover:border-cyan-500/40 hover:bg-neutral-900/90 transition-all flex items-start justify-between gap-4 group"
            >
              <div className="space-y-2">
                <span className="px-2.5 py-1 rounded-md bg-black text-cyan-400 text-[10px] font-mono border border-neutral-800 uppercase tracking-wider font-semibold">
                  {skill.category}
                </span>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors pt-1">
                  {skill.name}
                </h3>
              </div>

              <div className="w-8 h-8 rounded-lg bg-cyan-950/60 text-cyan-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <CheckCircle2 size={16} />
              </div>
            </div>
          ))}
        </div>

        {/* Skill Category Breakdown Info */}
        <div className="p-8 rounded-3xl bg-neutral-900/40 border border-neutral-800/80 space-y-6">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Sparkles size={20} className="text-cyan-400" />
            <span>Tech Stack Summary</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-neutral-300">
            <div className="p-4 rounded-xl bg-black/60 border border-neutral-800/80 space-y-2">
              <h4 className="font-bold text-white flex items-center gap-2">
                <Cpu size={16} className="text-cyan-400" />
                <span>AI & Gen AI Ecosystem</span>
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Python, Retrieval-Augmented Generation (RAG), LangChain workflows, Vector Store integrations, and OpenAI/LLM API pipelines.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-black/60 border border-neutral-800/80 space-y-2">
              <h4 className="font-bold text-white flex items-center gap-2">
                <Code2 size={16} className="text-cyan-400" />
                <span>Full Stack & Mobile Development</span>
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                React, Tailwind CSS, JavaScript, Flutter, Dart, C#, MySQL, PostgreSQL, and RESTful web services.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
