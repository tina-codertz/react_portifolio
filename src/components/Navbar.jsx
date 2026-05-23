import React from "react";
import { useState, useEffect } from "react";
import {
  Home,
  User,
  Sparkles,
  Briefcase,
  Award,
  Mail,
  Menu,
  X,
} from "lucide-react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Skills", href: "#skills", icon: Sparkles },
    { name: "Projects", href: "#projects", icon: Briefcase },
    { name: "Certifications", href: "#certifications", icon: Award },
    { name: "Contact", href: "#contact", icon: Mail },
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass shadow-lg shadow-black/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="text-2xl font-extrabold tracking-tight text-gradient">
            C.J.Kimario
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200"
              >
                <Icon size={16} />
                {name}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-lg text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="glass border-t border-gray-200/50 px-4 pt-2 pb-4 space-y-1">
          {navItems.map(({ name, href, icon: Icon }) => (
            <a
              key={name}
              href={href}
              onClick={(e) => handleNavClick(e, href)}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg text-gray-600 hover:text-primary-600 hover:bg-primary-50 font-medium transition-all duration-200"
            >
              <Icon size={18} />
              {name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
