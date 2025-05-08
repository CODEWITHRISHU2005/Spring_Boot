import { SectionContainer } from '@/components/home/SectionContainer';
import { MovieCard } from '@/components/movies/MovieCard';
import { EventCard } from '@/components/home/EventCard';
import { movies, events, activities } from '@/data/mock-data';
import Image from 'next/image';
import React from 'react';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="bg-gray-50 pb-10">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 py-20 text-white">
        <div className="bms-container text-center">
          {/* Logo at Top-Left */}
          <div className="absolute top-0 left-0">
            <Image
              src="images/BookMySpot.png" // Path relative to the public folder
              alt="BookMySpot Logo"
              width={120} // Adjust width as needed
              height={60} // Adjust height as needed
            />
          </div>
          <h1 className="text-4xl font-bold mb-4">Book Your Entertainment</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Movies, Events, Plays, Sports & More. Experience the best of entertainment with BookMyShow.
          </p>
        </div>
      </div>

      {/* Movies Section */}
      <SectionContainer title="Movies" viewAllLink="/movies">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </SectionContainer>

      {/* Events Section */}
      <SectionContainer title="Events" viewAllLink="/events">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {events.map((event) => (
            <EventCard key={event.id} event={event} type="event" />
          ))}
        </div>
      </SectionContainer>

      {/* Activities Section */}
      <SectionContainer title="Activities" viewAllLink="/activities">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {activities.map((activity) => (
            <EventCard key={activity.id} event={activity} type="activity" />
          ))}
        </div>
      </SectionContainer>

      {/* Premier Section */}
      <div className="bms-container py-10">
        <div className="bg-gray-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Enjoy Exclusive Premieres</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Watch blockbuster movies from the comfort of your home. New movies premiering every week.
          </p>
          <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-md font-medium">
            Explore Premieres
          </button>
        </div>
      </div>
    </div>
  );
}
