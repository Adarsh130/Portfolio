// src/App.jsx

import React, { Suspense } from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import LoadingSpinner from "./components/LoadingSpinner";
import { Analytics } from "@vercel/analytics/react"; // ✅ Correct import for Vite + React
import { SpeedInsights } from "@vercel/speed-insights/react";
import { ThemeProvider } from "./contexts/ThemeContext";

// Lazy load components for better performance
import {
  LazyAbout,
  LazySkills,
  LazyProjects,
  LazyExperience,
  LazyTestimonials,
  LazyBlog,
  LazyContact
} from "./components/LazyComponents";

function App() {

  return (
    <ThemeProvider>
      <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white overflow-x-hidden">
        <Navbar />
        <main className="pt-20">
          <Home />
          
          {/* Lazy loaded sections with suspense */}
          <Suspense fallback={<LoadingSpinner message="Loading About..." />}>
            <LazyAbout />
          </Suspense>
          
          <Suspense fallback={<LoadingSpinner message="Loading Skills..." />}>
            <LazySkills />
          </Suspense>
          
          <Suspense fallback={<LoadingSpinner message="Loading Projects..." />}>
            <LazyProjects />
          </Suspense>
          
          <Suspense fallback={<LoadingSpinner message="Loading Experience..." />}>
            <LazyExperience />
          </Suspense>
          
          <Suspense fallback={<LoadingSpinner message="Loading Testimonials..." />}>
            <LazyTestimonials />
          </Suspense>
          
          <Suspense fallback={<LoadingSpinner message="Loading Blog..." />}>
            <LazyBlog />
          </Suspense>
          
          <Suspense fallback={<LoadingSpinner message="Loading Contact..." />}>
            <LazyContact />
          </Suspense>
        </main>
        <Footer />
        <Analytics /> {/* ✅ Vercel Analytics integration */}
        <SpeedInsights /> {/* ✅ Vercel Speed Insights integration */}
      </div>
    </ThemeProvider>
  );
}

export default App;