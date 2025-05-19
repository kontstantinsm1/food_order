"use client";

import Link from "next/link";
import {
  FaRobot,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-darkAlt pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div>
            <div className="flex items-center space-x-2 mb-6">
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

            <p className="text-gray-400 mb-6">
              Next-generation voice AI assistant for restaurants, making food
              ordering faster, more accurate, and delightfully simple.
            </p>

            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <FaTwitter className="text-lg" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <FaFacebook className="text-lg" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <FaLinkedin className="text-lg" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <FaInstagram className="text-lg" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Pizza Restaurants
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Sushi Restaurants
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Multi-Cuisine Restaurants
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Food Delivery Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Enterprise Solutions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  API Reference
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Knowledge Base
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Bot AI Technologies Inc. All rights reserved.
          </p>

          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
