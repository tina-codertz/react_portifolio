import React from "react";
import { ArrowDown, Sparkles } from "lucide-react";

export function Hero() {
  const handleContactClick = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleProjectClick = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-primary-50 to-accent-400/10"
    >
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-400/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-200/10 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-20 text-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100/80 text-primary-700 text-sm font-medium mb-8 border border-primary-200/50">
            <Sparkles size={14} />
            Available for new opportunities
          </div>
        </div>

        <h1 className="animate-fade-in-up-delay-1 text-4xl sm:text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
          Hi, I'm{" "}
          <span className="text-gradient">Christina Kimario</span>
        </h1>

        <p className="animate-fade-in-up-delay-2 text-xl sm:text-2xl md:text-3xl font-medium text-gray-500 mb-6">
          Full Stack Developer
        </p>

        <p className="animate-fade-in-up-delay-3 text-base sm:text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
          Interested in building functional web and mobile applications with
          React, React Native, and modern JavaScript technologies.
        </p>

        <div className="animate-fade-in-up-delay-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-primary-500/25 transform hover:scale-[1.02] transition-all duration-300"
            onClick={handleContactClick}
          >
            Get in touch
          </button>
          <button
            className="w-full sm:w-auto px-8 py-3.5 bg-white text-gray-700 border border-gray-200 rounded-xl font-semibold hover:border-primary-300 hover:text-primary-600 hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300"
            onClick={handleProjectClick}
          >
            View my work
          </button>
        </div>

        <div className="mt-20 animate-bounce">
          <ArrowDown className="w-5 h-5 mx-auto text-gray-400" />
        </div>
      </div>
    </section>
  );
}
