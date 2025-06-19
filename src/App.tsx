import React, { useState } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import BlogsPage from './components/BlogsPage';
import ContactPage from './components/ContactPage';
import BlogPost from './components/BlogPost';
import { Restaurant, Page } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
    if (page !== 'blog-post') {
      setSelectedRestaurant(null);
    }
  };

  const handleRestaurantClick = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
    setCurrentPage('blog-post');
  };

  const handleBackToBlogs = () => {
    setCurrentPage('blogs');
    setSelectedRestaurant(null);
  };

  return (
    <div className="min-h-screen bg-yellow-50">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      
      {currentPage === 'home' && (
        <HomePage onNavigate={handleNavigate} />
      )}
      
      {currentPage === 'blogs' && (
        <BlogsPage onRestaurantClick={handleRestaurantClick} />
      )}
      
      {currentPage === 'contact' && (
        <ContactPage />
      )}
      
      {currentPage === 'blog-post' && selectedRestaurant && (
        <BlogPost restaurant={selectedRestaurant} onBack={handleBackToBlogs} />
      )}
    </div>
  );
}

export default App;