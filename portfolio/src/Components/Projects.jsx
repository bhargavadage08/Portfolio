import React from 'react';

const projects = [
  { id: 1, title: "Project One", description: "Full stack web application built with React & Node.js." },
  { id: 2, title: "Project Two", description: "Cloud infrastructure management dashboard." },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-900/50 px-4">
      <div className="max-w-4xl mx-auto space-y-8 text-center">
        <h2 className="text-3xl font-bold text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-left space-y-2">
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <p className="text-slate-400 text-sm">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
