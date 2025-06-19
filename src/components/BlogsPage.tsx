import React, { useState } from 'react';
import { restaurants } from '../data/restaurants';
import { Restaurant as RestaurantType } from '../types';
import BlogCard from './BlogCard';
import { ChevronDown } from 'lucide-react';

interface BlogsPageProps {
  onRestaurantClick: (restaurant: RestaurantType) => void;
}

export default function BlogsPage({ onRestaurantClick }: BlogsPageProps) {
  const [selectedCountry, setSelectedCountry] = useState<'USA' | 'UK'>('USA');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const filteredRestaurants = restaurants.filter(
    restaurant => restaurant.country === selectedCountry
  );

  const handleCountrySelect = (country: 'USA' | 'UK') => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
  };

  return (
    <div className="min-h-screen bg-yellow-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Top 10 Restaurants
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the finest dining experiences in the USA and UK
          </p>
        </div>

        {/* Country Selector */}
        <div className="flex justify-center mb-12">
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="bg-white border-2 border-yellow-400 rounded-lg px-6 py-3 flex items-center space-x-2 text-lg font-medium text-gray-900 hover:bg-yellow-50 transition-colors min-w-[180px] justify-between"
            >
              <span>{selectedCountry}</span>
              <ChevronDown className={`w-5 h-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-yellow-400 rounded-lg shadow-lg z-10">
                <button
                  onClick={() => handleCountrySelect('USA')}
                  className="w-full px-6 py-3 text-left hover:bg-yellow-50 transition-colors text-lg font-medium"
                >
                  USA
                </button>
                <button
                  onClick={() => handleCountrySelect('UK')}
                  className="w-full px-6 py-3 text-left hover:bg-yellow-50 transition-colors text-lg font-medium border-t border-yellow-200"
                >
                  UK
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredRestaurants.map((restaurant) => (
            <BlogCard
              key={restaurant.id}
              restaurant={restaurant}
              onClick={() => onRestaurantClick(restaurant)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}