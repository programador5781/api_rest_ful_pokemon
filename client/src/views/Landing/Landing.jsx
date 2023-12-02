import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Landing.module.css';

function Landing() {
  return (
    <div className={styles['landing-container']}>
      <div className={styles['landing-text']}>
        <h1>Pokemon</h1>
        <p>
          La aventura comienza! 
        </p>
        {/* Botón para ir a Home */}
        <Link to="/home">
          <button className={styles['btn']}>Entrar</button>
        </Link>
      </div>
      <div className={styles['pokemon-image']}>
        {/* Imagen del Pokémon */}
        <img
          src="catPokemon.png"
          alt="Imagen del Pokémon"
        />
      </div>
    </div>
  );
}

export default Landing;
