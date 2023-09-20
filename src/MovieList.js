import React, { useState, useEffect } from 'react';
import './css/MovieList.css';

function MovieList({ onMovieSelect }) {
  const [films, setFilms] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/test/api/getApiData')
      .then((response) => response.json())
      .then((data) => setFilms(data.results))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleMovieSelect = (film) => {
    setSelectedMovie(film);
    onMovieSelect(film);
  };

  return (
    <div>
      <h1 className="movie-list-title">Peliculas de star wars</h1>
      <ul>
        {films.map((film) => (
          <li key={film.episode_id} onClick={() => handleMovieSelect(film)} className="movie-list-item">
            {film.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
