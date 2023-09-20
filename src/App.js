import React, { useState } from 'react';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';
import './css/app.css';

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div class="scroll-text" >
      <MovieList onMovieSelect={handleMovieSelect} />
      <MovieDetail movie={selectedMovie} />
    </div>
  );
}

export default App;