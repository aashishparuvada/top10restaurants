export interface Restaurant {
  id: number;
  name: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  location: string;
  cuisine: string;
  priceRange: string;
  rating: number;
  country: 'USA' | 'UK';
}

export type Page = 'home' | 'blogs' | 'contact' | 'blog-post';