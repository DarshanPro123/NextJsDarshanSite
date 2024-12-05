"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaArrowDown } from "react-icons/fa";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get the current path

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    // Close menu whenever the pathname changes
    setIsOpen(false);
  }, [pathname]);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-gray-950 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-4xl text-yellow-400 font-extrabold">
          Darshan.
        </Link>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <FaTimes className="text-2xl text-white cursor-pointer" />
          ) : (
            <FaBars className="text-2xl text-white cursor-pointer" />
          )}
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex justify-center items-center space-x-6">
          {links.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="relative group text-white hover:text-yellow-400"
            >
              {item.name}
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <a
            href="/DarshanPanchal.pdf" // Path to your document in the public folder
            download="DarshanPanchal.pdf"
            className="relative text-yellow-500 font-bold uppercase rounded-full shadow-lg overflow-hidden group transition duration-300"
          >
            <span className="block p-2 z-10 relative">Resume</span>
            {/* Water fill effect */}
            <span className="absolute inset-0 bg-yellow-400 transform scale-y-0 origin-bottom transition-transform duration-300 ease-in-out group-hover:scale-y-100"></span>
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden flex flex-col bg-gray-800 p-4 space-y-4 text-center">
          {links.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              onClick={closeMenu}
              className="relative group block hover:text-yellow-400"
            >
              {item.name}
              <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-yellow-400 transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>
            </Link>
          ))}
          <a
            href="/DarshanPanchal.pdf" // Path to your document in the public folder
            download="DarshanPanchal.pdf"
            className="text-white bg-yellow-500 p-1 rounded-full shadow-lg transition duration-300"
          >
            Resume
            <FaArrowDown className="inline" />
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
