import React from 'react';
import Pokemon from './pokemon';

function pokedex(props) {
  const { pokemon } = props;

  return (
    <div>
      {pokemon.map((pokemon) => {
        return (
            <Pokemon pokemon={pokemon} key={pokemon.name}></Pokemon>
        );
      })}
    </div>
  );
}

export default pokedex;
