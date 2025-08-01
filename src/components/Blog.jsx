import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

const blogPosts = [
  {
    title: "How I Built an AI-Based Tutoring Platform",
    date: "July 2025",
    summary:
      "I combined Python and HTML/CSS to create an intelligent tutoring system with personalized AI chat and test tracking features.",
  },
  {
    title: "Clustering with IRIES_MODEL – From Data to Insight",
    date: "July 2025",
    summary:
      "A deep dive into unsupervised learning and data visualization using the IRIES dataset, clustering for actionable insights.",
  },
  {
    title: "Predicting Health Outcomes with Machine Learning",
    date: "June 2025",
    summary:
      "Built ML models to predict diabetes and insurance outcomes. This helped understand healthcare decision-making with data.",
  },
  {
    title: "Building a Real-Time Weather App with Flask and WeatherAPI",
    date: "July 2025",
    summary:
      "Used Flask, WeatherAPI, and Bootstrap to make a responsive weather app that fetches and displays real-time weather data.",
  },
];

const Blog = () => {
  return (
    <section
      id="blog"
      className="relative flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-b from-white via-blue-50 to-white dark:from-black dark:via-gray-900 dark:to-black overflow-hidden"
    >
      {/* Decorative Backgrounds */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-400 opacity-20 rounded-full blur-3xl animate-blob1 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500 opacity-20 rounded-full blur-3xl animate-blob2 pointer-events-none" />

      <div className="relative z-10 max-w-5xl w-full">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16">
          Blog Timeline
        </h2>

        <div className="relative pl-8 sm:pl-12">
          {/* Vertical gradient line */}
          <div className="absolute left-3 sm:left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-blue-800 dark:from-blue-600 dark:to-purple-800 rounded-full"></div>

          <div className="space-y-16">
            {blogPosts.map((post, index) => (
              <div key={index} className="relative group flex items-start">
                {/* Timeline Dot with Glow */}
                <div className="absolute left-0 sm:left-1 top-2.5 w-5 h-5 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg shadow-blue-400/50 border-4 border-white dark:border-gray-900 group-hover:scale-110 transition-transform duration-300" />

                {/* Content Box */}
                <div className="ml-8 sm:ml-12 p-4 sm:p-6 bg-white dark:bg-gray-800 shadow-xl rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
                  <div className="flex items-center gap-2 text-sm text-blue-700 dark:text-blue-300 font-medium mb-2">
                    <FaRegCalendarAlt className="text-base" />
                    {post.date}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {post.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          .glow-text {
            text-shadow: 0 0 10px rgba(59,130,246,0.6), 0 0 20px rgba(59,130,246,0.4);
          }
          @keyframes blob1 {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-30px) scale(1.1); }
          }
          .animate-blob1 {
            animation: blob1 8s infinite ease-in-out;
          }
          @keyframes blob2 {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(30px) scale(1.1); }
          }
          .animate-blob2 {
            animation: blob2 10s infinite ease-in-out;
          }
        `}
      </style>
    </section>
  );
};

export default Blog;
