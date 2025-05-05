import React from 'react';
import MovieCard from '../ui/MovieCard';
import { Movie } from '../../types';
import { ChevronRight } from 'lucide-react';

interface MovieSectionProps {
  title: string;
  movies: Movie[];
}

const MovieSection: React.FC<MovieSectionProps> = ({ title, movies }) => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{title}</h2>
          <a href="/" className="flex items-center text-[#E23744] hover:underline">
            <span className="text-sm font-semibold">See All</span>
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MovieSection;