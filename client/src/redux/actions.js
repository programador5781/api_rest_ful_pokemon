import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMON_NAME = "GET_POKEMON_NAME"; 
export const GET_POKEMON_ID = "GET_POKEMON_ID";


// Get all pokemons
export const getPokemons = () => {
    return async function (dispatch) {
        // const apiData = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=120&offset=0");
        const apiData = await axios.get("http://localhost:3001/pokemon");

        const pokemonList = apiData.data;
        dispatch({type: GET_POKEMONS, payload: pokemonList})
    }

};


// Get - pokemon by name
export const getPokemonByName = (name) => {
    return async function (dispatch) {
        try {
            // const apiData = await axios.get(`http://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`); // Convertir el nombre a minúsculas
            const apiData = await axios.get(`http://localhost:3001/pokemon?name=${name.toLowerCase()}`)

            const searchedPokemon = apiData.data;
           
            dispatch({ type: GET_POKEMON_NAME, payload: searchedPokemon });
        } catch (error) {
            console.error("Error al buscar por nombre:", error);
            // Aquí puedes despachar otra acción en caso de error, por ejemplo: dispatch({ type: SEARCH_ERROR, payload: error });
            
        }
    };
};

// Get pokemon by id
export const getPokemon_id = (id) =>{
    return async function (dispatch) {
        // const apiData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const apiData = await axios.get(`http://localhost:3001/pokemon/${id}`);

        const searchedPokemon = apiData.data;
        dispatch({type: GET_POKEMON_ID, payload: searchedPokemon})
    }
};



