import React from "react";
import { Calendar, FolderGit2 } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            About Me
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl rotate-3 shadow-2xl shadow-primary-500/20 flex items-center justify-center transition-transform duration-500 hover:rotate-0">
                <div className="text-white text-7xl sm:text-8xl font-extrabold tracking-tighter">
                  CJ
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-400/20 rounded-2xl -z-10 animate-float" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary-400/20 rounded-xl -z-10 animate-float-delay" />
            </div>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Full Stack Developer & Problem Solver
            </h3>
            <div className="space-y-4 mb-8">
              <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
                I'm a passionate developer with experience in building modern web
                and mobile applications. I'm interested in turning complex
                problems into simple, beautiful, and intuitive solutions.
              </p>
              <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
                With a strong foundation in frontend technologies like React and
                React Native, and backend experience with Node.js, I create
                full-stack applications that deliver exceptional user experiences.
              </p>
              <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
                I'm also interested in creative coding, animations, and drawings.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="group p-5 rounded-2xl bg-primary-50/60 border border-primary-100 card-hover">
                <Calendar className="text-primary-500 mb-3" size={22} />
                <div className="text-3xl font-extrabold text-gray-900 mb-1">2+</div>
                <div className="text-gray-500 text-sm font-medium">Years Experience</div>
              </div>
              <div className="group p-5 rounded-2xl bg-accent-400/5 border border-accent-400/20 card-hover">
                <FolderGit2 className="text-accent-500 mb-3" size={22} />
                <div className="text-3xl font-extrabold text-gray-900 mb-1">5+</div>
                <div className="text-gray-500 text-sm font-medium">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
