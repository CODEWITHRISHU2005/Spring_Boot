import React, { useState, useEffect, useCallback } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import {
  FaHome, FaSearch, FaHeart, FaUpload, FaHistory,
  FaPlay, FaCog, FaBars, FaTimes, FaBell, FaMicrophone
} from "react-icons/fa";
import { Button, Navbar, Sidebar } from "flowbite-react";

// Context
import { VideoProvider, useVideo } from "./context/VideoContext";

// Components
import VideoPlayer from "./components/VideoPlayer";
import VideoSearch from "./components/video/VideoSearch";

// Pages
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import FavoritesPage from "./pages/FavoritesPage";
import UploadPage from "./pages/UploadPage";
import HistoryPage from "./pages/HistoryPage";
import SettingsPage from "./pages/SettingsPage";
import SignInPage from "./pages/auth/SignInPage";
import SignUpPage from "./pages/auth/SignUpPage";
import WatchLaterPage from "./pages/WatchLaterPage";
import NotificationsPage from "./pages/NotificationsPage";
import WatchPage from "./pages/WatchPage";

const NAV_ITEMS = [
  { name: "Home", href: "/", icon: FaHome },
  { name: "Search", href: "/search", icon: FaSearch },
  { name: "Favorites", href: "/favorites", icon: FaHeart },
  { name: "Watch Later", href: "/watch-later", icon: FaPlay },
  { name: "History", href: "/history", icon: FaHistory },
  { name: "Notifications", href: "/notifications", icon: FaBell },
  { name: "Settings", href: "/settings", icon: FaCog },
  { name: "Upload", href: "/upload", icon: FaUpload },
];

function AppContent() {
  const {
    videos, currentVideo, recentlyPlayed, favorites,
    fetchVideos, isLoading
  } = useVideo();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  const toggleSidebar = useCallback(() => setSidebarOpen(prev => !prev), []);
  const closeSidebar = useCallback(() => setSidebarOpen(false), []);

  return (
    <div className="min-h-screen bg-black dark:bg-black">
      <Toaster position="top-left" />

      {/* Top Navbar */}
      <Navbar className="bg-black shadow-lg border-b border-neutral-800">
        <div className="flex items-center justify-between w-full px-4 py-2">

          {/* Left: Logo + Toggle */}
          <div className="flex items-center space-x-4">
            <Button
              color="black"
              size="sm"
              onMouseEnter={() => setSidebarOpen(true)}
              className="bg-neutral-800 text-white hover:bg-neutral-700 focus:ring-neutral-600"
            >
              {sidebarOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
            </Button>

            <Link to="/" className="flex items-center space-x-2">
              <FaPlay className="text-3xl text-primary-light animate-pulse" />
              <span className="text-2xl font-extrabold text-white">StreamFlow</span>
            </Link>
          </div>

          {/* Middle: Search */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Stream what you love..."
                className="pl-4 pr-10 py-2 rounded-full bg-neutral-800 text-white placeholder-neutral-400 focus:ring-2 focus:ring-primary-light w-72 border border-neutral-700"
              />
              <FaSearch className="absolute right-3 text-neutral-400" />
            </div>
            <Button
              color="black"
              size="sm"
              className="bg-neutral-800 text-white hover:bg-neutral-700 focus:ring-neutral-600 rounded-full p-2"
            >
              <FaMicrophone className="text-lg" />
            </Button>
          </div>

          {/* Right: Notifications + Auth */}
          <div className="flex items-center space-x-6">
            <Link to="/notifications" className="relative">
              <button className="p-2 rounded-full hover:bg-neutral-800 transition relative">
                <FaBell className="text-xl text-white" />
                <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500 animate-ping" />
                <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500" />
              </button>
            </Link>
            <Link to="/signin">
              <Button
                color="primary"
                className="px-4 py-2 rounded-md font-semibold text-white bg-primary hover:bg-primary-dark"
              >
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </Navbar>

      {/* Main Layout */}
      <div className="flex lg:flex-row flex-col-reverse">
        {/* Sidebar */}
        <Sidebar
          className={`fixed z-40 top-0 left-0 h-screen w-64 bg-black shadow-xl transition-transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          onMouseLeave={closeSidebar}
        >
          <Sidebar.Items>
            <Sidebar.ItemGroup className="border-b border-neutral-700 pb-4 mb-4">
              {NAV_ITEMS.map(({ name, href, icon: Icon }) => (
                <Sidebar.Item
                  key={name}
                  as={Link}
                  to={href}
                  icon={Icon}
                  className="text-white hover:bg-neutral-700 hover:text-white transition py-2 px-4 rounded-md"
                >
                  <span className="text-base font-medium">{name}</span>
                </Sidebar.Item>
              ))}
            </Sidebar.ItemGroup>

            {/* Stats */}
            <Sidebar.ItemGroup>
              <Sidebar.Item className="text-xs text-neutral-400">
                <div className="space-y-2 p-2 bg-black rounded-md">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Favorites:</span>
                    <span className="font-bold text-primary-light">{favorites.length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Recent:</span>
                    <span className="font-bold text-secondary-light">{recentlyPlayed.length}</span>
                  </div>
                </div>
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>

        {/* Main Content Area */}
        <main className="flex-1 p-4 w-full bg-neutral-50 dark:bg-neutral-900 min-h-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/upload" element={<UploadPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/watch-later" element={<WatchLaterPage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/watch/:videoId" element={<WatchPage />} />
          </Routes>
        </main>
      </div>

      {/* Overlay (Mobile) */}
      {sidebarOpen && (
        <div
          role="button"
          aria-label="Close sidebar overlay"
          className="fixed inset-0 z-30 bg-black bg-opacity-75 lg:hidden transition-opacity duration-300 ease-in-out cursor-pointer"
          onClick={closeSidebar}
        >
          {/* Optional: Close Button at Top Right */}
          <div className="absolute top-4 right-4">
            <button
              onClick={closeSidebar}
              aria-label="Close sidebar"
              className="text-white text-2xl focus:outline-none"
            >
              &times;
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

function App() {
  return (
    <VideoProvider>
      <AppContent />
    </VideoProvider>
  );
}

export default App;
