import React from 'react';
import { ListRestart as Restaurant, ArrowRight } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-yellow-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <div className="relative z-10">
            <Restaurant className="w-20 h-20 text-yellow-600 mx-auto mb-8" />
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Top 10 Restaurants
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Discover the world's finest dining experiences across the USA and UK. 
              From Michelin-starred establishments to hidden culinary gems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('blogs')}
                className="bg-black text-yellow-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Explore Restaurants</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button
                onClick={() => onNavigate('contact')}
                className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-500 transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-yellow-200 rounded-full opacity-20"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-60 h-60 bg-yellow-300 rounded-full opacity-20"></div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Restaurant Guide?
            </h2>
            <p className="text-xl text-gray-600">
              Curated experiences from culinary experts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Restaurant className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Curation</h3>
              <p className="text-gray-600">Hand-picked restaurants by culinary professionals</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 text-yellow-600 font-bold text-lg">10</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Top 10 Lists</h3>
              <p className="text-gray-600">Carefully selected best restaurants in each region</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Discovery</h3>
              <p className="text-gray-600">Simple navigation to find your perfect dining experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}