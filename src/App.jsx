import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Watchlist from './pages/Watchlist';
import Reviews from './pages/Reviews';
import FilmDetail from './pages/FilmDetail';
import ErrorBoundary from './components/ErrorBoundary';
import SearchResults from './pages/SearchResults';
import movies from './data/movies';

export default function App() {
  const [watchlist, setWatchlist] = useState(() => {
    try {
      return JSON.parse(sessionStorage.getItem('hollyhub_watchlist') || '[]');
    } catch { return []; }
  });
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    sessionStorage.setItem('hollyhub_watchlist', JSON.stringify(watchlist));
  }, [watchlist]);

  function handleWatchlist(movie) {
    setWatchlist(prev =>
      prev.some(w => w.id === movie.id)
        ? prev.filter(w => w.id !== movie.id)
        : [...prev, movie]
    );
  }

  function handleSearch(value) {
    setSearch(value);
    if (value.trim()) {
      navigate('/search');
    } else if (location.pathname === '/search') {
      navigate('/');
    }
  }

  const searchResults = search.trim()
    ? movies.filter(m => m.title.toLowerCase().includes(search.toLowerCase()))
    : [];

  return (
    <ErrorBoundary>
      <Header search={search} onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<Home watchlist={watchlist} onWatchlist={handleWatchlist} />} />
        <Route path="/watchlist" element={<Watchlist watchlist={watchlist} onWatchlist={handleWatchlist} />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/film/:id" element={<FilmDetail watchlist={watchlist} onWatchlist={handleWatchlist} />} />
        <Route path="/search" element={<SearchResults results={searchResults} query={search} watchlist={watchlist} onWatchlist={handleWatchlist} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </ErrorBoundary>
  );
}
