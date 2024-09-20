import React from 'react';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 mt-auto">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Logo Section sadyasathi fakt text */}
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 mb-4 md:mb-0">
            Career Compass
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition duration-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition duration-300"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition duration-300"
            >
              <FaInstagram size={24} />
            </a>
          </div>

          {/* Newsletter Signup extra addition*/}
          <div>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-lg text-gray-900"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row justify-between text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="hover:underline">About Us</a>
              </li>
              <li>
                <a href="/features" className="hover:underline">Features</a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="/articles" className="hover:underline">Articles</a>
              </li>
              <li>
                <a href="/videos" className="hover:underline">Videos</a>
              </li>
              <li>
                <a href="/tools" className="hover:underline">Tools</a>
              </li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="/faq" className="hover:underline">FAQs</a>
              </li>
              <li>
                <a href="/privacy" className="hover:underline">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms" className="hover:underline">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 text-sm text-gray-400">
          &copy; 2024 Career Compass. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
