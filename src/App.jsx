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

import { Analytics } from "@vercel/analytics/react"; // ✅ Vercel Analytics
import { SpeedInsights } from "@vercel/speed-insights/next"; // ✅ Vercel Speed Insights

function App() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
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
      <Analytics /> {/* Vercel Analytics tracking */}
      <SpeedInsights /> {/* Vercel Speed Insights tracking */}
    </div>
  );
}

export default App;
