import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import Hero from '../Components/Hero';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Cpu, Code2, Sparkles, Folder, 
  GraduationCap, Mail, Layers 
} from 'lucide-react';
import { Github } from '../Components/Icons';

export default function Home() {
  const { personal, skills, projects } = PORTFOLIO_DATA;

  return (
    <div className="space-y-16 pb-16 bg-black text-neutral-100">
      {/* Hero Section */}
      <Hero />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-24">

        {/* Highlights & Key Achievements Bar */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 space-y-2 hover:border-cyan-500/40 transition-all">
            <div className="text-cyan-400 font-mono text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles size={16} />
              <span>Specialization</span>
            </div>
            <h3 className="text-white text-lg font-bold">GenAI & RAG Systems</h3>
            <p className="text-neutral-400 text-xs leading-relaxed">LangChain, Vector Databases, Document QA</p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 space-y-2 hover:border-cyan-500/40 transition-all">
            <div className="text-cyan-400 font-mono text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
              <Code2 size={16} />
              <span>Development</span>
            </div>
            <h3 className="text-white text-lg font-bold">Full Stack Web</h3>
            <p className="text-neutral-400 text-xs leading-relaxed">React, Tailwind CSS, Python REST APIs</p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 space-y-2 hover:border-cyan-500/40 transition-all">
            <div className="text-cyan-400 font-mono text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
              <Layers size={16} />
              <span>Mobile Apps</span>
            </div>
            <h3 className="text-white text-lg font-bold">Cross-Platform</h3>
            <p className="text-neutral-400 text-xs leading-relaxed">Flutter, Dart, Cloud Synchronization</p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 space-y-2 hover:border-cyan-500/40 transition-all">
            <div className="text-cyan-400 font-mono text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
              <GraduationCap size={16} />
              <span>Academics</span>
            </div>
            <h3 className="text-white text-lg font-bold">BCA Student</h3>
            <p className="text-neutral-400 text-xs leading-relaxed">University of Mysuru (2025 - 2028)</p>
          </div>
        </section>

        {/* Short About Me Snippet */}
        <section className="p-8 sm:p-12 rounded-3xl bg-neutral-900/40 border border-neutral-800/80 space-y-8 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-cyan-400">
                01 // Brief Overview
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                About Bhargav Adage
              </h2>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed pt-2">
                {personal.bio.slice(0, 240)}...
              </p>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-white font-semibold text-sm transition-all shadow-md shrink-0 w-fit"
            >
              <span>Explore Detailed About Page</span>
              <ArrowRight size={16} className="text-cyan-400" />
            </Link>
          </div>
        </section>

        {/* Featured Projects Preview */}
        <section className="space-y-8">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div className="space-y-2">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-cyan-400">
                02 // Featured Creations
              </span>
              <h2 className="text-3xl font-extrabold text-white">Selected Projects</h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span>View All Projects</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((project) => (
              <div
                key={project.id}
                className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 hover:border-cyan-500/40 transition-all flex flex-col justify-between space-y-4 group"
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
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
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
            ))}
          </div>
        </section>

        {/* Skills Summary Preview */}
        <section className="p-8 rounded-3xl bg-neutral-900/40 border border-neutral-800/80 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-cyan-400">
                03 // Tech Stack
              </span>
              <h2 className="text-2xl font-bold text-white">Skills & Tools Overview</h2>
            </div>
            <Link
              to="/skills"
              className="inline-flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span>View Full Skillset</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-200 text-xs sm:text-sm font-mono hover:border-cyan-500/40 transition-all"
              >
                {skill.name} <span className="text-neutral-500 text-xs">({skill.category})</span>
              </span>
            ))}
          </div>
        </section>

        {/* Quick Contact Banner */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-black via-neutral-950 to-cyan-950/40 border border-neutral-800 space-y-6 text-center">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-cyan-400">
              04 // Let's Connect
            </span>
            <h2 className="text-3xl font-black text-white">Have a Project or Idea in Mind?</h2>
            <p className="text-neutral-300 text-sm leading-relaxed">
              I'm always open to new opportunities, collaborations, and discussions around AI/ML and software engineering.
            </p>
          </div>

          <div className="pt-2 flex justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-400 text-neutral-950 font-extrabold text-sm sm:text-base hover:from-cyan-300 hover:to-sky-300 transition-all shadow-lg shadow-cyan-500/20 hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <Mail size={18} />
              <span>Get In Touch</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
