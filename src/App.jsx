import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Curriculum from './components/Curriculum';
import Projects from './components/Projects';
import WhoCanJoin from './components/WhoCanJoin';
import LearningJourney from './components/LearningJourney';
import About from './components/About';
import FAQ from './components/FAQ';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Sticky Glass Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Course Benefits */}
        <Benefits />

        {/* 3. Course Curriculum */}
        <Curriculum />

        {/* 4. Hands-On Projects */}
        <Projects />

        {/* 5. Who Can Join & Prerequisites */}
        <WhoCanJoin />

        {/* 6. 4-Phase Learning Journey */}
        <LearningJourney />

        {/* 7. About Section (Academy Mission & Values) */}
        <About />

        {/* 8. Frequently Asked Questions */}
        <FAQ />

        {/* 9. Registration & Enquiry Form */}
        <RegistrationForm />
      </main>

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}
