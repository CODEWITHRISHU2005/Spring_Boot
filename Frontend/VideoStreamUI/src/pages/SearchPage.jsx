import React from 'react';
import VideoSearch from '../components/video/VideoSearch';
import VideoGrid from '../components/video/VideoGrid';
import { useVideo } from '../context/VideoContext';

function SearchPage() {
  const { videos, searchQuery, isLoading } = useVideo();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Search Videos
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Find the videos you're looking for
        </p>
      </div>

      <VideoSearch />

      {searchQuery && (
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Search Results for "{searchQuery}"
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {videos.length} video{videos.length !== 1 ? 's' : ''} found
          </p>
        </div>
      )}

      <VideoGrid 
        videos={videos} 
        title={searchQuery ? `Results for "${searchQuery}"` : "All Videos"}
        showViewToggle={true}
      />
    </div>
  );
}

export default SearchPage; 