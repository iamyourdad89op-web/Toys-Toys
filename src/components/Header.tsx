import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-red-500 to-yellow-500 text-white p-3 rounded-xl">
              <span className="text-2xl font-bold">🧸</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Toys & Toys
              </h1>
              <p className="text-sm text-gray-600">World of Fun & Imagination</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Home
            </a>
            <a href="#toys" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Toys
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Contact
            </a>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full">
            <Phone className="w-4 h-4 text-green-600" />
            <span className="text-green-800 font-semibold">0300 246 9270</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-blue-100 text-blue-600"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                Home
              </a>
              <a href="#toys" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                Toys
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                Contact
              </a>
              <div className="flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full w-fit">
                <Phone className="w-4 h-4 text-green-600" />
                <span className="text-green-800 font-semibold">0300 246 9270</span>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;