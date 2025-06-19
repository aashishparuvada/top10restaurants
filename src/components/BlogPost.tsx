import React from 'react';
import { Restaurant as RestaurantType } from '../types';
import { ArrowLeft, MapPin, Star, DollarSign, Utensils } from 'lucide-react';

interface BlogPostProps {
  restaurant: RestaurantType;
  onBack: () => void;
}

export default function BlogPost({ restaurant, onBack }: BlogPostProps) {
  return (
    <div className="min-h-screen bg-yellow-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back to Blogs</span>
        </button>

        {/* Hero Image */}
        <div className="relative rounded-xl overflow-hidden shadow-lg mb-8">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-80 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {restaurant.name}
            </h1>
            <div className="flex items-center space-x-4 text-white">
              <div className="flex items-center space-x-1">
                <MapPin className="w-5 h-5" />
                <span>{restaurant.location}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="w-5 h-5 fill-current text-yellow-400" />
                <span>{restaurant.rating}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Restaurant Details */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center space-x-3 p-4 bg-yellow-50 rounded-lg">
              <Utensils className="w-6 h-6 text-yellow-600" />
              <div>
                <h3 className="font-semibold text-gray-900">Cuisine</h3>
                <p className="text-gray-600">{restaurant.cuisine}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-4 bg-yellow-50 rounded-lg">
              <DollarSign className="w-6 h-6 text-yellow-600" />
              <div>
                <h3 className="font-semibold text-gray-900">Price Range</h3>
                <p className="text-gray-600">{restaurant.priceRange}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-4 bg-yellow-50 rounded-lg">
              <Star className="w-6 h-6 text-yellow-600" />
              <div>
                <h3 className="font-semibold text-gray-900">Rating</h3>
                <p className="text-gray-600">{restaurant.rating}/5.0</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Restaurant</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              {restaurant.fullDescription}
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-black rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-yellow-300 mb-4">
            Ready to Experience Fine Dining?
          </h3>
          <p className="text-gray-300 mb-6">
            Discover more exceptional restaurants in our curated collection.
          </p>
          <button
            onClick={onBack}
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Explore More Restaurants
          </button>
        </div>
      </div>
    </div>
  );
}