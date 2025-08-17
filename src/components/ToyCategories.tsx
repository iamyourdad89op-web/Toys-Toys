import React from 'react';
import { useState } from 'react';
import { Book, Car, Puzzle, Baby, Gamepad2, Heart, Rocket, Music } from 'lucide-react';
import ToyModal from './ToyModal';

const ToyCategories = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  // Sample baby toys data
  const babyToys = [
    {
      id: 1,
      name: "Soft Plush Toys Collection",
      image: "/baby toys/collection-of-plush-toys-featuring-a-bear-bunny-giraffe-and-rabbit-in-soft-colors-and-textures-displayed-together-png.webp",
      description: "Adorable collection of soft plush animals perfect for cuddling"
    },
    {
      id: 2,
      name: "Baby Toy Set",
      image: "/baby toys/download.jpg",
      description: "Colorful and safe toys designed for babies and toddlers"
    },
    {
      id: 3,
      name: "Educational Baby Toys",
      image: "/baby toys/images (1).jpg",
      description: "Fun and educational toys to help with early development"
    },
    {
      id: 4,
      name: "Mixed Toy Collection",
      image: "/baby toys/images (2).jpg",
      description: "Variety of colorful toys for different play activities"
    },
    {
      id: 5,
      name: "Activity Toys",
      image: "/baby toys/images (3).jpg",
      description: "Interactive toys to keep little ones engaged and entertained"
    }
  ];

  // Car toys data
  const carToys = [
    {
      id: 1,
      name: "Sports Racing Car Collection",
      image: "/car toys/images.jpg",
      description: "Collection of colorful sports racing cars for speed enthusiasts"
    },
    {
      id: 2,
      name: "Premium RC Car",
      image: "/car toys/unnamed (1).webp",
      description: "High-quality remote control car with realistic details"
    },
    {
      id: 3,
      name: "Classic Sports Car",
      image: "/car toys/unnamed.jpg",
      description: "Sleek classic sports car with premium finish"
    },
    {
      id: 4,
      name: "Racing Vehicle",
      image: "/car toys/unnamed.webp",
      description: "Professional racing vehicle for competitive play"
    },
    {
      id: 5,
      name: "Construction Truck",
      image: "/car toys/Imges.webp",
      description: "Heavy duty construction truck for building adventures"
    },
    {
      id: 6,
      name: "Model Car Collection",
      image: "/car toys/model car.jpg",
      description: "Detailed model cars with authentic designs"
    },
    {
      id: 7,
      name: "RC Sports Car",
      image: "/car toys/unnamed (1) copy.jpg",
      description: "Remote control sports car with advanced features"
    },
    {
      id: 8,
      name: "Racing Car Set",
      image: "/car toys/unnamed (3).webp",
      description: "Complete racing car set for competitive play"
    },
    {
      id: 9,
      name: "Premium Vehicle",
      image: "/car toys/unnamed (4).webp",
      description: "Premium quality vehicle with realistic details"
    },
    {
      id: 10,
      name: "Classic Car Model",
      image: "/car toys/unnamed copy.jpg",
      description: "Classic car model with vintage styling"
    },
    {
      id: 11,
      name: "Speed Racer",
      image: "/car toys/unnamed copy.webp",
      description: "High-speed racing car for thrilling adventures"
    },
    {
      id: 12,
      name: "Super Speed Car",
      image: "/car toys/unnamed (3) copy.webp",
      description: "Super speed car for ultimate racing experience"
    },
    {
      id: 13,
      name: "Elite Racing Car",
      image: "/car toys/unnamed (4) copy.webp",
      description: "Elite racing car with professional grade quality"
    },
    {
      id: 14,
      name: "Ultimate RC Car",
      image: "/car toys/unnamed (1) copy copy.webp",
      description: "Ultimate remote control car with advanced technology"
    }
  ];

  const handleExploreClick = (categoryName: string) => {
    if (categoryName === "Baby Toys") {
      setSelectedCategory(categoryName);
      setModalOpen(true);
    } else if (categoryName === "RC Cars & Vehicles") {
      setSelectedCategory(categoryName);
      setModalOpen(true);
    }
  };

  const categories = [
    {
      icon: <Book className="w-8 h-8" />,
      name: "Educational Toys",
      description: "Learning through play",
      color: "from-blue-500 to-indigo-600",
      emoji: "📚"
    },
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      name: "Action Figures",
      description: "Heroes & adventures",
      color: "from-red-500 to-pink-600",
      emoji: "🦸"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      name: "Dolls & Plushies",
      description: "Cuddly companions",
      color: "from-pink-500 to-rose-600",
      emoji: "🧸"
    },
    {
      icon: <Puzzle className="w-8 h-8" />,
      name: "Puzzles & Games",
      description: "Brain teasers & fun",
      color: "from-green-500 to-emerald-600",
      emoji: "🧩"
    },
    {
      icon: <Car className="w-8 h-8" />,
      name: "RC Cars & Vehicles",
      description: "Remote control fun",
      color: "from-orange-500 to-amber-600",
      emoji: "🚗"
    },
    {
      icon: <Baby className="w-8 h-8" />,
      name: "Baby Toys",
      description: "Safe for little ones",
      color: "from-cyan-500 to-blue-600",
      emoji: "👶"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      name: "STEM Toys",
      description: "Science & technology",
      color: "from-purple-500 to-violet-600",
      emoji: "🚀"
    },
    {
      icon: <Music className="w-8 h-8" />,
      name: "Musical Toys",
      description: "Sounds & melodies",
      color: "from-yellow-500 to-orange-500",
      emoji: "🎵"
    }
  ];

  return (
    <section id="toys" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            🎁 What You'll Find
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our amazing collection of high-quality toys for children of all ages. 
            Each category is carefully curated to inspire creativity and learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              <div className={`bg-gradient-to-br ${category.color} p-6 text-center relative overflow-hidden`}>
                <div className="absolute top-2 right-2 text-2xl">
                  {category.emoji}
                </div>
                <div className="text-white mb-3 flex justify-center">
                  {category.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">
                  {category.name}
                </h3>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 text-center mb-4">
                  {category.description}
                </p>
                <div className="text-center">
                  <button
                    onClick={() => handleExploreClick(category.name)}
                    className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:from-blue-200 hover:to-purple-200 transition-colors cursor-pointer"
                  >
                    Explore Collection
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special Offers Section */}
        <div className="mt-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">🌟 Special Deals & Seasonal Offers!</h3>
          <p className="text-xl mb-6">
            Great deals on selected toys • Birthday packages available • Bulk discounts for schools
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-6 py-3 rounded-full font-bold hover:bg-yellow-100 transition-colors">
              View Current Offers
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-orange-600 transition-colors">
              Birthday Packages
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <ToyModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        category={selectedCategory}
        toys={selectedCategory === "Baby Toys" ? babyToys : (selectedCategory === "RC Cars & Vehicles" ? carToys : [])}
      />
    </section>
  );
};

export default ToyCategories;