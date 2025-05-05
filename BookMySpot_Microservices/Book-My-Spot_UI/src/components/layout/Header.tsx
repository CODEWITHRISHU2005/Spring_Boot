import React, { useState } from 'react';
import { Search, Menu, X, MapPin, User, LogIn } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import { cities } from '../../data/mockData';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const { selectedCity, setSelectedCity, isUserLoggedIn, login, logout } = useAppContext();
  const [showCityModal, setShowCityModal] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleCitySelect = (city: typeof selectedCity) => {
    setSelectedCity(city);
    setShowCityModal(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // In a real app, this would redirect to search results
  };

  return (
    <header className="bg-white shadow-md">
      {/* Top Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-[#E23744]">BookMySpot</span>
            </a>
          </div>

          {/* Search */}
          <div className="hidden md:block flex-1 max-w-lg mx-8">
            <form onSubmit={handleSearch}>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for Movies, Events, Plays, Sports and Activities"
                  className="w-full py-2 pl-10 pr-4 text-sm bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E23744] focus:bg-white"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>
            </form>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              className="flex items-center text-sm text-gray-700 hover:text-[#E23744]"
              onClick={() => setShowCityModal(true)}
            >
              <MapPin className="h-4 w-4 mr-1" />
              {selectedCity.name}
            </button>
            
            {isUserLoggedIn ? (
              <div className="flex items-center gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={logout}
                >
                  Sign Out
                </Button>
                <User className="h-5 w-5 text-gray-700" />
              </div>
            ) : (
              <Button 
                variant="outline" 
                size="sm"
                onClick={login}
              >
                <LogIn className="h-4 w-4 mr-1" />
                Sign In
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="text-gray-500 hover:text-[#E23744] focus:outline-none"
            >
              {showMobileMenu ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Secondary Navigation */}
      <nav className="hidden md:block bg-[#222] text-white">
        <div className="container mx-auto px-4">
          <ul className="flex space-x-6 h-10 items-center text-sm">
            <li><a href="/" className="hover:text-[#E23744]">Movies</a></li>
            <li><a href="/" className="hover:text-[#E23744]">Stream</a></li>
            <li><a href="/" className="hover:text-[#E23744]">Events</a></li>
            <li><a href="/" className="hover:text-[#E23744]">Plays</a></li>
            <li><a href="/" className="hover:text-[#E23744]">Sports</a></li>
            <li><a href="/" className="hover:text-[#E23744]">Activities</a></li>
            <li><a href="/" className="hover:text-[#E23744]">Buzz</a></li>
          </ul>
        </div>
      </nav>

      {/* Mobile Search - Visible only on mobile */}
      <div className="md:hidden p-3 bg-gray-50">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for Movies, Events, Plays..."
            className="w-full py-2 pl-10 pr-4 text-sm bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E23744]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
        </div>
      </div>

      {/* Mobile menu */}
      {showMobileMenu && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-3 space-y-3">
            <button 
              className="flex items-center text-sm text-gray-700"
              onClick={() => {
                setShowCityModal(true);
                setShowMobileMenu(false);
              }}
            >
              <MapPin className="h-4 w-4 mr-2" />
              {selectedCity.name}
            </button>
            
            {isUserLoggedIn ? (
              <button 
                className="flex items-center text-sm text-gray-700 w-full py-2"
                onClick={logout}
              >
                Sign Out
              </button>
            ) : (
              <button 
                className="flex items-center text-sm text-gray-700 w-full py-2"
                onClick={login}
              >
                <LogIn className="h-4 w-4 mr-2" />
                Sign In
              </button>
            )}
            
            <div className="border-t border-gray-200 pt-3">
              <ul className="space-y-3">
                <li><a href="/" className="block py-1">Movies</a></li>
                <li><a href="/" className="block py-1">Stream</a></li>
                <li><a href="/" className="block py-1">Events</a></li>
                <li><a href="/" className="block py-1">Plays</a></li>
                <li><a href="/" className="block py-1">Sports</a></li>
                <li><a href="/" className="block py-1">Activities</a></li>
                <li><a href="/" className="block py-1">Buzz</a></li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* City Selection Modal */}
      {showCityModal && (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-5">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Select your city</h2>
              <button onClick={() => setShowCityModal(false)}>
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {cities.map((city) => (
                <button
                  key={city.id}
                  className={`p-2 text-center rounded-md transition-colors ${
                    selectedCity.id === city.id
                      ? 'bg-[#E23744] text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  }`}
                  onClick={() => handleCitySelect(city)}
                >
                  {city.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;