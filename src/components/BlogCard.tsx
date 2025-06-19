import React from 'react';
import { Restaurant as RestaurantType } from '../types';
import { MapPin, Star } from 'lucide-react';

interface BlogCardProps {
  restaurant: RestaurantType;
  onClick: () => void;
}

export default function BlogCard({ restaurant, onClick }: BlogCardProps) {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2 border-transparent hover:border-yellow-400"
      onClick={onClick}
    >
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-48 object-cover"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900 line-clamp-1">
            {restaurant.name}
          </h3>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-sm font-medium text-gray-600">{restaurant.rating}</span>
          </div>
        </div>
        
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{restaurant.location}</span>
        </div>
        
        <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
          {restaurant.shortDescription}
        </p>
        
        <div className="mt-4 flex justify-between items-center">
          <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-medium">
            {restaurant.cuisine}
          </span>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-md text-sm font-medium transition-colors">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}