import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 h-auto text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} by Developer. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <Link href="/about" className="hover:text-gray-400">
            Privacy Policy
          </Link>
          <Link href="/service" className="hover:text-gray-400">
            Terms of Service
          </Link>
          <Link href="/contact" className="hover:text-gray-400">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
