import React, { useState, useMemo } from 'react';
import { FaTh, FaList, FaEye, FaGripLines } from 'react-icons/fa';
import { Button, Spinner } from 'flowbite-react';
import VideoThumbnail from './VideoThumbnail';
import { useVideo } from '../../context/VideoContext';

function VideoGrid({
  videos = [],
  title = 'Videos',
  showViewToggle = true,
}) {
  const {
    playVideo,
    favorites,
    toggleFavorite,
    isLoading,
  } = useVideo();

  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');

  const sortedVideos = useMemo(() => {
    const cloned = [...videos];
    return cloned.sort((a, b) => {
      let aValue, bValue;

      switch (sortBy) {
        case 'title':
          aValue = a.title?.toLowerCase() || '';
          bValue = b.title?.toLowerCase() || '';
          break;
        case 'duration':
          aValue = a.duration || 0;
          bValue = b.duration || 0;
          break;
        case 'views':
          aValue = a.views || 0;
          bValue = b.views || 0;
          break;
        case 'date':
        default:
          aValue = new Date(a.uploadDate || 0).getTime();
          bValue = new Date(b.uploadDate || 0).getTime();
          break;
      }

      return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
    });
  }, [videos, sortBy, sortOrder]);

  const getGridClasses = () => {
    switch (viewMode) {
      case 'list':
        return 'grid-cols-1 gap-4';
      case 'compact':
        return 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3';
      case 'grid':
      default:
        return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6';
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64 bg-neutral-100 dark:bg-neutral-900 rounded-lg shadow-inner">
        <div className="text-center animate-pulse">
          <Spinner size="xl" color="info" />
          <p className="mt-4 text-neutral-600 dark:text-neutral-400 font-semibold">
            Loading awesome videos...
          </p>
        </div>
      </div>
    );
  }

  if (sortedVideos.length === 0) {
    return (
      <div className="text-center py-12 bg-neutral-50 dark:bg-neutral-900 rounded-lg shadow-inner">
        <FaEye className="mx-auto text-5xl text-neutral-400 mb-4 animate-pulse" />
        <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
          No videos found
        </h3>
        <p className="text-neutral-500 dark:text-neutral-400 text-base">
          {title === 'Favorites'
            ? "You haven't added any videos to favorites yet. Start exploring!"
            : 'No videos available. Check back later or upload some!'}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* 📌 Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b pb-5 border-neutral-200 dark:border-neutral-700">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
            {title}
          </h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Showing {sortedVideos.length} video{sortedVideos.length !== 1 ? 's' : ''}
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mt-5 sm:mt-0 items-center">
          {/* 🔃 Sort Options */}
          <div className="flex gap-2">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm border border-neutral-300 dark:border-neutral-600 rounded-full px-3 py-1.5 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:ring-primary focus:border-primary transition-all"
              aria-label="Sort By"
            >
              <option value="date">Date</option>
              <option value="title">Title</option>
              <option value="duration">Duration</option>
              <option value="views">Views</option>
            </select>

            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="text-sm border border-neutral-300 dark:border-neutral-600 rounded-full px-3 py-1.5 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:ring-primary focus:border-primary transition-all"
              aria-label="Sort Order"
            >
              <option value="desc">Desc</option>
              <option value="asc">Asc</option>
            </select>
          </div>

          {/* 🔲 View Toggle */}
          {showViewToggle && (
            <div
              className="flex items-center space-x-1 bg-neutral-200 dark:bg-neutral-700 rounded-full px-2 py-1 transition-all shadow-inner"
              role="group"
              aria-label="View Mode"
            >
              <Button
                size="sm"
                color={viewMode === 'grid' ? 'info' : 'gray'}
                onClick={() => setViewMode('grid')}
                className="px-2 py-1 rounded-full transition-all"
                aria-label="Grid View"
              >
                <FaTh />
              </Button>
              <Button
                size="sm"
                color={viewMode === 'list' ? 'info' : 'gray'}
                onClick={() => setViewMode('list')}
                className="px-2 py-1 rounded-full transition-all"
                aria-label="List View"
              >
                <FaList />
              </Button>
              <Button
                size="sm"
                color={viewMode === 'compact' ? 'info' : 'gray'}
                onClick={() => setViewMode('compact')}
                className="px-2 py-1 rounded-full transition-all"
                aria-label="Compact View"
              >
                <FaGripLines />
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* 🎥 Grid */}
      <div className={`grid ${getGridClasses()}`}>
        {sortedVideos.map((video) => (
          <VideoThumbnail
            key={video.id}
            video={video}
            showPlayButton={true}
            viewMode={viewMode}
          />
        ))}
      </div>
    </div>
  );
}

export default VideoGrid;
