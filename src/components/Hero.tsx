import React from 'react';
import { Sparkles, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-red-500">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="animate-bounce">
              <Sparkles className="w-16 h-16 text-yellow-300" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Welcome to
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Toys & Toys
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            A World of Fun and Imagination! 🎭
          </p>
          
          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
            Discover amazing toys for kids of all ages - from educational toys and action figures 
            to dolls, puzzles, and remote-controlled cars. Let your children explore, imagine, and grow!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#toys" 
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 hover:text-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Our Toys 🎯
            </a>
            <a 
              href="#contact" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Visit Our Store 📍
            </a>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 animate-pulse">
            <Star className="w-8 h-8 text-yellow-300" />
          </div>
          <div className="absolute top-40 right-20 animate-pulse delay-1000">
            <Star className="w-6 h-6 text-pink-300" />
          </div>
          <div className="absolute bottom-20 left-20 animate-pulse delay-500">
            <Star className="w-10 h-10 text-blue-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;