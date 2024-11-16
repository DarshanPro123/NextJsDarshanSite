"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

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
    { name: "Resume", path: "/resume" },
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
        <div className="hidden lg:flex space-x-6">
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
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-gray-800 p-4 space-y-4 text-center">
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
        </div>
      )}
    </nav>
  );
};

export default NavBar;
