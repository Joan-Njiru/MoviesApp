
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesByCategory } from '../../utils/utilities';

const MoviesByCategory = () => {
  const { categoryName } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await getMoviesByCategory();
      setMovies(movies);
    };
    fetchMovies();
  }, [categoryName]);

  return (
    <div>
      <h1>Movies in the category: {categoryName}</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesByCategory;
