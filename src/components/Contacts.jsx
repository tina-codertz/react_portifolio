import React from "react";
import { Github, Instagram, Linkedin, Mail, Send } from "lucide-react";

export function Contacts() {
  const contactInfo = {
    email: "christinakimario8@gmail.com",
    github: "https://github.com/tina-codertz",
    linkedin: "https://linkedin.com/in/ChristinaKimario",
    instagram: "https://instagram.com/_christinajustine",
  };

  const socials = [
    {
      href: contactInfo.github,
      icon: Github,
      label: "GitHub",
      hoverBg: "hover:bg-gray-900",
    },
    {
      href: contactInfo.linkedin,
      icon: Linkedin,
      label: "LinkedIn",
      hoverBg: "hover:bg-blue-600",
    },
    {
      href: contactInfo.instagram,
      icon: Instagram,
      label: "Instagram",
      hoverBg: "hover:bg-pink-500",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-slate-50 via-primary-50/40 to-accent-400/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Get In Touch
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from
            you!
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-3xl shadow-xl shadow-gray-900/5 p-8 sm:p-10 border border-gray-100">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl mb-5 shadow-lg shadow-primary-500/20">
                <Mail className="text-white" size={24} />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Email Me
              </h3>

              <a
                href={`mailto:${contactInfo.email}`}
                className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
              >
                {contactInfo.email}
              </a>

              <div className="mt-5">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-primary-500/25 transform hover:scale-[1.02] transition-all duration-300"
                >
                  <Send size={16} />
                  Send Email
                </a>
              </div>
            </div>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-100"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-4 bg-white text-gray-400 text-sm font-medium">
                  Or connect on
                </span>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              {socials.map(({ href, icon: Icon, label, hoverBg }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center w-12 h-12 bg-gray-50 rounded-xl text-gray-500 ${hoverBg} hover:text-white transform hover:scale-110 transition-all duration-300 border border-gray-100 hover:border-transparent`}
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-400 text-sm">
                Available for freelance opportunities and full-time positions
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-400 text-sm">
            I typically respond within 24–48 hours
          </p>
        </div>
      </div>
    </section>
  );
}
