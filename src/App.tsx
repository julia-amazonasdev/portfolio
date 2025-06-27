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

  const handleScroll = (sectionId: SectionId) => {
    console.log("Navegando para seção:", sectionId); // para debug

    const element = document.getElementById(sectionId);

    if (element) {
      // Método 1: Usando scrollIntoView (mais simples)
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.error(`Seção "${sectionId}" não encontrada!`);
    }
  };

  return (
    <div className="App bg-gray-900 text-white min-h-screen">
      <Navbar scrollToSection={handleScroll} />

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
