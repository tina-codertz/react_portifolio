import React from "react";
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-gray-400">
              © {currentYear} C.J.kimario. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex gap-6">
            <a
              href="#home"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-400 hover:text-white transition-colors"
            >
              About
            </a>
             <a
              href="#skills"
              className="text-gray-400 hover:text-white transition-colors"
            >
            Skills
            </a>
            <a
              href="#projects"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Projects
            </a>
             <a
              href="#certifications"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Certifications
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Built With */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
