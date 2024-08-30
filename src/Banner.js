import React from 'react';
import './Banner.css';

const Banner = ({ movie }) => {
  if (!movie) return null;

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
      }}
    >
      <div className="banner-overlay">
        <div className="banner-content">
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <button className="banner-button">Watch Trailer</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
