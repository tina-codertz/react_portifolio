import React from 'react';
import { ExternalLink, Github, User, Users } from 'lucide-react';
import bucket from '../assets/bucket.png';
import appointment from '../assets/appointment.png';
import ticket from '../assets/ticket.png';

export function Projects() {
  // Projects data - organized by category
  const projects = [
    // Personal Projects
    {
      title: 'Personal Portfolio Website',
      description:
        'Designed and developed a responsive portfolio using React and modern UI animations to showcase skills, projects, and experience.',
      technologies: ['React', 'Tailwind CSS', 'JavaScript'],
      image:
        '',
      
      githubUrl: 'https://github.com/tina-codertz/react_portifolio',
      category: 'personal',
    },
    {
      title: 'Instagram application clone ',
      description:
        'Built a react-native-based mobile app with features like instagram where users can share post and follow each other',
      technologies: ['React-native', 'JavaScript', 'REST API'],
      image:
        '',
      
      githubUrl: 'https://github.com/tina-codertz/instagram_clone',
      category: 'personal',
    },
     {
      title: 'e-ticketing platform ',
      description:
        'Built a react based application where users can book tickets for events and concerts',
      technologies: ['React', 'Nodejs', 'REST API'],
      image:
    ticket,
      
      githubUrl: 'https://github.com/tina-codertz/e-ticketing',
      category: 'personal',
    },
    {
      title: 'Air Quality Monitoring Platform',
      description:
        'Designed a cloud-based IoT data flow for real-time air quality data collection and visualization (Concept & Prototype).',
      technologies: ['IoT', 'Cloud Architecture', 'Data Visualization'],
      image:
        'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=500&q=80',
    
      githubUrl: 'https://github.com/goldprogrammer123/AIR-QUALITY-MONOTORING-SYSTEM',
      category: 'organizational',
    },

    // Organizational Projects
    {
      title: 'A collaborative bucket list web application',
      description:
        'Collaborated in a team to design and implement a web application, contributing to frontend development and system documentation.',
      technologies: ['React','Django', 'Team Collaboration','GitHub'],
      image:
        bucket,
      githubUrl: 'https://github.com/Habrovan004/collaborative_bucket_lists',
      category: 'organizational',
    },
    {
      title: 'Appointment management system',
      description:
        'Worked with peers to develop a web-based appointment management system, focusing on user interface design and backend integration.',
      technologies: ['React', 'Django', 'Github', 'Teamwork'],
      image:
        appointment,
      githubUrl: 'https://github.com/ByteUjamaa/Appointment',
      category: 'organizational',
    },
  ];

  // Separate projects by category
  const personalProjects = projects.filter(
    (p) => p.category === 'personal'
  );
  const organizationalProjects = projects.filter(
    (p) => p.category === 'organizational'
  );

  // Project Card Component
  const ProjectCard = ({ project }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
      {/* Image */}
      <div className="h-48 overflow-hidden bg-gray-200">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category Badge */}
        <div className="mb-3">
          {project.category === 'personal' ? (
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
              <User size={14} />
              Personal Project
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
              <Users size={14} />
              Team Project
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3">
          {project.title}
        </h3>

        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium text-sm"
            >
              <Github size={16} />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Projects & Work
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A showcase of personal initiatives and collaborative team projects
          </p>
        </div>

        {/* Personal Projects */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-blue-100 p-3 rounded-lg">
              <User className="text-blue-600" size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                Personal Projects
              </h3>
              <p className="text-gray-600 text-sm">
                Projects built independently to sharpen skills and explore ideas
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {personalProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>

        {/* Organizational Projects */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-green-100 p-3 rounded-lg">
              <Users className="text-green-600" size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                Organizational & Team Projects
              </h3>
              <p className="text-gray-600 text-sm">
                Collaborative projects completed as part of academic teams in github
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {organizationalProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-4">Want to see more of my work?</p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            <Github size={20} />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
