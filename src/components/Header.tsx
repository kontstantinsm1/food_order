"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaRobot } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { cn } from "@/app/utils/tailwind";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-darkAlt/90 backdrop-blur-sm shadow-md border-b border-gray-800"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link
            href="/"
            className="text-primary text-2xl font-bold flex items-center"
          >
            <FaRobot className="mr-2" />
            <span>
              Bot <span className="text-white">AI</span>
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex space-x-8">
          <a
            href="#features"
            className="text-gray-300 hover:text-primary transition-colors"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-gray-300 hover:text-primary transition-colors"
          >
            How It Works
          </a>
          <a
            href="#solution"
            className="text-gray-300 hover:text-primary transition-colors"
          >
            Solution
          </a>
          <a
            href="#case-studies"
            className="text-gray-300 hover:text-primary transition-colors"
          >
            Case Studies
          </a>
          <a
            href="#faq"
            className="text-gray-300 hover:text-primary transition-colors"
          >
            FAQ
          </a>
        </nav>

        <div className="flex items-center">
          <button className="hidden md:flex bg-primary hover:bg-primary/90 text-white font-medium px-5 py-2 rounded-full transition-all shadow-lg hover:shadow-primary/20">
            <a href="#contact">Get Started</a>
          </button>
          <button
            className="md:hidden text-white text-xl"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-darkAlt border-t border-gray-800 animate-in slide-in-from-top duration-300">
          <div className="container mx-auto px-4 py-4 flex flex-col">
            <a
              href="#features"
              className="text-gray-300 hover:text-primary py-3 transition-colors border-b border-gray-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-gray-300 hover:text-primary py-3 transition-colors border-b border-gray-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#solution"
              className="text-gray-300 hover:text-primary py-3 transition-colors border-b border-gray-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              Solution
            </a>
            <a
              href="#case-studies"
              className="text-gray-300 hover:text-primary py-3 transition-colors border-b border-gray-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              Case Studies
            </a>
            <a
              href="#faq"
              className="text-gray-300 hover:text-primary py-3 transition-colors border-b border-gray-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <button
              className="mt-4 bg-primary hover:bg-primary/90 text-white font-medium rounded-full transition-all shadow-lg hover:shadow-primary/20"
              onClick={() => setMobileMenuOpen(false)}
            >
              <a href="#contact" className="block px-5 py-2">
                Get Started
              </a>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
