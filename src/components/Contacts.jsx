import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import React from "react";
export function Contacts() {
  const contactInfo = {
    email: 'christinakimario8@gmail.com',
    github: 'https://github.com/tina-codertz',
    linkedin: 'https://linkedin.com/in/ChristinaKimario',
    instagram: 'https://instagram.com/_christinajustine',

  
  };

  return (
    <section id="contact" className="py-20 bg-linear-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        {/* Contact Card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
            {/* Email Section */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Mail className="text-blue-600" size={32} />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Email Me
              </h3>
              
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-blue-600 hover:text-blue-700 text-lg font-medium transition-colors"
              >
                {contactInfo.email}
              </a>
              
              <div className="mt-6">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Send Email
                </a>
              </div>
            </div>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500 font-medium">
                  Or connect with me on
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6">
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-14 h-14 bg-gray-100 rounded-full text-gray-700 hover:bg-gray-900 hover:text-white transform hover:scale-110 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>

              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-14 h-14 bg-gray-100 rounded-full text-gray-700 hover:bg-blue-600 hover:text-white transform hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>

              <a
                href={contactInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-14 h-14 bg-gray-100 rounded-full text-gray-700 hover:bg-blue-400 hover:text-white transform hover:scale-110 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>

            {/* Additional Info */}
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Available for freelance opportunities and full-time positions
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-gray-600">
            I typically respond within 24-48 hours
          </p>
        </div>
      </div>
    </section>
  );
}
