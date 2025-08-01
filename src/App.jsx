// src/App.jsx

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react"; // ✅ Correct import for Vite + React
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white overflow-x-hidden">
      <Navbar />
      <main className="pt-20">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <Analytics /> {/* ✅ Vercel Analytics integration */}
      <SpeedInsights /> {/* ✅ Vercel Speed Insights integration */}
    </div>
  );
}

export default App;