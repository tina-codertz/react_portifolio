import React from "react";
import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-gray-950 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          <a href="#home" className="text-xl font-extrabold tracking-tight text-gradient">
            C.J.Kimario
          </a>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {links.map(({ name, href }) => (
              <a
                key={name}
                href={href}
                className="text-gray-400 hover:text-white text-sm font-medium transition-colors duration-200"
              >
                {name}
              </a>
            ))}
          </div>

          <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

          <div className="flex flex-col items-center gap-1 text-gray-500 text-xs">
            <p className="flex items-center gap-1">
              Built with <Heart size={12} className="text-accent-500" /> using React & Tailwind CSS
            </p>
            <p>&copy; {currentYear} C.J.Kimario. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
