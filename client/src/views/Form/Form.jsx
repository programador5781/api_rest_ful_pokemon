import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import style from "./form.module.css";
import { getPokemons } from "../../redux/actions";

function Form() {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    name: "",
    hit_points: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
  });

  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/pokemon", data);
      dispatch(getPokemons());
      setData({
        name: "",
        hit_points: 0,
        attack: 0,
        defense: 0,
        speed: 0,
        height: 0,
        weight: 0,
      });
    } catch (error) {
      console.error("Error al crear el Pokémon:", error);
    }
  };

  return (
    <div className={style.containerCreate}>
      <form className={style.form} onSubmit={submit}>
        <div className={style.separado}>
          <h1 className={style.title}>Crea tu propio Pokémon</h1>
          <label className={style.label}>Nombre:</label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            className={style.input}
          />
          <label className={style.label}>Puntos de vida:</label>
          <input
            type="number"
            name="hit_points"
            value={data.hit_points}
            onChange={(e) => setData({ ...data, hit_points: e.target.value })}
            className={style.input}
          />
          <label className={style.label}>Ataque:</label>
          <input
            type="number"
            name="attack"
            value={data.attack}
            onChange={(e) => setData({ ...data, attack: e.target.value })}
            className={style.input}
          />
          <label className={style.label}>Defensa:</label>
          <input
            type="number"
            name="defense"
            value={data.defense}
            onChange={(e) => setData({ ...data, defense: e.target.value })}
            className={style.input}
          />
          <label className={style.label}>Velocidad:</label>
          <input
            type="number"
            name="speed"
            value={data.speed}
            onChange={(e) => setData({ ...data, speed: e.target.value })}
            className={style.input}
          />
          <label className={style.label}>Altura:</label>
          <input
            type="number"
            name="height"
            value={data.height}
            onChange={(e) => setData({ ...data, height: e.target.value })}
            className={style.input}
          />
          <label className={style.label}>Peso:</label>
          <input
            type="number"
            name="weight"
            value={data.weight}
            onChange={(e) => setData({ ...data, weight: e.target.value })}
            className={style.input}
          />
        </div>

        <div className={style.hiddenCB}>
          <h1 className={style.title}>Tipos</h1>
          <div className={style.tipos}>
            {/* Opciones de tipos con sus respectivos estilos */}
            <input type="submit" value="Crear" className={style.submit} />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
