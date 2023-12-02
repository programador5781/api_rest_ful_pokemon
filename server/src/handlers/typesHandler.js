const { Type } = require("../db");
const { getAllPokemonTypes, savePokemonTypesToDB } = require("../controllers/typesController");

/*GET /type__:
  - Obtener todos los tipos de pokemons posibles
  - En una primera instancia traemos desde pokeapi y guardamos en nuestra propia base de datos y luego ya los utilizamos desde allí */

const getTypeHandler = async (req, res) => {
  try {
    // Verificar si los tipos ya están en la base de datos
    const allTypes = await Type.findAll();
    if (allTypes.length === 0) {
      await savePokemonTypesToDB(); // Si no están en la base de datos, obtener de la API y guardar
    }

    // Obtener los tipos desde la base de datos y enviarlos como respuesta
    const typesFromDB = await Type.findAll();
    res.status(200).json(typesFromDB);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getTypeHandler,
};
