const axios = require("axios");

/*La función fetchData es una función que hace una solicitud GET a una URL específica utilizando Axios y devuelve la respuesta de los datos. Esta función es útil porque se utiliza en la función getAllPokemon para obtener los datos de la API de Pokémon. En lugar de repetir el mismo código en varias partes del programa, la función fetchData se define una vez y se reutiliza varias veces en el programa para realizar solicitudes HTTP a diferentes URL. Esto hace que el código sea más modular, legible y fácil de mantener. */
const fetchData = async (url) => {
    const response = await axios.get(url);
    return response.data;
};

module.exports = { fetchData }