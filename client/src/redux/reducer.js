// import { GET_POKEMONS, GET_POKEMON_ID, GET_POKEMON_NAME } from "./actions";

// // Estado global
// const initialState = {
//     pokemonList: [],
//     searchedPokemon: null,
// }

// const rootReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case GET_POKEMONS:
//             return { ...state, pokemonList: action.payload };

//         case GET_POKEMON_NAME:
//             return { ...state, pokemonName: action.payload };

//         case GET_POKEMON_ID:
//             return { ...state, searchedPokemon: action.payload };
//         default:
//             return { ...state }
//     }
// }

// export default rootReducer;

// La discrepancia entre el estado global (initialState) en navegadores como Brave muestra "undefined", mientras que en Chrome se muestra correctamente como "pokemon: [].


import { GET_POKEMONS, GET_POKEMON_ID, GET_POKEMON_NAME } from "./actions";

const initialState = {
    pokemonList: [],
    searchedPokemon: null,
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMONS:
            return { ...state, pokemonList: action.payload };

        case GET_POKEMON_NAME:
            return { ...state, searchedPokemon: action.payload }; // Cambio de pokemonName a searchedPokemon

        case GET_POKEMON_ID:
            return { ...state, searchedPokemon: action.payload };
        
        default:
            return state; // Devuelve el estado por defecto
    }
}

export default rootReducer;
