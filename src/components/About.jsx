import React from "react";

export function About() {
  return (
    <section id="about" className="py-20 bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Me</h2>

        
        <div className="w-20 h-1 bg-blue-600 mx-auto"/>
      </div>

      {/* content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
            <div className="w-64 h-64 sm:w-80 sm:h-80 bg-linear-to-br from-blue-400 to-indigo-500 rounded-full shadow-2xl flex items-center justify-center">

           
          <div className="text-white text-6xl sm:text-8xl font-bold">CJ</div>
           </div>
        </div>

        {/* about content */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Full stack Developer and problem solver</h3>
          <p className="text-gray-600 mb-6 text-base sm:text-lg leading-relaxed">
            I'm passionate developer with experience in building modern web an
            mobile applications. Im more interested in turning complex problems
            into simple and beautiful intuitive solution
          </p>
          <p className="text-gray-600 mb-6 text-base sm:text-lg leading-relaxed">
            With strong foundation in frontend technologies like React and React
            Native, and backend experience with Nodejs, I create full-stack
            applications that deliver exceptional user experiences
          </p>
          <p className="text-gray-600 mb-8 text-base sm:text-lg leading-relaxed">I'm also interested in creative coding and animations drawings</p>

          {/* quick stats */}

          <div className="grid grid-cols-2 gap-6 ">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <div className="text-3xl font-bold text-indigo-600 mb-2">2+</div>
              <div className="text-gray-700 font-medium">Years of experience</div>
            </div>

            <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-600">
              <div className="text-3xl font-bold text-indigo-600 mb-2">5+</div>
              <div className="text=gray-700 font-medium">Projects Completed</div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
