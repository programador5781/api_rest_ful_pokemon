// import React from "react";
// import styles from "./Card.module.css"; // Importa el módulo de estilos de Card

// function Card(props) {
//   return (
//     <div className={styles.card}> {/* Utiliza "styles" para las clases */}
//       <p>Name: {props.name}</p>
//       <p>ID: {props.id}</p>
//       <img src={props.img} alt={props.name} className={styles.cardImage} /> {/* Utiliza "styles" para las clases de imagen */}
//     </div>
//   );
// }

// export default Card;

import React from 'react';


function Card(props) {
  return (
    <div className={props.styles.card}>
      <img src={props.img} alt={props.name} className={props.styles.cardImage} />
      <p>Name: {props.name}</p>
      <p>ID: {props.id}</p>
    </div>
  );
}

export default Card;
