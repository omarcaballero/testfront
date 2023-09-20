import React, { useEffect, useState } from 'react';
import './css/MovieDetails.css';

function MovieDetail({ movie }) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    if (!movie) {
      setCharacters([]);
      return;
    }
    
    Promise.all(movie.characters.map((characterUrl) => fetch(characterUrl).then((response) => response.json())))
      .then((characterData) => {
        setCharacters(characterData);
      })
      .catch((error) => console.error('Error fetching character data:', error));
  }, [movie]);

  if (!movie) {
    return <div class="detalle">Selecciona una película para ver los detalles.</div>;
  }

  return (
    <div class="detalles">
      <h2>Detalles de la Película</h2>
      <p>Título: {movie.title}</p>
      <p>Director: {movie.director}</p>
      <h3>Personajes:</h3>
      <ul>
        {characters.map((character) => (
          <li key={character.url}>
            Nombre: {character.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieDetail;