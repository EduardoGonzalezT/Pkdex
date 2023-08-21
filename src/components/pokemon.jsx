import React from 'react';

function pokemon(props) {
  const { pokemon } = props;
  let peso = '/src/assets/peso.svg';
  let altura = '/src/assets/altura.svg';

  return (
    <div className='cardContent'>
      <div className='card'>
        <div className='pkmnHeader'>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <div className='pkmnName'>
            <span>No. {pokemon.id}</span>
            <p>{pokemon.name}</p>
          </div>
        </div>

        <div className='pkmnInfo'>

          <div className='type'>
            {pokemon.types.map((type, idx) => {
              let typeClass = '';

              // Asigna la clase CSS según el valor de type.name
              if (type.type.name === 'grass') {
                typeClass = 'grass-type';
              } else if (type.type.name === 'poison') {
                typeClass = 'poison-type';
              }

              return (
                <span key={idx} className={typeClass}>
                  {type.type.name}
                </span>
              );
            })}
          </div>

          <div className='pkmnInfoBase'>
            <p> Altura: {pokemon.height} <img src={altura} alt='' /> </p>
            <p>
              Peso: {pokemon.weight} kg <img src={peso} alt='' />
            </p>
          </div>
        </div>

        <div className='pkmnStats'>
          <div className='stats'>
            {pokemon.stats.map((stat, idx) => {
              return (
                <div key={idx}>
                  {stat.stat.name} {stat.base_stat}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default pokemon;
