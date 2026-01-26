import React, { useState } from "react";
import {
  ActivityIcon,
  BookAIcon,
  Contact2Icon,
  HomeIcon,
  Menu,
  SparklesIcon,
  X,
} from "lucide-react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home", icon: HomeIcon },
    { name: "About", href: "#about", icon: BookAIcon },
    { name: "Skills", href: "#skills", icon: SparklesIcon },
    { name: "Projects", href: "#projects", icon: ActivityIcon },
    { name: "Contact", href: "#contacts", icon: Contact2Icon },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">
            Portfolio
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
              >
                <Icon size={20} />
                {name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 font-medium transition-colors duration-300"
              >
                <Icon size={20} />
                {name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
