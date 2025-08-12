import React, { useEffect, useMemo } from 'react';
import { FaPlay, FaHeart, FaClock, FaEye, FaTimes, FaUpload } from 'react-icons/fa';
import { Button, Card } from 'flowbite-react';
import VideoPlayer from '../components/VideoPlayer';
import VideoGrid from '../components/video/VideoGrid';
import VideoPlaylist from '../components/playlist/VideoPlaylist';
import { useVideo } from '../context/VideoContext';
import { getVideoThumbnail } from '../utils/videoUtils';
import { mapVideoDetails } from '../utils/mapVideoDetails';
import { Link, useNavigate } from 'react-router-dom';

export default function HomePage() {
  const {
    videos: rawVideos,
    currentVideo,
    recentlyPlayed,
    isLoading,
    isPlaying,
    playVideo,
  } = useVideo();
  const navigate = useNavigate();

  const videos = useMemo(
    () =>
      rawVideos.map(video => mapVideoDetails({ ...video, thumbnailUrl: video.thumbnailUrl || getVideoThumbnail(video.id) })),
    [rawVideos]
  );

  const featuredVideos = useMemo(() => videos.slice(0, 6), [videos]);

  const recentVideos = useMemo(
    () =>
      recentlyPlayed.slice(0, 4).map(video => mapVideoDetails({ ...video, thumbnailUrl: video.thumbnailUrl || getVideoThumbnail(video.id) })),
    [recentlyPlayed]
  );

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
      section.style.animationDelay = `${index * 0.1}s`;
      section.classList.add('animate-fade-in');
    });
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-tr from-gray-100 via-gray-200 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="text-center animate-pulse">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 mx-auto"></div>
          <p className="mt-6 text-xl font-bold text-gray-700 dark:text-gray-300">
            Loading awesome content...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[90rem] mx-auto space-y-20 py-16 px-6 sm:px-8 lg:px-12 bg-neutral-50 dark:bg-black min-h-screen font-sans text-neutral-900 dark:text-white relative">
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-800 text-white rounded-3xl shadow-2xl p-12 overflow-hidden" aria-label="Hero Section">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-3xl z-0" />
        <div className="relative z-10 text-center space-y-6">
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-2xl">
            Stream, Connect, Inspire.
          </h1>
          <p className="text-lg sm:text-2xl max-w-3xl mx-auto text-white/90">
            Discover a world of creativity through immersive, community-powered videos.
          </p>
          <Link to="/upload" aria-label="Upload Your Video" className='flex justify-center'>
            <Button
              size="lg"
              className="bg-white text-pink-700 hover:bg-pink-100 transition-all duration-300 shadow-md hover:scale-105 px-6 py-3 rounded-full font-semibold"
            >
              <FaUpload className="mr-2" /> Upload Your Video
            </Button>
          </Link>
        </div>
      </section>

      {currentVideo?.url && (
        <section className="space-y-6 relative" aria-label="Now Playing">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">
              Now Playing
            </h2>
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                color="gray"
                onClick={() => navigate(`/watch/${currentVideo.id}`)}
                className="hover:shadow-md transition-transform hover:-translate-y-1"
                aria-label="View Full Player"
              >
                View Full Player
              </Button>
              <Button
                size="sm"
                color="red"
                onClick={() => playVideo(null)}
                className="hover:shadow-md transition-transform hover:-translate-y-1"
                aria-label="Close Player"
              >
                <FaTimes />
              </Button>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <VideoPlayer videoData={currentVideo} isPlaying={isPlaying} />
          </div>
        </section>
      )}

      <section className="space-y-6" aria-label="Featured Videos">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-400 flex items-center gap-2">
            <FaPlay className="text-yellow-300" /> Featured Videos
          </h2>
          <Button
            color="pink"
            size="sm"
            className="transition-transform hover:scale-105 shadow-sm"
            onClick={() => navigate('/videos')}
            aria-label="View All Featured Videos"
          >
            View All
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredVideos.map(video => (
            <Card
              key={video.id}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 bg-white dark:bg-neutral-900 cursor-pointer"
              onClick={() => {
                const mapped = mapVideoDetails(video);
                playVideo(mapped);
                navigate(`/watch/${video.id}`);
              }}
              aria-label={`Watch ${video.title}`}
            >
              <img
                src={video.thumbnailUrl}
                alt={`Thumbnail of ${video.title}`}
                className="h-48 w-full object-cover transition-all duration-200"
                loading="lazy"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold line-clamp-2 dark:text-white">{video.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                  {video.description}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <FaClock />{' '}
                    {video.uploadDate
                      ? new Date(video.uploadDate).toLocaleDateString()
                      : 'Unknown'}
                  </div>
                  {typeof video.views === 'number' && (
                    <div className="flex items-center gap-1">
                      <FaEye /> {video.views} views
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {recentVideos.length > 0 && (
        <section className="space-y-6" aria-label="Recently Played">
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 flex items-center gap-2">
            <FaHeart className="text-red-400" /> Recently Played
          </h2>
          <VideoPlaylist title="Recent Videos" videos={recentVideos} showControls={false} />
        </section>
      )}

      <section className="space-y-6" aria-label="All Videos">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            All Videos
          </h2>
          <Button
            color="purple"
            size="sm"
            className="transition-transform hover:scale-105 shadow-sm"
            onClick={() => navigate('/videos')}
            aria-label="View All Videos"
          >
            View All
          </Button>
        </div>
        <VideoGrid
          videos={videos}
          showControls
          showUploadButton
          showFavorites
          showRecentlyPlayed
          showSearch
          showViewToggle
        />
      </section>
    </div>
  );
}