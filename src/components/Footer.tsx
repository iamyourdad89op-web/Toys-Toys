import React from 'react';
import { Heart, Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="bg-gradient-to-r from-red-500 to-yellow-500 text-white p-3 rounded-xl">
              <span className="text-2xl font-bold">🧸</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Toys & Toys
              </h3>
              <p className="text-sm text-gray-400">World of Fun & Imagination</p>
            </div>
          </div>

          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Thank you for choosing Toys & Toys! We're committed to bringing joy, learning, 
            and imagination to every child's life through our carefully selected toys.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
            <div className="text-center">
              <p className="font-bold text-lg">Owner</p>
              <p className="text-blue-400">Masood Ahmed</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-lg">Contact</p>
              <p className="text-green-400">📞 0300 246 9270</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-lg">Location</p>
              <p className="text-yellow-400">Shop 5B, Mustafa Cloth Market</p>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="flex justify-center items-center space-x-2 mb-4">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-gray-300">Let your children explore, imagine, and grow — one toy at a time!</span>
              <Star className="w-5 h-5 text-yellow-400" />
            </div>
            
            <p className="text-gray-400 text-sm mb-4">
              Open Daily: 10:00 AM - 9:00 PM • Free Gift Wrapping Available • Birthday Packages
            </p>

            <div className="flex justify-center items-center space-x-1 text-gray-500">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>for every child's happiness</span>
            </div>

            <p className="text-gray-500 text-xs mt-4">
              © 2024 Toys & Toys. All rights reserved. • Website design for demonstration purposes.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;