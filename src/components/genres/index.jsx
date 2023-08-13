
import React, { useEffect, useState } from "react";
import { getGenre } from "../../utilis/utilities";
import "./style.css";

const Getcategory = ({ selectedCategory, handleCategoryChange }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const genreData = await getGenre();
        setMovies(genreData.genres);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching genres:", error.message);
        setLoading(false);
      }
    };
    fetchGenres();
  }, []);

  if (loading) {
    return <h1 className="loading">Loading ...</h1>;
  }

  return (
    <div className="category-buttons">
      {movies.map((category) => (
        <button
          key={category.id}
          onClick={() => handleCategoryChange(category.id, category.name)}
          className={selectedCategory === category.id ? "active" : ""}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default Getcategory;

