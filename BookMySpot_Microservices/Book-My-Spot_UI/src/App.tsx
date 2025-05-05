import React from 'react';
import { AppProvider } from './context/AppContext';
import HomePage from './pages/HomePage';
import MovieDetailPage from './pages/MovieDetailPage';

function App() {
  // In a real app, you would use React Router for navigation
  const currentPage = 'home'; // Options: 'home', 'movieDetail'

  return (
    <AppProvider>
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'movieDetail' && <MovieDetailPage />}
    </AppProvider>
  );
}

export default App;