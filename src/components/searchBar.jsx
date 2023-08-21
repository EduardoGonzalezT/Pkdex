import React, { useState } from 'react';
import { searchPokemon } from '../../api';

function searchBar() {

  let searchIcon = '/src/assets/search_icon.png'

  const [search, setSearch] = useState('');
  const [pokemon, setPokemon] = useState();

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onClick = async (e) => {
    const data = await searchPokemon(search);
    setPokemon(data);
  };

  return (
    <div className='searchbar'>
      <div className='searchInput'>
        <input type='text' placeholder='Buscar pokemon' onChange={onChange} />
        <a onClick={onClick}><img src={searchIcon} alt="" /></a>
      </div>
    </div>
  );
}

export default searchBar;
