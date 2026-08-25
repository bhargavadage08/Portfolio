import React, { useState } from 'react';
import { ArrowRight, Terminal, Mail, Sparkles, CheckCircle2, Copy, Check } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

// SVG Brand Icons
const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('stack');

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-grid-pattern">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs font-medium text-cyan-300 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-4" />
              <span>{PORTFOLIO_DATA.personal.status}</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Crafting High-Performance{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                  Web Applications
                </span>{' '}
                & Scalable Systems
              </h1>
              <p className="text-lg sm:text-xl text-slate-400 font-normal leading-relaxed max-w-2xl pt-2">
                {PORTFOLIO_DATA.personal.tagline}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl font-semibold text-sm text-slate-900 bg-gradient-to-r from-cyan-400 via-cyan-300 to-indigo-400 hover:from-cyan-300 hover:to-indigo-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <span>View Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-xl font-semibold text-sm text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 transition-all flex items-center gap-2"
              >
                <span>Let's Talk</span>
              </a>

              <button
                onClick={copyEmail}
                className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-slate-700 transition-all"
                title="Copy Email Address"
              >
                {copied ? <Check className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>

            <div className="flex items-center gap-6 pt-4 text-slate-400 text-sm">
              <span className="font-medium text-slate-500">Connect:</span>
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Code Showcase / Terminal Card (NO Avatar) */}
          <div className="lg:col-span-5">
            <div className="relative glass-card rounded-2xl p-1 shadow-2xl border border-slate-800/80 overflow-hidden group">
              <div className="bg-slate-900/90 px-4 py-3 rounded-t-xl flex items-center justify-between border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    developer.config.ts
                  </span>
                </div>
                <div className="flex gap-1 bg-slate-950 px-2 py-1 rounded-md text-[11px] font-mono text-slate-400">
                  <button
                    onClick={() => setActiveTab('stack')}
                    className={`px-2 py-0.5 rounded ${activeTab === 'stack' ? 'bg-cyan-500/20 text-cyan-300' : 'hover:text-slate-200'}`}
                  >
                    stack.ts
                  </button>
                  <button
                    onClick={() => setActiveTab('bio')}
                    className={`px-2 py-0.5 rounded ${activeTab === 'bio' ? 'bg-cyan-500/20 text-cyan-300' : 'hover:text-slate-200'}`}
                  >
                    profile.json
                  </button>
                </div>
              </div>

              <div className="p-5 font-mono text-xs leading-relaxed bg-[#0a0e17]/90 text-slate-300 overflow-x-auto min-h-[300px]">
                {activeTab === 'stack' ? (
                  <div className="space-y-1.5">
                    <div className="text-slate-500">// Modern Tech Stack Configuration</div>
                    <div>
                      <span className="text-purple-400">export const</span>{' '}
                      <span className="text-cyan-300">developerProfile</span> = {'{'}
                    </div>
                    <div className="pl-4">
                      <span className="text-indigo-300">name</span>: <span className="text-amber-300">"{PORTFOLIO_DATA.personal.name}"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-indigo-300">role</span>: <span className="text-amber-300">"Full Stack Engineer"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-indigo-300">coreTechnologies</span>: [
                    </div>
                    <div className="pl-8 text-emerald-400">
                      "React 19", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL", "Docker"
                    </div>
                    <div className="pl-4">],</div>
                    <div className="pl-4">
                      <span className="text-indigo-300">focus</span>: <span className="text-amber-300">"Scalability & UX Excellence"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-indigo-300">status</span>: <span className="text-cyan-400">"Ready for deployment"</span>
                    </div>
                    <div>{'}'};</div>
                    <div className="pt-3 text-slate-500">// Run health check</div>
                    <div className="text-cyan-400 flex items-center gap-2 pt-1">
                      <Sparkles className="w-4 h-4 text-emerald-400 animate-spin" />
                      <span>System Status: 100% Operational & Ready</span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-1.5">
                    <div className="text-slate-500">// Profile Details</div>
                    <div>{'{'}</div>
                    <div className="pl-4">
                      <span className="text-indigo-300">"location"</span>: <span className="text-amber-300">"{PORTFOLIO_DATA.personal.location}"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-indigo-300">"email"</span>: <span className="text-amber-300">"{PORTFOLIO_DATA.personal.email}"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-indigo-300">"experience"</span>: <span className="text-amber-300">"4+ Years"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-indigo-300">"interests"</span>: [ <span className="text-emerald-400">"Distributed Systems", "Clean UI", "AI Tools"</span> ]
                    </div>
                    <div>{'}'}</div>
                  </div>
                )}
              </div>

              <div className="bg-slate-900/80 px-4 py-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Clean Code Architecture</span>
                </div>
                <span className="font-mono text-slate-500">v2.4.0</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
