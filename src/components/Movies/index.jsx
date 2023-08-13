import React, { useEffect, useState } from "react";
import "./style.css";
import MovieDetails from "../MovieDetail";
import Getcategory from "../genres";
import { getMovies } from "../../utilis/utilities";
import ImageConatiner from "../../atoms/ImageContainer";




const MovieList = ({ searchResults }) => {
  const [movies, setMovies] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCategoryName, setSelectedCategoryName] = useState("All");
  const [selectedMovie, setSelectedMovie] = useState(null);
  useEffect(() => {
    (async () => {
      const movies = await getMovies();
      setMovies(movies.results);
    })();
  }, []);
  const handleCategoryChange = (categoryId, categoryName) => {
    setSelectedCategory(categoryId);
    setSelectedCategoryName(categoryName);
  };
  const handleMovieClick = (movieId) => {
    setSelectedMovie(movieId);
  };
  const handleCloseMovieDetails = () => {
    setSelectedMovie(null);
  };
  const filteredMovies =
    selectedCategory === "all"
      ? movies
      : movies.filter((movie) => movie.genre_ids.includes(parseInt(selectedCategory)));
  const moviesToDisplay = searchResults && searchResults.length > 0 ? searchResults : filteredMovies;
  return (
    <div className="mainmovie">
      <Getcategory
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
      />{selectedCategoryName !== "All" && <h1>{selectedCategoryName} Movies</h1>}
      <div className="movies">
        {moviesToDisplay.map((item) => (
          <ImageConatiner
            props={item}
            key={item.id}
            onClick={() => handleMovieClick(item.id)}
          />
        ))}
      </div>
      {selectedMovie && (
        <MovieDetails movieId={selectedMovie} onClose={handleCloseMovieDetails} />
      )}
    </div>
  );
};
export default MovieList;