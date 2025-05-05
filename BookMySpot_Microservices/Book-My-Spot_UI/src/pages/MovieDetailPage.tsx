import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';
import { Movie, Theater } from '../types';
import { movies, theaters } from '../data/mockData';
import { Star, Clock, Calendar } from 'lucide-react';

const MovieDetailPage: React.FC = () => {
  const movie = movies[0]; // In a real app, this would be fetched based on URL params
  const [selectedDate, setSelectedDate] = useState<string>('Today');
  const [selectedTheater, setSelectedTheater] = useState<Theater | null>(null);
  const [selectedShowTime, setSelectedShowTime] = useState<string | null>(null);

  const dates = ['Today', 'Tomorrow', 'Sat, 27 Jul', 'Sun, 28 Jul', 'Mon, 29 Jul'];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Movie Hero */}
        <div className="relative h-[350px] md:h-[500px]">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent">
            <img 
              src={movie.imageUrl} 
              alt={movie.title} 
              className="w-full h-full object-cover mix-blend-overlay"
            />
          </div>
          
          <div className="container mx-auto px-4 relative h-full flex flex-col justify-end pb-10">
            <div className="md:flex">
              <div className="hidden md:block md:w-[200px] h-[300px] shadow-lg rounded-md overflow-hidden">
                <img 
                  src={movie.imageUrl} 
                  alt={movie.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="md:ml-8 text-white">
                <h1 className="text-3xl md:text-4xl font-bold">{movie.title}</h1>
                <div className="flex items-center mt-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-1 text-lg font-bold">{movie.rating}/10</span>
                  <span className="ml-2 text-sm text-gray-300">235.9K Votes</span>
                </div>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  {movie.genres.map((genre, index) => (
                    <span 
                      key={index} 
                      className="bg-black bg-opacity-50 px-2 py-1 text-xs rounded"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
                
                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{movie.duration}</span>
                  </div>
                  <div>{movie.language}</div>
                  <div className="border border-white px-1 text-xs">{movie.certificate}</div>
                </div>
                
                <div className="mt-6">
                  <Button size="lg">
                    Book tickets
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Movie Info */}
        <div className="bg-gray-100 py-8">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">About the movie</h2>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Cast</h3>
                <div className="flex overflow-x-auto space-x-4 pb-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex-shrink-0 w-20">
                      <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                        <img 
                          src={`https://images.pexels.com/photos/7148384/pexels-photo-7148384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`} 
                          alt={`Cast ${i}`} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-center text-sm mt-1">Actor {i}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Showtimes */}
        <div className="py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Select date and showtime</h2>
            
            {/* Date Selection */}
            <div className="flex overflow-x-auto space-x-3 mb-6 pb-2">
              {dates.map((date) => (
                <button
                  key={date}
                  className={`flex-shrink-0 flex flex-col items-center justify-center px-4 py-2 rounded-md border ${
                    selectedDate === date 
                      ? 'border-[#E23744] text-[#E23744]' 
                      : 'border-gray-300 text-gray-700 hover:border-gray-400'
                  }`}
                  onClick={() => setSelectedDate(date)}
                >
                  <Calendar className="h-4 w-4 mb-1" />
                  <span className="whitespace-nowrap text-sm">{date}</span>
                </button>
              ))}
            </div>
            
            {/* Theaters & Showtimes */}
            <div className="space-y-6">
              {theaters.map((theater) => (
                <div 
                  key={theater.id} 
                  className={`bg-white rounded-lg shadow-md p-4 ${
                    selectedTheater?.id === theater.id ? 'border-2 border-[#E23744]' : ''
                  }`}
                  onClick={() => setSelectedTheater(theater)}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-bold text-lg">{theater.name}</h3>
                      <p className="text-gray-600 text-sm">{theater.location}</p>
                    </div>
                    <div className="flex space-x-2">
                      <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        Cancellation Available
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 mt-4">
                    {theater.showTimes.map((time) => (
                      <button
                        key={time}
                        className={`px-4 py-2 rounded border text-sm font-medium transition-colors ${
                          selectedShowTime === time && selectedTheater?.id === theater.id
                            ? 'bg-[#E23744] text-white border-[#E23744]'
                            : 'border-gray-300 text-gray-700 hover:border-[#E23744] hover:text-[#E23744]'
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedShowTime(time);
                          setSelectedTheater(theater);
                        }}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {/* CTA */}
            {selectedShowTime && selectedTheater && (
              <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 p-4 z-10">
                <div className="container mx-auto flex items-center justify-between">
                  <div>
                    <p className="font-bold">{selectedTheater.name}</p>
                    <p className="text-sm text-gray-600">{selectedDate} • {selectedShowTime}</p>
                  </div>
                  <Button>
                    Select Seats
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MovieDetailPage;