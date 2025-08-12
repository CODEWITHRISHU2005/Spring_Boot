import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlay, FaClock, FaHeart, FaEye } from 'react-icons/fa';
import { formatDuration, formatFileSize, formatUploadDate } from '../../utils/videoUtils';
import { useVideo } from '../../context/VideoContext';

function VideoThumbnail({ video, onVideoClick, showPlayButton = true }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  const { favorites, toggleFavorite } = useVideo();
  const navigate = useNavigate();

  const isFavorite = favorites.some(fav => fav.id === video.id);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleVideoClick = () => {
    if (onVideoClick) {
      onVideoClick(video);
    } else {
      navigate(`/watch/${video.id}`);
    }
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    toggleFavorite(video);
  };

  const defaultThumbnail = (
    <div className="w-full h-32 bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
      <FaPlay className="text-white text-2xl" />
    </div>
  );

  return (
    <div
      className="relative group cursor-pointer bg-white dark:bg-neutral-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-102"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleVideoClick}
    >
      {/* Thumbnail Image */}
      <div className="relative">
        {imageError ? (
          defaultThumbnail
        ) : (
          <img
            src={video.thumbnailUrl}
            alt={video.title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            onError={handleImageError}
          />
        )}

        {/* Overlay on hover */}
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center transition-opacity duration-300">
            {showPlayButton && (
              <div className="bg-primary-dark bg-opacity-80 rounded-full p-4 transform transition-transform duration-300 group-hover:scale-110">
                <FaPlay className="text-white text-3xl" />
              </div>
            )}
          </div>
        )}

        {/* Duration Badge */}
        {video.duration && (
          <div className="absolute bottom-2 left-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded-md font-semibold">
            {formatDuration(video.duration)}
          </div>
        )}

        {/* Favorite Button */}
        <button
          onClick={handleFavoriteClick}
          className={`absolute top-2 right-2 p-2 rounded-full transition-all duration-300 transform ${isFavorite ? 'bg-red-600 text-white scale-110' : 'bg-neutral-700 bg-opacity-75 text-neutral-300 hover:bg-red-500 hover:text-white'}`}
        >
          <FaHeart className="text-base" />
        </button>
      </div>

      {/* Video Info */}
      <div className="p-4">
        <h3 className="font-bold text-neutral-900 dark:text-white text-base line-clamp-2 mb-1 leading-tight">
          {video.title}
        </h3>

        <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 mt-2">
          <div className="flex items-center space-x-1">
            <FaClock className="text-sm" />
            <span>{formatUploadDate(video.uploadDate)}</span>
          </div>

          {video.fileSize && (
            <span className="ml-auto">{formatFileSize(video.fileSize)}</span>
          )}
        </div>

        {/* Additional Info */}
        <div className="mt-2 flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
          {video.views !== undefined && (
            <div className="flex items-center space-x-1">
              <FaEye className="text-sm" />
              <span>{video.views} views</span>
            </div>
          )}

          {video.description && (
            <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-1 mt-1">
              {video.description}
            </p>
          )}
        </div>
      </div>

      {/* Loading State */}
      {video.processing && (
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center z-10">
          <div className="text-white text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-3"></div>
            <p className="text-sm font-semibold">Processing Video...</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default VideoThumbnail;
