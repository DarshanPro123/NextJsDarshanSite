import React from "react";

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center h-auto w-full bg-gray-950 text-gray-100 py-10 px-4">
      <h1 className="text-center font-bold text-5xl mb-8 pb-2 relative">
        <span className="text-shadow text-yellow-500">About </span>
        <span className="absolute top-6 hover:underline text-6xl left-1 text-gray-300 opacity-20">
          About
        </span>
      </h1>

      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-2xl">
        {/* Name */}
        <div className="mb-6">
          <label className="block text-lg font-medium text-yellow-400 mb-1">
            Name
          </label>
          <p className="text-base font-semibold">Darshan Panchal</p>
        </div>

        {/* University */}
        <div className="mb-6">
          <label className="block text-lg font-medium text-yellow-400 mb-1">
            University
          </label>
          <p className="text-base font-semibold">Gujrat University</p>
        </div>

        {/* Graduation Year */}
        <div className="mb-6">
          <label className="block text-lg font-medium text-yellow-400 mb-1">
            Graduation Year
          </label>
          <p className="text-base font-semibold">2023-2024</p>
        </div>

        {/* School */}
        <div className="mb-6">
          <label className="block text-lg font-medium text-yellow-400 mb-1">
            School Name
          </label>
          <p className="text-base font-semibold">Vidhya Nagar High School</p>
        </div>

        {/* High School Graduation Year */}
        <div className="mb-6">
          <label className="block text-lg font-medium text-yellow-400 mb-1">
            School Graduation Year
          </label>
          <p className="text-base font-semibold">2019</p>
        </div>

        {/* Description */}
        <div className="mb-6">
          <label className="block text-lg font-medium text-yellow-400 mb-1">
            Description
          </label>
          <p className="text-base font-light text-gray-300">
            Passionate front-end developer with experience in building
            responsive and interactive user interfaces using modern web
            technologies. Skilled in JavaScript, React, and CSS frameworks.
            Eager to contribute to innovative projects and constantly enhance my
            skill set.
          </p>
        </div>

        {/* Download Button */}
        <div className="flex justify-center mt-8">
          <a
            href="/DarshanPanchal.pdf" // Path to your document in the public folder
            download="DarshanPanchal.pdf"
            className="bg-yellow-500 uppercase sm:px-3py-4 hover:bg-yellow-400 text-gray-700 font-bold py-4 px-6 rounded-full shadow-lg transition duration-300"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
