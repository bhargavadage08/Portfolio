import React from 'react';

const skills = ["React", "JavaScript", "TypeScript", "Node.js", "Python", "Tailwind CSS", "PostgreSQL", "Docker"];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-4xl mx-auto space-y-8 text-center">
        <h2 className="text-3xl font-bold text-white">Skills & Competencies</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
