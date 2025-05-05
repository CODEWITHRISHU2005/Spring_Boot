import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import CarouselSection from '../components/sections/CarouselSection';
import MovieSection from '../components/sections/MovieSection';
import EventSection from '../components/sections/EventSection';
import OfferSection from '../components/sections/OfferSection';
import { movies, events, offers } from '../data/mockData';

const featuredSlides = [
  {
    id: '1',
    imageUrl: 'https://images.pexels.com/photos/3945317/pexels-photo-3945317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Deadpool & Wolverine',
  },
  {
    id: '2',
    imageUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Inside Out 2',
  },
  {
    id: '3',
    imageUrl: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Music Festival',
  },
];

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <CarouselSection slides={featuredSlides} />
        
        <div className="py-4 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex overflow-x-auto space-x-4 py-2 scrollbar-hide">
              {['Movies', 'Stream', 'Events', 'Plays', 'Sports', 'Activities', 'Buzz'].map((item) => (
                <button
                  key={item}
                  className="px-4 py-2 bg-white rounded-full shadow-sm text-sm whitespace-nowrap hover:bg-[#E23744] hover:text-white transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <MovieSection title="Recommended Movies" movies={movies} />
        
        <div className="container mx-auto px-4 py-6">
          <div className="bg-gradient-to-r from-[#5334e5] to-[#4a26e0] rounded-lg p-6 flex flex-col md:flex-row items-center justify-between">
            <div className="text-white mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Enjoy Watching</h3>
              <p className="text-gray-200">Thousands of movies and shows to explore now.</p>
            </div>
            <button className="bg-white text-[#4a26e0] px-6 py-2 rounded-md font-semibold hover:bg-gray-100 transition-colors">
              Subscribe Now
            </button>
          </div>
        </div>
        
        <EventSection title="Events Happening Near You" events={events} />
        <OfferSection offers={offers} />
        
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-4">Entertainment News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img 
                  src={`https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`} 
                  alt={`News ${i}`} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <span className="text-xs text-[#E23744] font-semibold">MOVIES</span>
                  <h3 className="font-bold text-lg mt-1">Latest Box Office Updates and Movie News</h3>
                  <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                    Get the latest updates on upcoming releases, box office performance, and movie industry news.
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-xs text-gray-500">July 25, 2024</span>
                    <a href="/" className="text-[#E23744] text-sm font-semibold hover:underline">Read More</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;