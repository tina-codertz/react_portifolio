import React from 'react';
import { Award, CheckCircle } from 'lucide-react';

export function Certifications() {
  const certifications = [
    {
      title: 'Web Development Training',
      description:
        'Comprehensive training covering modern JavaScript, React fundamentals, and responsive design principles.',
      topics: [
        'Modern JavaScript',
        'React Fundamentals',
        'Responsive Design',
        'Web Standards',
      ],
      year: '2024',
    },
    {
      title: 'Cloud Computing & Deployment Workshop',
      description:
        'Hands-on training in server configuration basics, CI/CD concepts, and cloud deployment workflows.',
      topics: [
        'Server Configuration',
        'CI/CD Concepts',
        'Cloud Deployment',
        'DevOps Basics',
      ],
      year: '2024',
    },
    {
      title: 'UI/UX Design with Figma',
      description:
        'Practical training in wireframing, prototyping, and user-centered design using industry-standard tools.',
      topics: [
        'Wireframing',
        'Prototyping',
        'User-Centered Design',
        'Design Systems',
      ],
      year: '2023',
    },
  ];

  return (
    <section
      id="certifications"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Training & Certifications
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Professional training programs and workshops with certified completion
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-t-4 border-blue-600"
            >
              {/* Icon & Year */}
              <div className="flex justify-between items-start mb-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Award className="text-blue-600" size={28} />
                </div>
                {cert.year && (
                  <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {cert.year}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {cert.title}
              </h3>

              {/* Certified Badge */}
              <div className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold mb-4">
                <CheckCircle size={14} />
                Certified
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {cert.description}
              </p>

              {/* Topics */}
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase mb-2">
                  Topics Covered
                </p>
                <div className="flex flex-wrap gap-2">
                  {cert.topics.map((topic, topicIndex) => (
                    <span
                      key={topicIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Committed to continuous learning and professional development
          </p>
        </div>
      </div>
    </section>
  );
}
