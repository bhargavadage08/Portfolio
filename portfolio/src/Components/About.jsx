import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-900/50 px-4">
      <div className="max-w-4xl mx-auto space-y-4 text-center">
        <h2 className="text-3xl font-bold text-white">About Me</h2>
        <p className="text-slate-400 text-base leading-relaxed">
          Passionate software engineer focused on writing clean, maintainable code and delivering high-quality software solutions.
        </p>
      </div>
    </section>
  );
}
