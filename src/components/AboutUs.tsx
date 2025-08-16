import React from 'react';
import { Heart, Award, Gift, Users } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            About Toys & Toys
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A World of Fun and Imagination!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Story Section */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-full mr-4">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Our Story</h3>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                At Toys & Toys, we believe in the magic of play! Our shop offers a wide variety of 
                high-quality toys for kids of all ages — from educational toys and action figures 
                to dolls, puzzles, remote-controlled cars, and much more.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                Whether you're shopping for a birthday, a special occasion, or just to bring a 
                smile to a child's face, we've got something special for everyone.
              </p>
            </div>

            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-4">Our Mission</h4>
              <p className="text-lg">
                "Let your children explore, imagine, and grow — one toy at a time!"
              </p>
            </div>
          </div>

          {/* Features Section */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center lg:text-left">
              🎁 What You'll Find
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">High-Quality Toys</h4>
                <p className="text-gray-600 text-sm">Carefully selected toys that meet safety standards</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="bg-green-100 p-3 rounded-full w-fit mb-4">
                  <Gift className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Great Deals</h4>
                <p className="text-gray-600 text-sm">Seasonal offers and special discounts</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="bg-purple-100 p-3 rounded-full w-fit mb-4">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Friendly Service</h4>
                <p className="text-gray-600 text-sm">Personal attention and expert recommendations</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="bg-pink-100 p-3 rounded-full w-fit mb-4">
                  <Heart className="w-6 h-6 text-pink-600" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">All Ages</h4>
                <p className="text-gray-600 text-sm">Toys for babies to teenagers</p>
              </div>
            </div>

            {/* Owner Info */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center">
              <h4 className="text-2xl font-bold mb-4">Meet the Owner</h4>
              <div className="bg-white/20 rounded-full p-6 w-fit mx-auto mb-4">
                <span className="text-4xl">👨‍💼</span>
              </div>
              <h5 className="text-xl font-bold mb-2">Masood Ahmed</h5>
              <p className="text-indigo-100">
                Passionate about bringing joy to children through quality toys and exceptional service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;