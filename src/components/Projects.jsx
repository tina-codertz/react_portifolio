import React, { useState } from 'react';
import { ExternalLink, Github, User, Users, ChevronDown, ChevronUp } from 'lucide-react';
import bucket from '../assets/bucket.png';
import appointment from '../assets/appointment.png';
import ticket from '../assets/ticket.png';

export function Projects() {
  const projects = [
    // ... (your projects array remains unchanged)
    {
      id: 'portfolio-website',
      title: 'Personal Portfolio Website',
      description: 'Designed and developed a fully responsive portfolio website using React and modern UI animations...',
      technologies: ['React', 'Tailwind CSS', 'JavaScript'],
      image: '',
      githubUrl: 'https://github.com/tina-codertz/react_portifolio',
      liveUrl: '',
      category: 'personal',
    },
    {
      id: 'instagram-clone',
      title: 'Instagram Application Clone',
      description: 'Built a React Native mobile application with core social features...',
      technologies: ['React Native', 'JavaScript', 'REST API'],
      image: '',
      githubUrl: 'https://github.com/tina-codertz/instagram_clone',
      liveUrl: '',
      category: 'personal',
    },
    {
      id: 'e-ticketing-platform',
      title: 'E-Ticketing Platform',
      description: 'Developed a full-stack event ticketing platform...',
      technologies: ['React', 'Node.js', 'REST API'],
      image: ticket,
      githubUrl: 'https://github.com/tina-codertz/e-ticketing',
      liveUrl: '',
      category: 'personal',
    },
    {
      id: 'team management system',
      title: 'Team Management System',
      description: 'Developed a full-stack team management system...',
      technologies: ['React', 'Django', 'REST API'],
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&q=80",
      githubUrl: 'https://github.com/ByteUjamaa/team-learning-system',
      liveUrl: 'https://tlms.live',
      category: 'organizational',
    },
    // ... rest of your projects
  ];

  const personalProjects = projects.filter(p => p.category === 'personal');
  const organizationalProjects = projects.filter(p => p.category === 'organizational');

  const [showAllPersonal, setShowAllPersonal] = useState(false);
  const [showAllOrg, setShowAllOrg] = useState(false);

  const displayedPersonal = showAllPersonal 
    ? personalProjects 
    : personalProjects.slice(0, 3);

  const displayedOrganizational = showAllOrg 
    ? organizationalProjects 
    : organizationalProjects.slice(0, 3);

  const hasMorePersonal = personalProjects.length > 3;
  const hasMoreOrg = organizationalProjects.length > 3;

  const ProjectCard = ({ project }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
      <div className="h-48 overflow-hidden bg-gray-200 flex items-center justify-center">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <span className="text-gray-500 text-sm">No Image Available</span>
        )}
      </div>

      <div className="p-6">
        <div className="mb-3">
          {project.category === 'personal' ? (
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
              <User size={14} /> Personal Project
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
              <Users size={14} /> Team Project
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm"
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium text-sm"
            >
              <Github size={16} /> Code
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
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-blue-100 p-3 rounded-lg">
              <User className="text-blue-600" size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Personal Projects</h3>
              <p className="text-gray-600 text-sm">
                Projects built independently to sharpen skills and explore ideas
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedPersonal.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {hasMorePersonal && (
            <div className="text-center mt-10">
              <button
                onClick={() => setShowAllPersonal(!showAllPersonal)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
              >
                {showAllPersonal ? (
                  <>
                    Show Less <ChevronUp size={18} />
                  </>
                ) : (
                  <>
                    Show More ({personalProjects.length - 3} more) <ChevronDown size={18} />
                  </>
                )}
              </button>
            </div>
          )}
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
                Collaborative projects completed as part of academic and development teams.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedOrganizational.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {hasMoreOrg && (
            <div className="text-center mt-10">
              <button
                onClick={() => setShowAllOrg(!showAllOrg)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors shadow-md hover:shadow-lg"
              >
                {showAllOrg ? (
                  <>
                    Show Less <ChevronUp size={18} />
                  </>
                ) : (
                  <>
                    Show More ({organizationalProjects.length - 3} more) <ChevronDown size={18} />
                  </>
                )}
              </button>
            </div>
          )}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-4">
            Want to explore even more of my work?
          </p>
          <a
            href="https://github.com/tina-codertz"
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