const { 
    createPokemon, 
    getPokemonById, 
    searchPokemonByName, 
    getAllPokemon 
} = require("../controllers/pokemonsController")




/* Get/pokemon -----> Trae todos los pokemons
Obtener un listado de los pokemons desde pokeapi.
- Debe devolver solo los datos necesarios para la ruta principal*/
const getPokemonsHandler = async (req, res) => {
    const { name } = req.query;
    let results;

    if (name) {
        results = await searchPokemonByName(name);

        if (!results) {
            res.status(404).json({ message: 'Pokemon not found' });
            return; // Importante detener la ejecución aquí si el Pokémon no se encuentra
        }
    } else {
        results = await getAllPokemon();
    }

    res.status(200).json(results);
};

// Get/pokemon/:{id}
const getPokemonHandler = async (req,res) => {
    const { id } = req.params;
    const source = isNaN(id) ? "bd" : "api";

    try {
        const pokemon = await getPokemonById(id, source);
        res.status(200).json(pokemon)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// Post/pokemon
const createPokemonHandler = async (req,res) => {
    const {name, hit_points, attack, defense, speed, height, weight, img} = req.body;
    try {
        const newPokemon = await createPokemon(name, hit_points, attack, defense, speed, height, weight, img)
        res.status(201).json(newPokemon);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


module.exports = {
    getPokemonHandler,
    getPokemonsHandler,
    createPokemonHandler
}
