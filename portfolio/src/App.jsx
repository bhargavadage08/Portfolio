import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';

import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import ExperiencePage from './pages/ExperiencePage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-black text-neutral-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 flex flex-col justify-between">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}