import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  // Projects data
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-featured e-commerce application with shopping cart, payment integration, and admin dashboard. Built with React and modern best practices.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image:
        'https://images.unsplash.com/photo-1557821552-17105176677c?w=500&q=80',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Task Management App',
      description:
        'Collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
      image:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&q=80',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Weather Dashboard',
      description:
        'Beautiful weather application with detailed forecasts, interactive maps, and location-based services using modern APIs.',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'CSS3'],
      image:
        'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=500&q=80',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Fitness Tracker',
      description:
        'Mobile-first fitness tracking app with workout plans, progress tracking, and social features for motivation.',
      technologies: ['React Native', 'Node.js', 'PostgreSQL', 'JWT'],
      image:
        'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=500&q=80',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Portfolio CMS',
      description:
        'Content management system for creative professionals to showcase their work with customizable themes and SEO optimization.',
      technologies: ['React', 'Next.js', 'GraphQL', 'Prisma'],
      image:
        'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&q=80',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Real-Time Chat App',
      description:
        'Modern chat application with real-time messaging, file sharing, and group conversations powered by WebSocket.',
      technologies: ['React', 'Socket.io', 'Express', 'MongoDB'],
      image:
        'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=500&q=80',
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A selection of projects that showcase my skills and experience
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium"
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
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Want to see more of my work?</p>
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
