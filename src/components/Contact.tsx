import React from 'react';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Visit Our Store Today!
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Come experience the magic in person or get in touch with us for any inquiries. 
            We're here to help you find the perfect toy for every child!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-8 text-center lg:text-left">
                Get In Touch
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-500 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white/80 text-sm">Call us directly</p>
                    <p className="text-white font-bold text-xl">0300 246 9270</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-red-500 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white/80 text-sm">Our Location</p>
                    <p className="text-white font-bold">Shop 5B, Mustafa Cloth Market</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-500 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white/80 text-sm">Store Hours</p>
                    <p className="text-white font-bold">Daily: 10:00 AM - 9:00 PM</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-500 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white/80 text-sm">Owner Contact</p>
                    <p className="text-white font-bold">Masood Ahmed</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20">
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:03002469270"
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-bold text-center transition-colors duration-300"
                  >
                    📞 Call Now
                  </a>
                  <a
                    href="https://maps.google.com/?q=Shop 5B, Mustafa Cloth Market"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-bold text-center transition-colors duration-300"
                  >
                    📍 View on Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map/Direction Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Find Us Easily
            </h3>
            
            <div className="bg-white rounded-xl p-6 mb-6">
              <div className="text-center">
                <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-xl text-gray-800 mb-2">Easy to Find</h4>
                <p className="text-gray-600 mb-4">
                  Located in the bustling Mustafa Cloth Market, Shop 5B is easily accessible 
                  and well-connected to public transportation.
                </p>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
                  <p className="text-gray-700 font-medium">
                    🚗 Parking Available<br />
                    🚌 Bus Stop Nearby<br />
                    🏪 In the Heart of the Market
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-white/90 mb-4">
                Can't find us? Give Masood Ahmed a call and he'll guide you directly to our store!
              </p>
              <div className="bg-yellow-400 text-yellow-900 p-4 rounded-xl">
                <p className="font-bold">🎉 Special Welcome Offer!</p>
                <p className="text-sm mt-1">Mention this website for a special discount on your first purchase!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;