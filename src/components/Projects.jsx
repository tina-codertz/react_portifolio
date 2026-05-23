import React from "react";
import { useState } from "react";
import {
  ExternalLink,
  Github,
  User,
  Users,
  ChevronDown,
  ChevronUp,
  FolderOpen,
} from "lucide-react";
import bucket from "../assets/bucket.png";
import appointment from "../assets/appointment.png";
import ticket from "../assets/ticket.png";

export function Projects() {
  const projects = [
    {
      id: "portfolio-website",
      title: "Personal Portfolio Website",
      description:
        "Designed and developed a fully responsive portfolio website using React and modern UI animations to showcase skills, projects, and professional experience.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      image: "",
      githubUrl: "https://github.com/tina-codertz/react_portifolio",
      liveUrl: "https://portifolio-chi-ochre.vercel.app/",
      category: "personal",
    },
    {
      id: "instagram-clone",
      title: "Instagram Application Clone",
      description:
        "Built a React Native mobile application with core social features including post sharing, user authentication, and follow functionality.",
      technologies: ["React Native", "JavaScript", "REST API"],
      image: "",
      githubUrl: "https://github.com/tina-codertz/instagram_clone",
      liveUrl: "",
      category: "personal",
    },
    {
      id: "e-ticketing-platform",
      title: "E-Ticketing Platform",
      description:
        "Developed a full-stack event ticketing platform enabling users to browse events, book tickets, and manage reservations efficiently.",
      technologies: ["React", "Node.js", "REST API"],
      image: ticket,
      githubUrl: "https://github.com/tina-codertz/e-ticketing",
      liveUrl: "",
      category: "personal",
    },
    {
      id: "aru-innovation-hub",
      title: "ARU Innovation Hub Website",
      description:
        "Developed a modern website for the ARU Innovation Hub to showcase initiatives, events, and enable online engagement.",
      technologies: ["React", "Tailwind CSS"],
      image: "",
      githubUrl: "https://github.com/tina-codertz/innovation",
      liveUrl: "https://innovation-lab-rho.vercel.app/",
      category: "personal",
    },
    {
      id: "team-management-system",
      title: "Team Management System",
      description:
        "Developed a full-stack team management system enabling users to collaborate, track progress, and manage projects efficiently.",
      technologies: ["React", "Django", "REST API"],
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&q=80",
      githubUrl: "https://github.com/ByteUjamaa/team-learning-system",
      liveUrl: "https://tlms.live",
      category: "organizational",
    },
    {
      id: "anko-china-shop",
      title: "AnkoChina E-Commerce Web App",
      description:
        "Built a full-stack e-commerce web application for an online shop, featuring product browsing, cart management, and a modern storefront experience.",
      technologies: ["React", "Hono", "Cloudflare"],
      image: "",
      githubUrl: "https://github.com/tina-codertz/AnkoChina_shop",
      liveUrl: "https://anko-china-shop.vercel.app/",
      category: "personal",
    },
    {
      id: "tyhdo-website",
      title: "TYHDO Website",
      description:
        "Developed an official website for Tanzania Youth Health Development Organization to showcase activities, events, and enable online ticket booking.",
      technologies: ["React", "Tailwind CSS"],
      image: "",
      githubUrl: "https://github.com/tina-codertz/cuddly-guacamole",
      liveUrl: "https://www.tyhdo.or.tz/",
      category: "personal",
    },
    {
      id: "air-quality-platform",
      title: "Air Quality Monitoring Platform",
      description:
        "Designed a cloud-based IoT architecture for real-time air quality data collection, processing, and visualization.",
      technologies: ["IoT", "Cloud Architecture", "Data Viz"],
      image:
        "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=500&q=80",
      githubUrl:
        "https://github.com/AI-NextGen-Innovate-Lab/AIR-QUALITY",
      liveUrl: "https://airquality.tlms.live/",
      category: "organizational",
    },
    {
      id: "bucket-list-app",
      title: "Collaborative Bucket List App",
      description:
        "Collaborated within a development team to design and implement a bucket list web application, contributing to frontend features and documentation.",
      technologies: ["React", "Django", "GitHub"],
      image: bucket,
      githubUrl:
        "https://github.com/Habrovan004/collaborative_bucket_lists",
      liveUrl: "",
      category: "organizational",
    },
    {
      id: "appointment-system",
      title: "Appointment Management System",
      description:
        "Worked with a team to develop a web-based appointment management system, focusing on user interface design and backend integration.",
      technologies: ["React", "Django", "GitHub"],
      image: appointment,
      githubUrl: "https://github.com/ByteUjamaa/Appointment",
      liveUrl: "",
      category: "organizational",
    },
  ];

  const personalProjects = projects.filter((p) => p.category === "personal");
  const organizationalProjects = projects.filter(
    (p) => p.category === "organizational"
  );

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
    <div className="group bg-white rounded-2xl overflow-hidden card-hover border border-gray-100">
      <div className="h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center relative">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-gray-300">
            <FolderOpen size={32} />
            <span className="text-xs font-medium">Project Preview</span>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="mb-3">
          {project.category === "personal" ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-primary-50 text-primary-600 rounded-lg text-xs font-semibold">
              <User size={12} /> Personal
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-50 text-emerald-600 rounded-lg text-xs font-semibold">
              <Users size={12} /> Team
            </span>
          )}
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-500 mb-4 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 bg-gray-50 text-gray-500 rounded-md text-xs font-medium border border-gray-100"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 pt-4 border-t border-gray-100">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors"
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-gray-500 hover:text-gray-900 font-medium text-sm transition-colors"
            >
              <Github size={14} /> Code
            </a>
          )}
        </div>
      </div>
    </div>
  );

  const SectionHeader = ({ icon: Icon, color, title, subtitle }) => (
    <div className="flex items-center gap-3 mb-8">
      <div className={`${color} p-2.5 rounded-xl`}>
        <Icon className="text-white" size={20} />
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-400 text-sm">{subtitle}</p>
      </div>
    </div>
  );

  const ToggleButton = ({ isExpanded, onClick, count, variant }) => {
    const styles =
      variant === "personal"
        ? "bg-primary-600 hover:bg-primary-700 shadow-primary-500/20"
        : "bg-emerald-600 hover:bg-emerald-700 shadow-emerald-500/20";
    return (
      <div className="text-center mt-8">
        <button
          onClick={onClick}
          className={`inline-flex items-center gap-2 px-5 py-2.5 text-white rounded-xl text-sm font-medium transition-all shadow-lg ${styles}`}
        >
          {isExpanded ? (
            <>
              Show Less <ChevronUp size={16} />
            </>
          ) : (
            <>
              Show More ({count} more) <ChevronDown size={16} />
            </>
          )}
        </button>
      </div>
    );
  };

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Projects & Work
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            A showcase of personal initiatives and collaborative team projects
          </p>
        </div>

        {/* Personal Projects */}
        <div className="mb-20">
          <SectionHeader
            icon={User}
            color="bg-gradient-to-br from-primary-500 to-primary-600"
            title="Personal Projects"
            subtitle="Built independently to sharpen skills and explore ideas"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedPersonal.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          {hasMorePersonal && (
            <ToggleButton
              isExpanded={showAllPersonal}
              onClick={() => setShowAllPersonal(!showAllPersonal)}
              count={personalProjects.length - 3}
              variant="personal"
            />
          )}
        </div>

        {/* Organizational Projects */}
        <div>
          <SectionHeader
            icon={Users}
            color="bg-gradient-to-br from-emerald-500 to-emerald-600"
            title="Organizational & Team Projects"
            subtitle="Collaborative projects completed as part of academic and development teams"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedOrganizational.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          {hasMoreOrg && (
            <ToggleButton
              isExpanded={showAllOrg}
              onClick={() => setShowAllOrg(!showAllOrg)}
              count={organizationalProjects.length - 3}
              variant="organizational"
            />
          )}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-20 pt-10 border-t border-gray-100">
          <p className="text-gray-400 mb-5 text-sm">
            Want to explore even more of my work?
          </p>
          <a
            href="https://github.com/tina-codertz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all shadow-lg shadow-gray-900/10"
          >
            <Github size={18} />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
