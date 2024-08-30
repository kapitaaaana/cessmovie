import axios from 'axios';

const API_KEY = '1dffd7dd9e936ad6e80308b4b6f2626a';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchLatestMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/now_playing`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
        page: 1,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching latest movies:', error);
    return [];
  }
};

export const fetchMovieVideos = async (movieId) => {
    try {
      const response = await axios.get(`${BASE_URL}/movie/${movieId}/videos`, {
        params: {
          api_key: API_KEY,
          language: 'en-US',
        },
      });
      return response.data.results;
    } catch (error) {
      console.error('Error fetching movie videos:', error);
      return [];
    }
  };

  export const fetchMovies = async (query = '') => {
    try {
      const response = await axios.get(`${BASE_URL}/search/movie`, {
        params: {
          api_key: API_KEY,
          query,
          language: 'en-US',
          page: 1,
        },
      });
      return response.data.results;
    } catch (error) {
      console.error('Error fetching movies:', error);
      return [];
    }
  };
  
  export const fetchTrendingMovies = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/trending/movie/day`, {
        params: {
          api_key: API_KEY,
          language: 'en-US',
        },
      });
      return response.data.results;
    } catch (error) {
      console.error('Error fetching trending movies:', error);
      return [];
    }
  };
  
  
