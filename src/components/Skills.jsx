import React from "react";
import { Code, Smartphone, Palette, GitBranch, Cloud } from "lucide-react";

export function Skills() {
  const skillsData = [
    {
      title: "Web Development",
      icon: Code,
      gradient: "from-blue-500 to-cyan-400",
      bgLight: "bg-blue-50",
      textColor: "text-blue-600",
      skills: ["React", "JavaScript", "Tailwind CSS"],
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      gradient: "from-emerald-500 to-teal-400",
      bgLight: "bg-emerald-50",
      textColor: "text-emerald-600",
      skills: ["React Native", "Flutter"],
    },
    {
      title: "UI/UX Design",
      icon: Palette,
      gradient: "from-violet-500 to-purple-400",
      bgLight: "bg-violet-50",
      textColor: "text-violet-600",
      skills: ["Figma"],
    },
    {
      title: "Version Control",
      icon: GitBranch,
      gradient: "from-orange-500 to-amber-400",
      bgLight: "bg-orange-50",
      textColor: "text-orange-600",
      skills: ["Git", "GitHub"],
    },
    {
      title: "Cloud & Deployment",
      icon: Cloud,
      gradient: "from-primary-500 to-primary-400",
      bgLight: "bg-primary-50",
      textColor: "text-primary-600",
      skills: ["Oracle", "Vercel"],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Skills & Expertise
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to build and design applications
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 card-hover border border-gray-100"
              >
                <div className={`absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className={`${category.bgLight} w-12 h-12 rounded-xl flex items-center justify-center mb-5`}>
                  <IconComponent className={category.textColor} size={24} />
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-gray-50 text-gray-600 rounded-lg text-sm font-medium border border-gray-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm italic">
            Always learning and exploring new technologies to stay current
          </p>
        </div>
      </div>
    </section>
  );
}
