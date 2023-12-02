import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardsContainer from '../../components/CardsContainer/CardsContainer';
import { getPokemons, getPokemonByName, getPokemon_id } from '../../redux/actions';
import styles from "./Home.module.css";

function Home() {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');
  const pokemonData = useSelector(state => state.pokemonList);

    useEffect(() => {
    if (searchValue.trim() === '') {
      dispatch(getPokemons());
    } else {
      if (!isNaN(searchValue)) {
        dispatch(getPokemon_id(searchValue));
      } else {
        dispatch(getPokemonByName(searchValue));
      }
    }
  }, [searchValue, dispatch]);
  
  

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleClearInput = () => {
    setSearchValue(''); // Limpiar el valor del input
  };

  return (
    <div className={styles.containerHome}>
      <input
        type="text"
        placeholder="Ingrese el ID o nombre del Pokémon"
        value={searchValue}
        onChange={handleInputChange}
        className={styles.input}
      />
      <button onClick={handleClearInput} className={styles.btn}>Limpiar</button> {/* Botón para limpiar el input */}
      <CardsContainer pokemonData={pokemonData} className={styles.card}/>
    </div>
  );
}

export default Home;
