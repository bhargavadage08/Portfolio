import React from 'react';

export default function Hero() {
  return (
    <section className="min-h-screen pt-32 pb-20 flex items-center justify-center bg-slate-950 text-center px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex justify-center gap-4 pt-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
