import React, { useState } from 'react';
import { fetchMovieVideos } from './api';
import Modal from './Modal';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  const [videoId, setVideoId] = useState(null);

  const getTrailer = async (movieId) => {
    const videos = await fetchMovieVideos(movieId);
    if (videos.length > 0) {
      const trailer = videos.find(video => video.type === 'Trailer');
      if (trailer) {
        setVideoId(trailer.key);
      }
    }
  };

  const handlePlayTrailer = () => {
    getTrailer(movie.id);
  };

  const handleCloseModal = () => {
    setVideoId(null);
  };

  return (
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <button onClick={handlePlayTrailer}>Play Trailer</button>
      </div>
      {videoId && <Modal videoId={videoId} onClose={handleCloseModal} />}
    </div>
  );
};

export default MovieCard;
