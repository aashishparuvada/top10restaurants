# Top 10 Restaurants Blog

A modern, responsive blog website showcasing the finest dining experiences across the USA and UK. Discover Michelin-starred restaurants, hidden culinary gems, and expert-curated dining recommendations.

🌐 **Live Site**: [https://top10restaurants.online](https://top10restaurants.online)

## 🍽️ About

Top 10 Restaurants is a curated blog platform that features the most exceptional dining establishments in the United States and United Kingdom. Each restaurant is carefully selected and reviewed by culinary experts, providing detailed insights into the dining experience, cuisine, location, and what makes each establishment special.

### Features

- **Curated Restaurant Lists**: Expert-selected top 10 restaurants for both USA and UK
- **Detailed Restaurant Profiles**: Comprehensive information including cuisine type, location, price range, and ratings
- **Responsive Design**: Beautiful, modern interface that works seamlessly on all devices
- **Interactive Navigation**: Easy-to-use navigation between different sections
- **Contact Form**: Get in touch for recommendations or feedback
- **Modern UI/UX**: Clean, elegant design with smooth animations and transitions

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: TypeScript
- **Linting**: ESLint
- **Package Manager**: npm

## 📁 Project Structure

```
top10restaurants/
├── src/
│   ├── components/          # React components
│   │   ├── Header.tsx      # Navigation header
│   │   ├── HomePage.tsx    # Landing page
│   │   ├── BlogsPage.tsx   # Restaurant listings
│   │   ├── BlogPost.tsx    # Individual restaurant details
│   │   ├── BlogCard.tsx    # Restaurant card component
│   │   └── ContactPage.tsx # Contact form
│   ├── data/
│   │   └── restaurants.ts  # Restaurant data
│   ├── types/
│   │   └── index.ts        # TypeScript type definitions
│   ├── App.tsx             # Main application component
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
├── package.json            # Dependencies and scripts
├── vite.config.ts          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/top10restaurants.git
   cd top10restaurants
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Pages & Features

### Home Page
- Hero section with call-to-action buttons
- Feature highlights explaining the value proposition
- Smooth navigation to other sections

### Blogs Page
- Grid layout of restaurant cards
- Filter by country (USA/UK)
- Click to view detailed restaurant information

### Individual Restaurant Pages
- Detailed restaurant information
- High-quality images
- Full descriptions and ratings
- Location and cuisine details
- Price range indicators

### Contact Page
- Contact form for inquiries
- Professional contact information
- User-friendly interface

## 🎨 Design System

The website uses a consistent design system with:
- **Color Palette**: Yellow and black theme representing culinary excellence
- **Typography**: Clean, readable fonts for optimal user experience
- **Spacing**: Consistent padding and margins throughout
- **Components**: Reusable UI components for maintainability

## 📊 Data Structure

Restaurants are stored with the following information:
- Name and location
- Cuisine type and price range
- Rating and detailed descriptions
- High-quality images
- Country classification (USA/UK)

## 🌐 Deployment

The website is deployed and accessible at [https://top10restaurants.online](https://top10restaurants.online)

### Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized production files ready for deployment.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

- **Website**: [https://top10restaurants.online](https://top10restaurants.online)
- **Email**: [Your email here]

## 🙏 Acknowledgments

- Restaurant data curated by culinary experts
- Images sourced from Pexels
- Built with modern web technologies for optimal performance
