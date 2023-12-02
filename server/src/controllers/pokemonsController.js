const axios = require("axios");
const { Pokemon, Type } = require("../db");
const { fetchData } = require("./apiService")
const { API_URL } = process.env



// Get - obtener pokemon por id
const getPokemonById = async (id, source) => {
    let pokemon;

    if (source === "api") {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        pokemon = {
            name: response.data.name,
            id: response.data.id,
            types: response.data.types.map(type => ({
                name: type.type.name,
                id: type.type.url.split('/').slice(-2)[0]
            })),
            img: response.data.sprites.other["official-artwork"].front_default,
            hit_points: response.data.stats[0].base_stat,
            attack: response.data.stats[1].base_stat,
            defense: response.data.stats[2].base_stat,
            speed: response.data.stats[5].base_stat,
            height: response.data.height,
            weight: response.data.weight,
            created: false
        };
    } else {
        pokemon = await Pokemon.findOne({
            where: { id },
            include: { model: Type }
        });
    }
    return pokemon;
};


// Get - Obtener todos los pokemones.
const getAllPokemon = async () => {
    // Obtenemos los datos de la base de datos
    const databasePokemon = await Pokemon.findAll();

    /*Obtenemos los datos de la API, Para obtener 100 Pokemones, hacemos uso del parámetro limit en la URL de la API y lo establecemos en 100. Además, como la API solo devuelve 20 Pokemones por página, hacemos uso del parámetro offset para especificar a partir de qué registro deseo obtener los datos.*/
    const pokemonApiUrl = "https://pokeapi.co/api/v2/pokemon?limit=122&offset=0";
    const pokemonApiResponse = await fetchData(pokemonApiUrl);
    const pokemonApiResults = pokemonApiResponse.results;
    const pokemonApiData = await Promise.all(pokemonApiResults.map(result => fetchData(result.url)));

    // Formatear los datos de la API
    const formattedPokemonData = pokemonApiData.map(data => ({
        name: data.name,
        id: data.id,
        types: data.types.map(type => ({
            name: type.type.name,
            id: type.slot
        })),
        img: data.sprites.other.home.front_default,
        hit_points: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        speed: data.stats[5].base_stat,
        height: data.height,
        weight: data.weight,
        created: false
    }));

    // Combinamos los datos de la base de datos y la API
    return [...databasePokemon, ...formattedPokemonData];
}


// Get - Obtenemos un pokemon por su nombre.
// const searchPokemonByName = async (name) => {
//     try {
//         const apiPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
           

//         const pokemonData = {
//             name: apiPokemon.data.name,
//             id: apiPokemon.data.id,
//             types: apiPokemon.data.types.map(type => ({
//                 name: type.type.name,
//                 id: type.slot
//             })),
//             img: apiPokemon.data.sprites.other["official-artwork"].front_default,
//             hit_points: apiPokemon.data.stats[0].base_stat,
//             attack: apiPokemon.data.stats[1].base_stat,
//             defense: apiPokemon.data.stats[2].base_stat,
//             speed: apiPokemon.data.stats[5].base_stat,
//             height: apiPokemon.data.height,
//             weight: apiPokemon.data.weight,
//             created: false
//         };
// // console.log(`Esto es pokemonData ${pokemonData}`);
//         return pokemonData;
//     } catch (error) {
//         console.error(error);
//         return null; // Si hay un error en la llamada a la API, retorna null
//     }
// };
const searchPokemonByName = async (name) => {
    try {
        const apiPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        
        let img = apiPokemon.data.sprites.other["official-artwork"].front_default;
        if (!img) {
            // Si la imagen no está disponible, asignar una imagen por defecto
            img = "https://i.postimg.cc/fTrHn606/cat-Pokemon.png"; // Reemplaza 'URL_DE_IMAGEN_POR_DEFECTO' por la URL de tu imagen predeterminada
        }

        const pokemonData = {
            name: apiPokemon.data.name,
            id: apiPokemon.data.id,
            types: apiPokemon.data.types.map(type => ({
                name: type.type.name,
                id: type.slot
            })),
            img: img, // Usar la imagen obtenida o la imagen por defecto
            hit_points: apiPokemon.data.stats[0].base_stat,
            attack: apiPokemon.data.stats[1].base_stat,
            defense: apiPokemon.data.stats[2].base_stat,
            speed: apiPokemon.data.stats[5].base_stat,
            height: apiPokemon.data.height,
            weight: apiPokemon.data.weight,
            created: false
        };

        return pokemonData;
    } catch (error) {
        console.error(error);
        return null; // Si hay un error en la llamada a la API, retorna null
    }
};

// Post - create a Pokemon
const createPokemon = async (name, hit_points, attack, defense, speed, height, weight, img) => {
    // Si no se proporciona una imagen, asignar una imagen por defecto
    if (!img) {
        img = "https://i.postimg.cc/fTrHn606/cat-Pokemon.png"; // URL de la imagen predeterminada
    }

    const newPokemon = await Pokemon.create({ name, hit_points, attack, defense, speed, height, weight, img });
    return newPokemon;
}


module.exports = {
    createPokemon,
    getPokemonById,
    getAllPokemon,
    searchPokemonByName,
}


