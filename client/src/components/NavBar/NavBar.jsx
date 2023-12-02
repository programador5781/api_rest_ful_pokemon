import { Link, useLocation } from "react-router-dom";
import React from "react";
import styles from "./NavBar.module.css"; // Importa los estilos
// import { Icon } from '@iconify/react';



function NavBar () {
    const location = useLocation();

    // Condición para mostrar la barra de navegación
    if (location.pathname === "/") {
        return null; // No mostrar la barra de navegación en la página Landing
    }
    return (
        <div className={styles.navbar}> 
            <Link to="/home">HOME</Link>
            {/* <Icon icon="ic:baseline-catching-pokemon" className={styles.pokemonIcon} /> */}
            <Link to="/create">FORM</Link>
        </div>
    )
}

export default NavBar;