import React from 'react';

export default function Hero() {
  return (
    <section className="min-h-screen pt-32 pb-20 flex items-center justify-center bg-slate-950 text-center px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white">
          Welcome to My Developer Portfolio
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Full Stack Software Engineer specializing in modern web applications, scalable APIs, and intuitive user experiences.
        </p>
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
