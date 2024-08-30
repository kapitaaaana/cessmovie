import React, { useState, useEffect } from 'react';
import { fetchMovies, fetchTrendingMovies } from './api';
import Header from './Header';
import MovieList from './MovieList';
import Banner from './Banner';
import Footer from './Footer';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const getTrendingMovies = async () => {
      const trending = await fetchTrendingMovies();
      setTrendingMovies(trending);
    };

    getTrendingMovies();
  }, []);

  useEffect(() => {
    const getMovies = async () => {
      const movieData = await fetchMovies(query);
      setMovies(movieData);
    };

    if (query) {
      getMovies();
    } else {
      setMovies([]);
    }
  }, [query]);

  return (
    <div className="App">
      <Header setQuery={setQuery} />
      {query ? (
        <MovieList movies={movies} />
      ) : (
        <>
          <Banner movie={trendingMovies[0]} />
          <MovieList movies={trendingMovies} />
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;
 