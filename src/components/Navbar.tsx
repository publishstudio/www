"use client";

import { Images } from "@/assets/images";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <Image
              src={Images.logo}
              alt="Logo"
              width={40}
              height={40}
              className="rounded-xl"
            />
            <span className="text-xl font-bold">Publish Studio</span>
          </a>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#products"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Products
            </a>
            {/* <a
              href="#features"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Features
            </a> */}
            <a
              href="#use-cases"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Use Cases
            </a>
            {/* <a
              href="#pricing"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Pricing
            </a> */}
            <a
              href="#products"
              className="px-4 py-2 rounded-full bg-gradient-to-r from-primary to-red-400 text-white text-sm font-medium hover:shadow-lg transition-all"
            >
              Start Creating
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 space-y-4">
            <a
              href="#products"
              className="block py-2 text-sm font-medium hover:text-primary transition-colors"
            >
              Products
            </a>
            {/* <a
              href="#features"
              className="block py-2 text-sm font-medium hover:text-primary transition-colors"
            >
              Features
            </a> */}
            <a
              href="#use-cases"
              className="block py-2 text-sm font-medium hover:text-primary transition-colors"
            >
              Use Cases
            </a>
            {/* <a
              href="#pricing"
              className="block py-2 text-sm font-medium hover:text-primary transition-colors"
            >
              Pricing
            </a> */}
            <a
              href="#products"
              className="block py-2 px-4 rounded-full bg-gradient-to-r from-primary to-red-400 text-white text-sm font-medium text-center"
            >
              Start Creating
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
