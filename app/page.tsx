"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative flex flex-col md:flex-row bg-gray-950 justify-between items-center mx-auto min-h-screen overflow-hidden">
      {/* 🔸 TEXT SECTION (LEFT SIDE IN DESKTOP) */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 flex flex-col justify-center items-center md:items-start text-center md:text-left px-6 py-16 md:py-0 max-w-[430px] md:w-1/2"
      >
        <h4 className="text-yellow-400 text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 animate-bounce">
          Hello!!
        </h4>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-300 mb-2">
          I am a Developer
        </h2>

        <div className="w-full flex justify-center md:justify-start">
          <div className="text-center py-2">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-yellow-500 typing-effect">
              Darshan Panchal
            </h2>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 space-y-4 md:space-y-0">
          {/* 📱 Mobile */}
          <a
            href="mailto:darshan.panchal@veerranvi.com"
            target="_blank"
            className="bg-yellow-500 text-gray-950 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-all duration-300 block md:hidden"
          >
            Hire Me
          </a>

          {/* 💻 Desktop */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=darshan.panchal@veerranvi.com"
            target="_blank"
            className="relative bg-yellow-300 text-gray-950 px-6 py-3 rounded-lg text-lg font-semibold overflow-hidden group transition-all duration-300 hidden md:inline-block"
          >
            <span className="relative z-10">Hire Me</span>
            <span className="absolute inset-0 bg-yellow-500 transform scale-y-0 origin-bottom transition-transform duration-300 ease-in-out group-hover:scale-y-100"></span>
          </a>
        </div>
      </motion.div>

      {/* 🔹 IMAGE SECTION (RIGHT SIDE IN DESKTOP) */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 h-[300px] md:h-full flex justify-center items-center"
      >
        {/* Mobile View - Full Background */}
        <img
          src="/portfolio1.png"
          alt="Darshan Panchal"
          className="block md:hidden w-full h-full object-cover opacity-30 absolute inset-0 z-0"
        />

        {/* Desktop View - Side Image */}
        <img
          src="/bg_1.png"
          alt="Darshan Panchal"
          className="hidden md:block w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
}
