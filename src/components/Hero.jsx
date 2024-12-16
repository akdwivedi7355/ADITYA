import React from "react";

const Hero = () => (
  <section className="min-h-screen bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 text-white flex flex-col justify-center items-center px-4 py-10">
    <div className="container mx-auto flex flex-col md:flex-row items-center md:space-x-5 text-center md:text-left">
      {/* Text Content */}
      <div className="md:w-1/2 space-y-6">
        <p className="text-lg md:text-xl font-light">
          Hi, Welcome to the portfolio of
        </p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
          Aditya Kumar Dwivedi
        </h1>
        <p className="text-sm md:text-lg font-light max-w-lg mx-auto md:mx-0">
          I am a final-year MCA Computer Science student with a passion for
          problem-solving through programming. I specialize in innovative
          solutions leveraging emerging technologies, software development, data
          science, and artificial intelligence. I excel in fast-paced
          environments and thrive in collaborative cross-functional teams.
        </p>
        <div className="space-x-4">
          <a
            href="/src/assets/resume/Resume Aditya.pdf"
            download
            className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition transform hover:scale-105"
          >
            Download Resume
          </a>
          <a
            href="/about"
            className="px-6 py-3 bg-transparent border border-white text-white font-semibold rounded-lg shadow-md hover:bg-white hover:text-gray-900 transition transform hover:scale-105"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Image Content */}
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <img
          src="/src/assets/images/wallpaper.jpg"
          alt="wallpaper"
          className="w-full max-w-sm md:max-w-md rounded-lg shadow-lg"
        />
      </div>
    </div>

    {/* Scroll Down Indicator */}
    <div className="absolute bottom-6 text-white text-sm opacity-75 animate-bounce">
      Scroll down for more ⬇️
    </div>
  </section>
);

export default Hero;
