import React from 'react';
import { FaHistory } from 'react-icons/fa';
import VideoGrid from '../components/video/VideoGrid';
import { useVideo } from '../context/VideoContext';

function HistoryPage() {
  const { recentlyPlayed } = useVideo();

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <FaHistory className="text-3xl text-blue-500" />
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Watch History
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Videos you've recently watched ({recentlyPlayed.length})
          </p>
        </div>
      </div>

      <VideoGrid 
        videos={recentlyPlayed} 
        title="Recently Played"
        showViewToggle={true}
      />
    </div>
  );
}

export default HistoryPage; 