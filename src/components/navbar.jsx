import React from 'react';

function navbar() {
  let imgPokeApi =
    '/src/assets/pkdx_logo.png';

  return (
    <div>
      <nav>
        <div className='header'>
          <img className='PokeApiLogo' src={imgPokeApi} alt='Pokeapi_logo' />
        </div>
      </nav>
    </div>
  );
}

export default navbar;
