import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import styles from './CardsContainer.module.css';

function CardsContainer() {
  const pokemonData = useSelector(state => state.pokemonList);
  const searchedPokemon = useSelector(state => state.searchedPokemon); // Nuevo selector para el Pokémon buscado

  return (
    <div className={styles.cardsContainer}>
      {/* Mostrar el Pokémon buscado si existe */}
      {searchedPokemon ? (
        <Card
          key={searchedPokemon.id}
          name={searchedPokemon.name}
          id={searchedPokemon.id}
          img={searchedPokemon.img}
          styles={styles}
        />
      ) : (
        // Mostrar todos los Pokémon si no se busca ninguno
        pokemonData && pokemonData.map(pokemon => (
          <Card
            key={pokemon.id}
            name={pokemon.name}
            id={pokemon.id}
            img={pokemon.img}
            styles={styles}
          />
        ))
      )}
    </div>
  );
}

export default CardsContainer;

