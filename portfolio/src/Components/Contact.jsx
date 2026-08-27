import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900/50 px-4">
      <div className="max-w-2xl mx-auto space-y-6 text-center">
        <h2 className="text-3xl font-bold text-white">Get In Touch</h2>
        <p className="text-slate-400 text-sm">Feel free to reach out for collaborations or opportunities.</p>
        <a
          href="mailto:alex.dev@example.com"
          className="inline-block px-6 py-3 rounded-xl bg-cyan-400 text-slate-950 font-bold hover:bg-cyan-300 transition-colors"
        >
          Send Email
        </a>
      </div>
    </section>
  );
}
