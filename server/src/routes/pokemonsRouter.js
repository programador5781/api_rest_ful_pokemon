// Importo el módulo `Router` de la librería `express` y las funciones `getPokemonHandler`, `getPokemonsHandler` y `createPokemonHandler` del archivo `../handlers/pokemonHandler.js`.
const { Router } = require("express");
const {
    getPokemonHandler,
    getPokemonsHandler,
    createPokemonHandler
} = require("../handlers/pokemonsHandler")

//Creo una instancia de `Router` llamada `pokemonRouter`.
const pokemonRouter = Router();


//Defino tres rutas:
// 1. La primera ruta es una solicitud `GET` a la ruta raíz `/`. Cuando se hace una solicitud a esta ruta, se invoca la función `getPokemonsHandler`.
// 2. La segunda ruta es una solicitud `GET` con un parámetro de ruta `id`. Cuando se hace una solicitud a esta ruta, se invoca la función `getPokemonHandler`.
// 3. La tercera ruta es una solicitud `POST` a la ruta raíz `/`. Cuando se hace una solicitud a esta ruta, se invoca la función `createPokemonHandler`.
pokemonRouter.get("/", getPokemonsHandler);
pokemonRouter.get("/:id", getPokemonHandler);
pokemonRouter.post("/", createPokemonHandler);


//Se exporta `pokemonRouter` como un módulo para que se pueda importar y usar en otras partes de la aplicación.
module.exports = pokemonRouter;