import { Images } from "@/assets/images";
import { siteConfig } from "@/config/site";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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
              src={Images.blogStudioLogo}
              alt="Logo"
              width={40}
              height={40}
              className="rounded-xl"
            />
            <span className="text-xl font-bold flex flex-col">
              Blog Studio
              <span className="text-xs text-gray-600">by Publish Studio</span>
            </span>
          </a>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-sm font-medium hover:text-yellow-600 transition-colors"
            >
              Home
            </Link>
            <a
              href="#features"
              className="text-sm font-medium hover:text-yellow-600 transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium hover:text-yellow-600 transition-colors"
            >
              Pricing
            </a>
            <a
              href={siteConfig.links.blogStudio}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-yellow-600 to-amber-400 text-white text-sm font-medium hover:shadow-lg transition-all"
            >
              Start Writing
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
            <Link
              href="/"
              className="text-sm font-medium hover:text-yellow-600 transition-colors"
            >
              Home
            </Link>
            <a
              href="#features"
              className="block py-2 text-sm font-medium hover:text-yellow-600 transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="block py-2 text-sm font-medium hover:text-yellow-600 transition-colors"
            >
              Pricing
            </a>
            <a
              href={siteConfig.links.blogStudio}
              className="block py-2 px-4 rounded-full bg-gradient-to-r from-yellow-600 to-amber-400 text-white text-sm font-medium text-center"
            >
              Start Writing
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
