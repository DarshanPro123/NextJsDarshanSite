export default function Home() {
  return (
    <div className="relative flex flex-col md:flex-row bg-gray-950 justify-between items-center mx-auto h-screen">
      {/* Image Section */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="/bg_1.png" // Ensure this path points to the correct image
          alt="Darshan Panchal"
          className="w-full h-full object-contain opacity-50" // Makes the image less dominant
        />
      </div>

      {/* Text Section */}
      <div className="relative z-10 flex flex-col justify-center items-center mx-auto py-8 text-center md:text-left md:w-1/2 md:items-start max-w-[430px]">
        <h4 className="text-yellow-400 text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 animate-bounce">
          Hello!!
        </h4>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-300 mb-2">
          I'm a Developer
        </h2>
        {/* Boxed Name */}
        <div className="w-full flex justify-center md:justify-start">
          <div className="text-center  py-2">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-yellow-500 typing-effect">
              Darshan Panchal
            </h2>
          </div>
        </div>
        {/* Hire Me Button */}
        <div className="mt-6">
          <a
            href="/contact" // Update this link to your contact form route
            className="bg-yellow-500 text-gray-950 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-all duration-300"
          >
            Hire Me
          </a>
        </div>
      </div>
    </div>
  );
}
