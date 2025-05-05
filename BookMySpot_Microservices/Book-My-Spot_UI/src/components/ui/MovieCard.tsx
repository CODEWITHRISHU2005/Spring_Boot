import React from 'react';
import { Movie } from '../../types';

interface MovieCardProps {
  movie: Movie;
  onClick?: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onClick }) => {
  return (
    <div 
      className="relative rounded-md overflow-hidden shadow-md cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg"
      onClick={onClick}
    >
      <div className="relative aspect-[2/3] bg-gray-200">
        <img 
          src={movie.imageUrl} 
          alt={movie.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
          <div className="flex items-center gap-1">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" fill="#FFD700"/>
            </svg>
            <span className="text-white font-bold text-sm">{movie.rating}/10</span>
          </div>
        </div>
      </div>
      <div className="p-3 bg-white">
        <h3 className="font-bold text-lg line-clamp-1">{movie.title}</h3>
        <p className="text-gray-600 text-sm">{movie.language} • {movie.certificate}</p>
        <p className="text-gray-500 text-xs mt-1">{movie.genres.join(', ')}</p>
      </div>
    </div>
  );
};

export default MovieCard;