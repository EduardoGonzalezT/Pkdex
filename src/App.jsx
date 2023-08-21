import React , { useState, useEffect } from 'react';
import './App.css'
import Navbar from './components/navbar';
import SearchBar from './components/searchBar';
import Pokedex from './components/pokedex';
import { getPokemon, getPokemonData } from '../api';

function App() {

  const [pokemon , setPokemons] = useState([]);

  const fetchPokemon = async () =>{
    try {
      const data = await getPokemon();
      const promises = data.results.map( async (pokemon) =>{
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
    } catch (error) {}
  }

  useEffect(() => {
    fetchPokemon();
  } , []);

  return (
    <div>
      <Navbar></Navbar>
      <SearchBar></SearchBar>
      <Pokedex pokemon={pokemon}></Pokedex>
    </div>
  );
}

export default App;
