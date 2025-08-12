import React from 'react';
import { FaHeart } from 'react-icons/fa';
import VideoGrid from '../components/video/VideoGrid';
import { useVideo } from '../context/VideoContext';

function FavoritesPage() {
  const { favorites } = useVideo();

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <FaHeart className="text-3xl text-red-500" />
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Favorites
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Your favorite videos ({favorites.length})
          </p>
        </div>
      </div>

      <VideoGrid 
        videos={favorites} 
        title="Favorite Videos"
        showViewToggle={true}
      />
    </div>
  );
}

export default FavoritesPage; 