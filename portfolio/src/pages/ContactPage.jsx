import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Mail, Send, MapPin, CheckCircle2, MessageSquare } from 'lucide-react';
import { Github, Linkedin } from '../Components/Icons';

export default function ContactPage() {
  const { personal } = PORTFOLIO_DATA;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 4000);
    }
  };

  return (
    <div className="pt-28 pb-24 px-4 sm:px-8 relative min-h-screen bg-black text-neutral-100">
      <div className="max-w-4xl mx-auto space-y-12 relative z-10">

        {/* Page Header */}
        <div className="space-y-4 text-center sm:text-left border-b border-neutral-800/80 pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-cyan-400 text-xs font-mono">
            <Mail size={14} />
            <span>Dedicated Page // Get In Touch</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            Contact & <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">Collaborate</span>
          </h1>

          <p className="text-neutral-300 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
            Whether you have a project idea, a job opportunity, or simply want to connect, feel free to drop a message!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

          {/* Left Column: Direct Info */}
          <div className="md:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-neutral-900/60 border border-neutral-800/80 space-y-6 shadow-xl">
              <h2 className="text-xl font-bold text-white border-b border-neutral-800 pb-3 flex items-center gap-2">
                <MessageSquare size={18} className="text-cyan-400" />
                <span>Contact Details</span>
              </h2>

              <div className="space-y-4 text-sm text-neutral-300">
                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-cyan-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-neutral-500 font-mono uppercase">Email Address</p>
                    <a href={`mailto:${personal.email}`} className="font-semibold text-white hover:text-cyan-300 transition-colors">
                      {personal.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-cyan-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-neutral-500 font-mono uppercase">Location</p>
                    <p className="font-semibold text-white">{personal.location || 'India'}</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-neutral-800/80 space-y-3">
                <p className="text-xs font-mono text-neutral-400 uppercase">Connect via Socials:</p>
                <div className="flex items-center gap-3">
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-black border border-neutral-800 text-neutral-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all flex items-center gap-2 text-xs font-semibold"
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-black border border-neutral-800 text-neutral-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all flex items-center gap-2 text-xs font-semibold"
                  >
                    <Linkedin size={16} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="md:col-span-7">
            <div className="p-8 rounded-3xl bg-neutral-900/60 border border-neutral-800/80 space-y-6 shadow-xl backdrop-blur-sm">
              <h2 className="text-xl font-bold text-white border-b border-neutral-800 pb-3">
                Send Me a Message
              </h2>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-950/60 border border-emerald-800/80 text-emerald-300 text-center space-y-2">
                  <CheckCircle2 size={32} className="mx-auto text-emerald-400" />
                  <h3 className="text-lg font-bold text-white">Message Sent Successfully!</h3>
                  <p className="text-xs text-emerald-200">Thank you for reaching out, Bhargav will get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-neutral-400 uppercase">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-neutral-400 uppercase">Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-neutral-400 uppercase">Your Message</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-400 text-neutral-950 font-extrabold text-sm hover:from-cyan-300 hover:to-sky-300 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send size={16} />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
