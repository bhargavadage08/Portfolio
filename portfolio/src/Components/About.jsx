import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { User, MapPin, GraduationCap, Briefcase, Code, Sparkles, Cpu } from 'lucide-react';

export default function About() {
  const { personal, education } = PORTFOLIO_DATA;
  const eduItem = education && education[0] ? education[0] : null;

  return (
    <section id="about" className="py-24 px-4 sm:px-8 relative">
      <div className="max-w-6xl mx-auto space-y-10 relative z-10">

        {/* Section Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>01 // About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Building digital solutions with <span className="text-cyan-400">code & curiosity</span>.
          </h2>
        </div>

        {/* Split Layout: Simple & Distinct */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Quick Profile Highlights */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800/80 space-y-6">
            <h3 className="text-white text-lg font-bold border-b border-slate-800 pb-3 flex items-center gap-2">
              <User size={18} className="text-cyan-400" />
              <span>Profile Snapshot</span>
            </h3>

            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <Briefcase size={16} className="text-cyan-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-slate-500 font-mono uppercase">Role</p>
                  <p className="font-semibold text-white">AI/ML & Gen AI Engineer | Full Stack</p>
                </div>
              </div>

              {eduItem && (
                <div className="flex items-start gap-3">
                  <GraduationCap size={16} className="text-cyan-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-slate-500 font-mono uppercase">Education</p>
                    <p className="font-semibold text-white">{eduItem.degree}</p>
                    <p className="text-xs text-slate-400">{eduItem.institution} ({eduItem.period})</p>
                  </div>
                </div>
              )}

              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-cyan-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-slate-500 font-mono uppercase">Location</p>
                  <p className="font-semibold text-white">{personal.location || 'India'}</p>
                </div>
              </div>
            </div>

            {/* Simple Status Badge */}
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950 border border-slate-800 text-cyan-300 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>{personal.status}</span>
              </span>
            </div>
          </div>

          {/* Right Column: Clean Bio & Focus Areas */}
          <div className="lg:col-span-7 space-y-6">
            {/* Bio Paragraph */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/30 border border-slate-800/50 space-y-4">
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                {personal.bio}
              </p>
            </div>

            {/* 3 Simple Focus Minimal Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-1.5">
                <Cpu size={18} className="text-cyan-400" />
                <h4 className="text-xs font-mono text-slate-400 uppercase">AI / ML & RAG</h4>
                <p className="text-xs text-slate-200 font-medium">Python, LangChain, Vector DBs</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-1.5">
                <Code size={18} className="text-cyan-400" />
                <h4 className="text-xs font-mono text-slate-400 uppercase">Full Stack</h4>
                <p className="text-xs text-slate-200 font-medium">React, Tailwind CSS, PostgreSQL</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-1.5">
                <Sparkles size={18} className="text-cyan-400" />
                <h4 className="text-xs font-mono text-slate-400 uppercase">Mobile Dev</h4>
                <p className="text-xs text-slate-200 font-medium">Flutter & REST API Integration</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
