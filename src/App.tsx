import React, { useState } from "react";
import { SectionId } from "./types";
import { JSX } from "react/jsx-runtime";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import "./App.css";

function App(): JSX.Element {
  const [activeSection, setActiveSection] = useState<SectionId>("home");

  const scrollToSection = (sectionId: SectionId): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setActiveSection(sectionId);
    }
  };

  const handleViewProjects = (): void => {
    scrollToSection("frontend");
  };

  const handleContact = (): void => {
    scrollToSection("contact");
  };

  return (
    <div className="App bg-gray-900 text-white min-h-screen">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />

      <main className="pt-20">
        {/* Hero Section */}
        <div id="home">
          <Hero onViewProjects={handleViewProjects} onContact={handleContact} />
        </div>
        <div
          id="about"
          className="h-screen flex items-center justify-center bg-gray-800"
        >
          <h1 className="text-4xl">Seção About</h1>
        </div>
        <div
          id="frontend"
          className="h-screen flex items-center justify-center"
        >
          <h1 className="text-4xl">Seção Frontend</h1>
        </div>
        <div
          id="backend"
          className="h-screen flex items-center justify-center bg-gray-800"
        >
          <h1 className="text-4xl">Seção Backend</h1>
        </div>
        <div id="contact" className="h-screen flex items-center justify-center">
          <h1 className="text-4xl">Seção Contact</h1>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
