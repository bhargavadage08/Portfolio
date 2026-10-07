import React from 'react';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Projects from '../Components/Projects';
import Experience from '../Components/Experience';
import Contact from '../Components/Contact';

export default function Home() {
  return (
    <div className="bg-black text-neutral-100">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}
