import React from 'react';
import { ListRestart as Restaurant } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  return (
    <header className="bg-black text-yellow-300 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer hover:text-yellow-200 transition-colors"
            onClick={() => onNavigate('home')}
          >
            <Restaurant className="w-8 h-8" />
            <span className="text-xl sm:text-2xl font-bold">top10restaurants.online</span>
          </div>

          {/* Navigation */}
          <nav className="flex space-x-6">
            <button
              onClick={() => onNavigate('blogs')}
              className={`text-lg font-medium transition-colors hover:text-yellow-200 ${
                currentPage === 'blogs' ? 'text-yellow-200' : 'text-yellow-300'
              }`}
            >
              Blogs
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className={`text-lg font-medium transition-colors hover:text-yellow-200 ${
                currentPage === 'contact' ? 'text-yellow-200' : 'text-yellow-300'
              }`}
            >
              Contact Us
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}