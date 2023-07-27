import React, { useState, useEffect } from "react";
import { getMovies } from "../../utils/utilities";
import ImageContainer from "../../atoms/Image-Container/container";
import { Link } from "react-router-dom";

import './style.css';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;
const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const movies = await getMovies();
      setMovies(movies.results);
      setLoading(false);
    })();
  }, []);
  const handleSearchFunction = async (searchValue) => {
    if (!searchValue.trim()) {
      const movies = await getMovies();
      setMovies(movies.results);
    } else {
      try {
        const response = await fetch(`${BASE_URL}/3/search/movie?query=${searchValue}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        });
        const result = await response.json();
        console.log("result", result);
        setMovies(result.results);
      } catch (error) {
        console.error("Error fetching movies:", error.message);
      }
    }
  };
  if (loading) {
    return <h1>Loading....</h1>;
  }
  return (
    <div>
      <div className="moviesDisplay">
        {movies &&
          loading === false &&
          movies.length > 0 &&
          movies.map((item) =>
          <Link to={`/MovieDetails/${item.id}`} key={item.id}>
              <ImageContainer key={item.id} props={item} /> 
            </Link> )}
      </div>
    </div>
  );
};
export default MovieList;














