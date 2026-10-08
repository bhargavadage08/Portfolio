import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { 
  User, GraduationCap, MapPin, Cpu, Code2, 
  Sparkles, Layers, Compass, ShieldCheck, ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  const { personal, education } = PORTFOLIO_DATA;
  const eduItem = education && education[0] ? education[0] : null;

  return (
    <div className="pt-28 pb-24 px-4 sm:px-12 md:px-16 relative min-h-screen bg-transparent text-neutral-100 overflow-hidden">
      {/* Ambient background glow elements like Hero section */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full space-y-16 relative z-10">

        {/* Page Header */}
        <div className="space-y-4 text-center sm:text-left border-b border-neutral-800/80 pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-cyan-400 text-xs font-mono">
            <User size={14} />
            <span>Dedicated Page // About Bhargav</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            About <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent" style={{ fontFamily: "'Caveat', cursive", fontSize: '1.2em' }}>Bhargav Adage</span>
          </h1>

          <p className="text-neutral-300 text-base sm:text-lg max-w-3xl leading-relaxed font-normal">
            {personal.tagline}
          </p>
        </div>

        {/* Detailed Narrative Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
            <Sparkles size={20} className="text-cyan-400" />
            <span>Biography & Background</span>
          </h2>

          <div className="p-8 rounded-3xl bg-neutral-900/50 border border-neutral-800/80 space-y-4 backdrop-blur-sm">
            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed font-normal">
              {personal.bio}
            </p>
            <p className="text-neutral-400 text-sm leading-relaxed">
              My software journey is driven by hands-on execution. Whether it is building intelligent Retrieval-Augmented Generation (RAG) pipelines with LangChain and vector stores, architecting responsive web user interfaces in React, or launching cross-platform mobile apps with Flutter, I aim for simple, robust, and impactful code.
            </p>
          </div>
        </section>

        {/* Profile Stats & Meta Snapshot */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 flex items-center gap-4">
            <div className="p-3 rounded-xl bg-cyan-950/80 border border-cyan-800/60 text-cyan-400">
              <MapPin size={22} />
            </div>
            <div>
              <p className="text-xs font-mono text-neutral-400 uppercase">Location</p>
              <p className="text-base font-bold text-white">{personal.location || 'India'}</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 flex items-center gap-4">
            <div className="p-3 rounded-xl bg-sky-950/80 border border-sky-800/60 text-sky-400">
              <GraduationCap size={22} />
            </div>
            <div>
              <p className="text-xs font-mono text-neutral-400 uppercase">Degree</p>
              <p className="text-base font-bold text-white">BCA (2025 - 2028)</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 flex items-center gap-4">
            <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-800/60 text-emerald-400">
              <ShieldCheck size={22} />
            </div>
            <div>
              <p className="text-xs font-mono text-neutral-400 uppercase">Status</p>
              <p className="text-sm font-bold text-emerald-300">{personal.status}</p>
            </div>
          </div>
        </section>

        {/* Detailed Education Section */}
        {eduItem && (
          <section className="space-y-6">
            <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
              <GraduationCap size={22} className="text-cyan-400" />
              <span>Academic Education</span>
            </h2>

            <div className="p-8 rounded-3xl bg-neutral-900/50 border border-neutral-800/80 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-800 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{eduItem.degree}</h3>
                  <p className="text-cyan-400 text-sm font-semibold">{eduItem.institution}</p>
                </div>
                <span className="px-4 py-1.5 rounded-full bg-neutral-800 border border-neutral-700 text-xs font-mono text-cyan-300 w-fit">
                  {eduItem.period}
                </span>
              </div>

              <p className="text-neutral-300 text-sm leading-relaxed">
                {eduItem.description}
              </p>

              <div className="space-y-2 pt-2">
                <p className="text-xs font-mono text-neutral-400 uppercase">Key Coursework & Specializations:</p>
                <div className="flex flex-wrap gap-2">
                  {['Computer Science Fundamentals', 'Data Structures & Algorithms', 'AI & Machine Learning Concepts', 'Database Systems (MySQL/PostgreSQL)', 'Software Engineering & Web Systems'].map((item, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg bg-black border border-neutral-800 text-neutral-300 text-xs font-mono">
                      ✓ {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Technical Specialization Pillars */}
        <section className="space-y-6">
          <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
            <Cpu size={22} className="text-cyan-400" />
            <span>Core Technical Focus</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-950 text-cyan-400 flex items-center justify-center">
                <Cpu size={20} />
              </div>
              <h3 className="text-white font-bold text-lg">AI / ML & Gen AI</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Architecting context-aware AI search systems, RAG workflows with LangChain, and embedding pipelines in Python.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-950 text-sky-400 flex items-center justify-center">
                <Code2 size={20} />
              </div>
              <h3 className="text-white font-bold text-lg">Full Stack Web</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Crafting clean web interfaces with React & Tailwind CSS backed by structured REST APIs and SQL databases.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-950 text-blue-400 flex items-center justify-center">
                <Layers size={20} />
              </div>
              <h3 className="text-white font-bold text-lg">Cross-Platform Mobile</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Developing responsive mobile client apps using Flutter and Dart with real-time data integration.
              </p>
            </div>
          </div>
        </section>

        {/* Philosophy & Manifesto */}
        <section className="p-8 rounded-3xl bg-gradient-to-br from-black via-neutral-950 to-cyan-950/50 border border-neutral-800 space-y-4">
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-semibold uppercase">
            <Compass size={16} />
            <span>Developer Mantra</span>
          </div>

          <h3 className="text-xl font-extrabold text-white">
            "Theory lays the foundation, but building real software defines growth."
          </h3>

          <p className="text-neutral-300 text-sm leading-relaxed">
            I continuously build projects to sharpen my understanding, learn modern industry frameworks, and turn curiosity into practical software applications.
          </p>

          <div className="pt-4 flex items-center gap-4">
            <Link
              to="/projects"
              className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-neutral-950 font-bold text-xs sm:text-sm transition-all flex items-center gap-2"
            >
              <span>Explore Projects</span>
              <ArrowRight size={16} />
            </Link>

            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-semibold text-xs sm:text-sm transition-all"
            >
              <span>Get In Touch</span>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
