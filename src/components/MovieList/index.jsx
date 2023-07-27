import React, { useState, useEffect } from "react";
import { getMovies } from "../../utils/utilities";
import ImageContainer from "../../atoms/Image-Container/container";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/search";

import './style.css';


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

  if (loading) {
    return <h1>Loading....</h1>;
  }
  return (
    <div>
             <SearchBar/>

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














