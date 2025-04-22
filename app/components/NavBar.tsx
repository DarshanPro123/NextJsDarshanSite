"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

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

        {/* Hamburger Icon */}
        <div className="lg:hidden z-50" onClick={toggleMenu}>
          <motion.div
            initial={false}
            animate={isOpen ? "open" : "closed"}
            className="w-6 h-6 relative flex flex-col justify-between cursor-pointer"
          >
            <motion.span
              variants={{
                open: { opacity: 0 },
                closed: { opacity: 1 },
              }}
              className="bg-white h-0.5 w-full absolute top-2.5 left-0"
              transition={{ duration: 0.2 }}
            />
            <motion.span
              variants={{
                open: { rotate: 40, y: 12 },
                closed: { rotate: 0, y: 0 },
              }}
              className="bg-white h-0.5 w-full absolute top-0 left-0 origin-center"
              transition={{ duration: 0.3 }}
            />
            <motion.span
              variants={{
                open: { rotate: -40, y: -12 },
                closed: { rotate: 0, y: 0 },
              }}
              className="bg-white h-0.5 w-full absolute bottom-0 left-0 origin-center"
              transition={{ duration: 0.3 }}
            />
          </motion.div>
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
            href="/DarshanPanchal.pdf"
            download="DarshanPanchal.pdf"
            className="relative text-yellow-500 font-bold uppercase rounded-full shadow-lg overflow-hidden group transition duration-300"
          >
            <span className="flex p-2 z-10 relative">Resume</span>
            <span className="absolute inset-0 bg-yellow-400 transform scale-y-0 origin-bottom transition-transform duration-300 ease-in-out group-hover:scale-y-100"></span>
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            className="fixed inset-0 backdrop-blur-md bg-gray-800/5  p-4 space-y-6 text-center z-40 flex flex-col justify-center items-center"
          >
            {links.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                onClick={closeMenu}
                className="relative group text-white text-xl hover:text-yellow-400"
              >
                {item.name}
                <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-yellow-400 transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>
              </Link>
            ))}
            <a
              href="/DarshanPanchal.pdf"
              download="DarshanPanchal.pdf"
              className="text-white flex items-center justify-center bg-yellow-500 px-6 py-2 rounded-full shadow-lg gap-2 transition duration-300"
            >
              Resume <FaArrowDown className="inline" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
