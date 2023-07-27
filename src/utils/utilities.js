// utils/utilities.js
const BASE_URL = process.env.REACT_APP_BASE_URL;
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

export const getMovies = async () => {
  try {
    const response = await fetch(`${BASE_URL}/3/movie/popular`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });

    const result = await response.json();
    return result;
  } catch (error) {
    return error.message;
  }
};


export const getMovieDetails = async (movieId) => {
  try {
    const response = await fetch(`${REACT_APP_BASE_URL}/3/movie/${movieId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${REACT_APP_ACCESS_TOKEN}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    return error.message;
  }
};

// Sample array of movieconst movies = [
  { id: 1, title: 'Movie 1', category: 'Action' },
  { id: 2, title: 'Movie 2', category: 'Comedy' },
  { id: 3, title: 'Movie 3', category: 'Action' },
  { id: 4, title: 'Movie 4', category: 'Adventure' },
  // Add more movie objects with different categories
];

export const getMoviesByCategory = (categoryName) => {
 
  const filteredMovies = movies.filter((movie) => movie.category === categoryName);
  return filteredMovies;
};
