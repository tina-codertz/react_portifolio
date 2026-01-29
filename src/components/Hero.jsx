import { ArrowBigDown, ArrowBigDownDash, ArrowBigRight, ScrollIcon, ScrollText } from "lucide-react";
import React from "react";
export function Hero() {
  const handleContactClick = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleProjectClick = () => {
    const projectsSection = document.querySelector("#projeects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-500 to-indigo-100 pt-6"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-20 text-center">
        {/* main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Hi, I'm{" "}
           <span className="text-blue-600 bg-clip-text">Christina Kimario</span>
        </h1>
       

        {/* subheading */}
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-8">
          Full Stack Developer{" "}
        </p>

        {/* description */}
        <p className="text-base sm:text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Interested in building, functional web and mobile applications, mostly
          in React, React Native and modern Javascript technologies
        </p>

        {/* call to action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            onClick={handleContactClick}
          >
            Get in touch
          </button>
          <button
            className="w-full sm:w-auto px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 "
            onClick={handleProjectClick}
          >
            View my work
          </button>
        </div>

        {/* scroll indicator */}
        <div className="mt-16 animate-bounce">
          <ArrowBigDown className="w-16 h-6 mx-auto text-gray-600" />
        </div>
      </div>
    </section>
  );
}
