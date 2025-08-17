import React from 'react';
import { X } from 'lucide-react';

interface ToyModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: string;
  toys: Array<{
    id: number;
    name: string;
    image: string;
    price: string;
    description: string;
  }>;
}

const ToyModal: React.FC<ToyModalProps> = ({ isOpen, onClose, category, toys }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <h2 className="text-3xl font-bold mb-2">{category} Collection</h2>
          <p className="text-blue-100">Safe, fun, and educational toys for little ones</p>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {toys.map((toy) => (
              <div
                key={toy.id}
                className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-square bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center">
                  <img
                    src={toy.image}
                    alt={toy.name}
                    className="w-full h-full object-cover rounded-lg"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      console.error('Failed to load image:', toy.image);
                      target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMDAgNzBDOTQuNDc3MiA3MCA5MCA3NC40NzcyIDkwIDgwVjEyMEM5MCAxMjUuNTIzIDk0LjQ3NzIgMTMwIDEwMCAxMzBIMTIwQzEyNS41MjMgMTMwIDEzMCAxMjUuNTIzIDEzMCAxMjBWODBDMTMwIDc0LjQ3NzIgMTI1LjUyMyA3MCAxMjAgNzBIMTAwWiIgZmlsbD0iIzlDQTNBRiIvPgo8cGF0aCBkPSJNMTEwIDkwQzExNS41MjMgOTAgMTIwIDk0LjQ3NzIgMTIwIDEwMEMxMjAgMTA1LjUyMyAxMTUuNTIzIDExMCAxMTAgMTEwQzEwNC40NzcgMTEwIDEwMCAxMDUuNTIzIDEwMCAxMDBDMTAwIDk0LjQ3NzIgMTA0LjQ3NyA5MCAxMTAgOTBaIiBmaWxsPSIjNjM3MzgwIi8+Cjwvc3ZnPgo=';
                    }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">{toy.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{toy.description}</p>
                  <div className="flex items-center justify-between">
                    <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-blue-600 hover:to-cyan-600 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-6 text-center text-white">
            <h3 className="text-2xl font-bold mb-2">Visit Our Store!</h3>
            <p className="mb-4">See these toys in person and get expert advice from Masood Ahmed</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:03002469270"
                className="bg-white text-orange-600 px-6 py-3 rounded-full font-bold hover:bg-yellow-100 transition-colors"
              >
                📞 Call: 0300 246 9270
              </a>
              <button
                onClick={onClose}
                className="border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-orange-600 transition-colors"
              >
                Continue Browsing
              </button>
            </div>
          </div>
        toys={selectedCategory === "Baby Toys" ? babyToys : carToys}
      </div>
    </div>
  );
};

export default ToyModal;