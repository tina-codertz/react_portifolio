import React from "react";
import { Award, CheckCircle, MapPin, Calendar, FileText } from "lucide-react";
import certificatePdf from "../assets/certificate.PDF";

export function Certifications() {
  const certifications = [
    {
      title: "Design Thinking & Problem Solving",
      description:
        "Comprehensive training on design thinking methodologies, user research, and problem-solving techniques.",
      topics: [
        "Design Thinking Process",
        "User Research",
        "Ideation Techniques",
        "Prototyping & Testing",
      ],
      year: "2025",
      location: "Antwerp, Belgium",
      certificateUrl: certificatePdf,
    },
    {
      title: "Multimedia Training",
      description:
        "The multimedia training program covered essential skills in graphic design, video editing, and animation using industry-standard software.",
      topics: [
        "Graphic Design",
        "Video Editing",
        "Animation",
        "Industry Software",
      ],
      year: "2025",
      location: "Ardhi University",
    },
    {
      title: "DjangoCon Africa 2025 Workshop",
      description:
        "Intensive workshop on Django web development, covering advanced topics such as RESTful APIs, security best practices, and deployment strategies.",
      topics: [
        "Django Framework",
        "RESTful APIs",
        "Security Practices",
        "Deployment",
      ],
      year: "2025",
      location: "Arusha, Tanzania",
    },
  ];

  return (
    <section
      id="certifications"
      className="py-24 bg-gradient-to-br from-slate-50 via-primary-50/30 to-accent-400/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Training & Certifications
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Professional training programs and workshops with certified
            completion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 card-hover border border-gray-100 overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-t-2xl" />

              <div className="flex justify-between items-start mb-5">
                <div className="bg-primary-50 p-2.5 rounded-xl">
                  <Award className="text-primary-600" size={22} />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg">
                  <CheckCircle size={12} />
                  Certified
                </div>
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {cert.title}
              </h3>

              <div className="flex flex-wrap gap-3 mb-4 text-xs text-gray-400">
                <span className="inline-flex items-center gap-1">
                  <MapPin size={12} /> {cert.location}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Calendar size={12} /> {cert.year}
                </span>
              </div>

              <p className="text-gray-500 text-sm mb-5 leading-relaxed">
                {cert.description}
              </p>

              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Topics
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {cert.topics.map((topic, topicIndex) => (
                    <span
                      key={topicIndex}
                      className="px-2.5 py-1 bg-gray-50 text-gray-500 rounded-md text-xs font-medium border border-gray-100"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {cert.certificateUrl && (
                <a
                  href={cert.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 px-4 py-2 bg-primary-50 text-primary-600 rounded-lg text-xs font-semibold hover:bg-primary-100 transition-colors"
                >
                  <FileText size={14} />
                  View Certificate
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-gray-400 text-sm italic">
            Committed to continuous learning and professional development
          </p>
        </div>
      </div>
    </section>
  );
}
