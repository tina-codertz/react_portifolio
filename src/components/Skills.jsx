import React from 'react';
import { Code, Smartphone, Wrench, Cloud, Database, Sparkles } from 'lucide-react';

export function Skills() {
  // Organized skills data - easy to maintain and update
  const skillsData = [
    {
      title: 'Web Development',
      icon: <Code size={32} />,
      color: 'blue',
      skills: ['React', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      title: 'Mobile App Development',
      icon: <Smartphone size={32} />,
      color: 'green',
      skills: ['Flutter'],
    },
    {
      title: 'UI/UX Design & Prototyping',
      icon: <Wrench size={32} />,
      color: 'purple',
      skills: ['Figma'],
    },
    {
      title: 'Version Control & Collaboration',
      icon: <Code size={32} />,
      color: 'orange',
      skills: ['Git', 'GitHub'],
    },
    {
      title: 'Cloud & Deployment Basics',
      icon: <Cloud size={32} />,
      color: 'blue',
      skills: ['Vercel', 'Heroku'],
    },
    {
      title: 'Data Handling & APIs',
      icon: <Database size={32} />,
      color: 'green',
      skills: ['REST APIs', 'JSON', 'API Integration'],
    },
    {
      title: 'AI-assisted Development',
      icon: <Sparkles size={32} />,
      color: 'purple',
      skills: ['AI Research Tools', 'Code Assistants'],
    },
  ];

  // Helper function to get color classes based on category
  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: 'bg-blue-50',
        text: 'text-blue-600',
        border: 'border-blue-600',
      },
      green: {
        bg: 'bg-green-50',
        text: 'text-green-600',
        border: 'border-green-600',
      },
      purple: {
        bg: 'bg-purple-50',
        text: 'text-purple-600',
        border: 'border-purple-600',
      },
      orange: {
        bg: 'bg-orange-50',
        text: 'text-orange-600',
        border: 'border-orange-600',
      },
    };

    return colors[color];
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical & Professional Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {skillsData.map((category, index) => {
            const colors = getColorClasses(category.color);

            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                {/* Icon */}
                <div
                  className={`${colors.bg} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}
                >
                  <div className={colors.text}>{category.icon}</div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {category.title}
                </h3>

                {/* Skills List */}
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="text-gray-600 flex items-center"
                    >
                      <span
                        className={`w-2 h-2 ${colors.bg} rounded-full mr-3 ${colors.border} border-2`}
                      ></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Footer Text */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 text-lg">
            Always learning and exploring new technologies to stay current in this fast-paced field
          </p>
        </div>
      </div>
    </section>
  );
}
