import React, { useState } from "react";
import { SectionId } from "./types";
import { JSX } from "react/jsx-runtime";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import "./App.css";
import About from "./components/sections/About";
import FrontendProjects from "./components/sections/FrontEnd";
import BackendProjects from "./components/sections/BackEnd";
import Contact from "./components/sections/Contact";

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
        <About />
        <FrontendProjects />
        <BackendProjects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
