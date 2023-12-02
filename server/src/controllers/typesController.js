const axios = require("axios");
const { Type } = require("../db");

const getAllPokemonTypes = async () => {
  try {
    const response = await axios.get("https://pokeapi.co/api/v2/type");
    return response.data.results.map((typeData) => ({
      name: typeData.name,
    }));
  } catch (error) {
    throw new Error("Error al obtener los tipos de Pokémon desde la API");
  }
};

const savePokemonTypesToDB = async () => {
  try {
    const types = await getAllPokemonTypes();
    await Type.bulkCreate(types);
    console.log("Tipos de Pokémon guardados en la base de datos");
  } catch (error) {
    throw new Error("Error al guardar los tipos de Pokémon en la base de datos");
  }
};

module.exports = {
  getAllPokemonTypes,
  savePokemonTypesToDB,
};
