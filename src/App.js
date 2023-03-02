import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import Tools from "./components/Tools";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font bg">
      <Navbar />
      <About />
      <AboutMe />
      <Projects />
      <Skills />
      <Tools />
      <Contact />
    </main>
  );
}
