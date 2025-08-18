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

  // Dolls & Plushies data
  const dollsPlushies = [
    {
      id: 1,
      name: "Beautiful Doll Collection",
      image: "/dolls & plushies/IMG-20250816-WA0001.jpg",
      description: "Adorable dolls with beautiful dresses and accessories"
    },
    {
      id: 2,
      name: "Premium Doll Set",
      image: "/dolls & plushies/IMG-20250816-WA0104.jpg",
      description: "High-quality dolls perfect for imaginative play"
    },
    {
      id: 3,
      name: "Classic Doll Collection",
      image: "/dolls & plushies/IMG-20250816-WA0106.jpg",
      description: "Classic style dolls with timeless appeal"
    },
    {
      id: 4,
      name: "Deluxe Doll Set",
      image: "/dolls & plushies/IMG-20250816-WA0120.jpg",
      description: "Deluxe dolls with premium features and accessories"
    }
  ];

  // Puzzles & Games data
  const puzzlesGames = [
    {
      id: 1,
      name: "Learning English Educational Mat",
      image: "/puzzle & games/IMG-20250816-WA0188.jpg",
      description: "Interactive learning mat for English education and fun activities"
    },
    {
      id: 2,
      name: "Play House Indoor/Outdoor Tent",
      image: "/puzzle & games/IMG-20250816-WA0190.jpg",
      description: "Colorful play tent for indoor and outdoor adventures"
    },
    {
      id: 3,
      name: "Pool Table Tabletop Game",
      image: "/puzzle & games/IMG-20250816-WA0259.jpg",
      description: "Professional tabletop pool table for family fun"
    },
    {
      id: 4,
      name: "Football Championship Table Game",
      image: "/puzzle & games/IMG-20250816-WA0260.jpg",
      description: "Exciting tabletop football game for competitive play"
    },
    {
      id: 5,
      name: "Avengers Spinning Tops",
      image: "/puzzle & games/IMG-20250816-WA0271.jpg",
      description: "Marvel Avengers themed spinning tops for rhythmic play"
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
      name: "Speed Racer",
      image: "/car toys/unnamed copy.webp",
      description: "High-speed racing car for thrilling adventures"
    }
  ];

  // Action Figures data
  const actionFigures = [
    {
      id: 1,
      name: "Spider-Man Action Figure",
      image: "/action figures/IMG-20250816-WA0009.jpg",
      description: "Amazing Spider-Man action figure with web-slinging action"
    },
    {
      id: 2,
      name: "Hero Action Figure Set",
      image: "/action figures/IMG-20250816-WA0069.jpg",
      description: "Collection of superhero action figures for epic adventures"
    },
    {
      id: 3,
      name: "Premium Action Figure",
      image: "/action figures/IMG-20250816-WA0083.jpg",
      description: "High-quality action figure with detailed features"
    },
    {
      id: 4,
      name: "Adventure Action Figure",
      image: "/action figures/IMG-20250816-WA0092.jpg",
      description: "Action-packed figure ready for exciting adventures"
    },
    {
      id: 5,
      name: "Superhero Collection",
      image: "/action figures/IMG-20250816-WA0094.jpg",
      description: "Complete superhero action figure collection"
    }
  ];

  // Educational Toys data
  const educationalToys = [
    {
      id: 1,
      name: "Learning Activity Set",
      image: "/educational toys/images (1).jpg",
      description: "Interactive learning activities for early childhood development"
    },
    {
      id: 2,
      name: "Educational Building Blocks",
      image: "/educational toys/556729173-600x450.jpeg",
      description: "Colorful building blocks to enhance creativity and motor skills"
    },
    {
      id: 3,
      name: "Learning Games Collection",
      image: "/educational toys/images (2).jpg",
      description: "Fun educational games that make learning enjoyable"
    },
    {
      id: 4,
      name: "STEM Learning Kit",
      image: "/educational toys/images (3).jpg",
      description: "Science, technology, engineering and math learning activities"
    },
    {
      id: 5,
      name: "Interactive Learning Toys",
      image: "/educational toys/images (4).jpg",
      description: "Hands-on educational toys for active learning"
    }
  ];

  const handleExploreClick = (categoryName: string) => {
    if (categoryName === "Baby Toys") {
      setSelectedCategory(categoryName);
      setModalOpen(true);
    } else if (categoryName === "RC Cars & Vehicles") {
      setSelectedCategory(categoryName);
      setModalOpen(true);
    } else if (categoryName === "Dolls & Plushies") {
      setSelectedCategory(categoryName);
      setModalOpen(true);
    } else if (categoryName === "Puzzles & Games") {
      setSelectedCategory(categoryName);
      setModalOpen(true);
    } else if (categoryName === "Action Figures") {
      setSelectedCategory(categoryName);
      setModalOpen(true);
    } else if (categoryName === "Educational Toys") {
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
        toys={
          selectedCategory === "Baby Toys" ? babyToys : 
          selectedCategory === "RC Cars & Vehicles" ? carToys :
          selectedCategory === "Dolls & Plushies" ? dollsPlushies :
          selectedCategory === "Puzzles & Games" ? puzzlesGames :
          selectedCategory === "Action Figures" ? actionFigures :
          selectedCategory === "Educational Toys" ? educationalToys : []
        }
      />
    </section>
  );
};

export default ToyCategories;