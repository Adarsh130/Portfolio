import React from "react";

const testimonials = [
  {
    feedback:
      "Adarsh's AI-based tutoring system was one of the best student-led innovations I've seen. It truly reflects his problem-solving mindset.",
    
  },
  {
    feedback:
      "His Weather App and ML projects show a great mix of frontend design and backend logic. Impressive attention to detail!",
  
  },
  {
    feedback:
      "Working with Adarsh on the insurance and diabetes prediction models was smooth and professional. He quickly grasps complex data pipelines.",
    
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative flex flex-col items-center justify-center px-4 py-16 bg-gray-100 dark:bg-gray-900 overflow-hidden"
    >
      {/* Blobs */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-pink-400 opacity-20 rounded-full filter blur-3xl animate-blob1 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-400 opacity-20 rounded-full filter blur-3xl animate-blob2 pointer-events-none" />

      <div className="relative z-10 max-w-4xl w-full text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-10">
          Testimonials
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 border border-blue-100 dark:border-gray-700 shadow-md p-4 rounded-xl text-sm"
            >
              <p className="text-xs text-gray-700 dark:text-gray-300 italic mb-2 leading-snug">
                "{testimonial.feedback}"
              </p>
              <h4 className="text-xs font-semibold text-blue-700 dark:text-blue-300">
                – {testimonial.name}
              </h4>
            </div>
          ))}
        </div>
      </div>

      {/* Blob Animation & Glow */}
      <style>
        {`
          .glow-text {
            text-shadow: 0 0 6px rgba(59,130,246,0.5);
          }
          @keyframes blob1 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(-10px, -20px) scale(1.05); }
          }
          .animate-blob1 {
            animation: blob1 8s infinite ease-in-out;
          }
          @keyframes blob2 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(10px, 20px) scale(1.05); }
          }
          .animate-blob2 {
            animation: blob2 10s infinite ease-in-out;
          }
        `}
      </style>
    </section>
  );
};

export default Testimonials;
