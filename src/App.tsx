import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Interests } from './components/Interests';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { LearningGoals } from './components/LearningGoals';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F7F5EF] text-[#292C27] font-sans flex flex-col selection:bg-[#C58F78]/25 selection:text-[#292C27]">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: About Me */}
        <About />

        {/* Section 3: Technical Interests */}
        <Interests />

        {/* Section 4: Five Featured Projects */}
        <Projects />

        {/* Section 5: Tech Stack & Skills */}
        <Skills />

        {/* Section 6: Education & Certifications */}
        <Education />

        {/* Section 7: Learning Goals */}
        <LearningGoals />

        {/* Section 8: Contact */}
        <Contact />
      </main>

      {/* Section 9: Footer */}
      <Footer />
    </div>
  );
}
